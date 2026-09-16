// ========== CharacterHomeWidget ==========
// Homepage character hut widget.
// Shows: character image (baby for infant / rendered for others),
// current mood bubble, GP progress bar, stage progress.
// 日系二次元调性 styling via Tailwind classes.

const { useState, useEffect, useRef, useMemo } = React;

/**
 * CharacterHomeWidget - mounted on the homepage.
 *
 * Props:
 *   - className: extra CSS classes
 *   - compact: if true, renders a smaller variant for mobile
 */
function CharacterHomeWidget({ className = '', compact = false }) {
  const charState = useCharacterStore.getState();
  const [growth, setGrowth] = useState(charState.growth);
  const [config, setConfig] = useState(charState.config);
  const [loading, setLoading] = useState(charState.loading);
  const [moodAnimating, setMoodAnimating] = useState(false);
  const [showEvolutionHint, setShowEvolutionHint] = useState(false);
  const unsubRef = useRef(null);
  const widgetRef = useRef(null);

  // Subscribe to character store changes
  useEffect(function() {
    const unsub = useCharacterStore.subscribe(function(state) {
      setGrowth(state.growth);
      setConfig(state.config);
      setLoading(state.loading);
    });
    unsubRef.current = unsub;
    return function() { if (unsub) unsub(); };
  }, []);

  // Check for evolution proximity (within 10% of next stage)
  useEffect(function() {
    if (!growth) return;
    const progress = getStageProgress(growth.totalGP);
    if (progress && progress.next && progress.progress >= 0.9 && progress.progress < 1) {
      setShowEvolutionHint(true);
    } else {
      setShowEvolutionHint(false);
    }
  }, [growth]);

  // Mood bubble animation trigger
  useEffect(function() {
    if (!growth) return;
    setMoodAnimating(true);
    var t = setTimeout(function() { setMoodAnimating(false); }, 600);
    return function() { clearTimeout(t); };
  }, [growth?.currentMood]);

  // Derived values
  const stageProgress = useMemo(function() {
    if (!growth) return null;
    return getStageProgress(growth.totalGP);
  }, [growth?.totalGP]);

  const moodDescriptor = useMemo(function() {
    if (!growth) return getMoodDescriptor('happy');
    return getMoodDescriptor(growth.currentMood);
  }, [growth?.currentMood]);

  const isInfant = useMemo(function() {
    return (growth?.currentStage || 1) === 1;
  }, [growth?.currentStage]);

  // Avatar mode re-interpretation
  const isAvatarMode = config?.mode === 'avatar';
  const displayMood = useMemo(function() {
    if (!isAvatarMode) return moodDescriptor;
    const avatarDesc = getAvatarMoodDescriptor(growth?.currentMood || 'happy');
    return { ...moodDescriptor, label: avatarDesc.label, emoji: avatarDesc.emoji, color: avatarDesc.color };
  }, [isAvatarMode, growth?.currentMood, moodDescriptor]);

  if (loading) {
    return React.createElement('div', {
      ref: widgetRef,
      className: 'character-home-widget character-home-widget--loading ' + className,
      style: { minHeight: compact ? 180 : 260 }
    }, React.createElement('div', { className: 'skeleton-shimmer rounded-2xl', style: { width: '100%', height: compact ? 180 : 260 } }));
  }

  if (!growth || !config) {
    return React.createElement('div', {
      ref: widgetRef,
      className: 'character-home-widget character-home-widget--empty ' + className,
    }, '角色加载中...');
  }

  const size = compact ? 140 : 200;
  const progressPct = stageProgress ? Math.round(stageProgress.progress * 100) : 0;
  const progressColor = displayMood.color || '#6366F1';

  // --- Widget layout ---
  return React.createElement('div', {
    ref: widgetRef,
    'data-testid': 'character-home-widget',
    className: 'character-home-widget relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 ' + className,
    style: { padding: compact ? '12px' : '16px' }
  }, [
    // Background ambient glow based on mood
    React.createElement('div', {
      key: 'bg-glow',
      className: 'absolute inset-0 opacity-10 pointer-events-none',
      style: {
        background: `radial-gradient(circle at 50% 40%, ${progressColor} 0%, transparent 70%)`,
      }
    }),

    // Evolution hint banner
    showEvolutionHint && React.createElement('div', {
      key: 'evo-hint',
      'data-testid': 'evolution-hint',
      className: 'absolute top-2 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full text-xs font-medium text-white animate-pulse',
      style: { background: 'linear-gradient(135deg, #F59E0B, #EF4444)' }
    }, '✨ 即将进化！'),

    // Character display area
    React.createElement('div', {
      key: 'char-area',
      className: 'relative flex flex-col items-center justify-center',
      style: { minHeight: compact ? 120 : 160 }
    }, [
      // Character renderer
      React.createElement('div', {
        key: 'renderer',
        className: 'relative',
        'data-testid': 'character-display'
      },
        isInfant
          ? React.createElement(BabyCharacterRenderer, {
              config: config,
              width: size,
              height: Math.round(size * 1.15),
              className: 'drop-shadow-md'
            })
          : React.createElement(CharacterRendererStatic, {
              config: config,
              width: size,
              height: Math.round(size * 1.15),
              className: 'drop-shadow-md'
            })
      ),

      // Mood bubble
      React.createElement('div', {
        key: 'mood-bubble',
        'data-testid': 'mood-bubble',
        className: 'absolute -top-1 -right-1 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm border transition-transform duration-300 ' + (moodAnimating ? 'scale-110' : 'scale-100'),
        style: {
          background: 'rgba(255,255,255,0.92)',
          borderColor: displayMood.color + '40',
          color: displayMood.color,
        }
      }, [
        React.createElement('span', { key: 'emoji', className: 'text-sm' }, displayMood.emoji),
        React.createElement('span', { key: 'label' }, displayMood.label),
      ]),
    ]),

    // Stage name + GP info
    React.createElement('div', {
      key: 'stage-info',
      className: 'mt-3 text-center'
    }, [
      React.createElement('div', {
        key: 'stage-name',
        'data-testid': 'stage-name',
        className: 'text-sm font-bold text-slate-800'
      }, growth.stageName),

      stageProgress && stageProgress.next && React.createElement('div', {
        key: 'stage-arrow',
        className: 'text-xs text-slate-400 mt-0.5'
      }, `${growth.stageName} → ${stageProgress.next.name}`),

      stageProgress && !stageProgress.next && React.createElement('div', {
        key: 'stage-max',
        className: 'text-xs text-slate-400 mt-0.5'
      }, '已满级'),
    ]),

    // GP Progress bar
    React.createElement('div', {
      key: 'gp-bar',
      className: 'mt-2'
    }, [
      React.createElement('div', {
        key: 'gp-labels',
        className: 'flex justify-between text-xs text-slate-500 mb-1'
      }, [
        React.createElement('span', { key: 'gp-current', 'data-testid': 'gp-current' }, `GP ${growth.totalGP}`),
        stageProgress && stageProgress.next
          ? React.createElement('span', { key: 'gp-target', 'data-testid': 'gp-target' }, `${stageProgress.next.gpRequired}`)
          : React.createElement('span', { key: 'gp-max' }, 'MAX'),
      ]),
      React.createElement('div', {
        key: 'gp-track',
        className: 'w-full h-2.5 bg-slate-100 rounded-full overflow-hidden'
      },
        React.createElement('div', {
          key: 'gp-fill',
          'data-testid': 'gp-progress-fill',
          className: 'h-full rounded-full transition-all duration-700 ease-out',
          style: {
            width: progressPct + '%',
            background: `linear-gradient(90deg, ${progressColor}80, ${progressColor})`,
          }
        })
      ),
    ]),

    // Bottom hint text
    React.createElement('div', {
      key: 'hint',
      className: 'mt-2 text-center text-xs text-slate-400'
    }, isInfant ? '每天学习帮助宝宝成长 ✨' : '继续学习，解锁更多造型'),
  ]);
}

Object.assign(window, { CharacterHomeWidget });
