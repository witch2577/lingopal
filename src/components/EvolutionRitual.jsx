// ========== EvolutionRitual ==========
// Full-screen evolution ceremony played when GP reaches a stage threshold.
// Shows baby → next stage transformation animation.
// Can be skipped. Updates character image after animation.

const { useState, useEffect, useCallback } = React;

/**
 * EvolutionRitual
 *
 * Props:
 *   - evolutionData: { fromStage, toStage, gpAtEvolve, date }
 *   - onComplete: callback when ritual ends or is skipped
 *   - onSkip: callback when user skips
 */
function EvolutionRitual({ evolutionData, onComplete, onSkip }) {
  const [phase, setPhase] = useState('enter'); // enter | glow | transform | reveal | exit
  const [skipped, setSkipped] = useState(false);
  const [showNewStage, setShowNewStage] = useState(false);

  useEffect(function() {
    if (!evolutionData) return;

    // Animation timeline
    const timers = [];

    timers.push(setTimeout(function() {
      setPhase('glow');
    }, 400));

    timers.push(setTimeout(function() {
      setPhase('transform');
    }, 1200));

    timers.push(setTimeout(function() {
      setPhase('reveal');
      setShowNewStage(true);
    }, 2500));

    timers.push(setTimeout(function() {
      setPhase('exit');
    }, 4500));

    timers.push(setTimeout(function() {
      if (typeof onComplete === 'function') {
        onComplete(evolutionData);
      }
    }, 5200));

    return function() {
      timers.forEach(function(t) { clearTimeout(t); });
    };
  }, [evolutionData]);

  const handleSkip = useCallback(function() {
    if (skipped) return;
    setSkipped(true);
    setPhase('exit');
    setTimeout(function() {
      if (typeof onSkip === 'function') {
        onSkip(evolutionData);
      } else if (typeof onComplete === 'function') {
        onComplete(evolutionData);
      }
    }, 500);
  }, [skipped, evolutionData, onComplete, onSkip]);

  if (!evolutionData) return null;

  const fromStage = evolutionData.fromStage || { stage: 1, name: '婴儿期' };
  const toStage = evolutionData.toStage || { stage: 2, name: '幼儿期' };

  const config = useCharacterStore.getState().config || {};

  // Phase-based styles
  const overlayOpacity = phase === 'exit' ? 0 : 1;
  const contentScale = phase === 'enter' ? 0.8 : phase === 'exit' ? 0.9 : 1;
  const glowIntensity = phase === 'glow' || phase === 'transform' ? 1 : 0;
  const transformBlur = phase === 'transform' ? 8 : 0;

  return React.createElement(
    motion.div,
    {
      className: 'fixed inset-0 z-[60] flex items-center justify-center',
      style: {
        background: 'rgba(15, 23, 42, ' + (phase === 'exit' ? 0 : 0.75) + ')',
        backdropFilter: 'blur(8px)',
      },
      initial: { opacity: 0 },
      animate: { opacity: overlayOpacity },
      transition: { duration: 0.4 },
      'data-testid': 'evolution-ritual',
      'data-phase': phase,
    },
    [
      // Skip button
      React.createElement('button', {
        key: 'skip',
        onClick: handleSkip,
        className: 'absolute top-4 right-4 px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm hover:bg-white/20 hover:text-white transition-all',
        'data-testid': 'evolution-skip-btn',
      }, '跳过'),

      // Main content
      React.createElement(
        motion.div,
        {
          key: 'content',
          className: 'relative flex flex-col items-center gap-6',
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: contentScale, opacity: 1 },
          transition: { duration: 0.5, ease: 'easeOut' },
        },
        [
          // Stage label: "婴儿期 → 幼儿期"
          React.createElement(
            motion.div,
            {
              key: 'stage-label',
              className: 'text-white/90 text-lg font-bold tracking-wide',
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2 },
            },
            fromStage.name + ' → ' + toStage.name
          ),

          // Character transform area
          React.createElement('div', {
            key: 'char-area',
            className: 'relative w-48 h-56 flex items-center justify-center',
          }, [
            // Glow effect
            React.createElement(motion.div, {
              key: 'glow',
              className: 'absolute inset-0 rounded-full',
              style: {
                background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)',
                filter: 'blur(20px)',
              },
              animate: {
                opacity: glowIntensity,
                scale: glowIntensity ? 1.3 : 1,
              },
              transition: { duration: 0.8 },
            }),

            // Sparkles during transform
            (phase === 'glow' || phase === 'transform') && React.createElement('div', {
              key: 'sparkles',
              className: 'absolute inset-0 pointer-events-none',
            }, ['✨', '⭐', '💫', '🌟'].map(function(emoji, i) {
              return React.createElement(motion.span, {
                key: i,
                className: 'absolute text-2xl',
                style: {
                  left: (20 + i * 20) + '%',
                  top: (10 + (i % 2) * 60) + '%',
                },
                initial: { opacity: 0, scale: 0 },
                animate: {
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1.2, 1, 0.5],
                  rotate: [0, 15, -15, 0],
                },
                transition: {
                  duration: 1.2,
                  delay: i * 0.15,
                  repeat: phase === 'transform' ? Infinity : 0,
                  repeatDelay: 0.3,
                },
              }, emoji);
            })),

            // Old character (fades out during transform)
            React.createElement(motion.div, {
              key: 'old-char',
              animate: {
                opacity: phase === 'reveal' || phase === 'exit' ? 0 : 1,
                filter: 'blur(' + transformBlur + 'px)',
                scale: phase === 'transform' ? 0.9 : 1,
              },
              transition: { duration: 0.6 },
            },
              fromStage.stage === 1
                ? React.createElement(BabyCharacterRenderer, {
                    config: config,
                    width: 160,
                    height: 185,
                    className: 'drop-shadow-xl',
                  })
                : React.createElement(CharacterRendererStatic, {
                    config: config,
                    width: 160,
                    height: 185,
                    className: 'drop-shadow-xl',
                  })
            ),

            // New character (fades in during reveal)
            showNewStage && React.createElement(motion.div, {
              key: 'new-char',
              className: 'absolute inset-0 flex items-center justify-center',
              initial: { opacity: 0, scale: 1.1 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.8, ease: 'easeOut' },
            },
              toStage.stage === 1
                ? React.createElement(BabyCharacterRenderer, {
                    config: config,
                    width: 160,
                    height: 185,
                    className: 'drop-shadow-xl',
                  })
                : React.createElement(CharacterRendererStatic, {
                    config: config,
                    width: 160,
                    height: 185,
                    className: 'drop-shadow-xl',
                  })
            ),
          ]),

          // Evolution message
          React.createElement(
            motion.div,
            {
              key: 'message',
              className: 'text-center',
              initial: { opacity: 0, y: 10 },
              animate: {
                opacity: phase === 'reveal' ? 1 : phase === 'exit' ? 0 : 0.5,
                y: phase === 'reveal' ? 0 : 5,
              },
              transition: { duration: 0.5 },
            },
            [
              React.createElement('h3', {
                key: 'title',
                className: 'text-xl font-bold text-white mb-1',
                'data-testid': 'evolution-title',
              }, '成长进化！'),
              React.createElement('p', {
                key: 'subtitle',
                className: 'text-white/70 text-sm',
                'data-testid': 'evolution-subtitle',
              }, '角色从「' + fromStage.name + '」成长为「' + toStage.name + '」'),
            ]
          ),

          // Progress bar for ritual timing
          React.createElement(motion.div, {
            key: 'progress',
            className: 'w-48 h-1 bg-white/20 rounded-full overflow-hidden',
            initial: { opacity: 0 },
            animate: { opacity: phase === 'exit' ? 0 : 1 },
          },
            React.createElement(motion.div, {
              className: 'h-full bg-brand-gradient rounded-full',
              initial: { width: '0%' },
              animate: { width: phase === 'exit' ? '100%' : phase === 'reveal' ? '80%' : phase === 'transform' ? '50%' : '20%' },
              transition: { duration: 0.5 },
            })
          ),
        ]
      ),
    ]
  );
}

