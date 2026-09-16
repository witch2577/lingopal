// ========== Learning Plan Management ==========
// Daily 3-task recommendations based on profile; progress tracking; daily refresh
// Batch 1: daily check-in ceremony trigger, per-language minute accumulation,
//          check-in card revisit entry.

const LearningPlan = ({ onBack }) => {
  const { profile, userId } = useUserStore();
  const [planDate, setPlanDate] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dailyLog, setDailyLog] = useState(null);
  // Batch 1: check-in ceremony states
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showRevisitCard, setShowRevisitCard] = useState(false);
  const [checkInTriggeredToday, setCheckInTriggeredToday] = useState(false);

  const today = useMemo(() => {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }, []);

  // Generate recommendations based on profile
  const generatePlan = useCallback(() => {
    if (!profile) return [];
    const targets = profile.targetLanguages?.length > 0
      ? profile.targetLanguages
      : ['en'];
    const level = profile.languageLevel || 'beginner';
    const minutes = DAILY_MINUTES_MAP[profile.dailyMinutes] || 15;
    const goal = profile.learningGoal || 'hobby';
    const weak = profile.weakAreas?.[0] || 'vocabulary';

    const primaryLang = targets[0];
    const secondaryLang = targets[1] || primaryLang;

    // Map weak area to task type
    const weakTaskMap = {
      vocabulary: { type: 'quiz', label: '词汇关卡', icon: 'book-open', theme: 'basic' },
      speaking: { type: 'oral', label: '口语训练', icon: 'mic', theme: 'oral' },
      listening: { type: 'oral', label: '听力跟读', icon: 'volume', theme: 'listening' },
      reading: { type: 'quiz', label: '阅读闯关', icon: 'book-open', theme: 'daily' },
      writing: { type: 'written', label: '拼写练习', icon: 'type-text', theme: 'written' },
    };

    const weakTask = weakTaskMap[weak] || weakTaskMap.vocabulary;

    const plan = [
      {
        id: `${today}-1`,
        type: weakTask.type,
        label: weakTask.label,
        icon: weakTask.icon,
        language: primaryLang,
        theme: weakTask.theme,
        description: `${LANGUAGE_MAP[primaryLang]?.name || primaryLang} · ${minutes > 15 ? '2-3关' : '1-2关'}`,
        duration: Math.max(5, Math.floor(minutes * 0.4)),
        completed: false,
      },
      {
        id: `${today}-2`,
        type: 'oral',
        label: '口语练习',
        icon: 'mic',
        language: secondaryLang,
        theme: 'oral',
        description: `${LANGUAGE_MAP[secondaryLang]?.name || secondaryLang} · 对话训练`,
        duration: Math.max(3, Math.floor(minutes * 0.3)),
        completed: false,
      },
      {
        id: `${today}-3`,
        type: goal === 'travel' ? 'scenario' : goal === 'business' ? 'scenario' : 'quiz',
        label: goal === 'travel' ? '旅游场景' : goal === 'business' ? '商务场景' : '综合闯关',
        icon: goal === 'travel' ? 'compass' : goal === 'business' ? 'briefcase' : 'zap',
        language: primaryLang,
        theme: goal === 'travel' ? 'scenario' : goal === 'business' ? 'scenario' : 'daily',
        description: `${LANGUAGE_MAP[primaryLang]?.name || primaryLang} · ${goal === 'travel' ? '机场/酒店/餐厅' : goal === 'business' ? '会议/邮件/谈判' : '日常对话'}`,
        duration: Math.max(3, Math.floor(minutes * 0.3)),
        completed: false,
      },
    ];
    return plan;
  }, [profile, today]);

  const loadPlan = useCallback(async () => {
    if (!userId) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      let saved = null;
      if (window.db) {
        saved = await db.learningPlans.get({ userId, planDate: today });
        const log = await db.dailyLogs.get({ userId, date: today });
        setDailyLog(log || null);
      }

      if (saved && saved.tasks) {
        setPlanDate(saved.planDate);
        setTasks(saved.tasks);
      } else {
        const fresh = generatePlan();
        setPlanDate(today);
        setTasks(fresh);
        if (window.db) {
          await db.learningPlans.put({ userId, planDate: today, tasks: fresh });
        }
      }
      // Batch 1: check if already checked in today
      if (typeof Analytics !== 'undefined') {
        setCheckInTriggeredToday(Analytics.getFlag('checkin_' + today));
      }
    } catch (e) {
      console.error('[LearningPlan] 加载计划失败:', e);
      const fresh = generatePlan();
      setPlanDate(today);
      setTasks(fresh);
    } finally {
      setIsLoading(false);
    }
  }, [userId, today, generatePlan]);

  useEffect(() => {
    loadPlan();
  }, [loadPlan]);

  const handleComplete = async (taskId) => {
    const next = tasks.map(t => t.id === taskId ? { ...t, completed: true } : t);
    setTasks(next);

    const task = tasks.find(t => t.id === taskId);
    const allDone = next.every(t => t.completed);

    if (window.db && userId) {
      try {
        await db.learningPlans.update({ userId, planDate }, { tasks: next });
        if (task) {
          await recordActivity(userId, task.type === 'oral' ? 'oral' : 'written', {
            minutes: task.duration,
            questions: task.type === 'quiz' ? 5 : 0,
            correct: task.type === 'quiz' ? 5 : 0,
          });
        }
      } catch (e) {
        console.error('[LearningPlan] 保存进度失败:', e);
      }
    }

    // Batch 1: accumulate per-language minutes for culture eggs
    if (task && typeof CultureEggs !== 'undefined') {
      CultureEggs.accumulateLanguageMinutes(task.language, task.duration);
    }

    // Batch 1: trigger daily check-in ceremony when all tasks complete
    if (allDone && typeof Analytics !== 'undefined' && typeof DailyCheckInCeremony !== 'undefined') {
      const flagKey = 'checkin_' + today;
      if (!Analytics.getFlag(flagKey)) {
        Analytics.setFlag(flagKey, true);
        Analytics.track('checkin_completion_rate');
        setCheckInTriggeredToday(true);
        // small delay for better UX
        setTimeout(() => setShowCheckIn(true), 400);
      }
    }

    useUIStore.getState().showNotification('任务已完成', 'success');
  };

  const handleRegenerate = async () => {
    const fresh = generatePlan();
    setTasks(fresh);
    if (window.db && userId) {
      try {
        await db.learningPlans.put({ userId, planDate: today, tasks: fresh });
      } catch (e) {
        console.error('[LearningPlan] 重新生成失败:', e);
      }
    }
    useUIStore.getState().showNotification('计划已重新生成', 'success');
  };

  const handleGoTask = (task) => {
    if (task.type === 'oral') {
      window.setActiveTab?.('practice');
      setTimeout(() => {
        usePracticeStore?.getState?.().setActiveTab?.('oral');
        useOralStore?.getState?.().setLanguage?.(task.language);
      }, 100);
    } else if (task.type === 'written') {
      window.setActiveTab?.('practice');
      setTimeout(() => {
        usePracticeStore?.getState?.().setActiveTab?.('written');
        useWrittenStore?.getState?.().setLanguage?.(task.language);
      }, 100);
    } else {
      window.setActiveTab?.('learning');
      setTimeout(() => {
        useLearningStore?.getState?.().setLanguage?.(task.language);
      }, 100);
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const allCompleted = tasks.length > 0 && completedCount === tasks.length;

  // Batch 1: study data for check-in card
  const studyData = useMemo(() => {
    const totalMinutes = tasks.reduce((sum, t) => sum + (t.completed ? (t.duration || 0) : 0), 0);
    const quizTasks = tasks.filter(t => t.completed && t.type === 'quiz');
    const questions = quizTasks.length * 5;
    return {
      minutes: totalMinutes,
      questions,
      words: Math.floor(questions * 0.4),
    };
  }, [tasks]);

  // Batch 1: character state for check-in
  const charState = useCharacterStore?.getState?.();
  const checkInStage = charState?.growth?.currentStage || 1;
  const checkInCharName = charState?.config?.name || charState?.growth?.name || '小语伴';
  const checkInNickname = profile?.nickname || '你';

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors touch-target">
            <Icon name="chevron-left" size={20} />
          </button>
          <h2 className="text-lg font-bold text-slate-800">学习计划</h2>
        </div>
        <div className="space-y-3">
          <SkeletonList count={3} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors touch-target"
          >
            <Icon name="chevron-left" size={20} />
          </button>
          <div>
            <h2 className="text-lg font-bold text-slate-800">学习计划</h2>
            <p className="text-xs text-slate-400">{today} · 已完成 {completedCount}/{tasks.length}</p>
          </div>
        </div>
        <button
          onClick={handleRegenerate}
          className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors touch-target"
          title="重新生成"
        >
          <Icon name="refresh" size={18} />
        </button>
      </div>

      {/* Batch 1: Check-in card revisit entry */}
      {checkInTriggeredToday && (
        <button
          onClick={() => { setShowRevisitCard(true); Analytics.track('checkin_card_revisit'); }}
          className="text-left"
        >
          {typeof DailyStudyCard !== 'undefined' && (
            <DailyStudyCard
              studyData={studyData}
              characterName={checkInCharName}
              stage={checkInStage}
            />
          )}
        </button>
      )}

      {/* Progress bar */}
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-gradient rounded-full transition-all"
          style={{ width: `${tasks.length ? (completedCount / tasks.length) * 100 : 0}%` }}
        />
      </div>

      {/* Task list */}
      {tasks.length === 0 ? (
        <Card padding="p-6" className="text-center">
          <p className="text-sm text-slate-500">暂无计划，请完善个人资料后重新生成</p>
          <Button className="mt-3" onClick={handleRegenerate}>生成计划</Button>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {tasks.map((task, i) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card
                padding="p-4"
                className={`transition-all ${task.completed ? 'opacity-60' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    task.completed
                      ? 'bg-emerald-100 text-emerald-500'
                      : 'bg-brand-50 text-brand-500'
                  }`}>
                    <Icon name={task.completed ? 'check' : task.icon} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold text-sm ${task.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                        {task.label}
                      </span>
                      {task.completed && (
                        <Badge variant="success" className="text-[10px]">已完成</Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{task.description}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Icon name="clock" size={12} />
                        {task.duration} 分钟
                      </span>
                      {!task.completed && (
                        <>
                          <button
                            onClick={() => handleGoTask(task)}
                            className="text-[11px] text-brand-600 font-medium hover:underline"
                          >
                            开始
                          </button>
                          <button
                            onClick={() => handleComplete(task.id)}
                            className="text-[11px] text-emerald-600 font-medium hover:underline"
                          >
                            标记完成
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Daily summary */}
      {allCompleted && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Card className="bg-gradient-to-br from-brand-500 to-violet-600 text-white text-center" padding="p-5">
            <div className="text-3xl mb-2">🎉</div>
            <h3 className="font-bold">今日计划全部完成！</h3>
            <p className="text-sm opacity-80 mt-1">继续保持，积少成多</p>
          </Card>
        </motion.div>
      )}

      {/* Batch 1: Daily check-in ceremony */}
      {typeof DailyCheckInCeremony !== 'undefined' && (
        <DailyCheckInCeremony
          visible={showCheckIn}
          onComplete={() => { setShowCheckIn(false); setShowRevisitCard(true); }}
          onSkip={() => { Analytics.track('checkin_skip_rate'); }}
          stage={checkInStage}
          characterName={checkInCharName}
          userNickname={checkInNickname}
          studyData={studyData}
        />
      )}

      {/* Batch 1: Revisit card modal */}
      {showRevisitCard && typeof DailyStudyCard !== 'undefined' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setShowRevisitCard(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative z-10 max-w-xs w-full mx-4" onClick={e => e.stopPropagation()}>
            <DailyStudyCard
              studyData={studyData}
              characterName={checkInCharName}
              stage={checkInStage}
            />
            <button
              onClick={() => setShowRevisitCard(false)}
              className="mt-3 w-full py-2.5 rounded-xl bg-white text-slate-600 text-sm font-semibold shadow-sm"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { LearningPlan });
