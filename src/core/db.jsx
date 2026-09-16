// ========== Dexie.js IndexedDB Database ==========

const db = new Dexie('LingoPalDB');

db.version(6).stores({
  userProfiles: 'userId',
  learningPlans: 'planId',
  userProgress: '[userId+language+levelId], userId, language',
  achievements: '[userId+achievementId], userId',
  dailyLogs: '[userId+date], userId, date',
  translationHistory: '++id, timestamp, mode',
  wordBooks: '[userId+word], userId, language',
  errorBooks: '++id, [userId+language], userId',
  oralRecords: '++id, [userId+type], userId, timestamp',
  writtenRecords: '++id, [userId+type], userId, timestamp',
  pronunciationScores: '++id, [userId+language], userId, timestamp',
  streakRecords: '[userId+date], userId, date',
  sceneProgress: '[userId+sceneId], userId',
  xpHistory: '++id, [userId+date], userId, date',
  wrongAnswers: '++id, [userId+language], userId, timestamp',
  // P2 social features
  friends: '[userId+friendId], userId',
  studyGroups: '++groupId, ownerId',
  groupMembers: '[groupId+userId], groupId, userId',
  groupMessages: '++id, groupId, timestamp',
  leaderboardEntries: '[userId+period], userId',
  // P2 content features (with weekIndex for rotation)
  grammarLessons: '++id, language, difficulty, weekIndex',
  cultureArticles: '++id, language, category, weekIndex',
  videoLessons: '++id, language, category, weekIndex',
  lessonProgress: '[userId+lessonId], userId',
  // Content rotation metadata
  contentMetadata: 'key',
  // Character system (Task 2/4)
  characterConfigs: 'userId',
  characterGrowth: 'userId',
  characterSnapshots: '++id, userId',
});

// Seed default user if none exists
async function ensureDefaultUser() {
  const count = await db.userProfiles.count();
  if (count === 0) {
    const userId = 'user_' + Date.now();
    await db.userProfiles.add({
      userId,
      nickname: '语言学习者',
      avatar: null,
      gender: 'other',
      age: 25,
      occupation: '',
      freeTime: 'evening',
      currentLevel: { en: 'beginner', ja: 'beginner' },
      createdAt: Date.now(),
      totalXP: 0,
      streakDays: 0,
      targetLanguages: ['en', 'ja'],
      // 7-dimension profile (new fields)
      languageLevel: 'beginner',
      learningGoal: 'hobby',
      dailyMinutes: '15min',
      learningStyle: 'mixed',
      knownLanguages: ['zh-CN'],
      weakAreas: ['vocabulary'],
      studyTimePreference: 'evening',
    });
    return userId;
  }
  const first = await db.userProfiles.toCollection().first();
  return first.userId;
}

// Helper: get today's date string
function todayStr() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

// Record daily study log (enhanced with detailed activity tracking)
async function recordDailyLog(userId, minutes, questions, correct, xp, extra = {}) {
  const date = todayStr();
  const existing = await db.dailyLogs.get({ userId, date });
  if (existing) {
    const updates = {
      studyMinutes: existing.studyMinutes + minutes,
      totalQuestions: existing.totalQuestions + questions,
      correctCount: existing.correctCount + correct,
      earnedXP: existing.earnedXP + xp,
    };
    if (extra.completedLevelId && !existing.completedLevelIds?.includes(extra.completedLevelId)) {
      updates.completedLevelIds = [...(existing.completedLevelIds || []), extra.completedLevelId];
      updates.completedLevels = updates.completedLevelIds.length;
    }
    if (extra.newWords) updates.newWords = (existing.newWords || 0) + extra.newWords;
    if (extra.oralMinutes) updates.oralMinutes = (existing.oralMinutes || 0) + extra.oralMinutes;
    if (extra.writtenMinutes) updates.writtenMinutes = (existing.writtenMinutes || 0) + extra.writtenMinutes;
    if (extra.translationCount) updates.translationCount = (existing.translationCount || 0) + extra.translationCount;
    if (extra.grammarMinutes) updates.grammarMinutes = (existing.grammarMinutes || 0) + extra.grammarMinutes;
    if (extra.cultureMinutes) updates.cultureMinutes = (existing.cultureMinutes || 0) + extra.cultureMinutes;
    if (extra.videoMinutes) updates.videoMinutes = (existing.videoMinutes || 0) + extra.videoMinutes;
    // recalc accuracy
    const totalQ = updates.totalQuestions;
    updates.accuracy = totalQ > 0 ? Math.round((updates.correctCount / totalQ) * 100) : 0;
    await db.dailyLogs.update(existing, updates);
  } else {
    const completedLevelIds = extra.completedLevelId ? [extra.completedLevelId] : [];
    const totalQ = questions;
    await db.dailyLogs.add({
      userId, date,
      studyMinutes: minutes,
      completedLevels: completedLevelIds.length,
      completedLevelIds,
      totalQuestions: totalQ,
      correctCount: correct,
      earnedXP: xp,
      streakDay: 0,
      accuracy: totalQ > 0 ? Math.round((correct / totalQ) * 100) : 0,
      newWords: extra.newWords || 0,
      oralMinutes: extra.oralMinutes || 0,
      writtenMinutes: extra.writtenMinutes || 0,
      translationCount: extra.translationCount || 0,
      grammarMinutes: extra.grammarMinutes || 0,
      cultureMinutes: extra.cultureMinutes || 0,
      videoMinutes: extra.videoMinutes || 0,
    });
  }
}

// Record a single activity to daily log (lightweight wrapper)
async function recordActivity(userId, type, data = {}) {
  if (!userId || !window.db) return;
  const date = todayStr();
  const existing = await db.dailyLogs.get({ userId, date });
  const base = existing || {
    userId, date,
    studyMinutes: 0,
    completedLevels: 0,
    completedLevelIds: [],
    totalQuestions: 0,
    correctCount: 0,
    earnedXP: 0,
    streakDay: 0,
    accuracy: 0,
    newWords: 0,
    oralMinutes: 0,
    writtenMinutes: 0,
    translationCount: 0,
    grammarMinutes: 0,
    cultureMinutes: 0,
    videoMinutes: 0,
  };

  const updates = {};
  if (type === 'translation') {
    updates.translationCount = (base.translationCount || 0) + 1;
  }
  if (type === 'oral') {
    updates.oralMinutes = (base.oralMinutes || 0) + (data.minutes || 1);
  }
  if (type === 'written') {
    updates.writtenMinutes = (base.writtenMinutes || 0) + (data.minutes || 1);
    updates.totalQuestions = (base.totalQuestions || 0) + (data.questions || 0);
    updates.correctCount = (base.correctCount || 0) + (data.correct || 0);
    const totalQ = updates.totalQuestions;
    updates.accuracy = totalQ > 0 ? Math.round((updates.correctCount / totalQ) * 100) : 0;
  }
  if (type === 'wordbook') {
    updates.newWords = (base.newWords || 0) + (data.count || 1);
  }
  if (type === 'xp') {
    updates.earnedXP = (base.earnedXP || 0) + (data.amount || 0);
  }
  if (type === 'grammar') {
    updates.grammarMinutes = (base.grammarMinutes || 0) + (data.minutes || 3);
  }
  if (type === 'culture') {
    updates.cultureMinutes = (base.cultureMinutes || 0) + (data.minutes || 3);
  }
  if (type === 'video') {
    updates.videoMinutes = (base.videoMinutes || 0) + (data.minutes || 1);
  }

  if (existing) {
    await db.dailyLogs.update(existing, updates);
  } else {
    await db.dailyLogs.add({ ...base, ...updates });
  }
}

// Get daily reports for a date range (optimized: single bulk query instead of N individual gets)
async function getDailyReports(userId, days = 7) {
  if (!userId || !window.db) return [];
  const today = new Date();
  const endStr = today.toISOString().slice(0, 10);
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - days + 1);
  const startStr = startDate.toISOString().slice(0, 10);

  // Single bulk query using the compound index + date range filter
  const logs = await db.dailyLogs
    .where('userId').equals(userId)
    .and(r => r.date >= startStr && r.date <= endStr)
    .toArray();

  const logMap = new Map(logs.map(l => [l.date, l]));
  const results = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const log = logMap.get(dateStr);
    results.push({
      date: dateStr,
      weekday: ['日', '一', '二', '三', '四', '五', '六'][d.getDay()],
      ...log,
      studyMinutes: log?.studyMinutes || 0,
      earnedXP: log?.earnedXP || 0,
      totalQuestions: log?.totalQuestions || 0,
      correctCount: log?.correctCount || 0,
      accuracy: log?.accuracy || 0,
      completedLevels: log?.completedLevels || 0,
      newWords: log?.newWords || 0,
      oralMinutes: log?.oralMinutes || 0,
      writtenMinutes: log?.writtenMinutes || 0,
      translationCount: log?.translationCount || 0,
      grammarMinutes: log?.grammarMinutes || 0,
      cultureMinutes: log?.cultureMinutes || 0,
      videoMinutes: log?.videoMinutes || 0,
      streakDay: log?.streakDay || 0,
    });
  }
  return results;
}

// Streak helpers
async function getStreakRecord(userId, date) {
  if (!userId || !window.db) return null;
  return db.streakRecords.get({ userId, date });
}

async function recordStreakDay(userId, date, streakDay, activityCount = 1) {
  if (!userId || !window.db) return;
  const existing = await db.streakRecords.get({ userId, date });
  if (existing) {
    await db.streakRecords.update(existing, { activityCount: existing.activityCount + activityCount });
  } else {
    await db.streakRecords.add({ userId, date, streakDay, activityCount, protected: false });
  }
}

async function getStreakHistory(userId, days = 30) {
  if (!userId || !window.db) return [];
  const today = new Date();
  const endStr = today.toISOString().slice(0, 10);
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - days + 1);
  const startStr = startDate.toISOString().slice(0, 10);

  // Single bulk query instead of N individual gets
  const recs = await db.streakRecords
    .where('userId').equals(userId)
    .and(r => r.date >= startStr && r.date <= endStr)
    .toArray();

  const recMap = new Map(recs.map(r => [r.date, r]));
  const results = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const rec = recMap.get(dateStr);
    results.push({ date: dateStr, weekday: ['日','一','二','三','四','五','六'][d.getDay()], ...rec, activityCount: rec?.activityCount || 0, streakDay: rec?.streakDay || 0 });
  }
  return results;
}

async function protectStreakDay(userId, date) {
  if (!userId || !window.db) return;
  const rec = await db.streakRecords.get({ userId, date });
  if (rec) {
    await db.streakRecords.update(rec, { protected: true });
  }
}

// XP history helpers
async function addXPHistory(userId, amount, source) {
  if (!userId || !window.db) return;
  const date = todayStr();
  await db.xpHistory.add({ userId, date, amount, source, timestamp: Date.now() });
}

async function getXPHistory(userId, days = 30) {
  if (!userId || !window.db) return [];
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  return db.xpHistory.where('userId').equals(userId).and(r => r.date >= cutoffStr).toArray();
}

// Wrong answer tracking
async function recordWrongAnswer(userId, language, question) {
  if (!userId || !window.db) return;
  await db.wrongAnswers.add({ userId, language, question, timestamp: Date.now() });
}

async function getWeakQuestions(userId, language, limit = 20) {
  if (!userId || !window.db) return [];
  const recs = await db.wrongAnswers.where({ userId, language }).reverse().limit(limit).toArray();
  // group by question id and count frequency
  const map = {};
  recs.forEach(r => {
    const key = r.question?.id || r.question?.question;
    if (key) {
      if (!map[key]) map[key] = { question: r.question, count: 0 };
      map[key].count++;
    }
  });
  return Object.values(map).sort((a, b) => b.count - a.count);
}

// Scene progress helpers
async function updateSceneProgress(userId, sceneId, completedCountDelta = 1) {
  if (!userId || !window.db) return;
  const existing = await db.sceneProgress.get({ userId, sceneId });
  if (existing) {
    await db.sceneProgress.update(existing, {
      completedCount: existing.completedCount + completedCountDelta,
      lastPlayed: Date.now(),
    });
  } else {
    await db.sceneProgress.add({ userId, sceneId, completedCount: completedCountDelta, lastPlayed: Date.now() });
  }
}

async function getSceneProgress(userId) {
  if (!userId || !window.db) return {};
  const recs = await db.sceneProgress.where('userId').equals(userId).toArray();
  return Object.fromEntries(recs.map(r => [r.sceneId, r]));
}

