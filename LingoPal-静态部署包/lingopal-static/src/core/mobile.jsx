// ========== Mobile Utilities ==========
// Helpers for mobile detection, safe areas, keyboard handling, and performance

const { useState, useEffect, useCallback } = React;

// Detect if device is mobile/tablet
const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setWindowWidth(w);
      setIsMobile(w < 768);
      setIsTablet(w >= 768 && w < 1024);
      setIsLandscape(w > h && w < 1024);
    };
    check();
    window.addEventListener('resize', check);
    window.addEventListener('orientationchange', check);
    return () => {
      window.removeEventListener('resize', check);
      window.removeEventListener('orientationchange', check);
    };
  }, []);

  return { isMobile, isTablet, isLandscape, windowWidth };
};

// Keyboard visibility detection (iOS/Android soft keyboard)
const useKeyboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const visualHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      const fullHeight = window.innerHeight;
      const diff = fullHeight - visualHeight;
      const open = diff > 100;
      setIsOpen(open);
      setKeyboardHeight(open ? diff : 0);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
      window.visualViewport.addEventListener('scroll', handleResize);
    } else {
      window.addEventListener('resize', handleResize);
    }

    handleResize();

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
        window.visualViewport.removeEventListener('scroll', handleResize);
      } else {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return { isOpen, keyboardHeight };
};

// Prevent double-tap zoom on interactive elements
const preventDoubleTapZoom = (e) => {
  if (e.target.closest('button, a, [role="button"], input, textarea, select')) {
    // Fastest valid path: do nothing, let CSS touch-action handle it
  }
};

// Use reduced motion preference
const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
};

// Smooth scroll to element with keyboard awareness
const scrollToElement = (el) => {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  if (rect.bottom > viewportHeight - 100) {
    const offset = rect.top - 80;
    window.scrollBy({ top: offset, behavior: 'smooth' });
  }
};

Object.assign(window, {
  useMobileDetect,
  useKeyboard,
  useReducedMotion,
  preventDoubleTapZoom,
  scrollToElement,
});
