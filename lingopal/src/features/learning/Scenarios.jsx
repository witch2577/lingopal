// ========== 6 Learning Scenarios Grid ==========

const Scenarios = ({ onSelectScene }) => {
  const userId = useUserStore(s => s.userId);
  const totalXP = useUserStore(s => s.totalXP);
  const profile = useUserStore(s => s.profile);
  const [progress, setProgress] = useState({});
  const [recentScene, setRecentScene] = useState(null);

  // 7-dimension profile
  const learningGoal = profile?.learningGoal || 'hobby';
  const dailyMinutes = profile?.dailyMinutes || '15min';
  const weakAreas = profile?.weakAreas || [];

  useEffect(() => {
    const load = async () => {
      if (!userId) return;
      const prog = await getSceneProgress(userId);
      setProgress(prog);
      // find most recently played
      const entries = Object.entries(prog);
      if (entries.length > 0) {
        const latest = entries.sort((a, b) => (b[1].lastPlayed || 0) - (a[1].lastPlayed || 0))[0];
        setRecentScene(latest[0]);
      }
    };
    load();
  }, [userId]);

  const currentLevel = getLevelByXP(totalXP);

  const isUnlocked = (scene) => {
    const unlockLevel = { commute: 1, bedtime: 1, exam: 3, travel: 1, social: 7, business: 5 };
    return currentLevel.level >= (unlockLevel[scene.id] || 1);
  };

  // Goal-based scene priority
  const GOAL_PRIORITY = {
    travel: ['travel', 'commute', 'social'],
    business: ['business', 'social', 'exam'],
    exam: ['exam', 'bedtime', 'business'],
    hobby: ['social', 'travel', 'bedtime'],
    immigration: ['exam', 'business', 'social'],
  };
  const priorityOrder = GOAL_PRIORITY[learningGoal] || [];
  const sortedScenarios = [...SCENARIOS].sort((a, b) => {
    const pa = priorityOrder.indexOf(a.id);
    const pb = priorityOrder.indexOf(b.id);
    if (pa !== -1 && pb !== -1) return pa - pb;
    if (pa !== -1) return -1;
    if (pb !== -1) return 1;
    return 0;
  });

  // Duration suitability
  const SHORT_SCENES = new Set(['commute', 'bedtime']);
  const isShortScene = (scene) => SHORT_SCENES.has(scene.id);
  const userHasShortTime = ['5min', '15min'].includes(dailyMinutes);

  // Weak area -> scene mapping
  const weakAreaSceneMap = {
    speaking: 'social',
    listening: 'commute',
    reading: 'bedtime',
    writing: 'exam',
    vocabulary: 'bedtime',
  };
  const recommendedSceneByWeakness = weakAreas.length > 0 ? weakAreaSceneMap[weakAreas[0]] : null;

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">场景学习</h2>
          <p className="text-xs text-slate-400 mt-0.5">选择适合你的学习场景，让语言融入生活</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-50 rounded-xl">
          <Icon name="zap" size={14} className="text-brand-500" />
          <span className="text-xs font-medium text-brand-600">Lv.{currentLevel.level}</span>
        </div>
      </div>

      {/* Profile-based suggestion */}
      <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="sparkles" size={14} className="text-brand-500" />
          <span className="text-sm font-semibold text-slate-700">场景推荐</span>
          <span className="text-[10px] text-slate-400 ml-auto">基于你的画像</span>
        </div>
        <div className="text-xs text-slate-600">
          学习目标「{PROFILE_DIMENSIONS.learningGoal.options.find(o => o.key === learningGoal)?.label || learningGoal}」优先推荐
          {priorityOrder.slice(0, 2).map(id => SCENARIOS.find(s => s.id === id)?.name).filter(Boolean).join('、')} 场景
          {userHasShortTime && '，当前可用时长较短，建议选择时长较短的场景'}
          {recommendedSceneByWeakness && `；针对薄弱项建议练习「${SCENARIOS.find(s => s.id === recommendedSceneByWeakness)?.name}」`}
        </div>
      </div>

      {/* Continue recent */}
      {recentScene && SCENARIOS.find(s => s.id === recentScene) && (
        <Card
          className="bg-gradient-to-r from-brand-500 to-violet-500 text-white cursor-pointer btn-press"
          padding="p-4"
          onClick={() => onSelectScene(SCENARIOS.find(s => s.id === recentScene))}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">{SCENARIOS.find(s => s.id === recentScene)?.icon}</span>
            <div className="flex-1">
              <div className="text-xs opacity-80">继续学习</div>
              <div className="font-semibold">{SCENARIOS.find(s => s.id === recentScene)?.name}</div>
            </div>
            <Icon name="arrow-right" size={20} />
          </div>
        </Card>
      )}

      {/* Scenario grid */}
      <div className="grid grid-cols-2 gap-3">
        {sortedScenarios.map(scene => {
          const unlocked = isUnlocked(scene);
          const prog = progress[scene.id];
          const completed = prog?.completedCount || 0;
          const isGoalMatch = priorityOrder.includes(scene.id);
          const isDurationMatch = userHasShortTime && isShortScene(scene);
          const isWeakMatch = scene.id === recommendedSceneByWeakness;

          return (
            <motion.div
              key={scene.id}
              whileTap={unlocked ? { scale: 0.96 } : {}}
              onClick={() => unlocked && onSelectScene(scene)}
              className={`relative p-4 rounded-2xl border transition-all ${
                unlocked
                  ? 'bg-white border-slate-100 shadow-sm cursor-pointer hover:shadow-md'
                  : 'bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed'
              }`}
            >
              {!unlocked && (
                <div className="absolute top-2 right-2">
                  <Icon name="lock" size={14} className="text-slate-300" />
                </div>
              )}
              {unlocked && (isGoalMatch || isWeakMatch) && (
                <div className="absolute top-2 right-2">
                  <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                    isWeakMatch ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {isWeakMatch ? '强化推荐' : '目标匹配'}
                  </span>
                </div>
              )}
              {unlocked && isDurationMatch && !isGoalMatch && !isWeakMatch && (
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-medium">
                    时长适合
                  </span>
                </div>
              )}
              <div className="text-3xl mb-2">{scene.icon}</div>
              <div className="font-semibold text-sm text-slate-800">{scene.name}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{scene.tag}</div>
              <div className="text-[10px] text-slate-400">{scene.duration}</div>
              {unlocked && completed > 0 && (
                <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-400 rounded-full" style={{ width: `${Math.min(100, completed * 10)}%` }} />
                </div>
              )}
              {!unlocked && (
                <div className="mt-2 text-[10px] text-brand-500 font-medium">
                  Lv.{scene.id === 'exam' ? 3 : scene.id === 'business' ? 5 : 7} 解锁
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Tips */}
      <Card padding="p-4" className="bg-amber-50/50 border-amber-100">
        <div className="flex items-start gap-2">
          <span className="text-lg">💡</span>
          <div>
            <div className="text-sm font-medium text-amber-800">学习小贴士</div>
            <div className="text-xs text-amber-600 mt-0.5">
              不同场景的学习内容会获得不同倍数的经验值加成，「考前冲刺」和「商务场景」经验值更高哦！
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

Object.assign(window, { Scenarios });
