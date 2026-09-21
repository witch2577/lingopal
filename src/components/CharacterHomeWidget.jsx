// ========== CharacterHomeWidget ==========
// Homepage character hut widget.
// Shows: character image (baby for infant / rendered for others),
// current mood bubble, GP progress bar, stage progress.
// Batch 1: hotzone interactions, dialogue bubbles, culture egg trigger, collection entry.
// 日系二次元调性 styling via Tailwind classes.

const { useState, useEffect, useRef, useMemo, useCallback } = React;

function CharacterHomeWidget({ className = '', compact = false }) {
  const charState = useCharacterStore.getState();
  const [growth, setGrowth] = useState(charState.growth);
  const [config, setConfig] = useState(charState.config);
  const [loading, setLoading] = useState(charState.loading);
  const [moodAnimating, setMoodAnimating] = useState(false);
  const [showEvolutionHint, setShowEvolutionHint] = useState(false);
  // Batch 1 interaction states
  const [bubble, setBubble] = useState(null); // { text, x, y }
  const [animClass, setAnimClass] = useState('');
  const [cultureEgg, setCultureEgg] = useState(null);
  const [showCollection, setShowCollection] = useState(false);
  const unsubRef = useRef(null);
  const widgetRef = useRef(null);
  const bubbleTimerRef = useRef(null);

  // Subscribe to character store changes
  useEffect(function() {
    // Trigger initialization if not already initialized (fixes P0: new users stuck on skeleton)
    if (!useCharacterStore.getState().initialized) {
      useCharacterStore.getState().init();
    }

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

  // Batch 1: Check culture egg trigger on mount
  useEffect(function() {
    if (!growth || typeof CultureEggs === 'undefined') return;
    const userState = useUserStore.getState();
    const langs = userState.profile?.targetLanguages || ['en'];
    const eggs = CultureEggs.checkAllTriggers(langs);
    if (eggs.length > 0) {
      setCultureEgg(eggs[0]);
      Analytics.track('culture_egg_trigger_rate', { lang: eggs[0].lang });
    }
  }, [growth?.currentStage]);

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

  // Batch 1: show bubble helper
  const showBubble = useCallback(function(text) {
    setBubble({ text });
    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    bubbleTimerRef.current = setTimeout(function() { setBubble(null); }, 2000);
  }, []);

  // Batch 1: trigger animation helper
  const triggerAnim = useCallback(function(cls) {
    setAnimClass('');
    // force reflow
    void widgetRef.current?.offsetWidth;
    setAnimClass(cls);
    setTimeout(function() { setAnimClass(''); }, 800);
  }, []);

  // Batch 1: hotzone click handler
  const handleHotzoneClick = useCallback(function(hotzone, e) {
    e.stopPropagation();
    if (!growth || typeof CharacterInteractions === 'undefined') return;

    const isRapid = CharacterInteractions.trackRapidClick(hotzone);
    const name = config?.name || growth?.name || '小语伴';
    const userState = useUserStore.getState();
    const address = userState.profile?.nickname || '这里';

    if (isRapid) {
      const line = CharacterInteractions.getRapidDialogue(growth, name, address);
      showBubble(line);
      triggerAnim(CharacterInteractions.getAnimationClass(hotzone, true));
      Analytics.track('char_interact_total', { hotzone: hotzone + '_rapid' });
      CharacterInteractions.recordCooldown(hotzone);
      return;
    }

    if (CharacterInteractions.isOnCooldown(hotzone)) {
      // Cooldown: static bubble only, no animation
      const line = CharacterInteractions.getDialogue(hotzone, growth, name, address);
      showBubble(line);
      Analytics.track('char_interact_total', { hotzone: hotzone + '_cooldown' });
      return;
    }

    const line = CharacterInteractions.getDialogue(hotzone, growth, name, address);
    showBubble(line);
    triggerAnim(CharacterInteractions.getAnimationClass(hotzone, false));
    CharacterInteractions.recordCooldown(hotzone);
    Analytics.track('char_interact_total', { hotzone });
  }, [growth, config, showBubble, triggerAnim]);

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

  // Batch 1: check if any culture eggs unlocked for collection entry
  const unlockedEggs = typeof CultureEggs !== 'undefined' ? CultureEggs.getUnlocked() : [];

  // --- Widget layout ---
  return React.createElement('div', {
    ref: widgetRef,
    'data-testid': 'character-home-widget',
    className: 'character-home-widget relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 ' + className + ' ' + animClass,
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

    // Character display area with hotzones
    React.createElement('div', {
      key: 'char-area',
      className: 'relative flex flex-col items-center justify-center',
      style: { minHeight: compact ? 120 : 160 }
    }, [
      // Character renderer wrapper with hotzones
      React.createElement('div', {
        key: 'renderer-wrap',
        className: 'relative',
        'data-testid': 'character-display'
      }, [
        // Character image
        isInfant
          ? React.createElement(BabyCharacterRenderer, {
              key: 'baby-renderer',
              config: config,
              width: size,
              height: Math.round(size * 1.15),
              className: 'drop-shadow-md'
            })
          : React.createElement(CharacterRendererStatic, {
              key: 'static-renderer',
              config: config,
              width: size,
              height: Math.round(size * 1.15),
              className: 'drop-shadow-md'
            }),

        // Hotzone overlays (absolute positioned over character)
        React.createElement('div', {
          key: 'hotzones',
          className: 'absolute inset-0',
        }, [
          // Head hotzone (~top 30%)
          React.createElement('div', {
            key: 'hz-head',
            className: 'absolute left-1/4 right-1/4 top-0 cursor-pointer',
            style: { height: '30%' },
            onClick: function(e) { handleHotzoneClick('head', e); },
            title: '摸头',
          }),
          // Face hotzone (~middle 25%)
          React.createElement('div', {
            key: 'hz-face',
            className: 'absolute left-1/4 right-1/4 cursor-pointer',
            style: { top: '30%', height: '25%' },
            onClick: function(e) { handleHotzoneClick('face', e); },
            title: '戳脸',
          }),
          // Body hotzone (~bottom 45%)
          React.createElement('div', {
            key: 'hz-body',
            className: 'absolute left-1/4 right-1/4 bottom-0 cursor-pointer',
            style: { height: '45%' },
            onClick: function(e) { handleHotzoneClick('body', e); },
            title: '拍身体',
          }),
        ]),
      ]),

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

      // Interaction dialogue bubble (Batch 1)
      bubble && React.createElement('div', {
        key: 'interact-bubble',
        className: 'absolute -top-8 left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 bg-white shadow-lg border border-slate-100 whitespace-nowrap animate-pop',
      }, bubble.text),
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

    // Bottom hint + culture collection entry (Batch 1)
    React.createElement('div', {
      key: 'hint-row',
      className: 'mt-2 flex items-center justify-center gap-2'
    }, [
      React.createElement('div', {
        key: 'hint',
        className: 'text-center text-xs text-slate-400'
      }, '点击角色不同部位试试看~'),

      // Culture collection entry button
      unlockedEggs.length > 0 && React.createElement('button', {
        key: 'culture-btn',
        className: 'text-[10px] px-2 py-0.5 rounded-full bg-brand-50 text-brand-500 font-medium hover:bg-brand-100 transition-colors',
        onClick: function() { setShowCollection(true); Analytics.track('culture_collection_visit'); },
      }, '文化收藏 (' + unlockedEggs.length + ')'),
    ]),

    // Culture collection page overlay
    showCollection && typeof CultureEggs !== 'undefined' && React.createElement('div', {
      key: 'culture-collection',
      className: 'fixed inset-0 z-50 bg-slate-50 p-4 overflow-auto'
    },
      React.createElement(CultureEggs.CultureCollection, {
        onBack: function() { setShowCollection(false); }
      })
    ),

    // Culture egg trigger overlay
    cultureEgg && typeof CultureEggs !== 'undefined' && React.createElement(CultureEggs.CultureEasterEggTrigger, {
      key: 'culture-trigger',
      egg: cultureEgg,
      characterName: config?.name || growth?.name,
      userNickname: useUserStore.getState().profile?.nickname,
      onDismiss: function() { setCultureEgg(null); },
    }),
  ]);
}

Object.assign(window, { CharacterHomeWidget });

