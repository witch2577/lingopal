// ========== Constants & Language Definitions ==========

const LANGUAGES = [
  { code: 'auto',    name: '自动检测', nameEn: 'Auto Detect', flag: '🔍', type: 'system' },
  { code: 'zh-CN',   name: '中文',     nameEn: 'Chinese',     flag: '🇨🇳', type: 'standard' },
  { code: 'en',      name: '英语',     nameEn: 'English',     flag: '🇺🇸', type: 'standard' },
  { code: 'ja',      name: '日语',     nameEn: 'Japanese',    flag: '🇯🇵', type: 'standard' },
  { code: 'ko',      name: '韩语',     nameEn: 'Korean',      flag: '🇰🇷', type: 'standard' },
  { code: 'es',      name: '西班牙语',  nameEn: 'Spanish',     flag: '🇪🇸', type: 'standard' },
  { code: 'ru',      name: '俄语',     nameEn: 'Russian',     flag: '🇷🇺', type: 'standard' },
  // European languages (Beta)
  { code: 'de',      name: '德语',     nameEn: 'German',      flag: '🇩🇪', type: 'beta', region: 'europe' },
  { code: 'fr',      name: '法语',     nameEn: 'French',      flag: '🇫🇷', type: 'beta', region: 'europe' },
  { code: 'it',      name: '意大利语',  nameEn: 'Italian',     flag: '🇮🇹', type: 'beta', region: 'europe' },
  { code: 'pt',      name: '葡萄牙语',  nameEn: 'Portuguese',  flag: '🇵🇹', type: 'beta', region: 'europe' },
  // Middle East languages (Beta)
  { code: 'ar',      name: '阿拉伯语',  nameEn: 'Arabic',      flag: '🇸🇦', type: 'beta', region: 'middle-east' },
  // South Asia languages (Beta)
  { code: 'hi',      name: '印地语',    nameEn: 'Hindi',       flag: '🇮🇳', type: 'beta', region: 'south-asia' },
  // Southeast Asia languages (Beta)
  { code: 'th',    name: '泰语',     nameEn: 'Thai',        flag: '🇹🇭', type: 'beta', region: 'southeast-asia' },
  { code: 'vi',    name: '越南语',   nameEn: 'Vietnamese',  flag: '🇻🇳', type: 'beta', region: 'southeast-asia' },
  // Middle East languages (Beta)
  { code: 'tr',    name: '土耳其语', nameEn: 'Turkish',     flag: '🇹🇷', type: 'beta', region: 'middle-east' },
  // European languages (Beta)
  { code: 'pl',    name: '波兰语',   nameEn: 'Polish',      flag: '🇵🇱', type: 'beta', region: 'europe' },
  { code: 'nl',    name: '荷兰语',   nameEn: 'Dutch',       flag: '🇳🇱', type: 'beta', region: 'europe' },
  { code: 'el',    name: '希腊语',   nameEn: 'Greek',       flag: '🇬🇷', type: 'beta', region: 'europe' },
  // Dialects
  { code: 'yue',     name: '粤语',     nameEn: 'Cantonese',   flag: '🟢', type: 'dialect'  },
  { code: 'nan',     name: '闽南语',    nameEn: 'Hokkien',     flag: '🟠', type: 'dialect'  },
  { code: 'zh-SC',   name: '四川话',   nameEn: 'Sichuanese',  flag: '🔴', type: 'dialect'  },
  { code: 'zh-DB',   name: '东北话',   nameEn: 'Northeastern', flag: '🟡', type: 'dialect'  },
  { code: 'sh',      name: '上海话',    nameEn: 'Shanghainese',  flag: '🏙️', type: 'dialect'  },
  { code: 'hak',     name: '客家话',    nameEn: 'Hakka',         flag: '🌄', type: 'dialect'  },
];

const LANGUAGE_MAP = Object.fromEntries(LANGUAGES.map(l => [l.code, l]));

// MyMemory uses langpair format like zh-CN|en
// for dialects we map to local dictionary only
const DIALECT_CODES = ['yue', 'nan', 'zh-SC', 'zh-DB', 'sh', 'hak'];

