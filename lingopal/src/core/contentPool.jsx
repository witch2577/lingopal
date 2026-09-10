// ========== Weekly Content Rotation Manager ==========
// Manages automatic weekly content rotation using ISO week number
// Supports manual refresh fallback for pure-frontend apps
// Note: core helpers (CONTENT_WEEKS, STORAGE_KEYS, getISOWeek, getCurrentWeekIndex,
//       hasWeekChanged, saveActiveWeek) are defined in constants.jsx and loaded at init.

const CONTENT_VERSION = '1.0.0';

// Extend STORAGE_KEYS with content-specific ones (merge with base from constants)
if (typeof STORAGE_KEYS !== 'undefined') {
  STORAGE_KEYS.contentVersion = 'lingopal_content_version';
  STORAGE_KEYS.dismissedPrefix = 'lingopal_content_week_';
} else {
  window.STORAGE_KEYS = {
    activeWeek: 'lingopal_active_week',
    userSelectedWeek: 'lingopal_user_selected_week',
    contentVersion: 'lingopal_content_version',
    dismissedPrefix: 'lingopal_content_week_',
  };
}

// Use CONTENT_WEEKS from constants if available
if (typeof CONTENT_WEEKS === 'undefined') {
  window.CONTENT_WEEKS = 4;
}

// Use getISOWeek from constants if available
if (typeof getISOWeek === 'undefined') {
  window.getISOWeek = function() {
    const now = new Date();
    const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  };
}

// Use getCurrentWeekIndex from constants if available
if (typeof getCurrentWeekIndex === 'undefined') {
  window.getCurrentWeekIndex = function() {
    const isoWeek = getISOWeek();
    return isoWeek % CONTENT_WEEKS;
  };
}

// Get the currently active week (respects manual override)
function getActiveWeek() {
  const manual = getUserSelectedWeek();
  if (manual !== null) return manual;
  return getCurrentWeekIndex();
}

// Get user manually selected week (or null)
function getUserSelectedWeek() {
  try {
    const val = localStorage.getItem(STORAGE_KEYS.userSelectedWeek);
    if (val === null) return null;
    const n = parseInt(val, 10);
    return n >= 0 && n < CONTENT_WEEKS ? n : null;
  } catch (e) {
    return null;
  }
}

// Set user manually selected week
function setUserSelectedWeek(weekIndex) {
  try {
    if (weekIndex === null || weekIndex === undefined) {
      localStorage.removeItem(STORAGE_KEYS.userSelectedWeek);
    } else {
      localStorage.setItem(STORAGE_KEYS.userSelectedWeek, String(weekIndex));
    }
  } catch (e) {}
}

// Check if the week has changed since last visit
// (Defined in constants.jsx for early access; no-op redefinition here)
if (typeof hasWeekChanged === 'undefined') {
  window.hasWeekChanged = function() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.activeWeek);
      const current = getCurrentWeekIndex();
      if (saved === null) {
        saveActiveWeek(current);
        return false;
      }
      return parseInt(saved, 10) !== current;
    } catch (e) {
      return false;
    }
  };
}

// Save the active week to localStorage
if (typeof saveActiveWeek === 'undefined') {
  window.saveActiveWeek = function(weekIndex) {
    try {
      localStorage.setItem(STORAGE_KEYS.activeWeek, String(weekIndex));
    } catch (e) {}
  };
}

// Should we show the "new content" update notice?
function shouldShowUpdateNotice() {
  try {
    const currentWeek = getCurrentWeekIndex();
    const dismissedKey = `${STORAGE_KEYS.dismissedPrefix}${currentWeek}_dismissed`;
    const dismissed = localStorage.getItem(dismissedKey);
    if (dismissed === 'true') return false;

    // Also check if content version changed
    const savedVersion = localStorage.getItem(STORAGE_KEYS.contentVersion);
    if (savedVersion !== CONTENT_VERSION) {
      localStorage.setItem(STORAGE_KEYS.contentVersion, CONTENT_VERSION);
      return true;
    }

    return hasWeekChanged();
  } catch (e) {
    return false;
  }
}

// Dismiss the update notice for current week
function dismissUpdateNotice() {
  try {
    const currentWeek = getCurrentWeekIndex();
    const dismissedKey = `${STORAGE_KEYS.dismissedPrefix}${currentWeek}_dismissed`;
    localStorage.setItem(dismissedKey, 'true');
    saveActiveWeek(currentWeek);
  } catch (e) {}
}

// Get rotation info for display
function getRotationInfo() {
  const current = getCurrentWeekIndex();
  const active = getActiveWeek();
  const isoWeek = getISOWeek();
  return {
    currentWeekIndex: current,
    activeWeekIndex: active,
    isoWeek,
    totalWeeks: CONTENT_WEEKS,
    weekNumber: current + 1,
    isManualOverride: active !== current,
    contentVersion: CONTENT_VERSION,
  };
}

// Force a content refresh (manual trigger)
function forceContentRefresh() {
  const currentWeek = getCurrentWeekIndex();
  saveActiveWeek(currentWeek);
  // Clear any manual override so auto-rotation resumes
  setUserSelectedWeek(null);
  // Clear all dismissed flags to re-enable notices
  try {
    for (let i = 0; i < CONTENT_WEEKS; i++) {
      localStorage.removeItem(`${STORAGE_KEYS.dismissedPrefix}${i}_dismissed`);
    }
  } catch (e) {}
  return currentWeek;
}

// Format week label for display
function getWeekLabel(weekIndex) {
  const labels = ['第一周', '第二周', '第三周', '第四周'];
  return labels[weekIndex] || `第${weekIndex + 1}周`;
}

// Get week theme name
function getWeekThemeName(weekIndex) {
  const themes = [
    '购物与消费',
    '旅行与交通',
    '餐饮与美食',
    '时间与日常',
  ];
  return themes[weekIndex] || '本周主题';
}

Object.assign(window, {
  CONTENT_WEEKS,
  CONTENT_VERSION,
  getISOWeek,
  getCurrentWeekIndex,
  getActiveWeek,
  getUserSelectedWeek,
  setUserSelectedWeek,
  hasWeekChanged,
  saveActiveWeek,
  shouldShowUpdateNotice,
  dismissUpdateNotice,
  getRotationInfo,
  forceContentRefresh,
  getWeekLabel,
  getWeekThemeName,
});
