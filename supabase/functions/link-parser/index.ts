// ========== LingoPal Link Parser Edge Function ==========
// Parses video/music links and generates learning materials
// Supports: YouTube, Bilibili, Spotify, LRCLIB
// Outputs: bilingual segments + explanations + quiz

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

function jsonResponse(body: object, status: number, origin: string | null) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
  });
}

function problemResponse(type: string, title: string, status: number, detail: string, origin: string | null, fallback?: object) {
  return jsonResponse({
    type: `https://lingopal.app/errors/${type}`,
    title,
    status,
    detail,
    ...(fallback ? { fallback } : {}),
  }, status, origin);
}

// ===== Structured Logging =====
const DEBUG = Deno.env.get('DEBUG') === 'true';
function logInfo(msg: string, meta?: Record<string, unknown>) {
  console.log(JSON.stringify({ level: 'INFO', ts: new Date().toISOString(), msg, ...meta }));
}
function logWarn(msg: string, meta?: Record<string, unknown>) {
  console.log(JSON.stringify({ level: 'WARN', ts: new Date().toISOString(), msg, ...meta }));
}
function logError(msg: string, meta?: Record<string, unknown>) {
  console.log(JSON.stringify({ level: 'ERROR', ts: new Date().toISOString(), msg, ...meta }));
  if (DEBUG && meta?.error) {
    console.error('[DEBUG]', meta.error);
  }
}

// ===== URL Detection =====
function detectPlatform(url: string): { platform: string; typeHint: string; id: string | null } {
  const u = url.trim();
  // YouTube
  const ytMatch = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return { platform: 'youtube', typeHint: 'video', id: ytMatch[1] };
  // Bilibili
  const bvMatch = u.match(/bilibili\.com\/video\/(BV[\w]+)/);
  if (bvMatch) return { platform: 'bilibili', typeHint: 'video', id: bvMatch[1] };
  const bvidMatch = u.match(/b23\.tv\/(BV[\w]+)/);
  if (bvidMatch) return { platform: 'bilibili', typeHint: 'video', id: bvidMatch[1] };
  // Spotify
  const spMatch = u.match(/open\.spotify\.com\/(track|album)\/([a-zA-Z0-9]+)/);
  if (spMatch) return { platform: 'spotify', typeHint: 'music', id: spMatch[2] };
  // Apple Music
  const amMatch = u.match(/music\.apple\.com\/.+\/(song|album)\/.+\/(\d+)/);
  if (amMatch) return { platform: 'apple_music', typeHint: 'music', id: amMatch[2] };
  // LRCLIB direct
  const lrclibMatch = u.match(/lrclib\.net\/api\/get\?/);
  if (lrclibMatch) return { platform: 'lrclib', typeHint: 'music', id: null };
  return { platform: 'unknown', typeHint: 'unknown', id: null };
}

// ===== SSRF: Subtitle URL domain whitelist =====
const ALLOWED_SUBTITLE_DOMAINS = [
  'googlevideo.com',
  'youtube.com',
  'ytimg.com',
  'bilibili.com',
  'hdslb.com',
];

function isAllowedSubtitleUrl(url: string): boolean {
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    return ALLOWED_SUBTITLE_DOMAINS.some(d => hostname === d || hostname.endsWith('.' + d));
  } catch {
    return false;
  }
}

// ===== YouTube: oEmbed metadata =====
async function fetchYouTubeMetadata(videoId: string) {
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LingoPal/1.0)' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      title: data.title || 'Untitled Video',
      author: data.author_name || 'Unknown',
      thumbnail_url: data.thumbnail_url || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    };
  } catch (e) {
    logError('YouTube oEmbed failed', { error: String(e) });
    return null;
  }
}

