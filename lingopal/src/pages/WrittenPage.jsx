// ========== Written Module Page ==========
// Container for written sub-tabs: spelling, selection, dialogue

const WrittenPage = () => {
  const activeTab = useWrittenStore(s => s.activeTab);
  const setActiveTab = useWrittenStore(s => s.setActiveTab);
  const { isMobile } = useMobileDetect();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-warm-gradient flex items-center justify-center text-white">
            <Icon name="type-text" size={18} />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-800 font-display">笔试</h1>
            <p className="text-xs text-slate-400">拼写选词，巩固记忆</p>
          </div>
        </div>
      </div>

      {/* Sub-tab navigation */}
      <div className="flex items-center gap-1 mb-3 sm:mb-4 border-b border-slate-200 pb-1 -mx-1 px-1 overflow-x-auto hide-scrollbar">
        {WRITTEN_TABS.map(tab => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all btn-press whitespace-nowrap touch-target ${
                isActive
                  ? 'text-brand-600 bg-brand-50'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
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
            {activeTab === 'spelling' && <WordSpelling />}
            {activeTab === 'selection' && <SentenceSelection />}
            {activeTab === 'dialogue' && <TextDialogue />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

Object.assign(window, { WrittenPage });
