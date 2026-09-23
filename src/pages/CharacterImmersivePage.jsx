// ========== Character Immersive Page ==========
// Full-screen immersive character mode (Scheme C P0).
// Triggered from home page entry card; hides bottom nav.
// Reuses CharacterRenderer + CharacterInteractions engine; no rewrite.
// Background changes by growth stage: infant=warm hut, youth=study, adult=dojo.

const { useState, useEffect, useRef, useMemo, useCallback } = React;

function CharacterImmersivePage({ onClose }) {
  const charState = useCharacterStore.getState();
  const [growth, setGrowth] = useState(charState.growth);
  const [config, setConfig] = useState(charState.config);
  const [loading, setLoading] = useState(charState.loading);
  const [bubble, setBubble] = useState(null);
  const [animClass, setAnimClass] = useState('');
  const [moodAnimating, setMoodAnimating] = useState(false);
  const unsubRef = useRef(null);
  const bubbleTimerRef = useRef(null);
  const containerRef = useRef(null);

  // Subscribe to character store
  useEffect(function() {
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

  // Mood animation trigger
  useEffect(function() {
    if (!growth) return;
    setMoodAnimating(true);
    var t = setTimeout(function() { setMoodAnimating(false); }, 600);
    return function() { clearTimeout(t); };
  }, [growth?.currentMood]);

  // Swipe-down to close (mobile gesture)
  useEffect(function() {
    var startY = 0;
    var startX = 0;
    var isDragging = false;
    var onTouchStart = function(e) {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      isDragging = true;
    };
    var onTouchEnd = function(e) {
      if (!isDragging) return;
      isDragging = false;
      var endY = e.changedTouches[0].clientY;
      var endX = e.changedTouches[0].clientX;
      var dy = endY - startY;
      var dx = endX - startX;
      // Swipe down: vertical distance > 80px and more vertical than horizontal
      if (dy > 80 && dy > Math.abs(dx) * 1.5) {
        onClose();
      }
    };
    var el = containerRef.current;
    if (el) {
      el.addEventListener('touchstart', onTouchStart, { passive: true });
      el.addEventListener('touchend', onTouchEnd, { passive: true });
    }
    return function() {
      if (el) {
        el.removeEventListener('touchstart', onTouchStart);
        el.removeEventListener('touchend', onTouchEnd);
      }
    };
  }, [onClose]);

  // Derived values
  var stageProgress = useMemo(function() {
    if (!growth) return null;
    return getStageProgress(growth.totalGP);
  }, [growth?.totalGP]);

  var moodDescriptor = useMemo(function() {
    if (!growth) return getMoodDescriptor('happy');
    return getMoodDescriptor(growth.currentMood);
  }, [growth?.currentMood]);

  var isInfant = useMemo(function() {
    return (growth?.currentStage || 1) === 1;
  }, [growth?.currentStage]);

  var isAvatarMode = config?.mode === 'avatar';
  var displayMood = useMemo(function() {
    if (!isAvatarMode) return moodDescriptor;
    var avatarDesc = getAvatarMoodDescriptor(growth?.currentMood || 'happy');
    return { ...moodDescriptor, label: avatarDesc.label, emoji: avatarDesc.emoji, color: avatarDesc.color };
  }, [isAvatarMode, growth?.currentMood, moodDescriptor]);

  // Background gradient by stage
  var stageBg = useMemo(function() {
    var stage = growth?.currentStage || 1;
    if (stage === 1) return 'linear-gradient(180deg, #FFF7ED 0%, #FFEDD5 40%, #FED7AA 100%)';
    if (stage === 2) return 'linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 40%, #BAE6FD 100%)';
    return 'linear-gradient(180deg, #FAF5FF 0%, #F3E8FF 40%, #E9D5FF 100%)';
  }, [growth?.currentStage]);

  // Show bubble helper
  var showBubble = useCallback(function(text) {
    setBubble({ text: text });
    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    bubbleTimerRef.current = setTimeout(function() { setBubble(null); }, 2000);
  }, []);

  // Trigger animation helper
  var triggerAnim = useCallback(function(cls) {
    setAnimClass('');
    void (containerRef.current && containerRef.current.offsetWidth);
    setAnimClass(cls);
    setTimeout(function() { setAnimClass(''); }, 800);
  }, []);

  // Hotzone click handler — reuses global CharacterInteractions, no rewrite
  var handleHotzoneClick = useCallback(function(hotzone, e) {
    e.stopPropagation();
    if (!growth || typeof CharacterInteractions === 'undefined') return;
    var isRapid = CharacterInteractions.trackRapidClick(hotzone);
    var name = config?.characterName || config?.name || growth?.name || '小伙伴';
    var userState = useUserStore.getState();
    var address = config?.customTitle || userState.profile?.nickname || '这里';
    if (isRapid) {
      var line = CharacterInteractions.getRapidDialogue(growth, name, address);
      showBubble(line);
      triggerAnim(CharacterInteractions.getAnimationClass(hotzone, true));
      Analytics.track('char_interact_total', { hotzone: hotzone + '_rapid' });
      CharacterInteractions.recordCooldown(hotzone);
      return;
    }
    if (CharacterInteractions.isOnCooldown(hotzone)) {
      var line2 = CharacterInteractions.getDialogue(hotzone, growth, name, address);
      showBubble(line2);
      Analytics.track('char_interact_total', { hotzone: hotzone + '_cooldown' });
      return;
    }
    var line3 = CharacterInteractions.getDialogue(hotzone, growth, name, address);
    showBubble(line3);
    triggerAnim(CharacterInteractions.getAnimationClass(hotzone, false));
    CharacterInteractions.recordCooldown(hotzone);
    Analytics.track('char_interact_total', { hotzone: hotzone });
  }, [growth, config, showBubble, triggerAnim]);

  // User stats
  var userState = useUserStore.getState();
  var streakDays = userState.streakDays || 0;
  var totalXP = userState.totalXP || 0;
  var xpProgress = getXPProgress(totalXP);
  var progressPct = stageProgress ? Math.round(stageProgress.progress * 100) : 0;
  var progressColor = displayMood.color || '#6366F1';
  var currentLevel = getLevelByXP(totalXP);

  if (loading) {
    return React.createElement('div', {
      ref: containerRef,
      className: 'fixed inset-0 z-50 flex items-center justify-center',
      style: { background: stageBg }
    }, React.createElement('div', {
      className: 'skeleton-shimmer rounded-2xl',
      style: { width: 200, height: 260 }
    }));
  }

  if (!growth || !config) {
    return React.createElement('div', {
      ref: containerRef,
      className: 'fixed inset-0 z-50 flex items-center justify-center',
      style: { background: stageBg }
    }, React.createElement('p', { className: 'text-slate-500' }, '角色加载中...'));
  }

  if (typeof CharacterRendererStatic === 'undefined' || typeof BabyCharacterRenderer === 'undefined') {
    return React.createElement('div', {
      ref: containerRef,
      className: 'fixed inset-0 z-50 flex items-center justify-center',
      style: { background: stageBg }
    }, React.createElement('p', { className: 'text-slate-500' }, '角色加载中...'));
  }

  var charSize = Math.min(typeof window !== 'undefined' ? window.innerWidth * 0.6 : 300, 300);
  var name = config?.characterName || config?.name || growth?.name || '小伙伴';

  return React.createElement('div', {
    ref: containerRef,
    className: 'fixed inset-0 z-50 flex flex-col ' + animClass,
    style: { background: stageBg }
  }, [
    // Top info bar
    React.createElement('div', {
      key: 'top-bar',
      className: 'flex items-center justify-between px-5 pt-4 pb-2'
    }, [
      React.createElement('div', {
        key: 'top-left',
        className: 'flex items-center gap-3'
      }, [
        // Mood bubble
        React.createElement('div', {
          key: 'mood',
          className: 'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm border transition-transform duration-300 ' + (moodAnimating ? 'scale-110' : 'scale-100'),
          style: {
            background: 'rgba(255,255,255,0.92)',
            borderColor: displayMood.color + '40',
            color: displayMood.color
          }
        }, [
          React.createElement('span', { key: 'emoji', className: 'text-sm' }, displayMood.emoji),
          React.createElement('span', { key: 'label' }, displayMood.label)
        ]),
        React.createElement('div', { key: 'name-block', className: 'flex flex-col' }, [
          React.createElement('span', { key: 'name', className: 'text-sm font-bold text-slate-800' }, name),
          React.createElement('span', { key: 'stage', className: 'text-[10px] text-slate-500' }, growth.stageName)
        ])
      ]),
      // Close button (X)
      React.createElement('button', {
        key: 'close-btn',
        onClick: onClose,
        className: 'w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-slate-600 shadow-sm transition-colors',
        'aria-label': '关闭'
      }, React.createElement(Icon, { name: 'x', size: 16 }))
    ]),

    // Main character area
    React.createElement('div', {
      key: 'char-area',
      className: 'flex-1 flex flex-col items-center justify-center relative px-4'
    }, [
      // Interaction dialogue bubble
      bubble && React.createElement('div', {
        key: 'bubble',
        className: 'absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl text-xs font-medium text-slate-700 bg-white shadow-lg border border-slate-100 whitespace-nowrap animate-pop'
      }, bubble.text),

      // Character renderer with hotzones
      React.createElement('div', {
        key: 'renderer-wrap',
        className: 'relative'
      }, [
        isInfant
          ? React.createElement(BabyCharacterRenderer, {
              key: 'baby',
              config: config,
              width: charSize,
              height: Math.round(charSize * 1.15),
              className: 'drop-shadow-xl'
            })
          : React.createElement(CharacterRendererStatic, {
              key: 'static',
              config: config,
              width: charSize,
              height: Math.round(charSize * 1.15),
              className: 'drop-shadow-xl'
            }),
        // Hotzone overlays
        React.createElement('div', {
          key: 'hotzones',
          className: 'absolute inset-0'
        }, [
          React.createElement('div', {
            key: 'hz-head',
            className: 'absolute left-1/4 right-1/4 top-0 cursor-pointer',
            style: { height: '30%' },
            onClick: function(e) { handleHotzoneClick('head', e); },
            title: '摸头'
          }),
          React.createElement('div', {
            key: 'hz-face',
            className: 'absolute left-1/4 right-1/4 cursor-pointer',
            style: { top: '30%', height: '25%' },
            onClick: function(e) { handleHotzoneClick('face', e); },
            title: '戳脸'
          }),
          React.createElement('div', {
            key: 'hz-body',
            className: 'absolute left-1/4 right-1/4 bottom-0 cursor-pointer',
            style: { height: '45%' },
            onClick: function(e) { handleHotzoneClick('body', e); },
            title: '拍身体'
          })
        ])
      ]),

      // Growth progress bar
      React.createElement('div', {
        key: 'growth-bar',
        className: 'mt-6 w-full max-w-xs'
      }, [
        React.createElement('div', {
          key: 'gp-labels',
          className: 'flex justify-between text-xs text-slate-500 mb-1'
        }, [
          React.createElement('span', { key: 'gp-cur' }, 'GP ' + growth.totalGP),
          stageProgress && stageProgress.next
            ? React.createElement('span', { key: 'gp-next' }, stageProgress.next.gpRequired)
            : React.createElement('span', { key: 'gp-max' }, 'MAX')
        ]),
        React.createElement('div', {
          key: 'gp-track',
          className: 'w-full h-2.5 bg-white/60 rounded-full overflow-hidden backdrop-blur-sm'
        },
          React.createElement('div', {
            key: 'gp-fill',
            className: 'h-full rounded-full transition-all duration-700 ease-out',
            style: {
              width: progressPct + '%',
              background: 'linear-gradient(90deg,' + progressColor + '80,' + progressColor + ')'
            }
          })
        ),
        React.createElement('div', {
          key: 'gp-hint',
          className: 'text-center text-[10px] text-slate-400 mt-1'
        }, stageProgress && stageProgress.next
          ? growth.stageName + ' \u2192 ' + stageProgress.next.name
          : '\u5df2\u6ee1\u7ea7')
      ]),

      // Interaction hint
      React.createElement('p', {
        key: 'hint',
        className: 'mt-3 text-xs text-slate-400'
      }, '\u70b9\u51fb\u89d2\u8272\u4e0d\u540c\u90e8\u4f4d\u8bd5\u8bd5\u770b~')
    ]),

    // Streak & level mini status
    React.createElement('div', {
      key: 'status-row',
      className: 'px-5 pb-2'
    },
      React.createElement('div', {
        className: 'flex items-center justify-center gap-6'
      }, [
        React.createElement('div', {
          key: 'streak',
          className: 'flex items-center gap-1.5 text-orange-500'
        }, [
          React.createElement(Icon, { key: 'flame', name: 'flame', size: 14 }),
          React.createElement('span', { className: 'text-xs font-bold' }, streakDays + ' \u5929\u8fde\u80dc')
        ]),
        React.createElement('div', {
          key: 'level',
          className: 'flex items-center gap-1.5 text-brand-600'
        }, [
          React.createElement(Icon, { key: 'star', name: 'star', size: 14 }),
          React.createElement('span', { className: 'text-xs font-bold' }, 'Lv.' + currentLevel.level)
        ])
      ])
    ),

    // Bottom return bar
    React.createElement('div', {
      key: 'return-bar',
      className: 'px-4 pb-5'
    },
      React.createElement('button', {
        onClick: onClose,
        className: 'w-full h-11 flex items-center justify-between px-4 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-white/50 text-slate-600 hover:bg-white transition-colors'
      }, [
        React.createElement('span', {
          key: 'return-label',
          className: 'flex items-center gap-2 text-sm font-medium'
        }, [
          React.createElement(Icon, { key: 'arrow', name: 'arrow-left', size: 16 }),
          '\u8fd4\u56de\u9996\u9875'
        ]),
        React.createElement('span', {
          key: 'xp-label',
          className: 'text-xs text-slate-400'
        }, '\u4eca\u65e5 XP ' + xpProgress.current + '/' + xpProgress.needed)
      ])
    )
  ]);
}

Object.assign(window, { CharacterImmersivePage });
