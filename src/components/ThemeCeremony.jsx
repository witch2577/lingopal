// ========== Theme Ceremony Stub ==========
// Visual ceremony for theme switching (human <-> immortal)
// Stubbed for v10.7.4; full animation deferred to v10.8

const ThemeCeremony = ({ isActive, onComplete }) => {
  React.useEffect(() => {
    if (isActive) {
      const t = setTimeout(onComplete, 800);
      return () => clearTimeout(t);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        className="bg-white rounded-3xl p-8 shadow-2xl text-center max-w-sm mx-4"
      >
        <div className="text-5xl mb-4">✨</div>
        <p className="text-lg font-semibold text-slate-800">主题切换中...</p>
        <p className="text-sm text-slate-500 mt-1">正在进入新的修行境界</p>
      </motion.div>
    </div>
  );
};

Object.assign(window, { ThemeCeremony });
