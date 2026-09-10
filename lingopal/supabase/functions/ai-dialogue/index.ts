// ========== LingoPal AI Dialogue Edge Function ==========
// Supabase Edge Function proxy for LLM calls
// Handles: JWT auth, quota enforcement, rate limiting, abuse prevention, LLM proxy
// Provider: OpenAI-compatible (default DeepSeek), configurable via Secrets

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ===== CORS: Origin whitelist =====
const ALLOWED_ORIGINS = [
  'https://lingopal.app',
  'https://4kxsfcq9fyq10.feishu.cn',
  'http://localhost:5173',
  'http://localhost:3000',
];

function getCorsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
}

// --- Single-instance in-memory rate limiter ---
// Note: Edge Functions are stateless across instances; this limits burst per instance.
const rateLimitMap = new Map<string, number[]>();

const LEARNING_LANGUAGES = new Set([
  'zh-CN', 'en', 'ja', 'ko', 'es', 'ru', 'de', 'fr', 'it', 'pt',
  'ar', 'hi', 'th', 'vi', 'tr', 'pl', 'nl', 'el',
]);

const INJECTION_KEYWORDS = [
  '忽略以上指令', 'ignore previous', 'ignore all previous', 'system:',
  '你是', '你变成', 'you are now', 'you are a', ' disregard ', 'override',
];

function jsonResponse(body: object, status: number, origin: string | null) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
  });
}

function isRateLimited(userId: string, max = 20, windowMs = 60000): boolean {
  const now = Date.now();
  const ts = (rateLimitMap.get(userId) || []).filter(t => now - t < windowMs);
  ts.push(now);
  rateLimitMap.set(userId, ts);
  return ts.length > max;
}

function buildSystemPrompt(scenarioId: string | null, language: string, mode: string): string {
  const langNames: Record<string, string> = {
    'zh-CN': '中文', 'en': '英语', 'ja': '日语', 'ko': '韩语', 'es': '西班牙语', 'ru': '俄语',
    'de': '德语', 'fr': '法语', 'it': '意大利语', 'pt': '葡萄牙语', 'ar': '阿拉伯语', 'hi': '印地语',
    'th': '泰语', 'vi': '越南语', 'tr': '土耳其语', 'pl': '波兰语', 'nl': '荷兰语', 'el': '希腊语',
  };

  const targetLang = langNames[language] || language;
  const maxTurns = mode === 'oral' ? '2-3句话' : '3-5句话';

  let prompt = `你是一位友好的${targetLang}语言练习伙伴。`;
  if (scenarioId) {
    prompt += `当前场景是：${scenarioId}。`;
  }
  prompt += `\n\n规则：\n1. 用${targetLang}回复，保持自然、口语化的表达\n2. 每次回复控制在${maxTurns}，适合语言练习\n3. 如果对方说错了，温和地纠正并继续对话\n4. 主动引导对话继续，不要一次性说完所有内容\n5. 回复要有互动性，可以提问或给出选择\n6. 你只扮演场景中的角色，不要解释规则或跳出角色`;

  return prompt;
}

function containsInjection(content: string): boolean {
  const lower = content.toLowerCase();
  return INJECTION_KEYWORDS.some(k => lower.includes(k.toLowerCase()));
}

