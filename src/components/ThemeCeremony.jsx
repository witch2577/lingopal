// ========== Theme Switching Ceremony: 引气入体 ==========
// Full-screen animated transition when switching from human to immortal theme

const ThemeCeremony = ({ isActive, onComplete }) => {
  const [phase, setPhase] = React.useState(0);
  const reducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (!isActive) {
      setPhase(0);
      return;
    }
    if (reducedMotion) {
      setPhase(4);
      setTimeout(onComplete, 300);
      return;
    }
    // Phase sequence: 0=idle, 1=darken, 2=energy-gather, 3=breakthrough, 4=transform, 5=complete
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 2200),
      setTimeout(() => { setPhase(5); onComplete && onComplete(); }, 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [isActive, reducedMotion]);

  if (!isActive && phase === 0) return null;

  const phases = [
    /* 0 idle */ { opacity: 0, pointerEvents: 'none' },
    /* 1 darken */ { opacity: 1, background: 'rgba(15,23,42,0.85)' },
    /* 2 gather */ { opacity: 1, background: 'rgba(15,23,42,0.92)' },
    /* 3 breakthrough */ { opacity: 1, background: 'rgba(30,27,75,0.95)' },
    /* 4 transform */ { opacity: 1, background: 'rgba(15,23,42,0.6)' },
    /* 5 complete */ { opacity: 0, pointerEvents: 'none' },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700"
      style={phases[phase]}
    >
      {phase >= 1 && phase <= 4 && (
        <div className="relative flex flex-col items-center">
          {/* Aura rings */}
          {phase >= 2 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-64 h-64 rounded-full border-2 border-purple-400/30 animate-ping"
                style={{ animationDuration: '2s' }}
              />
              <div
                className="absolute w-48 h-48 rounded-full border border-cyan-400/20 animate-ping"
                style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}
              />
            </div>
          )}

          {/* Central glow */}
          <div
            className={`w-32 h-32 rounded-full transition-all duration-1000 ${
              phase >= 3 ? 'bg-purple-500/40 shadow-[0_0_60px_rgba(192,132,252,0.6)]' : 'bg-purple-500/10'
            }`}
            style={{
              transform: phase >= 3 ? 'scale(1.5)' : 'scale(1)',
            }}
          />

          {/* Text */}
          <div className="mt-8 text-center">
            {phase >= 2 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-purple-300 text-lg font-medium tracking-widest"
              >
                引气入体
              </motion.p>
            )}
            {phase >= 3 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-cyan-300/80 text-sm mt-2"
              >
                仙缘觉醒 · 踏入修仙之路
              </motion.p>
            )}
          </div>

          {/* Particles */}
          {phase >= 2 && phase <= 3 && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-purple-400/60"
                  style={{
                    left: `${50 + (Math.random() - 0.5) * 60}%`,
                    top: `${50 + (Math.random() - 0.5) * 60}%`,
                    animation: `float ${1 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Object.assign(window, { ThemeCeremony });
