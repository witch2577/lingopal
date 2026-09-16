// ========== CharacterFeedbackOverlay ==========
// Floating feedback layer that shows the character reacting to learning events.
// Non-blocking: appears at bottom corner, auto-dismisses.
// Uses framer-motion via window.motion.

const { useState, useEffect, useRef, useCallback } = React;

/**
 * CharacterFeedbackOverlay
 *
 * Props:
 *   - feedback: feedback descriptor from FeedbackEngine { type, stage, lines, style, isInfant }
 *   - onComplete: callback when feedback animation ends
 *   - duration: auto-dismiss duration in ms (default 3500)
 *   - position: 'bottom-right' | 'bottom-left' (default 'bottom-right')
 */
function CharacterFeedbackOverlay({
  feedback,
  onComplete,
  duration = 3500,
  position = 'bottom-right',
}) {
  const [visible, setVisible] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(null);
  const [lineIndex, setLineIndex] = useState(0);
  const dismissTimerRef = useRef(null);
  const lineTimerRef = useRef(null);

  // Trigger when new feedback arrives
  useEffect(function() {
    if (!feedback) return;

    // Dismiss any existing feedback immediately
    if (dismissTimerRef.current) {
      clearTimeout(dismissTimerRef.current);
    }
    if (lineTimerRef.current) {
      clearTimeout(lineTimerRef.current);
    }

    setCurrentFeedback(feedback);
    setLineIndex(0);
    setVisible(true);

    // Schedule line-by-line reveal
    if (feedback.lines && feedback.lines.length > 1) {
      let idx = 0;
      const revealNext = function() {
        idx++;
        if (idx < feedback.lines.length) {
          setLineIndex(idx);
          lineTimerRef.current = setTimeout(revealNext, 1200);
        }
      };
      lineTimerRef.current = setTimeout(revealNext, 800);
    }

    // Auto-dismiss
    dismissTimerRef.current = setTimeout(function() {
      setVisible(false);
      setTimeout(function() {
        setCurrentFeedback(null);
        if (typeof onComplete === 'function') {
          onComplete(feedback);
        }
      }, 400);
    }, duration);

    return function() {
      if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
      if (lineTimerRef.current) clearTimeout(lineTimerRef.current);
    };
  }, [feedback]);

  const handleDismiss = useCallback(function() {
    if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    if (lineTimerRef.current) clearTimeout(lineTimerRef.current);
    setVisible(false);
    setTimeout(function() {
      setCurrentFeedback(null);
      if (typeof onComplete === 'function' && currentFeedback) {
        onComplete(currentFeedback);
      }
    }, 400);
  }, [currentFeedback, onComplete]);

  if (!currentFeedback) return null;

  const isEncourage = currentFeedback.type === FeedbackConfig.TYPE.ENCOURAGE;
  const style = currentFeedback.style || FeedbackConfig.ANIMATION_STYLES[FeedbackConfig.TYPE.ENCOURAGE];

  const positionClass = position === 'bottom-left'
    ? 'left-4'
    : 'right-4';

  const particleEmojis = style.particleEmoji || ['✨'];

  return React.createElement(
    motion.div,
    {
      className: 'fixed bottom-20 ' + positionClass + ' z-50 flex items-end gap-3 max-w-[340px]',
      initial: { opacity: 0, y: 40, scale: 0.9 },
      animate: visible
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 20, scale: 0.95 },
      transition: { duration: 0.4, ease: 'easeOut' },
      'data-testid': 'character-feedback-overlay',
      'data-feedback-type': currentFeedback.type,
      'data-scenario': currentFeedback.scenario,
    },
    [
      // Ambient glow
      React.createElement('div', {
        key: 'glow',
        className: 'absolute inset-0 pointer-events-none rounded-3xl',
        style: {
          background: style.ambientGlow,
          filter: 'blur(20px)',
          transform: 'scale(1.3)',
          opacity: visible ? 0.6 : 0,
          transition: 'opacity 0.5s ease',
        },
      }),

      // Character area
      React.createElement('div', {
        key: 'char',
        className: 'relative flex-shrink-0',
        'data-testid': 'feedback-character',
      }, [
        // Floating particles
        visible && React.createElement('div', {
          key: 'particles',
          className: 'absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none',
        }, particleEmojis.slice(0, 3).map(function(emoji, i) {
          return React.createElement(motion.span, {
            key: i,
            initial: { opacity: 0, y: 10 },
            animate: { opacity: [0, 1, 0], y: [0, -20, -35] },
            transition: {
              duration: 1.5,
              delay: i * 0.25,
              repeat: Infinity,
              repeatDelay: 0.5,
            },
            className: 'text-lg',
          }, emoji);
        })),

        // Character renderer (baby for stage 1)
        currentFeedback.isInfant
          ? React.createElement(BabyCharacterRenderer, {
              key: 'baby',
              config: useCharacterStore.getState().config || {},
              width: 90,
              height: 105,
              className: 'drop-shadow-lg ' + (isEncourage
                ? FeedbackConfig.BABY_ANIMATION_CLASSES.bounce
                : FeedbackConfig.BABY_ANIMATION_CLASSES.gentle),
            })
          : React.createElement(CharacterRendererStatic, {
              key: 'rendered',
              config: useCharacterStore.getState().config || {},
              width: 90,
              height: 105,
              className: 'drop-shadow-lg',
            }),
      ]),

      // Speech bubble
      React.createElement(
        motion.div,
        {
          key: 'bubble',
          className: 'relative rounded-2xl px-4 py-3 shadow-lg border-2 max-w-[220px]',
          style: {
            background: style.bubbleBg,
            borderColor: style.bubbleBorder,
            color: style.bubbleText,
          },
          initial: { opacity: 0, scale: 0.8, x: -10 },
          animate: visible
            ? { opacity: 1, scale: 1, x: 0 }
            : { opacity: 0, scale: 0.9, x: -5 },
          transition: { duration: 0.35, type: 'spring', stiffness: 300, damping: 20 },
          'data-testid': 'feedback-bubble',
        },
        [
          // Dismiss button
          React.createElement('button', {
            key: 'close',
            onClick: handleDismiss,
            className: 'absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-xs text-slate-400 hover:text-slate-600',
            'aria-label': '关闭',
          }, '×'),

          // Dialogue lines
          React.createElement('div', {
            key: 'lines',
            className: 'flex flex-col gap-1.5',
          }, (currentFeedback.lines || []).slice(0, lineIndex + 1).map(function(line, i) {
            return React.createElement(
              motion.p,
              {
                key: i,
                className: 'text-sm font-medium leading-snug',
                initial: { opacity: 0, y: 4 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: i * 0.15, duration: 0.25 },
              },
              line
            );
          })),

          // Tiny tail pointing to character
          React.createElement('div', {
            key: 'tail',
            className: 'absolute bottom-3 -left-2 w-3 h-3 rotate-45',
            style: {
              background: typeof style.bubbleBg === 'string' && style.bubbleBg.startsWith('linear')
                ? '#FEF3C7'
                : '#DBEAFE',
              borderLeft: '2px solid ' + style.bubbleBorder,
              borderBottom: '2px solid ' + style.bubbleBorder,
            },
          }),
        ]
      ),
    ]
  );
}