// ===== YouTube: timedtext subtitle extraction =====
async function fetchYouTubeSubtitles(videoId: string) {
  try {
    const watchRes = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    });
    if (!watchRes.ok) return { available: false, reason: 'extraction-failed' };
    const html = await watchRes.text();

    const playerMatch = html.match(/ytInitialPlayerResponse\s*=\s*({.+?});\s*<\/script>/);
    if (!playerMatch) return { available: false, reason: 'extraction-failed' };

    let playerData;
    try {
      playerData = JSON.parse(playerMatch[1]);
    } catch {
      return { available: false, reason: 'extraction-failed' };
    }

    const captions = playerData?.captions?.captionTracks;
    if (!captions || captions.length === 0) {
      return { available: false, reason: 'no-subtitles' };
    }

    const preferred = captions.find((c: any) => c.languageCode === 'en') ||
                      captions.find((c: any) => c.languageCode?.startsWith('en')) ||
                      captions[0];

    if (!preferred?.baseUrl) return { available: false, reason: 'no-subtitles' };

    // SSRF check
    if (!isAllowedSubtitleUrl(preferred.baseUrl)) {
      logWarn('YouTube subtitle URL rejected by whitelist', { url: preferred.baseUrl });
      return { available: false, reason: 'extraction-failed' };
    }

    const subRes = await fetch(preferred.baseUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    });
    if (!subRes.ok) return { available: false, reason: 'extraction-failed' };

    const subXml = await subRes.text();
    const segments: Array<{ start: number; end: number; text: string }> = [];
    const textMatches = subXml.matchAll(/<text[^>]*start="([\d.]+)"[^>]*dur="([\d.]+)"[^>]*>([^<]*)<\/text>/g);
    for (const m of textMatches) {
      segments.push({
        start: parseFloat(m[1]),
        end: parseFloat(m[1]) + parseFloat(m[2]),
        text: decodeXmlEntities(m[3]),
      });
    }

    if (segments.length === 0) {
      const altMatches = subXml.matchAll(/<text[^>]*start="([\d.]+)"[^>]*>([^<]*)<\/text>/g);
      for (const m of altMatches) {
        const start = parseFloat(m[1]);
        const text = decodeXmlEntities(m[2]);
        segments.push({ start, end: start + Math.max(2, text.length * 0.3), text });
      }
    }

    if (segments.length === 0) return { available: false, reason: 'extraction-failed' };

    return { available: true, language: preferred.languageCode || 'en', segments };
  } catch (e) {
    logError('YouTube subtitle extraction failed', { error: String(e) });
    return { available: false, reason: 'extraction-failed' };
  }
}

function decodeXmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

// ===== Bilibili: metadata =====
async function fetchBilibiliMetadata(bvid: string) {
  try {
    const res = await fetch(`https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'Referer': 'https://www.bilibili.com' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data?.code !== 0) return null;
    const info = data.data;
    return {
      title: info.title || 'Untitled Video',
      author: info.owner?.name || 'Unknown',
      duration: info.duration || 0,
      thumbnail_url: info.pic || '',
      cid: info.cid,
    };
  } catch (e) {
    logError('Bilibili metadata failed', { error: String(e) });
    return null;
  }
}

// ===== Bilibili: subtitles =====
async function fetchBilibiliSubtitles(bvid: string, cid: number) {
  try {
    const res = await fetch(`https://api.bilibili.com/x/player/wbi/v2?cid=${cid}&bvid=${bvid}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.bilibili.com',
      },
    });
    if (!res.ok) return { available: false, reason: 'extraction-failed' };
    const data = await res.json();
    if (data?.code !== 0) return { available: false, reason: 'extraction-failed' };

    const subtitles = data.data?.subtitle?.subtitles;
    if (!subtitles || subtitles.length === 0) {
      return { available: false, reason: 'no-subtitles' };
    }

    const preferred = subtitles.find((s: any) => s.lan?.includes('zh')) ||
                      subtitles.find((s: any) => s.lan?.includes('en')) ||
                      subtitles[0];

    if (!preferred?.subtitle_url) return { available: false, reason: 'no-subtitles' };

    // SSRF check
    if (!isAllowedSubtitleUrl(preferred.subtitle_url)) {
      logWarn('Bilibili subtitle URL rejected by whitelist', { url: preferred.subtitle_url });
      return { available: false, reason: 'extraction-failed' };
    }

    const subRes = await fetch(preferred.subtitle_url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    });
    if (!subRes.ok) return { available: false, reason: 'extraction-failed' };

    const subData = await subRes.json();
    const body = subData.body || [];
    const segments = body.map((item: any) => ({
      start: item.from || 0,
      end: item.to || 0,
      text: item.content || '',
    })).filter((s: any) => s.text);

    if (segments.length === 0) return { available: false, reason: 'extraction-failed' };

    return { available: true, language: preferred.lan || 'zh', segments };
  } catch (e) {
    logError('Bilibili subtitle extraction failed', { error: String(e) });
    return { available: false, reason: 'extraction-failed' };
  }
}