const ACHIEVEMENTS = [
  { id: 'first-level',       title: '初出茅庐', desc: '完成第一关',               icon: '🎯' },
  { id: 'five-levels',       title: '渐入佳境', desc: '累计通过 5 关',            icon: '🌟' },
  { id: 'ten-levels',        title: '身经百战', desc: '累计通过 10 关',           icon: '⚔️' },
  { id: 'first-perfect',     title: '完美通关', desc: '首次获得三星评价',         icon: '⭐' },
  { id: 'streak-3',          title: '持之以恒', desc: '连续学习 3 天',            icon: '🔥' },
  { id: 'streak-7',          title: '七日挑战', desc: '连续学习 7 天',            icon: '💎' },
  { id: 'combo-master',      title: '连击大师', desc: '单次关卡达成 5 连击',      icon: '🔥' },
  { id: 'word-collector',    title: '词汇达人', desc: '收藏 20 个单词',           icon: '📚' },
  { id: 'polyglot',          title: '语言通才', desc: '学习 3 种以上语言',        icon: '🌍' },
  { id: 'night-owl',         title: '夜猫子',   desc: '在深夜完成学习',           icon: '🦉' },
  { id: 'early-bird',        title: '早起鸟',   desc: '在清晨完成学习',           icon: '🐦' },
  { id: 'translator-100',    title: '翻译高手', desc: '完成 100 次翻译',          icon: '🌐' },
  // P2 achievements
  { id: 'social-butterfly',  title: '社交达人', desc: '添加 3 位好友',            icon: '👥' },
  { id: 'group-founder',     title: '小组长',   desc: '创建学习小组',             icon: '🏫' },
  { id: 'grammar-master',    title: '语法大师', desc: '完成 5 节语法课',          icon: '📐' },
  { id: 'culture-explorer',  title: '文化探索者', desc: '阅读 5 篇文化小知识',     icon: '🗺️' },
  { id: 'video-star',        title: '短视频达人', desc: '完成 5 个情景短视频',     icon: '🎬' },
  { id: 'report-sharer',     title: '分享达人', desc: '分享学习报告',             icon: '📤' },
];

const QUIZ_TYPES = {
  MATCH:      'match',       // 单词连连看
  LISTEN_PIC: 'listen-pic',  // 听力选图
  FILL_BLANK: 'fill-blank',  // 句子填空
  REPEAT:     'repeat',      // 跟读打分
  TRANSLATE:  'translate',   // 翻译挑战
  DICTATION:  'dictation',   // 听写拼写
};

const THEMES = [
  { id: 'basic',    name: '基础词汇', color: '#10B981', bg: 'from-emerald-400 to-teal-500' },
  { id: 'daily',    name: '日常对话', color: '#6366F1', bg: 'from-indigo-500 to-violet-500' },
  { id: 'grammar',  name: '语法进阶', color: '#F59E0B', bg: 'from-amber-400 to-orange-500' },
  { id: 'scenario', name: '场景实战', color: '#EF4444', bg: 'from-rose-500 to-pink-500' },
  { id: 'culture',  name: '文化拓展', color: '#8B5CF6', bg: 'from-purple-500 to-fuchsia-500' },
];

// bottom nav items
const NAV_ITEMS = [
  { key: 'translation', label: '翻译', icon: 'translate' },
  { key: 'learning',    label: '学习', icon: 'book-open' },
  { key: 'oral',        label: '口语', icon: 'mic' },
  { key: 'written',     label: '笔试', icon: 'type-text' },
  { key: 'content',     label: '发现', icon: 'compass' },
  { key: 'user',        label: '我的', icon: 'user' },
];

// Oral module sub-tabs
const ORAL_TABS = [
  { key: 'learning',   label: '口语学习' },
  { key: 'training',   label: '口语训练' },
  { key: 'dialogue',   label: '口语对话' },
  { key: 'correction', label: '纠音' },
];

// Written module sub-tabs
const WRITTEN_TABS = [
  { key: 'spelling',  label: '单词拼写' },
  { key: 'selection', label: '句子选词' },
  { key: 'dialogue',  label: '文字对话' },
];

// Difficulty levels
const DIFFICULTY_LEVELS = [
  { key: 'beginner',     label: '入门', color: 'bg-emerald-100 text-emerald-700' },
  { key: 'intermediate', label: '中级', color: 'bg-amber-100 text-amber-700' },
  { key: 'advanced',     label: '高级', color: 'bg-rose-100 text-rose-700' },
];

