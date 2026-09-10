// ========== Streak System Card ==========

const StreakCard = () => {
  const userId = useUserStore(s => s.userId);
  const streakDays = useUserStore(s => s.streakDays);
  const totalXP = useUserStore(s => s.totalXP);
  const streakRecoveryAvailable = useUserStore(s => s.streakRecoveryAvailable);
  const recoverStreak = useUserStore(s => s.recoverStreak);
  const [history, setHistory] = useState([]);
  const [showRecovery, setShowRecovery] = useState(false);

  useEffect(() => {
    const load = async () => {
      if (!userId) return;
      const data = await getStreakHistory(userId, 30);
      setHistory(data);
    };
    load();
  }, [userId, streakDays]);

  const today = todayStr();
  const todayRec = history.find(h => h.date === today);
  const hasStudiedToday = todayRec?.activityCount > 0;

  const nextMilestone = STREAK_MILESTONES.find(m => m.days > streakDays) || STREAK_MILESTONES[STREAK_MILESTONES.length - 1];
  const currentMilestone = STREAK_MILESTONES.filter(m => m.days <= streakDays).pop();

  // Build aligned last-7-days view ending with today
  const todayDate = new Date();
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(todayDate);
    d.setDate(d.getDate() - (6 - i));
    const dateStr = d.toISOString().slice(0, 10);
    const dayName = ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
    const rec = history.find(h => h.date === dateStr);
    return { dateStr, dayName, rec };
  });

  return (
    <div className="flex flex-col gap-4">
      {/* Streak Hero */}
      <Card className={`${hasStudiedToday ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-slate-400 to-slate-500'} text-white`} padding="p-5">
        <div className="flex items-center gap-4">
          <motion.div
            animate={hasStudiedToday ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: hasStudiedToday ? Infinity : 0, duration: 2 }}
            className="text-5xl"
          >
            {hasStudiedToday ? '🔥' : '💤'}
          </motion.div>
          <div className="flex-1">
            <div className="text-3xl font-bold">{streakDays} 天</div>
            <div className="text-sm opacity-80">
              {hasStudiedToday ? '今日已打卡，继续保持！' : '今日还未学习，快去打卡吧'}
            </div>
          </div>
        </div>
        {nextMilestone && streakDays < nextMilestone.days && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs opacity-80 mb-1">
              <span>距离「{nextMilestone.badge}」还差 {nextMilestone.days - streakDays} 天</span>
              <span>+{nextMilestone.rewardXP} XP</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(streakDays / nextMilestone.days) * 100}%` }}
              />
            </div>
          </div>
        )}
      </Card>

      {/* Recovery button */}
      {streakRecoveryAvailable && (
        <Card padding="p-4" className="border-amber-200 bg-amber-50">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛡️</span>
            <div className="flex-1">
              <div className="text-sm font-medium text-amber-800">连胜中断保护</div>
              <div className="text-xs text-amber-600">
                昨天未打卡，花费 {streakRecoveryAvailable.cost} XP 可恢复连胜
              </div>
            </div>
            <Button
              size="sm"
              variant="accent"
              onClick={() => setShowRecovery(true)}
              disabled={totalXP < streakRecoveryAvailable.cost}
            >
              恢复
            </Button>
          </div>
          {totalXP < streakRecoveryAvailable.cost && (
            <div className="text-xs text-amber-600 mt-2">
              当前 XP 不足（{totalXP}/{streakRecoveryAvailable.cost}）
            </div>
          )}
        </Card>
      )}

      {/* Recovery modal */}
      <Modal open={showRecovery} onClose={() => setShowRecovery(false)} title="恢复连胜">
        <div className="text-center py-4">
          <div className="text-4xl mb-3">🛡️</div>
          <p className="text-sm text-slate-600 mb-1">使用 {streakRecoveryAvailable?.cost} XP 恢复昨日连胜记录</p>
          <p className="text-xs text-slate-400">当前 XP: {totalXP}</p>
          <div className="flex gap-3 mt-5">
            <Button variant="outline" fullWidth onClick={() => setShowRecovery(false)}>取消</Button>
            <Button
              fullWidth
              onClick={async () => {
                const ok = await recoverStreak();
                if (ok) setShowRecovery(false);
              }}
            >
              确认恢复
            </Button>
          </div>
        </div>
      </Modal>

      {/* Weekly calendar */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3">本周打卡</h3>
        <div className="grid grid-cols-7 gap-2">
          {last7Days.map(({ dayName, rec, dateStr }) => {
            const isActive = rec?.activityCount > 0 || rec?.protected;
            const isToday = dateStr === today;
            return (
              <div key={dateStr} className="flex flex-col items-center gap-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md'
                    : isToday
                    ? 'bg-brand-100 text-brand-600 border-2 border-brand-300'
                    : 'bg-slate-100 text-slate-400'
                }`}>
                  {isActive ? '🔥' : dayName}
                </div>
                <span className="text-[10px] text-slate-400">{dayName}</span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Milestones */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3">连胜里程碑</h3>
        <div className="space-y-2">
          {STREAK_MILESTONES.map(m => {
            const reached = streakDays >= m.days;
            return (
              <div key={m.days} className={`flex items-center gap-3 p-3 rounded-xl ${
                reached ? 'bg-amber-50 border border-amber-100' : 'bg-slate-50'
              }`}>
                <span className="text-xl">{m.icon}</span>
                <div className="flex-1">
                  <div className={`text-sm font-medium ${reached ? 'text-amber-800' : 'text-slate-500'}`}>
                    {m.badge}
                  </div>
                  <div className="text-[10px] text-slate-400">连续 {m.days} 天 · +{m.rewardXP} XP</div>
                </div>
                {reached ? (
                  <Badge variant="accent">已达成</Badge>
                ) : (
                  <span className="text-xs text-slate-400">还差 {m.days - streakDays} 天</span>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Monthly mini calendar */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3">近30天打卡记录</h3>
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 30 }, (_, i) => {
            const rec = history[i];
            const isActive = rec?.activityCount > 0 || rec?.protected;
            return (
              <div
                key={i}
                className={`aspect-square rounded-md ${
                  isActive
                    ? 'bg-gradient-to-br from-amber-400 to-orange-500'
                    : 'bg-slate-100'
                }`}
                title={rec?.date || ''}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-2 text-[10px] text-slate-400">
          <span>30天前</span>
          <span>今天</span>
        </div>
      </Card>
    </div>
  );
};

Object.assign(window, { StreakCard });
