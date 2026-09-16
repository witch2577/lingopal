// ========== FeedbackConfig ==========
// Stage × Situation feedback matrix.
// All dialogue templates use {name} / {address} placeholders.
// MVP implements stage 1 (婴儿期); data structure supports all stages.

// ---- Stage display mapping ----
const STAGE_DISPLAY_NAMES = {
  1: '婴儿期',
  2: '幼儿期',
  3: '少儿期',
  4: '成年期',
};

// ---- Scenario keys ----
const FEEDBACK_SCENARIOS = {
  // Encouragement
  CONSECUTIVE_CORRECT: 'consecutive_correct',
  HIGH_ACCURACY: 'high_accuracy',
  LEVEL_COMPLETE: 'level_complete',
  STREAK_BONUS: 'streak_bonus',
  // Comfort
  CONSECUTIVE_WRONG: 'consecutive_wrong',
  HIGH_ERROR_RATE: 'high_error_rate',
};

// ---- Feedback type ----
const FEEDBACK_TYPE = {
  ENCOURAGE: 'encourage',
  COMFORT: 'comfort',
};

// ---- Thresholds (from product spec v2.5) ----
const FEEDBACK_THRESHOLDS = {
  consecutiveCorrect: 5,
  consecutiveWrong: 3,
  highAccuracy: 85,
  highErrorRate: 60,
  minIntervalMs: 30000,
  sameScenarioCooldownHours: 24,
};

// ---- Stage × Situation dialogue matrix ----
const FEEDBACK_DIALOGUES = {
  // ===== Encouragement =====
  [FEEDBACK_SCENARIOS.CONSECUTIVE_CORRECT]: {
    [FEEDBACK_TYPE.ENCOURAGE]: {
      1: ['{address}好棒！连续答对啦！超厉害！', '继续保持哦~'],
      2: ['{address}好棒！连续答对啦！', '越来越厉害了！'],
      3: ['{address}，连续答对 5 题，手感不错哦。', '状态很好，继续保持。'],
      4: ['{address}，连续答对 5 题，很稳。', '这个节奏很好。'],
    },
  },
  [FEEDBACK_SCENARIOS.HIGH_ACCURACY]: {
    [FEEDBACK_TYPE.ENCOURAGE]: {
      1: ['哇，{address}，这些题你都会做！好聪明！', '宝宝为你骄傲~'],
      2: ['{address}好厉害！今天学了好多新知识！', '进步好大呀！'],
      3: ['{address}，正确率很高，这个知识点掌握得很扎实。', '继续保持这个水准。'],
      4: ['{address}，正确率很高，基础很扎实。', '继续保持。'],
    },
  },
  [FEEDBACK_SCENARIOS.LEVEL_COMPLETE]: {
    [FEEDBACK_TYPE.ENCOURAGE]: {
      1: ['{address}，这一关完成啦！', '宝宝好开心~'],
      2: ['{address}，关卡完成！', '我们又进步了一点！'],
      3: ['{address}，关卡完成，表现不错。', '下一关继续加油。'],
      4: ['{address}，关卡完成。', '稳步推进，很好。'],
    },
  },
  [FEEDBACK_SCENARIOS.STREAK_BONUS]: {
    [FEEDBACK_TYPE.ENCOURAGE]: {
      1: ['{address}好厉害！连击不断！', '超级棒！'],
      2: ['{address}，连击不断！', '势头正旺！'],
      3: ['{address}，连击势头不错。', '保持手感。'],
      4: ['{address}，连击势头很好。', '继续保持。'],
    },
  },
  // ===== Comfort =====
  [FEEDBACK_SCENARIOS.CONSECUTIVE_WRONG]: {
    [FEEDBACK_TYPE.COMFORT]: {
      1: ['{address}，别灰心，下一题一定会对的！', '宝宝相信你~'],
      2: ['{address}，没关系，我们再试一次~', '慢慢来就好。'],
      3: ['{address}，连续几题没对，可能是状态问题，深呼吸，继续。', '调整一下节奏。'],
      4: ['{address}，连续几题没对，先深呼吸，调整状态再继续。', '不用着急。'],
    },
  },
  [FEEDBACK_SCENARIOS.HIGH_ERROR_RATE]: {
    [FEEDBACK_TYPE.COMFORT]: {
      1: ['{address}没关系，做错了才能学会呀，我们再试一次~', '宝宝陪着你。'],
      2: ['{address}，没关系，做错了才能学会呀。', '慢慢来~'],
      3: ['{address}，错误是学习的一部分，我们一起看看哪里可以改进。', '不用气馁。'],
      4: ['{address}，错误率有点高，休息一下再回来会更清醒。', '调整节奏再试。'],
    },
  },
};

// ---- Animation style config per type ----
const FEEDBACK_ANIMATION_STYLES = {
  [FEEDBACK_TYPE.ENCOURAGE]: {
    bubbleBg: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
    bubbleBorder: '#F59E0B',
    bubbleText: '#92400E',
    particleEmoji: ['✨', '⭐', '🌸'],
    characterAnimation: 'bounce',
    ambientGlow: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.15) 0%, transparent 70%)',
  },
  [FEEDBACK_TYPE.COMFORT]: {
    bubbleBg: 'linear-gradient(135deg, #DBEAFE 0%, #E0E7FF 100%)',
    bubbleBorder: '#818CF8',
    bubbleText: '#3730A3',
    particleEmoji: ['💧', '☁️', '🌙'],
    characterAnimation: 'gentle',
    ambientGlow: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)',
  },
};

// ---- Baby-stage specific simplified SVG animations (CSS class names) ----
const BABY_ANIMATION_CLASSES = {
  bounce: 'animate-bounce-soft',
  gentle: 'animate-pulse-slow',
  pop: 'animate-pop',
};

/**
 * Get random dialogue lines for a scenario + stage.
 * @param {string} scenario - FEEDBACK_SCENARIOS key
 * @param {number} stage - current stage (1-4)
 * @returns {Object} { type, lines, style }
 */
function getFeedbackDialogue(scenario, stage) {
  const scenarioData = FEEDBACK_DIALOGUES[scenario];
  if (!scenarioData) return null;

  const type = Object.keys(scenarioData)[0];
  const stageMap = scenarioData[type];
  const lines = stageMap[stage] || stageMap[1] || [];
  const style = FEEDBACK_ANIMATION_STYLES[type];

  return { type, lines, style, scenario };
}

/**
 * Get all available scenarios for a feedback type.
 */
function getScenariosByType(type) {
  return Object.entries(FEEDBACK_DIALOGUES)
    .filter(([, data]) => data[type])
    .map(([key]) => key);
}

Object.assign(window, {
  FeedbackConfig: {
    STAGE_DISPLAY_NAMES,
    SCENARIOS: FEEDBACK_SCENARIOS,
    TYPE: FEEDBACK_TYPE,
    THRESHOLDS: FEEDBACK_THRESHOLDS,
    DIALOGUES: FEEDBACK_DIALOGUES,
    ANIMATION_STYLES: FEEDBACK_ANIMATION_STYLES,
    BABY_ANIMATION_CLASSES,
    getFeedbackDialogue,
    getScenariosByType,
  },
});
