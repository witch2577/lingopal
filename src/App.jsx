// ========== App Root ==========

const App = () => {
  const [activeTab, setActiveTab] = useState('translation');
  const [isInitialized, setIsInitialized] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showCeremony, setShowCeremony] = useState(false);
  const [pendingThemeMode, setPendingThemeMode] = useState(null);
  const [postOnboarding, setPostOnboarding] = useState(false);
  const [loadedModules, setLoadedModules] = useState({
    translation: true,
    home: true,
    learning: false,
    oral: false,
    written: false,
    practice: false,
    content: false,
    user: false,
    login: false,
    auth: false,
  });
  const isLoggedIn = useAuthStore(s => s.isLoggedIn);
  const isAdmin = useAuthStore(s => s.isAdmin);
  const authLoading = useAuthStore(s => s.isLoading);
  const profile = useUserStore(s => s.profile);
  const realm = useUserStore(s => s.realm);
  const { isMobile, isLandscape } = useMobileDetect();
  const { isOpen: keyboardOpen } = useKeyboard();
  const reducedMotion = useReducedMotion();

  // Module loading map: which lazy group each tab needs
  const tabModuleMap = {
    translation: null, // P0, already loaded
    home: null, // P0, already loaded
    learning: 'learning',
    oral: 'practice',
    written: 'practice',
    practice: 'practice',
    content: 'content',
    user: 'user',
  };

  // Lazy-load auth module on first need
  useEffect(() => {
    if (!loadedModules.auth && window.loadLazyModule) {
      window.loadLazyModule('auth').then(() => {
        setLoadedModules(prev => ({ ...prev, auth: true }));
      });
    }
  }, []);

  // Lazy-load module when tab changes
  useEffect(() => {
    const group = tabModuleMap[activeTab];
    if (group && !loadedModules[group] && window.loadLazyModule) {
      window.loadLazyModule(group).then(() => {
        setLoadedModules(prev => ({ ...prev, [group]: true }));
      });
    }
  }, [activeTab]);

  // Expose tab switcher for empty state actions
  useEffect(() => {
    window.setActiveTab = setActiveTab;
    return () => { delete window.setActiveTab; };
  }, [isLoggedIn, isAdmin]);

  // Expose theme ceremony trigger for admin preview and auto-unlock
  useEffect(() => {
    window.triggerThemeCeremony = (targetMode) => {
      setPendingThemeMode(targetMode);
      setShowCeremony(true);
    };
    return () => { delete window.triggerThemeCeremony; };
  }, []);

  // Auto-unlock immortal theme when cultivation realm reaches >= 1
  // Hook point: 修仙 system v0.2.3 will drive realm from completed languages
  useEffect(() => {
    if (isAdmin) return;
    const userState = useUserStore.getState();
    if ((userState.realm || 0) >= 1 && userState.preferences.themeMode === 'human') {
      setPendingThemeMode('immortal');
      setShowCeremony(true);
    }
  }, [realm, isAdmin]);

  // Initialize app
  useEffect(() => {
    let cancelled = false;
    let timeoutId = null;

    const init = async () => {
      try {
        // Load preferences (sync, fast) — includes themeMode restoration
        useUserStore.getState().loadPreferences();
        // Theme already applied by loadPreferences via data-theme attribute

        // Init auth, user and load history in parallel
        const [authProfile, userProfile] = await Promise.all([
          useAuthStore.getState().init(),
          useUserStore.getState().init(),
          useTranslationStore.getState().loadHistory(),
        ]);

        if (cancelled) return;

        // Check weekly content rotation
        const weekChanged = hasWeekChanged();
        if (weekChanged) {
          const currentWeek = getCurrentWeekIndex();
          saveActiveWeek(currentWeek);
          // Clear seeded flags so new weekly content gets loaded
          try {
            localStorage.removeItem('lingopal_content_week_0_dismissed');
            localStorage.removeItem('lingopal_content_week_1_dismissed');
            localStorage.removeItem('lingopal_content_week_2_dismissed');
            localStorage.removeItem('lingopal_content_week_3_dismissed');
          } catch (e) {}
        }

        // Check if onboarding needed (new user without nickname)
        const userState = useUserStore.getState();
        const authState = useAuthStore.getState();
        const needsOnboarding = !IS_SUPABASE_CONFIGURED || !authState.isLoggedIn
          ? (!userState.profile?.nickname || userState.profile.nickname === '语言学习者')
          : (!authState.supabaseProfile?.nickname || authState.supabaseProfile.nickname === '语言学习者');
        if (needsOnboarding) {
          const dismissed = localStorage.getItem('lingopal_onboarded');
          if (!dismissed) {
            setShowOnboarding(true);
          }
        }
      } catch (error) {
        console.error('[LingoPal] 初始化失败:', error);
      } finally {
        if (!cancelled) {
          setIsInitialized(true);
        }
      }
    };

    // 5 秒超时兜底：无论 init 成功/失败/挂起，5 秒内必须解除初始化状态
    timeoutId = setTimeout(() => {
      if (!cancelled) {
        console.warn('[LingoPal] 初始化超时（5秒），强制解除加载状态');
        setIsInitialized(true);
      }
    }, 5000);

    init();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setPostOnboarding(true);
    localStorage.setItem('lingopal_onboarded', 'true');
    setActiveTab('learning');
  };

  // Lazy-load login module when onboarding is shown
  useEffect(() => {
    if (showOnboarding && !loadedModules.login && window.loadLazyModule) {
      window.loadLazyModule('login').then(() => {
        setLoadedModules(prev => ({ ...prev, login: true }));
      });
    }
  }, [showOnboarding]);

  if (!isInitialized) {
    return (
      <div className="h-full flex items-center justify-center scene-home">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center text-white text-3xl shadow-lg shadow-brand-500/30 animate-breathe">
              🌍
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-brand-400"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>语伴 LingoPal</p>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>正在初始化...</p>
          </div>
          <div className="w-48 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border-light)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'var(--brand-gradient)' }}
              animate={{ width: ['0%', '70%', '90%', '100%'] }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  // Animation config based on device capabilities
  const pageTransition = reducedMotion
    ? { duration: 0 }
    : isMobile
      ? { duration: 0.12 }
      : { duration: 0.15 };

  const requireAuth = IS_SUPABASE_CONFIGURED && !isLoggedIn && !authLoading && !postOnboarding;

  return (
    <div className={`h-full flex flex-col theme-transition ${isMobile ? 'mobile-compact' : ''}`}
      style={{ background: 'var(--bg-body)' }}>
      {/* PWA Manager: 离线状态、安装提示、更新检测 */}
      <PWAManager />
      {/* Main content area (padding-top handled by offline banner spacing) */}
      <main className="flex-1 overflow-hidden relative" id="app-main">
        <div
          className={`mx-auto h-full overflow-y-auto hide-scrollbar ${
            isLandscape && isMobile
              ? 'max-w-none px-4 pt-3 pb-16'
              : 'max-w-xl px-4 pt-4 pb-20'
          } ${
            activeTab === 'home' ? 'scene-home' :
            activeTab === 'translation' ? 'scene-home' :
            activeTab === 'learning' ? 'scene-learning' :
            activeTab === 'practice' || activeTab === 'oral' || activeTab === 'written' ? 'scene-practice' :
            activeTab === 'user' ? 'scene-user' : 'scene-home'
          }`}
          style={{
            paddingBottom: keyboardOpen ? '20px' : undefined,
          }}
        >
          <AnimatePresence mode="wait">
            {requireAuth ? (
              <motion.div
                key="auth"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                {loadedModules.auth ? <AuthPage /> : (
                  <div className="h-full flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center text-white text-2xl animate-pulse">
                      🌍
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={pageTransition}
                className="h-full"
              >
                {activeTab === 'home' && <HomePage />}
                {activeTab === 'translation' && <TranslationPage />}
                {activeTab === 'learning' && loadedModules.learning && <LearningPage />}
                {activeTab === 'oral' && loadedModules.practice && <OralPage />}
                {activeTab === 'written' && loadedModules.practice && <WrittenPage />}
                {activeTab === 'practice' && loadedModules.practice && <PracticePage />}
                {activeTab === 'content' && loadedModules.content && <ContentPage />}
                {activeTab === 'user' && loadedModules.user && <UserPage />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom navigation - hidden when keyboard is open on mobile */}
      {(!isMobile || !keyboardOpen) && !requireAuth && (
        <BottomNav active={activeTab} onChange={setActiveTab} />
      )}

      {/* Global notification */}
      <Notification />

      {/* Confetti */}
      <ConfettiEffect />

      {/* Theme Switching Ceremony */}
      <ThemeCeremony
        isActive={showCeremony}
        onComplete={() => {
          setShowCeremony(false);
          if (pendingThemeMode) {
            useUserStore.getState().setThemeMode(pendingThemeMode);
            setPendingThemeMode(null);
          }
        }}
      />

      {/* Onboarding Modal */}
      <AnimatePresence>
        {showOnboarding && loadedModules.login && (
          <div className="fixed inset-0 z-50 bg-theme-elevated overflow-y-auto">
            <LoginPage onComplete={handleOnboardingComplete} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mount app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