// Oral practice scenarios
const ORAL_SCENARIOS = [
  { id: 'restaurant', name: '餐厅点餐', icon: '🍽️', description: '在餐厅点餐、询问推荐、结账等场景' },
  { id: 'directions', name: '问路导航', icon: '🗺️', description: '询问方向、交通工具、距离等场景' },
  { id: 'hotel',      name: '酒店入住', icon: '🏨', description: '预订房间、办理入住、请求服务等场景' },
  { id: 'business',   name: '商务会谈', icon: '💼', description: '会议安排、产品介绍、谈判等场景' },
  { id: 'shopping',   name: '购物消费', icon: '🛒', description: '询问价格、试穿、退换货等场景' },
  { id: 'airport',    name: '机场出行', icon: '✈️', description: '值机、安检、登机等场景' },
];

// ---- Profile Dimensions (7-dimension system) ----
const PROFILE_DIMENSIONS = {
  languageLevel: {
    label: '当前语言水平',
    options: [
      { key: 'beginner',     label: '零基础',   emoji: '🌱' },
      { key: 'elementary',   label: '入门',     emoji: '📖' },
      { key: 'intermediate', label: '中级',     emoji: '📚' },
      { key: 'advanced',     label: '高级',     emoji: '🎓' },
    ],
  },
  learningGoal: {
    label: '学习目标',
    options: [
      { key: 'travel',      label: '旅游',       emoji: '✈️' },
      { key: 'business',    label: '工作商务',   emoji: '💼' },
      { key: 'exam',        label: '考试考级',   emoji: '📝' },
      { key: 'hobby',       label: '兴趣爱好',   emoji: '🎨' },
      { key: 'immigration', label: '移民留学',   emoji: '🌍' },
    ],
  },
  dailyMinutes: {
    label: '每日可用时长',
    options: [
      { key: '5min',  label: '5分钟',   emoji: '☕' },
      { key: '15min', label: '15分钟',  emoji: '⏱️' },
      { key: '30min', label: '30分钟',  emoji: '⏲️' },
      { key: '60min', label: '1小时以上', emoji: '🕐' },
    ],
  },
  learningStyle: {
    label: '学习偏好',
    options: [
      { key: 'visual',      label: '视觉型', emoji: '👁️' },
      { key: 'auditory',    label: '听觉型', emoji: '👂' },
      { key: 'kinesthetic', label: '动手型', emoji: '✋' },
      { key: 'mixed',       label: '混合型', emoji: '🔄' },
    ],
  },
  weakAreas: {
    label: '薄弱环节',
    options: [
      { key: 'listening',  label: '听力', emoji: '🎧' },
      { key: 'speaking',   label: '口语', emoji: '🗣️' },
      { key: 'reading',    label: '阅读', emoji: '📖' },
      { key: 'writing',    label: '写作', emoji: '✍️' },
      { key: 'vocabulary', label: '词汇', emoji: '📚' },
    ],
  },
  studyTimePreference: {
    label: '学习时段偏好',
    options: [
      { key: 'morning',  label: '早晨',       emoji: '🌅' },
      { key: 'noon',     label: '午休',       emoji: '☀️' },
      { key: 'evening',  label: '晚间',       emoji: '🌙' },
      { key: 'commute',  label: '通勤碎片时间', emoji: '🚇' },
    ],
  },
};

const DAILY_MINUTES_MAP = {
  '5min': 5,
  '15min': 15,
  '30min': 30,
  '60min': 60,
};

// ---- 6 Learning Scenarios ----
const SCENARIOS = [
  {
    id: 'commute',
    name: '通勤碎片学习',
    icon: '🚇',
    color: '#6366F1',
    bg: 'from-indigo-500 to-violet-500',
    tag: '5-10分钟',
    description: '地铁/公交上的微课程，轻量化内容，随时随地学几句',
    features: ['短句速记', '听力磨耳', '单词闪卡'],
    duration: '5-10分钟',
    xpMultiplier: 1.0,
  },
  {
    id: 'bedtime',
    name: '睡前复习',
    icon: '🌙',
    color: '#8B5CF6',
    bg: 'from-violet-500 to-purple-500',
    tag: '无压力',
    description: '当日学习内容回顾，温柔提醒，助你巩固记忆',
    features: ['今日回顾', '错题重温', '单词听写'],
    duration: '5-8分钟',
    xpMultiplier: 0.8,
  },
  {
    id: 'exam',
    name: '考前冲刺',
    icon: '📝',
    color: '#EF4444',
    bg: 'from-rose-500 to-red-500',
    tag: '密集训练',
    description: '针对考试的重点词汇和语法，高强度模拟训练',
    features: ['高频词汇', '语法强化', '模拟测试'],
    duration: '15-30分钟',
    xpMultiplier: 1.5,
  },
  {
    id: 'travel',
    name: '旅行应急',
    icon: '✈️',
    color: '#10B981',
    bg: 'from-emerald-500 to-teal-500',
    tag: '场景速成',
    description: '机场/酒店/餐厅/问路实用短句，即学即用',
    features: ['机场用语', '酒店入住', '餐厅点餐', '问路导航'],
    duration: '10-15分钟',
    xpMultiplier: 1.2,
  },
  {
    id: 'social',
    name: '社交对话',
    icon: '💬',
    color: '#F59E0B',
    bg: 'from-amber-400 to-orange-500',
    tag: 'AI陪练',
    description: '模拟真实对话场景，日常交流主题，大胆开口说',
    features: ['自我介绍', '闲聊话题', '情绪表达', '约会邀请'],
    duration: '10-20分钟',
    xpMultiplier: 1.3,
  },
  {
    id: 'business',
    name: '商务场景',
    icon: '💼',
    color: '#3B82F6',
    bg: 'from-blue-500 to-indigo-500',
    tag: '专业训练',
    description: '邮件/会议/谈判等专业场景，提升职场语言能力',
    features: ['商务邮件', '会议发言', '电话沟通', '谈判技巧'],
    duration: '15-25分钟',
    xpMultiplier: 1.4,
  },
];

