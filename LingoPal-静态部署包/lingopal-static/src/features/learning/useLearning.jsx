// ========== Learning Hook ==========
// Core learning business logic: progress tracking, achievement checking, XP calculation

const useLearning = () => {
  const {
    currentLanguage, currentLevelId, questions, currentQuestionIndex,
    score, combo, maxCombo, correctCount, wrongAnswers,
    timeRemaining, isPlaying, levelResult,
  } = useLearningStore();

  const currentQuestion = questions[currentQuestionIndex] || null;
  const totalQuestions = questions.length;
  const progress = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;

  const checkAndUnlockAchievements = useCallback((state) => {
    const userState = useUserStore.getState();
    const unlocked = [];

    ACHIEVEMENTS.forEach(ach => {
      if (userState.achievements.includes(ach.id)) return;

      let condition = false;
      switch (ach.id) {
        case 'first-level':
          condition = state.completedLevels?.length >= 1;
          break;
        case 'five-levels':
          condition = state.completedLevels?.length >= 5;
          break;
        case 'ten-levels':
          condition = state.completedLevels?.length >= 10;
          break;
        case 'first-perfect':
          condition = state.perfectCount >= 1;
          break;
        case 'streak-3':
          condition = userState.streakDays >= 3;
          break;
        case 'streak-7':
          condition = userState.streakDays >= 7;
          break;
        case 'combo-master':
          condition = state.maxCombo >= 5;
          break;
        case 'word-collector':
          condition = state.wordCount >= 20;
          break;
        case 'polyglot':
          condition = state.langCount >= 3;
          break;
        case 'translator-100':
          condition = state.translationCount >= 100;
          break;
        case 'night-owl':
          condition = state.isNightStudy;
          break;
        case 'early-bird':
          condition = state.isEarlyStudy;
          break;
      }

      if (condition) {
        const newlyUnlocked = userState.unlockAchievement(ach.id, ach.title, ach.desc, ach.icon);
        if (newlyUnlocked) {
          unlocked.push(ach);
        }
      }
    });

    return unlocked;
  }, []);

  const startLevel = useCallback(async (level) => {
    useLearningStore.getState().startLevel(level);
  }, []);

  const submitAnswer = useCallback((questionId, userAnswer, correctAnswer) => {
    const isCorrect = userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    const result = useLearningStore.getState().submitAnswer(
      questionId, userAnswer, isCorrect, correctAnswer
    );
    return result;
  }, []);

  const nextQuestion = useCallback(() => {
    return useLearningStore.getState().nextQuestion();
  }, []);

  const finishLevel = useCallback(async () => {
    const state = useLearningStore.getState();
    const level = getLevel(currentLanguage, state.currentLevelId);
    if (!level) return null;

    // Time bonus
    const timeBonus = state.timeRemaining > 0 ? Math.floor(state.timeRemaining) * 2 : 0;
    const finalScore = state.score + timeBonus;

    // Stars
    let stars = 0;
    if (finalScore >= level.minScoreFor1Star) stars = 1;
    if (finalScore >= level.minScoreFor2Star) stars = 2;
    if (finalScore >= level.minScoreFor3Star) stars = 3;

    const userId = useUserStore.getState().userId;

    // Save progress to DB
    if (userId && window.db) {
      const existing = await db.userProgress.get({ userId, language: currentLanguage, levelId: level.levelId });
      if (existing) {
        await db.userProgress.update(existing, {
          status: 'completed',
          score: Math.max(existing.score, finalScore),
          stars: Math.max(existing.stars, stars),
          completedAt: Date.now(),
          bestScore: Math.max(existing.bestScore, finalScore),
          attemptCount: existing.attemptCount + 1,
        });
      } else {
        await db.userProgress.add({
          userId,
          language: currentLanguage,
          levelId: level.levelId,
          status: 'completed',
          score: finalScore,
          stars,
          completedAt: Date.now(),
          bestScore: finalScore,
          attemptCount: 1,
        });
      }

      // Record daily log
      const xpEarned = finalScore;
      const hour = new Date().getHours();
      const isNight = hour >= 22 || hour < 5;
      const isEarly = hour >= 5 && hour < 8;

      await recordDailyLog(
        userId,
        Math.ceil(level.questions.length * 0.5), // estimate minutes
        state.correctCount + state.wrongAnswers.length,
        state.correctCount,
        xpEarned,
        { completedLevelId: level.levelId }
      );

      // Add XP
      useUserStore.getState().addXP(xpEarned);

      // Save wrong answers to error book
      if (state.wrongAnswers.length > 0) {
        for (const wa of state.wrongAnswers) {
          try {
            await db.errorBooks.add({
              userId,
              language: currentLanguage,
              questionId: wa.questionId,
              questionType: questions.find(q => q.id === wa.questionId)?.type || 'unknown',
              userAnswer: wa.userAnswer,
              correctAnswer: wa.correctAnswer,
              errorAt: Date.now(),
              reviewCount: 0,
            });
          } catch (e) { /* duplicate */ }
        }
      }

      // Check achievements
      const completedProgress = await db.userProgress
        .where('[userId+language+levelId]')
        .between([userId, currentLanguage, Dexie.minKey], [userId, currentLanguage, Dexie.maxKey])
        .toArray();
      const completedLevels = completedProgress.filter(p => p.status === 'completed');
      const perfectCount = completedProgress.filter(p => p.stars >= 3).length;

      const wordCount = await db.wordBooks.where('userId').equals(userId).count();
      const langProgress = await db.userProgress.where('userId').equals(userId).toArray();
      const uniqueLangs = new Set(langProgress.map(p => p.language));

      const newAchievements = checkAndUnlockAchievements({
        completedLevels,
        perfectCount,
        maxCombo: state.maxCombo,
        wordCount,
        langCount: uniqueLangs.size,
        isNightStudy: isNight,
        isEarlyStudy: isEarly,
      });

      const result = {
        score: finalScore,
        stars,
        correctCount: state.correctCount,
        totalQuestions: level.questions.length,
        maxCombo: state.maxCombo,
        timeBonus,
        newAchievements,
      };

      useLearningStore.getState().finishLevel(result);

      // Trigger confetti for good performance
      if (stars >= 2) {
        useUIStore.getState().triggerConfetti(stars === 3 ? 4000 : 2500);
      }

      return result;
    }

    return null;
  }, [currentLanguage, questions, checkAndUnlockAchievements]);

  const loadProgress = useCallback(async (language) => {
    const userId = useUserStore.getState().userId;
    if (!userId || !window.db) return [];
    try {
      return await db.userProgress
        .where('[userId+language+levelId]')
        .between([userId, language, Dexie.minKey], [userId, language, Dexie.maxKey])
        .toArray();
    } catch (e) {
      return [];
    }
  }, []);

  const resetLevel = useCallback(() => {
    useLearningStore.getState().resetLevel();
  }, []);

  const setTimeRemaining = useCallback((t) => {
    useLearningStore.getState().setTimeRemaining(t);
  }, []);

  return {
    currentLanguage,
    currentLevelId,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    score,
    combo,
    maxCombo,
    correctCount,
    wrongAnswers,
    timeRemaining,
    isPlaying,
    levelResult,
    startLevel,
    submitAnswer,
    nextQuestion,
    finishLevel,
    loadProgress,
    resetLevel,
    setTimeRemaining,
  };
};

Object.assign(window, { useLearning });
