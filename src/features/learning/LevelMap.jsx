// ========== Level Map Component ==========
// Shows the game-style level progression map

const LevelMap = ({ onStartLevel }) => {
  const currentLanguage = useLearningStore(s => s.currentLanguage);
  const setLanguage = useLearningStore(s => s.setLanguage);
  const [progress, setProgress] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const themes = getThemes(currentLanguage);
  const allLevels = getAllLevels(currentLanguage);
  const { isMobile } = useMobileDetect();

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setIsLoading(true);
      const userId = useUserStore.getState().userId;
      if (!userId || !window.db) {
        setProgress([]);
        setIsLoading(false);
        return;
      }
      try {
        const data = await db.userProgress
          .where('[userId+language+levelId]')
          .between([userId, currentLanguage, Dexie.minKey], [userId, currentLanguage, Dexie.maxKey])
          .toArray();
        if (mounted) {
          setProgress(data);
          setIsLoading(false);
        }
      } catch (e) {
        setIsLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, [currentLanguage]);

  // Calculate level status
  const getLevelStatus = useCallback((level) => {
    const p = progress.find(pr => pr.levelId === level.levelId);
    if (p && p.status === 'completed') {
      return { status: 'completed', stars: p.stars || 0, score: p.score };
    }
    // check prerequisites
    const prereqsMet = level.prerequisites.every(prereq => {
      const pp = progress.find(pr => pr.levelId === prereq);
      return pp && pp.status === 'completed';
    });
    // If no prereqs or first level, available
    if (level.prerequisites.length === 0 || prereqsMet) {
      return { status: 'available', stars: 0, score: 0 };
    }
    return { status: 'locked', stars: 0, score: 0 };
  }, [progress]);

  // Find the "current" level (first available non-completed)
  const currentLevelId = useMemo(() => {
    for (const level of allLevels) {
      const status = getLevelStatus(level);
      if (status.status === 'available') return level.levelId;
    }
    return null;
  }, [allLevels, getLevelStatus]);

  // Calculate total stats
  const totalStats = useMemo(() => {
    const completed = progress.filter(p => p.status === 'completed').length;
    const totalLevels = allLevels.length;
    const totalStars = progress.reduce((sum, p) => sum + (p.stars || 0), 0);
    const maxStars = totalLevels * 3;
    return { completed, totalLevels, totalStars, maxStars };
  }, [progress, allLevels]);

  const streakDays = useUserStore(s => s.streakDays);
  const totalXP = useUserStore(s => s.totalXP);
  const profile = useUserStore(s => s.profile);

  // 7-dimension profile integration
  const languageLevel = profile?.languageLevel || 'beginner';
  const weakAreas = profile?.weakAreas || [];
  const learningGoal = profile?.learningGoal || 'hobby';
  const learningStyle = profile?.learningStyle || 'mixed';
  const dailyMinutes = profile?.dailyMinutes || '15min';

  // Recommend task count based on dailyMinutes
  const RECOMMENDED_TASKS = { '5min': 1, '15min': 2, '30min': 3, '60min': 5 };
  const recommendedTasks = RECOMMENDED_TASKS[dailyMinutes] || 2;

  // Theme suitability by languageLevel
  const themeSuitability = {
    beginner: ['basic'],
    elementary: ['basic', 'daily'],
    intermediate: ['daily', 'grammar'],
    advanced: ['grammar'],
  };
  const recommendedThemes = new Set(themeSuitability[languageLevel] || ['basic']);

  // Weak area -> question type mapping
  const weakAreaTypeMap = {
    speaking: 'repeat',
    listening: 'dictation',
    reading: 'fill-blank',
    writing: 'fill-blank',
    vocabulary: 'translate',
  };

  // Learning languages available
  const learningLanguages = LANGUAGES.filter(l =>
    l.type !== 'system' && QUIZ_DATA[l.code]
  );

  return (
    <div className="flex flex-col gap-3 sm:gap-4 pb-2">
      {/* Header: User stats */}
      <div className="bg-brand-gradient rounded-2xl p-4 sm:p-5 text-white shadow-lg shadow-brand-500/20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center text-xl backdrop-blur-sm">
              {profile?.nickname?.[0] || '👤'}
            </div>
            <div>
              <div className="text-xs sm:text-sm opacity-80">欢迎回来</div>
              <div className="font-bold text-base sm:text-lg">{profile?.nickname || '学习者'}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm">
              <Icon name="flame" size={16} className="text-amber-300" />
              <span className="font-semibold">{streakDays || 0} 天</span>
            </div>
            <div className="text-xs opacity-70">连续学习</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 text-center">
            <div className="text-base sm:text-lg font-bold">{totalStats.completed}/{totalStats.totalLevels}</div>
            <div className="text-[10px] opacity-80">通关</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 text-center">
            <div className="text-base sm:text-lg font-bold flex items-center justify-center gap-0.5">
              {totalStats.totalStars} <Icon name="star" size={14} className="text-amber-300" />
            </div>
            <div className="text-[10px] opacity-80">星星</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 text-center">
            <div className="text-base sm:text-lg font-bold">{totalXP || 0}</div>
            <div className="text-[10px] opacity-80">经验值</div>
          </div>
        </div>
      </div>

      {/* Language selector */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1 -mx-1 px-1">
        {learningLanguages.map(lang => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-xl whitespace-nowrap transition-all btn-press flex-shrink-0 touch-target ${
              currentLanguage === lang.code
                ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
            }`}
          >
            <span className="text-base sm:text-lg">{lang.flag}</span>
            <span className="text-xs sm:text-sm font-medium">{lang.name}</span>
            {lang.type === 'dialect' && (
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                currentLanguage === lang.code ? 'bg-white/20' : 'bg-amber-100 text-amber-600'
              }`}>
                方言
              </span>
            )}
            {lang.type === 'beta' && (
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                currentLanguage === lang.code ? 'bg-white/20' : 'bg-amber-100 text-amber-700'
              }`}>
                Beta
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Profile-based smart recommendations */}
      <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-100 shadow-sm space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2">
          <Icon name="sparkles" size={16} className="text-brand-500" />
          <h3 className="text-sm font-semibold text-slate-700">为你推荐</h3>
          <span className="text-[10px] text-slate-400 ml-auto">基于你的画像</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-brand-50 rounded-lg p-2 sm:p-2.5">
            <div className="text-[10px] text-brand-600 mb-0.5">今日目标</div>
            <div className="text-sm font-bold text-brand-700">{recommendedTasks} 关</div>
            <div className="text-[10px] text-brand-500">约 {DAILY_MINUTES_MAP[dailyMinutes] || 15} 分钟</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-2 sm:p-2.5">
            <div className="text-[10px] text-slate-500 mb-0.5">当前水平</div>
            <div className="text-sm font-bold text-slate-700">
              {PROFILE_DIMENSIONS.languageLevel.options.find(o => o.key === languageLevel)?.label || languageLevel}
            </div>
            <div className="text-[10px] text-slate-400">
              推荐 {Array.from(recommendedThemes).map(t => {
                const map = { basic: '基础词汇', daily: '日常对话', grammar: '语法进阶' };
                return map[t];
              }).filter(Boolean).join('、')}
            </div>
          </div>
        </div>
        {weakAreas.length > 0 && (
          <div className="flex items-start gap-2 bg-amber-50 rounded-lg p-2 sm:p-2.5">
            <span className="text-sm">🎯</span>
            <div className="flex-1">
              <div className="text-[10px] text-amber-700 font-medium">薄弱环节强化</div>
              <div className="text-xs text-amber-600 mt-0.5">
                你的薄弱项是「{weakAreas.map(w => PROFILE_DIMENSIONS.weakAreas.options.find(o => o.key === w)?.label || w).join('、')}」，建议优先练习相关题型
              </div>
            </div>
          </div>
        )}
        {learningStyle !== 'mixed' && (
          <div className="flex items-start gap-2 bg-violet-50 rounded-lg p-2 sm:p-2.5">
            <span className="text-sm">
              {PROFILE_DIMENSIONS.learningStyle.options.find(o => o.key === learningStyle)?.emoji || '✨'}
            </span>
            <div className="flex-1">
              <div className="text-[10px] text-violet-700 font-medium">学习偏好适配</div>
              <div className="text-xs text-violet-600 mt-0.5">
                {learningStyle === 'visual' && '你是视觉型学习者，推荐多使用图片配对、阅读填空等视觉化内容'}
                {learningStyle === 'auditory' && '你是听觉型学习者，推荐多听写、跟读等音频类练习'}
                {learningStyle === 'kinesthetic' && '你是动手型学习者，推荐多使用交互式配对、填空等互动练习'}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Themes / Levels */}
      {isLoading ? (
        <PageSkeleton type="list" />
      ) : (
      <div className="flex flex-col gap-4 sm:gap-5">
        {themes.map((theme, themeIdx) => {
          const isRecommended = recommendedThemes.has(theme.id);
          return (
            <div key={theme.id}>
              {/* Theme header */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: theme.color }}
                >
                  {themeIdx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-slate-800 text-sm">{theme.name}</h3>
                    {theme.isWeekly && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-brand-100 text-brand-700 text-[10px] font-medium">
                        <Icon name="sparkles" size={10} />
                        本周轮换
                      </span>
                    )}
                    {isRecommended && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-medium">
                        <Icon name="check-circle" size={10} />
                        适合你
                      </span>
                    )}
                    {!isRecommended && languageLevel !== 'beginner' && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px]">
                        进阶内容
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">{theme.levels.length} 个关卡</p>
                </div>
              </div>

            {/* Level nodes - horizontal path */}
            <div className="relative pl-3 sm:pl-4">
              {/* Connecting line */}
              <div
                className="absolute left-[19px] sm:left-[22px] top-4 bottom-4 w-0.5 -translate-x-1/2"
                style={{ background: 'repeating-linear-gradient(to bottom, #E2E8F0 0, #E2E8F0 4px, transparent 4px, transparent 8px)' }}
              />

              <div className="flex flex-col gap-2 sm:gap-3">
                {theme.levels.map((level, idx) => {
                  const status = getLevelStatus(level);
                  const isCurrent = currentLevelId === level.levelId;

                  return (
                    <motion.div
                      key={level.levelId}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="relative flex items-center gap-2 sm:gap-3"
                    >
                      {/* Node circle */}
                      <button
                        onClick={() => {
                          if (status.status !== 'locked') {
                            onStartLevel(level);
                          }
                        }}
                        disabled={status.status === 'locked'}
                        className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all btn-press z-10 touch-target ${
                          status.status === 'completed'
                            ? 'bg-amber-400 text-white shadow-md shadow-amber-400/40'
                            : status.status === 'available'
                              ? 'bg-white border-2 border-brand-500 text-brand-600 shadow-md'
                              : 'bg-slate-100 text-slate-300 border-2 border-slate-200 cursor-not-allowed'
                        }`}
                      >
                        {status.status === 'completed' ? (
                          <Icon name="star" size={isMobile ? 16 : 18} className="text-white" />
                        ) : status.status === 'available' ? (
                          <span className="text-sm font-bold">{idx + 1}</span>
                        ) : (
                          <Icon name="lock" size={14} />
                        )}

                        {/* Pulse for current level */}
                        {isCurrent && status.status === 'available' && (
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-brand-400"
                            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          />
                        )}
                      </button>

                      {/* Level card */}
                      <button
                        onClick={() => {
                          if (status.status !== 'locked') {
                            onStartLevel(level);
                          }
                        }}
                        disabled={status.status === 'locked'}
                        className={`flex-1 text-left p-2.5 sm:p-3 rounded-xl transition-all btn-press touch-target ${
                          status.status === 'locked'
                            ? 'bg-slate-50 opacity-60 cursor-not-allowed'
                            : 'bg-white hover:bg-slate-50 shadow-sm border border-slate-100 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="min-w-0">
                            <div className={`font-semibold text-sm ${
                              status.status === 'locked' ? 'text-slate-400' : 'text-slate-700'
                            }`}>
                              第{idx + 1}关 · {level.title}
                              {level.isWeekly && (
                                <span className="ml-1.5 inline-flex items-center px-1 py-0.5 rounded bg-brand-100 text-brand-700 text-[9px] font-medium">
                                  每周
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                              <span className="flex items-center gap-0.5">
                                <Icon name="clock" size={12} /> {level.timeLimit}秒
                              </span>
                              <span>·</span>
                              <span>{level.questions.length}题</span>
                            </div>
                          </div>
                          <div className="flex items-center flex-shrink-0 ml-2">
                            {status.status === 'completed' ? (
                              <div className="flex">
                                {[1, 2, 3].map(s => (
                                  <Icon
                                    key={s}
                                    name="star"
                                    size={isMobile ? 14 : 16}
                                    className={s <= status.stars ? 'text-amber-400' : 'text-slate-200'}
                                  />
                                ))}
                              </div>
                            ) : status.status === 'available' ? (
                              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center">
                                <Icon name="play" size={isMobile ? 12 : 14} />
                              </div>
                            ) : (
                              <span className="text-xs text-slate-300">未解锁</span>
                            )}
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      )}
    </div>
  );
};

Object.assign(window, { LevelMap });
