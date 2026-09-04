// ========== XP Level System UI ==========

const XPLevel = () => {
  const totalXP = useUserStore(s => s.totalXP);
  const currentLevel = getLevelByXP(totalXP);
  const progress = getXPProgress(totalXP);
  const [xpHistory, setXpHistory] = useState([]);
  const userId = useUserStore(s => s.userId);

  useEffect(() => {
    const load = async () => {
      if (!userId) return;
      const data = await getXPHistory(userId, 14);
      setXpHistory(data);
    };
    load();
  }, [userId]);

  const nextLevel = XP_LEVELS.find(l => l.level === currentLevel.level + 1);
  const recentXP = xpHistory.reduce((sum, h) => sum + (h.amount > 0 ? h.amount : 0), 0);

  // Weekly XP chart data
  const weekData = useMemo(() => {
    const map = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      map[d.toISOString().slice(0, 10)] = 0;
    }
    xpHistory.forEach(h => {
      if (h.amount > 0 && map[h.date] !== undefined) {
        map[h.date] += h.amount;
      }
    });
    return Object.entries(map);
  }, [xpHistory]);

  return (
    <div className="flex flex-col gap-4">
      {/* Level Hero */}
      <Card className="bg-gradient-to-br from-brand-500 to-violet-600 text-white" padding="p-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold">Lv.{currentLevel.level}</div>
              <div className="text-[10px] opacity-80">{currentLevel.title}</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="opacity-80">{currentLevel.title}</span>
              <span className="font-medium">{progress.current}/{progress.needed} XP</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress.progress * 100}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
            {nextLevel && (
              <div className="text-xs opacity-70 mt-1">
                距离 Lv.{nextLevel.level} 还需 {nextLevel.xpNeeded - progress.current} XP
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2.5 text-center">
            <div className="text-lg font-bold">{totalXP}</div>
            <div className="text-[10px] opacity-80">总经验</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2.5 text-center">
            <div className="text-lg font-bold">{recentXP}</div>
            <div className="text-[10px] opacity-80">近7天</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2.5 text-center">
            <div className="text-lg font-bold">{XP_LEVELS[XP_LEVELS.length - 1].level}</div>
            <div className="text-[10px] opacity-80">满级</div>
          </div>
        </div>
      </Card>

      {/* XP Sources */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3">经验获取方式</h3>
        <div className="space-y-2">
          {Object.entries(XP_SOURCES).map(([key, src]) => (
            <div key={key} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
              <span className="text-sm text-slate-600">{src.label}</span>
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-emerald-600">
                  +{src.base}{src.perDay ? '/天' : ''}
                </span>
                <span className="text-xs text-slate-400">XP</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Weekly XP bar chart */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3">近7天经验获取</h3>
        <div className="flex items-end gap-2 h-24">
          {weekData.map(([date, amount], i) => {
            const max = Math.max(...weekData.map(d => d[1]), 50);
            const h = max > 0 ? (amount / max) * 100 : 0;
            return (
              <div key={date} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-brand-100 rounded-t-md relative" style={{ height: `${Math.max(h, 4)}%` }}>
                  <div className="absolute bottom-0 w-full bg-brand-500 rounded-t-md" style={{ height: '100%' }} />
                </div>
                <span className="text-[10px] text-slate-400">{date.slice(5).replace('-', '/')}</span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Level roadmap */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3">等级进阶路线</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto hide-scrollbar">
          {XP_LEVELS.map(lv => {
            const reached = totalXP >= lv.xpFrom;
            const isCurrent = lv.level === currentLevel.level;
            return (
              <div
                key={lv.level}
                className={`flex items-center gap-3 p-3 rounded-xl ${
                  isCurrent ? 'bg-brand-50 border border-brand-200' : reached ? 'bg-slate-50' : 'bg-transparent opacity-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                  reached ? 'bg-brand-500 text-white' : 'bg-slate-200 text-slate-400'
                }`}>
                  {lv.level}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-medium ${isCurrent ? 'text-brand-700' : 'text-slate-700'}`}>
                    {lv.title}
                  </div>
                  <div className="text-[10px] text-slate-400">{lv.xpNeeded} XP</div>
                </div>
                {lv.unlocks.length > 0 && (
                  <div className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full truncate max-w-[120px]">
                    {lv.unlocks[0]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

Object.assign(window, { XPLevel });
