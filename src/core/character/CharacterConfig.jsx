// ========== CharacterConfig Data Structure & Defaults ==========
// Defines the canonical shape of character configuration, growth state,
// and naming data.  Includes versioned defaults and a v0→v1 migrator.
// Updated for Task 3: 4-stage growth model (婴儿期→幼儿期→少儿期→成年期)
// Updated 2026-09-22: add userCreated flag to distinguish auto-generated vs player-created
const CURRENT_CONFIG_VERSION = 3;
const CURRENT_GROWTH_VERSION = 2;
const CURRENT_NAMING_VERSION = 1;
// ---- Default CharacterConfig (appearance + shop structure) ----
// Naming fields are intentionally EMPTY — the UI prompts the user to fill them.
// userCreated: false means the character was auto-generated and the player
// has not yet gone through the creation onboarding.
function getDefaultCharacterConfig() {
  return {
    _v: CURRENT_CONFIG_VERSION,
    gender: 'girl',              // 'boy' | 'girl'
    mode: 'child',               // 'child' (养成) | 'avatar' (化身)
    userCreated: false,          // true after player completes creation onboarding
    // 捏脸维度
    faceShape: 'face-oval',
    hairStyle: 'hair-long-straight',
    hairColor: '#2D2D2D',
    eyeShape: 'eye-big',
    eyeColor: '#5D8AA8',
    eyebrow: 'brow-straight',
    skinTone: '#F5D0C5',
    expression: 'expr-smile',
    // 造型
    top: 'top-sailor',
    bottom: 'bottom-pleated-skirt',
    accessory: null,
    background: 'bg-room',
    // 命名 / 称呼 — 纯文本，无预设默认值
    characterName: '',
    userNickname: '',
    customTitle: '',
    // 商城字段 — 本任务只建结构，不实现逻辑
    starCoin: 0,
    purchasedItems: [],
    equippedShopItems: {
      top: null,
      bottom: null,
      accessory: null,
      background: null,
    },
    // 解锁记录
    unlockedItems: [],
  };
}
// ---- Default CharacterGrowth (GP / stage / mood) ----
// Task 3: initial character = infant (婴儿期)
function getDefaultCharacterGrowth() {
  return {
    _v: CURRENT_GROWTH_VERSION,
    totalGP: 0,
    currentStage: 1,
    stageName: '婴儿期',
    stageGPRequired: 0,
    nextStageGP: 50,
    currentMood: 'happy',
    lastStudyDate: null,
    streakAtLastStudy: 0,
    evolutionHistory: [],
    moodHistory: [],
    gpHistory: [],
  };
}
// ---- Default CharacterNaming (standalone persistence) ----
function getDefaultCharacterNaming() {
  return {
    _v: CURRENT_NAMING_VERSION,
    characterName: '',
    userNickname: '',
    customTitle: '',
    nameChangedAt: null,
    nicknameHistory: [],
  };
}
// ---- Stage definitions (4-stage model, v2.5) ----
// 婴儿期 → 幼儿期 → 少儿期 → 成年期
const CHARACTER_STAGES = [
  { stage: 1, name: '婴儿期', gpRequired: 0,   key: 'infant',  nextName: '幼儿期' },
  { stage: 2, name: '幼儿期', gpRequired: 50,   key: 'toddler', nextName: '少儿期' },
  { stage: 3, name: '少儿期', gpRequired: 200,  key: 'child',   nextName: '成年期' },
  { stage: 4, name: '成年期', gpRequired: 600,  key: 'adult',   nextName: null },
];
function getStageByGP(gp) {
  for (let i = CHARACTER_STAGES.length - 1; i >= 0; i--) {
    if (gp >= CHARACTER_STAGES[i].gpRequired) {
      return CHARACTER_STAGES[i];
    }
  }
  return CHARACTER_STAGES[0];
}
function getNextStage(currentStageNum) {
  const next = CHARACTER_STAGES.find(s => s.stage === currentStageNum + 1);
  return next || null;
}
function getStageProgress(gp) {
  const current = getStageByGP(gp);
  const next = getNextStage(current.stage);
  if (!next) {
    return { current, next: null, progress: 1, remaining: 0 };
  }
  const range = next.gpRequired - current.gpRequired;
  const inStage = gp - current.gpRequired;
  const progress = Math.min(1, Math.max(0, inStage / range));
  return {
    current,
    next,
    progress,
    remaining: next.gpRequired - gp,
  };
}
// ---- Legacy mood (retained for backward compat, overridden by MoodEngine) ----
const CHARACTER_MOODS = {
  happy:       { key: 'happy',       label: '开心',    daysThreshold: 0 },
  expectant:   { key: 'expectant',   label: '期待',    daysThreshold: 1 },
  missing_you: { key: 'missing_you', label: '想念你',  daysThreshold: 2 },
  down:        { key: 'down',        label: '低落',    daysThreshold: 3 },
  asleep:      { key: 'asleep',      label: '沉睡',    daysThreshold: 5 },
};
// Legacy calculateMood (kept for migration compat; new code uses MoodEngine)
function calculateMood(lastStudyDate) {
  if (!lastStudyDate) return 'missing_you';
  const today = new Date().toISOString().slice(0, 10);
  if (lastStudyDate === today) return 'happy';
  const a = new Date(lastStudyDate + 'T00:00:00');
  const b = new Date(today + 'T00:00:00');
  const daysSince = Math.floor((b - a) / (1000 * 60 * 60 * 24));
  if (daysSince >= 5) return 'asleep';
  if (daysSince >= 3) return 'down';
  if (daysSince >= 2) return 'missing_you';
  if (daysSince >= 1) return 'expectant';
  return 'happy';
}
// ---- Version migration: v0→v1, v1→v2, v2→v3 ----
function migrateCharacterConfig(raw) {
  const v = raw?._v || 0;
  if (v >= CURRENT_CONFIG_VERSION) return raw;
  const defaults = getDefaultCharacterConfig();
  let config = { ...defaults };
  if (v < 1) {
    config.gender = raw.gender || defaults.gender;
    config.mode = raw.mode || defaults.mode;
    config.faceShape = raw.faceShape || defaults.faceShape;
    config.hairStyle = raw.hairStyle || defaults.hairStyle;
    config.hairColor = raw.hairColor || defaults.hairColor;
    config.eyeShape = raw.eyeShape || defaults.eyeShape;
    config.eyeColor = raw.eyeColor || defaults.eyeColor;
    config.eyebrow = raw.eyebrow || defaults.eyebrow;
    config.skinTone = raw.skinTone || defaults.skinTone;
    config.expression = raw.expression || defaults.expression;
    config.top = raw.top || defaults.top;
    config.bottom = raw.bottom || defaults.bottom;
    config.accessory = raw.accessory !== undefined ? raw.accessory : defaults.accessory;
    config.background = raw.background || defaults.background;
    config.characterName = raw.characterName || raw.name || '';
    config.userNickname = raw.userNickname || '';
    config.customTitle = raw.customTitle || '';
    config.starCoin = typeof raw.starCoin === 'number' ? raw.starCoin : 0;
    config.purchasedItems = Array.isArray(raw.purchasedItems) ? raw.purchasedItems : [];
    config.equippedShopItems = raw.equippedShopItems || { ...defaults.equippedShopItems };
    config.unlockedItems = Array.isArray(raw.unlockedItems) ? raw.unlockedItems : [];
  }
  if (v < 2) {
    // v1→v2: no structural change in config, just version bump
  }
  if (v < 3) {
    // v2→v3: add userCreated flag
    // Existing data from before this fix is treated as auto-generated (false)
    // so that old users are prompted to go through creation / re-create.
    config.userCreated = false;
  }
  config._v = CURRENT_CONFIG_VERSION;
  return config;
}
function migrateCharacterGrowth(raw) {
  const v = raw?._v || 0;
  if (v >= CURRENT_GROWTH_VERSION) return raw;
  const defaults = getDefaultCharacterGrowth();
  let growth = { ...defaults };
  if (v < 1) {
    growth.totalGP = typeof raw.totalGP === 'number' ? raw.totalGP : 0;
    growth.currentStage = raw.currentStage || 1;
    growth.stageName = raw.stageName || defaults.stageName;
    growth.stageGPRequired = raw.stageGPRequired || defaults.stageGPRequired;
    growth.currentMood = raw.currentMood || defaults.currentMood;
    growth.lastStudyDate = raw.lastStudyDate || null;
    growth.streakAtLastStudy = raw.streakAtLastStudy || 0;
    growth.evolutionHistory = Array.isArray(raw.evolutionHistory) ? raw.evolutionHistory : [];
    growth.moodHistory = Array.isArray(raw.moodHistory) ? raw.moodHistory : [];
    growth.gpHistory = Array.isArray(raw.gpHistory) ? raw.gpHistory : [];
  }
  if (v < 2) {
    // v1→v2: migrate old 5-stage names to 4-stage model
    const stageMap = {
      '语言学徒': '婴儿期',
      '入门者': '幼儿期',
      '行者': '少儿期',
      '达人': '成年期',
      '语大师': '成年期',
    };
    if (stageMap[growth.stageName]) {
      growth.stageName = stageMap[growth.stageName];
    }
    // Recompute stage from GP to ensure consistency
    const computed = getStageByGP(growth.totalGP);
    growth.currentStage = computed.stage;
    growth.stageName = computed.name;
    growth.stageGPRequired = computed.gpRequired;
    growth.nextStageGP = getNextStage(computed.stage)?.gpRequired || null;
    // Normalize mood to new state set
    const oldMoodMap = {
      'hungry': 'expectant',
      'sad': 'down',
      'sick': 'asleep',
    };
    if (oldMoodMap[growth.currentMood]) {
      growth.currentMood = oldMoodMap[growth.currentMood];
    }
  }
  growth._v = CURRENT_GROWTH_VERSION;
  return growth;
}
function migrateCharacterNaming(raw) {
  const v = raw?._v || 0;
  if (v >= CURRENT_NAMING_VERSION) return raw;
  const defaults = getDefaultCharacterNaming();
  let naming = { ...defaults };
  if (v < 1) {
    naming.characterName = raw.characterName || raw.name || '';
    naming.userNickname = raw.userNickname || '';
    naming.customTitle = raw.customTitle || '';
    naming.nameChangedAt = raw.nameChangedAt || null;
    naming.nicknameHistory = Array.isArray(raw.nicknameHistory) ? raw.nicknameHistory : [];
  }
  naming._v = CURRENT_NAMING_VERSION;
  return naming;
}
// ---- localStorage keys ----
const LS_KEY_CONFIG = 'lp_character_config';
const LS_KEY_GROWTH = 'lp_character_growth';
const LS_KEY_NAMING = 'lp_character_naming';
const LS_KEY_SNAPSHOTS = 'lp_character_snapshots';
Object.assign(window, {
  CURRENT_CONFIG_VERSION,
  CURRENT_GROWTH_VERSION,
  CURRENT_NAMING_VERSION,
  getDefaultCharacterConfig,
  getDefaultCharacterGrowth,
  getDefaultCharacterNaming,
  CHARACTER_STAGES,
  getStageByGP,
  getNextStage,
  getStageProgress,
  CHARACTER_MOODS,
  calculateMood,
  migrateCharacterConfig,
  migrateCharacterGrowth,
  migrateCharacterNaming,
  LS_KEY_CONFIG,
  LS_KEY_GROWTH,
  LS_KEY_NAMING,
  LS_KEY_SNAPSHOTS,
});
