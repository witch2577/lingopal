// ========== Shared UI Components & Icons ==========
const { useState, useEffect, useRef, useCallback, useMemo } = React;

// ---- Icon Components (inline SVG) ----
const Icon = ({ name, size = 20, className = '', strokeWidth = 2, ...rest }) => {
  const icons = {
    translate: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
      </g>
    ),
    'book-open': (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </g>
    ),
    user: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </g>
    ),
    mic: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
      </g>
    ),
    camera: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
        <circle cx="12" cy="13" r="3"/>
      </g>
    ),
    'type-text': (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7V4h16v3M9 20h6M12 4v16"/>
      </g>
    ),
    volume: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
      </g>
    ),
    'volume-off': (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
      </g>
    ),
    copy: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2"/>
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
      </g>
    ),
    swap: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
      </g>
    ),
    star: (
      <g fill="currentColor" stroke="none">
        <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
      </g>
    ),
    lock: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2"/>
        <path d="M8 11V7a4 4 0 118 0v4"/>
      </g>
    ),
    check: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7"/>
      </g>
    ),
    x: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18L18 6M6 6l12 12"/>
      </g>
    ),
    clock: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 3"/>
      </g>
    ),
    flame: (
      <g fill="currentColor" stroke="none">
        <path d="M12 2c-2 3.5-3.5 5-3.5 7.5A3.5 3.5 0 0012 17a3.5 3.5 0 003.5-3.5c0-2.5-1.5-4-3.5-7.5zm-1 15.5c0 1.5 1 2.5 2.5 2.5 2 0 3-1.2 3-3 0-1-.5-1.5-1-2-1 1-2.5 1.5-4.5 2.5z"/>
      </g>
    ),
    trophy: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21h8m-4-4v4m-5-14h14l-1.5 6.5A5 5 0 0116.5 13h-9a5 5 0 01-2-1.5L4 7zM7 7H5a2 2 0 00-2 2v1a4 4 0 004 4M17 7h2a2 2 0 012 2v1a4 4 0 01-4 4"/>
      </g>
    ),
    chevron: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5l7 7-7 7"/>
      </g>
    ),
    'chevron-left': (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 19l-7-7 7-7"/>
      </g>
    ),
    'chevron-down': (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 9l-7 7-7-7"/>
      </g>
    ),
    heart: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </g>
    ),
    upload: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
      </g>
    ),
    settings: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </g>
    ),
    chart: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </g>
    ),
    home: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </g>
    ),
    zap: (
      <g fill="currentColor" stroke="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </g>
    ),
    play: (
      <g fill="currentColor" stroke="none">
        <path d="M8 5v14l11-7z"/>
      </g>
    ),
    pause: (
      <g fill="currentColor" stroke="none">
        <rect x="6" y="4" width="4" height="16" rx="1"/>
        <rect x="14" y="4" width="4" height="16" rx="1"/>
      </g>
    ),
    'arrow-right': (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
      </g>
    ),
    refresh: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </g>
    ),
    bookmark: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
      </g>
    ),
    globe: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </g>
    ),
    target: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </g>
    ),
    calendar: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <path d="M16 2v4M8 2v4M3 10h18"/>
      </g>
    ),
    'alert-circle': (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4M12 16h.01"/>
      </g>
    ),
    info: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4M12 8h.01"/>
      </g>
    ),
    plus: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v16m8-8H4"/>
      </g>
    ),
    trash: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
      </g>
    ),
    // P2 new icons
    compass: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>
      </g>
    ),
    users: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </g>
    ),
    bell: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 01-3.46 0"/>
      </g>
    ),
    book: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
      </g>
    ),
    share: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
      </g>
    ),
    download: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
      </g>
    ),
    database: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="8" ry="3"/>
        <path d="M4 5v6c0 1.657 3.582 3 8 3s8-1.343 8-3V5"/>
        <path d="M4 11v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/>
      </g>
    ),
    // BUGFIX: icons missing but referenced by LevelMap, ContentUpdater, Scenarios
    'check-circle': (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </g>
    ),
    'refresh-cw': (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
      </g>
    ),
     sparkles: (
       <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
         <path d="M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z"/>
         <path d="M5 3L6 5L8 6L6 7L5 9L4 7L2 6L4 5L5 3Z"/>
         <path d="M19 14L20 16L22 17L20 18L19 20L18 18L16 17L18 16L19 14Z"/>
       </g>
     ),
     video: (
       <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
         <polygon points="23 7 16 12 23 17 23 7"/>
         <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
       </g>
     ),
    sync: (
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/>
        <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
      </g>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...rest}
    >
      {icons[name] || null}
    </svg>
  );
};

