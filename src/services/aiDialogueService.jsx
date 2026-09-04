// ========== AI Dialogue Service ==========
// Hybrid architecture: LLM API (primary) + Enhanced Rule Engine (fallback)
// Supports user-configured API keys for zero-cost personal use

const AIDialogueService = {
  config: {
    mode: 'enhanced-rule', // 'llm-api' | 'enhanced-rule'
    apiKey: null,
    apiBase: 'https://api.deepseek.com',
    model: 'deepseek-chat',
    maxTokens: 256,
    temperature: 0.8,
  },

  _contexts: new Map(), // sessionId -> { messages: [], scenario: {}, language: '' }

  // Load config from localStorage
  loadConfig() {
    try {
      const saved = localStorage.getItem('lingopal_ai_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.config = { ...this.config, ...parsed };
      }
    } catch (e) {
      console.warn('[AIDialogueService] 加载配置失败:', e);
    }
  },

  saveConfig() {
    try {
      localStorage.setItem('lingopal_ai_config', JSON.stringify(this.config));
    } catch (e) {
      console.warn('[AIDialogueService] 保存配置失败:', e);
    }
  },

  setMode(mode) {
    this.config.mode = mode;
    this.saveConfig();
  },

  setApiKey(key) {
    this.config.apiKey = key;
    this.saveConfig();
  },

  isLLMReady() {
    return this.config.mode === 'llm-api' && !!this.config.apiKey;
  },

  // Initialize a new dialogue session
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

    // Add system prompt for LLM mode
    if (scenario) {
      context.systemPrompt = this._buildSystemPrompt(scenario, language);
    }

    this._contexts.set(sessionId, context);
    return context;
  },

  endSession(sessionId) {
    this._contexts.delete(sessionId);
  },

  // Build system prompt for LLM
  _buildSystemPrompt(scenario, language) {
    const langNames = {
      'zh-CN': '中文',
      'en': '英语',
      'ja': '日语',
      'ko': '韩语',
      'es': '西班牙语',
    };

    const targetLang = langNames[language] || language;

    return `你是一位友好的${targetLang}口语练习伙伴。当前场景是：${scenario.name}。

规则：
1. 用${targetLang}回复，保持自然、口语化的表达
2. 每次回复控制在2-3句话，适合口语练习
3. 如果对方说错了，温和地纠正并继续对话
4. 主动引导对话继续，不要一次性说完所有内容
5. 角色设定：${scenario.opening}
6. 回复要有互动性，可以提问或给出选择

注意：你只扮演场景中的角色，不要解释规则或跳出角色。`;
  },

  // Main entry: generate AI response
  async generateResponse(sessionId, userInput) {
    const context = this._contexts.get(sessionId);
    if (!context) {
      throw new Error('会话未初始化');
    }

    context.messages.push({ role: 'user', content: userInput });
    context.turnCount++;

    let response;

    if (this.isLLMReady()) {
      try {
        response = await this._callLLM(context);
      } catch (e) {
        console.warn('[AIDialogueService] LLM调用失败，降级到规则引擎:', e);
        response = this._generateEnhancedRuleResponse(context, userInput);
      }
    } else {
      response = this._generateEnhancedRuleResponse(context, userInput);
    }

    context.messages.push({ role: 'assistant', content: response });
    return response;
  },

  // Call LLM API (DeepSeek / OpenAI compatible)
  async _callLLM(context) {
    if (!this.config.apiKey) {
      throw new Error('未配置API Key');
    }

    const messages = [
      { role: 'system', content: context.systemPrompt },
      ...context.messages.slice(-10).map(m => ({ role: m.role, content: m.content })),
    ];

    const res = await fetch(`${this.config.apiBase}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`,
      },
      body: JSON.stringify({
        model: this.config.model,
        messages,
        max_tokens: this.config.maxTokens,
        temperature: this.config.temperature,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`API错误 (${res.status}): ${err}`);
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error('API返回空内容');
    }

    return content.trim();
  },

  // Enhanced rule-based response generator
  _generateEnhancedRuleResponse(context, userInput) {
    const { scenario, turnCount } = context;
    const input = userInput.toLowerCase().trim();

    // 1. Try to match scenario-specific responses
    if (scenario) {
      const scenarioResponse = this._matchScenarioResponse(scenario, input, turnCount);
      if (scenarioResponse) return scenarioResponse;
    }

    // 2. Use generic conversational responses based on intent
    const genericResponse = this._generateGenericResponse(input, context);
    if (genericResponse) return genericResponse;

    // 3. Fallback: encourage and continue
    return this._generateFallbackResponse(context);
  },

  // Match user input against scenario response patterns
  _matchScenarioResponse(scenario, input, turnCount) {
    const patterns = SCENARIO_RESPONSE_PATTERNS[scenario.id];
    if (!patterns) return null;

    // Try exact match first
    for (const p of patterns) {
      if (p.keywords.some(k => input.includes(k))) {
        const responses = p.responses;
        const idx = turnCount % responses.length;
        return responses[idx];
      }
    }

    // Try fuzzy intent matching
    for (const p of patterns) {
      if (p.keywords.some(k => this._fuzzyMatch(input, k))) {
        const responses = p.responses;
        const idx = turnCount % responses.length;
        return responses[idx];
      }
    }

    return null;
  },

  // Fuzzy string matching for intent detection
  _fuzzyMatch(text, keyword) {
    if (text.includes(keyword)) return true;
    // Simple char overlap check for short keywords
    if (keyword.length <= 2) return false;
    let matches = 0;
    for (const ch of keyword) {
      if (text.includes(ch)) matches++;
    }
    return matches >= keyword.length * 0.6;
  },

  // Generic intent-based responses
  _generateGenericResponse(input, context) {
    const { language } = context;

    // Greeting detection
    if (/^(hi|hello|hey|你好|您好|こん|안녕)/.test(input)) {
      return language === 'ja' ? 'こんにちは！何かお話ししましょう。' :
             language === 'en' ? 'Hello there! How can I help you today?' :
             '你好呀！很高兴和你练习口语，今天想聊什么呢？';
    }

    // Question detection
    if (/\?|？|吗|什么|哪里|how|what|where|when|why/.test(input)) {
      return language === 'ja' ? 'いい質問ですね。それについてもっと話しましょう。' :
             language === 'en' ? "That's a good question. Let me think... Well, what do you think about it?" :
             '这个问题很有意思。你觉得呢？我们可以一起讨论一下。';
    }

    // Agreement/Yes
    if (/^(yes|yeah|sure|ok|okay|好的|可以|行|はい|そう)/.test(input)) {
      return language === 'ja' ? 'わかりました。では、続けましょう。' :
             language === 'en' ? 'Great! Let\'s continue then.' :
             '好的！那我们就继续吧。';
    }

    // Disagreement/No
    if (/^(no|nope|not|不用|不要|不行|いいえ|だめ)/.test(input)) {
      return language === 'ja' ? 'そうですか。他の方法を考えてみましょう。' :
             language === 'en' ? 'I see. Let\'s think of another way then.' :
             '明白，那我们换个方式试试。';
    }

    // Gratitude
    if (/谢谢|thanks|thank you|ありがと|감사/.test(input)) {
      return language === 'ja' ? 'どういたしまして。他に何かありますか？' :
             language === 'en' ? 'You\'re welcome! Anything else I can help with?' :
             '不客气！还有什么我可以帮你的吗？';
    }

    // Farewell
    if (/再见|拜拜|bye|goodbye|さようなら|잘 가/.test(input)) {
      return language === 'ja' ? 'さようなら！また練習しましょう。' :
             language === 'en' ? 'Goodbye! Keep practicing and you\'ll get better!' :
             '再见！继续加油练习，你会越来越棒的！';
    }

    // Very short input
    if (input.length <= 3) {
      return language === 'ja' ? 'もう少し詳しく教えてください。' :
             language === 'en' ? 'Could you tell me a bit more about that?' :
             '可以多说说你的想法吗？';
    }

    return null;
  },

  // Fallback response that encourages conversation
  _generateFallbackResponse(context) {
    const { scenario, language, turnCount } = context;
    const fallbacks = FALLBACK_RESPONSES[language] || FALLBACK_RESPONSES['zh-CN'];
    const idx = turnCount % fallbacks.length;

    if (scenario && turnCount < 3) {
      // Early in conversation, steer back to scenario
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
