// ========== Listening Practice Module ==========
// Types: listen-meaning (hear word, pick Chinese meaning)
//        listen-word (hear word, pick correct spelling/text)
// Uses SpeechService for TTS playback

const { useState, useEffect, useCallback, useMemo } = React;

// ---- Listening Store ----
const useListeningStore = (() => {
  const store = zustand.create((set, get) => ({
    currentLanguage: 'en',
    currentQuestionIndex: 0,
    questions: [],
    score: 0,
    correctCount: 0,
    totalAnswered: 0,
    isPlaying: false,
    hasAnswered: false,
    selectedAnswer: null,
    isCorrect: null,
    gameResult: null,
    isAudioPlaying: false,

    setLanguage: (lang) => set({ currentLanguage: lang }),

    startGame: (questions) => set({
      questions,
      currentQuestionIndex: 0,
      score: 0,
      correctCount: 0,
      totalAnswered: 0,
      isPlaying: true,
      hasAnswered: false,
      selectedAnswer: null,
      isCorrect: null,
      gameResult: null,
      isAudioPlaying: false,
    }),

    playAudio: () => set({ isAudioPlaying: true }),
    stopAudio: () => set({ isAudioPlaying: false }),

    submitAnswer: (answer, correctAnswer) => {
      const state = get();
      const isCorrect = answer === correctAnswer;
      const points = isCorrect ? 10 : 0;
      set({
        score: state.score + points,
        correctCount: state.correctCount + (isCorrect ? 1 : 0),
        totalAnswered: state.totalAnswered + 1,
        hasAnswered: true,
        selectedAnswer: answer,
        isCorrect,
      });
      return { isCorrect, points };
    },

    nextQuestion: () => {
      const state = get();
      const next = state.currentQuestionIndex + 1;
      if (next >= state.questions.length) {
        set({
          isPlaying: false,
          gameResult: {
            score: state.score,
            correctCount: state.correctCount,
            total: state.questions.length,
          },
        });
        return false;
      }
      set({
        currentQuestionIndex: next,
        hasAnswered: false,
        selectedAnswer: null,
        isCorrect: null,
        isAudioPlaying: false,
      });
      return true;
    },

    reset: () => set({
      currentLanguage: 'en',
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      correctCount: 0,
      totalAnswered: 0,
      isPlaying: false,
      hasAnswered: false,
      selectedAnswer: null,
      isCorrect: null,
      gameResult: null,
      isAudioPlaying: false,
    }),
  }));
  return store;
})();

// ---- Listening Page Content (rendered inside PracticePage) ----
const ListeningPageContent = () => {
  const isPlaying = useListeningStore(s => s.isPlaying);

  if (!isPlaying) {
    return <ListeningStartScreen />;
  }

  return <ListeningGame />;
};

