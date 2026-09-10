// ========== App Root ==========

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isInitialized, setIsInitialized] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [loadedModules, setLoadedModules] = useState({
    home: true,
    translation: true,
    learning: false,
    oral: false,
    written: false,
    content: false,
    user: false,
    login: false,
    auth: false,
    admin: false,
    practice: false,
  });
  const isLoggedIn = useAuthStore(s => s.isLoggedIn);
  const isAdmin = useAuthStore(s => s.isAdmin);
  const authLoading = useAuthStore(s => s.isLoading);
  const profile = useUserStore(s => s.profile);
  const { isMobile, isLandscape } = useMobileDetect();
  const { isOpen: keyboardOpen } = useKeyboard();
  const reducedMotion = useReducedMotion();

  // Module loading map: which lazy group each tab needs
  const tabModuleMap = {
    home: null,
    translation: null,
    learning: 'learning',
    practice: 'practice',
    oral: 'practice',
    written: 'practice',
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

  // Lazy-load admin module when needed
  useEffect(() => {
    if (showAdmin && !loadedModules.admin && window.loadLazyModule) {
      window.loadLazyModule('admin').then(() => {
        setLoadedModules(prev => ({ ...prev, admin: true }));
      });
    }
  }, [showAdmin]);

  // Lazy-load module when tab changes
  useEffect(() => {
    const group = tabModuleMap[activeTab];
    if (group && !loadedModules[group] && window.loadLazyModule) {
      window.loadLazyModule(group).then(() => {
        setLoadedModules(prev => ({
          ...prev,
          [group]: true,
          ...(group === 'practice' ? { oral: true, written: true } : {}),
        }));
      });
    }
  }, [activeTab]);

  // Expose tab switcher for empty state actions
  useEffect(() => {
    window.setActiveTab = setActiveTab;
    if (isLoggedIn && isAdmin) {
      window.openAdmin = () => setShowAdmin(true);
    } else {
      delete window.openAdmin;
    }
    return () => {
      delete window.setActiveTab;
      delete window.openAdmin;
    };
  }, [isLoggedIn, isAdmin]);

  // Initialize app
  useEffect(() => {
    let cancelled = false;
    let timeoutId = null;

    const init = async () => {
      try {
        useUserStore.getState().loadPreferences();
        const [authProfile, localProfile] = await Promise.all([
          useAuthStore.getState().init(),
          useUserStore.getState().init(),
          useTranslationStore.getState().loadHistory(),
        ]);

        if (cancelled) return;

        const weekChanged = hasWeekChanged();
        if (weekChanged) {
          const currentWeek = getCurrentWeekIndex();
          saveActiveWeek(currentWeek);
          try {
            localStorage.removeItem('lingopal_content_week_0_dismissed');
            localStorage.removeItem('lingopal_content_week_1_dismissed');
            localStorage.removeItem('lingopal_content_week_2_dismissed');
            localStorage.removeItem('lingopal_content_week_3_dismissed');
          } catch (e) {}
        }

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
      <div className="h-full flex items-center justify-center bg-slate-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center text-white text-3xl shadow-lg shadow-brand-500/30">
              🌍
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-brand-400"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-semibold text-slate-700">语伴 LingoPal</p>
            <p className="text-sm text-slate-400">正在初始化...</p>
          </div>
          <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-gradient rounded-full"
              animate={{ width: ['0%', '70%', '90%', '100%'] }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  const pageTransition = reducedMotion
    ? { duration: 0 }
    : isMobile
      ? { duration: 0.12 }
      : { duration: 0.15 };

  const requireAuth = IS_SUPABASE_CONFIGURED && !isLoggedIn && !authLoading;

  if (showAdmin && loadedModules.admin && isLoggedIn && isAdmin) {
    return (
      <div className="h-full">
        <AdminPage onClose={() => setShowAdmin(false)} />
      </div>
    );
  }

  return (
    <div className={`h-full flex flex-col bg-slate-50 ${isMobile ? 'mobile-compact' : ''}`}>
      <PWAManager />
      <main className="flex-1 overflow-hidden relative" id="app-main">
        <div
          className={`mx-auto h-full overflow-y-auto hide-scrollbar ${
            isLandscape && isMobile
              ? 'max-w-none px-4 pt-3 pb-16'
              : 'max-w-xl px-4 pt-4 pb-20'
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
                {activeTab === 'practice' && loadedModules.practice && <PracticePage />}
                {activeTab === 'oral' && loadedModules.practice && <PracticePage />}
                {activeTab === 'written' && loadedModules.practice && <PracticePage />}
                {activeTab === 'content' && loadedModules.content && <ContentPage />}
                {activeTab === 'user' && loadedModules.user && <UserPage />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Floating translate button (visible on non-translation pages) */}
      {activeTab !== 'translation' && !requireAuth && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveTab('translation')}
          className="fixed right-4 bottom-20 z-40 w-12 h-12 rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/30 flex items-center justify-center hover:bg-brand-600 transition-colors"
          aria-label="快速翻译"
        >
          <Icon name="translate" size={20} />
        </motion.button>
      )}

      {/* Bottom navigation */}
      {(!isMobile || !keyboardOpen) && !requireAuth && (
        <BottomNav active={activeTab} onChange={setActiveTab} />
      )}

      <Notification />
      <ConfettiEffect />

      <AnimatePresence>
        {showOnboarding && loadedModules.login && !requireAuth && (
          <div className="fixed inset-0 z-50 bg-slate-50 overflow-y-auto">
            <LoginPage onComplete={handleOnboardingComplete} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
