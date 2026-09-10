// ========== Scenario Learning Player ==========
// Lightweight quiz flow tailored to each scenario

const ScenarioPlayer = ({ scene, onBack }) => {
  const userId = useUserStore(s => s.userId);
  const currentLanguage = useLearningStore(s => s.currentLanguage);
  const [step, setStep] = useState('intro'); // intro | playing | result
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);

  // Generate scenario-specific questions from existing quiz data
  useEffect(() => {
    const allLevels = getAllLevels(currentLanguage);
    let pool = [];

    // Filter questions by scenario type
    switch (scene.id) {
      case 'commute':
        // Short, easy questions (3-4)
        pool = allLevels.flatMap(l => l.questions).filter(q => q.difficulty <= 2);
        break;
      case 'bedtime':
        // Review-style: mix of types, easier
        pool = allLevels.flatMap(l => l.questions).filter(q => q.difficulty <= 2);
        break;
      case 'exam':
        // All difficulties, grammar-heavy
        pool = allLevels.flatMap(l => l.questions);
        break;
      case 'travel':
        // Daily + scenario themed
        pool = allLevels.flatMap(l => l.questions.filter(q =>
          l.theme === 'daily' || l.theme === 'scenario' || q.difficulty <= 2
        ));
        break;
      case 'social':
        // Daily conversation, repeat-type questions
        pool = allLevels.flatMap(l => l.questions.filter(q =>
          q.type === 'repeat' || q.type === 'translate' || l.theme === 'daily'
        ));
        break;
      case 'business':
        // Grammar + advanced
        pool = allLevels.flatMap(l => l.questions.filter(q =>
          l.theme === 'grammar' || q.difficulty >= 2
        ));
        break;
      default:
        pool = allLevels.flatMap(l => l.questions);
    }

    // Shuffle and pick 5-8 questions
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const count = scene.id === 'commute' || scene.id === 'bedtime' ? 5 : 8;
    const selected = shuffled.slice(0, count);
    setQuestions(selected);
  }, [scene.id, currentLanguage]);

  const startPlaying = () => {
    setStep('playing');
    setCurrentQ(0);
    setScore(0);
    setCorrectCount(0);
    setAnswers([]);
    setTimeLeft(questions.length * (scene.id === 'commute' ? 15 : 20));
  };

  useEffect(() => {
    if (step === 'playing' && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            finishGame(score, correctCount);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [step, timeLeft]);

  const handleAnswer = (isCorrect) => {
    const q = questions[currentQ];
    const points = isCorrect ? (q?.difficulty || 1) * 10 : 0;
    const newScore = score + points;
    const newCorrect = correctCount + (isCorrect ? 1 : 0);
    setScore(newScore);
    setCorrectCount(newCorrect);
    setAnswers([...answers, { question: q, isCorrect }]);

    if (currentQ + 1 >= questions.length) {
      clearInterval(timerRef.current);
      finishGame(newScore, newCorrect);
    } else {
      setCurrentQ(currentQ + 1);
    }
  };

  const finishGame = async (finalScore, finalCorrect) => {
    setStep('result');
    // Update progress
    if (userId) {
      await updateSceneProgress(userId, scene.id, 1);
      // Calculate XP
      const totalQuestions = questions.length;
      const accuracy = totalQuestions > 0 ? finalCorrect / totalQuestions : 0;
      const baseXP = XP_SOURCES.SCENARIO_COMPLETE.base;
      const bonusXP = accuracy >= 0.8 ? XP_SOURCES.SCENARIO_PERFECT.base : 0;
      const multiplier = scene.xpMultiplier || 1.0;
      const earnedXP = Math.round((baseXP + bonusXP) * multiplier);
      useUserStore.getState().addXP(earnedXP, `scenario_${scene.id}`);
      // Record activity
      await recordActivity(userId, 'xp', { amount: earnedXP });
      // Update daily log
      await recordDailyLog(userId, Math.floor(questions.length * 1.5), totalQuestions, finalCorrect, earnedXP);
    }
  };

  const renderIntro = () => (
    <div className="flex flex-col items-center gap-4 py-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${scene.bg} flex items-center justify-center text-4xl shadow-lg`}
      >
        {scene.icon}
      </motion.div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-slate-800">{scene.name}</h2>
        <p className="text-sm text-slate-400 mt-1">{scene.description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {scene.features.map(f => (
          <span key={f} className="px-2.5 py-1 bg-slate-100 rounded-lg text-xs text-slate-600">{f}</span>
        ))}
      </div>
      <div className="text-xs text-slate-400">
        预计 {scene.duration} · {questions.length} 题 · XP x{scene.xpMultiplier}
      </div>
      <Button onClick={startPlaying} className="mt-2 w-48">
        开始学习
      </Button>
      <button onClick={onBack} className="text-sm text-slate-400 hover:text-slate-600">
        返回场景列表
      </button>
    </div>
  );

  const renderQuestion = () => {
    const q = questions[currentQ];
    if (!q) return null;
    const progress = ((currentQ) / questions.length) * 100;

    return (
      <div className="flex flex-col gap-4">
        {/* Progress bar */}
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-xl hover:bg-slate-100">
            <Icon name="chevron-left" size={20} />
          </button>
          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div className="h-full bg-brand-500 rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
          </div>
          <span className="text-xs text-slate-400">{currentQ + 1}/{questions.length}</span>
        </div>

        {/* Timer */}
        <div className="flex items-center justify-between">
          <Badge variant={timeLeft < 10 ? 'danger' : 'default'}>
            <Icon name="clock" size={12} /> {timeLeft}s
          </Badge>
          <span className="text-xs text-slate-400">{scene.name}</span>
        </div>

        {/* Question */}
        <Card padding="p-5" className="min-h-[120px] flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-semibold text-slate-800">{q.question}</div>
            {q.type === 'dictation' && q.audioWord && (
              <button
                onClick={() => speakText(q.audioWord, currentLanguage)}
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-600 rounded-xl text-sm"
              >
                <Icon name="volume" size={16} /> 播放音频
              </button>
            )}
          </div>
        </Card>

        {/* Options */}
        {q.type === 'match' && q.pairs ? (
          <div className="text-center text-sm text-slate-400 py-4">
            配对题在场景模式下简化为选择题
          </div>
        ) : q.type === 'repeat' ? (
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-medium">
              <Icon name="alert-circle" size={10} />
              自我评估模式
            </div>
            <p className="text-xs text-slate-400">请根据自我感觉判断是否完成跟读</p>
            <Button onClick={() => handleAnswer(true)} variant="accent">
              我已完成跟读
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {(q.options || []).map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt === q.correctAnswer)}
                className="w-full p-4 rounded-xl bg-white border-2 border-slate-100 hover:border-brand-400 hover:bg-brand-50 text-left text-sm font-medium text-slate-700 transition-all btn-press"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderResult = () => {
    const total = questions.length;
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const stars = accuracy >= 80 ? 3 : accuracy >= 50 ? 2 : 1;
    const earnedXP = Math.round(
      (XP_SOURCES.SCENARIO_COMPLETE.base + (accuracy >= 80 ? XP_SOURCES.SCENARIO_PERFECT.base : 0)) * (scene.xpMultiplier || 1)
    );

    return (
      <div className="flex flex-col items-center gap-4 py-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-5xl"
        >
          {stars === 3 ? '🏆' : stars === 2 ? '👍' : '💪'}
        </motion.div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-800">{scene.name} 完成！</h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[1, 2, 3].map(s => (
              <span key={s} className={`text-2xl ${s <= stars ? '' : 'opacity-20'}`}>⭐</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 w-full">
          <Card padding="p-3" className="text-center">
            <div className="text-xl font-bold text-brand-600">{accuracy}%</div>
            <div className="text-[10px] text-slate-400">正确率</div>
          </Card>
          <Card padding="p-3" className="text-center">
            <div className="text-xl font-bold text-emerald-600">+{earnedXP}</div>
            <div className="text-[10px] text-slate-400">获得XP</div>
          </Card>
          <Card padding="p-3" className="text-center">
            <div className="text-xl font-bold text-amber-600">{correctCount}/{total}</div>
            <div className="text-[10px] text-slate-400">答对</div>
          </Card>
        </div>
        <div className="flex gap-3 w-full">
          <Button variant="outline" fullWidth onClick={onBack}>返回列表</Button>
          <Button fullWidth onClick={startPlaying}>再来一次</Button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {step === 'intro' && renderIntro()}
            {step === 'playing' && renderQuestion()}
            {step === 'result' && renderResult()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

Object.assign(window, { ScenarioPlayer });
