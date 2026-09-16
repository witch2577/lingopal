// ========== ComboEffect ==========
// Tiered visual effects for consecutive correct answers during quiz.
// Yields to FeedbackEngine when feedbackActive is true.
// 4 tiers: glow(3-5), sparkle(6-10), flame(11-20), godlike(21+)

const { useState, useEffect, useMemo, useRef } = React;

// Detect low-end device
const isLowEnd = (function() {
  try {
    const mem = navigator.deviceMemory;
    const cores = navigator.hardwareConcurrency;
    if (mem && mem <= 2) return true;
    if (cores && cores <= 2) return true;
    return false;
  } catch (e) { return false; }
})();

const ComboEffect = ({ combo, maxCombo, isCorrect, onBreak, feedbackActive }) => {
  const [visible, setVisible] = useState(false);
  const [tier, setTier] = useState(0);
  const [fading, setFading] = useState(false);
  const prevComboRef = useRef(0);
  const containerRef = useRef(null);

  // Tier calculation
  const computeTier = (c) => {
    if (c >= 21) return 4;
    if (c >= 11) return 3;
    if (c >= 6) return 2;
    if (c >= 3) return 1;
    return 0;
  };

  useEffect(() => {
    if (feedbackActive) {
      // Yield to FeedbackEngine: hide combo effect
      setVisible(false);
      return;
    }

    const newTier = computeTier(combo);
    const prev = prevComboRef.current;

    if (combo >= 3 && isCorrect) {
      setVisible(true);
      setFading(false);
      setTier(newTier);
    }

    // Break: combo dropped to 0 from >0
    if (combo === 0 && prev > 0) {
      setFading(true);
      const t = setTimeout(() => { setVisible(false); setFading(false); }, 500);
      if (onBreak) onBreak(prev);
      return () => clearTimeout(t);
    }

    prevComboRef.current = combo;
  }, [combo, isCorrect, feedbackActive, onBreak]);

  if (!visible) return null;

  // Low-end fallback: only show static glow strip at bottom
  if (isLowEnd && tier < 3) {
    return (
      <div
        ref={containerRef}
        className={`fixed bottom-0 left-0 right-0 h-1.5 z-40 pointer-events-none combo-glow-low ${fading ? 'opacity-0 transition-opacity duration-500' : 'opacity-100'}`}
        style={{ background: 'linear-gradient(90deg, #F59E0B, #EF4444, #F59E0B)', boxShadow: '0 -2px 8px rgba(245,158,11,0.4)' }}
      />
    );
  }

  // Tiered rendering
  const tierConfig = {
    1: { label: '', color: '#F59E0B', particles: 0 },
    2: { label: '连击 ' + combo + '！', color: '#6366F1', particles: 8 },
    3: { label: '连击 ' + combo + '！', color: '#EF4444', particles: 16 },
    4: { label: '超神连击！', color: '#F59E0B', particles: 24 },
  };

  const cfg = tierConfig[tier] || tierConfig[1];

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-40 pointer-events-none ${fading ? 'opacity-0 transition-opacity duration-500' : 'opacity-100'}`}
    >
      {/* Background overlay for tier 4 */}
      {tier === 4 && (
        <div className="absolute inset-0 bg-black/20 animate-fade-in" />
      )}

      {/* Edge glows */}
      {tier === 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-amber-400/60 to-transparent" />
      )}
      {tier >= 2 && (
        <>
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-indigo-400/60 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-indigo-400/40 to-transparent" />
        </>
      )}
      {tier >= 3 && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-red-400/50 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-red-400/50 to-transparent" />
        </>
      )}

      {/* Floating label */}
      {cfg.label && (
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 text-2xl font-black animate-pop"
          style={{ color: cfg.color, textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
        >
          {cfg.label}
        </div>
      )}

      {/* CSS particles (small divs with animations) */}
      {cfg.particles > 0 && !isLowEnd && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: cfg.particles }).map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 2;
            const dur = 1.5 + Math.random() * 1.5;
            const size = 4 + Math.random() * 6;
            const startY = tier === 4 ? 100 : (Math.random() > 0.5 ? 100 : 0);
            const endY = startY === 100 ? -10 : 110;
            const colors = tier === 4
              ? ['#F59E0B', '#EF4444', '#FBBF24', '#F472B6']
              : tier === 3
                ? ['#EF4444', '#F87171', '#FCA5A5']
                : ['#6366F1', '#818CF8', '#A5B4FC'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            return (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${startY}%`,
                  width: size,
                  height: size,
                  background: color,
                  opacity: 0.7,
                  animation: `floatParticle ${dur}s ease-in ${delay}s infinite`,
                }}
              />
            );
          })}
        </div>
      )}

      {/* Max combo badge (top-right) */}
      {maxCombo >= 3 && (
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold text-white bg-slate-800/70 backdrop-blur-sm">
          最高 {maxCombo} 连击
        </div>
      )}
    </div>
  );
};

// Inline combo badge for quiz UI
const ComboBadge = ({ combo }) => {
  if (combo < 2) return null;
  const colors = combo >= 10 ? 'bg-red-500 text-white' : combo >= 5 ? 'bg-indigo-500 text-white' : 'bg-amber-500 text-white';
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${colors}`}>
      🔥 {combo} 连击
    </span>
  );
};
