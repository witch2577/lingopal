// ========== Text Dialogue Practice ==========
// Scenario-based multi-turn text dialogue (choice-based or free-text)
// + AI Free Dialogue mode via Edge Function for non-Chinese / open practice

const TextDialogue = () => {
  const [activeScene, setActiveScene] = useState(null);
  const [turnIndex, setTurnIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [freeText, setFreeText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalTurns, setTotalTurns] = useState(0);
  const [language, setLanguage] = useState('zh-CN');

  // AI free dialogue mode state
  const [isAiFreeMode, setIsAiFreeMode] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [aiErrorMsg, setAiErrorMsg] = useState(null);
  const [aiSessionId, setAiSessionId] = useState(null);
  const aiMessagesEndRef = useRef(null);

  const scenarios = useMemo(() => Object.entries(TEXT_DIALOGUE_SCENARIOS), []);

  // ---------- Scenario-based mode ----------

  const startScenario = (sceneKey) => {
    const scene = TEXT_DIALOGUE_SCENARIOS[sceneKey];
    setActiveScene(sceneKey);
    setMessages([]);
    setSelectedOption(null);
    setFeedback(null);
    setFreeText('');
    setIsComplete(false);
    setScore(0);
    setCorrectCount(0);
    setTotalTurns(0);
    setIsAiFreeMode(false);
    setAiErrorMsg(null);
    setAiSessionId(null);

    const newMessages = [];
    let idx = 0;
    while (idx < scene.turns.length && scene.turns[idx].speaker !== 'user') {
      newMessages.push({ role: 'ai', text: scene.turns[idx].text });
      idx++;
    }
    setMessages(newMessages);
    setTurnIndex(idx);
  };

  const currentTurn = useMemo(() => {
    if (!activeScene || isAiFreeMode) return null;
    const scene = TEXT_DIALOGUE_SCENARIOS[activeScene];
    return scene.turns[turnIndex] || null;
  }, [activeScene, turnIndex, isAiFreeMode]);

  const processTurnResponse = useCallback((userText, isCorrect, points) => {
    const scene = TEXT_DIALOGUE_SCENARIOS[activeScene];
    const turn = scene.turns[turnIndex];

    setTotalTurns(prev => prev + 1);
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      setScore(prev => prev + points);
    }

    setMessages(prev => [...prev, { role: 'user', text: userText }]);

    setFeedback({
      isCorrect,
      message: isCorrect ? '回答得很好！' : `参考答案：${turn.correct}`,
    });

    setTimeout(() => {
      const responseText = isCorrect
        ? turn.correctResponse
        : `了解了。${turn.correctResponse}`;

      setMessages(prev => [...prev, { role: 'ai', text: responseText }]);

      let nextIdx = turnIndex + 1;

      while (nextIdx < scene.turns.length && scene.turns[nextIdx].speaker !== 'user') {
        setMessages(prev => [...prev, { role: 'ai', text: scene.turns[nextIdx].text }]);
        nextIdx++;
      }

      if (nextIdx >= scene.turns.length) {
        setIsComplete(true);
        const totalXP = isCorrect ? 10 : 5;
        useUserStore.getState().addXP(totalXP);
        const userId = useUserStore.getState().userId;
        if (userId) {
          recordActivity(userId, 'written', {
            minutes: Math.ceil((totalTurns + 1) * 0.5) || 1,
            questions: totalTurns + 1,
            correct: correctCount + (isCorrect ? 1 : 0),
          });
        }
        if (window.db) {
          db.writtenRecords.add({
            type: 'text_dialogue',
            scenario: activeScene,
            score: score + points,
            correctCount: correctCount + (isCorrect ? 1 : 0),
            totalTurns: totalTurns + 1,
            timestamp: Date.now(),
          }).catch(() => {});
        }
      } else {
        setTurnIndex(nextIdx);
      }

      setSelectedOption(null);
      setFeedback(null);
    }, 1200);
  }, [activeScene, turnIndex, score, correctCount, totalTurns]);

  const handleOptionSelect = (option) => {
    if (feedback !== null || !activeScene || !currentTurn) return;
    if (currentTurn.speaker !== 'user') return;

    const isCorrect = option === currentTurn.correct;
    const points = isCorrect ? 10 : 3;
    processTurnResponse(option, isCorrect, points);
  };

  const handleFreeTextSubmit = () => {
    if (!freeText.trim() || !activeScene || !currentTurn) return;
    if (currentTurn.speaker !== 'user') return;

    const lowerText = freeText.toLowerCase();
    const hasKeyword = currentTurn.expectedKeywords
      ? currentTurn.expectedKeywords.some(k => lowerText.includes(k.toLowerCase()))
      : true;

    const isCorrect = hasKeyword;
    const points = isCorrect ? 10 : 3;
    processTurnResponse(freeText.trim(), isCorrect, points);
    setFreeText('');
  };

  // ---------- AI Free Dialogue mode ----------

  const startAiFreeDialogue = () => {
    const sid = `text_free_${Date.now()}`;
    setAiSessionId(sid);
    setActiveScene('ai_free');
    setIsAiFreeMode(true);
    setMessages([]);
    setIsComplete(false);
    setScore(0);
    setCorrectCount(0);
    setTotalTurns(0);
    setFreeText('');
    setAiErrorMsg(null);
    setFeedback(null);
    setSelectedOption(null);

    // Init AI service session for this text dialogue
    AIDialogueService.initSession(sid, null, language);
  };

  const handleAiFreeSubmit = async () => {
    const text = freeText.trim();
    if (!text || isAiThinking || !isAiFreeMode) return;

    setAiErrorMsg(null);
    setMessages(prev => [...prev, { role: 'user', text }]);
    setFreeText('');
    setIsAiThinking(true);

    try {
      let aiText;

      if (AIDialogueService.isLLMReady() && AIDialogueService.config.mode === 'edge-function') {
        // Use Edge Function via the service's text mode helper
        const msgs = AIDialogueService._contexts.get(aiSessionId)?.messages || [];
        aiText = await AIDialogueService.callEdgeFunctionText(
          [...msgs, { role: 'user', content: text }],
          language,
          null,
        );
        // Update context manually since we bypassed generateResponse
        const ctx = AIDialogueService._contexts.get(aiSessionId);
        if (ctx) {
          ctx.messages.push({ role: 'user', content: text });
          ctx.messages.push({ role: 'assistant', content: aiText });
          ctx.turnCount++;
        }
      } else {
        // Rule engine fallback
        const ctx = AIDialogueService._contexts.get(aiSessionId);
        if (ctx) {
          ctx.messages.push({ role: 'user', content: text });
          ctx.turnCount++;
          aiText = AIDialogueService._generateEnhancedRuleResponse(ctx, text);
          ctx.messages.push({ role: 'assistant', content: aiText });
        } else {
          aiText = '抱歉，会话异常，请重新开始。';
        }
      }

      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (e) {
      console.error('[TextDialogue] AI free mode error:', e);
      const code = e.code || 'LLM_ERROR';
      setAiErrorMsg(AIDialogueService.getErrorMessage(code, e.details));

      // Fallback to rule engine
      try {
        const ctx = AIDialogueService._contexts.get(aiSessionId);
        if (ctx) {
          ctx.messages.push({ role: 'user', content: text });
          ctx.turnCount++;
          const fallbackText = AIDialogueService._generateEnhancedRuleResponse(ctx, text);
          ctx.messages.push({ role: 'assistant', content: fallbackText });
          setMessages(prev => [...prev, { role: 'ai', text: fallbackText }]);
        }
      } catch (e2) {
        setMessages(prev => [...prev, { role: 'ai', text: '抱歉，我这边出了点问题，请稍后再试。' }]);
      }
    } finally {
      setIsAiThinking(false);
    }
  };

  const resetScenario = () => {
    if (aiSessionId) {
      AIDialogueService.endSession(aiSessionId);
    }
    setActiveScene(null);
    setMessages([]);
    setTurnIndex(0);
    setIsComplete(false);
    setScore(0);
    setIsAiFreeMode(false);
    setAiErrorMsg(null);
    setAiSessionId(null);
  };

  useEffect(() => {
    aiMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAiThinking]);

  // ---------- Render: Scene Selection ----------

  if (!activeScene) {
    return (
      <div className="flex flex-col gap-4">
        <div className="text-center mb-2">
          <h2 className="text-lg font-bold text-slate-800">选择对话场景</h2>
          <p className="text-sm text-slate-500">在情境中练习文字对话</p>
        </div>

        {/* Language selector */}
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
          <span className="text-xs text-slate-400 whitespace-nowrap">练习语种：</span>
          {LEARNING_LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                language === lang.code
                  ? 'bg-brand-100 text-brand-700 ring-1 ring-brand-300'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lang.flag} {lang.name}
              {lang.type === 'beta' && <span className="ml-0.5 text-[9px] opacity-70">β</span>}
            </button>
          ))}
        </div>

        {/* AI Free Dialogue button for non-Chinese or when logged in */}
        {language !== 'zh-CN' && (
          <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
            <Icon name="alert-circle" size={14} />
            <span>当前语种「{LANGUAGE_MAP[language]?.name || language}」的文字对话场景内容正在建设中</span>
          </div>
        )}

        {AIDialogueService.isLLMReady() && (
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={startAiFreeDialogue}
            className="flex items-start gap-3 p-4 bg-brand-50 rounded-2xl border-2 border-brand-200 text-left hover:border-brand-400 hover:shadow-md transition-all btn-press"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-500/20 text-white text-lg">
              🤖
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-brand-800">AI 自由对话</h3>
              <p className="text-xs text-brand-600 mt-0.5">与云端大模型自由练习文字对话，不限场景</p>
            </div>
            <Icon name="chevron" size={18} className="text-brand-400 flex-shrink-0 mt-2" />
          </motion.button>
        )}

        {!AIDialogueService.isLLMReady() && language !== 'zh-CN' && (
          <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-lg">
            <Icon name="info" size={14} />
            <span>登录并配置 Supabase 后可使用 AI 自由对话模式</span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-3">
          {scenarios.map(([key, scene]) => (
            <motion.button
              key={key}
              whileTap={{ scale: 0.98 }}
              onClick={() => startScenario(key)}
              className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200 text-left hover:border-brand-300 hover:shadow-md transition-all btn-press"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-500/20 text-white text-lg">
                💬
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-800">{scene.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{scene.description}</p>
              </div>
              <Icon name="chevron" size={18} className="text-slate-400 flex-shrink-0 mt-2" />
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
          <Icon name="alert-circle" size={14} />
          <span>演示数据 — 对话场景为示例内容</span>
        </div>
      </div>
    );
  }

  // ---------- Render: AI Free Dialogue Mode ----------

  if (isAiFreeMode) {
    return (
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={resetScenario}
            className="p-2 rounded-xl hover:bg-slate-100 transition-colors btn-press"
          >
            <Icon name="chevron-left" size={20} />
          </button>
          <div className="flex-1">
            <h2 className="text-base font-bold text-slate-800">AI 自由对话</h2>
            <p className="text-xs text-slate-400">
              {LANGUAGE_MAP[language]?.flag} {LANGUAGE_MAP[language]?.name || language}
              {' · '}
              {AIDialogueService.isLLMReady() ? 'AI 驱动' : '规则引擎'}
            </p>
          </div>
          {isComplete && <Badge variant="success">已完成</Badge>}
        </div>

        {/* AI Error message */}
        {aiErrorMsg && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-3">
            <p className="text-xs text-amber-700">{aiErrorMsg}</p>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col gap-3 mb-3">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-gradient text-white rounded-br-md'
                      : 'bg-slate-100 text-slate-700 rounded-bl-md'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isAiThinking && (
            <div className="flex justify-start">
              <div className="bg-slate-100 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <span className="text-xs text-slate-400 ml-1">AI 思考中...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={aiMessagesEndRef} />
        </div>

        {/* Input */}
        {!isComplete && (
          <div className="flex gap-2">
            <input
              type="text"
              value={freeText}
              onChange={e => setFreeText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAiFreeSubmit()}
              placeholder="输入消息开始对话..."
              disabled={isAiThinking}
              maxLength={2000}
              className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-sm transition-colors disabled:opacity-50"
            />
            <Button
              variant="primary"
              size="sm"
              onClick={handleAiFreeSubmit}
              disabled={!freeText.trim() || isAiThinking}
              icon="arrow-right"
            />
          </div>
        )}

        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3 py-4"
          >
            <div className="text-center">
              <h3 className="text-lg font-bold text-slate-800">对话完成！</h3>
              <p className="text-sm text-slate-500 mt-1">继续加油练习！</p>
            </div>
            <div className="flex gap-3 w-full">
              <Button variant="secondary" fullWidth onClick={resetScenario} icon="refresh">
                返回选择
              </Button>
              <Button variant="primary" fullWidth onClick={startAiFreeDialogue} icon="play">
                重新开始
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  // ---------- Render: Scenario-based Mode ----------

  const scene = TEXT_DIALOGUE_SCENARIOS[activeScene];
  const currentUserTurn = currentTurn?.speaker === 'user' ? currentTurn : null;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={resetScenario}
          className="p-2 rounded-xl hover:bg-slate-100 transition-colors btn-press"
        >
          <Icon name="chevron-left" size={20} />
        </button>
        <div className="flex-1">
          <h2 className="text-base font-bold text-slate-800">{scene.name}</h2>
          <p className="text-xs text-slate-400">{scene.description}</p>
        </div>
        {isComplete && (
          <Badge variant="success">已完成</Badge>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col gap-3 mb-3">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                  msg.role === 'user'
                    ? 'bg-brand-gradient text-white rounded-br-md'
                    : 'bg-slate-100 text-slate-700 rounded-bl-md'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {feedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center py-1.5 rounded-lg text-xs font-medium ${
              feedback.isCorrect ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
            }`}
          >
            {feedback.message}
          </motion.div>
        )}
      </div>

      {/* Input area */}
      {!isComplete && currentUserTurn && (
        <div className="flex flex-col gap-2">
          {currentUserTurn.options && (
            <div className="grid grid-cols-1 gap-2">
              {currentUserTurn.options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect(opt)}
                  disabled={feedback !== null}
                  className="flex items-center gap-3 p-3 bg-white border-2 border-slate-200 rounded-xl text-left text-sm hover:border-brand-400 hover:text-brand-700 transition-all disabled:opacity-50"
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center font-medium flex-shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{opt}</span>
                </motion.button>
              ))}
            </div>
          )}

          {/* Free text input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={freeText}
              onChange={e => setFreeText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleFreeTextSubmit()}
              placeholder="或输入自己的回答..."
              className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-sm transition-colors"
              disabled={feedback !== null}
            />
            <Button
              variant="primary"
              size="sm"
              onClick={handleFreeTextSubmit}
              disabled={!freeText.trim() || feedback !== null}
              icon="arrow-right"
            />
          </div>
        </div>
      )}

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3 py-4"
        >
          <div className="text-center">
            <h3 className="text-lg font-bold text-slate-800">对话完成！</h3>
            <p className="text-sm text-slate-500 mt-1">
              得分：{score} 分 | 正确回应：{correctCount}/{totalTurns}
            </p>
          </div>
          <div className="flex gap-3 w-full">
            <Button variant="secondary" fullWidth onClick={resetScenario} icon="refresh">
              选择其他场景
            </Button>
            <Button variant="primary" fullWidth onClick={() => startScenario(activeScene)} icon="play">
              重新开始
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

Object.assign(window, { TextDialogue });
