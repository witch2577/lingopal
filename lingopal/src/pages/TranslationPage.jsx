// ========== Translation Page ==========
// Three tabs: text | voice | ocr

const TranslationPage = () => {
  const activeTab = useTranslationStore(s => s.activeTab);
  const setActiveTab = useTranslationStore(s => s.setActiveTab);
  const { isMobile } = useMobileDetect();

  const tabs = [
    { key: 'text',  label: '文字', icon: 'type-text' },
    { key: 'voice', label: '语音', icon: 'mic' },
    { key: 'ocr',   label: '拍照', icon: 'camera' },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center text-white">
            <span className="text-lg">🌍</span>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-800 font-display">翻译</h1>
            <p className="text-xs text-slate-400">支持多语言与方言互译</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-400">语伴 LingoPal</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-slate-100 rounded-2xl p-1 mb-3 sm:mb-4">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium transition-all tab-active touch-target ${
              activeTab === tab.key
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Icon name={tab.icon} size={isMobile ? 16 : 18} />
            <span className={isMobile ? 'text-xs' : 'text-sm'}>{tab.label}</span>
          </button>
        ))}
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
            {activeTab === 'text' && <TextTranslator />}
            {activeTab === 'voice' && <VoiceTranslator />}
            {activeTab === 'ocr' && <OCRTranslator />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

Object.assign(window, { TranslationPage });