// ---- XP Level System ----
function generateXPLevels() {
  const levels = [];
  let cumulative = 0;
  for (let i = 1; i <= 30; i++) {
    const need = Math.floor(100 * Math.pow(1.25, i - 1));
    levels.push({
      level: i,
      title: getLevelTitle(i),
      xpNeeded: need,
      xpFrom: cumulative,
      xpTo: cumulative + need,
      unlocks: getLevelUnlocks(i),
    });
    cumulative += need;
  }
  return levels;
}

function getLevelTitle(lv) {
  const titles = {
    1: '语言学徒', 2: '初级学员', 3: '勤奋学者', 4: '单词猎手', 5: '语法新星',
    6: '听力达人', 7: '口语先锋', 8: '阅读能手', 9: '写作新秀', 10: '语言探险家',
    11: '进阶学者', 12: '词汇大师', 13: '语法专家', 14: '听力精英', 15: '口语高手',
    16: '阅读专家', 17: '写作能手', 18: '语言行者', 19: '文化传播者', 20: '双语使者',
    21: '高级学者', 22: '词汇宗师', 23: '语法大师', 24: '听力王者', 25: '口语大师',
    26: '阅读宗师', 27: '写作大师', 28: '语言大师', 29: '语言宗师', 30: '语言之神',
  };
  return titles[lv] || `等级 ${lv}`;
}

function getLevelUnlocks(lv) {
  const unlocks = [];
  if (lv >= 3) unlocks.push('解锁「考前冲刺」场景');
  if (lv >= 5) unlocks.push('解锁「商务场景」训练');
  if (lv >= 7) unlocks.push('解锁「社交对话」AI陪练');
  if (lv >= 10) unlocks.push('解锁高级语法关卡');
  if (lv >= 15) unlocks.push('解锁全部方言学习');
  if (lv >= 20) unlocks.push('解锁「语言大师」徽章');
  if (lv >= 25) unlocks.push('解锁自定义学习计划');
  if (lv >= 30) unlocks.push('解锁全部特权');
  return unlocks;
}

const XP_LEVELS = generateXPLevels();
const TOTAL_XP_TO_MAX = XP_LEVELS[XP_LEVELS.length - 1].xpTo;

function getLevelByXP(xp) {
  for (let i = XP_LEVELS.length - 1; i >= 0; i--) {
    if (xp >= XP_LEVELS[i].xpFrom) return XP_LEVELS[i];
  }
  return XP_LEVELS[0];
}

function getXPProgress(xp) {
  const level = getLevelByXP(xp);
  const current = xp - level.xpFrom;
  const progress = level.xpNeeded > 0 ? current / level.xpNeeded : 1;
  return { level, current, needed: level.xpNeeded, progress: Math.min(1, progress) };
}

// ---- Streak System ----
const STREAK_MILESTONES = [
  { days: 3,  badge: '初燃星火', icon: '🔥', rewardXP: 30 },
  { days: 7,  badge: '七日挑战', icon: '💎', rewardXP: 100 },
  { days: 14, badge: '半月坚持', icon: '🌟', rewardXP: 200 },
  { days: 30, badge: '月度达人', icon: '🏆', rewardXP: 500 },
  { days: 60, badge: '双月战士', icon: '👑', rewardXP: 1000 },
  { days: 100, badge: '百日传奇', icon: '💯', rewardXP: 2000 },
];