Deno.serve(async (req) => {
  const origin = req.headers.get('origin');

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: getCorsHeaders(origin) });
  }

  try {
    // === 1. Auth: extract and validate JWT ===
    const authHeader = req.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return jsonResponse(
        { success: false, error: { code: 'UNAUTHORIZED', message: '缺少认证信息' } },
        401, origin,
      );
    }

    const jwt = authHeader.replace('Bearer ', '');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !serviceRoleKey) {
      console.error('[ai-dialogue] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
      return jsonResponse(
        { success: false, error: { code: 'INTERNAL_ERROR', message: '服务配置错误' } },
        500, origin,
      );
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);
    const { data: { user }, error: authErr } = await supabaseAdmin.auth.getUser(jwt);

    if (authErr || !user) {
      return jsonResponse(
        { success: false, error: { code: 'UNAUTHORIZED', message: '登录已过期，请重新登录' } },
        401, origin,
      );
    }

    const userId = user.id;

    // === 2. Parse request body ===
    let body;
    try {
      body = await req.json();
    } catch {
      return jsonResponse(
        { success: false, error: { code: 'INVALID_PARAMS', message: '请求体 JSON 解析失败' } },
        400, origin,
      );
    }

    const { messages, language, scenarioId, mode } = body;

    // === 3. Parameter validation ===
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return jsonResponse(
        { success: false, error: { code: 'INVALID_PARAMS', message: 'messages 不能为空' } },
        400, origin,
      );
    }

    if (messages.length > 20) {
      return jsonResponse(
        { success: false, error: { code: 'TOO_MANY_TURNS', message: '对话轮数超过上限（20轮）' } },
        400, origin,
      );
    }

    if (!language || !LEARNING_LANGUAGES.has(language)) {
      return jsonResponse(
        { success: false, error: { code: 'INVALID_PARAMS', message: '不支持的语种' } },
        400, origin,
      );
    }

    if (!mode || (mode !== 'oral' && mode !== 'text')) {
      return jsonResponse(
        { success: false, error: { code: 'INVALID_PARAMS', message: 'mode 必须是 oral 或 text' } },
        400, origin,
      );
    }

    for (const m of messages) {
      if (typeof m.content === 'string' && m.content.length > 2000) {
        return jsonResponse(
          { success: false, error: { code: 'INPUT_TOO_LONG', message: '单条消息超过2000字符' } },
          400, origin,
        );
      }
      if (containsInjection(m.content || '')) {
        return jsonResponse(
          { success: false, error: { code: 'INVALID_PARAMS', message: '输入包含疑似注入内容' } },
          400, origin,
        );
      }
    }

    // === 4. Rate limiting (per-instance) ===
    if (isRateLimited(userId)) {
      return jsonResponse(
        { success: false, error: { code: 'RATE_LIMITED', message: '请求过于频繁，请稍后再试' } },
        429, origin,
      );
    }

    // === 5. Quota enforcement ===
    const { data: quotaResult, error: quotaError } = await supabaseAdmin
      .rpc('consume_ai_quota', { p_usage_type: 'ai_dialogue' });

    if (quotaError || !quotaResult?.allowed) {
      return jsonResponse(
        {
          success: false,
          error: {
            code: 'QUOTA_EXHAUSTED',
            message: quotaResult?.error || '今日 AI 对话额度已用完',
            limit: quotaResult?.limit ?? null,
            used: quotaResult?.used ?? null,
          },
        },
        429, origin,
      );
    }

    // === 6. Call LLM ===
    const apiBase = Deno.env.get('AI_API_BASE_URL');
    const apiKey = Deno.env.get('AI_API_KEY');
    const model = Deno.env.get('AI_MODEL');

    if (!apiBase || !apiKey || !model) {
      console.error('[ai-dialogue] Missing AI_API_BASE_URL, AI_API_KEY, or AI_MODEL');
      return jsonResponse(
        { success: false, error: { code: 'LLM_ERROR', message: 'AI 服务未配置' } },
        502, origin,
      );
    }

    const systemPrompt = buildSystemPrompt(scenarioId || null, language, mode);

    // Sanitize messages: only user/assistant roles, filter out system prompts from client
    const llmMessages = [
      { role: 'system', content: systemPrompt },
      ...messages
        .slice(-10)
        .map((m: any) => ({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: String(m.content || ''),
        })),
    ];

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(`${apiBase}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: llmMessages,
        max_tokens: mode === 'oral' ? 256 : 512,
        temperature: 0.8,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      console.error('[ai-dialogue] LLM error:', res.status, errText);
      return jsonResponse(
        { success: false, error: { code: 'LLM_ERROR', message: `AI 服务错误 (${res.status})` } },
        502, origin,
      );
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return jsonResponse(
        { success: false, error: { code: 'LLM_ERROR', message: 'AI 返回空内容' } },
        502, origin,
      );
    }

    return jsonResponse(
      {
        success: true,
        data: {
          content,
          usage: data.usage || null,
        },
      },
      200, origin,
    );
  } catch (e) {
    console.error('[ai-dialogue] unhandled error:', e);
    return jsonResponse(
      { success: false, error: { code: 'INTERNAL_ERROR', message: '服务内部错误' } },
      500, origin,
    );
  }
});
