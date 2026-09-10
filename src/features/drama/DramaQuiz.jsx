// ========== Drama Quiz ==========
// Quiz based on script content

const DramaQuiz = ({ script, onBack }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const { isMobile } = useMobileDetect();

  const questions = script.quiz || [];
  const q = questions[currentQ];

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) {
      setCorrectCount(c => c + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleFinish = () => {
    const accuracy = questions.length > 0 ? correctCount / questions.length : 0;
    const userState = useUserStore.getState();
    userState.addXP(XP_SOURCES.DRAMA_QUIZ.base, 'drama_quiz');
    if (accuracy >= 0.8) {
      userState.unlockAchievement('drama-master', '剧情通', '剧情测验正确率≥80%', '🏆');
    }
    useUIStore.getState().showNotification(`+${XP_SOURCES.DRAMA_QUIZ.base} XP 剧情测验完成`, 'success');
    recordActivity(userState.userId, 'drama_quiz', { scriptId: script.id, score: accuracy }).catch(() => {});
    onBack();
  };

  if (finished) {
    const accuracy = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center">
          <div className="text-5xl mb-4">{accuracy >= 80 ? '🏆' : accuracy >= 60 ? '👏' : '💪'}</div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">测验完成</h2>
          <p className="text-sm text-slate-500 mb-1">{correctCount} / {questions.length} 正确</p>
          <p className="text-lg font-bold text-brand-600 mb-4">{accuracy}% 正确率</p>
          <button onClick={handleFinish} className="px-6 py-3 rounded-xl bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors">
            返回剧本列表
          </button>
        </motion.div>
      </div>
    );
  }

  if (!q) {
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <EmptyState icon="📝" title="暂无测验" description="该剧本暂未配置测验题目" />
        <button onClick={onBack} className="mt-4 px-6 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-medium">返回</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <button onClick={onBack} className="p-2 rounded-xl hover:bg-slate-100">
          <Icon name="arrow-left" size={18} className="text-slate-500" />
        </button>
        <h2 className="text-sm font-bold text-slate-800">剧情测验</h2>
        <span className="ml-auto text-xs text-slate-400">{currentQ + 1} / {questions.length}</span>
      </div>

      <div className="h-1 bg-slate-100 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-brand-400 rounded-full" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
      </div>

      <div className="flex-1">
        <p className="text-base font-medium text-slate-800 mb-4">{q.question}</p>
        <div className="flex flex-col gap-2">
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.correct;
            const isSelected = idx === selected;
            const showResult = answered;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={answered}
                className={`p-3.5 rounded-xl text-left text-sm font-medium transition-all border ${
                  showResult && isCorrect
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                    : showResult && isSelected && !isCorrect
                    ? 'bg-red-50 border-red-300 text-red-700'
                    : showResult
                    ? 'bg-slate-50 border-slate-100 text-slate-400'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-brand-300 hover:bg-brand-50/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    showResult && isCorrect ? 'bg-emerald-500 text-white' :
                    showResult && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                    'bg-slate-100 text-slate-500'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {answered && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="pt-3">
          <button
            onClick={nextQuestion}
            className="w-full py-3 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
          >
            {currentQ < questions.length - 1 ? '下一题' : '查看结果'}
          </button>
        </motion.div>
      )}
    </div>
  );
};

Object.assign(window, { DramaQuiz });