// ---- Ripple Button Component ----
const RippleButton = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconRight,
  fullWidth = false,
  loading = false,
  disabled = false,
  ...rest
}, ref) => {
  const btnRef = useRef(null);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    if (disabled || loading) return;
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(prev => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
    rest.onClick?.(e);
  };

  const baseCls = 'relative overflow-hidden inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all no-select focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] touch-target';

  const variants = {
    primary: 'bg-brand-gradient text-white shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    ghost: 'text-slate-600 hover:bg-slate-100',
    outline: 'border-2 border-slate-200 text-slate-700 hover:border-brand-400 hover:text-brand-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    accent: 'bg-warm-gradient text-white shadow-lg shadow-amber-500/25 hover:shadow-xl',
    mint: 'bg-mint-gradient text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base',
  };

  return (
    <button
      ref={(node) => {
        btnRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      className={`${baseCls} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled || loading}
      {...rest}
      onClick={handleClick}
    >
      {ripples.map(r => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
          style={{
            left: r.x,
            top: r.y,
            width: 1,
            height: 1,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      {loading && (
        <svg className="animate-spin -ml-1" width={size === 'sm' ? 14 : 18} height={size === 'sm' ? 14 : 18} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3"/>
          <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )}
      {icon && !loading && <Icon name={icon} size={size === 'sm' ? 16 : 20} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === 'sm' ? 16 : 20} />}
    </button>
  );
});
RippleButton.displayName = 'RippleButton';

// ---- Button Component (backward compatible, uses RippleButton) ----
const Button = (props) => <RippleButton {...props} />;

// ---- Card Component ----
const Card = ({ children, className = '', padding = 'p-4', ...rest }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 ${padding} ${className}`} {...rest}>
    {children}
  </div>
);

// ---- Badge ----
const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-slate-100 text-slate-600',
    primary: 'bg-brand-100 text-brand-700',
    accent: 'bg-amber-100 text-amber-700',
    success: 'bg-emerald-100 text-emerald-700',
    danger: 'bg-red-100 text-red-700',
    purple: 'bg-purple-100 text-purple-700',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// ---- Toast / Notification ----
const Notification = () => {
  const notification = useUIStore(s => s.notification);

  const icons = {
    success: 'check',
    error: 'x',
    info: 'info',
    warning: 'alert-circle',
  };
  const colors = {
    success: 'bg-emerald-500',
    error: 'bg-red-500',
    info: 'bg-brand-500',
    warning: 'bg-amber-500',
  };

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          key={notification.id}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        >
          <div className={`${colors[notification.type] || colors.info} text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-[200px] max-w-[90vw]`}>
            <Icon name={icons[notification.type] || 'info'} size={20} />
            <span className="text-sm font-medium">{notification.message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ---- Modal ----
const Modal = ({ open, onClose, title, children, className = '' }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`relative bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-md overflow-hidden ${className}`}
        style={{ maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-slate-300" />
        </div>
        {title && (
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">{title}</h3>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 touch-target">
              <Icon name="x" size={18} />
            </button>
          </div>
        )}
        <div className="p-5 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 60px)' }}>{children}</div>
      </motion.div>
    </div>
  );
};

// ---- Loading Spinner ----
const Spinner = ({ size = 24, className = '' }) => (
  <svg className={`animate-spin ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3"/>
    <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

Object.assign(window, {
  Icon, Button, RippleButton, Card, Badge, Notification, Modal, Spinner,
});
