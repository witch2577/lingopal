// ========== Achievements Board ==========

const Achievements = () => {
  const unlocked = useUserStore(s => s.achievements);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const load = async () => {
      const userId = useUserStore.getState().userId;
      if (!userId || !window.db) return;
      const data = await db.achievements.where('userId').equals(userId).toArray();
      setRecords(data);
    };
    load();
  }, [unlocked.length]);

  const totalCount = ACHIEVEMENTS.length;
  const unlockedCount = unlocked.length;

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <Card className="bg-gradient-to-br from-amber-400 to-orange-500 text-white" padding="p-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl">
            🏆
          </div>
          <div className="flex-1">
            <div className="text-2xl font-bold">{unlockedCount} / {totalCount}</div>
            <div className="text-sm opacity-80">成就解锁</div>
          </div>
        </div>
        <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(unlockedCount / totalCount) * 100}%` }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            className="h-full bg-white rounded-full"
          />
        </div>
      </Card>

      {/* Achievement list */}
      <div className="grid grid-cols-3 gap-3">
        {ACHIEVEMENTS.map(ach => {
          const isUnlocked = unlocked.includes(ach.id);
          const record = records.find(r => r.achievementId === ach.id);

          return (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`relative p-3 rounded-2xl text-center transition-all ${
                isUnlocked
                  ? 'bg-white shadow-md border border-amber-100'
                  : 'bg-slate-50 border border-slate-100 opacity-70'
              }`}
            >
              <div className={`text-3xl mb-1 ${isUnlocked ? '' : 'grayscale opacity-40'}`}>
                {ach.icon}
              </div>
              <div className={`text-xs font-semibold leading-tight ${
                isUnlocked ? 'text-slate-700' : 'text-slate-400'
              }`}>
                {ach.title}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                {ach.desc}
              </div>
              {!isUnlocked && (
                <div className="absolute top-1.5 right-1.5">
                  <Icon name="lock" size={12} className="text-slate-300" />
                </div>
              )}
              {record?.isNew && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                  新
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {unlockedCount === 0 && (
        <div className="text-center py-8">
          <div className="text-4xl mb-3">🚀</div>
          <p className="text-sm text-slate-500">开始你的学习之旅，解锁更多成就吧！</p>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { Achievements });