// ===== Spotify: metadata =====
async function fetchSpotifyMetadata(trackId: string) {
  try {
    const clientId = Deno.env.get('SPOTIFY_CLIENT_ID');
    const clientSecret = Deno.env.get('SPOTIFY_CLIENT_SECRET');
    if (!clientId || !clientSecret) return null;

    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
      body: 'grant_type=client_credentials',
    });
    if (!tokenRes.ok) return null;
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    const trackRes = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
      headers: { 'Authorization': `Bearer ${accessToken}` },
    });
    if (!trackRes.ok) return null;
    const track = await trackRes.json();

    return {
      title: track.name || 'Untitled Track',
      artist: track.artists?.map((a: any) => a.name).join(', ') || 'Unknown Artist',
      album: track.album?.name || '',
      duration: Math.round((track.duration_ms || 0) / 1000),
      thumbnail_url: track.album?.images?.[0]?.url || '',
    };
  } catch (e) {
    logError('Spotify metadata failed', { error: String(e) });
    return null;
  }
}

// ===== LRCLIB: lyrics =====
async function fetchLRCLIBLyrics(title: string, artist: string) {
  try {
    const query = new URLSearchParams({ track_name: title, artist_name: artist });
    const res = await fetch(`https://lrclib.net/api/get?${query.toString()}`, {
      headers: { 'User-Agent': 'LingoPal/1.0' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data?.plainLyrics && !data?.syncedLyrics) return null;

    const raw = data.plainLyrics || data.syncedLyrics;
    const lines = raw.split('\n').filter((l: string) => l.trim());

    const segments: Array<{ start: number; end: number; text: string }> = [];
    const lrcRegex = /^\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\](.*)$/;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const match = line.match(lrcRegex);
      if (match) {
        const min = parseInt(match[1], 10);
        const sec = parseInt(match[2], 10);
        const ms = match[3] ? parseInt(match[3].padEnd(3, '0'), 10) : 0;
        const start = min * 60 + sec + ms / 1000;
        let end = start + 3;
        if (i + 1 < lines.length) {
          const nextMatch = lines[i + 1].match(lrcRegex);
          if (nextMatch) {
            const nMin = parseInt(nextMatch[1], 10);
            const nSec = parseInt(nextMatch[2], 10);
            const nMs = nextMatch[3] ? parseInt(nextMatch[3].padEnd(3, '0'), 10) : 0;
            end = nMin * 60 + nSec + nMs / 1000;
          }
        }
        segments.push({ start, end, text: match[4].trim() });
      } else if (line.trim()) {
        segments.push({ start: i * 3, end: (i + 1) * 3, text: line.trim() });
      }
    }

    if (segments.length === 0) {
      lines.forEach((line: string, i: number) => {
        if (line.trim()) segments.push({ start: i * 3, end: (i + 1) * 3, text: line.trim() });
      });
    }

    return { available: true, language: data.language || 'en', segments };
  } catch (e) {
    logError('LRCLIB fetch failed', { error: String(e) });
    return null;
  }
}

