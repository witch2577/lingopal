// ========== Character Asset Loader ==========
// On-demand SVG part fetching with memory cache.
// Cache hit = zero network requests.
// Supports preload, prefetch, and cache introspection.
// v2: Added stage-based path routing with fallback chain for 4-stage growth system.

const CharacterAssetLoader = {
  _cache: new Map(),        // path -> SVG string
  _loading: new Map(),      // path -> Promise<string>
  _fetchCount: 0,           // stats: total fetch calls
  _cacheHitCount: 0,        // stats: cache hits
  _basePath: 'assets/characters/',
  _placeholderLog: new Set(), // track logged missing assets (prevent spam)

  // ---- Core load ----

  /**
   * Load a single SVG part. Cache hit returns immediately without network.
   * Legacy entry point — does NOT apply stage routing.
   */
  async load(path) {
    if (!path) return null;

    // Memory cache hit
    if (this._cache.has(path)) {
      this._cacheHitCount++;
      return this._cache.get(path);
    }

    // Deduplicate in-flight requests
    if (this._loading.has(path)) {
      return this._loading.get(path);
    }

    const promise = this._fetch(path);
    this._loading.set(path, promise);
    return promise;
  },

  /**
   * Load with stage-aware path routing.
   * Fallback chain:
   *   1. {basePath}{stageKey}/{path}  (stage-specific asset)
   *   2. {basePath}{path}             (legacy path)
   *   3. {path}.svg if .png failed    (SVG fallback)
   *   4. Placeholder SVG               (never white screen)
   */
  async loadForStage(path, stageKey) {
    if (!path) return null;
    if (!stageKey) return this.load(path);

    // 1. Try stage-specific path
    const stagePath = stageKey + '/' + path;
    const stageResult = await this.load(stagePath);
    if (stageResult) return stageResult;

    // 2. Fallback to legacy path
    const legacyResult = await this.load(path);
    if (legacyResult) return legacyResult;

    // 3. PNG -> SVG fallback
    if (path.toLowerCase().endsWith('.png')) {
      const svgPath = path.replace(/\.png$/i, '.svg');
      const svgResult = await this.load(svgPath);
      if (svgResult) return svgResult;
    }

    // 4. Placeholder (guarantees no white screen)
    return this._getPlaceholder(path);
  },

  async _fetch(path) {
    const url = this._basePath + path;

    // PNG assets: return an <image> SVG element that references the PNG file
    if (path.toLowerCase().endsWith('.png')) {
      try {
        const headResp = await fetch(url, { method: 'HEAD' });
        if (!headResp.ok) {
          if (!this._placeholderLog.has(path)) {
            console.warn('[CharacterAssetLoader] PNG not found: ' + url + ' (' + headResp.status + '), will fallback');
            this._placeholderLog.add(path);
          }
          this._loading.delete(path);
          return null;
        }
        const imageEl = '<image href="' + url + '" x="0" y="0" width="400" height="600" preserveAspectRatio="xMidYMid meet"/>';
        this._cache.set(path, imageEl);
        this._fetchCount++;
        this._loading.delete(path);
        return imageEl;
      } catch (err) {
        if (!this._placeholderLog.has(path)) {
          console.warn('[CharacterAssetLoader] PNG network error: ' + url, err);
          this._placeholderLog.add(path);
        }
        this._loading.delete(path);
        return null;
      }
    }

    // SVG assets: fetch as text (original behavior)
    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (!this._placeholderLog.has(path)) {
          console.warn('[CharacterAssetLoader] SVG not found: ' + url + ' (' + response.status + ')');
          this._placeholderLog.add(path);
        }
        this._loading.delete(path);
        return null;
      }
      const svgText = await response.text();
      this._cache.set(path, svgText);
      this._fetchCount++;
      this._loading.delete(path);
      return svgText;
    } catch (err) {
      if (!this._placeholderLog.has(path)) {
        console.warn('[CharacterAssetLoader] SVG network error: ' + url, err);
        this._placeholderLog.add(path);
      }
      this._loading.delete(path);
      return null;
    }
  },

  /**
   * Generate a placeholder SVG element for missing assets.
   * Prevents white screens by rendering an invisible placeholder.
   */
  _getPlaceholder(path) {
    const parts = path.split('/');
    const layerHint = parts.length >= 2 ? parts[parts.length - 2] : 'part';
    const placeholder = '<g data-placeholder="true" data-missing-path="' + path + '" data-layer="' + layerHint + '"></g>';
    if (!this._placeholderLog.has(path)) {
      console.warn('[CharacterAssetLoader] Placeholder used for: ' + path);
      this._placeholderLog.add(path);
    }
    return placeholder;
  },

  // ---- Batch operations ----

  /**
   * Preload all assets required for a given CharacterConfig.
   * If stageKey is provided, uses stage-aware loading.
   */
  async preload(config, stageKey) {
    const paths = getRequiredAssetPaths(config);
    const uniquePaths = [...new Set(paths)];
    if (stageKey) {
      await Promise.all(uniquePaths.map(p => this.loadForStage(p, stageKey)));
    } else {
      await Promise.all(uniquePaths.map(p => this.load(p)));
    }
  },

  /**
   * Preload a list of paths explicitly.
   */
  async preloadPaths(paths, stageKey) {
    const uniquePaths = [...new Set(paths.filter(Boolean))];
    if (stageKey) {
      await Promise.all(uniquePaths.map(p => this.loadForStage(p, stageKey)));
    } else {
      await Promise.all(uniquePaths.map(p => this.load(p)));
    }
  },

  /**
   * Prefetch likely-next assets during idle time.
   */
  prefetch(config, batchSize, stageKey) {
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(() => {
        this._doPrefetch(config, batchSize, stageKey);
      }, { timeout: 2000 });
    } else {
      setTimeout(() => this._doPrefetch(config, batchSize, stageKey), 100);
    }
  },

  _doPrefetch(config, batchSize, stageKey) {
    batchSize = batchSize || 5;
    const gender = config?.gender || 'girl';
    const unlocked = config?.unlockedItems || [];

    const candidates = CHARACTER_ITEMS.filter(item => {
      if (item.gender !== gender && item.gender !== 'universal') return false;
      if (item.unlockCondition && !unlocked.includes(item.id)) return false;
      return !this._cache.has(item.path);
    });

    const toFetch = candidates.slice(0, batchSize).map(i => i.path);
    if (stageKey) {
      toFetch.forEach(p => this.loadForStage(p, stageKey));
    } else {
      toFetch.forEach(p => this.load(p));
    }
  },

  // ---- Cache management ----

  isCached(path) {
    return this._cache.has(path);
  },

  getCacheSize() {
    return this._cache.size;
  },

  getCachedPaths() {
    return Array.from(this._cache.keys());
  },

  clearCache() {
    this._cache.clear();
    this._loading.clear();
    this._fetchCount = 0;
    this._cacheHitCount = 0;
    this._placeholderLog.clear();
  },

  warmCache(path, svgString) {
    this._cache.set(path, svgString);
  },

  // ---- Stats ----

  getStats() {
    return {
      cacheSize: this._cache.size,
      fetchCount: this._fetchCount,
      cacheHitCount: this._cacheHitCount,
      inFlight: this._loading.size,
      placeholders: this._placeholderLog.size,
    };
  },

  // ---- Low-end device detection ----

  shouldUseStaticRender() {
    return (
      (navigator.hardwareConcurrency != null && navigator.hardwareConcurrency <= 4) ||
      (navigator.deviceMemory != null && navigator.deviceMemory <= 2) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  },
};

Object.assign(window, { CharacterAssetLoader });
