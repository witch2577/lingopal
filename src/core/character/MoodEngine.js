// ========== MoodEngine ==========
// Mood state machine for the character raising system.
// Calculates mood based on days since last study activity.
// Five states: happy / expectant / missing_you / down / asleep
// Time-decay model aligned with v2.5 product spec.

const MOOD_STATES = {
  happy:      { key: 'happy',      label: '开心',  emoji: '😊', color: '#F59E0B', daysSince: 0, priority: 0 },
  expectant:  { key: 'expectant',  label: '期待',  emoji: '✨', color: '#8B5CF6', daysSince: 1, priority: 1 },
  missing_you:{ key: 'missing_you',label: '想念',  emoji: '🥺', color: '#EC4899', daysSince: 2, priority: 2 },
  down:       { key: 'down',       label: '低落',  emoji: '😢', color: '#6366F1', daysSince: 3, priority: 3 },
  asleep:     { key: 'asleep',     label: '沉睡',  emoji: '💤', color: '#94A3B8', daysSince: 5, priority: 4 },
};

const MOOD_ORDER = ['happy', 'expectant', 'missing_you', 'down', 'asleep'];

/**
 * Calculate days difference between two date strings (YYYY-MM-DD).
 * Returns non-negative integer.
 */
function daysBetween(a, b) {
  if (!a || !b) return 999;
  const da = new Date(a + 'T00:00:00');
  const db = new Date(b + 'T00:00:00');
  const diff = Math.floor((db - da) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

/**
 * Get today's date string in YYYY-MM-DD format.
 */
function todayStrEngine() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Calculate mood state from days since last study.
 * @param {string|null} lastStudyDate - YYYY-MM-DD or null
 * @returns {string} mood key
 */
function calculateMoodState(lastStudyDate) {
  if (!lastStudyDate) return 'missing_you';
  const today = todayStrEngine();
  if (lastStudyDate === today) return 'happy';

  const daysSince = daysBetween(lastStudyDate, today);

  if (daysSince >= 5) return 'asleep';
  if (daysSince >= 3) return 'down';
  if (daysSince >= 2) return 'missing_you';
  if (daysSince >= 1) return 'expectant';
  return 'happy';
}

/**
 * Get full mood descriptor object.
 */
function getMoodDescriptor(moodKey) {
  return MOOD_STATES[moodKey] || MOOD_STATES.missing_you;
}

/**
 * Get mood label localized.
 */
function getMoodLabel(moodKey) {
  return getMoodDescriptor(moodKey).label;
}

/**
 * Get mood emoji.
 */
function getMoodEmoji(moodKey) {
  return getMoodDescriptor(moodKey).emoji;
}

/**
 * Get mood color (hex).
 */
function getMoodColor(moodKey) {
  return getMoodDescriptor(moodKey).color;
}

/**
 * MoodEngine class - can be instantiated for testability.
 */
function MoodEngine(options) {
  this._lastStudyDate = options?.lastStudyDate || null;
  this._currentMood = options?.currentMood || 'happy';
  this._onChange = options?.onChange || null;
}

MoodEngine.prototype.update = function(lastStudyDate) {
  const newMood = calculateMoodState(lastStudyDate);
  if (newMood !== this._currentMood) {
    this._currentMood = newMood;
    this._lastStudyDate = lastStudyDate;
    if (typeof this._onChange === 'function') {
      this._onChange(newMood, this.getDescriptor());
    }
  }
  return newMood;
};

MoodEngine.prototype.getMood = function() {
  return this._currentMood;
};

MoodEngine.prototype.getDescriptor = function() {
  return getMoodDescriptor(this._currentMood);
};

MoodEngine.prototype.recordStudy = function() {
  const today = todayStrEngine();
  this._lastStudyDate = today;
  return this.update(today);
};

// ---- Avatar mode mood re-interpretation (预留接口) ----
// When character is in avatar mode, mood states are re-interpreted
// as "companion emotions" rather than "raising emotions".
const AVATAR_MOOD_MAP = {
  happy:       { label: '元气满满', emoji: '🔥', color: '#EF4444' },
  expectant:   { label: '跃跃欲试', emoji: '⚡', color: '#F59E0B' },
  missing_you: { label: '静候归来', emoji: '🌙', color: '#8B5CF6' },
  down:        { label: '默默陪伴', emoji: '🍃', color: '#10B981' },
  asleep:      { label: '休眠中',   emoji: '💤', color: '#94A3B8' },
};

function getAvatarMoodDescriptor(moodKey) {
  return AVATAR_MOOD_MAP[moodKey] || AVATAR_MOOD_MAP.missing_you;
}

Object.assign(window, {
  MOOD_STATES,
  MOOD_ORDER,
  calculateMoodState,
  getMoodDescriptor,
  getMoodLabel,
  getMoodEmoji,
  getMoodColor,
  MoodEngine,
  getAvatarMoodDescriptor,
});
