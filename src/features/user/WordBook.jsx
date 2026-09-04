// ========== Word Book & Error Book ==========

const WordBook = () => {
  const userId = useUserStore(s => s.userId);
  const [words, setWords] = useState([]);
  const [activeTab, setActiveTab] = useState('words'); // words | errors
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!userId || !window.db) return;
      setIsLoading(true);
      if (activeTab === 'words') {
        const data = await db.wordBooks
          .where('userId')
          .equals(userId)
          .reverse()
          .sortBy('addedAt');
        setWords(data);
      } else {
        const data = await db.errorBooks
          .where('userId')
          .equals(userId)
          .reverse()
          .sortBy('errorAt');
        setWords(data);
      }
      setIsLoading(false);
    };
    load();
  }, [userId, activeTab]);

  const handleDeleteWord = async (word) => {
    if (!userId) return;
    await db.wordBooks.where('[userId+word]').equals([userId, word]).delete();
    setWords(prev => prev.filter(w => w.word !== word));
    useUIStore.getState().showNotification('已删除', 'success');
  };

  const handleDeleteError = async (id) => {
    if (!userId) return;
    await db.errorBooks.delete(id);
    setWords(prev => prev.filter(e => e.id !== id));
    useUIStore.getState().showNotification('已删除', 'success');
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Tab toggle */}
      <div className="flex bg-slate-100 rounded-xl p-1">
        {[
          { key: 'words', label: '单词本', count: activeTab === 'words' ? words.length : '...' },
          { key: 'errors', label: '错题本', count: activeTab === 'errors' ? words.length : '...' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.key
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="space-y-3 animate-fade-in">
          <SkeletonList count={4} />
        </div>
      ) : words.length === 0 ? (
        <Card padding="p-0" className="overflow-hidden">
          {activeTab === 'words' ? (
            <EmptyWordBook onAction={() => window.setActiveTab?.('translation')} />
          ) : (
            <EmptyErrorBook onAction={() => window.setActiveTab?.('learning')} />
          )}
        </Card>
      ) : (
        <div className="flex flex-col gap-2">
          {activeTab === 'words' ? (
            words.map((w, i) => (
              <motion.div
                key={w.word + i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <Card padding="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-800">{w.word}</span>
                        <Badge variant="primary" className="text-[10px]">
                          {LANGUAGE_MAP[w.language]?.name || w.language}
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-500 mt-1">{w.translation}</div>
                      <div className="text-xs text-slate-400 mt-1">
                        已复习 {w.reviewCount || 0} 次 · {new Date(w.addedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <AudioPlayer text={w.word} lang={w.language} size="sm" />
                      <button
                        onClick={() => handleDeleteWord(w.word)}
                        className="p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <Icon name="trash" size={16} />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            words.map((e, i) => (
              <motion.div
                key={e.id || i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <Card padding="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="danger" className="text-[10px]">
                          {LANGUAGE_MAP[e.language]?.name || e.language}
                        </Badge>
                        <Badge variant="default" className="text-[10px]">
                          {e.questionType}
                        </Badge>
                      </div>
                      <div className="text-sm">
                        <span className="text-red-500 line-through">{e.userAnswer}</span>
                        <span className="text-slate-300 mx-2">→</span>
                        <span className="text-emerald-600 font-medium">{e.correctAnswer}</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        已复习 {e.reviewCount || 0} 次 · {new Date(e.errorAt).toLocaleDateString()}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteError(e.id)}
                      className="p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <Icon name="trash" size={16} />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

Object.assign(window, { WordBook });