// ===== DeepSeek: batch translation + explanation (with timeout) =====
async function translateAndExplain(segments: Array<{ text: string }>, targetLang: string, apiBase: string, apiKey: string, model: string) {
  const texts = segments.map(s => s.text);
  const prompt = `You are a language learning assistant. Translate the following text segments into ${targetLang}, and provide vocabulary/grammar explanations for key words.

Return a JSON array where each item has:
- "translated_text": the translation
- "explanation": a brief explanation of key vocabulary or grammar (in ${targetLang})
- "keywords": array of important vocabulary words from the original text

Input segments:
${texts.map((t, i) => `[${i}] ${t}`).join('\n')}

Return ONLY valid JSON array, no markdown, no explanation.`;

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
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 2048,
      temperature: 0.3,
    }),
    signal: controller.signal,
  });

  clearTimeout(timeoutId);

  if (!res.ok) throw new Error(`Translation API error: ${res.status}`);
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content?.trim() || '';

  let jsonStr = content;
  const codeBlockMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (codeBlockMatch) jsonStr = codeBlockMatch[1];

  let results;
  try {
    results = JSON.parse(jsonStr);
  } catch {
    const arrayMatch = content.match(/\[[\s\S]*\]/);
    if (arrayMatch) results = JSON.parse(arrayMatch[0]);
    else throw new Error('Failed to parse translation response');
  }

  if (!Array.isArray(results)) throw new Error('Translation response is not an array');

  return results.map((r: any, i: number) => ({
    translated_text: r.translated_text || r.translatedText || '',
    explanation: r.explanation || '',
    keywords: Array.isArray(r.keywords) ? r.keywords : [],
  }));
}

// ===== DeepSeek: quiz generation (with timeout) =====
async function generateQuiz(segments: Array<{ text: string; translated_text?: string }>, targetLang: string, apiBase: string, apiKey: string, model: string) {
  const sampleTexts = segments.slice(0, 10).map(s => s.text);
  const prompt = `Based on the following text segments, create 3-5 fill-in-the-blank or multiple choice questions for language learning.

Return a JSON array where each item has:
- "type": "fill_blank" or "choice"
- "question": the question text (with ____ for blanks)
- "options": array of 4 options (for choice questions, include correct answer)
- "answer": the correct answer
- "explanation": brief explanation

Text segments:
${sampleTexts.join('\n')}

Return ONLY valid JSON array, no markdown.`;

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
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1024,
      temperature: 0.5,
    }),
    signal: controller.signal,
  });

  clearTimeout(timeoutId);

  if (!res.ok) throw new Error(`Quiz API error: ${res.status}`);
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content?.trim() || '';

  let jsonStr = content;
  const codeBlockMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (codeBlockMatch) jsonStr = codeBlockMatch[1];

  let results;
  try {
    results = JSON.parse(jsonStr);
  } catch {
    const arrayMatch = content.match(/\[[\s\S]*\]/);
    if (arrayMatch) results = JSON.parse(arrayMatch[0]);
    else return [];
  }

  if (!Array.isArray(results)) return [];

  return results.map((r: any, i: number) => ({
    type: r.type || 'fill_blank',
    question: r.question || '',
    options: Array.isArray(r.options) ? r.options : [],
    answer: String(r.answer || ''),
    related_segment_index: Math.min(i, segments.length - 1),
    explanation: r.explanation || '',
  }));
}

// ===== Language name mapping =====
function getLangName(code: string): string {
  const map: Record<string, string> = {
    'zh-CN': '中文', 'en': '英语', 'ja': '日语', 'ko': '韩语', 'es': '西班牙语',
    'ru': '俄语', 'de': '德语', 'fr': '法语', 'it': '意大利语', 'pt': '葡萄牙语',
    'ar': '阿拉伯语', 'hi': '印地语', 'th': '泰语', 'vi': '越南语', 'tr': '土耳其语',
    'pl': '波兰语', 'nl': '荷兰语', 'el': '希腊语', 'zh': '中文',
  };
  return map[code] || code;
}

