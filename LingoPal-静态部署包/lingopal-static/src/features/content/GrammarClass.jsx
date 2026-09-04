// ========== Grammar Mini Lessons ==========
const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

const GrammarClass = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [progress, setProgress] = useState({});
  const [filterLang, setFilterLang] = useState('all');
  const [loading, setLoading] = useState(true);
  const userId = useUserStore(s => s.userId);

  useEffect(() => {
    loadLessons();
  }, [userId]);

  const loadLessons = async () => {
    if (!userId) return;
    setLoading(true);
    const data = await getGrammarLessons();
    const prog = await getLessonProgress(userId);
    setLessons(data);
    setProgress(prog);
    setLoading(false);
  };

  const filteredLessons = filterLang === 'all'
    ? lessons
    : lessons.filter(l => l.language === filterLang);

  if (selectedLesson) {
    return (
      <GrammarLessonDetail
        lesson={selectedLesson}
        isCompleted={!!progress[`grammar_${selectedLesson.id}`]}
        onBack={() => setSelectedLesson(null)}
        onComplete={async () => {
          await recordLessonProgress(userId, selectedLesson.id, 'grammar');
          await recordActivity(userId, 'grammar', { minutes: selectedLesson.duration });
          useUserStore.getState().addXP(selectedLesson.xpReward, 'grammar_lesson');
          useUserStore.getState().unlockAchievement('grammar-master', '语法大师', '完成 5 节语法课', '📐');
          useUIStore.getState().showNotification(`完成！+${selectedLesson.xpReward} XP`, 'success');
          setProgress({ ...progress, [`grammar_${selectedLesson.id}`]: true });
          setSelectedLesson(null);
        }}
      />
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner size={32} className="text-brand-500" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Language filter */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilterLang('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            filterLang === 'all' ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600'
          }`}
        >
          全部
        </button>
        {LANGUAGES.filter(l => l.type === 'standard').map(l => (
          <button
            key={l.code}
            onClick={() => setFilterLang(l.code)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterLang === l.code ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {l.name}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="bg-white rounded-xl p-4 border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">已学习</p>
          <p className="text-xl font-bold text-brand-600">
            {Object.keys(progress).filter(k => k.startsWith('grammar_')).length}/{lessons.length}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">获得 XP</p>
          <p className="text-xl font-bold text-emerald-600">
            {Object.keys(progress).filter(k => k.startsWith('grammar_')).length * 15}+
          </p>
        </div>
      </div>

      {/* Lesson list */}
      <div className="space-y-2">
        {filteredLessons.map((lesson, index) => {
          const isCompleted = !!progress[`grammar_${lesson.id}`];
          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedLesson(lesson)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isCompleted
                  ? 'bg-emerald-50 border-emerald-200'
                  : 'bg-white border-slate-100 hover:border-brand-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold">{lesson.title}</h3>
                    {lesson.weekIndex >= 0 && (
                      <span className="inline-flex items-center px-1 py-0.5 rounded bg-brand-100 text-brand-700 text-[9px] font-medium">
                        每周
                      </span>
                    )}
                    {isCompleted && <span className="text-emerald-500 text-xs">✅</span>}
                  </div>
                  <p className="text-xs text-slate-500 truncate">{lesson.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="primary" className="text-[10px]">{LANGUAGE_MAP[lesson.language]?.name}</Badge>
                    <Badge variant={lesson.difficulty === 'beginner' ? 'success' : lesson.difficulty === 'intermediate' ? 'accent' : 'danger'} className="text-[10px]">
                      {DIFFICULTY_LEVELS.find(d => d.key === lesson.difficulty)?.label}
                    </Badge>
                    <span className="text-[10px] text-slate-400">{lesson.duration}分钟</span>
                    <span className="text-[10px] text-brand-500">+{lesson.xpReward} XP</span>
                  </div>
                </div>
                <Icon name="chevron" size={16} className="text-slate-300 mt-1" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const GrammarLessonDetail = ({ lesson, isCompleted, onBack, onComplete }) => {
  const [showExamples, setShowExamples] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2">
        <button onClick={onBack} className="p-2 rounded-lg hover:bg-slate-100">
          <Icon name="chevron-left" size={20} />
        </button>
        <h2 className="text-lg font-bold">{lesson.title}</h2>
      </div>

      <div className="bg-white rounded-xl p-5 border border-slate-100 space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="primary">{LANGUAGE_MAP[lesson.language]?.name}</Badge>
          <Badge variant={lesson.difficulty === 'beginner' ? 'success' : lesson.difficulty === 'intermediate' ? 'accent' : 'danger'}>
            {DIFFICULTY_LEVELS.find(d => d.key === lesson.difficulty)?.label}
          </Badge>
          <span className="text-xs text-slate-400">{lesson.duration}分钟</span>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-700 mb-2">知识点</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{lesson.content}</p>
        </div>

        <div>
          <button
            onClick={() => setShowExamples(!showExamples)}
            className="flex items-center gap-1 text-sm text-brand-600 font-medium"
          >
            <span>例句</span>
            <Icon name={showExamples ? 'chevron-down' : 'chevron'} size={14} />
          </button>
          <AnimatePresence>
            {showExamples && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-2 space-y-2">
                  {lesson.examples.map((ex, i) => (
                    <div key={i} className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700">
                      {ex}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {!isCompleted ? (
        <Button onClick={onComplete} variant="primary" fullWidth>
          完成学习 (+{lesson.xpReward} XP)
        </Button>
      ) : (
        <div className="text-center py-2">
          <Badge variant="success">已完成</Badge>
          <Button onClick={onBack} variant="secondary" fullWidth className="mt-2">返回列表</Button>
        </div>
      )}
    </motion.div>
  );
};

Object.assign(window, { GrammarClass });
