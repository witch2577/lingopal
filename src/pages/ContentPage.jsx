// ========== Content Hub Page (P2) ==========
// Tabs: Short Video | Grammar | Culture | Social | Sync

const ContentPage = () => {
  const [activeTab, setActiveTab] = useState('shortvideo');
  const { isMobile } = useMobileDetect();

  const tabs = [
    { key: 'shortvideo', label: '情景视频', icon: 'play' },
    { key: 'grammar',    label: '语法课堂', icon: 'book-open' },
    { key: 'culture',    label: '文化知识', icon: 'globe' },
    { key: 'social',     label: '社交',    icon: 'users' },
    { key: 'sync',       label: '同步',    icon: 'sync' },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="mb-3 sm:mb-4">
        <h1 className="text-lg sm:text-xl font-bold text-slate-800">发现</h1>
        <p className="text-xs sm:text-sm text-slate-500">探索更多学习内容和社交功能</p>
      </div>

      <ContentUpdater />

      {/* Top tab bar */}
      <div className="flex bg-slate-100 rounded-2xl p-1 mb-3 sm:mb-4 overflow-x-auto hide-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative flex items-center justify-center gap-1 py-2 px-2 sm:px-3 rounded-xl text-xs font-medium transition-all flex-shrink-0 touch-target ${
              activeTab === tab.key
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Icon name={tab.icon} size={14} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: isMobile ? 0.12 : 0.2 }}
          >
            {activeTab === 'shortvideo' && <ShortVideoLesson />}
            {activeTab === 'grammar' && <GrammarClass />}
            {activeTab === 'culture' && <CultureBits />}
            {activeTab === 'social' && <SocialHub />}
            {activeTab === 'sync' && <SyncHub />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Social sub-hub
const SocialHub = () => {
  const [activeTab, setActiveTab] = useState('leaderboard');
  const { isMobile } = useMobileDetect();

  const tabs = [
    { key: 'leaderboard', label: '排行榜', icon: 'trophy' },
    { key: 'friends',     label: '好友PK', icon: 'users' },
    { key: 'groups',      label: '学习小组', icon: 'home' },
  ];

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex bg-slate-100 rounded-2xl p-1">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-2 rounded-xl text-xs font-medium transition-all touch-target ${
              activeTab === tab.key
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: isMobile ? 0.12 : 0.2 }}
        >
          {activeTab === 'leaderboard' && <LeaderboardView />}
          {activeTab === 'friends' && <FriendPK />}
          {activeTab === 'groups' && <StudyGroups />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Sync sub-hub
const SyncHub = () => {
  const [activeTab, setActiveTab] = useState('sync');
  const { isMobile } = useMobileDetect();

  const tabs = [
    { key: 'sync',     label: '设备同步', icon: 'sync' },
    { key: 'reminder', label: '每日提醒', icon: 'bell' },
    { key: 'share',    label: '报告分享', icon: 'chart' },
  ];

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex bg-slate-100 rounded-2xl p-1">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-2 rounded-xl text-xs font-medium transition-all touch-target ${
              activeTab === tab.key
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: isMobile ? 0.12 : 0.2 }}
        >
          {activeTab === 'sync' && <DeviceSync />}
          {activeTab === 'reminder' && <DailyReminder />}
          {activeTab === 'share' && <ReportShare />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

Object.assign(window, { ContentPage });
