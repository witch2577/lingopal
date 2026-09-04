// ========== Dexie.js IndexedDB Database ==========

const db = new Dexie('LingoPalDB');

db.version(5).stores({
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

// ---- Weekly Content Pools (P2) ----
const WEEKLY_GRAMMAR_POOL = {
  0: [
    { id: 'wgram_001_w0', language: 'en', difficulty: 'beginner', weekIndex: 0, title: '购物常用句型', duration: 4, description: '学习在商店购物时的基本句型', content: '购物时常用的英语句型包括：How much is this?（这个多少钱？）I would like to buy...（我想买...）Do you have...?（你们有...吗？）Can I try this on?（我能试穿吗？）', examples: ['How much is this shirt?', 'Do you have this in blue?', 'I will take it.', 'Can I pay by card?'], xpReward: 15 },
    { id: 'wgram_002_w0', language: 'ja', difficulty: 'beginner', weekIndex: 0, title: '買い物の表現', duration: 4, description: '日本での買い物に使う表現', content: '日本で買い物をする時の基本表現：いくらですか（多少钱？）これをください（请给我这个）カードで払えますか（可以刷卡吗？）', examples: ['これはいくらですか。', 'これをください。', '袋はいりません。', 'レシートをください。'], xpReward: 15 },
  ],
  1: [
    { id: 'wgram_001_w1', language: 'en', difficulty: 'intermediate', weekIndex: 1, title: '旅行问路句型', duration: 5, description: '旅行中问路和指路的地道表达', content: '旅行问路常用句型：Excuse me, how do I get to...?（请问怎么去...？）Is it far from here?（离这儿远吗？）Turn left at the traffic light.（在红绿灯处左转。）', examples: ['Excuse me, where is the nearest subway station?', 'How long does it take to walk there?', 'Go straight for two blocks.'], xpReward: 20 },
    { id: 'wgram_002_w1', language: 'ja', difficulty: 'beginner', weekIndex: 1, title: '道案内の表現', duration: 4, description: '道を尋ねたり案内したりする表現', content: '道を尋ねる表現：～はどこですか（...在哪里？）ここから遠いですか（离这儿远吗？）まっすぐ行ってください（请直走）', examples: ['駅はどこですか。', 'ここから歩いて何分ですか。', '二つ目の信号を右に曲がってください。'], xpReward: 15 },
  ],
  2: [
    { id: 'wgram_001_w2', language: 'en', difficulty: 'intermediate', weekIndex: 2, title: '餐厅点餐句型', duration: 5, description: '在餐厅点餐和表达饮食偏好的句型', content: '餐厅点餐常用表达：I would like to order...（我想点...）What do you recommend?（有什么推荐？）I am allergic to...（我对...过敏）Could I have the bill?（买单）', examples: ['Could we see the menu, please?', 'I will have the steak, medium rare.', 'Could I get this without onions?'], xpReward: 20 },
    { id: 'wgram_002_w2', language: 'ko', difficulty: 'beginner', weekIndex: 2, title: '식당에서 사용하는 표현', duration: 4, description: '한국 식당에서 사용하는 기본 표현', content: '한국 식당 표현：주문할게요（我要点菜）맵지 않게 해주세요（请做不辣的）계산해 주세요（请结账）', examples: ['메뉴판 좀 주세요.', '추천 메뉴가 뭐예요?', '맵기는 보통으로 해주세요.'], xpReward: 15 },
  ],
  3: [
    { id: 'wgram_001_w3', language: 'en', difficulty: 'beginner', weekIndex: 3, title: '时间表达句型', duration: 4, description: '询问和表达时间的常用句型', content: '时间表达：What time is it?（现在几点？）It is half past three.（三点半。）I will meet you at 6 p.m.（我晚上6点见你。）', examples: ['What day is it today?', 'My appointment is at 2:30.', 'The meeting will last for an hour.'], xpReward: 15 },
    { id: 'wgram_002_w3', language: 'es', difficulty: 'beginner', weekIndex: 3, title: 'Expresiones de tiempo', duration: 4, description: 'Expresiones para hablar del tiempo en español', content: 'Expresiones de tiempo：¿Qué hora es?（现在几点？）Son las tres y media.（三点半。）Nos vemos mañana.（明天见。）', examples: ['¿Qué día es hoy?', 'La cita es a las dos.', 'Hasta luego.'], xpReward: 15 },
  ],
};

const WEEKLY_CULTURE_POOL = {
  0: [
    { id: 'wcult_001_w0', language: 'en', category: 'customs', weekIndex: 0, title: '西方购物礼仪', icon: '🛍️', readTime: 3, content: '在西方国家购物时，排队是基本礼仪。试衣间通常有人数限制，试完衣服需要放回原处或交给店员。退换货政策因店而异，保留好收据很重要。', facts: ['欧美国家排队意识很强', '黑色星期五是全年最大促销日', '很多商店周日不营业'], xpReward: 15 },
    { id: 'wcult_002_w0', language: 'ja', category: 'customs', weekIndex: 0, title: '日本百元店文化', icon: '🏪', readTime: 3, content: '日本的百元店（100円ショップ）是一种非常独特的零售文化。从食品到日用品，几乎所有商品都以100日元（约5元人民币）的价格出售。大创（Daiso）是最著名的百元店品牌。', facts: ['百元店商品种类繁多', '大创在全球多个国家开店', '日本还有300円ショップ'], xpReward: 15 },
  ],
  1: [
    { id: 'wcult_001_w1', language: 'en', category: 'customs', weekIndex: 1, title: '不同国家的交通文化', icon: '🚆', readTime: 4, content: '英国的地铁没有空调，夏天非常闷热。日本的电车以准时而闻名，误点几分钟就会发道歉声明。德国的火车系统覆盖广泛，是欧洲最便捷的出行方式之一。', facts: ['伦敦地铁是世界上最古老的地铁', '新干线最高时速可达320公里', '德国高铁ICE连接主要城市'], xpReward: 20 },
    { id: 'wcult_002_w1', language: 'ja', category: 'customs', weekIndex: 1, title: '日本温泉旅馆', icon: '♨️', readTime: 3, content: '温泉旅馆（旅館）是日本传统住宿形式的代表。客人通常穿着浴衣（ゆかた），在榻榻米房间里休息。一泊二食（住一晚含两餐）是标准的住宿方案。', facts: ['温泉旅馆通常有和式与洋式房间', '晚餐多为怀石料理', '温泉需裸体入浴'], xpReward: 15 },
  ],
  2: [
    { id: 'wcult_001_w2', language: 'en', category: 'food', weekIndex: 2, title: '各国餐桌礼仪', icon: '🍽️', readTime: 4, content: '在法国，双手应该放在桌上（不是腿上）。在中国，转动圆桌时应先让长辈夹菜。在日本，不可把筷子插在米饭中（这是祭祀时的做法）。在意大利，早餐喝咖啡而非卡布奇诺。', facts: ['法国人吃饭时双手放桌上', '日本筷子不可插饭', '意大利人午后不喝卡布奇诺', '中国圆桌礼仪以长辈为先'], xpReward: 20 },
    { id: 'wcult_002_w2', language: 'ko', category: 'food', weekIndex: 2, title: '韩国饮食文化', icon: '🥘', readTime: 3, content: '韩国饮食以发酵食品为特色，泡菜（김치）是每餐必备。韩国人习惯共食，会用自己的筷子从公共菜盘夹菜。吃饭时一手端碗是礼貌的表现。', facts: ['韩国有200多种泡菜', '韩餐讲究五色五味', '烧酒是韩国最常见的酒'], xpReward: 15 },
  ],
  3: [
    { id: 'wcult_001_w3', language: 'en', category: 'customs', weekIndex: 3, title: '各国时间观念差异', icon: '⏰', readTime: 3, content: '德国和瑞士以守时著称，迟到几分钟就会被认为不礼貌。拉丁美洲国家的时间观念较为宽松，"现在"可能指接下来的几小时。在日本，电车误点几分钟就会发道歉声明。', facts: ['德国人非常注重守时', '拉丁美洲时间观念较宽松', '日本电车误点会发致歉声明'], xpReward: 15 },
    { id: 'wcult_002_w3', language: 'es', category: 'customs', weekIndex: 3, title: 'La Siesta y el Ritmo de Vida', icon: '😴', readTime: 3, content: '西班牙的午睡文化（Siesta）是慢生活哲学的体现。虽然大城市中这一传统逐渐消失，但在南部小镇仍然盛行。西班牙人晚餐时间通常在晚上9点以后。', facts: ['西班牙晚餐时间晚于多数国家', 'Siesta 传统源于炎热气候', '西班牙人年均工作时长低于欧洲平均'], xpReward: 15 },
  ],
};

const WEEKLY_VIDEO_POOL = {
  0: [
    { id: 'wvid_001_w0', language: 'en', category: 'daily', weekIndex: 0, title: '超市购物对话', duration: 30, description: '在超市与店员的对话', thumbnail: '🛒', dialogue: [{ speaker: 'clerk', text: 'Can I help you find something?' }, { speaker: 'user', text: 'Yes, where is the dairy section?' }, { speaker: 'clerk', text: 'It is in aisle 3, on your right.' }], xpReward: 20 },
    { id: 'wvid_002_w0', language: 'ja', category: 'daily', weekIndex: 0, title: 'コンビニで買い物', duration: 25, description: '日本便利店购物对话', thumbnail: '🏪', dialogue: [{ speaker: 'clerk', text: 'いらっしゃいませ！' }, { speaker: 'user', text: 'このおにぎりをください。' }, { speaker: 'clerk', text: 'かしこまりました。お箸はいりますか？' }], xpReward: 20 },
  ],
  1: [
    { id: 'wvid_001_w1', language: 'en', category: 'daily', weekIndex: 1, title: '机场值机对话', duration: 30, description: '在机场办理登机手续', thumbnail: '🛫', dialogue: [{ speaker: 'staff', text: 'May I see your passport and ticket?' }, { speaker: 'user', text: 'Here you are. I would like a window seat.' }, { speaker: 'staff', text: 'Certainly. Your gate is 12.' }], xpReward: 20 },
    { id: 'wvid_002_w1', language: 'ja', category: 'daily', weekIndex: 1, title: '駅で道を尋ねる', duration: 25, description: '在日本车站问路', thumbnail: '🚉', dialogue: [{ speaker: 'user', text: 'すみません、新宿駅はどこですか。' }, { speaker: 'local', text: 'まっすぐ行って、右に曲がってください。' }, { speaker: 'user', text: 'ありがとうございます！' }], xpReward: 20 },
  ],
  2: [
    { id: 'wvid_001_w2', language: 'en', category: 'daily', weekIndex: 2, title: '餐厅点餐对话', duration: 30, description: '在西餐厅点菜', thumbnail: '🍽️', dialogue: [{ speaker: 'waiter', text: 'Are you ready to order?' }, { speaker: 'user', text: 'Yes, I would like the grilled salmon.' }, { speaker: 'waiter', text: 'Would you like a side salad with that?' }], xpReward: 20 },
    { id: 'wvid_002_w2', language: 'ko', category: 'daily', weekIndex: 2, title: '한국 식당에서', duration: 25, description: '韩国餐厅点餐', thumbnail: '🥢', dialogue: [{ speaker: 'staff', text: '어서 오세요. 몇 분이세요?' }, { speaker: 'user', text: '두 명이에요. 메뉴판 좀 주세요.' }, { speaker: 'staff', text: '네, 여기 있습니다. 추천 메뉴는 불고기예요.' }], xpReward: 20 },
  ],
  3: [
    { id: 'wvid_001_w3', language: 'en', category: 'daily', weekIndex: 3, title: '约时间见面', duration: 25, description: '与朋友约定见面时间', thumbnail: '📅', dialogue: [{ speaker: 'user', text: 'Are you free this Saturday afternoon?' }, { speaker: 'friend', text: 'Yes, I am. What time works for you?' }, { speaker: 'user', text: 'How about 3 p.m. at the coffee shop?' }], xpReward: 20 },
    { id: 'wvid_002_w3', language: 'es', category: 'daily', weekIndex: 3, title: 'Pedir la hora', duration: 25, description: '用西班牙语问时间', thumbnail: '⏰', dialogue: [{ speaker: 'user', text: 'Disculpe, ¿qué hora es?' }, { speaker: 'local', text: 'Son las tres y media.' }, { speaker: 'user', text: 'Muchas gracias.' }], xpReward: 20 },
  ],
};

// ---- Content seeding (P2) ----
async function seedGrammarLessons() {
  if (!window.db) return;
  const activeWeek = getActiveWeek();
  // Check if base + current week already seeded
  const meta = await db.contentMetadata.get('grammar_seeded_weeks');
  const seededWeeks = meta?.value || [];
  if (seededWeeks.includes(activeWeek)) return;

  // Use limit(1) instead of count() for faster existence check
  const hasData = (await db.grammarLessons.limit(1).toArray()).length > 0;
  if (!hasData) {
    // Seed base lessons (weekIndex = -1 for permanent)
    const baseLessons = [
      { id: 'grammar_001', language: 'en', difficulty: 'beginner', weekIndex: -1, title: '一般现在时', duration: 3, description: '表示经常性、习惯性的动作或状态', content: '一般现在时（Simple Present）用于描述经常性、习惯性的动作或普遍真理。结构：主语 + 动词原形（第三人称单数加-s）。例句：I go to school every day. / She speaks English.', examples: ['I play basketball on weekends.', 'The sun rises in the east.', 'He works in a hospital.'], xpReward: 15 },
      { id: 'grammar_002', language: 'en', difficulty: 'beginner', weekIndex: -1, title: '现在进行时', duration: 4, description: '表示此时此刻正在进行的动作', content: '现在进行时（Present Continuous）用于描述当前正在发生的动作。结构：主语 + am/is/are + 动词-ing。例句：I am reading a book now. / They are playing football.', examples: ['She is cooking dinner.', 'We are watching TV.', 'The baby is sleeping.'], xpReward: 15 },
      { id: 'grammar_003', language: 'en', difficulty: 'intermediate', weekIndex: -1, title: '现在完成时', duration: 5, description: '表示过去发生但与现在有关联的动作', content: '现在完成时（Present Perfect）连接过去与现在。结构：主语 + have/has + 过去分词。例句：I have visited Paris twice. / She has finished her homework.', examples: ['I have lost my keys.', 'They have lived here for 10 years.', 'Have you ever been to Japan?'], xpReward: 20 },
      { id: 'grammar_004', language: 'en', difficulty: 'intermediate', weekIndex: -1, title: '被动语态', duration: 4, description: '强调动作的承受者而非执行者', content: '被动语态（Passive Voice）用于强调动作的承受者。结构：主语 + be + 过去分词 + (by + 执行者)。例句：The cake was eaten by the dog. / English is spoken worldwide.', examples: ['The letter was written by Mary.', 'The window was broken.', 'This book was published in 2020.'], xpReward: 20 },
      { id: 'grammar_005', language: 'en', difficulty: 'advanced', weekIndex: -1, title: '虚拟语气', duration: 5, description: '表示与事实相反的假设', content: '虚拟语气（Subjunctive Mood）用于表达假设、愿望或建议。If I were you, I would study harder. / I wish I had more time.', examples: ['If I won the lottery, I would travel.', 'I suggest that he see a doctor.', 'It is important that she be on time.'], xpReward: 25 },
      { id: 'grammar_006', language: 'ja', difficulty: 'beginner', weekIndex: -1, title: '日语五十音', duration: 5, description: '日语的基础发音系统', content: '五十音图是日语的基础，包含平假名和片假名。あいうえお、かきくけこ... 掌握五十音是学习日语的第一步。', examples: ['あ - a', 'い - i', 'う - u'], xpReward: 15 },
      { id: 'grammar_007', language: 'ja', difficulty: 'beginner', weekIndex: -1, title: '助词「は」「が」', duration: 4, description: '日语中最常用的两个助词', content: '「は」用于提示主题，「が」用于提示主语。私は学生です（我是学生）。私が学生です（我才是学生）。', examples: ['私は日本人です。', '猫が好きです。', 'これは本です。'], xpReward: 15 },
      { id: 'grammar_008', language: 'en', difficulty: 'beginner', weekIndex: -1, title: '冠词 a/an/the', duration: 3, description: '英语中名词前的限定词', content: '不定冠词 a/an 用于泛指，定冠词 the 用于特指。a 用于辅音音素前，an 用于元音音素前。例：a book, an apple, the sun.', examples: ['I have a dog.', 'She ate an orange.', 'The moon is bright tonight.'], xpReward: 10 },
    ];
    await db.grammarLessons.bulkAdd(baseLessons);
  }

  // Seed weekly content for current week
  const weeklyLessons = WEEKLY_GRAMMAR_POOL[activeWeek];
  if (weeklyLessons && weeklyLessons.length > 0) {
    // Remove old weekly content with same weekIndex to avoid duplicates
    await db.grammarLessons.where('weekIndex').equals(activeWeek).delete();
    await db.grammarLessons.bulkAdd(weeklyLessons);
  }

  // Mark this week as seeded
  const newMeta = { key: 'grammar_seeded_weeks', value: [...seededWeeks, activeWeek] };
  await db.contentMetadata.put(newMeta);
}

async function seedCultureArticles() {
  if (!window.db) return;
  const activeWeek = getActiveWeek();
  const meta = await db.contentMetadata.get('culture_seeded_weeks');
  const seededWeeks = meta?.value || [];
  if (seededWeeks.includes(activeWeek)) return;

  const hasData = (await db.cultureArticles.limit(1).toArray()).length > 0;
  if (!hasData) {
    const baseArticles = [
    { id: 'culture_001', language: 'en', category: 'customs', title: '英式下午茶', icon: '☕', readTime: 3, content: '英式下午茶（Afternoon Tea）起源于19世纪，由贝德福德公爵夫人安娜发明。当时人们晚餐时间较晚，她在下午感到饥饿，便让仆人准备茶和小点心。这个习惯很快在上流社会流行开来。传统的下午茶包括三层点心架：底层放三明治，中层放司康饼，顶层放蛋糕和甜点。茶通常选用伯爵茶或锡兰红茶。', facts: ['下午茶通常在下午3-5点享用', '司康饼要用手掰开，不要用刀切', '正确的品茶顺序是从下到上'], xpReward: 15 },
    { id: 'culture_002', language: 'en', category: 'customs', title: '美国小费文化', icon: '💵', readTime: 3, content: '在美国，给小费是一种重要的社交礼仪。餐厅服务员的小费通常占总账单的15-20%。如果不给小费，会被认为是对服务的不认可。出租车司机、酒店行李员、理发师等也都期待小费。但快餐店、咖啡店和自助餐厅通常不需要给小费。', facts: ['餐厅小费标准：午餐15%，晚餐18-20%', '小费可以现金或刷卡时添加', '服务极差时可以不付小费'], xpReward: 15 },
    { id: 'culture_003', language: 'ja', category: 'customs', title: '日本鞠躬礼仪', icon: '🙇', readTime: 3, content: '鞠躬是日本最重要的礼仪之一。角度和持续时间因场合而异：15度「会释」用于日常打招呼；30度「敬礼」用于正式场合；45度「最敬礼」用于深度道歉或表达极大感谢。商务场合中，地位较低的一方通常先鞠躬，且角度更深。', facts: ['15°：日常问候', '30°：正式场合', '45°：道歉或深度感谢'], xpReward: 15 },
    { id: 'culture_004', language: 'ja', category: 'food', title: '寿司的起源', icon: '🍣', readTime: 4, content: '寿司起源于东南亚，最初是一种保存鱼肉的方法——将鱼用盐腌制后埋入米饭中发酵。这种方法在奈良时代传入日本。到了江户时代，出现了「握寿司」，即醋饭上放新鲜鱼片，无需发酵，现做现吃。这是现代寿司的雏形。如今寿司已成为日本文化的象征之一。', facts: ['寿司起源于东南亚，后传入日本', '握寿司诞生于江户时代的东京', '回转寿司于1958年首次出现'], xpReward: 20 },
    { id: 'culture_005', language: 'en', category: 'slang', title: '英语网络俚语', icon: '💬', readTime: 3, content: '网络时代诞生了许多英语俚语和缩写。LOL = Laugh Out Loud（大笑）；BRB = Be Right Back（马上回来）；TBH = To Be Honest（说实话）；FOMO = Fear Of Missing Out（错失恐惧症）；GOAT = Greatest Of All Time（史上最伟大）。这些俚语在社交媒体和日常聊天中广泛使用。', facts: ['LOL 是网络聊天中最常用的缩写', 'GOAT 通常用来形容体育明星', 'FOMO 描述害怕错过社交活动的心理'], xpReward: 15 },
    { id: 'culture_006', language: 'en', category: 'customs', title: '英国排队文化', icon: '🚶', readTime: 2, content: '英国人以爱排队闻名世界。无论是等公交、买咖啡还是进入博物馆，英国人都严格遵守「先来后到」的原则。插队（jump the queue）被认为是非常不礼貌的行为，甚至可能导致争吵。据说二战期间，排队领取配给粮的传统进一步强化了这种文化。', facts: ['插队在英国被视为严重失礼', '即使只有两个人也会自觉排队', '排队是英国国民性格的一部分'], xpReward: 10 },
    { id: 'culture_007', language: 'ja', category: 'customs', title: '日本温泉礼仪', icon: '♨️', readTime: 4, content: '在日本泡温泉（温泉/銭湯）有一套严格的礼仪。入浴前必须先在淋浴区将身体彻底洗净；必须裸体入浴，不可穿泳衣；长头发要盘起不可入水；有大面积纹身者可能被拒绝入内。温泉毛巾不能浸入池水中，通常放在池边或顶在头上。', facts: ['入浴前必须洗净身体', '不可穿泳衣入池', '毛巾不可浸入池水'], xpReward: 20 },
    { id: 'culture_008', language: 'es', category: 'customs', weekIndex: -1, title: '西班牙午睡文化', icon: '😴', readTime: 3, content: '午睡（Siesta）是西班牙和许多拉丁美洲国家的传统。通常在下午2-5点，商店关门，人们回家休息。这个习惯源于炎热的气候——中午温度过高，不适合工作。虽然现在大城市中这一传统逐渐消失，但在小城镇仍很常见。', facts: ['Siesta 通常持续15-30分钟', '源于西班牙炎热的夏季气候', '许多商店下午2-5点关门'], xpReward: 15 },
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
  const meta = await db.contentMetadata.get('video_seeded_weeks');
  const seededWeeks = meta?.value || [];
  if (seededWeeks.includes(activeWeek)) return;

  const hasData = (await db.videoLessons.limit(1).toArray()).length > 0;
  if (!hasData) {
    const baseVideos = [
    { id: 'video_001', language: 'en', category: 'daily', title: '机场值机', duration: 30, description: '如何在机场办理值机手续', thumbnail: '🛫', dialogue: [{ speaker: 'staff', text: 'Good morning. May I see your passport and ticket, please?' }, { speaker: 'user', text: 'Here you are. I would like a window seat if possible.' }, { speaker: 'staff', text: 'Certainly. Here is your boarding pass. Your flight leaves from Gate 12.' }], xpReward: 20 },
    { id: 'video_002', language: 'en', category: 'daily', title: '餐厅点餐', duration: 30, description: '在餐厅点菜的常用表达', thumbnail: '🍽️', dialogue: [{ speaker: 'waiter', text: 'Welcome! Would you like to start with some drinks?' }, { speaker: 'user', text: 'Yes, I would like an iced tea, please.' }, { speaker: 'waiter', text: 'Great choice. Are you ready to order your main course?' }], xpReward: 20 },
    { id: 'video_003', language: 'en', category: 'daily', title: '酒店入住', duration: 30, description: '办理酒店入住手续', thumbnail: '🏨', dialogue: [{ speaker: 'receptionist', text: 'Good afternoon. Do you have a reservation?' }, { speaker: 'user', text: 'Yes, under the name Li Ming.' }, { speaker: 'receptionist', text: 'Found it. You are in room 302. Here is your key card.' }], xpReward: 20 },
    { id: 'video_004', language: 'en', category: 'social', title: '自我介绍', duration: 25, description: '在社交场合自我介绍', thumbnail: '🤝', dialogue: [{ speaker: 'user', text: 'Hi, I am Sarah. Nice to meet you!' }, { speaker: 'other', text: 'Nice to meet you too, Sarah. I am Tom. Where are you from?' }, { speaker: 'user', text: 'I am from Canada. I am here for a business trip.' }], xpReward: 20 },
    { id: 'video_005', language: 'ja', category: 'daily', title: '便利店购物', duration: 30, description: '在日本便利店的对话', thumbnail: '🏪', dialogue: [{ speaker: 'clerk', text: 'いらっしゃいませ！（欢迎光临！）' }, { speaker: 'user', text: 'このおにぎりをください。（请给我这个饭团。）' }, { speaker: 'clerk', text: 'かしこまりました。お箸はいりますか？（好的，需要筷子吗？）' }], xpReward: 20 },
    { id: 'video_006', language: 'ja', category: 'daily', title: '问路', duration: 30, description: '在日本问路', thumbnail: '🗾', dialogue: [{ speaker: 'user', text: 'すみません、駅はどこですか。（请问，车站在哪里？）' }, { speaker: 'local', text: 'まっすぐ行って、二つ目の信号を右に曲がってください。（直走，在第二个红绿灯右转。）' }, { speaker: 'user', text: 'ありがとうございます！（谢谢！）' }], xpReward: 20 },
    { id: 'video_007', language: 'en', category: 'business', title: '商务会议开场', duration: 30, description: '商务会议中的开场白', thumbnail: '💼', dialogue: [{ speaker: 'host', text: 'Thank you all for coming. Let us get started with today is agenda.' }, { speaker: 'user', text: 'Before we begin, could I share the updated report?' }, { speaker: 'host', text: 'Of course, please go ahead.' }], xpReward: 25 },
    { id: 'video_008', language: 'en', category: 'social', weekIndex: -1, title: '约会邀请', duration: 25, description: '邀请朋友出去玩的表达', thumbnail: '💬', dialogue: [{ speaker: 'user', text: 'Hey, are you free this Saturday?' }, { speaker: 'friend', text: 'Yes, I do not have any plans. Why do you ask?' }, { speaker: 'user', text: 'Would you like to check out that new cafe downtown?' }], xpReward: 20 },
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
