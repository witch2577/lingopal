// ========== CharacterConfig Data Structure & Defaults ==========
// Defines the canonical shape of character configuration, growth state,
// and naming data.  Includes versioned defaults and a v0→v1 migrator.
// Updated for Task 3: 4-stage growth model (婴儿期→幼儿期→少儿期→成年期)
// Updated 2026-09-22: add userCreated flag to distinguish auto-generated vs player-created
// Updated 2026-09-29: new 4-stage model (baby/toddler/adult/middleage), GP thresholds remapped
const CURRENT_CONFIG_VERSION = 3;
const CURRENT_GROWTH_VERSION = 3;
const CURRENT_NAMING_VERSION = 1;

// ---- Default CharacterConfig (appearance + shop structure) ----
function getDefaultCharacterConfig() {
  return {
    _v: CURRENT_CONFIG_VERSION,
    gender: 'girl',
    mode: 'child',
    userCreated: false,
    faceShape: 'face-oval',
    hairStyle: 'hair-long-straight',
    hairColor: '#2D2D2D',
    eyeShape: 'eye-big',
    eyeColor: '#5D8AA8',
    eyebrow: 'brow-straight',
    skinTone: '#F5D0C5',
    expression: 'expr-smile',
    top: 'top-sailor',
    bottom: 'bottom-pleated-skirt',
    accessory: null,
    background: 'bg-room',
    characterName: '',
    userNickname: '',
    customTitle: '',
    starCoin: 0,
    purchasedItems: [],
    equippedShopItems: {
      top: null,
      bottom: null,
      accessory: null,
      background: null,
    },
    unlockedItems: [],
  };
}

