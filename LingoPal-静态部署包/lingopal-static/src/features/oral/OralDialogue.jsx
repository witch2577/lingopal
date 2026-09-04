// ========== AI-Powered Oral Dialogue Component ==========
// Hybrid: LLM API (with user key) + Enhanced Rule Engine (default)
// Supports multi-turn natural conversation across multiple scenarios

const OralDialogue = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [language, setLanguage] = useState('zh-CN');
  const [sessionId, setSessionId] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [aiMode, setAiMode] = useState(AIDialogueService.config.mode);
  const [apiKey, setApiKey] = useState(AIDialogueService.config.apiKey || '');
  const [errorMsg, setErrorMsg] = useState(null);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Load AI config on mount
  useEffect(() => {
    AIDialogueService.loadConfig();
    setAiMode(AIDialogueService.config.mode);
    setApiKey(AIDialogueService.config.apiKey || '');
  }, []);

  const startScenario = (scenarioId) => {
    const scenario = DIALOGUE_SCENARIOS[scenarioId];
    if (!scenario) return;

    const sid = `oral_${scenarioId}_${Date.now()}`;
    setSessionId(sid);
    setSelectedScenario(scenarioId);
    setMessages([
      { role: 'ai', text: scenario.opening, scenarioName: scenario.name },
    ]);
    setIsComplete(false);
    setUserInput('');
    setErrorMsg(null);

    // Init AI service session
    AIDialogueService.initSession(sid, scenarioId, language);
  };

  const handleUserSubmit = async (inputText) => {
    const text = (inputText || userInput).trim();
    if (!text || !selectedScenario || isAiThinking) return;

    setErrorMsg(null);
    const userMsg = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setUserInput('');
    setIsAiThinking(true);

    try {
      let aiText;

      if (AIDialogueService.isLLMReady()) {
        // Real AI mode
        aiText = await AIDialogueService.generateResponse(sessionId, text);
      } else {
        // Enhanced rule engine
        aiText = await AIDialogueService.generateResponse(sessionId, text);
      }

      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);

      // Check if conversation should end (optional: after N turns)
      const context = AIDialogueService._contexts.get(sessionId);
      if (context && context.turnCount >= 15) {
        setIsComplete(true);
        useUserStore.getState().addXP(15);
        const userId = useUserStore.getState().userId;
        if (userId) recordActivity(userId, 'oral', { minutes: 3 });
      }
    } catch (e) {
      console.error('[OralDialogue] AI响应失败:', e);
      setErrorMsg('AI响应出错，已切换到规则引擎模式');
      // Fallback to rule engine
      try {
        AIDialogueService.setMode('enhanced-rule');
        const aiText = await AIDialogueService.generateResponse(sessionId, text);
        setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
      } catch (e2) {
        setMessages(prev => [...prev, { role: 'ai', text: '抱歉，我这边出了点问题，请稍后再试。' }]);
      }
    } finally {
      setIsAiThinking(false);
    }
  };

  const handleEndConversation = () => {
    if (sessionId) {
      AIDialogueService.endSession(sessionId);
    }
    setIsComplete(true);
    useUserStore.getState().addXP(10);
    const userId = useUserStore.getState().userId;
    if (userId) recordActivity(userId, 'oral', { minutes: 2 });
  };

  const startVoiceInput = () => {
    if (!SpeechService.isRecognitionSupported()) {
      useUIStore.getState().showNotification('您的浏览器不支持语音识别', 'warning');
      return;
    }
    const recognition = SpeechService.createRecognition(language);
    if (!recognition) return;

    recognitionRef.current = recognition;
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setUserInput(text);
      handleUserSubmit(text);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
    setIsListening(true);
  };

  const stopVoiceInput = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const handleReset = () => {
    if (sessionId) {
      AIDialogueService.endSession(sessionId);
    }
    setSelectedScenario(null);
    setMessages([]);
    setIsComplete(false);
    setUserInput('');
    setErrorMsg(null);
    setSessionId(null);
  };

  const handleSaveSettings = () => {
    AIDialogueService.setMode(aiMode);
    if (apiKey.trim()) {
      AIDialogueService.setApiKey(apiKey.trim());
    }
    setShowSettings(false);
    useUIStore.getState().showNotification('设置已保存', 'success');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAiThinking]);

  // Scenario selection screen
  if (!selectedScenario) {
    return (
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-1">选择对话场景</h2>
              <p className="text-xs text-slate-400">选择场景后开始多轮对话练习</p>
            </div>
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors btn-press"
            >
              <Icon name="settings" size={18} />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant={AIDialogueService.isLLMReady() ? 'success' : 'default'}>
              {AIDialogueService.isLLMReady() ? 'AI 对话模式' : '规则引擎模式'}
            </Badge>
            <span className="text-xs text-slate-400">
              {AIDialogueService.isLLMReady() ? '由云端AI驱动' : '演示数据·基于规则'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 overflow-y-auto hide-scrollbar pb-4">
          {ORAL_SCENARIOS.map(sc => {
            const scenario = DIALOGUE_SCENARIOS[sc.id];
            return (
              <button
                key={sc.id}
                onClick={() => startScenario(sc.id)}
                className="flex flex-col items-start p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all btn-press text-left"
              >
                <span className="text-2xl mb-2">{sc.icon}</span>
                <span className="text-sm font-semibold text-slate-800">{sc.name}</span>
                <span className="text-xs text-slate-400 mt-1 line-clamp-2">{sc.description}</span>
              </button>
            );
          })}
        </div>

        {/* Settings Modal */}
        {showSettings && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-5 w-full max-w-sm shadow-xl"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-4">AI 对话设置</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">对话模式</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setAiMode('enhanced-rule')}
                      className={`flex-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                        aiMode === 'enhanced-rule'
                          ? 'bg-brand-gradient text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      规则引擎
                    </button>
                    <button
                      onClick={() => setAiMode('llm-api')}
                      className={`flex-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                        aiMode === 'llm-api'
                          ? 'bg-brand-gradient text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      AI 模型
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {aiMode === 'enhanced-rule'
                      ? '使用增强规则引擎，无需配置，即时响应'
                      : '使用云端大模型，需要配置API Key'}
                  </p>
                </div>

                {aiMode === 'llm-api' && (
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">API Key</label>
                    <input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="输入 DeepSeek API Key"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 text-sm border border-slate-200 focus:outline-none focus:border-brand-400"
                    />
                    <p className="text-xs text-slate-400 mt-1">
                      支持 DeepSeek/OpenAI 格式。Key 仅保存在本地。
                    </p>
                    <p className="text-xs text-amber-600 mt-1">
                      DeepSeek 免费版：100万 tokens/天，个人使用足够
                    </p>
                  </div>
                )}

                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xs text-slate-500">
                    <span className="font-medium">能力边界：</span>
                    当前{aiMode === 'llm-api' ? '使用云端AI模型' : '使用本地规则引擎'}生成对话回复。
                    规则引擎覆盖餐厅、问路、酒店、商务、购物、机场等场景。
                    如需更自然的对话体验，可切换到AI模式并配置API Key。
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-5">
                <Button variant="secondary" fullWidth onClick={() => setShowSettings(false)}>
                  取消
                </Button>
                <Button variant="primary" fullWidth onClick={handleSaveSettings}>
                  保存
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    );
  }

  const currentScenario = DIALOGUE_SCENARIOS[selectedScenario];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={handleReset}
          className="p-2 rounded-xl hover:bg-slate-100 transition-colors btn-press"
        >
          <Icon name="chevron-left" size={20} />
        </button>
        <div className="flex-1">
          <h2 className="text-base font-bold text-slate-800">{currentScenario.name}</h2>
          <p className="text-xs text-slate-400">
            {AIDialogueService.isLLMReady() ? 'AI 对话模式 · 多轮自然对话' : '规则引擎模式 · 演示数据'}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Badge variant={AIDialogueService.isLLMReady() ? 'success' : 'default'}>
            {AIDialogueService.isLLMReady() ? 'AI' : '规则'}
          </Badge>
          <button
            onClick={() => setShowSettings(true)}
            className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Icon name="settings" size={16} className="text-slate-400" />
          </button>
        </div>
      </div>

      {/* Error message */}
      {errorMsg && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-3">
          <p className="text-xs text-amber-700">{errorMsg}</p>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto hide-scrollbar space-y-3 mb-3 px-1">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                msg.role === 'user'
                  ? 'bg-brand-gradient text-white rounded-br-md'
                  : 'bg-white border border-slate-100 text-slate-700 rounded-bl-md shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {isAiThinking && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                <span className="text-xs text-slate-400 ml-1">AI 思考中...</span>
              </div>
            </div>
          </div>
        )}

        {isComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center my-4"
          >
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-center">
              <Icon name="check" size={20} className="text-emerald-500 mx-auto mb-1" />
              <p className="text-sm font-medium text-emerald-700">对话完成！</p>
              <p className="text-xs text-emerald-600">+10 XP</p>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      {!isComplete && (
        <div className="bg-white border border-slate-100 rounded-2xl p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !isAiThinking && handleUserSubmit()}
              placeholder="输入回复..."
              disabled={isAiThinking}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-50 text-sm border border-slate-200 focus:outline-none focus:border-brand-400 disabled:opacity-50"
            />
            <button
              onClick={isListening ? stopVoiceInput : startVoiceInput}
              disabled={isAiThinking}
              className={`p-2.5 rounded-xl transition-colors btn-press disabled:opacity-40 ${
                isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Icon name={isListening ? 'x' : 'mic'} size={18} />
            </button>
            <button
              onClick={() => handleUserSubmit()}
              disabled={!userInput.trim() || isAiThinking}
              className="p-2.5 rounded-xl bg-brand-gradient text-white btn-press disabled:opacity-40"
            >
              <Icon name="arrow-right" size={18} />
            </button>
          </div>

          <div className="flex items-center justify-between mt-2">
            <button
              onClick={handleEndConversation}
              className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              结束对话
            </button>
            <span className="text-xs text-slate-300">
              {AIDialogueService.isLLMReady() ? 'AI 驱动' : '规则引擎 · 演示数据'}
            </span>
          </div>
        </div>
      )}

      {isComplete && (
        <Button variant="primary" onClick={handleReset} fullWidth>
          选择新场景
        </Button>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-5 w-full max-w-sm shadow-xl"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4">AI 对话设置</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">对话模式</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setAiMode('enhanced-rule')}
                    className={`flex-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                      aiMode === 'enhanced-rule' ? 'bg-brand-gradient text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    规则引擎
                  </button>
                  <button
                    onClick={() => setAiMode('llm-api')}
                    className={`flex-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                      aiMode === 'llm-api' ? 'bg-brand-gradient text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    AI 模型
                  </button>
                </div>
              </div>
              {aiMode === 'llm-api' && (
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">API Key</label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="输入 DeepSeek API Key"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 text-sm border border-slate-200 focus:outline-none focus:border-brand-400"
                  />
                  <p className="text-xs text-amber-600 mt-1">DeepSeek 免费版：100万 tokens/天</p>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-5">
              <Button variant="secondary" fullWidth onClick={() => setShowSettings(false)}>取消</Button>
              <Button variant="primary" fullWidth onClick={handleSaveSettings}>保存</Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { OralDialogue });
