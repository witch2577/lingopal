// ========== Word Spelling Practice & Games ==========
// Modes: listen | meaning | scramble

const WordSpelling = () => {
  const gameMode = useWrittenStore(s => s.gameMode);
  const setGameMode = useWrittenStore(s => s.setGameMode);
  const currentLanguage = useWrittenStore(s => s.currentLanguage);
  const isPlaying = useWrittenStore(s => s.isPlaying);
  const score = useWrittenStore(s => s.score);
  const streak = useWrittenStore(s => s.streak);
  const startGame = useWrittenStore(s => s.startGame);
  const answerQuestion = useWrittenStore(s => s.answerQuestion);
  const endGame = useWrittenStore(s => s.endGame);
  const reset = useWrittenStore(s => s.reset);

  const [difficulty, setDifficulty] = useState('beginner');
  const [currentWord, setCurrentWord] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [scrambledLetters, setScrambledLetters] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const inputRef = useRef(null);

  const wordPool = useMemo(() => {
    const pool = SPELLING_WORDS[currentLanguage]?.[difficulty] || [];
    return [...pool].sort(() => Math.random() - 0.5);
  }, [currentLanguage, difficulty, isPlaying]);

  const getNextWord = useCallback(() => {
    if (wordIndex >= wordPool.length) {
      setShowResult(true);
      endGame();
      return;
    }
    const word = wordPool[wordIndex];
    setCurrentWord(word);
    setUserInput('');
    setSelectedLetters([]);
    setFeedback(null);

    if (gameMode === 'scramble') {
      const letters = word.word.split('').sort(() => Math.random() - 0.5);
      setScrambledLetters(letters.map((l, i) => ({ id: i, letter: l, used: false })));
    }

    setTimeout(() => {
      if (gameMode === 'listen' && word) {
        SpeechService.speak(word.word, currentLanguage, 0.85).catch(() => {});
      }
      inputRef.current?.focus();
    }, 300);
  }, [wordIndex, wordPool, gameMode, currentLanguage, endGame]);

  const handleStart = () => {
    reset();
    setWordIndex(0);
    setTotalQuestions(0);
    setCorrectCount(0);
    setShowResult(false);
    setCurrentWord(null);
    startGame();
  };

  useEffect(() => {
    if (isPlaying && wordPool.length > 0 && currentWord === null) {
      getNextWord();
    }
  }, [isPlaying, wordPool.length, currentWord, getNextWord]);

  useEffect(() => {
    if (isPlaying && wordIndex > 0) {
      getNextWord();
    }
  }, [wordIndex, isPlaying, getNextWord]);

  const checkAnswer = () => {
    if (!currentWord) return;
    const input = gameMode === 'scramble'
      ? selectedLetters.map(l => l.letter).join('')
      : userInput.trim();

    const isCorrect = input.toLowerCase() === currentWord.word.toLowerCase();
    const points = isCorrect ? 10 + (streak >= 2 ? streak * 2 : 0) : 0;
    const result = answerQuestion(isCorrect, points);

    setTotalQuestions(prev => prev + 1);
    if (isCorrect) setCorrectCount(prev => prev + 1);

    setFeedback({
      isCorrect,
      message: isCorrect
        ? `正确！+${points} 分${result.newStreak >= 3 ? ` 🔥 x${result.newStreak}` : ''}`
        : `正确答案是：${currentWord.word}`,
    });

    if (isCorrect) {
      useUIStore.getState().showNotification(`正确！+${points} 分`, 'success');
      useUserStore.getState().addXP(points);
    } else {
      useUIStore.getState().showNotification(`错误，正确答案是：${currentWord.word}`, 'error');
      // Save wrong answer to db
      if (window.db) {
        db.writtenRecords.add({
          type: 'spelling_error',
          word: currentWord.word,
          meaning: currentWord.meaning,
          userAnswer: input,
          language: currentLanguage,
          timestamp: Date.now(),
        }).catch(() => {});
      }
    }

    setTimeout(() => {
      setWordIndex(prev => prev + 1);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') checkAnswer();
  };

  const handleReplayAudio = () => {
    if (currentWord) {
      SpeechService.speak(currentWord.word, currentLanguage, 0.85).catch(() => {});
    }
  };

  const toggleLetter = (index) => {
    const letter = scrambledLetters[index];
    if (letter.used) {
      // Remove from selected
      const selectedIndex = selectedLetters.findIndex(l => l.id === letter.id);
      if (selectedIndex >= 0) {
        const newSelected = [...selectedLetters];
        newSelected.splice(selectedIndex, 1);
        setSelectedLetters(newSelected);
        setScrambledLetters(prev => {
          const next = [...prev];
          next[index] = { ...next[index], used: false };
          return next;
        });
      }
    } else {
      // Add to selected
      setSelectedLetters(prev => [...prev, letter]);
      setScrambledLetters(prev => {
        const next = [...prev];
        next[index] = { ...next[index], used: true };
        return next;
      });
    }
  };

  const handleClearLetters = () => {
    setSelectedLetters([]);
    setScrambledLetters(prev => prev.map(l => ({ ...l, used: false })));
  };

  if (!isPlaying) {
    return (
      <div className="flex flex-col gap-4">
        {/* Mode selector */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { key: 'listen', label: '听音拼写', icon: 'volume', desc: '播放发音，输入单词' },
            { key: 'meaning', label: '看义拼写', icon: 'bookmark', desc: '根据释义，输入单词' },
            { key: 'scramble', label: '字母重组', icon: 'refresh', desc: '点击字母，还原单词' },
          ].map(mode => (
            <button
              key={mode.key}
              onClick={() => setGameMode(mode.key)}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all btn-press ${
                gameMode === mode.key
                  ? 'border-brand-400 bg-brand-50 text-brand-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              <Icon name={mode.icon} size={22} />
              <span className="text-xs font-medium">{mode.label}</span>
            </button>
          ))}
        </div>

        {/* Difficulty */}
        <Card className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-slate-700">选择难度</h3>
          <div className="flex gap-2">
            {DIFFICULTY_LEVELS.map(level => (
              <button
                key={level.key}
                onClick={() => setDifficulty(level.key)}
                className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all btn-press ${
                  difficulty === level.key ? level.color : 'bg-slate-100 text-slate-500'
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </Card>

        {/* Language */}
        <Card className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-slate-700">选择语言</h3>
          <div className="flex gap-2 flex-wrap">
            {['en', 'ja'].map(code => (
              <button
                key={code}
                onClick={() => useWrittenStore.getState().setLanguage(code)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all btn-press ${
                  currentLanguage === code
                    ? 'bg-brand-100 text-brand-700 ring-2 ring-brand-300'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {LANGUAGE_MAP[code]?.flag} {LANGUAGE_MAP[code]?.name}
              </button>
            ))}
          </div>
        </Card>

        <Button variant="primary" size="lg" fullWidth onClick={handleStart} icon="play">
          开始练习
        </Button>

        <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
          <Icon name="alert-circle" size={14} />
          <span>演示数据 — 单词库为示例内容</span>
        </div>
      </div>
    );
  }

  if (showResult) {
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    // Record written activity on first render of result
    useEffect(() => {
      const userId = useUserStore.getState().userId;
      if (userId && totalQuestions > 0) {
        recordActivity(userId, 'written', {
          minutes: Math.ceil(totalQuestions * 0.3) || 1,
          questions: totalQuestions,
          correct: correctCount,
        });
      }
    }, []);

    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-24 h-24 rounded-full bg-brand-gradient flex items-center justify-center shadow-xl shadow-brand-500/30"
        >
          <Icon name="trophy" size={40} className="text-white" />
        </motion.div>

        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-800">练习完成！</h2>
          <p className="text-sm text-slate-500 mt-1">本次共答 {totalQuestions} 题</p>
        </div>

        <div className="grid grid-cols-3 gap-3 w-full">
          <Card className="text-center py-4">
            <div className="text-2xl font-bold text-brand-600">{score}</div>
            <div className="text-xs text-slate-500 mt-1">总得分</div>
          </Card>
          <Card className="text-center py-4">
            <div className="text-2xl font-bold text-emerald-600">{accuracy}%</div>
            <div className="text-xs text-slate-500 mt-1">正确率</div>
          </Card>
          <Card className="text-center py-4">
            <div className="text-2xl font-bold text-amber-600">{streak}</div>
            <div className="text-xs text-slate-500 mt-1">最高连击</div>
          </Card>
        </div>

        <div className="flex gap-3 w-full">
          <Button variant="secondary" fullWidth onClick={() => { reset(); }} icon="refresh">
            返回菜单
          </Button>
          <Button variant="primary" fullWidth onClick={handleStart} icon="play">
            再来一次
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="primary">{score} 分</Badge>
          {streak >= 2 && <Badge variant="accent">🔥 x{streak}</Badge>}
        </div>
        <span className="text-xs text-slate-400">
          {wordIndex + 1} / {wordPool.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-brand-gradient rounded-full"
          animate={{ width: `${((wordIndex) / wordPool.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Question card */}
      <Card className="flex flex-col items-center gap-4 py-6">
        {gameMode === 'listen' && (
          <>
            <button
              onClick={handleReplayAudio}
              className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center shadow-lg shadow-brand-500/30 btn-press"
            >
              <Icon name="volume" size={28} className="text-white" />
            </button>
            <p className="text-sm text-slate-500">点击播放发音，然后输入单词</p>
          </>
        )}

        {gameMode === 'meaning' && (
          <div className="text-center">
            <p className="text-lg font-medium text-slate-800">{currentWord?.meaning}</p>
            <p className="text-xs text-slate-400 mt-1">提示：{currentWord?.hint}</p>
          </div>
        )}

        {gameMode === 'scramble' && (
          <>
            <p className="text-sm text-slate-500">释义：{currentWord?.meaning}</p>
            {/* Selected letters */}
            <div className="flex items-center gap-1 min-h-[40px] flex-wrap justify-center">
              {selectedLetters.length === 0 ? (
                <span className="text-slate-300 text-sm">点击下方字母组成单词</span>
              ) : (
                selectedLetters.map((l, i) => (
                  <motion.span
                    key={`${l.id}-${i}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-9 h-9 flex items-center justify-center bg-brand-500 text-white rounded-lg text-lg font-bold"
                  >
                    {l.letter}
                  </motion.span>
                ))
              )}
            </div>
            {/* Available letters */}
            <div className="flex gap-1.5 flex-wrap justify-center">
              {scrambledLetters.map((l, i) => (
                <button
                  key={i}
                  onClick={() => toggleLetter(i)}
                  disabled={l.used}
                  className={`w-9 h-9 rounded-lg text-lg font-bold transition-all btn-press ${
                    l.used
                      ? 'bg-slate-100 text-slate-300'
                      : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-brand-400 hover:text-brand-600'
                  }`}
                >
                  {l.letter}
                </button>
              ))}
            </div>
            {selectedLetters.length > 0 && (
              <button onClick={handleClearLetters} className="text-xs text-slate-400 hover:text-slate-600">
                清空
              </button>
            )}
          </>
        )}

        {(gameMode === 'listen' || gameMode === 'meaning') && (
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入单词..."
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-center text-lg font-medium transition-colors"
            autoComplete="off"
            autoCapitalize="off"
          />
        )}

        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`w-full text-center py-2 rounded-lg text-sm font-medium ${
              feedback.isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
            }`}
          >
            {feedback.message}
          </motion.div>
        )}

        <Button
          variant="primary"
          fullWidth
          onClick={checkAnswer}
          disabled={feedback !== null || (gameMode === 'scramble' && selectedLetters.length === 0)}
        >
          确认
        </Button>
      </Card>
    </div>
  );
};

Object.assign(window, { WordSpelling });
