// ========== Bottom Navigation ==========

const BottomNav = ({ active, onChange }) => {
  const { isMobile, windowWidth } = useMobileDetect();

  // On very small screens, show fewer nav items or use compact mode
  const isCompact = isMobile && windowWidth < 360;

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass border-t border-slate-200/60 z-30 pb-safe">
      <div className="max-w-xl mx-auto flex justify-around items-center">
        {NAV_ITEMS.map(item => {
          const isActive = active === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onChange(item.key)}
              className={`relative flex flex-col items-center justify-center gap-0.5 rounded-xl transition-all btn-press touch-target flex-1 ${
                isCompact ? 'py-1 px-1' : 'py-1.5 px-2'
              } ${
                isActive
                  ? 'text-brand-600'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
              aria-label={item.label}
            >
              <motion.div
                animate={isActive ? { y: -1, scale: 1.08 } : { y: 0, scale: 1 }}
                transition={isMobile
                  ? { type: 'spring', stiffness: 500, damping: 30 }
                  : { type: 'spring', stiffness: 400, damping: 25 }
                }
              >
                <Icon
                  name={item.icon}
                  size={isCompact ? 20 : 22}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </motion.div>
              <span className={`font-medium ${isCompact ? 'text-[10px]' : 'text-[11px]'} ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -top-0.5 w-1 h-1 rounded-full bg-brand-500"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

Object.assign(window, { BottomNav });