/**
 * Hook-friendly wrapper that manages feedback queue.
 * Returns { showFeedback, FeedbackOverlayComponent }
 */
function useCharacterFeedback() {
  const [activeFeedback, setActiveFeedback] = useState(null);
  const queueRef = useRef([]);

  const showFeedback = useCallback(function(feedbackData) {
    if (!feedbackData) return;
    if (activeFeedback) {
      queueRef.current.push(feedbackData);
      return;
    }
    setActiveFeedback(feedbackData);
  }, [activeFeedback]);

  const handleComplete = useCallback(function() {
    const next = queueRef.current.shift();
    if (next) {
      // Small delay between consecutive feedbacks
      setTimeout(function() {
        setActiveFeedback(next);
      }, 600);
    } else {
      setActiveFeedback(null);
    }
  }, []);

  const FeedbackOverlayComponent = React.useMemo(function() {
    return React.createElement(CharacterFeedbackOverlay, {
      feedback: activeFeedback,
      onComplete: handleComplete,
      key: activeFeedback ? activeFeedback.timestamp : 'empty',
    });
  }, [activeFeedback, handleComplete]);

  return { showFeedback, FeedbackOverlayComponent };
}

Object.assign(window, {
  CharacterFeedbackOverlay,
  useCharacterFeedback,
});
