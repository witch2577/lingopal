// ========== Oral Module Page ==========
// Container for oral sub-tabs: learning, training, dialogue, correction

const OralPage = () => {
  const activeTab = useOralStore(s => s.activeTab);
  const setActiveTab = useOralStore(s => s.setActiveTab);
  const { isMobile } = useMobileDetect();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-mint-gradient flex items-center justify-center text-white">
            <Icon name="mic" size={18} />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-800 font-display">口语</h1>
            <p className="text-xs text-slate-400">听说读写，全面提升</p>
          </div>
        </div>
      </div>

      {/* Sub-tab navigation */}
      <div className="flex items-center gap-1 mb-3 sm:mb-4 border-b border-slate-200 pb-1 -mx-1 px-1 overflow-x-auto hide-scrollbar">
        {ORAL_TABS.map(tab => {
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
            {activeTab === 'learning' && <OralLearning />}
            {activeTab === 'training' && <OralTraining />}
            {activeTab === 'dialogue' && <OralDialogue />}
            {activeTab === 'correction' && <PronunciationCorrection />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

Object.assign(window, { OralPage });
