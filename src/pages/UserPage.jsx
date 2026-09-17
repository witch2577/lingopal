// ========== User / Profile Page ==========
// Tabs: Profile | Dashboard | Achievements | WordBook

const UserPage = () => {
  const [activeTab, setActiveTab] = useState('profile'); // profile | dashboard | achievements | wordbook | streak | xplevel | suggestions | compare
  const { isMobile, windowWidth } = useMobileDetect();
  const isAdmin = useAuthStore(s => s.isAdmin);

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
      <div className={`flex rounded-2xl p-1 mb-3 sm:mb-4 ${isVerySmall ? 'flex-wrap' : 'overflow-x-auto hide-scrollbar'}`} style={{ background: 'var(--bg-elevated)' }}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-medium transition-all touch-target flex-shrink-0 theme-transition ${
              isVerySmall ? 'px-2 flex-1 min-w-[60px]' : 'px-2 sm:px-3'
            } ${
              activeTab === tab.key
                ? 'text-brand-500 shadow-sm'
                : 'hover:text-theme-secondary'
            }`}
          >
            <Icon name={tab.icon} size={isVerySmall ? 12 : 14} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Theme Toggle Card — admin preview only; regular users get auto-switch via cultivation unlock */}
      {isAdmin && (
        <div className="card-c2 p-3 mb-3 theme-transition">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">{useUserStore.getState().preferences.themeMode === 'immortal' ? '⚡' : '✨'}</span>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {useUserStore.getState().preferences.themeMode === 'immortal' ? '仙族 · 修仙模式' : '人族 · 日常模式'}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {useUserStore.getState().preferences.themeMode === 'immortal' ? '已觉醒仙缘，踏上语修之路' : '温馨陪伴，共同成长'}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                const store = useUserStore.getState();
                const current = store.preferences.themeMode || 'human';
                if (current === 'human') {
                  // Admin preview: trigger ceremony animation for human -> immortal
                  if (window.triggerThemeCeremony) {
                    window.triggerThemeCeremony('immortal');
                  } else {
                    store.setThemeMode('immortal');
                  }
                } else {
                  store.setThemeMode('human');
                }
              }}
              className="px-2 py-1 text-xs text-theme-tertiary bg-transparent border border-theme-border rounded hover:bg-theme-elevated transition-colors"
            >
              {useUserStore.getState().preferences.themeMode === 'immortal' ? '预览人族' : '预览仙族'}
            </button>
          </div>
          <p className="text-[10px] mt-1.5" style={{ color: 'var(--text-tertiary)' }}>
            管理员预览 · 普通用户将在修仙解锁后自动切换
          </p>
        </div>
      )}

      {/* Account Info Card */}
      <div className="card-c2 p-3 mb-3 theme-transition">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white text-lg">
            {useAuthStore.getState().supabaseUser?.email?.[0]?.toUpperCase() || '👤'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
              {useAuthStore.getState().supabaseUser?.email || '未登录'}
            </p>
            <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
              ID: {(useAuthStore.getState().supabaseUser?.id || '—').slice(0, 8)}…
            </p>
          </div>
          {useAuthStore.getState().supabaseProfile?.tier && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-bold">
              {useAuthStore.getState().supabaseProfile.tier}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-tertiary)' }}>
          <span>昵称: {useAuthStore.getState().supabaseProfile?.nickname || useUserStore.getState().profile?.nickname || '—'}</span>
        </div>
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

      {/* Logout Button */}
      <div className="mt-3 pb-2">
        <button
          onClick={() => {
            if (confirm('确定要退出登录吗？')) {
              useAuthStore.getState().signOut();
            }
          }}
          className="w-full py-2.5 rounded-xl text-sm font-medium text-red-600 bg-red-50 border border-red-100 hover:bg-red-100 transition-colors touch-target"
        >
          退出登录
        </button>
      </div>
    </div>
  );
};

Object.assign(window, { UserPage });
