// ========== Zustand Stores ==========
// Uses UMD bundle: window.zustand

const { create } = zustand;

// ---- Translation Store ----
const useTranslationStore = create((set, get) => ({
  sourceText: '',
  translatedText: '',
  sourceLang: 'auto',
  targetLang: 'en',
  isTranslating: false,
  history: [],
  error: null,
  activeTab: 'text', // text | voice | ocr

  setSourceText: (text) => set({ sourceText: text }),
  setTranslatedText: (text) => set({ translatedText: text }),
  setSourceLang: (lang) => set({ sourceLang: lang }),
  setTargetLang: (lang) => set({ targetLang: lang }),
  setIsTranslating: (v) => set({ isTranslating: v }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setError: (err) => set({ error: err }),

  swapLanguages: () => {
    const { sourceLang, targetLang, sourceText, translatedText } = get();
    if (sourceLang === 'auto') return;
    set({
      sourceLang: targetLang,
      targetLang: sourceLang,
      sourceText: translatedText,
      translatedText: sourceText,
    });
  },

  addHistory: (record) => {
    const { history } = get();
    const newHistory = [record, ...history].slice(0, 50);
    set({ history: newHistory });
    // persist to indexeddb asynchronously
    if (window.db) {
      db.translationHistory.add({
        ...record,
        timestamp: Date.now(),
        isFavorite: false,
      }).catch((e) => { console.error('[TranslationStore.addHistory] 保存翻译历史失败:', e); });
    }
  },

  loadHistory: async () => {
    if (!window.db) return;
    try {
      const records = await db.translationHistory
        .orderBy('timestamp')
        .reverse()
        .limit(20)
        .toArray();
      set({ history: records });
    } catch (e) { console.error('[TranslationStore.loadHistory] 加载翻译历史失败:', e); }
  },
}));

// ---- Learning Store ----
const useLearningStore = create((set, get) => ({
  currentLanguage: 'en',
  currentLevelId: null,
  currentQuestionIndex: 0,
  questions: [],
  score: 0,
  combo: 0,
  maxCombo: 0,
  correctCount: 0,
  wrongAnswers: [],
  timeRemaining: 0,
  isPlaying: false,
  levelResult: null, // { score, stars, newAchievements }

  setLanguage: (lang) => set({ currentLanguage: lang }),
  setLevel: (levelId) => set({ currentLevelId: levelId }),

  startLevel: (level) => {
    set({
      currentLevelId: level.levelId,
      questions: level.questions,
      currentQuestionIndex: 0,
      score: 0,
      combo: 0,
      maxCombo: 0,
      correctCount: 0,
      wrongAnswers: [],
      timeRemaining: level.timeLimit,
      isPlaying: true,
      levelResult: null,
    });
  },

  submitAnswer: (questionId, userAnswer, isCorrect, correctAnswer) => {
    const state = get();
    const newCombo = isCorrect ? state.combo + 1 : 0;
    const maxCombo = Math.max(state.maxCombo, newCombo);
    const baseScore = isCorrect ? 10 : 0;
    const comboBonus = isCorrect && newCombo >= 2 ? newCombo * 2 : 0;
    const qScore = baseScore + comboBonus;

    const wrongAnswers = isCorrect
      ? state.wrongAnswers
      : [...state.wrongAnswers, { questionId, userAnswer, correctAnswer }];

    set({
      score: state.score + qScore,
      combo: newCombo,
      maxCombo,
      correctCount: state.correctCount + (isCorrect ? 1 : 0),
      wrongAnswers,
    });

    return {
      isCorrect,
      questionScore: qScore,
      combo: newCombo,
      totalScore: state.score + qScore,
    };
  },

  nextQuestion: () => {
    const state = get();
    const next = state.currentQuestionIndex + 1;
    if (next >= state.questions.length) {
      return false; // end of level
    }
    set({ currentQuestionIndex: next });
    return true;
  },

  addTimeBonus: () => {
    const state = get();
    const bonus = Math.floor(state.timeRemaining) * 2;
    set({ score: state.score + bonus });
    return bonus;
  },

  setTimeRemaining: (t) => set({ timeRemaining: t }),

  finishLevel: (result) => {
    set({ isPlaying: false, levelResult: result });
  },

  resetLevel: () => {
    set({
      currentLevelId: null,
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      combo: 0,
      maxCombo: 0,
      correctCount: 0,
      wrongAnswers: [],
      timeRemaining: 0,
      isPlaying: false,
      levelResult: null,
    });
  },
}));

// ---- User Store ----
const useUserStore = create((set, get) => ({
  profile: null,
  userId: null,
  isLoggedIn: false,
  preferences: {
    theme: 'light',
    defaultSourceLang: 'auto',
    defaultTargetLang: 'en',
    dailyReminder: false,
    reminderTime: '20:00',
  },
  achievements: [],
  totalXP: 0,
  streakDays: 0,
  streakRecoveryAvailable: null,
  currentLevel: null,

  init: async () => {
    const userId = await window.ensureDefaultUser();
    const profile = await db.userProfiles.get(userId);
    const achRecords = await db.achievements.where('userId').equals(userId).toArray();

    // Ensure 7-dimension fields exist on legacy profiles
    if (profile && !profile.languageLevel) {
      const defaults = {
        languageLevel: 'beginner',
        learningGoal: 'hobby',
        dailyMinutes: '15min',
        learningStyle: 'mixed',
        knownLanguages: ['zh-CN'],
        weakAreas: ['vocabulary'],
        studyTimePreference: 'evening',
      };
      await db.userProfiles.update(userId, defaults);
      Object.assign(profile, defaults);
    }

    const totalXP = profile?.totalXP || 0;
    const currentLevel = getLevelByXP(totalXP);
    set({
      userId,
      profile,
      isLoggedIn: !!profile,
      achievements: achRecords.map(a => a.achievementId),
      totalXP,
      streakDays: profile?.streakDays || 0,
      currentLevel,
    });
    // Check daily login and streak
    await get().checkDailyLogin();
    await get().checkStreakStatus();
    return profile;
  },

  login: (nickname) => {
    set(state => ({
      profile: { ...state.profile, nickname },
      isLoggedIn: true,
    }));
  },

  updateProfile: (updates) => {
    const state = get();
    if (!state.userId) return;
    db.userProfiles.update(state.userId, updates).catch((e) => {
      console.error('[UserStore.updateProfile] 更新用户资料失败:', e);
      useUIStore.getState().showNotification('保存失败，请重试', 'error');
    });
    set(state => ({ profile: { ...state.profile, ...updates } }));
  },

  addXP: (amount, source = 'other') => {
    const state = get();
    if (!state.userId || amount <= 0) return;
    const oldXP = state.totalXP;
    const newXP = oldXP + amount;
    const oldLevel = getLevelByXP(oldXP);
    const newLevel = getLevelByXP(newXP);
    db.userProfiles.update(state.userId, { totalXP: newXP }).catch((e) => {
      console.error('[UserStore.addXP] 更新经验值失败:', e);
    });
    addXPHistory(state.userId, amount, source).catch(() => {});
    set({ totalXP: newXP });
    // Level up notification
    if (newLevel.level > oldLevel.level) {
      useUIStore.getState().showNotification(
        `升级啦！Lv.${newLevel.level} ${newLevel.title}`, 'success', 4000
      );
      useUIStore.getState().triggerConfetti(4000);
    }
    return { oldXP, newXP, levelUp: newLevel.level > oldLevel.level, newLevel };
  },

  checkDailyLogin: async () => {
    const state = get();
    if (!state.userId) return;
    const today = todayStr();
    const todayLog = await db.dailyLogs.get({ userId: state.userId, date: today });
    if (!todayLog) {
      // First activity today - grant login XP and check streak
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = yesterday.toISOString().slice(0, 10);
      const yLog = await db.dailyLogs.get({ userId: state.userId, date: yStr });
      const newStreak = yLog ? (yLog.streakDay || 0) + 1 : 1;
      // Record streak
      await recordStreakDay(state.userId, today, newStreak, 1);
      await db.userProfiles.update(state.userId, { streakDays: newStreak });
      set({ streakDays: newStreak });
      // Grant login XP
      const xpAmount = XP_SOURCES.DAILY_LOGIN.base + Math.min(newStreak, 30) * XP_SOURCES.STREAK_BONUS.base;
      get().addXP(xpAmount, 'daily_login');
      // Check streak milestones
      const milestone = STREAK_MILESTONES.find(m => m.days === newStreak);
      if (milestone) {
        get().addXP(milestone.rewardXP, 'milestone_reached');
        get().unlockAchievement(
          `streak-${milestone.days}`,
          milestone.badge,
          `连续学习 ${milestone.days} 天`,
          milestone.icon
        );
        useUIStore.getState().showNotification(
          `连胜里程碑：${milestone.badge}！+${milestone.rewardXP}XP`, 'success', 4000
        );
      }
      // Check for broken streak recovery opportunity
      const twoDaysAgo = new Date();
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
      const tdaStr = twoDaysAgo.toISOString().slice(0, 10);
      const tdaLog = await db.dailyLogs.get({ userId: state.userId, date: tdaStr });
      const yStreakRec = await db.streakRecords.get({ userId: state.userId, date: yStr });
      if (tdaLog && !yStreakRec) {
        // Yesterday missed but day before had activity - offer recovery
        set({ streakRecoveryAvailable: { missedDate: yStr, cost: STREAK_RECOVERY_COST } });
      }
    }
  },

  recoverStreak: async () => {
    const state = get();
    if (!state.userId || !state.streakRecoveryAvailable) return false;
    const { missedDate, cost } = state.streakRecoveryAvailable;
    if (state.totalXP < cost) {
      useUIStore.getState().showNotification('经验值不足，无法恢复连胜', 'error');
      return false;
    }
    // Deduct XP
    const newXP = state.totalXP - cost;
    await db.userProfiles.update(state.userId, { totalXP: newXP });
    addXPHistory(state.userId, -cost, 'streak_recovery').catch(() => {});
    // Protect the missed day
    await protectStreakDay(state.userId, missedDate);
    // Recalculate streak
    const today = todayStr();
    const streakHistory = await getStreakHistory(state.userId, 30);
    let currentStreak = 0;
    for (let i = streakHistory.length - 1; i >= 0; i--) {
      const rec = streakHistory[i];
      if (rec.date > today) continue;
      if (rec.activityCount > 0 || rec.protected) {
        currentStreak++;
      } else {
        if (rec.date !== today) break;
      }
    }
    await db.userProfiles.update(state.userId, { streakDays: currentStreak });
    set({ totalXP: newXP, streakDays: currentStreak, streakRecoveryAvailable: null });
    useUIStore.getState().showNotification(`连胜已恢复！当前 ${currentStreak} 天`, 'success');
    return true;
  },

  checkStreakStatus: async () => {
    const state = get();
    if (!state.userId) return;
    const today = todayStr();
    const todayRec = await db.streakRecords.get({ userId: state.userId, date: today });
    if (!todayRec) {
      // Check if yesterday was missed
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = yesterday.toISOString().slice(0, 10);
      const yRec = await db.streakRecords.get({ userId: state.userId, date: yStr });
      const twoDaysAgo = new Date();
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
      const tdaStr = twoDaysAgo.toISOString().slice(0, 10);
      const tdaRec = await db.streakRecords.get({ userId: state.userId, date: tdaStr });
      if (tdaRec && !yRec) {
        set({ streakRecoveryAvailable: { missedDate: yStr, cost: STREAK_RECOVERY_COST } });
      }
    }
  },

  unlockAchievement: (achievementId, title, description, icon) => {
    const state = get();
    if (state.achievements.includes(achievementId)) return false;
    const record = {
      userId: state.userId,
      achievementId,
      title,
      description,
      icon,
      unlockedAt: Date.now(),
      isNew: true,
    };
    db.achievements.add(record).catch((e) => {
      console.error('[UserStore.unlockAchievement] 解锁成就失败:', e);
    });
    set({ achievements: [...state.achievements, achievementId] });
    return true;
  },

  setPreferences: (prefs) => {
    set(state => ({ preferences: { ...state.preferences, ...prefs } }));
    try {
      localStorage.setItem('lingopal_prefs', JSON.stringify({ ...get().preferences, ...prefs }));
    } catch (e) { console.error('[UserStore.setPreferences] 保存偏好设置失败:', e); }
  },

  loadPreferences: () => {
    try {
      const saved = localStorage.getItem('lingopal_prefs');
      if (saved) {
        const prefs = JSON.parse(saved);
        set(state => ({ preferences: { ...state.preferences, ...prefs } }));
      }
    } catch (e) { console.error('[UserStore.loadPreferences] 加载偏好设置失败:', e); }
  },
}));

// ---- UI Store ----
const useUIStore = create((set) => ({
  theme: 'light',
  isLoading: false,
  notification: null,
  showConfetti: false,

  setTheme: (theme) => {
    set({ theme });
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  setLoading: (v) => set({ isLoading: v }),

  showNotification: (message, type = 'info', duration = 2500) => {
    set({ notification: { message, type, id: Date.now() } });
    setTimeout(() => set({ notification: null }), duration);
  },

  triggerConfetti: (duration = 3000) => {
    set({ showConfetti: true });
    setTimeout(() => set({ showConfetti: false }), duration);
  },
}));

Object.assign(window, {
  useTranslationStore,
  useLearningStore,
  useUserStore,
  useUIStore,
});

// ---- Oral Store ----
const useOralStore = create((set, get) => ({
  activeTab: 'learning',
  currentLanguage: 'en',
  currentScenario: null,
  dialogueHistory: [],
  isRecording: false,
  recordingBlob: null,
  lastScore: null,

  setActiveTab: (tab) => set({ activeTab: tab }),
  setLanguage: (lang) => set({ currentLanguage: lang }),
  setScenario: (scenario) => set({ currentScenario: scenario, dialogueHistory: [] }),
  addDialogueMessage: (msg) => set(state => ({ dialogueHistory: [...state.dialogueHistory, msg] })),
  setIsRecording: (v) => set({ isRecording: v }),
  setRecordingBlob: (blob) => set({ recordingBlob: blob }),
  setLastScore: (score) => set({ lastScore: score }),
  resetDialogue: () => set({ dialogueHistory: [], currentScenario: null }),
}));

// ---- Written Store ----
const useWrittenStore = create((set, get) => ({
  activeTab: 'spelling',
  currentLanguage: 'en',
  score: 0,
  streak: 0,
  maxStreak: 0,
  totalAnswered: 0,
  correctCount: 0,
  currentQuestion: null,
  isPlaying: false,
  gameMode: 'listen',

  setActiveTab: (tab) => set({ activeTab: tab }),
  setLanguage: (lang) => set({ currentLanguage: lang }),
  setGameMode: (mode) => set({ gameMode: mode }),
  startGame: () => set({ score: 0, streak: 0, totalAnswered: 0, correctCount: 0, isPlaying: true }),
  answerQuestion: (isCorrect, points = 10) => {
    const state = get();
    const newStreak = isCorrect ? state.streak + 1 : 0;
    const newScore = isCorrect ? state.score + points + (newStreak >= 3 ? newStreak : 0) : state.score;
    set({
      score: newScore,
      streak: newStreak,
      maxStreak: Math.max(state.maxStreak, newStreak),
      totalAnswered: state.totalAnswered + 1,
      correctCount: state.correctCount + (isCorrect ? 1 : 0),
    });
    return { isCorrect, newScore, newStreak };
  },
  setCurrentQuestion: (q) => set({ currentQuestion: q }),
  endGame: () => set({ isPlaying: false }),
  reset: () => set({ score: 0, streak: 0, maxStreak: 0, totalAnswered: 0, correctCount: 0, isPlaying: false }),
}));

Object.assign(window, {
  useOralStore,
  useWrittenStore,
});
