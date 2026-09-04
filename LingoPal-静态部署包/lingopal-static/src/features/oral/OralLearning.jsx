// ========== Oral Learning Component ==========
// Practice sentences with standard pronunciation, phonetics, and TTS

const OralLearning = () => {
  const [language, setLanguage] = useState('en');
  const [difficulty, setDifficulty] = useState('beginner');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTip, setShowTip] = useState(false);

  const data = ORAL_PRACTICE_DATA[language] || ORAL_PRACTICE_DATA['en'];
  const items = data[difficulty] || [];
  const current = items[currentIndex] || null;

  const handlePlay = async () => {
    if (!current || isPlaying) return;
    setIsPlaying(true);
    try {
      await SpeechService.speak(current.text, language, 0.85);
    } catch (e) {}
    setIsPlaying(false);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowTip(false);
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCurrentIndex(0);
    setShowTip(false);
  };

  const handleDifficultyChange = (diff) => {
    setDifficulty(diff);
    setCurrentIndex(0);
    setShowTip(false);
  };

  if (!current) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-400">
        <Icon name="info" size={32} className="mb-2" />
        <p className="text-sm">该语言暂无练习内容</p>
        <Badge variant="default" className="mt-2">演示数据</Badge>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Language & Difficulty Selectors */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto hide-scrollbar">
        {['en', 'ja', 'zh-CN'].map(lang => (
          <button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              language === lang
                ? 'bg-brand-gradient text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {LANGUAGE_MAP[lang]?.name || lang}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        {DIFFICULTY_LEVELS.map(diff => (
          <button
            key={diff.key}
            onClick={() => handleDifficultyChange(diff.key)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              difficulty === diff.key ? diff.color : 'bg-slate-100 text-slate-500'
            }`}
          >
            {diff.label}
          </button>
        ))}
      </div>

      {/* Practice Card */}
      <Card className="flex-1 flex flex-col mb-4 relative overflow-hidden">
        <div className="absolute top-3 right-3">
          <Badge variant="default">演示数据</Badge>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-6">
          <div className="text-sm text-slate-400 mb-2">
            {currentIndex + 1} / {items.length}
          </div>

          <motion.div
            key={current.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-2 leading-relaxed">
              {current.text}
            </h2>
            <p className="text-sm text-brand-600 font-mono mb-2">
              {current.phonetic}
            </p>
            <p className="text-sm text-slate-500">
              {current.meaning}
            </p>
          </motion.div>

          {showTip && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 max-w-xs"
            >
              <div className="flex items-start gap-2">
                <Icon name="info" size={16} className="text-amber-500 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-700">{current.tip}</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 pb-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-40 transition-colors btn-press"
          >
            <Icon name="chevron-left" size={20} />
          </button>

          <button
            onClick={handlePlay}
            disabled={isPlaying}
            className="w-16 h-16 rounded-full bg-brand-gradient text-white shadow-lg shadow-brand-500/30 flex items-center justify-center btn-press disabled:opacity-70"
          >
            {isPlaying ? (
              <div className="flex items-center gap-0.5">
                <span className="w-1 h-4 bg-white/80 rounded-full animate-pulse" />
                <span className="w-1 h-6 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                <span className="w-1 h-4 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              </div>
            ) : (
              <Icon name="volume" size={28} />
            )}
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= items.length - 1}
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-40 transition-colors btn-press"
          >
            <Icon name="chevron" size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 pb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowTip(!showTip)}
            icon={showTip ? 'x' : 'info'}
          >
            {showTip ? '隐藏发音提示' : '发音提示'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

Object.assign(window, { OralLearning });
