// ========== Text Translator Component ==========

const TextTranslator = () => {
  const {
    sourceText, translatedText, sourceLang, targetLang,
    isTranslating, history, error,
    setSourceText, setTranslatedText, setSourceLang, setTargetLang,
    swapLanguages, setIsTranslating, addHistory, setError,
  } = useTranslationStore();

  const textareaRef = useRef(null);
  const debounceRef = useRef(null);
  const resultRef = useRef(null);

  const { isMobile } = useMobileDetect();
  const { keyboardHeight } = useKeyboard();
  const sourceLangObj = LANGUAGE_MAP[sourceLang];
  const targetLangObj = LANGUAGE_MAP[targetLang];
  const charCount = sourceText.length;
  const maxChars = 5000;

  // UI state for confidence & alternatives
  const [confidenceInfo, setConfidenceInfo] = useState(null);
  const [alternatives, setAlternatives] = useState([]);

  const isSourceDialect = DIALECT_CODES.includes(sourceLang);
  const isTargetDialect = DIALECT_CODES.includes(targetLang);
  const isSourceBeta = LANGUAGE_MAP[sourceLang]?.type === 'beta';
  const isTargetBeta = LANGUAGE_MAP[targetLang]?.type === 'beta';
  const showBetaBadge = isSourceDialect || isTargetDialect || isSourceBeta || isTargetBeta;

  const doTranslate = useCallback(async (text) => {
    if (!text || !text.trim()) {
      setTranslatedText('');
      setConfidenceInfo(null);
      setAlternatives([]);
      return;
    }
    setIsTranslating(true);
    setError(null);
    setConfidenceInfo(null);
    setAlternatives([]);
    try {
      const result = await TranslationService.translate(text, sourceLang, targetLang);
      setTranslatedText(result.translatedText);

      // Set confidence info
      if (result.confidence !== undefined) {
        setConfidenceInfo({
          confidence: result.confidence,
          isLocalDict: result.isLocalDict,
          isRuleBased: result.isRuleBased,
          isFallback: result.isFallback,
          isUnsupported: result.isUnsupported,
          note: result.note,
        });
      }
      if (result.alternatives && result.alternatives.length > 0) {
        setAlternatives(result.alternatives);
      }

      // save to history
      addHistory({
        sourceText: text,
        translatedText: result.translatedText,
        sourceLang: sourceLang,
        targetLang: targetLang,
        mode: 'text',
      });

      // Record translation activity
      const userId = useUserStore.getState().userId;
      if (userId) {
        recordActivity(userId, 'translation');
      }

      // check achievements
      if (userId && window.db) {
        db.translationHistory.count().then(c => {
          if (c >= 100) {
            const ach = ACHIEVEMENTS.find(a => a.id === 'translator-100');
            if (ach) {
              useUserStore.getState().unlockAchievement(ach.id, ach.title, ach.desc, ach.icon);
            }
          }
        });
      }
    } catch (e) {
      setError(e.message || '翻译服务暂时不可用');
    } finally {
      setIsTranslating(false);
    }
  }, [sourceLang, targetLang]);

  // Debounced auto-translate on input
  const handleInput = (e) => {
    const text = e.target.value;
    if (text.length > maxChars) return;
    setSourceText(text);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (text.trim()) {
      debounceRef.current = setTimeout(() => doTranslate(text), 500);
    } else {
      setTranslatedText('');
    }
  };

  // Scroll result into view when translation completes
  useEffect(() => {
    if (translatedText && resultRef.current && isMobile) {
      setTimeout(() => scrollToElement(resultRef.current), 100);
    }
  }, [translatedText, isMobile]);

  const handleCopy = async () => {
    if (!translatedText) return;
    try {
      await navigator.clipboard.writeText(translatedText);
      useUIStore.getState().showNotification('已复制到剪贴板', 'success');
    } catch (e) {
      useUIStore.getState().showNotification('复制失败', 'error');
    }
  };

  const handleClear = () => {
    setSourceText('');
    setTranslatedText('');
    if (textareaRef.current) textareaRef.current.focus();
  };

  const handleFavorite = async () => {
    if (!translatedText) return;
    const userId = useUserStore.getState().userId;
    if (!userId) {
      useUIStore.getState().showNotification('请先登录', 'warning');
      return;
    }
    try {
      await db.wordBooks.add({
        userId,
        word: sourceText,
        language: targetLang,
        translation: translatedText,
        addedAt: Date.now(),
        reviewCount: 0,
      });
      useUIStore.getState().showNotification('已收藏到单词本', 'success');

      // Record wordbook activity
      recordActivity(userId, 'wordbook', { count: 1 });

      // check word collector achievement
      const count = await db.wordBooks.where('userId').equals(userId).count();
      if (count >= 20) {
        const ach = ACHIEVEMENTS.find(a => a.id === 'word-collector');
        if (ach) {
          useUserStore.getState().unlockAchievement(ach.id, ach.title, ach.desc, ach.icon);
        }
      }
    } catch (e) {
      // already exists
      useUIStore.getState().showNotification('单词已在单词本中', 'info');
    }
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {/* Language Selectors */}
      <div className="flex items-center justify-between gap-2">
        <LanguageSelector
          value={sourceLang}
          onChange={setSourceLang}
          label="源语言"
          showAuto={true}
          className="flex-1"
        />
        <button
          onClick={swapLanguages}
          disabled={sourceLang === 'auto'}
          className={`p-2.5 rounded-xl transition-all btn-press touch-target ${
            sourceLang === 'auto'
              ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
              : 'bg-brand-100 text-brand-600 hover:bg-brand-200'
          }`}
          title="互换语言"
        >
          <motion.div
            animate={{ rotate: sourceLang !== 'auto' ? [0, 180] : 0 }}
            transition={{ duration: 0.3 }}
            key={sourceLang + targetLang}
          >
            <Icon name="swap" size={18} />
          </motion.div>
        </button>
        <LanguageSelector
          value={targetLang}
          onChange={setTargetLang}
          label="目标语言"
          showAuto={false}
          className="flex-1"
        />
      </div>

      {/* Source Text Input */}
      <Card className="relative" padding="p-0">
        <textarea
          ref={textareaRef}
          value={sourceText}
          onChange={handleInput}
          placeholder="输入要翻译的文字..."
          className="w-full h-32 sm:h-40 p-3 sm:p-4 text-base resize-none bg-transparent focus:outline-none placeholder:text-slate-400 text-slate-700"
          maxLength={maxChars}
          style={{
            // Ensure textarea is scrollable when keyboard is open
            maxHeight: isMobile ? `calc(50vh - ${keyboardHeight}px)` : undefined,
          }}
        />
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex items-center gap-2">
          <span className={`text-xs ${charCount > maxChars * 0.9 ? 'text-amber-500' : 'text-slate-400'}`}>
            {charCount}/{maxChars}
          </span>
          {sourceText && (
            <button
              onClick={handleClear}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors touch-target-sm"
            >
              <Icon name="x" size={16} />
            </button>
          )}
        </div>
      </Card>

      {/* Result Area */}
      <Card className="relative" padding="p-0" ref={resultRef}>
        <div className="px-3 pt-2.5 pb-1 sm:px-4 sm:pt-3 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-slate-500">{targetLangObj.flag} {targetLangObj.name}</span>
            {showBetaBadge && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">Beta</span>
            )}
            {isTranslating && (
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Spinner size={12} className="text-brand-500" /> 翻译中...
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={handleFavorite}
              disabled={!translatedText}
              className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-rose-500 transition-colors disabled:opacity-40 touch-target-sm"
              title="收藏到单词本"
            >
              <Icon name="bookmark" size={18} />
            </button>
            <AudioPlayer text={translatedText} lang={targetLang} />
            <button
              onClick={handleCopy}
              disabled={!translatedText}
              className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors disabled:opacity-40 touch-target-sm"
              title="复制译文"
            >
              <Icon name="copy" size={18} />
            </button>
          </div>
        </div>
        <div className="p-3 sm:p-4 min-h-[80px] sm:min-h-[100px]">
          {translatedText ? (
            <motion.div
              key={translatedText}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-base text-slate-800 leading-relaxed whitespace-pre-wrap">
                {translatedText}
              </p>
              {/* Confidence & Note */}
              {confidenceInfo && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {confidenceInfo.confidence > 0 && (
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                      confidenceInfo.confidence >= 0.9
                        ? 'bg-emerald-50 text-emerald-600'
                        : confidenceInfo.confidence >= 0.6
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-rose-50 text-rose-600'
                    }`}>
                      置信度 {Math.round(confidenceInfo.confidence * 100)}%
                    </span>
                  )}
                  {confidenceInfo.isRuleBased && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">
                      规则映射
                    </span>
                  )}
                  {confidenceInfo.isFallback && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium">
                      离线回退
                    </span>
                  )}
                  {confidenceInfo.isUnsupported && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 font-medium">
                      暂不支持
                    </span>
                  )}
                  {confidenceInfo.note && (
                    <span className="text-[11px] text-slate-400">{confidenceInfo.note}</span>
                  )}
                </div>
              )}
              {/* Alternatives */}
              {alternatives.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-[11px] text-slate-400 mb-1.5">您可能想找：</p>
                  <div className="flex flex-wrap gap-1.5">
                    {alternatives.map((alt, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSourceText(alt.source);
                          doTranslate(alt.source);
                        }}
                        className="px-2 py-1 text-xs bg-slate-50 text-slate-600 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors"
                      >
                        {alt.source} → {alt.target}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <p className="text-slate-300 text-sm">翻译结果将显示在这里</p>
          )}
        </div>
      </Card>

      {/* Error Banner */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ErrorBanner
              message={error}
              onRetry={() => {
                setError(null);
                if (sourceText.trim()) doTranslate(sourceText);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Phrases */}
      <div className="flex flex-wrap gap-2">
        {['你好', '谢谢', '对不起', '多少钱', '我爱你'].map(phrase => (
          <button
            key={phrase}
            onClick={() => {
              setSourceText(phrase);
              doTranslate(phrase);
            }}
            className="px-3 py-1.5 text-xs bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors btn-press touch-target-sm"
          >
            {phrase}
          </button>
        ))}
      </div>

      {/* History (Recent) */}
      {history.length > 0 && (
        <div className="mt-2">
          <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
            <Icon name="clock" size={16} className="text-slate-400" />
            最近翻译
          </h4>
          <div className="flex flex-col gap-2 max-h-40 sm:max-h-48 overflow-y-auto">
            {history.slice(0, 5).map((h, i) => (
              <div
                key={i}
                onClick={() => {
                  setSourceText(h.sourceText);
                  setSourceLang(h.sourceLang);
                  setTargetLang(h.targetLang);
                  setTranslatedText(h.translatedText);
                }}
                className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors"
              >
                <div className="text-sm text-slate-700 truncate">{h.sourceText}</div>
                <div className="text-xs text-slate-400 truncate mt-0.5">{h.translatedText}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { TextTranslator });
