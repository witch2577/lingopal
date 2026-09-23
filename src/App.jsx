// ========== Splash Screen ==========
const SplashScreen = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const raceVariant = (() => {
    try {
      return localStorage.getItem('lingopal_splash_race') || 'human';
    } catch (e) {
      return 'human';
    }
  })();

  useEffect(() => {
    let timer = null;
    let fallbackTimer = null;
    let started = false;
    const startDisplayTimer = () => {
      if (started) return;
      started = true;
      timer = setTimeout(() => { setIsExiting(true); }, 1200);
    };
    // 预加载两张角色立绘：图片就绪后才开始 1.2s 展示计时；2.5s 兜底防断网卡死
    const imgs = [raceVariant + '_boy', raceVariant + '_girl'].map(v => {
      return new Promise(resolve => {
        const im = new Image();
        im.onload = im.onerror = () => resolve();
        im.src = 'assets/splash/' + v + '.png';
      });
    });
    Promise.all(imgs).then(startDisplayTimer);
    fallbackTimer = setTimeout(startDisplayTimer, 2500);
    return () => { clearTimeout(timer); clearTimeout(fallbackTimer); };
  }, []);

  const handleExit = () => {
    if (!isExiting) setIsExiting(true);
  };

  // 多层白色发光描边 + 悬浮投影样式
  const glowFilter = 'drop-shadow(0 0 5px rgba(255,255,255,0.45)) drop-shadow(0 0 12px rgba(255,255,255,0.35)) drop-shadow(0 0 24px rgba(255,255,255,0.2)) brightness(1.04) contrast(1.02)';
  const floorShadowStyle = {
    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 45%, transparent 70%)',
    filter: 'blur(2px)',
  };
  // 角色身后衬托光板：把大面积填色区域从紫底上托出
  const glowBackdropStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '140%',
    height: '110%',
    background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 35%, transparent 70%)',
    zIndex: 1,
    pointerEvents: 'none',
  };

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center cursor-pointer"
      style={{ background: 'var(--brand-gradient)' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (isExiting) onComplete();
      }}
      onClick={handleExit}
    >
      <motion.div
        className="flex flex-col items-center gap-6 select-none"
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={{
          scale: isExiting ? 0.95 : 1,
          opacity: isExiting ? 0 : 1,
          y: isExiting ? -10 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-end gap-1 px-4">
          <div className="relative">
            {/* 角色身后衬托光板 */}
            <div style={glowBackdropStyle} />
            <motion.img
              src={`assets/splash/${raceVariant}_boy.png`}
              className="h-44 w-auto object-contain relative z-10"
              style={{ filter: glowFilter }}
              alt=""
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* 脚下椭圆柔光投影 */}
            <div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-3.5 rounded-[100%]"
              style={floorShadowStyle}
            />
          </div>
          <div className="relative">
            {/* 角色身后衬托光板 */}
            <div style={glowBackdropStyle} />
            <motion.img
              src={`assets/splash/${raceVariant}_girl.png`}
              className="h-48 w-auto object-contain relative z-10"
              style={{ filter: glowFilter }}
              alt=""
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
            {/* 脚下椭圆柔光投影 */}
            <div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-4 rounded-[100%]"
              style={floorShadowStyle}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold text-white tracking-wide">语伴</h1>
          <p className="text-lg font-medium text-white/80">LingoPal</p>
        </div>
        <p className="text-sm text-white/50 mt-2">点击任意处跳过</p>
      </motion.div>
    </motion.div>
  );
};

// ========== App Root ==========

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isInitialized, setIsInitialized] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showCeremony, setShowCeremony] = useState(false);
  const [pendingThemeMode, setPendingThemeMode] = useState(null);
  const [postOnboarding, setPostOnboarding] = useState(false);
  const [showAuthPage, setShowAuthPage] = useState(false);
  const [showImmersiveCharacter, setShowImmersiveCharacter] = useState(false);
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
        setLoadedModules(prev => ({
          ...prev,
          [group]: true,
          ...(group === 'practice' ? { oral: true, written: true } : {}),
        }));
      });
    }
  }, [activeTab]);

  // Auto-close auth page when user logs in
  useEffect(() => {
    if (isLoggedIn && showAuthPage) {
      setShowAuthPage(false);
    }
  }, [isLoggedIn]);

  // Expose tab switcher and auth page opener for empty state actions
  useEffect(() => {
    window.setActiveTab = setActiveTab;
    window.openAuthPage = () => setShowAuthPage(true);
    return () => {
      delete window.setActiveTab;
      delete window.openAuthPage;
    };
  }, [isLoggedIn, isAdmin]);

  // Expose immersive character page opener (Scheme C P0)
  useEffect(() => {
    window.openCharacterImmersive = () => setShowImmersiveCharacter(true);
    return () => { delete window.openCharacterImmersive; };
  }, []);

  // Expose theme ceremony trigger for admin preview and auto-unlock
  useEffect(() => {
    window.triggerThemeCeremony = (targetMode) => {
      setPendingThemeMode(targetMode);
      setShowCeremony(true);
    };
    return () => { delete window.triggerThemeCeremony; };
  }, []);

  // Auto-unlock immortal theme when cultivation realm reaches >= 1
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

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Immersive Character Overlay (Scheme C P0) */}
      <AnimatePresence>
        {showImmersiveCharacter && (
          <motion.div
            key="immersive-character"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50"
          >
            <CharacterImmersivePage onClose={() => setShowImmersiveCharacter(false)} />
          </motion.div>
        )}
      </AnimatePresence>

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
          </AnimatePresence>
        </div>
      </main>
      {/* Bottom navigation - hidden when keyboard is open on mobile, or when immersive character is shown */}
      {(!isMobile || !keyboardOpen) && !showImmersiveCharacter && (
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
      {/* AuthPage overlay (按需弹层) */}
      <AnimatePresence>
        {showAuthPage && loadedModules.auth && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-theme-elevated overflow-y-auto"
          >
            <AuthPage onClose={() => setShowAuthPage(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};
// Mount app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
