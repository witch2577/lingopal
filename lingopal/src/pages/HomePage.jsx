// ========== Home Page / Learning Dashboard ==========
// Default landing page with learning-focused layout

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { isMobile } = useMobileDetect();
  const profile = useUserStore(s => s.profile);
  const totalXP = useUserStore(s => s.totalXP);
  const streakDays = useUserStore(s => s.streakDays);
  const currentLevel = getLevelByXP(totalXP);
  const xpProgress = getXPProgress(totalXP);
  const setGlobalTab = (tab) => { if (window.setActiveTab) window.setActiveTab(tab); };

  // Quick action grid
  const quickActions = [
    { key: 'learning', label: '今日学习', icon: 'target', color: 'from-rose-400 to-pink-500', desc: '继续闯关' },
    { key: 'translation', label: '翻译工具', icon: 'globe', color: 'from-blue-400 to-indigo-500', desc: '文字·语音·拍照' },
    { key: 'practice', label: '口语练习', icon: 'mic', color: 'from-emerald-400 to-teal-500', desc: 'AI对话·纠音' },
    { key: 'practice-written', label: '笔试训练', icon: 'type-text', color: 'from-amber-400 to-orange-500', desc: '拼写·选词' },
    { key: 'content', label: '内容中心', icon: 'book-open', color: 'from-violet-400 to-purple-500', desc: '语法·文化·视频' },
    { key: 'drama', label: '影视短剧', icon: 'film', color: 'from-red-400 to-rose-500', desc: '剧本·角色扮演' },
    { key: 'music', label: '音乐学习', icon: 'music', color: 'from-cyan-400 to-blue-500', desc: '歌词·跟读·填词' },
    { key: 'user', label: '我的', icon: 'user', color: 'from-slate-400 to-slate-500', desc: '数据·成就·设置' },
  ];

  const handleAction = (action) => {
    if (action.key === 'practice-written') {
      setGlobalTab('practice');
      setTimeout(() => {
        const ws = useWrittenStore.getState();
        if (ws) ws.setActiveTab('spelling');
      }, 100);
    } else if (action.key === 'drama' || action.key === 'music') {
      setGlobalTab('practice');
      setTimeout(() => {
        const ps = usePracticeStore.getState();
        if (ps) ps.setActiveTab(action.key);
      }, 100);
    } else {
      setGlobalTab(action.key);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header: User info + XP + Streak */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-brand-gradient flex items-center justify-center text-white text-xl shadow-lg shadow-brand-500/20">
            {profile?.nickname?.[0] || '👤'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">{profile?.nickname || '语言学习者'}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-100 text-brand-600 font-bold">Lv.{currentLevel.level}</span>
            </div>
            <div className="text-xs text-slate-400">{currentLevel.title}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Streak */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-orange-500">
              <Icon name="flame" size={16} />
              <span className="text-sm font-bold">{streakDays}</span>
            </div>
            <span className="text-[10px] text-slate-400">连续天数</span>
          </div>
          {/* XP Ring */}
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#E2E8F0" strokeWidth="3" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#6366F1" strokeWidth="3"
                strokeDasharray={`${Math.round(xpProgress.progress * 88)} 88`}
                strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold text-brand-600">{Math.round(xpProgress.progress * 100)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* XP Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>今日 XP: {xpProgress.current} / {xpProgress.needed}</span>
          <span>升级还需 {xpProgress.needed - xpProgress.current} XP</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand-gradient rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${xpProgress.progress * 100}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Quick Action Grid */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {quickActions.map(action => (
          <motion.button
            key={action.key}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAction(action)}
            className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white shadow-sm border border-slate-100 btn-press"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center text-white`}>
              <Icon name={action.icon} size={18} />
            </div>
            <span className="text-[11px] font-medium text-slate-700">{action.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Daily Tasks */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-slate-700 mb-2">今日任务</h3>
        <div className="flex flex-col gap-2">
          <DailyTaskCard icon="🎯" label="完成 1 个关卡" progress={0} total={1} xp={30} />
          <DailyTaskCard icon="🔥" label={`打卡连续 ${streakDays} 天`} progress={streakDays > 0 ? 1 : 0} total={1} xp={10} />
          <DailyTaskCard icon="⏱️" label="学习时长 0/15 分钟" progress={0} total={15} xp={20} unit="分钟" />
        </div>
      </div>

      {/* Weekly mini calendar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-slate-700">本周打卡</h3>
          <span className="text-xs text-slate-400">{streakDays} 天连胜</span>
        </div>
        <WeeklyCalendar streakDays={streakDays} />
      </div>

      {/* Continue Learning */}
      <div className="bg-gradient-to-br from-brand-500 to-indigo-600 rounded-2xl p-4 text-white mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs opacity-80 mb-1">继续你的学习</p>
            <p className="font-semibold">英语 · 日常对话 · 第 3 关</p>
          </div>
          <button
            onClick={() => setGlobalTab('learning')}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-medium hover:bg-white/30 transition-colors"
          >
            继续
          </button>
        </div>
      </div>
    </div>
  );
};

// Daily task card
const DailyTaskCard = ({ icon, label, progress, total, xp, unit = '' }) => {
  const isDone = progress >= total;
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl ${isDone ? 'bg-emerald-50 border border-emerald-100' : 'bg-white border border-slate-100'} shadow-sm`}>
      <div className="text-lg">{isDone ? '✅' : icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className={`text-sm ${isDone ? 'text-emerald-700 line-through' : 'text-slate-700'}`}>{label}</span>
          <span className="text-[10px] text-amber-600 font-medium">+{xp} XP</span>
        </div>
        {!isDone && (
          <div className="mt-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-brand-400 rounded-full" style={{ width: `${Math.min(100, (progress / total) * 100)}%` }} />
          </div>
        )}
      </div>
    </div>
  );
};

// Weekly mini calendar
const WeeklyCalendar = ({ streakDays }) => {
  const days = ['一', '二', '三', '四', '五', '六', '日'];
  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1;
  // Simulate check-in status based on streak
  const checkedIn = days.map((_, i) => i <= todayIndex);

  return (
    <div className="flex justify-between">
      {days.map((day, i) => (
        <div key={day} className="flex flex-col items-center gap-1">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium ${
            checkedIn[i] ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-400'
          }`}>
            {checkedIn[i] ? '✓' : day}
          </div>
          <span className="text-[10px] text-slate-400">{day}</span>
        </div>
      ))}
    </div>
  );
};

Object.assign(window, { HomePage });
