// ========== Culture Knowledge Articles ==========
const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

const CultureBits = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [progress, setProgress] = useState({});
  const [filterLang, setFilterLang] = useState('all');
  const [loading, setLoading] = useState(true);
  const userId = useUserStore(s => s.userId);

  useEffect(() => {
    loadArticles();
  }, [userId]);

  const loadArticles = async () => {
    if (!userId) return;
    setLoading(true);
    const data = await getCultureArticles();
    const prog = await getLessonProgress(userId);
    setArticles(data);
    setProgress(prog);
    setLoading(false);
  };

  const filteredArticles = filterLang === 'all'
    ? articles
    : articles.filter(a => a.language === filterLang);

  if (selectedArticle) {
    return (
      <CultureArticleDetail
        article={selectedArticle}
        isCompleted={!!progress[`culture_${selectedArticle.id}`]}
        onBack={() => setSelectedArticle(null)}
        onComplete={async () => {
          await recordLessonProgress(userId, selectedArticle.id, 'culture');
          await recordActivity(userId, 'culture', { minutes: selectedArticle.readTime });
          useUserStore.getState().addXP(selectedArticle.xpReward, 'culture_article');
          useUserStore.getState().unlockAchievement('culture-explorer', '文化探索者', '阅读 5 篇文化小知识', '🗺️');
          useUIStore.getState().showNotification(`完成！+${selectedArticle.xpReward} XP`, 'success');
          setProgress({ ...progress, [`culture_${selectedArticle.id}`]: true });
          setSelectedArticle(null);
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

      <div className="grid grid-cols-2 gap-3">
        {filteredArticles.map((article, index) => {
          const isCompleted = !!progress[`culture_${article.id}`];
          return (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedArticle(article)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                isCompleted
                  ? 'bg-emerald-50 border-emerald-200'
                  : 'bg-white border-slate-100 hover:border-brand-200'
              }`}
            >
              <div className="text-3xl mb-2">{article.icon}</div>
              <h3 className="text-sm font-semibold line-clamp-2">{article.title}</h3>
              {article.weekIndex >= 0 && (
                <span className="inline-flex items-center px-1 py-0.5 rounded bg-brand-100 text-brand-700 text-[9px] font-medium mt-1">
                  每周轮换
                </span>
              )}
              <div className="flex items-center gap-1 mt-2">
                <Badge variant="primary" className="text-[10px]">{LANGUAGE_MAP[article.language]?.name}</Badge>
                <span className="text-[10px] text-slate-400">{article.readTime}分钟</span>
              </div>
              {isCompleted && <span className="text-emerald-500 text-xs mt-1 block">✅ 已读</span>}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const CultureArticleDetail = ({ article, isCompleted, onBack, onComplete }) => {
  const [showFacts, setShowFacts] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2">
        <button onClick={onBack} className="p-2 rounded-lg hover:bg-slate-100">
          <Icon name="chevron-left" size={20} />
        </button>
        <h2 className="text-lg font-bold">{article.title}</h2>
      </div>

      <div className="bg-white rounded-xl p-5 border border-slate-100 space-y-4">
        <div className="text-center">
          <div className="text-5xl mb-2">{article.icon}</div>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="primary">{LANGUAGE_MAP[article.language]?.name}</Badge>
            <span className="text-xs text-slate-400">{article.readTime}分钟阅读</span>
          </div>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-slate-700 leading-relaxed">{article.content}</p>
        </div>

        <div>
          <button
            onClick={() => setShowFacts(!showFacts)}
            className="flex items-center gap-1 text-sm text-brand-600 font-medium"
          >
            <span>趣味知识点</span>
            <Icon name={showFacts ? 'chevron-down' : 'chevron'} size={14} />
          </button>
          <AnimatePresence>
            {showFacts && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-2 space-y-2">
                  {article.facts.map((fact, i) => (
                    <div key={i} className="flex gap-2 bg-amber-50 rounded-lg p-3">
                      <span className="text-amber-500 text-sm">💡</span>
                      <p className="text-sm text-slate-700">{fact}</p>
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
          完成阅读 (+{article.xpReward} XP)
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

Object.assign(window, { CultureBits });
