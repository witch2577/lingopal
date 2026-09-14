// ========== My Favorites ==========
// Unified favorites: wordBooks + translationHistory.isFavorite
// Supports language filter, search, and delete

const MyFavorites = ({ onBack }) => {
  const userId = useUserStore(s => s.userId);
  const [activeTab, setActiveTab] = useState('words'); // words | translations
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLang, setFilterLang] = useState('all');

  const loadData = useCallback(async () => {
    if (!userId || !window.db) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      let data = [];
      if (activeTab === 'words') {
        const words = await db.wordBooks
          .where('userId')
          .equals(userId)
          .reverse()
          .sortBy('addedAt');
        data = words.map(w => ({
          id: `wb-${w.word}`,
          type: 'word',
          word: w.word,
          translation: w.translation,
          language: w.language,
          timestamp: w.addedAt,
          reviewCount: w.reviewCount || 0,
        }));
      } else {
        const records = await db.translationHistory
          .orderBy('timestamp')
          .reverse()
          .filter(r => r.isFavorite === true)
          .limit(100)
          .toArray();
        data = records.map((r, i) => ({
          id: `th-${r.id || i}`,
          type: 'translation',
          word: r.sourceText,
          translation: r.translatedText,
          language: r.targetLang,
          sourceLang: r.sourceLang,
          timestamp: r.timestamp,
        }));
      }
      setItems(data);
    } catch (e) {
      console.error('[MyFavorites] 加载失败:', e);
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  }, [userId, activeTab]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleDelete = async (item) => {
    if (!userId) return;
    try {
      if (item.type === 'word') {
        await db.wordBooks.where('[userId+word]').equals([userId, item.word]).delete();
      } else {
        await db.translationHistory.update(item.id.replace('th-', ''), { isFavorite: false });
      }
      setItems(prev => prev.filter(it => it.id !== item.id));
      useUIStore.getState().showNotification('已取消收藏', 'success');
    } catch (e) {
      console.error('[MyFavorites] 删除失败:', e);
      useUIStore.getState().showNotification('删除失败', 'error');
    }
  };

  const filteredItems = useMemo(() => {
    let result = items;
    if (filterLang !== 'all') {
      result = result.filter(it => it.language === filterLang);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(it =>
        (it.word || '').toLowerCase().includes(q) ||
        (it.translation || '').toLowerCase().includes(q)
      );
    }
    return result;
  }, [items, filterLang, searchQuery]);

  // Language options from data
  const langOptions = useMemo(() => {
    const codes = new Set(items.map(it => it.language).filter(Boolean));
    return Array.from(codes);
  }, [items]);

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors touch-target"
        >
          <Icon name="chevron-left" size={20} />
        </button>
        <h2 className="text-lg font-bold text-slate-800">我的收藏</h2>
      </div>

      {/* Tabs */}
      <div className="flex bg-slate-100 rounded-xl p-1">
        {[
          { key: 'words', label: '单词本' },
          { key: 'translations', label: '翻译收藏' },
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

      {/* Search & Filter */}
      <div className="flex flex-col gap-2">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索..."
            className="w-full px-4 py-2.5 pl-10 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-sm"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon name="search" size={16} />
          </span>
        </div>
        {langOptions.length > 0 && (
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setFilterLang('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                filterLang === 'all'
                  ? 'bg-brand-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              全部
            </button>
            {langOptions.map(code => {
              const lang = LANGUAGE_MAP[code];
              return (
                <button
                  key={code}
                  onClick={() => setFilterLang(code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    filterLang === code
                      ? 'bg-brand-500 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {lang?.flag} {lang?.name || code}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* List */}
      {isLoading ? (
        <div className="space-y-3">
          <SkeletonList count={4} />
        </div>
      ) : filteredItems.length === 0 ? (
        <Card padding="p-6" className="text-center">
          <div className="text-3xl mb-2">📭</div>
          <p className="text-sm text-slate-500">
            {searchQuery || filterLang !== 'all'
              ? '没有匹配的收藏'
              : activeTab === 'words'
                ? '暂无收藏单词，去翻译页收藏吧'
                : '暂无收藏翻译'}
          </p>
          {activeTab === 'words' && !searchQuery && filterLang === 'all' && (
            <Button
              className="mt-3"
              variant="outline"
              size="sm"
              onClick={() => window.setActiveTab?.('translation')}
            >
              去翻译
            </Button>
          )}
        </Card>
      ) : (
        <div className="flex flex-col gap-2">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Card padding="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800">{item.word}</span>
                      <Badge variant="primary" className="text-[10px]">
                        {LANGUAGE_MAP[item.language]?.name || item.language}
                      </Badge>
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{item.translation}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      {item.type === 'word' && item.reviewCount > 0 && `已复习 ${item.reviewCount} 次 · `}
                      {new Date(item.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 ml-2">
                    <AudioPlayer text={item.word} lang={item.language} size="sm" />
                    <button
                      onClick={() => handleDelete(item)}
                      className="p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <Icon name="trash" size={16} />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

Object.assign(window, { MyFavorites });
