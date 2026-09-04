// ========== Answer Feedback Animations ==========
// Correct / Wrong / Celebration feedback for quiz interactions

const AnswerFeedback = ({ isCorrect, score, combo, onComplete, duration = 1500 }) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete?.(), duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
    >
      {/* Background flash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{ duration: 0.6 }}
        className={`absolute inset-0 ${isCorrect ? 'bg-emerald-400' : 'bg-red-400'}`}
      />

      {/* Main feedback */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0, rotate: -15 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 1.5, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative flex flex-col items-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-3 shadow-xl ${
            isCorrect ? 'bg-emerald-500 text-white shadow-emerald-500/40' : 'bg-red-500 text-white shadow-red-500/40'
          }`}
        >
          {isCorrect ? '✓' : '✗'}
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className={`text-xl font-bold ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
            {isCorrect ? '回答正确！' : '回答错误'}
          </p>
          {score > 0 && (
            <motion.p
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-sm text-slate-500 mt-1"
            >
              +{score} 分
            </motion.p>
          )}
          {combo >= 2 && isCorrect && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="mt-2 inline-flex items-center gap-1 bg-warm-gradient text-white px-3 py-1 rounded-full text-sm font-bold"
            >
              <Icon name="flame" size={14} />
              {combo} 连击！
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Floating particles for correct */}
      {isCorrect && (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: (Math.random() - 0.5) * 200,
                y: -100 - Math.random() * 150,
                opacity: 0,
                scale: 0.5,
                rotate: Math.random() * 360,
              }}
              transition={{ duration: 0.8 + Math.random() * 0.4, delay: 0.1 }}
              className="absolute text-2xl"
              style={{ left: '50%', top: '45%' }}
            >
              {['✨', '⭐', '🌟', '💫', '🎉', '👏', '🎊', '💯'][i]}
            </motion.div>
          ))}
        </>
      )}
    </motion.div>
  );
};

// Mini feedback badge for inline use
const MiniFeedback = ({ isCorrect, className = '' }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 400 }}
    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${
      isCorrect
        ? 'bg-emerald-100 text-emerald-700'
        : 'bg-red-100 text-red-700'
    } ${className}`}
  >
    {isCorrect ? '✓' : '✗'}
    {isCorrect ? '正确' : '错误'}
  </motion.div>
);

// Achievement unlock animation
const AchievementUnlock = ({ achievement, onComplete, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete?.(), duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -40, opacity: 0, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center max-w-xs mx-4"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-brand-gradient flex items-center justify-center text-4xl shadow-lg shadow-brand-500/30 mb-3"
        >
          {achievement?.icon || '🏆'}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-brand-600 font-semibold uppercase tracking-wider mb-1"
        >
          成就解锁
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg font-bold text-slate-800 mb-1"
        >
          {achievement?.title || '新成就'}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-slate-500"
        >
          {achievement?.description || ''}
        </motion.p>
      </motion.div>

      {/* Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: (Math.random() - 0.5) * 300,
            y: -150 - Math.random() * 200,
            opacity: 0,
          }}
          transition={{ duration: 1 + Math.random() * 0.5, delay: 0.2 }}
          className="absolute text-xl"
          style={{ left: '50%', top: '50%' }}
        >
          {['✨', '⭐', '🌟', '🎉', '🎊', '💫'][i % 6]}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Streak milestone celebration
const StreakCelebration = ({ streak, onComplete, duration = 2500 }) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete?.(), duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="text-6xl mb-3"
        >
          🔥
        </motion.div>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-amber-600"
        >
          {streak} 天连胜！
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-slate-500 mt-1"
        >
          继续保持，你正在养成好习惯！
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

Object.assign(window, {
  AnswerFeedback, MiniFeedback, AchievementUnlock, StreakCelebration,
});