// ---- Social helpers (P2) ----
async function seedMockFriends(userId) {
  if (!userId || !window.db) return;
  const count = await db.friends.where('userId').equals(userId).count();
  if (count > 0) return;
  const mockFriends = [
    { userId, friendId: 'mock_user_001', nickname: '小明', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=xiaoming', totalXP: 1250, streakDays: 12, accuracy: 85, joinedAt: Date.now() - 86400000 * 30 },
    { userId, friendId: 'mock_user_002', nickname: 'Amy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amy', totalXP: 3400, streakDays: 45, accuracy: 92, joinedAt: Date.now() - 86400000 * 60 },
    { userId, friendId: 'mock_user_003', nickname: 'Kenji', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kenji', totalXP: 890, streakDays: 5, accuracy: 78, joinedAt: Date.now() - 86400000 * 15 },
    { userId, friendId: 'mock_user_004', nickname: 'Sophie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sophie', totalXP: 2100, streakDays: 21, accuracy: 88, joinedAt: Date.now() - 86400000 * 45 },
    { userId, friendId: 'mock_user_005', nickname: 'Liu Wei', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liuwei', totalXP: 560, streakDays: 3, accuracy: 72, joinedAt: Date.now() - 86400000 * 10 },
  ];
  await db.friends.bulkAdd(mockFriends);
}

async function getFriends(userId) {
  if (!userId || !window.db) return [];
  await seedMockFriends(userId);
  return db.friends.where('userId').equals(userId).toArray();
}

async function addFriend(userId, friendId, nickname, avatar) {
  if (!userId || !window.db) return;
  const existing = await db.friends.get({ userId, friendId });
  if (existing) return false;
  await db.friends.add({ userId, friendId, nickname, avatar, totalXP: 0, streakDays: 0, accuracy: 0, joinedAt: Date.now() });
  return true;
}

async function removeFriend(userId, friendId) {
  if (!userId || !window.db) return;
  const existing = await db.friends.get({ userId, friendId });
  if (existing) await db.friends.delete(existing.id);
}

// Study groups
async function seedMockGroups(userId) {
  if (!userId || !window.db) return;
  const count = await db.studyGroups.count();
  if (count > 0) return;
  const groups = [
    { groupId: 'group_001', name: '英语每日打卡', description: '每天坚持学英语，互相监督', icon: '📚', ownerId: 'mock_user_001', memberCount: 24, createdAt: Date.now() - 86400000 * 40, language: 'en' },
    { groupId: 'group_002', name: '日语学习交流', description: '日语初学者互助小组', icon: '🎌', ownerId: 'mock_user_002', memberCount: 18, createdAt: Date.now() - 86400000 * 25, language: 'ja' },
    { groupId: 'group_003', name: '韩语追星学语', description: '通过K-pop学韩语', icon: '💜', ownerId: 'mock_user_003', memberCount: 32, createdAt: Date.now() - 86400000 * 55, language: 'ko' },
    { groupId: 'group_004', name: '西班牙语爱好者', description: 'Hola! 一起学西语', icon: '💃', ownerId: 'mock_user_004', memberCount: 15, createdAt: Date.now() - 86400000 * 20, language: 'es' },
  ];
  await db.studyGroups.bulkAdd(groups);
  // Add membership
  await db.groupMembers.bulkAdd([
    { groupId: 'group_001', userId, role: 'member', joinedAt: Date.now() - 86400000 * 10 },
    { groupId: 'group_002', userId, role: 'member', joinedAt: Date.now() - 86400000 * 5 },
  ]);
}

async function getStudyGroups(userId) {
  if (!userId || !window.db) return [];
  await seedMockGroups(userId);
  const allGroups = await db.studyGroups.toArray();
  const myMemberships = await db.groupMembers.where('userId').equals(userId).toArray();
  const myGroupIds = new Set(myMemberships.map(m => m.groupId));
  return allGroups.map(g => ({ ...g, isMember: myGroupIds.has(g.groupId) }));
}

async function joinGroup(userId, groupId) {
  if (!userId || !window.db) return;
  const existing = await db.groupMembers.get({ groupId, userId });
  if (existing) return false;
  await db.groupMembers.add({ groupId, userId, role: 'member', joinedAt: Date.now() });
  const group = await db.studyGroups.get(groupId);
  if (group) await db.studyGroups.update(groupId, { memberCount: group.memberCount + 1 });
  return true;
}

async function leaveGroup(userId, groupId) {
  if (!userId || !window.db) return;
  const existing = await db.groupMembers.get({ groupId, userId });
  if (existing) {
    await db.groupMembers.delete(existing.id);
    const group = await db.studyGroups.get(groupId);
    if (group) await db.studyGroups.update(groupId, { memberCount: Math.max(1, group.memberCount - 1) });
  }
}

async function createStudyGroup(ownerId, name, description, icon, language) {
  if (!ownerId || !window.db) return null;
  const groupId = 'group_' + Date.now();
  await db.studyGroups.add({ groupId, name, description, icon, ownerId, memberCount: 1, createdAt: Date.now(), language });
  await db.groupMembers.add({ groupId, userId: ownerId, role: 'owner', joinedAt: Date.now() });
  return groupId;
}

// Leaderboard
async function getLeaderboard(userId, period = 'weekly') {
  if (!userId || !window.db) return [];
  await seedMockFriends(userId);
  const friends = await db.friends.where('userId').equals(userId).toArray();
  const myProfile = await db.userProfiles.get(userId);
  const all = [
    { userId, nickname: myProfile?.nickname || '我', avatar: myProfile?.avatar, totalXP: myProfile?.totalXP || 0, streakDays: myProfile?.streakDays || 0, accuracy: 80, isMe: true },
    ...friends.map(f => ({ userId: f.friendId, nickname: f.nickname, avatar: f.avatar, totalXP: f.totalXP, streakDays: f.streakDays, accuracy: f.accuracy, isMe: false })),
  ];
  // Sort by XP for total, by weeklyXP for weekly (simulate)
  if (period === 'daily') {
    all.sort((a, b) => (b.dailyXP || b.totalXP % 200) - (a.dailyXP || a.totalXP % 200));
  } else if (period === 'weekly') {
    all.sort((a, b) => (b.weeklyXP || b.totalXP % 800) - (a.weeklyXP || a.totalXP % 800));
  } else {
    all.sort((a, b) => b.totalXP - a.totalXP);
  }
  return all.map((u, i) => ({ ...u, rank: i + 1 }));
}

// ---- Seed version constants ----
const GRAMMAR_SEED_VERSION = '3.0';
const CULTURE_SEED_VERSION = '3.0';
const VIDEO_SEED_VERSION = '3.0';

// ---- Weekly Content Pools (P2) ----
const WEEKLY_GRAMMAR_POOL = 
{0: [{id: "wgram_001_w0", language: "en", difficulty: "beginner", weekIndex: 0, title: "购物常用句型", duration: 4, description: "学习在商店购物时的基本句型", content: "购物时常用的英语句型包括：How much is this?（这个多少钱？）I would like to buy...（我想买...）Do you have...?（你们有...吗？）Can I try this on?（我能试穿吗？）", examples: ["How much is this shirt?", "Do you have this in blue?", "I will take it.", "Can I pay by card?"], xpReward: 15}, {id: "wgram_002_w0", language: "ja", difficulty: "beginner", weekIndex: 0, title: "買い物の表現", duration: 4, description: "日本での買い物に使う表現", content: "日本で買い物をする時の基本表現：いくらですか（多少钱？）これをください（请给我这个）カードで払えますか（可以刷卡吗？）", examples: ["これはいくらですか。", "これをください。", "袋はいりません。", "レシートをください。"], xpReward: 15}], 1: [{id: "wgram_001_w1", language: "en", difficulty: "intermediate", weekIndex: 1, title: "旅行问路句型", duration: 5, description: "旅行中问路和指路的地道表达", content: "旅行问路常用句型：Excuse me, how do I get to...?（请问怎么去...？）Is it far from here?（离这儿远吗？）Turn left at the traffic light.（在红绿灯处左转。）", examples: ["Excuse me, where is the nearest subway station?", "How long does it take to walk there?", "Go straight for two blocks."], xpReward: 20}, {id: "wgram_002_w1", language: "ja", difficulty: "beginner", weekIndex: 1, title: "道案内の表現", duration: 4, description: "道を尋ねたり案内したりする表現", content: "道を尋ねる表現：～はどこですか（...在哪里？）ここから遠いですか（离这儿远吗？）まっすぐ行ってください（请直走）", examples: ["駅はどこですか。", "ここから歩いて何分ですか。", "二つ目の信号を右に曲がってください。"], xpReward: 15}], 2: [{id: "wgram_001_w2", language: "en", difficulty: "intermediate", weekIndex: 2, title: "餐厅点餐句型", duration: 5, description: "在餐厅点餐和表达饮食偏好的句型", content: "餐厅点餐常用表达：I would like to order...（我想点...）What do you recommend?（有什么推荐？）I am allergic to...（我对...过敏）Could I have the bill?（买单）", examples: ["Could we see the menu, please?", "I will have the steak, medium rare.", "Could I get this without onions?"], xpReward: 20}, {id: "wgram_002_w2", language: "ko", difficulty: "beginner", weekIndex: 2, title: "식당에서 사용하는 표현", duration: 4, description: "한국 식당에서 사용하는 기본 표현", content: "한국 식당 표현：주문할게요（我要点菜）맵지 않게 해주세요（请做不辣的）계산해 주세요（请结账）", examples: ["메뉴판 좀 주세요.", "추천 메뉴가 뭐예요?", "맵기는 보통으로 해주세요."], xpReward: 15}], 3: [{id: "wgram_001_w3", language: "en", difficulty: "beginner", weekIndex: 3, title: "时间表达句型", duration: 4, description: "询问和表达时间的常用句型", content: "时间表达：What time is it?（现在几点？）It is half past three.（三点半。）I will meet you at 6 p.m.（我晚上6点见你。）", examples: ["What day is it today?", "My appointment is at 2:30.", "The meeting will last for an hour."], xpReward: 15}, {id: "wgram_002_w3", language: "es", difficulty: "beginner", weekIndex: 3, title: "Expresiones de tiempo", duration: 4, description: "Expresiones para hablar del tiempo en español", content: "Expresiones de tiempo：¿Qué hora es?（现在几点？）Son las tres y media.（三点半。）Nos vemos mañana.（明天见。）", examples: ["¿Qué día es hoy?", "La cita es a las dos.", "Hasta luego."], xpReward: 15}]};

const WEEKLY_CULTURE_POOL = 
{0: [{id: "wcult_001_w0", language: "en", category: "customs", weekIndex: 0, title: "西方购物礼仪", icon: "🛍️", readTime: 3, content: "在西方国家购物时，排队是基本礼仪。试衣间通常有人数限制，试完衣服需要放回原处或交给店员。退换货政策因店而异，保留好收据很重要。", facts: ["欧美国家排队意识很强", "黑色星期五是全年最大促销日", "很多商店周日不营业"], xpReward: 15}, {id: "wcult_002_w0", language: "ja", category: "customs", weekIndex: 0, title: "日本百元店文化", icon: "🏪", readTime: 3, content: "日本的百元店（100円ショップ）是一种非常独特的零售文化。从食品到日用品，几乎所有商品都以100日元（约5元人民币）的价格出售。大创（Daiso）是最著名的百元店品牌。", facts: ["百元店商品种类繁多", "大创在全球多个国家开店", "日本还有300円ショップ"], xpReward: 15}], 1: [{id: "wcult_001_w1", language: "en", category: "customs", weekIndex: 1, title: "不同国家的交通文化", icon: "🚆", readTime: 4, content: "英国的地铁没有空调，夏天非常闷热。日本的电车以准时而闻名，误点几分钟就会发道歉声明。德国的火车系统覆盖广泛，是欧洲最便捷的出行方式之一。", facts: ["伦敦地铁是世界上最古老的地铁", "新干线最高时速可达320公里", "德国高铁ICE连接主要城市"], xpReward: 20}, {id: "wcult_002_w1", language: "ja", category: "customs", weekIndex: 1, title: "日本温泉旅馆", icon: "♨️", readTime: 3, content: "温泉旅馆（旅館）是日本传统住宿形式的代表。客人通常穿着浴衣（ゆかた），在榻榻米房间里休息。一泊二食（住一晚含两餐）是标准的住宿方案。", facts: ["温泉旅馆通常有和式与洋式房间", "晚餐多为怀石料理", "温泉需裸体入浴"], xpReward: 15}], 2: [{id: "wcult_001_w2", language: "en", category: "food", weekIndex: 2, title: "各国餐桌礼仪", icon: "🍽️", readTime: 4, content: "在法国，双手应该放在桌上（不是腿上）。在中国，转动圆桌时应先让长辈夹菜。在日本，不可把筷子插在米饭中（这是祭祀时的做法）。在意大利，早餐喝咖啡而非卡布奇诺。", facts: ["法国人吃饭时双手放桌上", "日本筷子不可插饭", "意大利人午后不喝卡布奇诺", "中国圆桌礼仪以长辈为先"], xpReward: 20}, {id: "wcult_002_w2", language: "ko", category: "food", weekIndex: 2, title: "韩国饮食文化", icon: "🥘", readTime: 3, content: "韩国饮食以发酵食品为特色，泡菜（김치）是每餐必备。韩国人习惯共食，会用自己的筷子从公共菜盘夹菜。吃饭时一手端碗是礼貌的表现。", facts: ["韩国有200多种泡菜", "韩餐讲究五色五味", "烧酒是韩国最常见的酒"], xpReward: 15}], 3: [{id: "wcult_001_w3", language: "en", category: "customs", weekIndex: 3, title: "各国时间观念差异", icon: "⏰", readTime: 3, content: "德国和瑞士以守时著称，迟到几分钟就会被认为不礼貌。拉丁美洲国家的时间观念较为宽松，\"现在\"可能指接下来的几小时。在日本，电车误点几分钟就会发道歉声明。", facts: ["德国人非常注重守时", "拉丁美洲时间观念较宽松", "日本电车误点会发致歉声明"], xpReward: 15}, {id: "wcult_002_w3", language: "es", category: "customs", weekIndex: 3, title: "La Siesta y el Ritmo de Vida", icon: "😴", readTime: 3, content: "西班牙的午睡文化（Siesta）是慢生活哲学的体现。虽然大城市中这一传统逐渐消失，但在南部小镇仍然盛行。西班牙人晚餐时间通常在晚上9点以后。", facts: ["西班牙晚餐时间晚于多数国家", "Siesta 传统源于炎热气候", "西班牙人年均工作时长低于欧洲平均"], xpReward: 15}]};

const WEEKLY_VIDEO_POOL = 
{0: [{id: "wvid_001_w0", language: "en", category: "daily", weekIndex: 0, title: "超市购物对话", duration: 30, description: "在超市与店员的对话", thumbnail: "🛒", dialogue: [{speaker: "clerk", text: "Can I help you find something?"}, {speaker: "user", text: "Yes, where is the dairy section?"}, {speaker: "clerk", text: "It is in aisle 3, on your right."}], xpReward: 20}, {id: "wvid_002_w0", language: "ja", category: "daily", weekIndex: 0, title: "コンビニで買い物", duration: 25, description: "日本便利店购物对话", thumbnail: "🏪", dialogue: [{speaker: "clerk", text: "いらっしゃいませ！"}, {speaker: "user", text: "このおにぎりをください。"}, {speaker: "clerk", text: "かしこまりました。お箸はいりますか？"}], xpReward: 20}], 1: [{id: "wvid_001_w1", language: "en", category: "daily", weekIndex: 1, title: "机场值机对话", duration: 30, description: "在机场办理登机手续", thumbnail: "🛫", dialogue: [{speaker: "staff", text: "May I see your passport and ticket?"}, {speaker: "user", text: "Here you are. I would like a window seat."}, {speaker: "staff", text: "Certainly. Your gate is 12."}], xpReward: 20}, {id: "wvid_002_w1", language: "ja", category: "daily", weekIndex: 1, title: "駅で道を尋ねる", duration: 25, description: "在日本车站问路", thumbnail: "🚉", dialogue: [{speaker: "user", text: "すみません、新宿駅はどこですか。"}, {speaker: "local", text: "まっすぐ行って、右に曲がってください。"}, {speaker: "user", text: "ありがとうございます！"}], xpReward: 20}], 2: [{id: "wvid_001_w2", language: "en", category: "daily", weekIndex: 2, title: "餐厅点餐对话", duration: 30, description: "在西餐厅点菜", thumbnail: "🍽️", dialogue: [{speaker: "waiter", text: "Are you ready to order?"}, {speaker: "user", text: "Yes, I would like the grilled salmon."}, {speaker: "waiter", text: "Would you like a side salad with that?"}], xpReward: 20}, {id: "wvid_002_w2", language: "ko", category: "daily", weekIndex: 2, title: "한국 식당에서", duration: 25, description: "韩国餐厅点餐", thumbnail: "🥢", dialogue: [{speaker: "staff", text: "어서 오세요. 몇 분이세요?"}, {speaker: "user", text: "두 명이에요. 메뉴판 좀 주세요."}, {speaker: "staff", text: "네, 여기 있습니다. 추천 메뉴는 불고기예요."}], xpReward: 20}], 3: [{id: "wvid_001_w3", language: "en", category: "daily", weekIndex: 3, title: "约时间见面", duration: 25, description: "与朋友约定见面时间", thumbnail: "📅", dialogue: [{speaker: "user", text: "Are you free this Saturday afternoon?"}, {speaker: "friend", text: "Yes, I am. What time works for you?"}, {speaker: "user", text: "How about 3 p.m. at the coffee shop?"}], xpReward: 20}, {id: "wvid_002_w3", language: "es", category: "daily", weekIndex: 3, title: "Pedir la hora", duration: 25, description: "用西班牙语问时间", thumbnail: "⏰", dialogue: [{speaker: "user", text: "Disculpe, ¿qué hora es?"}, {speaker: "local", text: "Son las tres y media."}, {speaker: "user", text: "Muchas gracias."}], xpReward: 20}]};

// ---- Content seeding (P2) ----

async function seedGrammarLessons() {
  if (!window.db) return;
  const activeWeek = getActiveWeek();

  // Version-based re-seeding: old users get new base content
  const versionMeta = await db.contentMetadata.get('grammar_seed_version');
  if (versionMeta?.value !== GRAMMAR_SEED_VERSION) {
    // Clear all grammar lessons and re-seed from scratch
    await db.grammarLessons.clear();
    await db.contentMetadata.delete('grammar_seeded_weeks');
    await db.contentMetadata.put({ key: 'grammar_seed_version', value: GRAMMAR_SEED_VERSION });
  }

  const meta = await db.contentMetadata.get('grammar_seeded_weeks');
  const seededWeeks = meta?.value || [];
  if (seededWeeks.includes(activeWeek)) return;

  const hasBase = (await db.grammarLessons.where('weekIndex').equals(-1).limit(1).toArray()).length > 0;
  if (!hasBase) {
    const baseLessons = [
    {id: "grammar_001", language: "en", difficulty: "beginner", weekIndex: -1, title: "一般现在时", duration: 3, description: "表示经常性、习惯性的动作或状态", content: "一般现在时（Simple Present）用于描述经常性、习惯性的动作或普遍真理。结构：主语 + 动词原形（第三人称单数加-s）。例句：I go to school every day. / She speaks English.", examples: ["I play basketball on weekends.", "The sun rises in the east.", "He works in a hospital."], xpReward: 15},
    {id: "grammar_002", language: "en", difficulty: "beginner", weekIndex: -1, title: "现在进行时", duration: 4, description: "表示此时此刻正在进行的动作", content: "现在进行时（Present Continuous）用于描述当前正在发生的动作。结构：主语 + am/is/are + 动词-ing。例句：I am reading a book now. / They are playing football.", examples: ["She is cooking dinner.", "We are watching TV.", "The baby is sleeping."], xpReward: 15},
    {id: "grammar_003", language: "en", difficulty: "intermediate", weekIndex: -1, title: "现在完成时", duration: 5, description: "表示过去发生但与现在有关联的动作", content: "现在完成时（Present Perfect）连接过去与现在。结构：主语 + have/has + 过去分词。例句：I have visited Paris twice. / She has finished her homework.", examples: ["I have lost my keys.", "They have lived here for 10 years.", "Have you ever been to Japan?"], xpReward: 20},
    {id: "grammar_004", language: "en", difficulty: "intermediate", weekIndex: -1, title: "被动语态", duration: 4, description: "强调动作的承受者而非执行者", content: "被动语态（Passive Voice）用于强调动作的承受者。结构：主语 + be + 过去分词 + (by + 执行者)。例句：The cake was eaten by the dog. / English is spoken worldwide.", examples: ["The letter was written by Mary.", "The window was broken.", "This book was published in 2020."], xpReward: 20},
    {id: "grammar_005", language: "en", difficulty: "advanced", weekIndex: -1, title: "虚拟语气", duration: 5, description: "表示与事实相反的假设", content: "虚拟语气（Subjunctive Mood）用于表达假设、愿望或建议。If I were you, I would study harder. / I wish I had more time.", examples: ["If I won the lottery, I would travel.", "I suggest that he see a doctor.", "It is important that she be on time."], xpReward: 25},
    {id: "grammar_006", language: "en", difficulty: "beginner", weekIndex: -1, title: "冠词 a/an/the", duration: 3, description: "英语中名词前的限定词", content: "不定冠词 a/an 用于泛指，定冠词 the 用于特指。a 用于辅音音素前，an 用于元音音素前。例：a book, an apple, the sun.", examples: ["I have a dog.", "She ate an orange.", "The moon is bright tonight."], xpReward: 10},
    {id: "grammar_007", language: "en", difficulty: "intermediate", weekIndex: -1, title: "条件句 if", duration: 4, description: "真实条件与虚拟条件的区别", content: "第一类条件句（真实可能）：If it rains, I will stay home. 第二类（虚拟现在）：If I were rich, I would buy a house. 第三类（虚拟过去）：If I had studied, I would have passed.", examples: ["If you heat ice, it melts.", "If I knew the answer, I would tell you.", "If she had left earlier, she wouldn't have missed the train."], xpReward: 20},
    {id: "grammar_008", language: "en", difficulty: "beginner", weekIndex: -1, title: "一般过去时", duration: 4, description: "表示过去发生的动作或状态", content: "一般过去时（Simple Past）用于描述过去发生的动作。规则动词加-ed，不规则动词需记忆。例句：I watched a movie yesterday. / She went to Paris last year.", examples: ["He played tennis yesterday.", "We visited the museum.", "They lived in London for five years."], xpReward: 15},
    {id: "grammar_009", language: "en", difficulty: "intermediate", weekIndex: -1, title: "定语从句", duration: 5, description: "用关系代词连接主从句", content: "定语从句修饰名词，关系代词 who（人）、which（物）、that（人或物）引导。例：The man who lives next door is a doctor. / This is the book that I bought.", examples: ["The teacher who helped me is very kind.", "The city which I visited was beautiful.", "This is the restaurant that serves Italian food."], xpReward: 20},
    {id: "grammar_010", language: "en", difficulty: "intermediate", weekIndex: -1, title: "间接引语", duration: 4, description: "转述他人的话", content: "间接引语（Reported Speech）用于转述他人的话。时态通常后退一步，人称、时间状语也需相应变化。例：He said, 'I am tired.' → He said that he was tired.", examples: ["She said she was busy.", "He told me that he would come.", "They asked if I had finished."], xpReward: 20},
    {id: "grammar_011", language: "en", difficulty: "beginner", weekIndex: -1, title: "情态动词 can/may/must", duration: 4, description: "表达能力、许可和义务", content: "can 表示能力或请求许可，may 表示正式许可或可能，must 表示义务或推测。例：I can swim. / You may leave now. / We must finish on time.", examples: ["Can you help me?", "You must wear a seatbelt.", "It may rain tomorrow."], xpReward: 15},
    {id: "grammar_012", language: "en", difficulty: "intermediate", weekIndex: -1, title: "比较级与最高级", duration: 4, description: "形容词和副词的比较形式", content: "比较级用于两者比较（-er / more），最高级用于三者及以上（-est / most）。例：tall → taller → tallest; beautiful → more beautiful → most beautiful.", examples: ["She is taller than her sister.", "This is the most interesting book.", "He runs faster than me."], xpReward: 15},
    {id: "grammar_ja_001", language: "ja", difficulty: "beginner", weekIndex: -1, title: "日语五十音", duration: 5, description: "日语的基础发音系统", content: "五十音图是日语的基础，包含平假名和片假名。あいうえお、かきくけこ... 掌握五十音是学习日语的第一步。", examples: ["あ - a", "い - i", "う - u"], xpReward: 15},
    {id: "grammar_ja_002", language: "ja", difficulty: "beginner", weekIndex: -1, title: "助词「は」「が」", duration: 4, description: "日语中最常用的两个助词", content: "「は」用于提示主题，「が」用于提示主语。私は学生です（我是学生）。私が学生です（我才是学生）。", examples: ["私は日本人です。", "猫が好きです。", "これは本です。"], xpReward: 15},
    {id: "grammar_ja_003", language: "ja", difficulty: "beginner", weekIndex: -1, title: "动词ます形", duration: 4, description: "日语动词的礼貌形", content: "ます形是日语动词的礼貌体。一类动词：書く→書きます；二类动词：食べる→食べます；三类动词：する→します、来る→来ます。", examples: ["行きます", "食べます", "します"], xpReward: 15},
    {id: "grammar_ja_004", language: "ja", difficulty: "intermediate", weekIndex: -1, title: "て形与连接", duration: 5, description: "用て形连接多个动作", content: "て形用于连接两个以上的动作，表示顺序、原因、方式等。一类动词：書く→書いて；二类动词：食べる→食べて；三类动词：する→して。", examples: ["朝ご飯を食べて、学校へ行きます。", "窓を開けて、寝ました。", "電話をしてから、出かけます。"], xpReward: 20},
    {id: "grammar_ja_005", language: "ja", difficulty: "intermediate", weekIndex: -1, title: "敬语入门", duration: 5, description: "尊敬语与谦让语的基本用法", content: "敬语分为尊敬语（抬高对方）、谦让语（贬低自己）和礼貌语。お/ご～になる（尊敬），お/ご～する（谦让）。例：行く→いらっしゃる（尊敬）→参る（谦让）。", examples: ["社長はいらっしゃいますか。", "私が参ります。", "お待ちしております。"], xpReward: 20},
    {id: "grammar_ja_006", language: "ja", difficulty: "beginner", weekIndex: -1, title: "形容词与い/な", duration: 4, description: "い形容词与な形容词的区别", content: "い形容词以い结尾，直接修饰名词：美味しい料理。な形容词以だ结尾，修饰名词时加な：静かな部屋。", examples: ["高い山", "きれいな花", "有名な人"], xpReward: 15},
    {id: "grammar_ja_007", language: "ja", difficulty: "intermediate", weekIndex: -1, title: "授受动词", duration: 4, description: "あげる/もらう/くれる的用法", content: "あげる：我给别人；もらう：我从别人得到；くれる：别人给我。方向不同，用法不同。例：私は友達に本をあげた。/ 私は友達に本をもらった。", examples: ["先生に花を差し上げます。", "母にプレゼントをもらいました。", "友達が助けてくれた。"], xpReward: 20},
    {id: "grammar_ja_008", language: "ja", difficulty: "intermediate", weekIndex: -1, title: "条件表达「と」「ば」「たら」「なら」", duration: 5, description: "四种条件表达的区分", content: "と：自然结果（春になると、花が咲く）；ば：假设条件（雨が降れば、出かけない）；たら：发现、建议（東京に着いたら、電話してください）；なら：话题转移（日本語なら、できます）。", examples: ["冬になると、寒くなります。", "早く行けば、間に合います。", "時間があったら、映画を見ましょう。"], xpReward: 20},
    {id: "grammar_ko_001", language: "ko", difficulty: "beginner", weekIndex: -1, title: "韩语基本问候", duration: 4, description: "学习韩语中最常用的问候语", content: "韩语问候语：안녕하세요（您好）감사합니다（谢谢）죄송합니다（对不起）안녕히 가세요（再见）。韩语有敬语体系，对长辈和上级需要使用敬语。", examples: ["안녕하세요! 만나서 반갑습니다.", "감사합니다!", "죄송합니다."], xpReward: 15},
    {id: "grammar_ko_002", language: "ko", difficulty: "beginner", weekIndex: -1, title: "韩语助词 이/가", duration: 4, description: "韩语主格助词的基本用法", content: "이/가 是韩语的主格助词，表示句子的主语。이 用于有尾音的名词后，가 用于无尾音的名词后。例：책이（书）연필이（铅笔）사과가（苹果）。", examples: ["책이 있어요.", "사과가 맛있어요.", "학교가 커요."], xpReward: 15},
    {id: "grammar_ko_003", language: "ko", difficulty: "beginner", weekIndex: -1, title: "韩语语尾 요", duration: 4, description: "敬语语尾的基本用法", content: "-요 是韩语中最常用的敬语语尾，加在动词/形容词词干后表示礼貌。例：가다→가요；먹다→먹어요；예쁘다→예뻐요。", examples: ["학교에 가요.", "밥을 먹어요.", "친구가 예뻐요."], xpReward: 15},
    {id: "grammar_ko_004", language: "ko", difficulty: "intermediate", weekIndex: -1, title: "韩语过去时", duration: 4, description: "动词过去时的构成", content: "韩语过去时：动词词干 + -았/었/였- + 语尾。有尾音용 오/아 结尾用 -았-；其他用 -었-；以 하다 结尾用 -였-。例：가다→갔어요；먹다→먹었어요。", examples: ["어제 영화를 봤어요.", "밥을 많이 먹었어요.", "친구를 만났어요."], xpReward: 20},
    {id: "grammar_ko_005", language: "ko", difficulty: "intermediate", weekIndex: -1, title: "韩语否定句", duration: 4, description: "表示否定的方式", content: "韩语否定：안 + 动词（안 가요）；动词 + 지 않다（가지 않아요）；못 + 动词（不能：못 가요）。主观意愿用 안，客观能力用 못。", examples: ["안 먹어요.", "가지 않아요.", "비가 와서 못 갔어요."], xpReward: 20},
    {id: "grammar_ko_006", language: "ko", difficulty: "beginner", weekIndex: -1, title: "韩语助词 은/는", duration: 4, description: "主题助词的基本用法", content: "은/는 是韩语的主题助词，用于提示话题。은 用于有尾音的名词后，는 用于无尾音的名词后。例：저는（我）학생은（学生）。", examples: ["저는 학생이에요.", "한국은 아름다워요.", "이것은 책이에요."], xpReward: 15},
    {id: "grammar_es_001", language: "es", difficulty: "beginner", weekIndex: -1, title: "西班牙语动词变位", duration: 5, description: "学习西班牙语规则动词的现在时变位", content: "西班牙语动词分为三类：-ar, -er, -ir。以 hablar（说话）为例：yo hablo, tú hablas, él/ella habla, nosotros hablamos, vosotros habláis, ellos hablan。", examples: ["Yo hablo español.", "Tú comes manzanas.", "Ella vive en Madrid."], xpReward: 15},
    {id: "grammar_es_002", language: "es", difficulty: "beginner", weekIndex: -1, title: "西班牙语阴阳性", duration: 4, description: "学习西班牙语名词的性和冠词搭配", content: "西班牙语中，以 -o 结尾的名词通常是阳性（un libro），以 -a 结尾的名词通常是阴性（una mesa）。阳性冠词用 un/el，阴性冠词用 una/la。", examples: ["un libro", "una mesa", "el amigo", "la amiga"], xpReward: 15},
    {id: "grammar_es_003", language: "es", difficulty: "intermediate", weekIndex: -1, title: "西班牙语ser与estar", duration: 5, description: "两个「是」的区别用法", content: "ser 用于本质属性、身份、时间（Soy médico / Es lunes）；estar 用于状态、位置、情绪（Estoy cansado / Está en Madrid）。记住：「你怎么了」用 estar，「你是什么」用 ser。", examples: ["Soy estudiante.", "Estoy en casa.", "La sopa está caliente.", "El libro es interesante."], xpReward: 20},
    {id: "grammar_es_004", language: "es", difficulty: "intermediate", weekIndex: -1, title: "西班牙语过去时", duration: 5, description: "简单过去时与过去未完成时", content: "简单过去时（Pretérito）用于完成的动作（Ayer comí paella）；过去未完成时（Imperfecto）用于持续状态或习惯（Cuando era niño, jugaba mucho）。", examples: ["Ayer fui al cine.", "Cuando era joven, vivía en Barcelona.", "Anoche dormí muy bien."], xpReward: 20},
    {id: "grammar_ru_001", language: "ru", difficulty: "beginner", weekIndex: -1, title: "俄语名词变格", duration: 5, description: "学习俄语名词的性和格变化", content: "俄语名词有三种性：阳性、阴性、中性。阳性多以辅音结尾（стол），阴性多以 -a/-я 结尾（книга），中性多以 -o/-e 结尾（окно）。名词有六个格的变化。", examples: ["Это стол.", "Это книга.", "Это окно."], xpReward: 15},
    {id: "grammar_ru_002", language: "ru", difficulty: "beginner", weekIndex: -1, title: "俄语动词быть", duration: 4, description: "俄语动词「是」的用法", content: "俄语动词 быть（是）在现在时通常省略。例：Я студент（我是学生）。过去时：был（阳）、была（阴）、было（中）、были（复）。", examples: ["Он был дома.", "Она была учительницей.", "Они были в Москве."], xpReward: 15},
    {id: "grammar_ru_003", language: "ru", difficulty: "intermediate", weekIndex: -1, title: "俄语形容词变格", duration: 5, description: "形容词随名词性数格变化", content: "俄语形容词有性、数、格的变化，必须与名词一致。以 новый 为例：новый стол（阳性）、новая книга（阴性）、новое окно（中性）、новые столы（复数）。", examples: ["Красивый дом", "Умная девочка", "Большое окно"], xpReward: 20},
    {id: "grammar_ru_004", language: "ru", difficulty: "intermediate", weekIndex: -1, title: "俄语运动动词", duration: 5, description: "定向与不定向运动动词", content: "俄语运动动词分定向（单程、具体）和不定向（往返、习惯）。идти（定向）vs ходить（不定向）；ехать vs ездить。例：Я иду в школу（我正在去学校）。Я хожу в школу（我上学）。", examples: ["Он идёт в магазин.", "Мы ходим в парк каждый день.", "Она едет в Москву."], xpReward: 20},
    {id: "grammar_yue_001", language: "yue", difficulty: "beginner", weekIndex: -1, title: "粤语量词", duration: 4, description: "学习粤语中常用的量词", content: "粤语量词与普通话有相似之处也有差异。个（go3）是最通用的量词：一个人、一个苹果。只（zek3）用于动物：一只猫。张（zoeng1）用于平面物品：一张纸。", examples: ["一个人", "一只猫", "一张纸"], xpReward: 15},
    {id: "grammar_yue_002", language: "yue", difficulty: "intermediate", weekIndex: -1, title: "粤语疑问句式", duration: 4, description: "粤语的疑问表达方式", content: "粤语疑问句常用「咩」（什么）、「点解」（为什么）、「几钱」（多少钱）。系唔系...（是不是...）是最常用的疑问句式。例：你系唔系学生？（你是不是学生？）", examples: ["你食咗饭未？", "呢个几钱？", "你叫咩名？"], xpReward: 15},
    {id: "grammar_yue_003", language: "yue", difficulty: "beginner", weekIndex: -1, title: "粤语语气助词", duration: 4, description: "常用语气助词的语义功能", content: "粤语语气助词丰富：嘅（ge3）表所属；咗（zo2）表完成；紧（gan2）表进行；吓（ha5）表尝试。例：我食咗饭（我吃了饭）；我食紧饭（我正在吃饭）。", examples: ["我嘅书", "佢去咗边？", "你做紧咩？"], xpReward: 15},
    {id: "grammar_de_001", language: "de", difficulty: "beginner", weekIndex: -1, title: "德语名词的性", duration: 4, description: "学习德语名词的阴阳中性及冠词", content: "德语中每个名词都有性：阳性 der（der Mann），阴性 die（die Frau），中性 das（das Kind）。复数都用 die。需要记忆每个名词的性。", examples: ["der Tisch（桌子）", "die Tür（门）", "das Fenster（窗户）"], xpReward: 15},
    {id: "grammar_fr_001", language: "fr", difficulty: "beginner", weekIndex: -1, title: "法语动词 être", duration: 4, description: "学习法语最重要的动词 être（是）", content: "Être 是法语中最常用的动词之一，意为「是」。变位：je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont。", examples: ["Je suis étudiant.", "Elle est médecin.", "Nous sommes français."], xpReward: 15},
    {id: "grammar_it_001", language: "it", difficulty: "beginner", weekIndex: -1, title: "意大利语动词 essere", duration: 4, description: "学习意大利语动词 essere（是）", content: "Essere 是意大利语核心动词，意为「是」。变位：io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono。", examples: ["Io sono italiano.", "Lei è professoressa.", "Noi siamo amici."], xpReward: 15},
        {id: "grammar_zh-CN_001", language: "zh-CN", difficulty: "beginner", weekIndex: -1, title: "中文四声调", duration: 5, description: "汉语拼音的四个声调及变调规则", content: "汉语是声调语言，四个声调分别是：第一声（高平，ˉ）、第二声（上升，ˊ）、第三声（降升，ˇ）、第四声（下降，ˋ）。例如：mā（妈）、má（麻）、mǎ（马）、mà（骂）。两个三声连读时，第一个变为第二声（你好 nǐhǎo → níhǎo）。", examples: ["mā妈、má麻、mǎ马、mà骂", "你好 nǐhǎo → níhǎo", "一 yī 在第四声前变 yí"], xpReward: 15},
    {id: "grammar_zh-CN_002", language: "zh-CN", difficulty: "beginner", weekIndex: -1, title: "中文量词入门", duration: 4, description: "外国人学中文必须掌握的常用量词", content: "中文中数词和名词之间需要加量词。常用量词：个（通用）、本（书籍）、张（平面物品）、条（长形物品）、只（动物）。例：一本书、两张纸、三条鱼、四只猫。量词不能省略，说「一书」是不正确的。", examples: ["一本书 yì běn shū", "两张纸 liǎng zhāng zhǐ", "三只猫 sān zhī māo", "五个人 wǔ gè rén"], xpReward: 15},
    {id: "grammar_pt_001", language: "pt", difficulty: "beginner", weekIndex: -1, title: "葡萄牙语动词变位", duration: 5, description: "学习规则动词的现在时变位", content: "葡萄牙语动词分为三类：-ar, -er, -ir。以 falar（说话）为例：eu falo, tu falas, ele/ela fala, nós falamos, vocês falam。第二变位 comer：eu como, tu comes, ele come。", examples: ["Eu falo português.", "Ele come peixe.", "Nós vivimos em Lisboa.", "Vocês bebem café?"], xpReward: 15},
    {id: "grammar_pt_002", language: "pt", difficulty: "beginner", weekIndex: -1, title: "葡萄牙语定冠词", duration: 4, description: "定冠词与名词性数一致", content: "葡萄牙语定冠词：o（阳性单数）、a（阴性单数）、os（阳性复数）、as（阴性复数）。不定冠词：um（阳性）、uma（阴性）。例：o livro（书）、a mesa（桌子）、um homem（一个男人）、uma mulher（一个女人）。", examples: ["o livro（书）", "a mesa（桌子）", "os carros（汽车们）", "as casas（房子们）"], xpReward: 15},
    {id: "grammar_ar_001", language: "ar", difficulty: "beginner", weekIndex: -1, title: "阿拉伯语字母与书写", duration: 5, description: "阿拉伯语28个字母及从右向左书写", content: "阿拉伯语有28个字母，书写从右向左。字母在词首、词中、词尾有不同形态。没有大小写区分。阿拉伯语属于闪含语系，词根通常由三个辅音组成。", examples: ["ألف (A)", "باء (B)", "تاء (T)", "كتاب (book)"], xpReward: 15},
    {id: "grammar_ar_002", language: "ar", difficulty: "beginner", weekIndex: -1, title: "阿拉伯语定冠词 ال", duration: 4, description: "定冠词 ال 的用法及太阳字母/月亮字母", content: "阿拉伯语定冠词 ال（al-）加在名词前表示特指。后面的字母分为太阳字母和月亮字母：太阳字母使 l 被同化（الشمس → ash-shams），月亮字母保留 l（القمر → al-qamar）。", examples: ["الكتاب (the book)", "الشمس (the sun) → ash-shams", "القمر (the moon) → al-qamar", "البيت (the house) → al-bayt"], xpReward: 15},
    {id: "grammar_hi_001", language: "hi", difficulty: "beginner", weekIndex: -1, title: "印地语基础问候与代词", duration: 4, description: "常用问候语和人称代词", content: "印地语问候语：नमस्ते（Namaste，你好）、धन्यवाद（Dhanyavaad，谢谢）、माफ़ करना（Maaf karna，对不起）。人称代词：मैं（我）、तुम（你，非正式）、आप（您，正式）、हम（我们）。", examples: ["नमस्ते! (Namaste!)", "मैं अच्छा हूँ. (I am fine.)", "आप कैसे हैं? (How are you?)", "धन्यवाद! (Thank you!)"], xpReward: 15},
    {id: "grammar_hi_002", language: "hi", difficulty: "intermediate", weekIndex: -1, title: "印地语动词时态", duration: 5, description: "现在时、过去时和将来时的基本构成", content: "印地语动词以ना结尾（如 करना「做」、खाना「吃」）。现在时：हूँ/है/हैं（是）+ 动词词干。过去时：था/थी/थे（was/were）结构。将来时：गा/गी/गे 后缀。", examples: ["मैं खाता हूँ. (I eat.)", "वह गया. (He went.)", "मैं जाऊँगा. (I will go.)", "तुम खाओगे. (You will eat.)"], xpReward: 20},
    {id: "grammar_th_001", language: "th", difficulty: "beginner", weekIndex: -1, title: "泰语声调与发音", duration: 5, description: "泰语五个声调及中高低辅音", content: "泰语有五个声调：中平、低平、降调、高平、升调。辅音分为中辅音、高辅音、低辅音三类，配合长短元音决定声调。例：มา（来，中平）、หมา（狗，高平）、ม้า（马，升调）。", examples: ["มา mā（来）", "หมา mǎa（狗）", "ม้า má（马）", "ม่า mâ（妈，俚语）"], xpReward: 15},
    {id: "grammar_th_002", language: "th", difficulty: "beginner", weekIndex: -1, title: "泰语礼貌语尾", duration: 4, description: "ครับ/ค่ะ 的用法及敬语体系", content: "泰语中 ครับ（khrap，男性用）和 ค่ะ（kha，女性用）是表示礼貌的语尾助词，几乎每句话都可以加。男性用 ครับ，女性用 ค่ะ（陈述句）或 คะ（疑问句）。", examples: ["สวัสดีครับ. (Hello - male)", "สวัสดีค่ะ. (Hello - female)", "ขอบคุณครับ. (Thank you - male)", "ใช่ค่ะ. (Yes - female)"], xpReward: 15},
    {id: "grammar_vi_001", language: "vi", difficulty: "beginner", weekIndex: -1, title: "越南语声调", duration: 4, description: "越南语六个声调及发音特点", content: "越南语有六个声调：平声（ma）、锐声（má）、玄声（mà）、问声（mả）、跌声（mã）、重声（mạ）。声调不同，词义完全不同。越南语使用拉丁字母拼写（国语字）。", examples: ["ma（鬼）", "má（妈妈）", "mà（但是）", "mạ（稻）"], xpReward: 15},
    {id: "grammar_vi_002", language: "vi", difficulty: "beginner", weekIndex: -1, title: "越南语量词与 classifier", duration: 4, description: "越南语常用量词及用法", content: "越南语量词（classifier）丰富：cái（通用，用于物品）、con（用于动物）、ngườí（用于人）、quyển/cuốn（用于书）。数词+量词+名词的顺序。例：một cuốn sách（一本书）。", examples: ["một cuốn sách（一本书）", "hai con mèo（两只猫）", "ba ngườí bạn（三个朋友）", "một cái bàn（一张桌子）"], xpReward: 15},
    {id: "grammar_tr_001", language: "tr", difficulty: "beginner", weekIndex: -1, title: "土耳其语元音和谐", duration: 5, description: "前后元音和谐律的基本规则", content: "土耳其语有元音和谐律：前元音（e, i, ö, ü）后跟前元音，后元音（a, ı, o, u）后跟后元音。例：ev-ler（房子们，前元音）、kapı-lar（门们，后元音）。后缀根据词根元音变化。", examples: ["evler（房子们）", "kapılar（门们）", "gözler（眼睛们）", "kollar（胳膊们）"], xpReward: 15},
    {id: "grammar_tr_002", language: "tr", difficulty: "beginner", weekIndex: -1, title: "土耳其语后缀系统", duration: 4, description: "通过后缀表达格和时态", content: "土耳其语是典型的黏着语，通过后缀表达语法意义。复数 -lar/ler，位置格 -da/de，向格 -a/e，从格 -dan/den。例：İstanbul'da（在伊斯坦布尔）、okula（去学校）。", examples: ["İstanbul'da（在伊斯坦布尔）", "okula（去学校）", "evden（从家里）", "kitaplar（书们）"], xpReward: 15},
    {id: "grammar_pl_001", language: "pl", difficulty: "beginner", weekIndex: -1, title: "波兰语名词变格", duration: 5, description: "名词的性、数与七个格", content: "波兰语名词有三种性（阳性、阴性、中性）和七个格（主格、属格、与格、宾格、工具格、位置格、呼格）。阳性又分为人、动物、非动物。例：książka（书，阴性）变格复杂。", examples: ["książka（书，主格）", "książki（书，属格/复数）", "do szkoły（去学校）", "z przyjacielem（和朋友）"], xpReward: 15},
    {id: "grammar_pl_002", language: "pl", difficulty: "intermediate", weekIndex: -1, title: "波兰语动词体", duration: 4, description: "完成体与未完成体的区别", content: "波兰语动词有完成体（dokonany）和未完成体（niedokonany）之分。完成体表示动作完成：napisać（写完）；未完成体表示持续或反复：pisać（写）。多数动词成对出现。", examples: ["pisać（写，未完成）", "napisać（写完，完成）", "czytać（读，未完成）", "przeczytać（读完，完成）"], xpReward: 20},
    {id: "grammar_nl_001", language: "nl", difficulty: "beginner", weekIndex: -1, title: "荷兰语动词变位", duration: 4, description: "规则动词现在时变位", content: "荷兰语规则动词现在时：以 werken（工作）为例：ik werk, jij/u werkt, hij/zij werkt, wij werken, jullie werken, zij werken。动词第二位规则是荷兰语句法的核心。", examples: ["Ik werk.（我工作。）", "Jij werkt.（你工作。）", "Wij werken.（我们工作。）", "Hij loopt.（他走路。）"], xpReward: 15},
    {id: "grammar_nl_002", language: "nl", difficulty: "beginner", weekIndex: -1, title: "荷兰语冠词与形容词", duration: 4, description: "定冠词、不定冠词及形容词变格", content: "荷兰语定冠词：de（阳/阴）、het（中性）。不定冠词：een。中性名词用 het，如 het huis（房子）；阴阳性用 de，如 de man（男人）、de vrouw（女人）。形容词在不定冠词后加-e。", examples: ["het huis（房子）", "de man（男人）", "een groot huis（一个大房子）", "de grote man（大男人）"], xpReward: 15},
    {id: "grammar_el_001", language: "el", difficulty: "beginner", weekIndex: -1, title: "希腊语字母", duration: 5, description: "24个希腊字母及发音", content: "希腊语有24个字母，是西方字母的源头。元音：α, ε, η, ι, ο, υ, ω；辅音：β, γ, δ, θ, κ, λ, μ, ν, ξ, π, ρ, σ/ς, τ, φ, χ, ψ。注意：γ 在 e, i 前读 y。", examples: ["Α α (alpha)", "Β β (vita)", "Γ γ (gamma)", "Ω ω (omega)"], xpReward: 15},
    {id: "grammar_el_002", language: "el", difficulty: "intermediate", weekIndex: -1, title: "希腊语动词变位", duration: 5, description: "现在时变位及动词体", content: "希腊语动词以 -ω 结尾（第一变位法）或以 -ώ 结尾（第二变位法）。例：αγαπώ（我爱）：αγαπώ, αγαπάς, αγαπά, αγαπάμε, αγαπάτε, αγαπούν。过去时不定式加 -σ-。", examples: ["αγαπώ（我爱）", "αγαπάς（你爱）", "καταλαβαίνω（我明白）", "ήπια（我喝了）"], xpReward: 20},
    {id: "grammar_nan_001", language: "nan", difficulty: "beginner", weekIndex: -1, title: "闽南语声调与声母", duration: 4, description: "闽南语八声七调及特色声母", content: "闽南语（台语）有八个声调（七调），保留中古汉语入声。特色声母：浊音 b, g, l；没有唇齿音 f。例：「我」guá、「你」lí、「他」i。声调不同，意义不同：宝 pó vs 抱 phō。", examples: ["我 guá", "你 lí", "伊 i（他/她）", "食 tsia̍h（吃）"], xpReward: 15},
    {id: "grammar_nan_002", language: "nan", difficulty: "intermediate", weekIndex: -1, title: "闽南语与普通话词汇差异", duration: 4, description: "常用词汇的闽南语说法", content: "闽南语保留大量古汉语词汇，与普通话差异大。例：「吃」说「食」、「走」说「行」、「看」说「睨」、「美」说「媠」。人称：阮（我们）、恁（你们）、in（他们）。", examples: ["食饭 tsia̍h-pn̄g（吃饭）", "行路 kiânn-lōo（走路）", "睨望 gīnn-bāng（看望）", "媠人 suí-lâng（美人）"], xpReward: 15},
    {id: "grammar_zh-SC_001", language: "zh-SC", difficulty: "beginner", weekIndex: -1, title: "四川话声调特点", duration: 4, description: "四川话与普通话的声调对应", content: "四川话属于西南官话，有五个声调：阴平（55）、阳平（21）、上声（53）、去声（213）、入声归阳平。最显著特点是普通话的阳平（35）在四川话中常读低降调（21）。", examples: ["人 rén → 四川话 rén（低降）", "平 píng → 四川话 pín", "吃 chī → 四川话 cí", "说 shuō → 四川话 sō"], xpReward: 15},
    {id: "grammar_zh-SC_002", language: "zh-SC", difficulty: "beginner", weekIndex: -1, title: "四川话特色词汇", duration: 4, description: "常用四川话词汇与普通话对比", content: "四川话有许多特色词汇：「啥子」= 什么、「要得」= 好的/可以、「巴适」= 舒服/好、「雄起」= 加油。句尾常用「嗦」「嘛」「哈」等语气词。", examples: ["啥子？（什么？）", "要得！（好的！）", "巴适得板！（太舒服了！）", "晓得噻！（知道啦！）"], xpReward: 15},
    {id: "grammar_zh-DB_001", language: "zh-DB", difficulty: "beginner", weekIndex: -1, title: "东北话声调与普通话差异", duration: 4, description: "东北话与普通话声调的细微差异", content: "东北话接近普通话，但阴平（第一声）调值略低，部分字音与普通话不同。东北话最显著的特色不是声调，而是大量的儿化音和特色词汇。如「这儿」「那儿」「哥们儿」。", examples: ["这儿 zhèr（这里）", "那儿 nàr（那里）", "哥们儿 gēmenr（兄弟）", "咋的 zǎde（怎么了）"], xpReward: 15},
    {id: "grammar_zh-DB_002", language: "zh-DB", difficulty: "beginner", weekIndex: -1, title: "东北话特色词汇与儿化音", duration: 4, description: "东北话标志性词汇表达", content: "东北话词汇生动直率：「噶哈」= 干什么、「嗯呐」= 是的、「磨叽」= 啰嗦、「磕碜」= 难看。儿化音广泛使用：老伴儿、脸蛋儿、事儿、劲儿。", examples: ["噶哈呢？（干什么呢？）", "嗯呐！（是的！）", "别磨叽！（别啰嗦！）", "老好了！（太好了！）"], xpReward: 15},
    {id: "grammar_sh_001", language: "sh", difficulty: "beginner", weekIndex: -1, title: "上海话声母与韵母", duration: 5, description: "上海话音系与普通话的主要差异", content: "上海话（沪语）属吴语，保留全浊声母（b, d, g, z, v 等），这是与普通话最大的差异。普通话清音 p 在上海话中对应 b（浊音）。韵母系统也有差异，如「安」读 e。", examples: ["我 ngu / ngú", "尔 nóng（你）", "伊 yi（他/她）", "交关 jiogua（很/非常）"], xpReward: 15},
    {id: "grammar_sh_002", language: "sh", difficulty: "intermediate", weekIndex: -1, title: "上海话连续变调", duration: 4, description: "两字组及多字组的变调规律", content: "上海话有复杂的连续变调。两字组中，首字调值通常变为中平调（33）或高升调（35），取决于原调类。例如：「今朝」（今天）本调 53+44，实际读 33+44。变调是上海话的显著特征。", examples: ["今朝 jin-tsau（今天）", "明朝 min-tsau（明天）", "老老 lo-lo（很老）", "交关好 jiogua-hau（很好）"], xpReward: 15},
    {id: "grammar_hak_001", language: "hak", difficulty: "beginner", weekIndex: -1, title: "客家话声调系统", duration: 4, description: "客家话六声及与古汉语的对应", content: "客家话通常有六个声调：阴平、阳平、上声、去声、阴入、阳入，保留中古汉语入声。客家话被称为「古汉语活化石」，语音系统与《广韵》有较强对应关系。", examples: ["我 ngái", "汝 ngì（你）", "佢 kí（他/她）", "食 sìt（吃）"], xpReward: 15},
    {id: "grammar_hak_002", language: "hak", difficulty: "beginner", weekIndex: -1, title: "客家话与普通话词汇差异", duration: 4, description: "保留古汉语特色的常用词汇", content: "客家话保留大量古汉语词汇：「食」= 吃、「行」= 走、「睇」= 看、「倾」= 说。人称代词：𠊎（ngái，我）、你（ngì）、佢（kí）。亲属称谓也保留古音。", examples: ["食饭 sìt-fan（吃饭）", "行路 hàng-lu（走路）", "睇戏 thai-hi（看戏）", "倾计 kiang-ge（聊天）"], xpReward: 15},
    {id: "grammar_de_002", language: "de", difficulty: "beginner", weekIndex: -1, title: "德语动词现在时变位", duration: 4, description: "规则动词与不规则动词现在时", content: "德语规则动词以 -en 结尾。machen（做）：ich mache, du machst, er/sie/es macht, wir machen, ihr macht, sie/Sie machen。不规则动词如 sein：ich bin, du bist, er ist。", examples: ["Ich mache Hausaufgaben.", "Du kommst aus Deutschland.", "Wir gehen ins Kino.", "Er ist Lehrer."], xpReward: 15},
    {id: "grammar_fr_002", language: "fr", difficulty: "intermediate", weekIndex: -1, title: "法语复合过去时", duration: 5, description: "passé composé 的构成与助动词选择", content: "法语复合过去时（passé composé）由助动词 avoir 或 être 加过去分词构成。多数动词用 avoir：J'ai mangé（我吃了）。表示位移或状态变化的动词用 être：Je suis allé（我去了）。", examples: ["J'ai mangé.（我吃了。）", "Il est allé à Paris.（他去了巴黎。）", "Nous avons fini.（我们完成了。）", "Elle est née en 1990.（她出生于1990年。）"], xpReward: 20},
    {id: "grammar_it_002", language: "it", difficulty: "beginner", weekIndex: -1, title: "意大利语名词阴阳性", duration: 4, description: "名词性的判断及单复数变化", content: "意大利语名词有阳性（maschile）和阴性（femminile）。以 -o 结尾多为阳性：il libro（书）。以 -a 结尾多为阴性：la casa（房子）。以 -e 结尾两性皆有：il pane（面包，阳）、la notte（夜晚，阴）。", examples: ["il libro / i libri（书）", "la casa / le case（房子）", "il pane（面包）", "la notte（夜晚）"], xpReward: 15},
];
    await db.grammarLessons.bulkAdd(baseLessons);
  }

  const weeklyLessons = WEEKLY_GRAMMAR_POOL[activeWeek];
  if (weeklyLessons && weeklyLessons.length > 0) {
    await db.grammarLessons.where('weekIndex').equals(activeWeek).delete();
    await db.grammarLessons.bulkAdd(weeklyLessons);
  }

  await db.contentMetadata.put({ key: 'grammar_seeded_weeks', value: [...seededWeeks, activeWeek] });
}

async function seedCultureArticles() {
  if (!window.db) return;
  const activeWeek = getActiveWeek();

  const versionMeta = await db.contentMetadata.get('culture_seed_version');
  if (versionMeta?.value !== CULTURE_SEED_VERSION) {
    await db.cultureArticles.clear();
    await db.contentMetadata.delete('culture_seeded_weeks');
    await db.contentMetadata.put({ key: 'culture_seed_version', value: CULTURE_SEED_VERSION });
  }

  const meta = await db.contentMetadata.get('culture_seeded_weeks');
  const seededWeeks = meta?.value || [];
  if (seededWeeks.includes(activeWeek)) return;

  const hasBase = (await db.cultureArticles.where('weekIndex').equals(-1).limit(1).toArray()).length > 0;
  if (!hasBase) {
    const baseArticles = [
    {id: "culture_001", language: "en", category: "customs", title: "英式下午茶", icon: "☕", readTime: 3, content: "英式下午茶（Afternoon Tea）起源于19世纪，由贝德福德公爵夫人安娜发明。当时人们晚餐时间较晚，她在下午感到饥饿，便让仆人准备茶和小点心。这个习惯很快在上流社会流行开来。传统的下午茶包括三层点心架：底层放三明治，中层放司康饼，顶层放蛋糕和甜点。茶通常选用伯爵茶或锡兰红茶。", facts: ["下午茶通常在下午3-5点享用", "司康饼要用手掰开，不要用刀切", "正确的品茶顺序是从下到上"], xpReward: 15},
    {id: "culture_002", language: "en", category: "customs", title: "美国小费文化", icon: "💵", readTime: 3, content: "在美国，给小费是一种重要的社交礼仪。餐厅服务员的小费通常占总账单的15-20%。如果不给小费，会被认为是对服务的不认可。出租车司机、酒店行李员、理发师等也都期待小费。但快餐店、咖啡店和自助餐厅通常不需要给小费。", facts: ["餐厅小费标准：午餐15%，晚餐18-20%", "小费可以现金或刷卡时添加", "服务极差时可以不付小费"], xpReward: 15},
    {id: "culture_003", language: "en", category: "customs", title: "英国排队文化", icon: "🚶", readTime: 2, content: "英国人以爱排队闻名世界。无论是等公交、买咖啡还是进入博物馆，英国人都严格遵守「先来后到」的原则。插队（jump the queue）被认为是非常不礼貌的行为，甚至可能导致争吵。据说二战期间，排队领取配给粮的传统进一步强化了这种文化。", facts: ["插队在英国被视为严重失礼", "即使只有两个人也会自觉排队", "排队是英国国民性格的一部分"], xpReward: 10},
    {id: "culture_004", language: "en", category: "food", title: "感恩节传统", icon: "🦃", readTime: 3, content: "感恩节是美国和加拿大的重要节日，每年11月的第四个星期四庆祝。传统晚餐包括烤火鸡、蔓越莓酱、土豆泥和南瓜派。这个节日起源于1621年，清教徒与万帕诺亚格印第安人共同庆祝丰收的历史。", facts: ["火鸡是感恩节的核心食物", "梅西感恩节大游行始于1924年", "黑色星期五是感恩节后的购物狂欢"], xpReward: 15},
    {id: "culture_005", language: "en", category: "customs", title: "澳大利亚 barbecue 文化", icon: "🍖", readTime: 3, content: "澳大利亚人酷爱户外烧烤（barbie），这已成为国民文化的一部分。几乎每个公园都有免费的公共烧烤台。香肠三明治（sausage sizzle）是社区活动中最常见的食物。", facts: ["澳大利亚国庆日常在海滩烧烤", "sausage sizzle 是慈善筹款的传统方式", "公共烧烤台在公园免费使用"], xpReward: 15},
    {id: "culture_006", language: "en", category: "customs", title: "英式下午茶礼仪", icon: "🫖", readTime: 3, content: "英式下午茶（Afternoon Tea）起源于19世纪贝德福德公爵夫人。传统的三层架从下至上分别是三明治、司康饼配奶油果酱、以及精致甜点。饮茶时小指不应翘起，搅拌茶时应前后轻搅而非画圈。", facts: ["下午茶通常安排在下午3-5点", "司康饼应先涂奶油再涂果酱", "搅拌茶时应避免勺子碰杯发出声响"], xpReward: 15},
    {id: "culture_ja_001", language: "ja", category: "customs", title: "日本鞠躬礼仪", icon: "🙇", readTime: 3, content: "鞠躬是日本最重要的礼仪之一。角度和持续时间因场合而异：15度「会释」用于日常打招呼；30度「敬礼」用于正式场合；45度「最敬礼」用于深度道歉或表达极大感谢。商务场合中，地位较低的一方通常先鞠躬，且角度更深。", facts: ["15°：日常问候", "30°：正式场合", "45°：道歉或深度感谢"], xpReward: 15},
    {id: "culture_ja_002", language: "ja", category: "food", title: "寿司的起源", icon: "🍣", readTime: 4, content: "寿司起源于东南亚，最初是一种保存鱼肉的方法——将鱼用盐腌制后埋入米饭中发酵。这种方法在奈良时代传入日本。到了江户时代，出现了「握寿司」，即醋饭上放新鲜鱼片，无需发酵，现做现吃。这是现代寿司的雏形。如今寿司已成为日本文化的象征之一。", facts: ["寿司起源于东南亚，后传入日本", "握寿司诞生于江户时代的东京", "回转寿司于1958年首次出现"], xpReward: 20},
    {id: "culture_ja_003", language: "ja", category: "customs", title: "日本温泉礼仪", icon: "♨️", readTime: 4, content: "在日本泡温泉（温泉/銭湯）有一套严格的礼仪。入浴前必须先在淋浴区将身体彻底洗净；必须裸体入浴，不可穿泳衣；长头发要盘起不可入水；有大面积纹身者可能被拒绝入内。温泉毛巾不能浸入池水中，通常放在池边或顶在头上。", facts: ["入浴前必须洗净身体", "不可穿泳衣入池", "毛巾不可浸入池水"], xpReward: 20},
    {id: "culture_ja_004", language: "ja", category: "customs", title: "日本赏樱文化", icon: "🌸", readTime: 3, content: "赏樱（花見）是日本春季最重要的传统活动。人们在樱花树下野餐，享受短暂的樱花盛开。赏樱不仅是观赏花朵，更是一种对生命无常的哲学思考——樱花七日，象征美好事物的短暂。", facts: ["花见通常在3月下旬至5月上旬", "赏樱时常带便当和清酒", "最早的赏樱记录可追溯至奈良时代"], xpReward: 15},
    {id: "culture_ja_005", language: "ja", category: "food", title: "日本拉面文化", icon: "🍜", readTime: 3, content: "拉面是日本最具代表性的平民美食之一。主要流派包括：札幌味噌拉面、博多豚骨拉面、东京酱油拉面和九州盐味拉面。日本人吃拉面时发出吸溜声是对厨师的赞赏，表示面条很美味。", facts: ["博多拉面以细面和豚骨汤闻名", "拉面店通常有自助点餐机", "替玉（加面）是博多拉面的特色"], xpReward: 15},
    {id: "culture_ko_001", language: "ko", category: "customs", title: "韩国泡菜文化", icon: "🥬", readTime: 4, content: "泡菜（김치）是韩国最具代表性的发酵食品，已有超过3000年的历史。韩国有句俗语「无泡菜不饭」（김치 없는 밥상）。韩国有超过200种泡菜，其中最著名的是白菜泡菜（배추김치）。制作泡菜需要白菜、辣椒面、大蒜、姜、鱼露等原料，经过腌制和发酵而成。", facts: ["韩国有超过200种泡菜", "泡菜富含维生素和益生菌", "韩国人均每年消费约35公斤泡菜"], xpReward: 20},
    {id: "culture_ko_002", language: "ko", category: "customs", title: "韩国敬老文化", icon: "🙇", readTime: 3, content: "韩国是非常重视辈分和礼仪的国家。与长辈或上级说话时必须使用敬语（존말）。晚辈向长辈鞠躬问候，双手递接物品。吃饭时等长辈先动筷，饮酒时侧身避开长辈视线。", facts: ["韩国有专门的敬语体系", "双手递接物品是基本礼仪", "吃饭时等长辈先动筷"], xpReward: 15},
    {id: "culture_ko_003", language: "ko", category: "customs", title: "韩国职场文化", icon: "💼", readTime: 3, content: "韩国职场强调等级和团队意识。新员工入职后经常参加회식（公司聚餐），这是融入团队的重要方式。聚餐中通常有前后辈互相倒酒的传统，且接受长辈倒酒时需双手捧杯。", facts: ["회식是韩国职场文化的重要组成部分", "前后辈关系在职场中非常重要", "韩国公司常有严格的着装要求"], xpReward: 15},
    {id: "culture_ko_004", language: "ko", category: "food", title: "韩国 street food", icon: "🍢", readTime: 3, content: "韩国街头小吃（분식）种类丰富，价格实惠。炒年糕（떡볶이）、鱼糕串（어묵）、 blood sausage（순대）和炸鸡（치킨）是最受欢迎的几种。明洞和弘大是首尔最著名的街头美食聚集地。", facts: ["떡볶이起源于朝鲜时代的宫廷料理", "韩国炸鸡配啤酒被称为치맥", "鱼糕串汤可以免费续汤"], xpReward: 15},
    {id: "culture_es_001", language: "es", category: "customs", title: "西班牙弗拉门戈", icon: "💃", readTime: 4, content: "弗拉门戈（Flamenco）是西班牙安达卢西亚地区的传统艺术形式，融合歌舞乐为一体。它起源于15世纪吉卜赛人、摩尔人和犹太人的文化交融。弗拉门戈不仅是舞蹈，更是一种情感表达方式，代表着热情、悲伤与自由。", facts: ["弗拉门戈2010年被列入人类非物质文化遗产", "起源于安达卢西亚地区", "经典伴奏乐器是吉他"], xpReward: 20},
    {id: "culture_es_002", language: "es", category: "food", title: "西班牙海鲜饭", icon: "🥘", readTime: 3, content: "海鲜饭（Paella）是西班牙瓦伦西亚地区的名菜，也是西班牙最具代表性的美食之一。传统海鲜饭用宽底平底锅烹制，以藏红花染色的米饭为基底，加入鸡肉、兔肉、海鲜或蔬菜。", facts: ["Paella 源自瓦伦西亚", "传统上星期日家庭聚餐食用", "用藏红花给米饭上色"], xpReward: 15},
    {id: "culture_es_003", language: "es", category: "customs", title: "西班牙节日文化", icon: "🎉", readTime: 3, content: "西班牙以丰富多彩的节日闻名。奔牛节（San Fermín）在潘普洛纳举行，人们与公牛一起奔跑；番茄大战（La Tomatina）在布尼奥尔举行，参与者互相投掷番茄；三王节（Día de Reyes）是西班牙的儿童节。", facts: ["奔牛节每年7月6日至14日举行", "番茄大战每年8月最后一个周三", "三王节时孩子们会收到礼物"], xpReward: 15},
    {id: "culture_es_004", language: "es", category: "customs", title: "西班牙语国家的家庭观念", icon: "👨‍👩‍👧", readTime: 3, content: "西班牙语国家普遍重视家庭纽带。多代同堂很常见，年轻人通常较晚独立生活。周日家庭聚餐（comida familiar）是重要的传统。祖父母通常在家庭决策中拥有重要话语权。", facts: ["西班牙年轻人平均30岁才离开父母家", "周日聚餐是重要的家庭传统", "祖父母参与孙辈的日常照顾"], xpReward: 15},
    {id: "culture_ru_001", language: "ru", category: "customs", title: "俄罗斯套娃", icon: "🪆", readTime: 3, content: "俄罗斯套娃（Матрёшка）是俄罗斯最著名的民间工艺品之一。通常由木材制成，由多个空心娃娃嵌套而成，最传统的图案是身穿民族服装的女性形象。套娃最早出现在19世纪末，如今已成为俄罗斯文化的象征。", facts: ["套娃最早出现在1890年代", "传统套娃有5-7个", "每个套娃都是手工绘制"], xpReward: 15},
    {id: "culture_ru_002", language: "ru", category: "food", title: "俄罗斯茶文化", icon: "☕", readTime: 3, content: "俄罗斯人热爱喝茶，茶文化深深融入日常生活。俄罗斯人喜欢在茶中加入果酱或蜂蜜，而不是牛奶。传统的俄罗斯茶具是茶炊（самовар），一种用炭火加热的大茶壶。茶通常搭配甜点或三明治一起享用。", facts: ["俄罗斯是世界最大茶叶进口国之一", "茶炊是俄罗斯传统茶具", "俄罗斯人偏爱红茶"], xpReward: 15},
    {id: "culture_de_001", language: "de", category: "customs", title: "德国啤酒文化", icon: "🍺", readTime: 4, content: "德国啤酒文化历史悠久，1516年颁布的《啤酒纯酿法》（Reinheitsgebot）规定啤酒只能使用水、大麦和啤酒花酿造。德国有超过1500种啤酒，每个地区都有自己的特色。慕尼黑啤酒节（Oktoberfest）是世界上最大的民间节日。", facts: ["《啤酒纯酿法》是世界上最古老的食品法规之一", "德国有1300多家啤酒厂", "慕尼黑啤酒节每年吸引600万游客"], xpReward: 20},
    {id: "culture_de_002", language: "de", category: "customs", title: "德国守时文化", icon: "⏰", readTime: 3, content: "德国人非常注重守时，迟到几分钟就会被认为是不尊重对方的表现。商务约会应提前5-10分钟到达。德国的公共交通系统也以准时而著称，火车时刻表精确到分钟。", facts: ["德国火车误点15分钟以上可获赔偿", "守时被视为德国核心价值观之一", "商务场合迟到需提前通知并道歉"], xpReward: 15},
    {id: "culture_fr_001", language: "fr", category: "food", title: "法国可颂面包", icon: "🥐", readTime: 3, content: "可颂（Croissant）是法国最具代表性的糕点之一，以其层层酥脆的黄油面团闻名。虽然其新月形状源自奥地利，但法国将其发扬光大。优质可颂应该有明显的蜂窝状内部结构，外层金黄酥脆，内层柔软蓬松。", facts: ["可颂源自奥地利维也纳", "正宗可颂用大量黄油制作", "法国人早餐常配咖啡食用"], xpReward: 15},
    {id: "culture_fr_002", language: "fr", category: "customs", title: "法国餐桌礼仪", icon: "🍽️", readTime: 3, content: "法国餐桌礼仪讲究颇多。双手应放在桌上（不是腿上），手腕轻搭桌沿。面包直接放在桌布上，而非面包盘中。用餐结束时，将刀叉平行放在盘中表示已吃完。法国人用餐时间较长，通常持续1-2小时。", facts: ["法国人吃饭双手放桌上", "面包直接放在桌布上", "用餐时间较长，细嚼慢咽是礼貌"], xpReward: 15},
    {id: "culture_it_001", language: "it", category: "food", title: "意大利披萨起源", icon: "🍕", readTime: 4, content: "披萨起源于意大利那不勒斯，最初是穷人的食物。1889年，为玛格丽特王后制作的披萨（番茄、马苏里拉奶酪、罗勒）以意大利国旗三色命名，成为经典。正宗那不勒斯披萨必须使用特定产地的食材，并在高温石炉中烘烤。", facts: ["那不勒斯披萨被UNESCO列入非物质文化遗产", "正宗披萨只用番茄、奶酪、罗勒", "必须在485°C高温下烘烤60-90秒"], xpReward: 20},
    {id: "culture_it_002", language: "it", category: "customs", title: "意大利咖啡文化", icon: "☕", readTime: 3, content: "意大利咖啡文化世界闻名。意式浓缩（Espresso）是意大利人的日常饮品，通常站着一饮而尽。卡布奇诺（Cappuccino）只在上午11点前饮用，午后再喝会被认为是游客。意大利有超过15万家咖啡馆。", facts: ["意大利有超过150,000家咖啡馆", "卡布奇诺通常只在上午饮用", "意式浓缩是意大利人的国民饮品"], xpReward: 15},
    {id: "culture_pt_001", language: "pt", category: "food", title: "葡式蛋挞", icon: "🥧", readTime: 3, content: "葡式蛋挞（Pastel de Nata）是葡萄牙最著名的甜点，起源于里斯本贝伦区的热罗尼莫斯修道院。18世纪修女们用蛋白浆洗衣服，蛋黄则用来做糕点。贝伦蛋挞店（Pastéis de Belém）自1837年开始售卖，至今仍用秘方制作。", facts: [" originated in Belém, Lisbon", "使用蛋黄和焦糖化糖皮", "贝伦店至今仍用1837年秘方"], xpReward: 15},
    {id: "culture_pt_002", language: "pt", category: "customs", title: "葡萄牙法多音乐", icon: "🎵", readTime: 3, content: "法多（Fado）是葡萄牙最具代表性的传统音乐形式，以忧伤、怀旧的情感著称。歌词通常表达思念、失落和对命运的感慨。法多演唱者身着传统黑色披肩，在里斯本阿尔法玛区的酒馆中演唱。2011年被列入人类非物质文化遗产。", facts: ["Fado 2011年被列入人类非物质文化遗产", "起源于里斯本和科英布拉", "歌词主题常围绕saudade（思念）"], xpReward: 15},
    {id: "culture_yue_001", language: "yue", category: "food", title: "广式早茶文化", icon: "🫖", readTime: 4, content: "广式早茶是粤菜文化的重要组成部分，「一盅两件」（一壶茶、两笼点心）是老广的生活方式。经典点心包括虾饺、烧卖、叉烧包、蛋挞、凤爪等。茶楼不仅是用餐场所，更是社交空间，老人家常在茶楼「叹茶」聊天。", facts: ["「叹茶」意为享受品茶时光", "虾饺是早茶「四大天王」之一", "传统茶楼有推车叫卖点心的习俗"], xpReward: 20},
    {id: "culture_yue_002", language: "yue", category: "customs", title: "香港叮叮车与都市文化", icon: "🚋", readTime: 3, content: "香港电车（俗称「叮叮车」）自1904年起服务至今，是世界上最大的双层电车车队。乘坐叮叮车不仅是交通方式，更是一种独特的城市体验。车资仅需3港元，是游览港岛最经济的方式之一。", facts: ["叮叮车已有超过百年历史", "是全球最大的双层电车车队", "车资仅需3港元"], xpReward: 15},
    {id: "culture_ar_001", language: "ar", category: "customs", title: "阿拉伯咖啡礼仪", icon: "☕", readTime: 3, content: "阿拉伯咖啡（Qahwa）是中东待客文化的重要部分。主人用无柄小杯（finjan）为客人倒咖啡，通常只倒半杯。客人应右手接杯，喝完后轻轻晃动杯子表示还要，放在杯碟上表示够了。", facts: ["阿拉伯咖啡通常加豆蔻调味", "客人应右手接杯", "晃动杯子表示续杯"], xpReward: 15},
    {id: "culture_th_001", language: "th", category: "food", title: "泰国街头美食", icon: "🍜", readTime: 3, content: "泰国街头美食世界闻名，以酸、辣、甜、咸的完美平衡著称。冬阴功汤（Tom Yum Goong）、泰式炒河粉（Pad Thai）和青木瓜沙拉（Som Tam）是最具代表性的菜品。曼谷连续多年被评为世界最佳街头美食城市。", facts: ["曼谷是世界最佳街头美食城市之一", "Pad Thai 是泰国的国菜", "泰式料理讲究酸、辣、甜、咸的平衡"], xpReward: 15},
    {id: "culture_vi_001", language: "vi", category: "food", title: "越南河粉文化", icon: "🍜", readTime: 3, content: "越南河粉（Phở）是越南最具代表性的美食之一，被誉为越南的国菜。北越的 Phở bò（牛肉河粉）汤头清淡，南越的则偏甜，配料更丰富。越南人通常在清晨享用河粉作为早餐。", facts: ["Phở 起源于越南北部", "北越与南越的河粉风格不同", "河粉是越南人的传统早餐"], xpReward: 15},
    {id: "culture_tr_001", language: "tr", category: "customs", title: "土耳其茶文化", icon: "🫖", readTime: 3, content: "土耳其人非常热爱喝茶，人均茶叶消费量位居世界前列。土耳其茶（Çay）用双壶（çaydanlık）烹煮，倒入郁金香形的小玻璃杯中。无论是在家中、办公室还是街头，喝茶都是土耳其日常生活不可或缺的一部分。", facts: ["土耳其人均茶叶消费量世界前列", "使用双壶煮茶是土耳其特色", "茶杯呈郁金香形状"], xpReward: 15},
    {id: "culture_pl_001", language: "pl", category: "food", title: "波兰饺子", icon: "🥟", readTime: 3, content: "波兰饺子（Pierogi）是波兰最具代表性的传统美食。面皮包裹各种馅料，甜咸皆有。最常见的是土豆奶酪馅（ruskie）、酸菜蘑菇馅和蓝莓馅。圣诞节时，波兰家庭会聚在一起包饺子。", facts: ["Pierogi 是波兰的国菜", "甜咸馅料皆有", "圣诞节包饺子是传统家庭活动"], xpReward: 15},
    {id: "culture_nl_001", language: "nl", category: "customs", title: "荷兰自行车文化", icon: "🚲", readTime: 3, content: "荷兰是自行车王国，人均拥有约1.3辆自行车。荷兰全国有超过3.7万公里的自行车道。阿姆斯特丹、乌特勒支等城市，自行车道比汽车道还多。荷兰人骑自行车去上班、上学、购物，甚至参加婚礼。", facts: ["荷兰人均拥有约1.3辆自行车", "全国有超过37,000公里自行车道", "荷兰人平均每周骑行约3小时"], xpReward: 15},
    {id: "culture_el_001", language: "el", category: "customs", title: "希腊待客之道", icon: "🏛️", readTime: 3, content: "希腊人以热情好客闻名，这种传统被称为「philoxenia」（爱陌生人）。在希腊乡村，陌生人可能会被邀请共进晚餐。主人会为客人提供最好的食物和酒水，拒绝被视为不礼貌。", facts: ["Philoxenia 是古希腊的传统美德", "主人会为客人提供最好的食物", "在希腊拒绝主人的邀请可能被视为失礼"], xpReward: 15},
    
    {id: "culture_hi_001", language: "hi", category: "customs", title: "印度 Namaste 礼仪", icon: "🙏", readTime: 3, content: "Namaste（नमस्ते）是印度传统的问候方式，双手合十于胸前，微微低头。这个词源自梵语，意为「我心中的神向你心中的神致敬」。Namaste 不仅是一种问候，更是一种表达尊重和感恩的方式。", facts: ["Namaste 意为「我心中的神向你致敬」", "双手合十时通常配合微微低头", "可用于问候、感谢和告别"], xpReward: 15},
        {id: "culture_ar_002", language: "ar", category: "customs", title: "阿拉伯待客之道", icon: "🫂", readTime: 3, content: "阿拉伯文化以热情好客著称。客人通常会被邀请进入客厅（majlis），主人会端上椰枣和阿拉伯咖啡。拒绝食物被视为不礼貌。待客时，主人会用最好的食物招待客人，即使自己不富裕。", facts: ["Majlis 是阿拉伯传统客厅", "椰枣和咖啡是待客标配", "拒绝食物可能被视为不敬"], xpReward: 15},
    {id: "culture_th_002", language: "th", category: "customs", title: "泰国合十礼", icon: "🙏", readTime: 3, content: "合十礼（wai）是泰国最重要的问候礼仪。双手合十的位置和低头角度因对方身份而异：对平辈合十于胸前，对长辈合十于鼻尖，对国王合十于头顶。不回应合十礼被视为失礼。", facts: ["wai 是泰国传统问候方式", "合十位置因身份而异", "年轻者先向年长者行礼"], xpReward: 15},
    {id: "culture_vi_002", language: "vi", category: "customs", title: "越南春节文化", icon: "🧧", readTime: 3, content: "越南春节（Tết Nguyên Đán）是越南最重要的传统节日，与农历新年同期。节前会大扫除、买桃花或金橘树装饰。除夕夜全家团聚吃年夜饭，初一拜年并给红包（lì xì）。", facts: ["Tết 是越南最盛大的节日", "桃花和金橘是春节象征", "lì xì 红包寓意好运"], xpReward: 15},
    {id: "culture_tr_002", language: "tr", category: "food", title: "土耳其烤肉与面包", icon: "🥙", readTime: 3, content: "土耳其烤肉（Döner/Kebab）是世界闻名的土耳其美食，垂直旋转烤肉切片夹入面包中。土耳其面包（Ekmek）每餐必备，种类多样。土耳其冰淇淋（Dondurma）用兰花茎粉制作，黏稠有韧性。", facts: ["Döner 在全球广受欢迎", "土耳其人每天消费大量 Ekmek", "Dondurma 用兰花茎粉制作"], xpReward: 15},
    {id: "culture_pl_002", language: "pl", category: "customs", title: "波兰复活节传统", icon: "🥚", readTime: 3, content: "波兰复活节（Wielkanoc）是最重要的宗教节日之一。传统习俗包括制作复活节篮（święconka）去教堂祈福、彩绘鸡蛋（pisanki）、以及复活节早餐共享祝福面包。", facts: ["święconka 是复活节祈福篮", "pisanki 是波兰传统彩绘蛋", "复活节早餐比圣诞节还隆重"], xpReward: 15},
    {id: "culture_nl_002", language: "nl", category: "customs", title: "荷兰国王节", icon: "🟠", readTime: 3, content: "国王节（Koningsdag）是荷兰最盛大的全民节日，每年4月27日庆祝。全国一片橙色海洋，人们穿橙色衣服、戴橙色假发，在街头摆摊跳蚤市场（vrijmarkt），运河上挤满装饰船。", facts: ["国王节全国穿橙色", "vrijmarkt 是全国最大跳蚤市场", "运河派对是国王节特色"], xpReward: 15},
    {id: "culture_el_002", language: "el", category: "food", title: "希腊地中海饮食", icon: "🫒", readTime: 3, content: "希腊地中海饮食被联合国教科文组织列为非物质文化遗产。以橄榄油、新鲜蔬菜、海鲜、酸奶和谷物为主。传统希腊沙拉（Horiatiki）只用番茄、黄瓜、洋葱、橄榄和羊奶酪，不放生菜。", facts: ["地中海饮食列入非遗", "希腊人均橄榄油消费量世界前列", "传统希腊沙拉不放生菜"], xpReward: 15},
    {id: "culture_hi_002", language: "hi", category: "customs", title: "印度排灯节", icon: "🪔", readTime: 3, content: "排灯节（Diwali/दीवाली）是印度最重要的节日，象征光明战胜黑暗。人们点燃油灯（diya）、放烟花、交换糖果、穿新衣。拉克希米女神（Lakshmi）在排灯节夜被祭拜，祈求财富与繁荣。", facts: ["Diwali 象征光明战胜黑暗", "diya 油灯是排灯节标志", "拉克希米女神在排灯节受祭拜"], xpReward: 15},
    {id: "culture_zh-CN_001", language: "zh-CN", category: "customs", title: "中国春节习俗", icon: "🧧", readTime: 4, content: "春节是中国最重要的传统节日，已有四千多年历史。习俗包括贴春联、放爆竹、吃年夜饭、发红包、拜年等。年夜饭必有鱼（象征「年年有余」）和饺子（象征团圆）。北方守岁，南方逛花市。", facts: ["春节有四千多年历史", "年夜饭必有鱼和饺子", "红包寓意压住邪祟"], xpReward: 20},
    {id: "culture_zh-CN_002", language: "zh-CN", category: "food", title: "中国茶文化", icon: "🍵", readTime: 3, content: "中国是茶的故乡，茶文化源远流长。主要茶类包括绿茶（龙井、碧螺春）、红茶（祁门红茶）、乌龙茶（铁观音、大红袍）、普洱茶等。茶道强调「和、敬、清、寂」，泡茶水温因茶而异。", facts: ["中国是茶的发源地", "六大茶类各具特色", "茶道精神是中华传统文化精髓"], xpReward: 15},
    {id: "culture_zh-CN_003", language: "zh-CN", category: "customs", title: "中国筷子礼仪", icon: "🥢", readTime: 3, content: "筷子是中国饮食文化的重要符号，使用时有许多礼仪禁忌：不可用筷子指人、不可将筷子插在饭中（类似祭祀）、不可用筷子敲碗、不可用筷子翻菜挑拣。递筷子时应双手递上，表示尊重。", facts: ["筷子不可插饭，象征祭祀", "不可用筷子指人或敲碗", "双手递筷子是基本礼仪"], xpReward: 15},
    {id: "culture_nan_001", language: "nan", category: "food", title: "闽南小吃文化", icon: "🍜", readTime: 3, content: "闽南地区（福建、台湾）小吃种类繁多、风味独特。蚵仔煎、面线糊、土笋冻、沙茶面、卤肉饭是最具代表性的几种。沙茶酱源自南洋，经闽南人改良后成为地方特色。夜市文化是闽南饮食的重要场景。", facts: ["蚵仔煎是闽南经典小吃", "沙茶酱源自南洋改良", "夜市是闽南饮食文化中心"], xpReward: 15},
    {id: "culture_nan_002", language: "nan", category: "customs", title: "闽南宗族与庙宇文化", icon: "🏮", readTime: 3, content: "闽南地区宗族观念深厚，宗祠和庙宇是重要的社区中心。妈祖信仰起源于福建湄洲，随闽南移民传播至台湾和东南亚。拜拜（祭拜）是日常生活的一部分，初一十五上香祈福是传统习俗。", facts: ["妈祖信仰起源于福建湄洲", "宗祠是闽南宗族的核心", "初一十五拜拜是传统习俗"], xpReward: 15},
    {id: "culture_zh-SC_001", language: "zh-SC", category: "food", title: "四川火锅与川菜", icon: "🌶️", readTime: 3, content: "四川火锅以麻辣鲜香闻名天下，牛油锅底配上花椒和干辣椒是正宗做法。川菜讲究「一菜一格，百菜百味」，有24种基本味型。除麻辣外，还有鱼香、怪味、红油、蒜泥等多种味型。", facts: ["四川火锅起源于重庆码头", "川菜有24种基本味型", "花椒的麻是川菜的灵魂"], xpReward: 15},
    {id: "culture_zh-SC_002", language: "zh-SC", category: "customs", title: "四川茶馆与慢生活", icon: "🍵", readTime: 3, content: "四川茶馆是民间社交的重要场所，「摆龙门阵」（聊天）是茶馆文化核心。成都人爱茶，公园里、河边都可见茶馆。采耳（掏耳朵）是成都茶馆的独特配套服务，被誉为「小舒服」。", facts: ["摆龙门阵是四川茶馆核心活动", "成都茶馆遍布公园河畔", "采耳是成都特色服务"], xpReward: 15},
    {id: "culture_zh-DB_001", language: "zh-DB", category: "food", title: "东北菜与炖菜文化", icon: "🍲", readTime: 3, content: "东北菜以炖菜和大盘著称，猪肉炖粉条、小鸡炖蘑菇、锅包肉、地三鲜是最经典的代表。东北冬天寒冷漫长，炖菜保温效果好、营养丰富。酸菜是东北冬季必备，杀猪菜是年节传统。", facts: ["猪肉炖粉条是东北招牌菜", "酸菜是东北冬季必备", "东北菜以大盘实惠著称"], xpReward: 15},
    {id: "culture_zh-DB_002", language: "zh-DB", category: "customs", title: "东北二人转与冰雪文化", icon: "🎭", readTime: 3, content: "二人转是东北地区最具代表性的民间艺术形式，融合说唱、舞蹈和杂技，幽默风趣。东北冰雪文化包括冰灯、雪雕、冬捕（查干湖冬捕）。哈尔滨冰雪大世界是世界著名的冰雪主题乐园。", facts: ["二人转是东北民间艺术代表", "查干湖冬捕有千年历史", "哈尔滨冰雪大世界闻名世界"], xpReward: 15},
    {id: "culture_sh_001", language: "sh", category: "food", title: "本帮菜与海派美食", icon: "🦀", readTime: 3, content: "上海本帮菜以浓油赤酱、咸淡适中著称。红烧肉、糖醋小排、白切鸡、清蒸大闸蟹是经典名菜。生煎包和小笼包是上海的街头美食名片。海派西餐如炸猪排配辣酱油也是上海独有。", facts: ["本帮菜特点是浓油赤酱", "大闸蟹是上海秋季美食", "生煎包是上海街头名小吃"], xpReward: 15},
    {id: "culture_sh_002", language: "sh", category: "customs", title: "石库门与弄堂文化", icon: "🏘️", readTime: 3, content: "石库门是上海特有的民居建筑，中西合璧，前门是中式门框，内部是西式楼房。弄堂（小巷）是石库门社区的公共空间，居民在弄堂里洗衣、聊天、乘凉，形成了独特的邻里文化。", facts: ["石库门是中西合璧建筑", "弄堂是上海社区公共空间", "石库门代表了老上海生活"], xpReward: 15},
    {id: "culture_hak_001", language: "hak", category: "food", title: "客家美食", icon: "🍲", readTime: 3, content: "客家菜以咸香浓郁、注重原味著称。酿豆腐、盐焗鸡、梅菜扣肉、擂茶是最具代表性的客家美食。客家擂茶用茶叶、芝麻、花生等研磨冲泡，是客家人待客的礼数。", facts: ["酿豆腐是客家招牌菜", "擂茶是客家传统饮品", "盐焗鸡用粗盐包裹焖制"], xpReward: 15},
    {id: "culture_hak_002", language: "hak", category: "customs", title: "客家围龙屋", icon: "🏛️", readTime: 3, content: "围龙屋（或称土楼、围屋）是客家特有的民居建筑，集防御与居住于一体。圆形或方形土楼可住数十户同族人家，体现客家聚族而居的传统。福建土楼已被列入世界文化遗产。", facts: ["围龙屋集防御与居住于一体", "福建土楼是世界文化遗产", "体现客家聚族而居传统"], xpReward: 15},
];
    await db.cultureArticles.bulkAdd(baseArticles);
  }

  const weeklyArticles = WEEKLY_CULTURE_POOL[activeWeek];
  if (weeklyArticles && weeklyArticles.length > 0) {
    await db.cultureArticles.where('weekIndex').equals(activeWeek).delete();
    await db.cultureArticles.bulkAdd(weeklyArticles);
  }

  await db.contentMetadata.put({ key: 'culture_seeded_weeks', value: [...seededWeeks, activeWeek] });
}

async function seedVideoLessons() {
  if (!window.db) return;
  const activeWeek = getActiveWeek();

  const versionMeta = await db.contentMetadata.get('video_seed_version');
  if (versionMeta?.value !== VIDEO_SEED_VERSION) {
    await db.videoLessons.clear();
    await db.contentMetadata.delete('video_seeded_weeks');
    await db.contentMetadata.put({ key: 'video_seed_version', value: VIDEO_SEED_VERSION });
  }

  const meta = await db.contentMetadata.get('video_seeded_weeks');
  const seededWeeks = meta?.value || [];
  if (seededWeeks.includes(activeWeek)) return;

  const hasBase = (await db.videoLessons.where('weekIndex').equals(-1).limit(1).toArray()).length > 0;
  if (!hasBase) {
    const baseVideos = [
    {id: "video_001", language: "en", category: "daily", title: "机场值机", duration: 30, description: "如何在机场办理值机手续", thumbnail: "🛫", dialogue: [{speaker: "staff", text: "Good morning. May I see your passport and ticket, please?"}, {speaker: "user", text: "Here you are. I would like a window seat if possible."}, {speaker: "staff", text: "Certainly. Here is your boarding pass. Your flight leaves from Gate 12."}], xpReward: 20},
    {id: "video_002", language: "en", category: "daily", title: "餐厅点餐", duration: 30, description: "在餐厅点菜的常用表达", thumbnail: "🍽️", dialogue: [{speaker: "waiter", text: "Welcome! Would you like to start with some drinks?"}, {speaker: "user", text: "Yes, I would like an iced tea, please."}, {speaker: "waiter", text: "Great choice. Are you ready to order your main course?"}], xpReward: 20},
    {id: "video_003", language: "en", category: "daily", title: "酒店入住", duration: 30, description: "办理酒店入住手续", thumbnail: "🏨", dialogue: [{speaker: "receptionist", text: "Good afternoon. Do you have a reservation?"}, {speaker: "user", text: "Yes, under the name Li Ming."}, {speaker: "receptionist", text: "Found it. You are in room 302. Here is your key card."}], xpReward: 20},
    {id: "video_004", language: "en", category: "social", title: "自我介绍", duration: 25, description: "在社交场合自我介绍", thumbnail: "🤝", dialogue: [{speaker: "user", text: "Hi, I am Sarah. Nice to meet you!"}, {speaker: "other", text: "Nice to meet you too, Sarah. I am Tom. Where are you from?"}, {speaker: "user", text: "I am from Canada. I am here for a business trip."}], xpReward: 20},
    {id: "video_005", language: "en", category: "business", title: "商务会议开场", duration: 30, description: "商务会议中的开场白", thumbnail: "💼", dialogue: [{speaker: "host", text: "Thank you all for coming. Let us get started with today is agenda."}, {speaker: "user", text: "Before we begin, could I share the updated report?"}, {speaker: "host", text: "Of course, please go ahead."}], xpReward: 25},
    {id: "video_006", language: "en", category: "social", title: "约会邀请", duration: 25, description: "邀请朋友出去玩的表达", thumbnail: "💬", dialogue: [{speaker: "user", text: "Hey, are you free this Saturday?"}, {speaker: "friend", text: "Yes, I do not have any plans. Why do you ask?"}, {speaker: "user", text: "Would you like to check out that new cafe downtown?"}], xpReward: 20},
    {id: "video_007", language: "en", category: "travel", title: "租车对话", duration: 30, description: "在国外租车的常用表达", thumbnail: "🚗", dialogue: [{speaker: "agent", text: "Welcome to our car rental. What type of vehicle would you like?"}, {speaker: "user", text: "I need a compact car for three days."}, {speaker: "agent", text: "Perfect. May I see your driver's license and credit card?"}, {speaker: "user", text: "Sure, here they are. Is insurance included?"}], xpReward: 20},
    {id: "video_008", language: "en", category: "daily", title: "药店买药", duration: 25, description: "在药店购买药品的对话", thumbnail: "💊", dialogue: [{speaker: "pharmacist", text: "How can I help you today?"}, {speaker: "user", text: "I have a headache. Could you recommend something?"}, {speaker: "pharmacist", text: "I suggest this pain reliever. Take one tablet every six hours."}], xpReward: 20},
    {id: "video_ja_001", language: "ja", category: "daily", title: "便利店购物", duration: 30, description: "在日本便利店的对话", thumbnail: "🏪", dialogue: [{speaker: "clerk", text: "いらっしゃいませ！（欢迎光临！）"}, {speaker: "user", text: "このおにぎりをください。（请给我这个饭团。）"}, {speaker: "clerk", text: "かしこまりました。お箸はいりますか？（好的，需要筷子吗？）"}], xpReward: 20},
    {id: "video_ja_002", language: "ja", category: "daily", title: "问路", duration: 30, description: "在日本问路", thumbnail: "🗾", dialogue: [{speaker: "user", text: "すみません、駅はどこですか。（请问，车站在哪里？）"}, {speaker: "local", text: "まっすぐ行って、二つ目の信号を右に曲がってください。（直走，在第二个红绿灯右转。）"}, {speaker: "user", text: "ありがとうございます！（谢谢！）"}], xpReward: 20},
    {id: "video_ja_003", language: "ja", category: "travel", title: "日本酒店入住", duration: 30, description: "在日本酒店办理入住", thumbnail: "🏨", dialogue: [{speaker: "staff", text: "いらっしゃいませ。ご予約はされていますか。（欢迎光临，您有预约吗？）"}, {speaker: "user", text: "はい、田中の名前で予約しています。（是的，我以田中的名字预约了。）"}, {speaker: "staff", text: "かしこまりました。こちらがルームキーです。（明白了，这是您的房卡。）"}], xpReward: 20},
    {id: "video_ja_004", language: "ja", category: "business", title: "日本商务拜访", duration: 30, description: "拜访日本公司时的礼仪对话", thumbnail: "💼", dialogue: [{speaker: "receptionist", text: "いらっしゃいませ。どちら様でいらっしゃいますか。（欢迎，请问您是哪位？）"}, {speaker: "user", text: "ABC社の李明と申します。山田様とお約束しております。（我是ABC公司的李明，和山田先生有约。）"}, {speaker: "receptionist", text: "かしこまりました。少々お待ちください。（明白了，请稍等。）"}], xpReward: 25},
    {id: "video_ja_005", language: "ja", category: "daily", title: "日本餐厅预约", duration: 25, description: "在日本餐厅预约座位", thumbnail: "🍽️", dialogue: [{speaker: "staff", text: "もしもし、寿司田中でございます。（您好，这里是寿司田中。）"}, {speaker: "user", text: "今晩、二人で予約したいのですが。（我想预约今晚两个人的位子。）"}, {speaker: "staff", text: "かしこまりました。何時ごろにいらっしゃいますか。（好的，您大概几点到？）"}], xpReward: 20},
    {id: "video_ko_001", language: "ko", category: "daily", title: "韩国便利店购物", duration: 30, description: "在韩国便利店的对话", thumbnail: "🏪", dialogue: [{speaker: "clerk", text: "어서 오세요!"}, {speaker: "user", text: "안녕하세요. 이 김밥 하나 주세요."}, {speaker: "clerk", text: "네, 여기 있습니다. 봉투 필요하세요?"}], xpReward: 20},
    {id: "video_ko_002", language: "ko", category: "daily", title: "韩国问路", duration: 30, description: "在韩国问路", thumbnail: "🗾", dialogue: [{speaker: "user", text: "실례합니다, 지하철역은 어디에 있어요?"}, {speaker: "local", text: "저기 사거리에서 왼쪽으로 가세요."}, {speaker: "user", text: "감사합니다!"}], xpReward: 20},
    {id: "video_ko_003", language: "ko", category: "social", title: "韩国朋友聚会", duration: 25, description: "和朋友约好见面", thumbnail: "💬", dialogue: [{speaker: "user", text: "이번 주말에 시간 돼?"}, {speaker: "friend", text: "응, 돼. 어디서 만날까?"}, {speaker: "user", text: "강남역에서 만나자."}, {speaker: "friend", text: "좋아, 몇 시에?"}], xpReward: 20},
    {id: "video_ko_004", language: "ko", category: "travel", title: "韩国出租车", duration: 25, description: "乘坐韩国出租车", thumbnail: "🚕", dialogue: [{speaker: "driver", text: "어디로 모실까요?"}, {speaker: "user", text: "明洞に 가주세요."}, {speaker: "driver", text: "네, 알겠습니다. 대략 이십 분 정도 걸려요."}, {speaker: "user", text: "카드로 계산할 수 있어요?"}], xpReward: 20},
    {id: "video_es_001", language: "es", category: "daily", title: "西班牙餐厅点餐", duration: 30, description: "在西班牙餐厅点菜", thumbnail: "🍽️", dialogue: [{speaker: "waiter", text: "Buenas noches. ¿Quieren beber algo?"}, {speaker: "user", text: "Una sangria, por favor."}, {speaker: "waiter", text: "Muy bien. ¿Ya saben qué van a comer?"}], xpReward: 20},
    {id: "video_es_002", language: "es", category: "daily", title: "西班牙问路", duration: 30, description: "在西班牙问路", thumbnail: "🗺️", dialogue: [{speaker: "user", text: "Perdone, ¿dónde está la estación de metro?"}, {speaker: "local", text: "Siga recto y gire a la izquierda."}, {speaker: "user", text: "Muchas gracias."}], xpReward: 20},
    {id: "video_es_003", language: "es", category: "travel", title: "西班牙酒店入住", duration: 30, description: "在西班牙酒店办理入住", thumbnail: "🏨", dialogue: [{speaker: "receptionist", text: "Buenos días. ¿Tienen reserva?"}, {speaker: "user", text: "Sí, a nombre de García."}, {speaker: "receptionist", text: "Perfecto. Su habitación es la 205. Aquí tiene la llave."}], xpReward: 20},
    {id: "video_ru_001", language: "ru", category: "daily", title: "俄罗斯餐厅点餐", duration: 30, description: "在俄罗斯餐厅点菜", thumbnail: "🥣", dialogue: [{speaker: "waiter", text: "Добрый вечер! Что будете заказывать?"}, {speaker: "user", text: "Борщ, пожалуйста."}, {speaker: "waiter", text: "Отличный выбор. А на второе?"}], xpReward: 20},
    {id: "video_ru_002", language: "ru", category: "daily", title: "俄罗斯问路", duration: 30, description: "在俄罗斯问路", thumbnail: "🗺️", dialogue: [{speaker: "user", text: "Извините, где находится Красная площадь?"}, {speaker: "local", text: "Идите прямо, потом налево."}, {speaker: "user", text: "Спасибо большое!"}], xpReward: 20},
    {id: "video_de_001", language: "de", category: "daily", title: "德国餐厅点餐", duration: 30, description: "在德国餐厅点菜", thumbnail: "🥨", dialogue: [{speaker: "waiter", text: "Guten Abend! Was darf es sein?"}, {speaker: "user", text: "Ich nehme die Schnitzel mit Pommes."}, {speaker: "waiter", text: "Möchten Sie dazu ein Bier?"}], xpReward: 20},
    {id: "video_fr_001", language: "fr", category: "daily", title: "法国餐厅点餐", duration: 30, description: "在法国餐厅点菜", thumbnail: "🥖", dialogue: [{speaker: "waiter", text: "Bonsoir. Vous avez choisi?"}, {speaker: "user", text: "Je voudrais le coq au vin, s'il vous plaît."}, {speaker: "waiter", text: "Excellent choix. Et comme boisson?"}], xpReward: 20},
    {id: "video_it_001", language: "it", category: "daily", title: "意大利餐厅点餐", duration: 30, description: "在意大利餐厅点菜", thumbnail: "🍝", dialogue: [{speaker: "waiter", text: "Buonasera. Cosa desidera?"}, {speaker: "user", text: "Vorrei gli spaghetti alla carbonara."}, {speaker: "waiter", text: "Perfetto. Da bere?"}], xpReward: 20},
    {id: "video_pt_001", language: "pt", category: "daily", title: "葡萄牙餐厅点餐", duration: 30, description: "在葡萄牙餐厅点菜", thumbnail: "🐟", dialogue: [{speaker: "waiter", text: "Boa noite. O que vai querer?"}, {speaker: "user", text: "Quero o bacalhau à brás, por favor."}, {speaker: "waiter", text: "Excelente escolha. E para beber?"}], xpReward: 20},
    {id: "video_yue_001", language: "yue", category: "daily", title: "香港茶餐厅", duration: 30, description: "在香港茶餐厅点餐", thumbnail: "🍜", dialogue: [{speaker: "waiter", text: "先生，饮咩茶呀？"}, {speaker: "user", text: "普洱啦。有咩推介呀？"}, {speaker: "waiter", text: "今日例牌叉烧饭好正㗎！"}], xpReward: 20},
    {id: "video_ar_001", language: "ar", category: "daily", title: "阿拉伯语问候", duration: 25, description: "阿拉伯语日常问候对话", thumbnail: "🕌", dialogue: [{speaker: "user", text: "السلام عليكم.（愿你平安。）"}, {speaker: "other", text: "وعليكم السلام.（也愿你平安。）"}, {speaker: "user", text: "كيف حالك؟（你好吗？）"}, {speaker: "other", text: "بخير، الحمد لله.（很好，感谢真主。）"}], xpReward: 20},
    {id: "video_th_001", language: "th", category: "daily", title: "泰国市场购物", duration: 25, description: "在泰国市场买东西", thumbnail: "🛒", dialogue: [{speaker: "user", text: "สวัสดีค่ะ อันนี้เท่าไหร่คะ？（你好，这个多少钱？）"}, {speaker: "vendor", text: "ห้าสิบบาทค่ะ.（50泰铢。）"}, {speaker: "user", text: "ลดได้ไหมคะ？（可以便宜一点吗？）"}, {speaker: "vendor", text: "ได้ค่ะ สี่สิบบาท.（可以，40泰铢。）"}], xpReward: 20},
    {id: "video_hi_001", language: "hi", category: "daily", title: "印地语问候", duration: 25, description: "印地语日常问候对话", thumbnail: "🙏", dialogue: [{speaker: "user", text: "नमस्ते! आप कैसे हैं?（你好！你好吗？）"}, {speaker: "other", text: "मैं ठीक हूँ, धन्यवाद.（我很好，谢谢。）"}, {speaker: "user", text: "आपका नाम क्या है?（你叫什么名字？）"}, {speaker: "other", text: "मेरा नाम अमित है.（我叫Amit。）"}], xpReward: 20},
        {id: "video_de_002", language: "de", category: "daily", title: "德国超市购物", duration: 30, description: "在德国超市购买日常用品", thumbnail: "🛒", dialogue: [{speaker: "cashier", text: "Guten Tag. Haben Sie eine Payback-Karte?"}, {speaker: "user", text: "Nein, leider nicht. Kann ich bar bezahlen?"}, {speaker: "cashier", text: "Natürlich. Das macht zusammen 23 Euro 50."}], xpReward: 20},
    {id: "video_fr_002", language: "fr", category: "daily", title: "法国咖啡馆点单", duration: 25, description: "在巴黎咖啡馆点咖啡和可颂", thumbnail: "☕", dialogue: [{speaker: "waiter", text: "Bonjour. Vous désirez?"}, {speaker: "user", text: "Un café allongé et un croissant, s'il vous plaît."}, {speaker: "waiter", text: "Très bien. Vous le prenez ici ou à emporter?"}], xpReward: 20},
    {id: "video_it_002", language: "it", category: "daily", title: "意大利买冰淇淋", duration: 25, description: "在意大利gelato店点冰淇淋", thumbnail: "🍨", dialogue: [{speaker: "clerk", text: "Buongiorno! Quali gusti vuoi?"}, {speaker: "user", text: "Un cono con pistacchio e stracciatella, per favore."}, {speaker: "clerk", text: "Perfetto. Vuoi la panna sopra?"}], xpReward: 20},
    {id: "video_pt_002", language: "pt", category: "daily", title: "葡萄牙市场买水果", duration: 25, description: "在葡萄牙集市购买新鲜水果", thumbnail: "🍊", dialogue: [{speaker: "vendor", text: "Bom dia! Quer experimentar as laranjas?"}, {speaker: "user", text: "Sim, por favor. Quanto custa o quilo?"}, {speaker: "vendor", text: "Dois euros o quilo. São muito doces!"}], xpReward: 20},
    {id: "video_yue_002", language: "yue", category: "daily", title: "香港街市买餸", duration: 30, description: "在香港街市买菜", thumbnail: "🥬", dialogue: [{speaker: "vendor", text: "早晨！今日啲菜好新鲜㗎！"}, {speaker: "user", text: "呢扎菜心几钱呀？"}, {speaker: "vendor", text: "八蚊扎，平过你啦！"}, {speaker: "user", text: "好呀，帮我执扎靓啲嘅。"}], xpReward: 20},
    {id: "video_ar_002", language: "ar", category: "daily", title: "阿拉伯语餐厅点餐", duration: 30, description: "在阿拉伯餐厅点传统菜肴", thumbnail: "🥙", dialogue: [{speaker: "waiter", text: "أهلاً وسهلاً. هل تريد تناول الطعام هنا؟（欢迎。您要在这里用餐吗？）"}, {speaker: "user", text: "نعم، أريد كباب وحموس.（是的，我要烤肉和鹰嘴豆泥。）"}, {speaker: "waiter", text: "ممتاز. هل تريد شاي؟（好的。您要茶吗？）"}], xpReward: 20},
    {id: "video_th_002", language: "th", category: "daily", title: "泰国餐厅点餐", duration: 25, description: "在泰国餐厅点菜", thumbnail: "🍜", dialogue: [{speaker: "staff", text: "สวัสดีค่ะ รับอะไรดีคะ？（你好，想点什么？）"}, {speaker: "user", text: "ขอต้มยำกุ้งหนึ่งถ้วยค่ะ.（我要一碗冬阴功虾汤。）"}, {speaker: "staff", text: "เผ็ดมากไหมคะ？（要很辣吗？）"}, {speaker: "user", text: "เผ็ดน้อยค่ะ.（微辣。）"}], xpReward: 20},
    {id: "video_hi_002", language: "hi", category: "daily", title: "印地语市场购物", duration: 25, description: "在印度市场买东西", thumbnail: "🛍️", dialogue: [{speaker: "user", text: "भैया, यह कितने का है?（兄弟，这个多少钱？）"}, {speaker: "vendor", text: "सौ रुपये.（一百卢比。）"}, {speaker: "user", text: "थोड़ा कम कर दो.（便宜一点吧。）"}, {speaker: "vendor", text: "ठीक है, अस्सी रुपये.（好吧，八十卢比。）"}], xpReward: 20},
    {id: "video_vi_001", language: "vi", category: "daily", title: "越南咖啡店点单", duration: 25, description: "在越南咖啡馆点咖啡", thumbnail: "☕", dialogue: [{speaker: "staff", text: "Chào anh. Anh uống gì ạ?（您好，喝什么？）"}, {speaker: "user", text: "Cho tôi một ly cà phê sữa đá.（给我一杯冰奶咖啡。）"}, {speaker: "staff", text: "Dạ, anh ngồi chờ một chút ạ.（好的，请稍等。）"}], xpReward: 20},
    {id: "video_vi_002", language: "vi", category: "daily", title: "越南餐厅点餐", duration: 25, description: "在越南餐厅点菜", thumbnail: "🍜", dialogue: [{speaker: "staff", text: "Chào anh chị. Mình ăn gì ạ?（您好，吃什么？）"}, {speaker: "user", text: "Cho hai phở bò và một nem rán.（两碗牛肉河粉，一份春卷。）"}, {speaker: "staff", text: "Dạ, có cần thêm rau không ạ?（好的，要加香菜吗？）"}], xpReward: 20},
    {id: "video_tr_001", language: "tr", category: "daily", title: "土耳其市场买东西", duration: 25, description: "在土耳其集市购物", thumbnail: "🛒", dialogue: [{speaker: "vendor", text: "Buyrun, ne arıyorsunuz?（欢迎，您在找什么？）"}, {speaker: "user", text: "Bir kilo çay ve baklava almak istiyorum.（我想买一公斤茶和巴克拉瓦。）"}, {speaker: "vendor", text: "Hemen hazırlıyorum.（马上准备好。）"}], xpReward: 20},
    {id: "video_tr_002", language: "tr", category: "daily", title: "土耳其餐厅点餐", duration: 25, description: "在土耳其餐厅点菜", thumbnail: "🥙", dialogue: [{speaker: "waiter", text: "Hoş geldiniz. Ne alırsınız?（欢迎。您要点什么？）"}, {speaker: "user", text: "Bir porsiyon döner ve ayran lütfen.（一份烤肉和一杯酸奶饮料。）"}, {speaker: "waiter", text: "Acılı mı acısız?（要辣的还是不辣的？）"}], xpReward: 20},
    {id: "video_pl_001", language: "pl", category: "daily", title: "波兰面包店买面包", duration: 25, description: "在波兰面包店买面包", thumbnail: "🥖", dialogue: [{speaker: "clerk", text: "Dzień dobry. Co podać?（您好。要什么？）"}, {speaker: "user", text: "Poproszę dwa rogale i bułkę.（请给我两个牛角包和一个面包卷。）"}, {speaker: "clerk", text: "Czy to wszystko?（就这些吗？）"}], xpReward: 20},
    {id: "video_pl_002", language: "pl", category: "daily", title: "波兰问路", duration: 25, description: "在波兰问路", thumbnail: "🗺️", dialogue: [{speaker: "user", text: "Przepraszam, gdzie jest dworzec kolejowy?（请问，火车站在哪里？）"}, {speaker: "local", text: "Idź prosto, potem skręć w prawo.（直走，然后右转。）"}, {speaker: "user", text: "Dziękuję bardzo!（非常感谢！）"}], xpReward: 20},
    {id: "video_nl_001", language: "nl", category: "daily", title: "荷兰奶酪市场", duration: 25, description: "在荷兰市场买奶酪", thumbnail: "🧀", dialogue: [{speaker: "vendor", text: "Goedemiddag. Wilt u wat proeven?（下午好。要尝尝吗？）"}, {speaker: "user", text: "Ja, graag. Wat kost de oude kaas?（是的，谢谢。老奶酪多少钱？）"}, {speaker: "vendor", text: "Vijf euro per honderd gram.（一百克五欧元。）"}], xpReward: 20},
    {id: "video_nl_002", language: "nl", category: "daily", title: "荷兰餐厅点餐", duration: 25, description: "在荷兰餐厅点菜", thumbnail: "🍽️", dialogue: [{speaker: "waiter", text: "Goedenavond. Wat mag het zijn?（晚上好。您要点什么？）"}, {speaker: "user", text: "Ik neem de stamppot met worst.（我要土豆泥配香肠。）"}, {speaker: "waiter", text: "Prima. Wilt u er een biertje bij?（好的。要配啤酒吗？）"}], xpReward: 20},
    {id: "video_el_001", language: "el", category: "daily", title: "希腊咖啡馆点单", duration: 25, description: "在希腊咖啡馆点咖啡", thumbnail: "☕", dialogue: [{speaker: "waiter", text: "Καλημέρα. Τι θα πάρετε?（早上好。您要什么？）"}, {speaker: "user", text: "Έναν ελληνικό καφέ, παρακαλώ.（一杯希腊咖啡，谢谢。）"}, {speaker: "waiter", text: "Με γλυκό ή σκέτο?（加糖还是原味？）"}], xpReward: 20},
    {id: "video_el_002", language: "el", category: "daily", title: "希腊餐厅点餐", duration: 25, description: "在希腊餐厅点菜", thumbnail: "🥗", dialogue: [{speaker: "waiter", text: "Καλώς ήρθατε. Έχετε επιλέξει?（欢迎。您选好了吗？）"}, {speaker: "user", text: "Θέλω μουσακά και χωριάτικη σαλάτα.（我要茄盒和希腊沙拉。）"}, {speaker: "waiter", text: "Τέλεια. Θα έρθει αμέσως.（好的。马上来。）"}], xpReward: 20},
    {id: "video_zh-CN_001", language: "zh-CN", category: "daily", title: "在中国餐厅点餐", duration: 30, description: "在中国餐厅点菜", thumbnail: "🍜", dialogue: [{speaker: "waiter", text: "您好，几位用餐？"}, {speaker: "user", text: "两位。请问有什么推荐菜？"}, {speaker: "waiter", text: "我们今天的招牌是糖醋排骨和清蒸鱼。"}, {speaker: "user", text: "好，那来一份糖醋排骨和一碗米饭。"}], xpReward: 20},
    {id: "video_zh-CN_002", language: "zh-CN", category: "travel", title: "在中国买火车票", duration: 30, description: "在火车站购买车票", thumbnail: "🚄", dialogue: [{speaker: "staff", text: "您好，请问去哪儿？"}, {speaker: "user", text: "我想买一张明天去上海的高铁票。"}, {speaker: "staff", text: "好的，G1次，二等座553元。请出示身份证。"}], xpReward: 20},
    {id: "video_nan_001", language: "nan", category: "daily", title: "闽南语市场买菜", duration: 30, description: "用闽南语在市场买菜", thumbnail: "🥬", dialogue: [{speaker: "vendor", text: "阿兄，今仔日啲菜真新鲜喔！"}, {speaker: "user", text: "这丛白菜几箍？"}, {speaker: "vendor", text: "三十箍啦，乎你便宜！"}, {speaker: "user", text: "好啊，阁掠一寡葱。"}], xpReward: 20},
    {id: "video_nan_002", language: "nan", category: "daily", title: "闽南语问路", duration: 25, description: "用闽南语问路", thumbnail: "🗺️", dialogue: [{speaker: "user", text: "劳驾，公车站佇叨位？"}, {speaker: "local", text: "行直直，佇前面路口倒旋。"}, {speaker: "user", text: "多谢汝！"}], xpReward: 20},
    {id: "video_zh-SC_001", language: "zh-SC", category: "daily", title: "四川话茶馆聊天", duration: 30, description: "在四川茶馆用四川话聊天", thumbnail: "🍵", dialogue: [{speaker: "friend", text: "老张，来喝茶哇？"}, {speaker: "user", text: "要得嘛，摆哈龙门阵。"}, {speaker: "friend", text: "你娃最近忙啥子喃？"}, {speaker: "user", text: "莫得啥子，就是上班。"}], xpReward: 20},
    {id: "video_zh-SC_002", language: "zh-SC", category: "daily", title: "四川话餐馆点菜", duration: 25, description: "用四川话在餐馆点菜", thumbnail: "🌶️", dialogue: [{speaker: "waiter", text: "老板，吃点啥子？"}, {speaker: "user", text: "来个回锅肉，多放点海椒。"}, {speaker: "waiter", text: "要得，还有莫得？"}, {speaker: "user", text: "再整碗米饭。"}], xpReward: 20},
    {id: "video_zh-DB_001", language: "zh-DB", category: "daily", title: "东北话超市买东西", duration: 25, description: "用东北话在超市购物", thumbnail: "🛒", dialogue: [{speaker: "cashier", text: "您好，有会员卡吗？"}, {speaker: "user", text: "没有，一共多钱啊？"}, {speaker: "cashier", text: "四十五块六。"}, {speaker: "user", text: "给你五十，找零得了。"}], xpReward: 20},
    {id: "video_zh-DB_002", language: "zh-DB", category: "daily", title: "东北话朋友见面", duration: 25, description: "用东北话和朋友打招呼", thumbnail: "👋", dialogue: [{speaker: "friend", text: "哎呀，老长时间没见着你了！"}, {speaker: "user", text: "可不是咋的，你最近噶哈呢？"}, {speaker: "friend", text: "也没噶哈，上班呗。晚上整两口不？"}, {speaker: "user", text: "行啊，整就整！"}], xpReward: 20},
    {id: "video_sh_001", language: "sh", category: "daily", title: "上海话买早餐", duration: 25, description: "用上海话买早点", thumbnail: "🥟", dialogue: [{speaker: "vendor", text: "阿弟，要点啥？"}, {speaker: "user", text: "我要两客生煎，一碗咸浆。"}, {speaker: "vendor", text: "好个，马上就好。"}, {speaker: "user", text: "再搭一客小笼。"}], xpReward: 20},
    {id: "video_sh_002", language: "sh", category: "daily", title: "上海话问路", duration: 25, description: "用上海话问路", thumbnail: "🗺️", dialogue: [{speaker: "user", text: "老伯伯，南京路哪能走？"}, {speaker: "local", text: "朝前头一直走，过两条马路就到哉。"}, {speaker: "user", text: "谢谢侬哦！"}], xpReward: 20},
    {id: "video_hak_001", language: "hak", category: "daily", title: "客家话市场买东西", duration: 25, description: "用客家话在市场购物", thumbnail: "🛒", dialogue: [{speaker: "vendor", text: "阿哥，爱脉个？（兄弟，要买什么？）"}, {speaker: "user", text: "𠊎爱买兜菜。（我要买些菜。）"}, {speaker: "vendor", text: "今晡日啲菜好新鲜。（今天的菜很新鲜。）"}], xpReward: 20},
    {id: "video_hak_002", language: "hak", category: "daily", title: "客家话问候", duration: 25, description: "用客家话打招呼", thumbnail: "👋", dialogue: [{speaker: "user", text: "食饱吂？（吃饭了吗？）"}, {speaker: "other", text: "食饱哩。汝呢？（吃了。你呢？）"}, {speaker: "user", text: "也食饱哩。去脉个？（也吃了。去哪儿？）"}, {speaker: "other", text: "去田项做事。（去田里干活。）"}], xpReward: 20},
];
    await db.videoLessons.bulkAdd(baseVideos);
  }

  const weeklyVideos = WEEKLY_VIDEO_POOL[activeWeek];
  if (weeklyVideos && weeklyVideos.length > 0) {
    await db.videoLessons.where('weekIndex').equals(activeWeek).delete();
    await db.videoLessons.bulkAdd(weeklyVideos);
  }

  await db.contentMetadata.put({ key: 'video_seeded_weeks', value: [...seededWeeks, activeWeek] });
}

async function getGrammarLessons(language) {
  if (!window.db) return [];
  await seedGrammarLessons();
  const activeWeek = getActiveWeek();
  let query = db.grammarLessons.where('weekIndex').equals(-1);
  const base = await query.toArray();
  const weekly = await db.grammarLessons.where('weekIndex').equals(activeWeek).toArray();
  const all = [...base, ...weekly];
  if (language) return all.filter(l => l.language === language);
  return all;
}

async function getCultureArticles(language) {
  if (!window.db) return [];
  await seedCultureArticles();
  const activeWeek = getActiveWeek();
  const base = await db.cultureArticles.where('weekIndex').equals(-1).toArray();
  const weekly = await db.cultureArticles.where('weekIndex').equals(activeWeek).toArray();
  const all = [...base, ...weekly];
  if (language) return all.filter(a => a.language === language);
  return all;
}

async function getVideoLessons(language) {
  if (!window.db) return [];
  await seedVideoLessons();
  const activeWeek = getActiveWeek();
  const base = await db.videoLessons.where('weekIndex').equals(-1).toArray();
  const weekly = await db.videoLessons.where('weekIndex').equals(activeWeek).toArray();
  const all = [...base, ...weekly];
  if (language) return all.filter(v => v.language === language);
  return all;
}

// Content metadata helpers
async function getContentMetadata(key) {
  if (!window.db) return null;
  const rec = await db.contentMetadata.get(key);
  return rec?.value || null;
}

async function setContentMetadata(key, value) {
  if (!window.db) return;
  await db.contentMetadata.put({ key, value });
}

async function clearWeeklyContent() {
  if (!window.db) return;
  await db.grammarLessons.where('weekIndex').aboveOrEqual(0).delete();
  await db.cultureArticles.where('weekIndex').aboveOrEqual(0).delete();
  await db.videoLessons.where('weekIndex').aboveOrEqual(0).delete();
  await db.contentMetadata.delete('grammar_seeded_weeks');
  await db.contentMetadata.delete('culture_seeded_weeks');
  await db.contentMetadata.delete('video_seeded_weeks');
}

async function recordLessonProgress(userId, lessonId, type) {
  if (!userId || !window.db) return;
  const key = `${type}_${lessonId}`;
  const existing = await db.lessonProgress.get({ userId, lessonId: key });
  if (existing) {
    await db.lessonProgress.update(existing, { completedAt: Date.now(), timesCompleted: (existing.timesCompleted || 1) + 1 });
  } else {
    await db.lessonProgress.add({ userId, lessonId: key, type, completedAt: Date.now(), timesCompleted: 1 });
  }
}

async function getLessonProgress(userId) {
  if (!userId || !window.db) return {};
  const recs = await db.lessonProgress.where('userId').equals(userId).toArray();
  return Object.fromEntries(recs.map(r => [r.lessonId, r]));
}

// ---- Export / Import helpers (P2 sync) ----
async function exportUserData(userId) {
  if (!userId || !window.db) return null;
  const data = {};
  data.userProfile = await db.userProfiles.get(userId);
  data.dailyLogs = await db.dailyLogs.where('userId').equals(userId).toArray();
  data.achievements = await db.achievements.where('userId').equals(userId).toArray();
  data.wordBooks = await db.wordBooks.where('userId').equals(userId).toArray();
  data.translationHistory = await db.translationHistory.toArray();
  data.xpHistory = await db.xpHistory.where('userId').equals(userId).toArray();
  data.lessonProgress = await db.lessonProgress.where('userId').equals(userId).toArray();
  data.exportedAt = new Date().toISOString();
  data.version = 1;
  return data;
}

async function importUserData(userId, data) {
  if (!userId || !window.db || !data) return false;
  try {
    if (data.userProfile) {
      await db.userProfiles.put({ ...data.userProfile, userId });
    }
    if (data.dailyLogs) {
      for (const log of data.dailyLogs) {
        await db.dailyLogs.put({ ...log, userId });
      }
    }
    if (data.achievements) {
      for (const ach of data.achievements) {
        await db.achievements.put({ ...ach, userId });
      }
    }
    if (data.wordBooks) {
      for (const wb of data.wordBooks) {
        await db.wordBooks.put({ ...wb, userId });
      }
    }
    if (data.translationHistory) {
      for (const th of data.translationHistory) {
        await db.translationHistory.put(th);
      }
    }
    if (data.xpHistory) {
      for (const xp of data.xpHistory) {
        await db.xpHistory.put({ ...xp, userId });
      }
    }
    if (data.lessonProgress) {
      for (const lp of data.lessonProgress) {
        await db.lessonProgress.put({ ...lp, userId });
      }
    }
    return true;
  } catch (e) {
    console.error('[importUserData] 导入失败:', e);
    return false;
  }
}

Object.assign(window, {
  db, ensureDefaultUser, todayStr, recordDailyLog, recordActivity, getDailyReports,
  getStreakRecord, recordStreakDay, getStreakHistory, protectStreakDay,
  addXPHistory, getXPHistory,
  recordWrongAnswer, getWeakQuestions,
  updateSceneProgress, getSceneProgress,
  // P2 social
  getFriends, addFriend, removeFriend,
  getStudyGroups, joinGroup, leaveGroup, createStudyGroup,
  getLeaderboard,
  // P2 content
  getGrammarLessons, getCultureArticles, getVideoLessons,
  recordLessonProgress, getLessonProgress,
  // Content rotation
  getContentMetadata, setContentMetadata, clearWeeklyContent,
  WEEKLY_GRAMMAR_POOL, WEEKLY_CULTURE_POOL, WEEKLY_VIDEO_POOL,
  // P2 sync
  exportUserData, importUserData,
});