// ===== Main Handler =====
Deno.serve(async (req) => {
  const origin = req.headers.get('origin');

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: getCorsHeaders(origin) });
  }

  try {
    // === 1. Auth ===
    const authHeader = req.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return problemResponse('unauthorized', 'Unauthorized', 401, 'Missing authentication', origin);
    }

    const jwt = authHeader.replace('Bearer ', '');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !serviceRoleKey) {
      return problemResponse('internal', 'Internal Error', 500, 'Service configuration error', origin);
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);
    const { data: { user }, error: authErr } = await supabaseAdmin.auth.getUser(jwt);

    if (authErr || !user) {
      return problemResponse('unauthorized', 'Unauthorized', 401, 'Session expired', origin);
    }

    const userId = user.id;

    // === 2. Parse body ===
    let body;
    try {
      body = await req.json();
    } catch {
      return problemResponse('invalid-params', 'Invalid Params', 400, 'JSON parse error', origin);
    }

    const { url, type_hint, target_language } = body;
    if (!url) {
      return problemResponse('invalid-params', 'Invalid Params', 400, 'URL is required', origin);
    }

    // === 3. Detect platform ===
    const detection = detectPlatform(url);
    if (detection.platform === 'unknown') {
      return problemResponse('unsupported-platform', 'Unsupported Platform', 422,
        'The provided URL is from a platform we currently cannot parse.', origin,
        { available: ['manual_paste'] });
    }

    // === 4. Check feature flags ===
    const enableFlags: Record<string, string> = {
      youtube: 'ENABLE_YOUTUBE_IMPORT',
      bilibili: 'ENABLE_BILIBILI_IMPORT',
      spotify: 'ENABLE_SPOTIFY_IMPORT',
      apple_music: 'ENABLE_APPLE_MUSIC_IMPORT',
    };
    const flagKey = enableFlags[detection.platform];
    if (flagKey && Deno.env.get(flagKey) === 'false') {
      return problemResponse('unsupported-platform', 'Unsupported Platform', 422,
        'This platform import is currently disabled.', origin,
        { available: ['manual_paste'] });
    }

    // === 5. Fetch metadata and subtitles based on platform ===
    let metadata: any = {};
    let subtitleResult: any = { available: false };
    let sourceType = 'video';

    if (detection.platform === 'youtube') {
      sourceType = 'video';
      const meta = await fetchYouTubeMetadata(detection.id!);
      if (meta) metadata = { ...meta, duration_seconds: 0 };
      subtitleResult = await fetchYouTubeSubtitles(detection.id!);
    } else if (detection.platform === 'bilibili') {
      sourceType = 'video';
      const meta = await fetchBilibiliMetadata(detection.id!);
      if (meta) {
        metadata = {
          title: meta.title,
          artist: meta.author,
          duration_seconds: meta.duration,
          thumbnail_url: meta.thumbnail_url,
        };
        subtitleResult = await fetchBilibiliSubtitles(detection.id!, meta.cid);
      } else {
        subtitleResult = { available: false, reason: 'extraction-failed' };
      }
    } else if (detection.platform === 'spotify') {
      sourceType = 'music';
      const meta = await fetchSpotifyMetadata(detection.id!);
      if (meta) {
        metadata = meta;
        const lyrics = await fetchLRCLIBLyrics(meta.title, meta.artist);
        if (lyrics) subtitleResult = lyrics;
        else subtitleResult = { available: false, reason: 'no-subtitles' };
      } else {
        subtitleResult = { available: false, reason: 'extraction-failed' };
      }
    } else if (detection.platform === 'apple_music') {
      // Apple Music is not supported for full learning loop
      return problemResponse('unsupported-platform', 'Unsupported Platform', 422,
        'Apple Music 暂不支持自动导入，请使用手动粘贴功能导入歌词。', origin,
        { available: ['manual_paste'] });
    }

    // === 6. Handle subtitle failures with proper error codes ===
    if (!subtitleResult.available) {
      const reason = subtitleResult.reason || 'extraction-failed';
      if (reason === 'no-subtitles') {
        return problemResponse('subtitle-unavailable', 'Subtitle Unavailable', 422,
          '该视频暂无可用字幕，你可以手动粘贴字幕文件或歌词文本', origin,
          { available: ['manual_paste'] });
      }
      return problemResponse('subtitle-extraction-failed', 'Subtitle Extraction Failed', 422,
        '字幕提取服务暂时不可用，请稍后重试', origin,
        { available: ['manual_paste', 'retry'] });
    }

    // === 7. Duration limit check ===
    const maxDuration = parseInt(Deno.env.get('MAX_VIDEO_DURATION_SECONDS') || '900', 10);
    if (metadata.duration_seconds > maxDuration) {
      subtitleResult.segments = subtitleResult.segments.filter((s: any) => s.start < maxDuration);
    }

    const maxSegments = parseInt(Deno.env.get('MAX_SEGMENTS_PER_BATCH') || '20', 10);
    let segments = subtitleResult.segments;
    if (segments.length > maxSegments) {
      segments = segments.slice(0, maxSegments);
    }

    // === 8. AI Translation + Explanation ===
    const apiBase = Deno.env.get('AI_API_BASE_URL');
    const apiKey = Deno.env.get('AI_API_KEY');
    const model = Deno.env.get('AI_MODEL');

    let translatedSegments: Array<any> = [];
    let quiz: Array<any> = [];

    if (apiBase && apiKey && model) {
      try {
        const translations = await translateAndExplain(segments, target_language || 'zh-CN', apiBase, apiKey, model);
        translatedSegments = segments.map((s: any, i: number) => ({
          index: i,
          start_time: s.start,
          end_time: s.end,
          original_text: s.text,
          translated_text: translations[i]?.translated_text || '',
          explanation: translations[i]?.explanation || '',
          keywords: translations[i]?.keywords || [],
        }));
      } catch (e) {
        logError('Translation failed', { userId, error: String(e) });
        translatedSegments = segments.map((s: any, i: number) => ({
          index: i,
          start_time: s.start,
          end_time: s.end,
          original_text: s.text,
          translated_text: '',
          explanation: '',
          keywords: [],
        }));
      }

      try {
        quiz = await generateQuiz(translatedSegments, target_language || 'zh-CN', apiBase, apiKey, model);
      } catch (e) {
        logError('Quiz generation failed', { userId, error: String(e) });
        quiz = [];
      }
    } else {
      translatedSegments = segments.map((s: any, i: number) => ({
        index: i,
        start_time: s.start,
        end_time: s.end,
        original_text: s.text,
        translated_text: '',
        explanation: '',
        keywords: [],
      }));
    }

    // === 9. Consume quota AFTER all services succeed ===
    const { data: quotaResult, error: quotaError } = await supabaseAdmin
      .rpc('consume_ai_quota', { p_usage_type: 'link_parser' });

    if (quotaError || !quotaResult?.allowed) {
      return problemResponse('quota-exceeded', 'Quota Exceeded', 429,
        quotaResult?.error || '今日链接解析额度已用完', origin,
        { available: ['manual_paste'] });
    }

    // === 10. Save to database ===
    const materialId = crypto.randomUUID();
    const material = {
      id: materialId,
      user_id: userId,
      source_type: sourceType,
      platform: detection.platform,
      original_url: url,
      metadata: {
        title: metadata.title || 'Untitled',
        artist: metadata.artist || undefined,
        duration_seconds: metadata.duration_seconds || 0,
        thumbnail_url: metadata.thumbnail_url || undefined,
        language_detected: subtitleResult.language || 'en',
        target_language: target_language || 'zh-CN',
      },
      segments: translatedSegments,
      quiz,
      status: 'parsed',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { error: dbError } = await supabaseAdmin
      .from('imported_materials')
      .insert(material);

    if (dbError) {
      logError('DB insert failed', { userId, materialId, error: dbError.message });
      // Rollback quota since DB save failed
      try {
        await supabaseAdmin.rpc('rollback_ai_quota', { p_usage_type: 'link_parser' });
        logInfo('Quota rolled back after DB failure', { userId, materialId });
      } catch (rbErr) {
        logError('Quota rollback failed', { userId, error: String(rbErr) });
      }
      return problemResponse('internal', 'Internal Error', 500, '数据保存失败，额度已自动回滚', origin);
    }

    return jsonResponse({
      ok: true,
      data: {
        material_id: materialId,
        status: 'parsed',
        metadata: material.metadata,
        segments: translatedSegments,
        quiz,
      },
    }, 200, origin);

  } catch (e) {
    logError('Unhandled error', { error: String(e) });
    return problemResponse('internal', 'Internal Error', 500, '服务内部错误', origin);
  }
});
