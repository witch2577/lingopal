// ========== Leaderboard & Friend PK ==========
const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

const LeaderboardView = () => {
  const [period, setPeriod] = useState('weekly');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = useUserStore(s => s.userId);

  useEffect(() => {
    loadLeaderboard();
  }, [period, userId]);

  const loadLeaderboard = async () => {
    if (!userId) return;
    setLoading(true);
    const data = await getLeaderboard(userId, period);
    setEntries(data);
    setLoading(false);
  };

  const periodLabels = {
    daily: '日榜',
    weekly: '周榜',
    total: '总榜',
  };

  const getRankStyle = (rank) => {
    if (rank === 1) return 'bg-amber-100 text-amber-700 border-amber-200';
    if (rank === 2) return 'bg-slate-100 text-slate-700 border-slate-200';
    if (rank === 3) return 'bg-orange-100 text-orange-700 border-orange-200';
    return 'bg-white text-slate-600 border-slate-100';
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return rank;
  };

  if (loading) {
    return <PageSkeleton type="leaderboard" />;
  }

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Period selector */}
      <div className="flex gap-2">
        {Object.entries(periodLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setPeriod(key)}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
              period === key
                ? 'bg-brand-500 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {entries.length === 0 && (
        <Card padding="p-0">
          <EmptyLeaderboard />
        </Card>
      )}

      {/* Top 3 podium */}
      {entries.length > 0 && (
        <div className="flex items-end justify-center gap-3 py-4">
          {entries.slice(0, 3).map((entry, idx) => {
            const heights = ['h-20', 'h-28', 'h-16'];
            const orders = [1, 0, 2];
            const position = orders[idx];
            return (
              <motion.div
                key={entry.userId}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center"
                style={{ order: position }}
              >
                <div className="relative mb-2">
                  <img
                    src={entry.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${entry.nickname}`}
                    alt={entry.nickname}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white shadow flex items-center justify-center text-xs">
                    {getRankIcon(entry.rank)}
                  </div>
                </div>
                <div className={`w-16 ${heights[idx]} rounded-t-xl flex items-end justify-center pb-2 ${
                  idx === 0 ? 'bg-amber-400' : idx === 1 ? 'bg-brand-400' : 'bg-orange-400'
                }`}>
                  <span className="text-white text-xs font-bold">{entry.totalXP}XP</span>
                </div>
                <span className="text-xs text-slate-600 mt-1 font-medium truncate max-w-[60px]">{entry.nickname}</span>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* List */}
      <div className="space-y-2">
        <AnimatePresence>
          {entries.map((entry, index) => (
            <motion.div
              key={entry.userId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center gap-3 p-3 rounded-xl border ${getRankStyle(entry.rank)} ${entry.isMe ? 'ring-2 ring-brand-400' : ''}`}
            >
              <span className="w-8 text-center font-bold text-sm">{getRankIcon(entry.rank)}</span>
              <img
                src={entry.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${entry.nickname}`}
                alt={entry.nickname}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{entry.nickname} {entry.isMe && '(我)'}</p>
                <div className="flex items-center gap-2 text-xs opacity-75">
                  <span>🔥 {entry.streakDays}天</span>
                  <span>✅ {entry.accuracy}%</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">{entry.totalXP}</p>
                <p className="text-xs opacity-75">XP</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const FriendPK = () => {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [pkResult, setPkResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myAccuracy, setMyAccuracy] = useState(null);
  const userId = useUserStore(s => s.userId);
  const myProfile = useUserStore(s => s.profile);
  const myXP = useUserStore(s => s.totalXP);
  const myStreak = useUserStore(s => s.streakDays);

  useEffect(() => {
    loadFriends();
    loadMyAccuracy();
  }, [userId]);

  const loadFriends = async () => {
    if (!userId) return;
    setLoading(true);
    const data = await getFriends(userId);
    setFriends(data);
    setLoading(false);
  };

  const loadMyAccuracy = async () => {
    if (!userId || !window.db) {
      setMyAccuracy(null);
      return;
    }
    const logs = await db.dailyLogs.where('userId').equals(userId).toArray();
    const totalQ = logs.reduce((sum, l) => sum + (l.totalQuestions || 0), 0);
    const totalC = logs.reduce((sum, l) => sum + (l.correctCount || 0), 0);
    setMyAccuracy(totalQ > 0 ? Math.round((totalC / totalQ) * 100) : null);
  };

  const startPK = (friend) => {
    setSelectedFriend(friend);
    const myScore = myXP + myStreak * 10;
    const friendScore = friend.totalXP + friend.streakDays * 10;
    const winner = myScore > friendScore ? 'me' : myScore < friendScore ? 'friend' : 'tie';

    const result = {
      winner,
      categories: [
        { name: '总经验值', me: myXP, friend: friend.totalXP },
        { name: '连胜天数', me: myStreak, friend: friend.streakDays },
        { name: '正确率', me: myAccuracy ?? 0, friend: friend.accuracy, meDemo: myAccuracy === null },
      ],
      myScore,
      friendScore,
    };
    setPkResult(result);

    if (winner === 'me') {
      useUserStore.getState().addXP(30, 'friend_pk_win');
      useUserStore.getState().unlockAchievement('social-butterfly', '社交达人', '添加 3 位好友', '👥');
    }
  };

  const resetPK = () => {
    setSelectedFriend(null);
    setPkResult(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner size={32} className="text-brand-500" />
      </div>
    );
  }

  if (pkResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-4"
      >
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <img src={myProfile?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${myProfile?.nickname || 'me'}`} className="w-14 h-14 rounded-full mx-auto mb-1" />
              <p className="text-xs font-medium">{myProfile?.nickname || '我'}</p>
            </div>
            <div className="text-2xl font-bold text-brand-500">VS</div>
            <div className="text-center">
              <img src={selectedFriend?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedFriend?.nickname}`} className="w-14 h-14 rounded-full mx-auto mb-1" />
              <p className="text-xs font-medium">{selectedFriend?.nickname}</p>
            </div>
          </div>
          <h3 className={`text-xl font-bold ${pkResult.winner === 'me' ? 'text-emerald-500' : pkResult.winner === 'friend' ? 'text-red-500' : 'text-amber-500'}`}>
            {pkResult.winner === 'me' ? '🎉 你赢了！' : pkResult.winner === 'friend' ? '😅 惜败！' : '🤝 平局！'}
          </h3>
          {pkResult.winner === 'me' && <p className="text-sm text-emerald-600 mt-1">+30 XP</p>}
        </div>

        <div className="space-y-3">
          {pkResult.categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-xl p-3 border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-slate-500">{cat.name}</p>
                {cat.meDemo && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-medium">
                    <Icon name="alert-circle" size={10} />
                    演示数据
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold w-12 text-right">{cat.meDemo ? '—' : cat.me}</span>
                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden flex">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.meDemo ? 0 : (cat.me / (cat.me + cat.friend)) * 100}%` }}
                    transition={{ delay: i * 0.2 }}
                    className="h-full bg-brand-500"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.meDemo ? 100 : (cat.friend / (cat.me + cat.friend)) * 100}%` }}
                    transition={{ delay: i * 0.2 }}
                    className="h-full bg-rose-400"
                  />
                </div>
                <span className="text-sm font-bold w-12">{cat.friend}</span>
              </div>
              {cat.meDemo && (
                <p className="text-[10px] text-slate-400 mt-1">数据不足：暂无足够的答题记录来计算正确率</p>
              )}
            </div>
          ))}
        </div>

        <Button onClick={resetPK} fullWidth variant="secondary">再来一局</Button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-brand-50 rounded-xl p-4 text-center">
        <p className="text-sm text-brand-700 font-medium">选择一位好友发起 PK 挑战！</p>
        <p className="text-xs text-brand-500 mt-1">比较经验值、连胜天数和正确率</p>
      </div>

      <div className="space-y-2">
        {friends.map((friend) => (
          <motion.div
            key={friend.friendId}
            whileTap={{ scale: 0.98 }}
            onClick={() => startPK(friend)}
            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-brand-200 transition-colors"
          >
            <img
              src={friend.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${friend.nickname}`}
              alt={friend.nickname}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold">{friend.nickname}</p>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>⚡ {friend.totalXP} XP</span>
                <span>🔥 {friend.streakDays}天</span>
                <span>✅ {friend.accuracy}%</span>
              </div>
            </div>
            <Button size="sm" variant="primary">挑战</Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { LeaderboardView, FriendPK });
