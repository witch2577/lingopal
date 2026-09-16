// ========== Analytics Engine (Batch 1) ==========
// LocalStorage-based lightweight analytics for feature metrics.
// Daily bucket rollover, per-event counting, distribution tracking.
// PWA has no backend — all stats aggregate locally.

const ANALYTICS_KEY = 'lp_analytics_v1';
const FLAGS_KEY = 'lp_analytics_flags_v1';

function _getToday() {
  return new Date().toISOString().slice(0, 10);
}

function _load() {
  try {
    const raw = localStorage.getItem(ANALYTICS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}

function _save(data) {
  try { localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data)); } catch (e) {}
}

function _loadFlags() {
  try {
    const raw = localStorage.getItem(FLAGS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}

function _saveFlags(flags) {
  try { localStorage.setItem(FLAGS_KEY, JSON.stringify(flags)); } catch (e) {}
}

const Analytics = {
  /**
   * Track an event occurrence.
   * @param {string} event - event name, e.g. 'char_interact_total'
   * @param {object} extra - optional extra dims, e.g. { hotzone: 'head' }
   */
  track(event, extra = {}) {
    const today = _getToday();
    const data = _load();
    if (!data[today]) data[today] = {};
    if (!data[today][event]) data[today][event] = { count: 0, extras: [] };
    data[today][event].count += 1;
    if (Object.keys(extra).length) {
      data[today][event].extras.push({ t: Date.now(), ...extra });
      // cap extras to avoid bloat
      if (data[today][event].extras.length > 200) {
        data[today][event].extras = data[today][event].extras.slice(-100);
      }
    }
    _save(data);
  },

  /**
   * Get today's counts for an event.
   */
  getToday(event) {
    const today = _getToday();
    const data = _load();
    return data[today]?.[event]?.count || 0;
  },

  /**
   * Get distribution of an extra dimension for today's event.
   * e.g. getDistribution('char_interact_total', 'hotzone') -> { head: 5, face: 3, body: 2 }
   */
  getDistribution(event, dimKey) {
    const today = _getToday();
    const data = _load();
    const extras = data[today]?.[event]?.extras || [];
    const dist = {};
    extras.forEach(e => {
      const v = e[dimKey];
      if (v !== undefined) dist[v] = (dist[v] || 0) + 1;
    });
    return dist;
  },

  /**
   * Set a one-time daily flag.
   */
  setFlag(key, value = true) {
    const today = _getToday();
    const flags = _loadFlags();
    if (!flags[today]) flags[today] = {};
    flags[today][key] = value;
    _saveFlags(flags);
  },

  /**
   * Get a daily flag.
   */
  getFlag(key) {
    const today = _getToday();
    const flags = _loadFlags();
    return flags[today]?.[key] || false;
  },

  /**
   * Start a session timer. Call startSession() at session begin, sessionSeconds() at end.
   */
  startSession() {
    try { sessionStorage.setItem('lp_sess_start', String(Date.now())); } catch (e) {}
  },

  sessionSeconds() {
    try {
      const start = parseInt(sessionStorage.getItem('lp_sess_start') || '0', 10);
      return start ? Math.round((Date.now() - start) / 1000) : 0;
    } catch (e) { return 0; }
  },

  /**
   * Get raw data (for debugging / export).
   */
  export() {
    return { analytics: _load(), flags: _loadFlags() };
  },

  /**
   * Clear old buckets (keep last 30 days).
   */
  cleanup() {
    const data = _load();
    const flags = _loadFlags();
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 30);
    const cutoffStr = cutoff.toISOString().slice(0, 10);
    const newData = {};
    const newFlags = {};
    Object.keys(data).forEach(d => { if (d >= cutoffStr) newData[d] = data[d]; });
    Object.keys(flags).forEach(d => { if (d >= cutoffStr) newFlags[d] = flags[d]; });
    _save(newData);
    _saveFlags(newFlags);
  },
};
