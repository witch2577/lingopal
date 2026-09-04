// ========== Motion / Animation Layer ==========
// Global motion + AnimatePresence with framer-motion when available,
// CSS-based fallback otherwise. Works with <motion.div /> JSX syntax.

(function() {
  // Save reference to real framer-motion IMMEDIATELY before we touch window.Motion.
  // Framer-motion UMD exposes itself at window.Motion; we capture it here first.
  const _fm = (typeof Motion !== 'undefined') ? Motion : null;

  // Detect real framer-motion from the captured reference
  const hasFramerMotion = (function() {
    if (!_fm) return false;
    try {
      // Real framer-motion has these plain properties (not proxied)
      if (typeof _fm.version === 'string' && _fm.version.length > 0) return true;
      if (typeof _fm.domMax === 'boolean') return true;
      if (typeof _fm.useMotionValue === 'function') return true;
      if (_fm.motion && typeof _fm.motion === 'function') return true;
      return false;
    } catch (e) {
      return false;
    }
  })();

  // Get framer-motion's motion factory from the saved reference
  let _fmMotion = null;
  function getFmMotion() {
    if (!hasFramerMotion) return null;
    if (_fmMotion) return _fmMotion;
    try {
      if (_fm.motion) {
        _fmMotion = _fm.motion;
      }
    } catch (e) {
      _fmMotion = null;
    }
    return _fmMotion;
  }

  // --- motion component ---
  const motionComponents = {};

  function getMotionComponent(tag) {
    if (motionComponents[tag]) return motionComponents[tag];

    let Comp;

    if (hasFramerMotion) {
      // Use framer-motion's motion component
      const fmMotion = getFmMotion();
      Comp = fmMotion[tag] || fmMotion.div;
    } else {
      // CSS fallback
      Comp = React.forwardRef(({
        initial, animate, exit, whileHover, whileTap,
        transition, variants, layout, layoutId,
        style,
        className = '',
        onMouseEnter, onMouseLeave, onMouseDown, onMouseUp,
        children,
        ...rest
      }, ref) => {
        const [isHover, setIsHover] = React.useState(false);
        const [isTap, setIsTap] = React.useState(false);

        // Build target style
        const target = animate || {};
        const hoverTarget = whileHover || {};
        const tapTarget = whileTap || {};

        const current = {
          ...target,
          ...(isHover ? hoverTarget : {}),
          ...(isTap ? tapTarget : {}),
        };

        const cssStyle = {
          ...style,
          transition: transition
            ? `all ${transition.duration || 0.3}s ${transition.ease || 'ease'}`
            : 'all 0.25s ease',
          opacity: current.opacity,
          transform: buildTransform(current),
        };

        return React.createElement(tag, {
          ref,
          style: cssStyle,
          className,
          onMouseEnter: (e) => { setIsHover(true); onMouseEnter?.(e); },
          onMouseLeave: (e) => { setIsHover(false); setIsTap(false); onMouseLeave?.(e); },
          onMouseDown: (e) => { setIsTap(true); onMouseDown?.(e); },
          onMouseUp: (e) => { setIsTap(false); onMouseUp?.(e); },
          ...rest,
        }, children);
      });
      Comp.displayName = `motion.${tag}`;
    }

    motionComponents[tag] = Comp;
    return Comp;
  }

  function buildTransform(props) {
    const parts = [];
    if (props.x !== undefined) parts.push(`translateX(${typeof props.x === 'number' ? props.x + 'px' : props.x})`);
    if (props.y !== undefined) parts.push(`translateY(${typeof props.y === 'number' ? props.y + 'px' : props.y})`);
    if (props.scale !== undefined) parts.push(`scale(${props.scale})`);
    if (props.rotate !== undefined) parts.push(`rotate(${props.rotate}deg)`);
    return parts.length ? parts.join(' ') : undefined;
  }

  // Proxy so motion.div, motion.span etc work
  const motion = new Proxy({}, {
    get: (_, prop) => {
      if (typeof prop === 'string' && prop !== 'then') {
        return getMotionComponent(prop);
      }
      return undefined;
    },
  });

  // --- AnimatePresence ---
  const AnimatePresence = ({ children, mode = 'wait', initial = true }) => {
    // Lightweight version: just renders children as-is.
    // For framer-motion-like exit animations, one needs full lifecycle management.
    // This polyfill supports conditional rendering with direct mount/unmount.
    return children || null;
  };

  // --- Make globally available (for JSX <motion.div> usage) ---
  window.motion = motion;
  window.AnimatePresence = AnimatePresence;
  window.MotionLib = { motion, AnimatePresence, hasFramerMotion };
  // Note: we intentionally do NOT set window.Motion here because framer-motion's
  // UMD also uses that global name. Direct globals (motion, AnimatePresence) are used throughout the app.
})();
