// ========== Practice Page ==========
// Consolidated practice hub: Oral + Written + Drama + Music

const PracticePage = () => {
  const activeTab = usePracticeStore(s => s.activeTab);
  const setActiveTab = usePracticeStore(s => s.setActiveTab);
  const { isMobile } = useMobileDetect();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center text-white">
            <Icon name="zap" size={18} />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-800 font-display">练习中心</h1>
            <p className="text-xs text-slate-400">口语 · 笔试 · 影视 · 音乐</p>
          </div>
        </div>
      </div>

      {/* Sub-tab navigation */}
      <div className="flex items-center gap-1 mb-3 sm:mb-4 border-b border-slate-200 pb-1 -mx-1 px-1 overflow-x-auto hide-scrollbar">
        {PRACTICE_TABS.map(tab => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all btn-press whitespace-nowrap touch-target flex items-center gap-1.5 ${
                isActive
                  ? 'text-brand-600 bg-brand-50'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Icon name={tab.icon} size={14} />
              {tab.label}
              {isActive && (
                <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: isMobile ? 0.12 : 0.2 }}
          >
            {activeTab === 'oral' && <OralPageContent />}
            {activeTab === 'written' && <WrittenPageContent />}
            {activeTab === 'drama' && <DramaHub />}
            {activeTab === 'music' && <MusicHub />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Inline oral content (reuses existing components)
const OralPageContent = () => {
  const activeTab = useOralStore(s => s.activeTab);
  const setActiveTab = useOralStore(s => s.setActiveTab);
  const { isMobile } = useMobileDetect();

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-1 mb-3 overflow-x-auto hide-scrollbar">
        {ORAL_TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
              activeTab === tab.key ? 'bg-emerald-100 text-emerald-700' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex-1">
        {activeTab === 'learning' && <OralLearning />}
        {activeTab === 'training' && <OralTraining />}
        {activeTab === 'dialogue' && <OralDialogue />}
        {activeTab === 'correction' && <PronunciationCorrection />}
      </div>
    </div>
  );
};

// Inline written content
const WrittenPageContent = () => {
  const activeTab = useWrittenStore(s => s.activeTab);
  const setActiveTab = useWrittenStore(s => s.setActiveTab);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-1 mb-3 overflow-x-auto hide-scrollbar">
        {WRITTEN_TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
              activeTab === tab.key ? 'bg-amber-100 text-amber-700' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex-1">
        {activeTab === 'spelling' && <WordSpelling />}
        {activeTab === 'selection' && <SentenceSelection />}
        {activeTab === 'dialogue' && <TextDialogue />}
      </div>
    </div>
  );
};

// Drama Hub: list of scripts with entry points + video link import
const DramaHub = () => {
  const [view, setView] = useState('list'); // list | reader | roleplay | quiz | import | viewer
  const [selectedScript, setSelectedScript] = useState(null);
  const [selectedScene, setSelectedScene] = useState(null);
  const [importedMaterial, setImportedMaterial] = useState(null);
  const { isMobile } = useMobileDetect();
  const currentLang = useLearningStore(s => s.currentLanguage) || 'en';
  const scripts = getDramaScripts(currentLang);

  const handleRead = (script, scene) => {
    setSelectedScript(script);
    setSelectedScene(scene || script.scenes[0]);
    setView('reader');
  };

  const handleRolePlay = (script, scene) => {
    setSelectedScript(script);
    setSelectedScene(scene || script.scenes[0]);
    setView('roleplay');
  };

  const handleQuiz = (script) => {
    setSelectedScript(script);
    setView('quiz');
  };

  const handleBack = () => {
    setView('list');
    setSelectedScript(null);
    setSelectedScene(null);
    setImportedMaterial(null);
  };

  const handleMaterialParsed = (material) => {
    setImportedMaterial(material);
    setView('viewer');
  };

  if (view === 'reader' && selectedScript && selectedScene) {
    return <DramaReader script={selectedScript} scene={selectedScene} onBack={handleBack} />;
  }
  if (view === 'roleplay' && selectedScript && selectedScene) {
    return <DramaRolePlay script={selectedScript} scene={selectedScene} onBack={handleBack} />;
  }
  if (view === 'quiz' && selectedScript) {
    return <DramaQuiz script={selectedScript} onBack={handleBack} />;
  }
  if (view === 'import') {
    return <LinkImport onBack={handleBack} onMaterialParsed={handleMaterialParsed} typeHint="video" />;
  }
  if (view === 'viewer' && importedMaterial) {
    return <ImportedMaterialViewer material={importedMaterial} onBack={handleBack} />;
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-800">影视短剧</h2>
          <p className="text-xs text-slate-400">通过剧本对话沉浸式学习</p>
        </div>
        <div className="text-xs text-slate-400">{scripts.length} 部剧本</div>
      </div>

      {scripts.length === 0 ? (
        <EmptyState icon="🎭" title="暂无剧本" description="该语种的剧本正在建设中，请先切换至英语体验" />
      ) : (
        scripts.map(script => (
          <motion.div
            key={script.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center text-2xl flex-shrink-0">
                {script.cover}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-800 text-sm">{script.title}</h3>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    script.difficulty === 'beginner' ? 'bg-emerald-100 text-emerald-700' :
                    script.difficulty === 'intermediate' ? 'bg-amber-100 text-amber-700' :
                    'bg-rose-100 text-rose-700'
                  }`}>
                    {script.difficulty === 'beginner' ? '入门' : script.difficulty === 'intermediate' ? '中级' : '高级'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2">{script.description}</p>
                <p className="text-[10px] text-slate-400 mt-1">{script.scenes.length} 个场景 · {script.quiz?.length || 0} 道测验</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleRead(script)} className="flex-1 py-2 rounded-xl bg-brand-50 text-brand-600 text-xs font-medium hover:bg-brand-100 transition-colors">
                阅读剧本
              </button>
              <button onClick={() => handleRolePlay(script)} className="flex-1 py-2 rounded-xl bg-rose-50 text-rose-600 text-xs font-medium hover:bg-rose-100 transition-colors">
                角色扮演
              </button>
              <button onClick={() => handleQuiz(script)} className="flex-1 py-2 rounded-xl bg-amber-50 text-amber-600 text-xs font-medium hover:bg-amber-100 transition-colors">
                剧情测验
              </button>
            </div>
          </motion.div>
        ))
      )}

      {/* Video link import */}
      <button
        onClick={() => setView('import')}
        className="bg-slate-50 rounded-2xl p-4 border border-dashed border-slate-200 text-center hover:bg-slate-100 transition-colors"
      >
        <div className="text-2xl mb-2">📹</div>
        <p className="text-sm font-medium text-slate-600">视频链接导入</p>
        <p className="text-xs text-slate-400 mt-1">粘贴 YouTube / Bilibili 链接提取字幕学习</p>
      </button>
    </div>
  );
};

// Music Hub: list of songs with entry points + music/MV link import
const MusicHub = () => {
  const [view, setView] = useState('list'); // list | practice | import | linkimport | viewer
  const [selectedSong, setSelectedSong] = useState(null);
  const [importedMaterial, setImportedMaterial] = useState(null);
  const currentLang = useLearningStore(s => s.currentLanguage) || 'en';
  const songs = getSongs(currentLang);

  const handlePractice = (song) => {
    setSelectedSong(song);
    setView('practice');
  };

  const handleBack = () => {
    setView('list');
    setSelectedSong(null);
    setImportedMaterial(null);
  };

  const handleMaterialParsed = (material) => {
    setImportedMaterial(material);
    setView('viewer');
  };

  if (view === 'practice' && selectedSong) {
    return <LyricsPractice song={selectedSong} onBack={handleBack} />;
  }
  if (view === 'import') {
    return <LyricsImport onBack={handleBack} />;
  }
  if (view === 'linkimport') {
    return <LinkImport onBack={handleBack} onMaterialParsed={handleMaterialParsed} typeHint="music" />;
  }
  if (view === 'viewer' && importedMaterial) {
    return <ImportedMaterialViewer material={importedMaterial} onBack={handleBack} />;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-800">音乐学习</h2>
          <p className="text-xs text-slate-400">听歌学语言，跟读填词练语感</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setView('linkimport')}
            className="px-3 py-1.5 rounded-xl bg-cyan-50 text-cyan-600 text-xs font-medium hover:bg-cyan-100 transition-colors"
          >
            链接导入
          </button>
          <button
            onClick={() => setView('import')}
            className="px-3 py-1.5 rounded-xl bg-brand-50 text-brand-600 text-xs font-medium hover:bg-brand-100 transition-colors"
          >
            导入歌词
          </button>
        </div>
      </div>

      {songs.length === 0 ? (
        <EmptyState icon="🎵" title="暂无歌曲" description="该语种的歌曲正在建设中，请先切换至英语体验" />
      ) : (
        songs.map(song => (
          <motion.div
            key={song.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl flex-shrink-0">
                {song.cover}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-800 text-sm">{song.title}</h3>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    song.difficulty === 'beginner' ? 'bg-emerald-100 text-emerald-700' :
                    song.difficulty === 'intermediate' ? 'bg-amber-100 text-amber-700' :
                    'bg-rose-100 text-rose-700'
                  }`}>
                    {song.difficulty === 'beginner' ? '入门' : song.difficulty === 'intermediate' ? '中级' : '高级'}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{song.description}</p>
                <p className="text-[10px] text-slate-400 mt-1">{song.lyrics.length} 句歌词 · {song.type === 'children' ? '儿歌' : '流行'}</p>
              </div>
            </div>
            <button
              onClick={() => handlePractice(song)}
              className="w-full py-2 rounded-xl bg-brand-50 text-brand-600 text-xs font-medium hover:bg-brand-100 transition-colors"
            >
              开始学习
            </button>
          </motion.div>
        ))
      )}
    </div>
  );
};

Object.assign(window, { PracticePage });