/**
 * useEvolutionRitual hook - manages evolution state and ritual display.
 * Integrates with CharacterStore's setOnEvolution callback.
 *
 * Usage:
 *   const { EvolutionRitualComponent, registerEvolution } = useEvolutionRitual();
 *   useEffect(() => { registerEvolution(); }, []);
 */
function useEvolutionRitual() {
  const [evolutionData, setEvolutionData] = useState(null);
  const [ritualComplete, setRitualComplete] = useState(false);

  const handleEvolution = useCallback(function(data) {
    // Block other feedback during evolution
    if (typeof FeedbackEngine !== 'undefined') {
      FeedbackEngine.setEvolutionActive(true);
    }
    setRitualComplete(false);
    setEvolutionData(data);
  }, []);

  const handleRitualComplete = useCallback(function(data) {
    setRitualComplete(true);
    setEvolutionData(null);
    if (typeof FeedbackEngine !== 'undefined') {
      FeedbackEngine.setEvolutionActive(false);
    }
    // Refresh character store to ensure stage is updated
    const charState = useCharacterStore.getState();
    if (charState && charState.growth) {
      const newStage = getStageByGP(charState.growth.totalGP);
      charState.setGrowth({
        currentStage: newStage.stage,
        stageName: newStage.name,
        stageGPRequired: newStage.gpRequired,
        nextStageGP: getNextStage(newStage.stage)?.gpRequired || null,
      });
    }
  }, []);

  const handleRitualSkip = useCallback(function(data) {
    handleRitualComplete(data);
  }, [handleRitualComplete]);

  const registerEvolution = useCallback(function() {
    const charState = useCharacterStore.getState();
    if (charState && typeof charState.setOnEvolution === 'function') {
      charState.setOnEvolution(handleEvolution);
    }
  }, [handleEvolution]);

  const EvolutionRitualComponent = React.useMemo(function() {
    if (!evolutionData) return null;
    return React.createElement(EvolutionRitual, {
      evolutionData: evolutionData,
      onComplete: handleRitualComplete,
      onSkip: handleRitualSkip,
      key: evolutionData.date + '-' + evolutionData.toStage.stage,
    });
  }, [evolutionData, handleRitualComplete, handleRitualSkip]);

  return {
    EvolutionRitualComponent,
    registerEvolution,
    ritualComplete,
    evolutionData,
  };
}

Object.assign(window, {
  EvolutionRitual,
  useEvolutionRitual,
});
