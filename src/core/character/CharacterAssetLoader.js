// ========== Character Asset Loader ==========
// On-demand SVG part fetching with memory cache.
// Cache hit = zero network requests.
// Supports preload, prefetch, and cache introspection.

const CharacterAssetLoader = {
  _cache: new Map(),        // path -> SVG string
  _loading: new Map(),      // path -> Promise<string>
  _fetchCount: 0,           // stats: total fetch calls
  _cacheHitCount: 0,        // stats: cache hits
  _basePath: 'assets/characters/',

  // ---- Core load ----

  /**
   * Load a single SVG part. Cache hit returns immediately without network.
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

  async _fetch(path) {
    const url = this._basePath + path;

    // PNG assets: return an <image> SVG element that references the PNG file
    // The CharacterRenderer can embed this in its parent <svg> via innerHTML
    if (path.toLowerCase().endsWith('.png')) {
      try {
        // Verify the asset exists by issuing a HEAD request
        const headResp = await fetch(url, { method: 'HEAD' });
        if (!headResp.ok) {
          console.warn(`[CharacterAssetLoader] PNG fetch failed: ${url} (${headResp.status})`);
          this._loading.delete(path);
          return null;
        }
        // Return <image> element string for SVG embedding
        const imageEl = `<image href="${url}" x="0" y="0" width="400" height="600" preserveAspectRatio="xMidYMid meet"/>`;
        this._cache.set(path, imageEl);
        this._fetchCount++;
        this._loading.delete(path);
        return imageEl;
      } catch (err) {
        console.warn(`[CharacterAssetLoader] PNG network error: ${url}`, err);
        this._loading.delete(path);
        return null;
      }
    }

    // SVG assets: fetch as text (original behavior)
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.warn(`[CharacterAssetLoader] fetch failed: ${url} (${response.status})`);
        this._loading.delete(path);
        return null;
      }
      const svgText = await response.text();
      this._cache.set(path, svgText);
      this._fetchCount++;
      this._loading.delete(path);
      return svgText;
    } catch (err) {
      console.warn(`[CharacterAssetLoader] network error: ${url}`, err);
      this._loading.delete(path);
      return null;
    }
  },

  // ---- Batch operations ----

  /**
   * Preload all assets required for a given CharacterConfig.
   */
  async preload(config) {
    const paths = getRequiredAssetPaths(config);
    const uniquePaths = [...new Set(paths)];
    await Promise.all(uniquePaths.map(p => this.load(p)));
  },

  /**
   * Preload a list of paths explicitly.
   */
  async preloadPaths(paths) {
    const uniquePaths = [...new Set(paths.filter(Boolean))];
    await Promise.all(uniquePaths.map(p => this.load(p)));
  },

  /**
   * Prefetch likely-next assets during idle time.
   * Loads unlocked items of current gender not yet in cache.
   */
  prefetch(config, batchSize = 5) {
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(() => {
        this._doPrefetch(config, batchSize);
      }, { timeout: 2000 });
    } else {
      setTimeout(() => this._doPrefetch(config, batchSize), 100);
    }
  },

  _doPrefetch(config, batchSize) {
    const gender = config?.gender || 'girl';
    const unlocked = config?.unlockedItems || [];

    // Gather paths for unlocked items of current gender
    const candidates = CHARACTER_ITEMS.filter(item => {
      if (item.gender !== gender && item.gender !== 'universal') return false;
      if (item.unlockCondition && !unlocked.includes(item.id)) return false;
      return !this._cache.has(item.path);
    });

    const toFetch = candidates.slice(0, batchSize).map(i => i.path);
    toFetch.forEach(p => this.load(p));
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
  },

  /**
   * Warm cache with inline SVG strings (useful for critical assets).
   */
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
