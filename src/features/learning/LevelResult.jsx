// ========== Level Result Screen ==========
// Shown after completing a level with stars, score, achievements

const LevelResult = ({ result, level, onRetry, onBack }) => {
  const [showAchievements, setShowAchievements] = useState(false);

  if (!result) return null;

  const { score, stars, correctCount, totalQuestions, maxCombo, timeBonus, newAchievements } = result;
  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const getMessage = () => {
    if (stars === 3) return { title: '完美通关！', desc: '太棒了！你是真正的语言大师！', emoji: '🏆' };
    if (stars === 2) return { title: '表现优秀！', desc: '再接再厉，下次冲击三星！', emoji: '🌟' };
    if (stars === 1) return { title: '顺利过关！', desc: '不错的开始，继续努力！', emoji: '👍' };
    return { title: '加油！', desc: '别灰心，再试一次吧！', emoji: '💪' };
  };

  const message = getMessage();

  // Show achievements with delay
  useEffect(() => {
    if (newAchievements && newAchievements.length > 0) {
      const timer = setTimeout(() => setShowAchievements(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [newAchievements]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center py-4"
    >
      {/* Mascot / Emoji */}
      <motion.div
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        className="text-6xl mb-4"
      >
        {message.emoji}
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-bold text-slate-800 mb-1"
      >
        {message.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-sm text-slate-500 mb-6"
      >
        {message.desc}
      </motion.p>

      {/* Stars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: 'spring' }}
        className="flex gap-3 mb-6"
      >
        {[1, 2, 3].map((s, i) => (
          <motion.div
            key={s}
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: stars >= s ? 1 : 0.6,
              rotate: 0,
            }}
            transition={{
              delay: 0.7 + i * 0.15,
              type: 'spring',
              stiffness: 200,
              damping: 12,
            }}
          >
            <Icon
              name="star"
              size={48}
              className={stars >= s ? 'text-amber-400 drop-shadow-lg' : 'text-slate-200'}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Score big */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="w-full bg-brand-gradient rounded-2xl p-6 text-white text-center mb-4 shadow-lg shadow-brand-500/20"
      >
        <div className="text-5xl font-bold mb-1">{score}</div>
        <div className="text-sm opacity-80">总得分</div>
      </motion.div>

      {/* Stats grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="w-full grid grid-cols-3 gap-2 mb-4"
      >
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-slate-100">
          <div className="text-lg font-bold text-slate-700">{correctCount}/{totalQuestions}</div>
          <div className="text-xs text-slate-400">正确率 {accuracy}%</div>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-slate-100">
          <div className="text-lg font-bold text-amber-500">{maxCombo}</div>
          <div className="text-xs text-slate-400">最大连击</div>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-slate-100">
          <div className="text-lg font-bold text-emerald-500">+{timeBonus}</div>
          <div className="text-xs text-slate-400">时间奖励</div>
        </div>
      </motion.div>

      {/* New Achievements */}
      <AnimatePresence>
        {showAchievements && newAchievements && newAchievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full mb-4"
          >
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-100">
              <div className="text-sm font-semibold text-amber-700 mb-2 flex items-center gap-2">
                <Icon name="trophy" size={18} />
                解锁新成就！
              </div>
              <div className="flex flex-col gap-2">
                {newAchievements.map((ach, i) => (
                  <motion.div
                    key={ach.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-3"
                  >
                    <span className="text-2xl">{ach.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-700 text-sm">{ach.title}</div>
                      <div className="text-xs text-slate-500">{ach.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="w-full flex gap-3 mt-2"
      >
        <Button variant="outline" fullWidth onClick={onBack}>
          返回地图
        </Button>
        <Button variant="primary" fullWidth iconRight="arrow-right" onClick={onRetry}>
          再来一次
        </Button>
      </motion.div>
    </motion.div>
  );
};

Object.assign(window, { LevelResult });
