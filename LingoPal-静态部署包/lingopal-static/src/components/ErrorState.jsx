// ========== Error State Components ==========

const ErrorState = ({
  icon = '⚠️',
  title = '出错了',
  description = '发生了一些意外，请稍后重试',
  error = null,
  onRetry = null,
  retryText = '重试',
  onBack = null,
  backText = '返回',
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: { icon: 'text-3xl', title: 'text-sm', desc: 'text-xs', padding: 'py-6' },
    md: { icon: 'text-5xl', title: 'text-base', desc: 'text-sm', padding: 'py-10' },
    lg: { icon: 'text-6xl', title: 'text-lg', desc: 'text-base', padding: 'py-16' },
  };
  const s = sizeMap[size] || sizeMap.md;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col items-center text-center ${s.padding} ${className}`}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
        className={`${s.icon} mb-4`}
      >
        {icon}
      </motion.div>
      <h3 className={`${s.title} font-semibold text-slate-700 mb-1`}>{title}</h3>
      <p className={`${s.desc} text-slate-400 max-w-xs leading-relaxed whitespace-pre-line`}>
        {description}
      </p>
      {error && (
        <div className="mt-2 px-3 py-1.5 bg-red-50 rounded-lg">
          <p className="text-xs text-red-500 font-mono">{error}</p>
        </div>
      )}
      <div className="flex items-center gap-2 mt-4">
        {onRetry && (
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="primary" size="sm" onClick={onRetry} icon="refresh">
              {retryText}
            </Button>
          </motion.div>
        )}
        {onBack && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Button variant="secondary" size="sm" onClick={onBack}>
              {backText}
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Predefined error states
const NetworkError = ({ onRetry }) => (
  <ErrorState
    icon="🌐"
    title="网络连接异常"
    description="无法连接到服务器\n请检查网络设置后重试"
    onRetry={onRetry}
    retryText="重新连接"
    size="md"
  />
);

const TranslationError = ({ error, onRetry }) => (
  <ErrorState
    icon="🔄"
    title="翻译失败"
    description="翻译服务暂时不可用\n可尝试切换语言或稍后重试"
    error={error}
    onRetry={onRetry}
    retryText="重新翻译"
    size="sm"
  />
);

const SpeechError = ({ error, onRetry }) => (
  <ErrorState
    icon="🎤"
    title="语音识别失败"
    description={error?.includes('权限')
      ? '请允许麦克风权限后重试\n或在浏览器设置中开启麦克风访问'
      : '未能识别到语音内容\n请在安静环境下清晰朗读'}
    error={error}
    onRetry={onRetry}
    retryText="重新识别"
    size="sm"
  />
);

const OCRError = ({ error, onRetry }) => (
  <ErrorState
    icon="📷"
    title="图片识别失败"
    description="未能识别图片中的文字\n请确保图片清晰、光线充足"
    error={error}
    onRetry={onRetry}
    retryText="重新识别"
    size="sm"
  />
);

const LoadError = ({ error, onRetry, onBack }) => (
  <ErrorState
    icon="💥"
    title="加载失败"
    description="数据加载时发生错误\n请检查网络或稍后重试"
    error={error}
    onRetry={onRetry}
    onBack={onBack}
    size="md"
  />
);

// Inline error banner (for use within cards/pages)
const ErrorBanner = ({ message, onRetry, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    className={`bg-red-50 border border-red-100 rounded-xl p-3 flex items-center gap-3 ${className}`}
  >
    <span className="text-lg flex-shrink-0">⚠️</span>
    <div className="flex-1 min-w-0">
      <p className="text-sm text-red-600">{message}</p>
    </div>
    {onRetry && (
      <button
        onClick={onRetry}
        className="flex-shrink-0 px-3 py-1.5 bg-white text-red-600 text-xs font-medium rounded-lg hover:bg-red-100 transition-colors"
      >
        重试
      </button>
    )}
  </motion.div>
);

Object.assign(window, {
  ErrorState, NetworkError, TranslationError, SpeechError,
  OCRError, LoadError, ErrorBanner,
});
