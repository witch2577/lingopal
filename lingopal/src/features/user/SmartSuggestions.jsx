// ========== Smart Learning Suggestions ==========
// Personalized recommendations based on profile + learning data

const SmartSuggestions = () => {
  const userId = useUserStore(s => s.userId);
  const profile = useUserStore(s => s.profile);
  const totalXP = useUserStore(s => s.totalXP);
  const streakDays = useUserStore(s => s.streakDays);
  const currentLanguage = useLearningStore(s => s.currentLanguage);
  const [suggestions, setSuggestions] = useState([]);
  const [weakQuestions, setWeakQuestions] = useState([]);
  const [dailyReports, setDailyReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!userId) return;
      setLoading(true);
      const [wq, reports] = await Promise.all([
        getWeakQuestions(userId, currentLanguage, 10),
        getDailyReports(userId, 7),
      ]);
      setWeakQuestions(wq);
      setDailyReports(reports);

      const list = generateSuggestions(profile, wq, reports, totalXP, streakDays, currentLanguage);
      setSuggestions(list);
      setLoading(false);
    };
    load();
  }, [userId, profile, currentLanguage, totalXP, streakDays]);

  const generateSuggestions = (profile, weakQs, reports, xp, streak, lang) => {
    const list = [];
    const weakAreas = profile?.weakAreas || [];
    const dailyMinutes = profile?.dailyMinutes || '15min';
    const goal = profile?.learningGoal || 'hobby';
    const minutesMap = { '5min': 5, '15min': 15, '30min': 30, '60min': 60 };
    const availableMinutes = minutesMap[dailyMinutes] || 15;

    // Streak-based suggestion
    if (streak < 3) {
      list.push({
        type: 'streak',
        priority: 'high',
        icon: '🔥',
        title: '建立连胜习惯',
        desc: `你已连学 ${streak} 天，再坚持 ${3 - streak} 天即可获得「初燃星火」徽章！`,
        action: '去打卡',
        actionType: 'learning',
        color: 'amber',
      });
    }

    // Weak area suggestions
    if (weakAreas.includes('vocabulary')) {
      list.push({
        type: 'weakness',
        priority: 'high',
        icon: '📚',
        title: '词汇量提升计划',
        desc: '你的薄弱环节包含词汇，建议每天使用「通勤碎片学习」场景刷10个单词',
        action: '去背单词',
        actionType: 'scenario-commute',
        color: 'emerald',
      });
    }
    if (weakAreas.includes('speaking')) {
      list.push({
        type: 'weakness',
        priority: 'high',
        icon: '🗣️',
        title: '口语强化训练',
        desc: '建议进入「社交对话」场景进行AI陪练，每天10分钟大胆开口',
        action: '去练习',
        actionType: 'scenario-social',
        color: 'blue',
      });
    }
    if (weakAreas.includes('listening')) {
      list.push({
        type: 'weakness',
        priority: 'medium',
        icon: '🎧',
        title: '听力磨耳朵',
        desc: '多使用听力选图和听写题型，「睡前复习」场景适合磨耳朵',
        action: '去训练',
        actionType: 'scenario-bedtime',
        color: 'violet',
      });
    }

    // Wrong question review
    if (weakQs.length > 0) {
      const topWeak = weakQs[0];
      list.push({
        type: 'review',
        priority: 'high',
        icon: '📝',
        title: '错题本提醒',
        desc: `「${topWeak.question?.question?.slice(0, 20) || '某道题'}...」你已做错 ${topWeak.count} 次，建议复习`,
        action: '去复习',
        actionType: 'learning',
        color: 'rose',
      });
    }

    // Goal-based suggestions
    if (goal === 'exam') {
      list.push({
        type: 'goal',
        priority: 'medium',
        icon: '📝',
        title: '考前冲刺模式',
        desc: '检测到你的目标是考试考级，推荐使用「考前冲刺」场景进行密集训练',
        action: '去冲刺',
        actionType: 'scenario-exam',
        color: 'red',
      });
    }
    if (goal === 'business') {
      list.push({
        type: 'goal',
        priority: 'medium',
        icon: '💼',
        title: '商务场景特训',
        desc: '你的目标是工作商务，解锁「商务场景」可提升职场语言能力',
        action: '去训练',
        actionType: 'scenario-business',
        color: 'blue',
      });
    }
    if (goal === 'travel') {
      list.push({
        type: 'goal',
        priority: 'medium',
        icon: '✈️',
        title: '旅行应急速成',
        desc: '旅游目标用户推荐「旅行应急」场景，10分钟学会机场/酒店/餐厅实用短句',
        action: '去学习',
        actionType: 'scenario-travel',
        color: 'emerald',
      });
    }

    // Time-based suggestion
    if (availableMinutes <= 15) {
      list.push({
        type: 'time',
        priority: 'low',
        icon: '⏱️',
        title: '碎片时间利用',
        desc: `你每天只有 ${availableMinutes} 分钟，「通勤碎片学习」5-10分钟刚好适合你`,
        action: '去学习',
        actionType: 'scenario-commute',
        color: 'indigo',
      });
    }

    // Level progression suggestion
    const levelInfo = getXPProgress(xp);
    if (levelInfo.progress > 0.7) {
      list.push({
        type: 'progress',
        priority: 'medium',
        icon: '🚀',
        title: '即将升级！',
        desc: `距离 Lv.${levelInfo.level.level + 1} 只差 ${levelInfo.needed - levelInfo.current} XP，再做几道题就能升级`,
        action: '去升级',
        actionType: 'learning',
        color: 'brand',
      });
    }

    // Low activity warning
    const last7Total = reports.reduce((s, r) => s + r.studyMinutes, 0);
    if (last7Total < 30) {
      list.push({
        type: 'activity',
        priority: 'high',
        icon: '⚡',
        title: '学习活跃度偏低',
        desc: '近7天学习时长较少，建议每天安排10分钟保持语言记忆',
        action: '开始学习',
        actionType: 'learning',
        color: 'amber',
      });
    }

    return list.slice(0, 5);
  };

  const handleAction = (suggestion) => {
    const type = suggestion.actionType;
    if (type.startsWith('scenario-')) {
      const sceneId = type.replace('scenario-', '');
      const scene = SCENARIOS.find(s => s.id === sceneId);
      if (scene) {
        // Emit event for parent to handle navigation
        window.__lingopal_scene_selected = scene;
        useUIStore.getState().showNotification(`已选择「${scene.name}」，请前往学习页`, 'info');
      }
    } else if (type === 'learning') {
      useUIStore.getState().showNotification('请切换到「学习」标签开始', 'info');
    }
  };

  const colorMap = {
    amber: { bg: 'bg-amber-50', border: 'border-amber-100', title: 'text-amber-800', desc: 'text-amber-600', btn: 'bg-amber-500 text-white' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', title: 'text-emerald-800', desc: 'text-emerald-600', btn: 'bg-emerald-500 text-white' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-100', title: 'text-blue-800', desc: 'text-blue-600', btn: 'bg-blue-500 text-white' },
    violet: { bg: 'bg-violet-50', border: 'border-violet-100', title: 'text-violet-800', desc: 'text-violet-600', btn: 'bg-violet-500 text-white' },
    rose: { bg: 'bg-rose-50', border: 'border-rose-100', title: 'text-rose-800', desc: 'text-rose-600', btn: 'bg-rose-500 text-white' },
    red: { bg: 'bg-red-50', border: 'border-red-100', title: 'text-red-800', desc: 'text-red-600', btn: 'bg-red-500 text-white' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', title: 'text-indigo-800', desc: 'text-indigo-600', btn: 'bg-indigo-500 text-white' },
    brand: { bg: 'bg-brand-50', border: 'border-brand-100', title: 'text-brand-800', desc: 'text-brand-600', btn: 'bg-brand-500 text-white' },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner size={32} className="text-brand-500" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">智能学习建议</h2>
        <Badge variant="primary">{suggestions.length} 条建议</Badge>
      </div>

      {suggestions.length === 0 ? (
        <Card padding="p-8" className="text-center">
          <div className="text-4xl mb-3">🎉</div>
          <p className="text-sm text-slate-500">目前学习状态良好，没有特别建议</p>
          <p className="text-xs text-slate-400 mt-1">继续保持，挑战更高难度吧！</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {suggestions.map((s, i) => {
            const c = colorMap[s.color] || colorMap.brand;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${c.bg} border ${c.border} rounded-2xl p-4`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold ${c.title}`}>{s.title}</span>
                      {s.priority === 'high' && (
                        <span className="px-1.5 py-0.5 bg-red-100 text-red-600 rounded text-[10px] font-medium">优先</span>
                      )}
                    </div>
                    <p className={`text-xs ${c.desc} mt-1 leading-relaxed`}>{s.desc}</p>
                    <button
                      onClick={() => handleAction(s)}
                      className={`mt-2 px-3 py-1.5 rounded-lg text-xs font-medium ${c.btn} btn-press`}
                    >
                      {s.action}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Profile summary */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3">你的学习画像</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: '水平', value: PROFILE_DIMENSIONS.languageLevel.options.find(o => o.key === profile?.languageLevel)?.label || '-' },
            { label: '目标', value: PROFILE_DIMENSIONS.learningGoal.options.find(o => o.key === profile?.learningGoal)?.label || '-' },
            { label: '时长', value: PROFILE_DIMENSIONS.dailyMinutes.options.find(o => o.key === profile?.dailyMinutes)?.label || '-' },
            { label: '时段', value: PROFILE_DIMENSIONS.studyTimePreference.options.find(o => o.key === profile?.studyTimePreference)?.label || '-' },
          ].map(item => (
            <div key={item.label} className="bg-slate-50 rounded-xl p-2.5">
              <div className="text-[10px] text-slate-400">{item.label}</div>
              <div className="text-sm font-medium text-slate-700">{item.value}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-3">
          建议基于你的学习画像和近期数据生成，在个人资料中修改画像可获得更精准建议
        </p>
      </Card>
    </div>
  );
};

Object.assign(window, { SmartSuggestions });