// ---- Start Screen ----
const ListeningStartScreen = () => {
  const currentLanguage = useListeningStore(s => s.currentLanguage);
  const setLanguage = useListeningStore(s => s.setLanguage);
  const startGame = useListeningStore(s => s.startGame);
  const reset = useListeningStore(s => s.reset);
  const gameResult = useListeningStore(s => s.gameResult);

  useEffect(() => {
    reset();
  }, [reset]);

  const handleStart = useCallback(() => {
    const questions = getListeningQuestions(currentLanguage, 'all');
    if (questions.length === 0) {
      useUIStore.getState().showNotification('该语种听力内容即将上线', 'info');
      return;
    }
    startGame(questions);
  }, [currentLanguage, startGame]);

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white">
          <Icon name="headphones" size={18} />
        </div>
        <div>
          <h2 className="text-base font-bold text-slate-800">听力练习</h2>
          <p className="text-xs text-slate-400">听发音，选含义 / 选拼写</p>
        </div>
      </div>

      {/* Language Selector */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <h3 className="text-sm font-semibold text-slate-700 mb-3">选择练习语种</h3>
        <div className="grid grid-cols-3 gap-2">
          {[
            { code: 'en', name: '英语', flag: '🇺🇸' },
            { code: 'ja', name: '日语', flag: '🇯🇵' },
            { code: 'ko', name: '韩语', flag: '🇰🇷' },
          ].map((lang) => {
            const isActive = currentLanguage === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all btn-press ${
                  isActive
                    ? 'border-violet-400 bg-violet-50 text-violet-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-xs font-medium">{lang.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Last result */}
      {gameResult && (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">上次成绩</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-violet-600">{gameResult.correctCount}/{gameResult.total}</div>
                <div className="text-xs text-slate-400">正确数</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-violet-600">{Math.round((gameResult.correctCount / gameResult.total) * 100)}%</div>
                <div className="text-xs text-slate-400">正确率</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-violet-600">{gameResult.score}</div>
                <div className="text-xs text-slate-400">得分</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Start button */}
      <button
        onClick={handleStart}
        className="w-full py-3.5 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-700 transition-colors btn-press shadow-lg shadow-violet-200"
      >
        开始练习
      </button>

      {/* Stats hint */}
      <div className="text-center text-xs text-slate-400">
        每语种 10 题 · 听音选义 5 题 · 听音选词 5 题
      </div>
    </div>
  );
};

// ---- Game Screen ----
const ListeningGame = () => {
  const currentQuestionIndex = useListeningStore(s => s.currentQuestionIndex);
  const questions = useListeningStore(s => s.questions);
  const score = useListeningStore(s => s.score);
  const hasAnswered = useListeningStore(s => s.hasAnswered);
  const selectedAnswer = useListeningStore(s => s.selectedAnswer);
  const isCorrect = useListeningStore(s => s.isCorrect);
  const isAudioPlaying = useListeningStore(s => s.isAudioPlaying);
  const currentLanguage = useListeningStore(s => s.currentLanguage);
  const playAudio = useListeningStore(s => s.playAudio);
  const stopAudio = useListeningStore(s => s.stopAudio);
  const submitAnswer = useListeningStore(s => s.submitAnswer);
  const nextQuestion = useListeningStore(s => s.nextQuestion);
  const gameResult = useListeningStore(s => s.gameResult);
  const reset = useListeningStore(s => s.reset);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex) / questions.length) * 100 : 0;

  const handlePlay = useCallback(() => {
    if (!currentQuestion || isAudioPlaying) return;
    playAudio();
    SpeechService.speak(currentQuestion.audioText, currentLanguage, 0.9)
      .catch(() => {})
      .finally(() => {
        stopAudio();
      });
  }, [currentQuestion, currentLanguage, isAudioPlaying, playAudio, stopAudio]);

  const handleAnswer = useCallback((option) => {
    if (hasAnswered || !currentQuestion) return;
    const result = submitAnswer(option, currentQuestion.correctAnswer);
    if (result.isCorrect) {
      useUIStore.getState().showNotification('正确！+' + result.points + ' 分', 'success');
      useUserStore.getState().addXP(result.points, 'listening');
    } else {
      useUIStore.getState().showNotification('错误，正确答案是：' + currentQuestion.correctAnswer, 'error');
    }
  }, [hasAnswered, currentQuestion, submitAnswer]);

  const handleNext = useCallback(() => {
    nextQuestion();
  }, [nextQuestion]);

  const handleRetry = useCallback(() => {
    reset();
    const newQuestions = getListeningQuestions(currentLanguage, 'all');
    useListeningStore.getState().startGame(newQuestions);
  }, [reset, currentLanguage]);

  // Auto-play first question audio when entering a new question
  useEffect(() => {
    if (currentQuestion && !hasAnswered) {
      const timer = setTimeout(() => {
        playAudio();
        SpeechService.speak(currentQuestion.audioText, currentLanguage, 0.9)
          .catch(() => {})
          .finally(() => {
            stopAudio();
          });
      }, 400);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionIndex]);

  if (gameResult) {
    return (
      <ListeningResult
        result={gameResult}
        onRetry={handleRetry}
        onBack={() => reset()}
      />
    );
  }

  if (!currentQuestion) {
    return (
      <EmptyState
        icon="🎧"
        title="暂无题目"
        description="该语种的听力内容正在建设中"
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium text-slate-500">
            第 {currentQuestionIndex + 1} / {questions.length} 题
          </span>
          <span className="text-xs font-medium text-violet-600">
            得分：{score}
          </span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-violet-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Play area */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <button
          onClick={handlePlay}
          disabled={isAudioPlaying}
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all btn-press ${
            isAudioPlaying
              ? 'bg-violet-200 text-violet-600'
              : 'bg-violet-600 text-white shadow-lg shadow-violet-200 hover:bg-violet-700'
          }`}
        >
          {isAudioPlaying ? (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              <Icon name="volume" size={32} />
            </motion.div>
          ) : (
            <Icon name="play" size={32} />
          )}
        </button>
        <p className="text-xs text-slate-400">
          {isAudioPlaying ? '播放中...' : '点击播放发音'}
        </p>
      </div>

      {/* Question */}
      <div className="mb-4">
        <h3 className="text-base font-semibold text-slate-800 text-center">
          {currentQuestion.question}
        </h3>
        {currentQuestion.difficulty >= 2 && (
          <p className="text-xs text-slate-400 text-center mt-1">
            难度：{'⭐'.repeat(currentQuestion.difficulty)}
          </p>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-2.5 flex-1">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = 'bg-white border-slate-200 text-slate-700 hover:border-violet-300 hover:bg-violet-50';

          if (hasAnswered) {
            if (option === currentQuestion.correctAnswer) {
              buttonClass = 'bg-emerald-50 border-emerald-400 text-emerald-700';
            } else if (option === selectedAnswer && !isCorrect) {
              buttonClass = 'bg-rose-50 border-rose-400 text-rose-700';
            } else {
              buttonClass = 'bg-slate-50 border-slate-200 text-slate-400';
            }
          }

          return (
            <motion.button
              key={option + index}
              onClick={() => handleAnswer(option)}
              disabled={hasAnswered}
              className={`w-full py-3.5 px-4 rounded-xl border-2 text-sm font-medium transition-all btn-press text-left ${buttonClass}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <span className="inline-flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full text-xs flex items-center justify-center flex-shrink-0 ${
                  hasAnswered && option === currentQuestion.correctAnswer
                    ? 'bg-emerald-500 text-white'
                    : hasAnswered && option === selectedAnswer && !isCorrect
                    ? 'bg-rose-500 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {hasAnswered && option === currentQuestion.correctAnswer ? (
                    <Icon name="check" size={14} />
                  ) : hasAnswered && option === selectedAnswer && !isCorrect ? (
                    <Icon name="x" size={14} />
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </span>
                <span>{option}</span>
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Feedback & Next */}
      {hasAnswered && (
        <motion.div
          className="mt-4 flex flex-col gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={`text-center text-sm font-medium py-2 rounded-xl ${
            isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
          }`}>
            {isCorrect ? '回答正确！+' + (isCorrect ? 10 : 0) + ' 分' : '回答错误，正确答案是：' + currentQuestion.correctAnswer}
          </div>
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-700 transition-colors btn-press"
          >
            {currentQuestionIndex + 1 >= questions.length ? '查看结果' : '下一题'}
          </button>
        </motion.div>
      )}
    </div>
  );
};

// ---- Result Screen ----
const ListeningResult = ({ result, onRetry, onBack }) => {
  const accuracy = result.total > 0 ? Math.round((result.correctCount / result.total) * 100) : 0;

  let title = '练习完成';
  let subtitle = '继续加油！';
  let icon = '🎧';

  if (accuracy >= 90) {
    title = '太棒了！';
    subtitle = '听力小达人';
    icon = '🏆';
  } else if (accuracy >= 70) {
    title = '表现不错！';
    subtitle = '继续保持';
    icon = '⭐';
  } else if (accuracy >= 50) {
    title = '还需努力';
    subtitle = '多听多练';
    icon = '💪';
  } else {
    title = '继续加油';
    subtitle = '建议再听一遍';
    icon = '📚';
  }

  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 py-6">
      <motion.div
        className="text-6xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        {icon}
      </motion.div>

      <div className="text-center">
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
        <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-3 w-full">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 text-center">
          <div className="text-2xl font-bold text-violet-600">{result.correctCount}/{result.total}</div>
          <div className="text-xs text-slate-400 mt-1">正确数</div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 text-center">
          <div className="text-2xl font-bold text-violet-600">{accuracy}%</div>
          <div className="text-xs text-slate-400 mt-1">正确率</div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 text-center">
          <div className="text-2xl font-bold text-violet-600">{result.score}</div>
          <div className="text-xs text-slate-400 mt-1">得分</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2.5 w-full">
        <button
          onClick={onRetry}
          className="w-full py-3.5 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-700 transition-colors btn-press"
        >
          再练一次
        </button>
        <button
          onClick={onBack}
          className="w-full py-3 rounded-xl bg-slate-100 text-slate-600 font-medium text-sm hover:bg-slate-200 transition-colors btn-press"
        >
          返回练习中心
        </button>
      </div>
    </div>
  );
};

Object.assign(window, {
  useListeningStore,
  ListeningPageContent,
  ListeningStartScreen,
  ListeningGame,
  ListeningResult,
});