const STREAK_RECOVERY_COST = 50; // XP per missed day
const STREAK_MAX_RECOVERY_DAYS = 3;

// ---- XP Sources ----
const XP_SOURCES = {
  LEVEL_COMPLETE: { base: 30, label: '完成关卡' },
  LEVEL_PERFECT: { base: 50, label: '完美通关' },
  DAILY_LOGIN: { base: 10, label: '每日登录' },
  STREAK_BONUS: { base: 5, label: '连胜奖励', perDay: true },
  SCENARIO_COMPLETE: { base: 25, label: '完成场景' },
  SCENARIO_PERFECT: { base: 40, label: '场景满分' },
  WORD_COLLECT: { base: 5, label: '收藏单词' },
  TRANSLATION: { base: 2, label: '完成翻译' },
  ORAL_PRACTICE: { base: 15, label: '口语练习' },
  WRITTEN_PRACTICE: { base: 15, label: '笔试练习' },
  MILESTONE_REACHED: { base: 0, label: '里程碑奖励' },
  // P2
  GRAMMAR_LESSON: { base: 15, label: '语法课堂' },
  CULTURE_ARTICLE: { base: 15, label: '文化知识' },
  VIDEO_LESSON: { base: 20, label: '情景视频' },
  FRIEND_PK_WIN: { base: 30, label: 'PK胜利' },
};

// ---- Time ranges for comparison ----
const COMPARE_RANGES = [
  { key: 'week', label: '本周 vs 上周', days: 7 },
  { key: 'month', label: '本月 vs 上月', days: 30 },
  { key: 'quarter', label: '本季度 vs 上季度', days: 90 },
];

// ---- Content Hub Tabs (P2) ----
const CONTENT_TABS = [
  { key: 'shortvideo', label: '情景视频', icon: 'video' },
  { key: 'grammar',    label: '语法课堂', icon: 'book' },
  { key: 'culture',    label: '文化知识', icon: 'globe' },
  { key: 'social',     label: '社交',    icon: 'users' },
  { key: 'sync',       label: '同步',    icon: 'sync' },
];

// ---- Social Tabs (P2) ----
const SOCIAL_TABS = [
  { key: 'leaderboard', label: '排行榜', icon: 'trophy' },
  { key: 'friends',     label: '好友PK', icon: 'users' },
  { key: 'groups',      label: '学习小组', icon: 'home' },
];

// ---- Content Rotation (Weekly) ----
const CONTENT_WEEKS = 4;
const STORAGE_KEYS = {
  activeWeek: 'lingopal_active_week',
  userSelectedWeek: 'lingopal_user_selected_week',
  contentLastSeeded: 'lingopal_content_last_seeded',
};

// Get ISO week number (1-53)
function getISOWeek() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const yearStart = new Date(d.getFullYear(), 0, 1);
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

// Get week index for rotation (0 to CONTENT_WEEKS-1)
function getCurrentWeekIndex() {
  const isoWeek = getISOWeek();
  return isoWeek % CONTENT_WEEKS;
}

// Check if the week has changed since last visit
function hasWeekChanged() {
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
}

// Save active week to localStorage
function saveActiveWeek(weekIndex) {
  try {
    localStorage.setItem(STORAGE_KEYS.activeWeek, String(weekIndex));
  } catch (e) {}
}

Object.assign(window, {
  LANGUAGES,
  LANGUAGE_MAP,
  DIALECT_CODES,
  ACHIEVEMENTS,
  QUIZ_TYPES,
  THEMES,
  NAV_ITEMS,
  ORAL_TABS,
  WRITTEN_TABS,
  DIFFICULTY_LEVELS,
  ORAL_SCENARIOS,
  PROFILE_DIMENSIONS,
  DAILY_MINUTES_MAP,
  SCENARIOS,
  XP_LEVELS,
  TOTAL_XP_TO_MAX,
  getLevelByXP,
  getXPProgress,
  getLevelTitle,
  getLevelUnlocks,
  STREAK_MILESTONES,
  STREAK_RECOVERY_COST,
  STREAK_MAX_RECOVERY_DAYS,
  XP_SOURCES,
  COMPARE_RANGES,
  CONTENT_TABS,
  SOCIAL_TABS,
  CONTENT_WEEKS,
  STORAGE_KEYS,
  getISOWeek,
  getCurrentWeekIndex,
  hasWeekChanged,
  saveActiveWeek,
});
