// ========== Learning Page ==========
// Level map -> Quiz -> Result flow

const LearningPage = () => {
  const [view, setView] = useState('map'); // map | quiz | result | scenarios | scenario-play
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [lastResult, setLastResult] = useState(null);
  const [selectedScene, setSelectedScene] = useState(null);
  const levelResult = useLearningStore(s => s.levelResult);
  const resetLevel = useLearningStore(s => s.resetLevel);
  const currentLanguage = useLearningStore(s => s.currentLanguage);
  const { isMobile } = useMobileDetect();

  const handleStartLevel = (level) => {
    setSelectedLevel(level);
    setLastResult(null);
    setView('quiz');
  };

  const handleFinish = (result) => {
    setLastResult(result);
    setView('result');
  };

  const handleRetry = () => {
    resetLevel();
    setLastResult(null);
    setView('quiz');
  };

  const handleBackToMap = () => {
    resetLevel();
    setLastResult(null);
    setSelectedLevel(null);
    setSelectedScene(null);
    setView('map');
  };

  const handleSelectScene = (scene) => {
    setSelectedScene(scene);
    setView('scenario-play');
  };

  const [activeTab, setActiveTab] = useState('levels'); // levels | scenarios

  const subTabs = [
    { key: 'levels', label: '关卡地图' },
    { key: 'scenarios', label: '场景学习' },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header for sub-views */}
      {view !== 'map' && view !== 'scenarios' && (
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <button
            onClick={handleBackToMap}
            className="p-2 rounded-xl hover:bg-slate-100 transition-colors btn-press touch-target"
          >
            <Icon name="chevron-left" size={22} />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-base sm:text-lg font-bold text-slate-800 truncate">
              {view === 'quiz' ? selectedLevel?.title : view === 'scenario-play' ? selectedScene?.name : '关卡结算'}
            </h1>
            <p className="text-xs text-slate-400">
              {LANGUAGE_MAP[currentLanguage]?.flag} {LANGUAGE_MAP[currentLanguage]?.name}
            </p>
          </div>
        </div>
      )}

      {/* Sub tabs for main learning view */}
      {(view === 'map' || view === 'scenarios') && (
        <div className="flex bg-slate-100 rounded-2xl p-1 mb-3 sm:mb-4">
          {subTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setView(tab.key === 'levels' ? 'map' : 'scenarios');
              }}
              className={`relative flex-1 py-2.5 rounded-xl text-sm font-medium transition-all touch-target ${
                activeTab === tab.key
                  ? 'bg-white text-brand-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: view === 'map' || view === 'scenarios' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: view === 'map' || view === 'scenarios' ? 20 : -20 }}
            transition={{ duration: isMobile ? 0.18 : 0.25 }}
          >
            {view === 'map' && (
              <>
                <ContentUpdater />
                <LevelMap onStartLevel={handleStartLevel} />
              </>
            )}
            {view === 'scenarios' && (
              <Scenarios onSelectScene={handleSelectScene} />
            )}
            {view === 'scenario-play' && selectedScene && (
              <ScenarioPlayer scene={selectedScene} onBack={handleBackToMap} />
            )}
            {view === 'quiz' && selectedLevel && (
              <QuizEngine level={selectedLevel} onFinish={handleFinish} />
            )}
            {view === 'result' && lastResult && (
              <LevelResult
                result={lastResult}
                level={selectedLevel}
                onRetry={handleRetry}
                onBack={handleBackToMap}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

Object.assign(window, { LearningPage });
