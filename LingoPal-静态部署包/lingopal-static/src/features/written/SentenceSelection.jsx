// ========== Sentence Selection (Fill-in-the-blank) ==========
// Chinese meaning provided, select correct word to fill blank

const SentenceSelection = () => {
  const currentLanguage = useWrittenStore(s => s.currentLanguage);
  const isPlaying = useWrittenStore(s => s.isPlaying);
  const score = useWrittenStore(s => s.score);
  const streak = useWrittenStore(s => s.streak);
  const startGame = useWrittenStore(s => s.startGame);
  const answerQuestion = useWrittenStore(s => s.answerQuestion);
  const endGame = useWrittenStore(s => s.endGame);
  const reset = useWrittenStore(s => s.reset);

  const [difficulty, setDifficulty] = useState('beginner');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const questionPool = useMemo(() => {
    const pool = SENTENCE_SELECTION_DATA[currentLanguage]?.[difficulty] || [];
    return [...pool].sort(() => Math.random() - 0.5);
  }, [currentLanguage, difficulty, isPlaying]);

  const currentQuestion = questionPool[questionIndex];

  const handleStart = () => {
    reset();
    setQuestionIndex(0);
    setSelectedOption(null);
    setFeedback(null);
    setShowResult(false);
    setTotalQuestions(0);
    setCorrectCount(0);
    setWrongAnswers([]);
    startGame();
  };

  const getNextQuestion = useCallback(() => {
    if (questionIndex + 1 >= questionPool.length) {
      setShowResult(true);
      endGame();
      return;
    }
    setQuestionIndex(prev => prev + 1);
    setSelectedOption(null);
    setFeedback(null);
  }, [questionIndex, questionPool.length, endGame]);

  const handleSelect = (option) => {
    if (feedback || !currentQuestion) return;
    setSelectedOption(option);

    const isCorrect = option === currentQuestion.correct;
    const points = isCorrect ? 10 + (streak >= 2 ? streak * 2 : 0) : 0;
    const result = answerQuestion(isCorrect, points);

    setTotalQuestions(prev => prev + 1);
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      useUIStore.getState().showNotification(`正确！+${points} 分`, 'success');
      useUserStore.getState().addXP(points);
    } else {
      useUIStore.getState().showNotification('答案错误', 'error');
      const wrong = {
        sentence: currentQuestion.sentence,
        meaning: currentQuestion.meaning,
        correct: currentQuestion.correct,
        selected: option,
        language: currentLanguage,
        timestamp: Date.now(),
      };
      setWrongAnswers(prev => [...prev, wrong]);
      // Save to db
      if (window.db) {
        db.writtenRecords.add({
          type: 'selection_error',
          ...wrong,
        }).catch(() => {});
      }
    }

    setFeedback({
      isCorrect,
      correctAnswer: currentQuestion.correct,
      message: isCorrect
        ? `正确！+${points} 分${result.newStreak >= 3 ? ` 🔥 x${result.newStreak}` : ''}`
        : `正确答案是：${currentQuestion.correct}`,
    });

    setTimeout(() => {
      getNextQuestion();
    }, 1800);
  };

  if (!isPlaying) {
    return (
      <div className="flex flex-col gap-4">
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

        {/* Wrong answers preview */}
        {wrongAnswers.length > 0 && (
          <Card className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Icon name="bookmark" size={16} />
              错题本 ({wrongAnswers.length} 题)
            </h3>
            <div className="flex flex-col gap-2 max-h-40 overflow-y-auto hide-scrollbar">
              {wrongAnswers.slice(-5).map((w, i) => (
                <div key={i} className="text-xs bg-red-50 text-red-700 px-3 py-2 rounded-lg">
                  <p className="font-medium">{w.sentence.replace('___', `【${w.correct}】`)}</p>
                  <p className="text-red-500 mt-0.5">你的答案：{w.selected}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        <Button variant="primary" size="lg" fullWidth onClick={handleStart} icon="play">
          开始练习
        </Button>

        <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
          <Icon name="alert-circle" size={14} />
          <span>演示数据 — 题目为示例内容</span>
        </div>
      </div>
    );
  }

  if (showResult) {
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

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

  if (!currentQuestion) return null;

  const parts = currentQuestion.sentence.split('___');

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="primary">{score} 分</Badge>
          {streak >= 2 && <Badge variant="accent">🔥 x{streak}</Badge>}
        </div>
        <span className="text-xs text-slate-400">
          {questionIndex + 1} / {questionPool.length}
        </span>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-brand-gradient rounded-full"
          animate={{ width: `${((questionIndex) / questionPool.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Question */}
      <Card className="flex flex-col gap-4 py-5">
        <div className="text-center">
          <p className="text-xs text-slate-400 mb-2">选择正确的词语填入空白处</p>
          <p className="text-base text-slate-700 leading-relaxed">
            {parts[0]}
            <span className="inline-block min-w-[60px] h-7 border-b-2 border-brand-400 mx-1 text-center font-semibold text-brand-600">
              {selectedOption || '?'}
            </span>
            {parts[1]}
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl px-4 py-3 text-center">
          <p className="text-sm text-slate-600">{currentQuestion.meaning}</p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-2">
          {currentQuestion.options.map((option, i) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === currentQuestion.correct;
            let btnClass = 'bg-white border-2 border-slate-200 text-slate-700 hover:border-brand-400 hover:text-brand-600';

            if (feedback) {
              if (isCorrect) {
                btnClass = 'bg-emerald-50 border-2 border-emerald-400 text-emerald-700';
              } else if (isSelected) {
                btnClass = 'bg-red-50 border-2 border-red-400 text-red-700';
              } else {
                btnClass = 'bg-slate-50 border-2 border-slate-100 text-slate-400';
              }
            } else if (isSelected) {
              btnClass = 'bg-brand-50 border-2 border-brand-400 text-brand-700';
            }

            return (
              <motion.button
                key={i}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(option)}
                disabled={feedback !== null}
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${btnClass}`}
              >
                {option}
              </motion.button>
            );
          })}
        </div>

        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center py-2 rounded-lg text-sm font-medium ${
              feedback.isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
            }`}
          >
            {feedback.message}
          </motion.div>
        )}
      </Card>
    </div>
  );
};

Object.assign(window, { SentenceSelection });
