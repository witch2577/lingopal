// ========== User / Profile Page ==========
// Tabs: Profile | Dashboard | Achievements | WordBook

const UserPage = () => {
  const [activeTab, setActiveTab] = useState('profile'); // profile | dashboard | achievements | wordbook | streak | xplevel | suggestions | compare
  const { isMobile, windowWidth } = useMobileDetect();

  const tabs = [
    { key: 'profile',      label: '我的',     icon: 'user' },
    { key: 'dashboard',    label: '数据',     icon: 'chart' },
    { key: 'streak',       label: '连胜',     icon: 'flame' },
    { key: 'xplevel',      label: '等级',     icon: 'zap' },
    { key: 'suggestions',  label: '建议',     icon: 'target' },
    { key: 'compare',      label: '对比',     icon: 'chart' },
    { key: 'achievements', label: '成就',     icon: 'trophy' },
    { key: 'wordbook',     label: '收藏',     icon: 'bookmark' },
  ];

  // On very small screens, use 2 rows; on larger mobile, use horizontal scroll
  const isVerySmall = isMobile && windowWidth < 375;

  return (
    <div className="flex flex-col h-full">
      {/* Top tab bar */}
      <div className={`flex bg-slate-100 rounded-2xl p-1 mb-3 sm:mb-4 ${isVerySmall ? 'flex-wrap' : 'overflow-x-auto hide-scrollbar'}`}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-medium transition-all touch-target flex-shrink-0 ${
              isVerySmall ? 'px-2 flex-1 min-w-[60px]' : 'px-2 sm:px-3'
            } ${
              activeTab === tab.key
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Icon name={tab.icon} size={isVerySmall ? 12 : 14} />
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
            {activeTab === 'profile' && <UserProfile />}
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'streak' && <StreakCard />}
            {activeTab === 'xplevel' && <XPLevel />}
            {activeTab === 'suggestions' && <SmartSuggestions />}
            {activeTab === 'compare' && <ProgressCompare />}
            {activeTab === 'achievements' && <Achievements />}
            {activeTab === 'wordbook' && <WordBook />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

Object.assign(window, { UserPage });
