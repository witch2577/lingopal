// ========== Character Renderer ==========
// 13-layer SVG stack that assembles a complete character from CharacterConfig.
// Uses CharacterAssetLoader for on-demand part loading with memory caching.
// Supports CSS variable color injection and transition animations.
// Low-end device: falls back to static canvas rendering hint.

const { useState, useEffect, useRef, useCallback, useMemo } = React;

/**
 * Extract inner SVG content from a full SVG document string.
 * Removes the outer <svg> wrapper so it can be nested inside another <svg>.
 */
function extractSVGInner(svgText) {
  if (!svgText) return '';
  // Match content between <svg ...> and </svg>
  const match = svgText.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  return match ? match[1].trim() : svgText;
}

/**
 * CharacterRenderer - renders a complete character as a 13-layer SVG stack.
 *
 * Props:
 *   - config: CharacterConfig object (required)
 *   - width:  number | string (default 200)
 *   - height: number | string (default 300)
 *   - className: extra CSS classes
 *   - onLoad: callback when all layers loaded
 *   - transitionDuration: layer swap animation duration in ms (default 300)
 *   - staticMode: force static render (auto-detected if omitted)
 */
function CharacterRenderer({
  config,
  width = 200,
  height = 300,
  className = '',
  onLoad,
  transitionDuration = 300,
  staticMode,
}) {
  const [layers, setLayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const containerRef = useRef(null);
  const prevConfigRef = useRef(null);
  const isStatic = staticMode != null ? staticMode : CharacterAssetLoader.shouldUseStaticRender();

  // Resolve layers from config
  const resolvedLayers = useMemo(() => {
    if (!config) return [];
    return resolveCharacterLayers(config);
  }, [config]);

  // Load all required SVGs
  useEffect(() => {
    if (!config) {
      setLayers([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setLoadError(false);

    const loadAll = async () => {
      try {
        // Collect unique paths
        const paths = resolvedLayers.map(l => l.item?.path).filter(Boolean);
        const uniquePaths = [...new Set(paths)];

        // Load all in parallel
        const svgTexts = await Promise.all(
          uniquePaths.map(p => CharacterAssetLoader.load(p))
        );

        if (cancelled) return;

        // Build path -> svgText map
        const svgMap = {};
        uniquePaths.forEach((p, i) => {
          svgMap[p] = svgTexts[i];
        });

        // Build renderable layer data
        const newLayers = resolvedLayers.map(({ layer, item, colorVar }) => {
          const svgText = svgMap[item.path];
          const innerSVG = extractSVGInner(svgText);
          return {
            layer,
            itemId: item.id,
            itemName: item.name,
            innerSVG,
            colorVar,
            hasContent: !!innerSVG,
          };
        });

        setLayers(newLayers);
        setLoading(false);

        if (onLoad) {
          // Defer callback until after paint so DOM is ready for test queries
          requestAnimationFrame(() => {
            onLoad({ layers: newLayers, allLoaded: newLayers.every(l => l.hasContent) });
          });
        }
      } catch (err) {
        console.error('[CharacterRenderer] load error:', err);
        if (!cancelled) {
          setLoadError(true);
          setLoading(false);
        }
      }
    };

    loadAll();

    return () => { cancelled = true; };
  }, [config, resolvedLayers, onLoad]);

  // Track config changes for transition timing
  useEffect(() => {
    prevConfigRef.current = config;
  });

  const transitionStyle = {
    transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
  };

  // Render loading state
  if (loading && layers.length === 0) {
    return (
      <div
        className={`character-renderer character-renderer--loading ${className}`}
        style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="character-renderer__skeleton" style={{
          width: '60%',
          height: '70%',
          background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeletonShimmer 1.5s ease-in-out infinite',
          borderRadius: '50% 50% 45% 45%',
        }} />
      </div>
    );
  }

  // Render error state
  if (loadError) {
    return (
      <div
        className={`character-renderer character-renderer--error ${className}`}
        style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EF4444' }}
      >
        <span style={{ fontSize: 12 }}>加载失败</span>
      </div>
    );
  }

  // Determine CSS variable values
  const cssVars = {};
  if (config) {
    if (config.hairColor) cssVars['--hair-color'] = config.hairColor;
    if (config.eyeColor) cssVars['--eye-color'] = config.eyeColor;
    if (config.skinTone) cssVars['--skin-tone'] = config.skinTone;
  }

  return (
    <div
      ref={containerRef}
      className={`character-renderer ${className}`}
      style={{
        width,
        height,
        position: 'relative',
        ...cssVars,
      }}
    >
      <svg
        viewBox="0 0 400 600"
        width="100%"
        height="100%"
        className="character-renderer__svg"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {layers.map((layerData, index) => {
          if (!layerData.hasContent) return null;

          const gStyle = {
            ...transitionStyle,
            opacity: loading ? 0.7 : 1,
            transform: loading ? 'scale(0.98)' : 'scale(1)',
          };

          // Apply color variable if specified
          if (layerData.colorVar) {
            gStyle.color = layerData.colorVar;
          }

          return (
            <g
              key={`${layerData.layer}-${layerData.itemId}-${index}`}
              className={`character-layer character-layer--${layerData.layer}`}
              style={gStyle}
              dangerouslySetInnerHTML={{ __html: layerData.innerSVG }}
            />
          );
        })}
      </svg>

      {/* Static render hint for low-end devices */}
      {isStatic && (
        <div style={{
          position: 'absolute',
          bottom: 4,
          right: 4,
          fontSize: 9,
          color: '#94A3B8',
          opacity: 0.6,
          pointerEvents: 'none',
        }}>
          static
        </div>
      )}
    </div>
  );
}

/**
 * CharacterRendererStatic - pre-renders character to a canvas for low-end devices.
 * Caches the canvas result and reuses it.
 */
function CharacterRendererStatic({ config, width = 200, height = 300, className = '' }) {
  const canvasRef = useRef(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (!config || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    // Fill background
    ctx.fillStyle = '#E8E0D5';
    ctx.fillRect(0, 0, width, height);

    // Draw a simple placeholder character silhouette
    const cx = width / 2;
    const cy = height / 2;
    const scale = Math.min(width, height) / 300;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);

    // Body
    ctx.fillStyle = config.skinTone || '#F5D0C5';
    ctx.beginPath();
    ctx.ellipse(0, 40, 50, 70, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.beginPath();
    ctx.ellipse(0, -60, 45, 55, 0, 0, Math.PI * 2);
    ctx.fill();

    // Hair
    ctx.fillStyle = config.hairColor || '#2D2D2D';
    ctx.beginPath();
    ctx.ellipse(0, -75, 48, 35, 0, Math.PI, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = config.eyeColor || '#5D8AA8';
    ctx.beginPath();
    ctx.arc(-15, -55, 6, 0, Math.PI * 2);
    ctx.arc(15, -55, 6, 0, Math.PI * 2);
    ctx.fill();

    // Mouth
    ctx.strokeStyle = '#C4786E';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, -35, 10, 0.1 * Math.PI, 0.9 * Math.PI);
    ctx.stroke();

    ctx.restore();
    setRendered(true);
  }, [config, width, height]);

  return (
    <canvas
      ref={canvasRef}
      className={`character-renderer-static ${className}`}
      style={{ width, height }}
    />
  );
}

/**
 * CharacterPreview - lightweight wrapper for editor preview with transition.
 */
function CharacterPreview({ config, size = 280, onLoad }) {
  return (
    <CharacterRenderer
      config={config}
      width={size}
      height={size * 1.5}
      className="character-preview"
      onLoad={onLoad}
      transitionDuration={300}
    />
  );
}

Object.assign(window, {
  CharacterRenderer,
  CharacterRendererStatic,
  CharacterPreview,
  extractSVGInner,
});

