// ========== AI Dialogue Service ==========
// Edge Function proxy architecture: LLM via Supabase Edge Function (primary)
// + Enhanced Rule Engine (fallback for errors / quota exhausted / offline)
// No API Key in frontend — all LLM credentials live in Edge Function Secrets

const AIDialogueService = {
  config: {
    mode: 'edge-function', // 'edge-function' | 'enhanced-rule'
  },

  _contexts: new Map(), // sessionId -> { messages: [], scenario: {}, language: '' }

  // --- Config management (localStorage only for mode preference, no API Key) ---

  loadConfig() {
    try {
      // Clean up old localStorage key that may contain API Key
      const oldSaved = localStorage.getItem('lingopal_ai_config');
      if (oldSaved) {
        try {
          const parsed = JSON.parse(oldSaved);
          if (parsed.mode === 'llm-api') {
            // Migrate old llm-api mode to edge-function
            this.config.mode = 'edge-function';
            this.saveConfig();
          } else if (parsed.mode) {
            this.config.mode = parsed.mode;
          }
          // Remove old config to prevent API Key leakage
          localStorage.removeItem('lingopal_ai_config');
        } catch (e) {
          localStorage.removeItem('lingopal_ai_config');
        }
      }

      const saved = localStorage.getItem('lingopal_ai_mode');
      if (saved === 'enhanced-rule' || saved === 'edge-function') {
        this.config.mode = saved;
      }
    } catch (e) {
      console.warn('[AIDialogueService] 加载配置失败:', e);
    }
  },

  saveConfig() {
    try {
      localStorage.setItem('lingopal_ai_mode', this.config.mode);
    } catch (e) {
      console.warn('[AIDialogueService] 保存配置失败:', e);
    }
  },

  setMode(mode) {
    if (mode !== 'edge-function' && mode !== 'enhanced-rule') return;
    this.config.mode = mode;
    this.saveConfig();
  },

  // API Key management — REMOVED. Keys never touch frontend.
  setApiKey(_key) {
    console.warn('[AIDialogueService] setApiKey 已废弃，AI 调用走 Edge Function');
  },

  // Edge Function is ready when user is logged in and Supabase is configured
  isLLMReady() {
    if (this.config.mode === 'enhanced-rule') return false;
    if (!IS_SUPABASE_CONFIGURED) return false;
    const authState = window.useAuthStore?.getState?.();
    return !!(authState?.isLoggedIn && authState?.supabaseUser);
  },

  // --- Session management ---

  initSession(sessionId, scenarioId, language = 'zh-CN') {
    const scenario = DIALOGUE_SCENARIOS[scenarioId];
    const context = {
      sessionId,
      scenarioId,
      scenario,
      language,
      messages: [],
      turnCount: 0,
      startTime: Date.now(),
    };
    this._contexts.set(sessionId, context);
    return context;
  },

  endSession(sessionId) {
    this._contexts.delete(sessionId);
  },

  // --- Main entry: generate AI response ---

  async generateResponse(sessionId, userInput) {
    const context = this._contexts.get(sessionId);
    if (!context) {
      throw new Error('会话未初始化');
    }

    context.messages.push({ role: 'user', content: userInput });
    context.turnCount++;

    let response;

    if (this.isLLMReady() && this.config.mode === 'edge-function') {
      try {
        response = await this._callEdgeFunction(context, userInput);
      } catch (e) {
        console.warn('[AIDialogueService] Edge Function 调用失败，降级到规则引擎:', e);
        // Attach error code for caller inspection
        const err = new Error(e.message || 'AI 服务暂时不可用');
        err.code = e.code || 'LLM_ERROR';
        err.isFallback = true;
        response = this._generateEnhancedRuleResponse(context, userInput);
        err.fallbackResponse = response;
        throw err;
      }
    } else {
      response = this._generateEnhancedRuleResponse(context, userInput);
    }

    context.messages.push({ role: 'assistant', content: response });
    return response;
  },

  // --- Edge Function call ---

  async _callEdgeFunction(context, _userInput) {
    const sb = getSupabaseClient();
    if (!sb) {
      throw Object.assign(new Error('Supabase 未配置'), { code: 'INTERNAL_ERROR' });
    }

    const session = await sb.auth.getSession();
    const jwt = session.data.session?.access_token;
    if (!jwt) {
      throw Object.assign(new Error('未登录'), { code: 'UNAUTHORIZED' });
    }

    // Build Edge Function URL from SUPABASE_URL
    const baseUrl = SUPABASE_URL.replace(/\/$/, '');
    const edgeUrl = `${baseUrl}/functions/v1/ai-dialogue`;

    const body = {
      messages: context.messages.map(m => ({
        role: m.role,
        content: m.content,
      })),
      language: context.language,
      scenarioId: context.scenarioId || null,
      mode: 'oral', // OralDialogue uses oral mode; TextDialogue can override
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s frontend timeout

    let res;
    try {
      res = await fetch(edgeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
    } catch (fetchErr) {
      clearTimeout(timeoutId);
      if (fetchErr.name === 'AbortError') {
        throw Object.assign(new Error('请求超时'), { code: 'LLM_TIMEOUT' });
      }
      throw Object.assign(new Error('网络错误'), { code: 'LLM_ERROR' });
    }
    clearTimeout(timeoutId);

    let data;
    try {
      data = await res.json();
    } catch {
      throw Object.assign(new Error('响应解析失败'), { code: 'LLM_ERROR' });
    }

    if (!data.success) {
      const errCode = data.error?.code || 'LLM_ERROR';
      const errMsg = data.error?.message || 'AI 调用失败';
      throw Object.assign(new Error(errMsg), { code: errCode, details: data.error });
    }

    return data.data.content;
  },

  // --- Text mode Edge Function call (for TextDialogue free dialogue) ---

  async callEdgeFunctionText(messages, language, scenarioId = null) {
    const sb = getSupabaseClient();
    if (!sb) {
      throw Object.assign(new Error('Supabase 未配置'), { code: 'INTERNAL_ERROR' });
    }

    const session = await sb.auth.getSession();
    const jwt = session.data.session?.access_token;
    if (!jwt) {
      throw Object.assign(new Error('未登录'), { code: 'UNAUTHORIZED' });
    }

    const baseUrl = SUPABASE_URL.replace(/\/$/, '');
    const edgeUrl = `${baseUrl}/functions/v1/ai-dialogue`;

    const body = {
      messages: messages.map(m => ({
        role: m.role,
        content: m.content,
      })),
      language,
      scenarioId,
      mode: 'text',
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    let res;
    try {
      res = await fetch(edgeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
    } catch (fetchErr) {
      clearTimeout(timeoutId);
      if (fetchErr.name === 'AbortError') {
        throw Object.assign(new Error('请求超时'), { code: 'LLM_TIMEOUT' });
      }
      throw Object.assign(new Error('网络错误'), { code: 'LLM_ERROR' });
    }
    clearTimeout(timeoutId);

    let data;
    try {
      data = await res.json();
    } catch {
      throw Object.assign(new Error('响应解析失败'), { code: 'LLM_ERROR' });
    }

    if (!data.success) {
      const errCode = data.error?.code || 'LLM_ERROR';
      const errMsg = data.error?.message || 'AI 调用失败';
      throw Object.assign(new Error(errMsg), { code: errCode, details: data.error });
    }

    return data.data.content;
  },

  // --- Error code to Chinese message mapping ---

  getErrorMessage(code, details) {
    const messages = {
      'UNAUTHORIZED': '登录已过期，请重新登录',
      'QUOTA_EXHAUSTED': `今日 AI 对话额度已用完（${details?.used ?? '?'}/${details?.limit ?? '?'}），已切换到离线模式`,
      'RATE_LIMITED': '请求过快，请稍后再试',
      'INPUT_TOO_LONG': '输入太长，请精简后重试',
      'TOO_MANY_TURNS': '对话轮数过多，请开启新对话',
      'LLM_TIMEOUT': 'AI 响应较慢，已切换到离线模式',
      'LLM_ERROR': 'AI 服务暂时不可用，已切换到离线模式',
      'INTERNAL_ERROR': '服务暂时异常，已切换到离线模式',
      'INVALID_PARAMS': '参数错误，请检查后重试',
    };
    return messages[code] || 'AI 服务暂时不可用，已切换到离线模式';
  },

  // --- Enhanced rule-based response generator (fallback) ---

  _generateEnhancedRuleResponse(context, userInput) {
    const { scenario, language, turnCount } = context;
    const input = userInput.toLowerCase().trim();

    // 1. Try scenario-specific responses (only for Chinese)
    if (language === 'zh-CN' && scenario) {
      const scenarioResponse = this._matchScenarioResponse(scenario, input, turnCount);
      if (scenarioResponse) return scenarioResponse;
    }

    // 2. Generic conversational responses
    const genericResponse = this._generateGenericResponse(input, context);
    if (genericResponse) return genericResponse;

    // 3. Fallback
    return this._generateFallbackResponse(context);
  },

  _matchScenarioResponse(scenario, input, turnCount) {
    const patterns = SCENARIO_RESPONSE_PATTERNS[scenario.id];
    if (!patterns) return null;

    for (const p of patterns) {
      if (p.keywords.some(k => input.includes(k))) {
        const idx = turnCount % p.responses.length;
        return p.responses[idx];
      }
    }

    for (const p of patterns) {
      if (p.keywords.some(k => this._fuzzyMatch(input, k))) {
        const idx = turnCount % p.responses.length;
        return p.responses[idx];
      }
    }

    return null;
  },

  _fuzzyMatch(text, keyword) {
    if (text.includes(keyword)) return true;
    if (keyword.length <= 2) return false;
    let matches = 0;
    for (const ch of keyword) {
      if (text.includes(ch)) matches++;
    }
    return matches >= keyword.length * 0.6;
  },

  _generateGenericResponse(input, context) {
    const { language } = context;

    if (/^(hi|hello|hey|你好|您好|こん|안녕|hola|bonjour|ciao|olá|привет|merhaba|salam)/.test(input)) {
      if (language === 'ja') return 'こんにちは！何かお話ししましょう。';
      if (language === 'zh-CN') return '你好呀！很高兴和你练习口语，今天想聊什么呢？';
      return 'Hello there! How can I help you today?';
    }

    if (/\?|？|吗|什么|哪里|how|what|where|when|why|quoi|où|wie|was|dove|quando/.test(input)) {
      if (language === 'ja') return 'いい質問ですね。それについてもっと話しましょう。';
      if (language === 'zh-CN') return '这个问题很有意思。你觉得呢？我们可以一起讨论一下。';
      return "That's a good question. Let me think... Well, what do you think about it?";
    }

    if (/^(yes|yeah|sure|ok|okay|好的|可以|行|はい|そう|oui|si|ja|да|evet)/.test(input)) {
      if (language === 'ja') return 'わかりました。では、続けましょう。';
      if (language === 'zh-CN') return '好的！那我们就继续吧。';
      return "Great! Let's continue then.";
    }

    if (/^(no|nope|not|不用|不要|不行|いいえ|だめ|non|nein|нет|hayır)/.test(input)) {
      if (language === 'ja') return 'そうですか。他の方法を考えてみましょう。';
      if (language === 'zh-CN') return '明白，那我们换个方式试试。';
      return "I see. Let's think of another way then.";
    }

    if (/谢谢|thanks|thank you|ありがと|감사|gracias|merci|danke|grazie|obrigado|spasibo)/.test(input)) {
      if (language === 'ja') return 'どういたしまして。他に何かありますか？';
      if (language === 'zh-CN') return '不客气！还有什么我可以帮你的吗？';
      return "You're welcome! Anything else I can help with?";
    }

    if (/再见|拜拜|bye|goodbye|さようなら|잘 가|adios|au revoir|arrivederci|adeus|do svidaniya)/.test(input)) {
      if (language === 'ja') return 'さようなら！また練習しましょう。';
      if (language === 'zh-CN') return '再见！继续加油练习，你会越来越棒的！';
      return 'Goodbye! Keep practicing and you\'ll get better!';
    }

    if (input.length <= 3) {
      if (language === 'ja') return 'もう少し詳しく教えてください。';
      if (language === 'zh-CN') return '可以多说说你的想法吗？';
      return 'Could you tell me a bit more about that?';
    }

    return null;
  },

  _generateFallbackResponse(context) {
    const { scenario, language, turnCount } = context;
    const fallbacks = FALLBACK_RESPONSES[language] || FALLBACK_RESPONSES['en'];
    const idx = turnCount % fallbacks.length;

    if (scenario && language === 'zh-CN' && turnCount < 3) {
      return `${fallbacks[idx]} ${scenario.opening}`;
    }

    return fallbacks[idx];
  },
};

// Enhanced response patterns for each scenario
const SCENARIO_RESPONSE_PATTERNS = {
  restaurant: [
    {
      keywords: ['位', 'people', 'person', '人', 'two', 'three', 'one', '1', '2', '3', '4'],
      responses: [
        '好的，这边请。这是菜单，请问需要推荐吗？',
        '没问题，这边有位子。想坐靠窗的位置吗？',
        '好的，请跟我来。今天有特别推荐哦。',
      ],
    },
    {
      keywords: ['推荐', 'recommend', 'special', '特色', '招牌', '什么好吃'],
      responses: [
        '今天的特色菜是香煎三文鱼和松露意面，都很受欢迎。',
        '我推荐试试我们的招牌烤鸡，很多客人都喜欢。',
        '如果是第一次来，建议点我们的厨师特选套餐。',
      ],
    },
    {
      keywords: ['素食', 'vegetarian', 'vegan', '不吃肉'],
      responses: [
        '我们有地中海蔬菜沙拉和素食意面，都很新鲜。',
        '素食菜单在这里，推荐豆腐沙拉和蘑菇汤。',
        '没问题，我们的素食选择很丰富。',
      ],
    },
    {
      keywords: ['点', 'order', 'want', '要', '来', 'give'],
      responses: [
        '好的，我记下了。请问需要配什么饮料？',
        '不错的选择！需要加什么配菜吗？',
        '好的，稍等片刻。要先来点开胃菜吗？',
      ],
    },
    {
      keywords: ['酒', 'drink', '水', 'water', 'coffee', 'tea', 'beer', 'wine'],
      responses: [
        '我们有红酒、白酒和啤酒，推荐搭配您的菜品。',
        '咖啡或茶都可以，需要加冰吗？',
        '好的，一杯水是吗？还需要别的吗？',
      ],
    },
    {
      keywords: ['买单', 'bill', 'check', 'pay', '付钱', '结账', '多少钱'],
      responses: [
        '好的，一共是328元。刷卡还是现金？',
        '这是您的账单，请确认一下。',
        '请问需要发票吗？',
      ],
    },
  ],
  directions: [
    {
      keywords: ['地铁', 'subway', 'metro', 'train'],
      responses: [
        '最近的地铁站在前面右转，步行大约5分钟。',
        '沿着这条路直走，看到红绿灯左转就是地铁站。',
      ],
    },
    {
      keywords: ['机场', 'airport', 'plane', 'flight'],
      responses: [
        '您可以乘坐机场快线，从前面左转的车站出发。',
        '打车去机场大约需要40分钟，现在路况还不错。',
      ],
    },
    {
      keywords: ['酒店', 'hotel', '住'],
      responses: [
        '您订的是哪家酒店？我可以帮您查路线。',
        '前面路口右转就有一家不错的酒店。',
      ],
    },
    {
      keywords: ['多久', 'long', 'time', '分钟', 'hour'],
      responses: [
        '步行大约10分钟，或者可以骑自行车，3分钟就到。',
        '坐公交车大概15分钟，打车5分钟。',
      ],
    },
    {
      keywords: ['出租车', 'taxi', 'cab', '打车'],
      responses: [
        '前面路口有出租车停靠点，大约等5分钟。',
        '可以用手机叫车，这里信号很好。',
      ],
    },
  ],
  hotel: [
    {
      keywords: ['有', '预订', 'book', 'reservation', '订了'],
      responses: [
        '好的，请出示您的身份证件，我帮您办理入住。',
        '请问预订时用的姓名是什么？',
      ],
    },
    {
      keywords: ['没有', '没订', '没有预订'],
      responses: [
        '没关系，请问您需要什么房型？我们有大床房和双床房。',
        '现在有空房，请问您想住几晚？',
      ],
    },
    {
      keywords: ['大床', 'double', 'king'],
      responses: [
        '好的，大床房在8楼，含早餐。这是您的房卡。',
        '大床房每晚380元，含早餐和WiFi。',
      ],
    },
    {
      keywords: ['双床', 'twin', '两张'],
      responses: [
        '好的，双床房在6楼，可以看到花园。',
        '双床房每晚350元，含两份早餐。',
      ],
    },
    {
      keywords: ['海景', 'sea', 'ocean', 'view'],
      responses: [
        '海景房在12楼以上，每晚加收200元，您看可以吗？',
        '海景房视野很好，不过现在只剩一间了。',
      ],
    },
    {
      keywords: ['早餐', 'breakfast', '吃饭'],
      responses: [
        '早餐在1楼餐厅，6:30到10:00供应。',
        '早餐是自助式的，中西式都有。',
      ],
    },
  ],
  business: [
    {
      keywords: ['合作', 'cooperation', 'partner', 'collaborate'],
      responses: [
        '我也非常期待这次合作。请先介绍一下贵公司的方案。',
        '合作的具体方向是什么？我们可以详细聊聊。',
      ],
    },
    {
      keywords: ['介绍', 'introduce', 'about', '方案', 'proposal'],
      responses: [
        '请说，我在听。这个方案的核心优势是什么？',
        '好的，我对你们的方案很感兴趣。',
      ],
    },
    {
      keywords: ['预算', 'budget', 'price', 'cost', '多少钱'],
      responses: [
        '我们的预算在50万到80万之间，具体看方案内容。',
        '价格方面可以商量，关键是价值匹配。',
      ],
    },
    {
      keywords: ['数据', 'data', 'number', '统计', 'report'],
      responses: [
        '好的，数据分析很重要。请展示一下关键指标。',
        '数据支撑很关键，你们的用户增长数据怎么样？',
      ],
    },
    {
      keywords: ['签约', 'sign', 'contract', '合同', ' agreement'],
      responses: [
        '如果方案合适，下周可以安排签约。',
        '合同细节我们法务部门会先审核一下。',
      ],
    },
  ],
  shopping: [
    {
      keywords: ['衣服', 'clothes', 'shirt', 'dress'],
      responses: [
        '男装在二楼，女装在三楼，当季新品在入口处。',
        '这边是新款，需要我帮您找一下尺码吗？',
      ],
    },
    {
      keywords: ['鞋', 'shoes', '鞋子'],
      responses: [
        '运动鞋在一楼，皮鞋在二楼。',
        '这边是新品鞋区，您的尺码是多少？',
      ],
    },
    {
      keywords: ['礼品', 'gift', 'present', '礼物'],
      responses: [
        '礼品区在地下一层，有本地特色商品。',
        '如果是送给朋友，推荐这些手工艺品。',
      ],
    },
    {
      keywords: ['多少钱', 'price', 'cost', '便宜', '折扣', 'discount'],
      responses: [
        '这件原价599，现在打8折，479元。',
        '今天全场8折，会员再享9折。',
      ],
    },
    {
      keywords: ['试穿', 'try', 'fitting', '试'],
      responses: [
        '当然可以，试衣间在那边。',
        '试衣间在左边，需要我帮您拿别的尺码吗？',
      ],
    },
  ],
  airport: [
    {
      keywords: ['值机', 'check.in', 'boarding'],
      responses: [
        '值机柜台在A区，请出示护照和机票。',
        '您可以自助值机，机器在那边。',
      ],
    },
    {
      keywords: ['登机', 'gate', 'boarding'],
      responses: [
        '您的航班在C23登机口，请提前40分钟到达。',
        '登机口可能会有变动，请关注广播。',
      ],
    },
    {
      keywords: ['行李', 'luggage', 'baggage', '托运'],
      responses: [
        '行李托运在B区，超重每公斤收费100元。',
        '随身行李限重7公斤，请确认一下。',
      ],
    },
    {
      keywords: ['起飞', 'depart', 'flight time', '几点'],
      responses: [
        '您的航班预计14:30起飞，目前准点。',
        '航班状态正常，没有延误通知。',
      ],
    },
    {
      keywords: ['安检', 'security', '检查'],
      responses: [
        '安检在二楼，请提前准备好液体物品。',
        '电子产品需要单独取出过安检。',
      ],
    },
    {
      keywords: ['免税店', 'duty free', 'tax free'],
      responses: [
        '免税店在过安检后，国际出发区域。',
        '那边的免税店有很多化妆品和香水。',
      ],
    },
  ],
};

// Generic fallback responses per language
const FALLBACK_RESPONSES = {
  'zh-CN': [
    '嗯，我明白了。那接下来呢？',
    '有意思，可以多说说吗？',
    '好的，我了解了。还有什么想聊的？',
    '这样啊，那你觉得怎么样？',
    '明白了，我们继续吧。',
    '很有趣呢，请继续。',
  ],
  'en': [
    "I see. What would you like to do next?",
    "Interesting, tell me more.",
    "Got it. Anything else on your mind?",
    "I understand. What do you think about that?",
    "Alright, let's continue.",
    "That's interesting, please go on.",
  ],
  'ja': [
    'そうですね。次はどうしますか？',
    '興味深いですね。もっと教えてください。',
    'わかりました。他に何かありますか？',
    'そうですか。あなたはどう思いますか？',
    'では、続けましょう。',
    '面白いですね。どうぞ続けて。',
  ],
};

// Initialize on load
AIDialogueService.loadConfig();

Object.assign(window, { AIDialogueService });
