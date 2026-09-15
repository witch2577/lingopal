// ========== Typing Practice Module ==========
// Real-time character-by-character comparison with correctness highlighting
// Supports: English (direct), Japanese (Hepburn romaji), Korean (Revised Romanization)

const TypingPractice = () => {
  // ---- All hooks at top, unconditional ----
  const { isMobile } = useMobileDetect();
  const currentLang = useLearningStore(s => s.currentLanguage) || 'en';

  // View state: 'languages' | 'practice' | 'result'
  const [view, setView] = useState('languages');
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Practice state
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [checkResult, setCheckResult] = useState(null);
  const [itemStartTime, setItemStartTime] = useState(0);
  const [itemTimes, setItemTimes] = useState([]);
  const [results, setResults] = useState([]);
  const [totalStartTime, setTotalStartTime] = useState(0);

  const inputRef = useRef(null);

  // Available languages for typing
  const availableLanguages = useMemo(() => {
    return Object.keys(TYPING_PRACTICE_DATA).map(code => {
      const data = TYPING_PRACTICE_DATA[code];
      const langMeta = LANGUAGE_MAP[code];
      return {
        code,
        name: langMeta?.name || data.name,
        flag: langMeta?.flag || data.flag,
        description: data.description,
        count: data.items.length,
      };
    });
  }, []);

  // Reset practice state
  const resetPractice = useCallback(() => {
    setItems([]);
    setCurrentIndex(0);
    setUserInput('');
    setChecked(false);
    setCheckResult(null);
    setItemStartTime(0);
    setItemTimes([]);
    setResults([]);
    setTotalStartTime(0);
  }, []);

  // Start practice for a language
  const startPractice = useCallback((langCode) => {
    const data = TYPING_PRACTICE_DATA[langCode];
    if (!data || !data.items || data.items.length === 0) return;
    const shuffled = [...data.items].sort(() => Math.random() - 0.5);
    setSelectedLanguage(langCode);
    setItems(shuffled);
    setCurrentIndex(0);
    setUserInput('');
    setChecked(false);
    setCheckResult(null);
    setItemTimes([]);
    setResults([]);
    setTotalStartTime(Date.now());
    setItemStartTime(Date.now());
    setView('practice');
  }, []);

  // Focus input when entering practice or next item
  useEffect(() => {
    if (view === 'practice' && !checked) {
      const t = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(t);
    }
  }, [view, currentIndex, checked]);

  // Handle input change
  const handleInputChange = useCallback((e) => {
    if (checked) return;
    setUserInput(e.target.value);
  }, [checked]);

  // Check answer
  const handleCheck = useCallback(() => {
    if (checked || !items[currentIndex]) return;
    const item = items[currentIndex];
    const result = validateTypingAnswer(item, userInput, selectedLanguage);
    const elapsed = Date.now() - itemStartTime;
    setChecked(true);
    setCheckResult(result);
    setItemTimes(prev => [...prev, elapsed]);
    setResults(prev => [...prev, { itemId: item.id, correct: result.correct, elapsed }]);
  }, [checked, items, currentIndex, userInput, selectedLanguage, itemStartTime]);

  // Handle Enter key to submit or next
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!checked) {
        handleCheck();
      } else {
        handleNext();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, handleCheck]);

  // Go to next item or finish
  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= items.length) {
      setView('result');
      return;
    }
    setCurrentIndex(prev => prev + 1);
    setUserInput('');
    setChecked(false);
    setCheckResult(null);
    setItemStartTime(Date.now());
  }, [currentIndex, items.length]);

  // Calculate result stats
  const resultStats = useMemo(() => {
    if (results.length === 0) return null;
    const correctCount = results.filter(r => r.correct).length;
    const total = results.length;
    const accuracy = Math.round((correctCount / total) * 100);
    const totalTime = itemTimes.reduce((a, b) => a + b, 0);
    const avgTime = Math.round(totalTime / total / 1000 * 10) / 10;
    const passed = accuracy >= 80;
    return { correctCount, total, accuracy, totalTime, avgTime, passed };
  }, [results, itemTimes]);

  // Save progress on result
  useEffect(() => {
    if (view !== 'result' || !resultStats || !selectedLanguage) return;
    const saveProgress = async () => {
      try {
        const userId = useUserStore.getState().userId;
        if (!userId || !window.db) return;
        await db.userProgress.put({
          userId,
          language: selectedLanguage,
          levelId: `typing-${selectedLanguage}-beginner`,
          progressType: 'typing',
          score: resultStats.accuracy,
          stars: resultStats.passed ? (resultStats.accuracy >= 100 ? 3 : resultStats.accuracy >= 90 ? 2 : 1) : 0,
          completedAt: Date.now(),
          correctCount: resultStats.correctCount,
          totalCount: resultStats.total,
          totalTime: resultStats.totalTime,
        });
        // Award XP
        const xpBase = resultStats.passed ? 20 : 10;
        useUserStore.getState().addXP(xpBase, 'typing_practice');
      } catch (e) {
        console.error('[TypingPractice] 保存进度失败:', e);
      }
    };
    saveProgress();
  }, [view, resultStats, selectedLanguage]);

  // Handle back to language selection
  const handleBack = useCallback(() => {
    resetPractice();
    setView('languages');
  }, [resetPractice]);

  // Retry same set
  const handleRetry = useCallback(() => {
    if (selectedLanguage) {
      startPractice(selectedLanguage);
    }
  }, [selectedLanguage, startPractice]);

  // ---- Render helpers ----
  const renderLanguageSelect = () => (
    <div className="flex flex-col gap-3">
      <div>
        <h2 className="text-base font-bold text-slate-800">打字练习</h2>
        <p className="text-xs text-slate-400 mt-0.5">选择语言，练习键盘输入</p>
      </div>
      <div className="flex flex-col gap-2.5">
        {availableLanguages.map(lang => (
          <motion.button
            key={lang.code}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => startPractice(lang.code)}
            className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-slate-100 text-left hover:bg-slate-50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl flex-shrink-0">
              {lang.flag}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800 text-sm">{lang.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                  {lang.count} 题
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{lang.description}</p>
            </div>
            <Icon name="chevron-right" size={16} className="text-slate-300 flex-shrink-0" />
          </motion.button>
        ))}
      </div>
    </div>
  );

  const renderPractice = () => {
    const item = items[currentIndex];
    if (!item) return null;
    const data = TYPING_PRACTICE_DATA[selectedLanguage];
    const progress = ((currentIndex) / items.length) * 100;

    return (
      <div className="flex flex-col h-full gap-3">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleBack}
            className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors touch-target"
          >
            <Icon name="chevron-left" size={18} />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-lg">{data.flag}</span>
              <span className="text-sm font-semibold text-slate-700">{data.name}打字</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
              <motion.div
                className="h-full bg-brand-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
          <div className="text-xs text-slate-400 whitespace-nowrap">
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* Target display */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4 py-4">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-slate-800 mb-2 tracking-wide">
              {item.target}
            </div>
            <div className="text-sm text-slate-500">
              {item.meaning}
            </div>
            {data.inputMode === 'romaji' && (
              <div className="text-[10px] text-slate-400 mt-1">
                请输入对应的罗马音
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="w-full max-w-sm">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={checked}
              placeholder={data.inputMode === 'romaji' ? '输入罗马音...' : '输入单词...'}
              className={`w-full px-4 py-3 rounded-xl text-center text-lg font-medium border-2 outline-none transition-all ${
                checked
                  ? checkResult?.correct
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                    : 'border-rose-400 bg-rose-50 text-rose-700'
                  : 'border-slate-200 bg-white text-slate-800 focus:border-brand-400'
              }`}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />

            {/* Character-by-character highlight */}
            {userInput.length > 0 && !checked && selectedLanguage === 'en' && (
              <div className="flex justify-center gap-1 mt-2 flex-wrap">
                {userInput.split('').map((char, i) => {
                  const expected = item.target[i];
                  const isCorrect = expected && char.toLowerCase() === expected.toLowerCase();
                  const isExtra = i >= item.target.length;
                  return (
                    <span
                      key={i}
                      className={`inline-block px-1.5 py-0.5 rounded text-sm font-mono ${
                        isExtra
                          ? 'bg-rose-100 text-rose-600'
                          : isCorrect
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'bg-rose-100 text-rose-600'
                      }`}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            )}

            {/* Feedback */}
            {checked && checkResult && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 text-center px-3 py-2 rounded-xl text-sm ${
                  checkResult.correct
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-rose-100 text-rose-700'
                }`}
              >
                <div className="font-medium">
                  {checkResult.correct ? '\u2705 正确！' : '\u274C ' + checkResult.message}
                </div>
                {!checkResult.correct && item.hint && (
                  <div className="text-xs mt-1 opacity-80">提示：{item.hint}</div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Action button */}
        <div className="pb-2">
          {!checked ? (
            <Button
              fullWidth
              onClick={handleCheck}
              disabled={!userInput.trim()}
              icon="check"
            >
              确认
            </Button>
          ) : (
            <Button
              fullWidth
              onClick={handleNext}
              variant={checkResult?.correct ? 'primary' : 'secondary'}
              icon={currentIndex + 1 >= items.length ? 'flag' : 'arrow-right'}
            >
              {currentIndex + 1 >= items.length ? '查看结果' : '下一题'}
            </Button>
          )}
        </div>
      </div>
    );
  };

  const renderResult = () => {
    if (!resultStats) return null;
    const data = TYPING_PRACTICE_DATA[selectedLanguage];

    return (
      <div className="flex flex-col h-full gap-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleBack}
            className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors touch-target"
          >
            <Icon name="chevron-left" size={18} />
          </button>
          <h2 className="text-base font-bold text-slate-800">练习结果</h2>
        </div>

        {/* Result card */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl ${
              resultStats.passed
                ? 'bg-emerald-100 text-emerald-600'
                : 'bg-amber-100 text-amber-600'
            }`}
          >
            {resultStats.passed ? '\uD83C\uDF89' : '\uD83D\uDCD6'}
          </motion.div>

          <div className="text-center">
            <div className={`text-3xl font-bold ${
              resultStats.passed ? 'text-emerald-600' : 'text-amber-600'
            }`}>
              {resultStats.accuracy}%
            </div>
            <div className="text-sm text-slate-500 mt-1">
              {resultStats.passed ? '通过！' : '未通过（需 ≥80%）'}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
            <div className="bg-white rounded-xl p-3 text-center border border-slate-100">
              <div className="text-lg font-bold text-slate-800">{resultStats.correctCount}</div>
              <div className="text-[10px] text-slate-400">正确</div>
            </div>
            <div className="bg-white rounded-xl p-3 text-center border border-slate-100">
              <div className="text-lg font-bold text-slate-800">{resultStats.total}</div>
              <div className="text-[10px] text-slate-400">总题</div>
            </div>
            <div className="bg-white rounded-xl p-3 text-center border border-slate-100">
              <div className="text-lg font-bold text-slate-800">{resultStats.avgTime}s</div>
              <div className="text-[10px] text-slate-400">平均用时</div>
            </div>
          </div>

          {/* Per-item breakdown */}
          <div className="w-full max-w-xs bg-white rounded-xl border border-slate-100 overflow-hidden">
            <div className="px-3 py-2 border-b border-slate-100">
              <span className="text-xs font-medium text-slate-600">逐题记录</span>
            </div>
            <div className="max-h-32 overflow-y-auto hide-scrollbar">
              {results.map((r, i) => {
                const item = items[i];
                return (
                  <div key={r.itemId} className="flex items-center justify-between px-3 py-1.5 text-xs border-b border-slate-50 last:border-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-slate-400 w-4">{i + 1}</span>
                      <span className="font-medium text-slate-700 truncate">{item?.target}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-slate-400">{Math.round(r.elapsed / 1000)}s</span>
                      <span className={r.correct ? 'text-emerald-500' : 'text-rose-500'}>
                        {r.correct ? '\u2713' : '\u2717'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2 pb-2">
          <Button fullWidth onClick={handleRetry} icon="refresh-cw">
            再练一次
          </Button>
          <Button fullWidth variant="secondary" onClick={handleBack} icon="grid">
            选择其他语言
          </Button>
        </div>
      </div>
    );
  };

  // ---- Main render ----
  return (
    <div className="flex flex-col h-full">
      <AnimatePresence mode="wait">
        {view === 'languages' && (
          <motion.div
            key="languages"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: isMobile ? 0.12 : 0.2 }}
            className="h-full"
          >
            {renderLanguageSelect()}
          </motion.div>
        )}
        {view === 'practice' && (
          <motion.div
            key="practice"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: isMobile ? 0.12 : 0.2 }}
            className="h-full"
          >
            {renderPractice()}
          </motion.div>
        )}
        {view === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: isMobile ? 0.12 : 0.2 }}
            className="h-full"
          >
            {renderResult()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Object.assign(window, { TypingPractice });
