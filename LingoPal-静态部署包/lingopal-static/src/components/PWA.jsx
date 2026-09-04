// ========== PWA Manager Component ==========
// 负责 Service Worker 注册、离线状态检测、安装提示等

const PWAManager = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [swReady, setSwReady] = useState(false);
  const [showUpdateNotice, setShowUpdateNotice] = useState(false);

  // 初始化：注册 SW、检测网络、检测安装状态
  useEffect(() => {
    // 1. 检测初始网络状态
    setIsOnline(navigator.onLine);
    // 同步 body 类名（用于调整布局）
    if (!navigator.onLine) {
      document.body.classList.add('is-offline');
    }

    // 2. 网络状态监听
    const handleOnline = () => {
      setIsOnline(true);
      document.body.classList.remove('is-offline');
      useUIStore.getState().showNotification('网络已恢复', 'success', 2000);
      // 触发后台同步
      if ('serviceWorker' in navigator && 'SyncManager' in window) {
        navigator.serviceWorker.ready.then((reg) => {
          return reg.sync.register('sync-learning-data');
        }).catch(() => {});
      }
    };
    const handleOffline = () => {
      setIsOnline(false);
      document.body.classList.add('is-offline');
      useUIStore.getState().showNotification('当前处于离线模式', 'info', 3000);
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // 3. 检测是否已安装为 PWA
    const checkInstalled = () => {
      const installed =
        window.matchMedia('(display-mode: standalone)').matches ||
        window.matchMedia('(display-mode: fullscreen)').matches ||
        (window.navigator.standalone === true); // iOS Safari
      setIsInstalled(installed);
      return installed;
    };
    checkInstalled();

    // 4. 注册 Service Worker
    if ('serviceWorker' in navigator) {
      const swUrl = './service-worker.js';

      navigator.serviceWorker.register(swUrl, { scope: './' })
        .then((registration) => {
          console.log('[PWA] Service Worker 注册成功:', registration.scope);
          setSwReady(true);

          // 检测更新
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setShowUpdateNotice(true);
              }
            });
          });
        })
        .catch((err) => {
          console.warn('[PWA] Service Worker 注册失败:', err);
        });

      // 监听 controllerchange（SW 更新后）
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }

    // 5. 监听 beforeinstallprompt（Android Chrome）
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
      // 延迟显示安装提示，避免刚进入就弹窗
      setTimeout(() => {
        const dismissed = localStorage.getItem('lingopal_install_dismissed');
        if (!dismissed && !checkInstalled()) {
          setShowInstallBanner(true);
        }
      }, 5000);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // 6. 监听 appinstalled
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallBanner(false);
      setInstallPrompt(null);
      useUIStore.getState().showNotification('LingoPal 已安装到主屏', 'success', 3000);
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallBanner(false);
      setInstallPrompt(null);
    }
  };

  const handleDismissInstall = () => {
    setShowInstallBanner(false);
    localStorage.setItem('lingopal_install_dismissed', 'true');
    // 7 天后重新提示
    setTimeout(() => {
      localStorage.removeItem('lingopal_install_dismissed');
    }, 7 * 24 * 60 * 60 * 1000);
  };

  const handleUpdate = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.controller?.postMessage({ type: 'SKIP_WAITING' });
    }
  };

  // 渲染：组件本身不显示 UI（UI 由独立组件负责），
  // 但通过 Context/Store 暴露状态
  useEffect(() => {
    // 将 PWA 状态挂到 window 上供其他组件访问
    window.PWA_STATE = {
      isOnline,
      isInstalled,
      swReady,
      installPrompt,
      showInstallBanner,
      setShowInstallBanner,
    };
  }, [isOnline, isInstalled, swReady, installPrompt, showInstallBanner]);

  return (
    <>
      {/* 离线状态条 */}
      <OfflineBanner isOnline={isOnline} />

      {/* 添加到主屏提示 */}
      <InstallPromptBanner
        visible={showInstallBanner && !isInstalled}
        onInstall={handleInstall}
        onDismiss={handleDismissInstall}
        installPrompt={installPrompt}
      />

      {/* 更新提示 */}
      {showUpdateNotice && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 max-w-sm">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12a9 9 0 1 1-3-6.7L21 8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 3v5h-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm flex-1">发现新版本，点击立即更新</span>
          <button
            onClick={handleUpdate}
            className="px-3 py-1.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium rounded-lg btn-press"
          >
            更新
          </button>
        </div>
      )}
    </>
  );
};

// ========== 离线状态条 ==========
const OfflineBanner = ({ isOnline }) => {
  if (isOnline) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-amber-500 text-white text-sm py-2 px-4 text-center shadow-md"
      style={{ animation: 'slideDown 0.3s ease-out' }}
    >
      <div className="flex items-center justify-center gap-2">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" strokeLinecap="round" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" strokeLinecap="round" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" strokeLinecap="round" />
          <line x1="12" y1="20" x2="12.01" y2="20" strokeLinecap="round" />
          <line x1="2" y1="2" x2="22" y2="22" strokeLinecap="round" />
        </svg>
        <span>当前离线 — 核心学习功能仍可使用</span>
      </div>
    </div>
  );
};

// ========== 添加到主屏提示 ==========
const InstallPromptBanner = ({ visible, onInstall, onDismiss, installPrompt }) => {
  // iOS Safari 检测 — 显示手动添加提示
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const showIOSGuide = isIOS && isSafari && !installPrompt;

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-40 max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 flex items-start gap-3"
        style={{ animation: 'slideUp 0.3s ease-out' }}>
        <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0 text-white font-bold text-lg">
          L
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-900 text-sm">添加到主屏</h4>
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
            {showIOSGuide
              ? '点击 Safari 分享按钮，选择「添加到主屏幕」即可离线使用'
              : '将 LingoPal 安装到主屏，体验完整离线学习功能'}
          </p>
          {installPrompt && (
            <button
              onClick={onInstall}
              className="mt-3 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium rounded-lg btn-press w-full"
            >
              立即安装
            </button>
          )}
        </div>
        <button
          onClick={onDismiss}
          className="text-slate-400 hover:text-slate-600 p-1 -mr-1 -mt-1"
          aria-label="关闭"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
            <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

Object.assign(window, { PWAManager });