// ---- Default CharacterGrowth (GP / stage / mood) ----
function getDefaultCharacterGrowth() {
  return {
    _v: CURRENT_GROWTH_VERSION,
    totalGP: 0,
    currentStage: 1,
    stageName: '婴儿(3-5岁)',
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

// ---- Stage definitions (4-stage model, v3) ----
// 婴儿(3-5岁) → 幼儿(10-15岁) → 成人(18岁) → 中青年(30岁)
const CHARACTER_STAGES = [
  { stage: 1, name: '婴儿(3-5岁)',   gpRequired: 0,   key: 'baby',      nextName: '幼儿(10-15岁)', ageLabel: '3-5岁' },
  { stage: 2, name: '幼儿(10-15岁)', gpRequired: 50,   key: 'toddler',   nextName: '成人(18岁)',    ageLabel: '10-15岁' },
  { stage: 3, name: '成人(18岁)',    gpRequired: 200,  key: 'adult',     nextName: '中青年(30岁)',  ageLabel: '18岁' },
  { stage: 4, name: '中青年(30岁)',  gpRequired: 600,  key: 'middleage', nextName: null,          ageLabel: '30岁' },
];

// Reserved stage 5 for future expansion (not exposed to users)
const RESERVED_STAGE = { stage: 5, name: '成熟期', gpRequired: 1200, key: 'elder', nextName: null, reserved: true };

// Lookup tables for O(1) stage resolution
const STAGE_KEY_BY_NUM = {};
const STAGE_NUM_BY_KEY = {};
CHARACTER_STAGES.forEach(s => {
  STAGE_KEY_BY_NUM[s.stage] = s.key;
  STAGE_NUM_BY_KEY[s.key] = s.stage;
});

function getStageKeyByNumber(stageNum) {
  return STAGE_KEY_BY_NUM[stageNum] || 'baby';
}

function getStageNumberByKey(key) {
  return STAGE_NUM_BY_KEY[key] || 1;
}

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

// middleage封顶: GP continues accumulating but stage does not advance beyond middleage
function isMaxStage(stageNum) {
  return stageNum >= CHARACTER_STAGES.length;
}

// ---- Cross-stage config migration ----
// When user evolves to a new stage, migrate config:
// - Same-name option: inherit directly
// - Mapped option: use mapping table
// - No match: reset to default for new stage, record old choice
function migrateConfigForStage(config, oldStageKey, newStageKey) {
  if (!config || oldStageKey === newStageKey) return config;
  const newConfig = { ...config };
  const resets = [];

  const dimensions = ['faceShape', 'hairStyle', 'eyeShape', 'eyebrow', 'expression', 'top', 'bottom', 'accessory', 'background'];

  for (const dim of dimensions) {
    const value = newConfig[dim];
    if (!value) continue;

    // Defensive: getDimensionOptions may not be available during early init
    if (typeof getDimensionOptions !== 'function') continue;

    const options = getDimensionOptions(dim, config.gender, newStageKey);
    if (!options || options.length === 0) continue;

    const baseValue = value.replace(/-(boy|girl|universal)$/, '');
    const exists = options.some(opt => {
      const optBase = opt.id.replace(/-(boy|girl|universal)$/, '');
      return optBase === baseValue;
    });

    if (!exists) {
      const defaultOpt = options[0];
      const newValue = defaultOpt.id.replace(/-(boy|girl|universal)$/, '');
      resets.push({ dimension: dim, oldValue: value, newValue });
      newConfig[dim] = newValue;
    }
  }

  if (resets.length > 0) {
    newConfig._stageMigrationLog = {
      from: oldStageKey,
      to: newStageKey,
      at: Date.now(),
      resets,
    };
  }

  return newConfig;
}

// ---- Legacy mood (retained for backward compat, overridden by MoodEngine) ----
const CHARACTER_MOODS = {
  happy:       { key: 'happy',       label: '开心',    daysThreshold: 0 },
  expectant:   { key: 'expectant',   label: '期待',    daysThreshold: 1 },
  missing_you: { key: 'missing_you', label: '想念你',  daysThreshold: 2 },
  down:        { key: 'down',        label: '低落',    daysThreshold: 3 },
  asleep:      { key: 'asleep',      label: '沉睡',    daysThreshold: 5 },
};

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
      '语言学徒': '婴儿(3-5岁)',
      '入门者': '幼儿(10-15岁)',
      '行者': '幼儿(10-15岁)',
      '达人': '成人(18岁)',
      '语大师': '成人(18岁)',
    };
    if (stageMap[growth.stageName]) {
      growth.stageName = stageMap[growth.stageName];
    }
    const computed = getStageByGP(growth.totalGP);
    growth.currentStage = computed.stage;
    growth.stageName = computed.name;
    growth.stageGPRequired = computed.gpRequired;
    growth.nextStageGP = getNextStage(computed.stage)?.gpRequired || null;
    const oldMoodMap = {
      'hungry': 'expectant',
      'sad': 'down',
      'sick': 'asleep',
    };
    if (oldMoodMap[growth.currentMood]) {
      growth.currentMood = oldMoodMap[growth.currentMood];
    }
  }
  if (v < 3) {
    // v2→v3: new 4-stage model (baby/toddler/adult/middleage)
    // Stage name mapping
    const stageNameMap = {
      '婴儿期': '婴儿(3-5岁)',
      '幼儿期': '幼儿(10-15岁)',
      '少儿期': '幼儿(10-15岁)',
      '成年期': '成人(18岁)',
    };
    // Stage number mapping: old 3(child)→new 2(toddler), old 4(adult)→new 3(adult)
    const oldStageNum = growth.currentStage;
    if (oldStageNum === 3) {
      growth.currentStage = 2;
    } else if (oldStageNum === 4) {
      growth.currentStage = 3;
    }
    if (stageNameMap[growth.stageName]) {
      growth.stageName = stageNameMap[growth.stageName];
    }
    // Ensure numeric consistency with GP (but preserve migrated stage for capped users)
    const computed = getStageByGP(growth.totalGP);
    // Only auto-promote if the user is NOT at middleage already
    // Old adult users with GP>=600 will naturally promote to middleage on next addGP
    if (computed.stage !== growth.currentStage && growth.currentStage < computed.stage) {
      growth.currentStage = computed.stage;
      growth.stageName = computed.name;
    }
    growth.stageGPRequired = CHARACTER_STAGES.find(s => s.stage === growth.currentStage)?.gpRequired || 0;
    growth.nextStageGP = getNextStage(growth.currentStage)?.gpRequired || null;
    growth._migratedAt = Date.now();
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
const LS_KEY_MIGRATION_NOTICE_SHOWN = 'lp_migration_v3_shown';

Object.assign(window, {
  CURRENT_CONFIG_VERSION,
  CURRENT_GROWTH_VERSION,
  CURRENT_NAMING_VERSION,
  getDefaultCharacterConfig,
  getDefaultCharacterGrowth,
  getDefaultCharacterNaming,
  CHARACTER_STAGES,
  RESERVED_STAGE,
  STAGE_KEY_BY_NUM,
  STAGE_NUM_BY_KEY,
  getStageKeyByNumber,
  getStageNumberByKey,
  getStageByGP,
  getNextStage,
  getStageProgress,
  isMaxStage,
  migrateConfigForStage,
  CHARACTER_MOODS,
  calculateMood,
  migrateCharacterConfig,
  migrateCharacterGrowth,
  migrateCharacterNaming,
  LS_KEY_CONFIG,
  LS_KEY_GROWTH,
  LS_KEY_NAMING,
  LS_KEY_SNAPSHOTS,
  LS_KEY_MIGRATION_NOTICE_SHOWN,
});
