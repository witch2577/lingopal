// ========== BabyCharacter ==========
// Minimal baby avatar renderer derived from face config.
// Since the 13-layer SVG stack has no baby-specific assets,
// this module generates a simplified baby silhouette using the
// same hairColor, eyeColor, and skinTone from the user's face config.
// Designed for the infant stage (stage 1) before evolution to toddler.

/**
 * Generate a baby SVG string from face config.
 * Uses inline SVG with simplified baby proportions (big head, small body).
 * Same hair/eye/skin colors as the grown-up config for visual continuity.
 *
 * @param {Object} config - CharacterConfig object
 * @param {number} width - SVG width
 * @param {number} height - SVG height
 * @returns {string} SVG markup string
 */
function generateBabySVG(config, width, height) {
  const hairColor = config?.hairColor || '#2D2D2D';
  const eyeColor = config?.eyeColor || '#5D8AA8';
  const skinTone = config?.skinTone || '#F5D0C5';
  const gender = config?.gender || 'girl';

  // 方案 v2.5 3.5 节: 婴儿版优先使用真实 PNG 基准（baby-boy.png / baby-girl.png）
  const babyPngPath = gender === 'boy' ? 'universal/body/baby-boy.png' : 'universal/body/baby-girl.png';
  const basePath = 'assets/characters/';

  // Try to use the real baby PNG when CharacterAssetLoader has it cached.
  // Fallback: render inline SVG silhouette (same colors as grown-up for continuity).
  // We render an inline SVG with an <image> element pointing at the real PNG,
  // so the PNG becomes part of the layer stack and gets the same rendering pipeline.
  const babyPNGUrl = basePath + babyPngPath;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <image href="${babyPNGUrl}" x="0" y="0" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet"/>
  </svg>`;
}

/**
 * Render baby character to a canvas for low-end devices.
 */
function renderBabyToCanvas(config, canvas, width, height) {
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.scale(dpr, dpr);

  const hairColor = config?.hairColor || '#2D2D2D';
  const eyeColor = config?.eyeColor || '#5D8AA8';
  const skinTone = config?.skinTone || '#F5D0C5';
  const gender = config?.gender || 'girl';

  const cx = width / 2;
  const headRadius = height * 0.22;
  const headCy = height * 0.32;
  const bodyWidth = height * 0.28;
  const bodyHeight = height * 0.22;
  const bodyCy = headCy + headRadius + bodyHeight * 0.5 - 2;
  const accentColor = gender === 'boy' ? '#93C5FD' : '#FBCFE8';

  // Clear
  ctx.clearRect(0, 0, width, height);

  // Body
  ctx.fillStyle = accentColor;
  ctx.beginPath();
  ctx.ellipse(cx, bodyCy, bodyWidth / 2, bodyHeight / 2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Body inner
  ctx.fillStyle = skinTone;
  ctx.beginPath();
  ctx.ellipse(cx, bodyCy - 2, bodyWidth / 2 - 6, bodyHeight / 2 - 6, 0, 0, Math.PI * 2);
  ctx.fill();

  // Hands
  ctx.fillStyle = skinTone;
  ctx.beginPath();
  ctx.arc(cx - bodyWidth / 2 - 2, bodyCy - bodyHeight * 0.1, bodyWidth * 0.12, 0, Math.PI * 2);
  ctx.arc(cx + bodyWidth / 2 + 2, bodyCy - bodyHeight * 0.1, bodyWidth * 0.12, 0, Math.PI * 2);
  ctx.fill();

  // Head
  ctx.fillStyle = skinTone;
  ctx.beginPath();
  ctx.arc(cx, headCy, headRadius, 0, Math.PI * 2);
  ctx.fill();

  // Hair (simplified)
  ctx.fillStyle = hairColor;
  ctx.beginPath();
  if (gender === 'boy') {
    ctx.arc(cx, headCy - headRadius * 0.3, headRadius + 4, Math.PI, Math.PI * 2);
  } else {
    ctx.arc(cx, headCy - headRadius * 0.2, headRadius + 6, Math.PI * 0.85, Math.PI * 2.15);
  }
  ctx.fill();

  // Eyes
  ctx.fillStyle = eyeColor;
  ctx.beginPath();
  ctx.arc(cx - headRadius * 0.35, headCy - headRadius * 0.05, headRadius * 0.14, 0, Math.PI * 2);
  ctx.arc(cx + headRadius * 0.35, headCy - headRadius * 0.05, headRadius * 0.14, 0, Math.PI * 2);
  ctx.fill();

  // Eye highlights
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(cx - headRadius * 0.35 + 3, headCy - headRadius * 0.05 - 3, headRadius * 0.05, 0, Math.PI * 2);
  ctx.arc(cx + headRadius * 0.35 + 3, headCy - headRadius * 0.05 - 3, headRadius * 0.05, 0, Math.PI * 2);
  ctx.fill();

  // Cheeks
  ctx.fillStyle = 'rgba(255,182,193,0.35)';
  ctx.beginPath();
  ctx.arc(cx - headRadius * 0.55, headCy + headRadius * 0.15, headRadius * 0.12, 0, Math.PI * 2);
  ctx.arc(cx + headRadius * 0.55, headCy + headRadius * 0.15, headRadius * 0.12, 0, Math.PI * 2);
  ctx.fill();

  // Mouth
  ctx.strokeStyle = '#C4786E';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, headCy + headRadius * 0.35 - 2, headRadius * 0.12, 0.1 * Math.PI, 0.9 * Math.PI);
  ctx.stroke();
}

/**
 * Adjust hex color brightness.
 * @param {string} hex - hex color
 * @param {number} percent - positive=lighter, negative=darker
 * @returns {string} adjusted hex
 */
function adjustColorBrightness(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, Math.min(255, (num >> 16) + amt));
  const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amt));
  const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
  return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

/**
 * React component: BabyCharacterRenderer
 * Renders a baby character using inline SVG or canvas fallback.
 * Props: config, width, height, className
 */
function BabyCharacterRenderer({ config, width = 180, height = 220, className = '' }) {
  const containerRef = React.useRef(null);
  const [useCanvas, setUseCanvas] = React.useState(false);

  React.useEffect(function() {
    if (!config || !containerRef.current) return;
    // Use canvas on very low-end devices
    if (window.navigator.hardwareConcurrency <= 2 || (navigator.deviceMemory || 4) < 2) {
      setUseCanvas(true);
    }
  }, [config]);

  React.useEffect(function() {
    if (useCanvas && containerRef.current && config) {
      const canvas = containerRef.current.querySelector('canvas');
      if (canvas) {
        renderBabyToCanvas(config, canvas, width, height);
      }
    }
  }, [useCanvas, config, width, height]);

  if (!config) {
    return React.createElement('div', {
      className: 'baby-character-renderer baby-character-renderer--empty ' + className,
      style: { width, height }
    });
  }

  if (useCanvas) {
    return React.createElement('div', {
      ref: containerRef,
      className: 'baby-character-renderer ' + className,
      style: { width, height, position: 'relative' }
    }, React.createElement('canvas', {
      style: { width, height, display: 'block' }
    }));
  }

  const svgString = generateBabySVG(config, width, height);
  return React.createElement('div', {
    ref: containerRef,
    className: 'baby-character-renderer ' + className,
    style: { width, height, position: 'relative' },
    dangerouslySetInnerHTML: { __html: svgString }
  });
}

Object.assign(window, {
  generateBabySVG,
  renderBabyToCanvas,
  adjustColorBrightness,
  BabyCharacterRenderer,
});
