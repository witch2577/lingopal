// ========== CharacterEditor ==========
// 捏脸编辑器主界面 — 日系二次元调性
// 包含：预览区、维度页签、选项网格、配色选择、保存/取消/随机
// v2: Added stage-aware filtering and cross-stage config inheritance.

const { useState, useEffect, useCallback, useMemo } = React;
const { motion, AnimatePresence } = window.Motion;

const COLORABLE_DIMENSIONS = {
  hairStyle: { colorKey: 'hairColor', label: '发色' },
  eyeShape: { colorKey: 'eyeColor', label: '瞳色' },
  skinTone: { colorKey: 'skinTone', label: '肤色' },
};

const RANDOM_COLORS = {
  hairColor: ['#2D2D2D', '#4A3426', '#8B4513', '#D4A574', '#E8C4C4', '#FFB7C5', '#9370DB', '#4169E1', '#2E8B57', '#FFD700'],
  eyeColor: ['#5D8AA8', '#4A6741', '#8B4513', '#DAA520', '#9370DB', '#708090', '#2F4F4F', '#191970'],
  skinTone: ['#F5D0C5', '#FFE0BD', '#E8C4A0', '#D2A679', '#8D5524', '#C68642', '#E0AC69', '#FFDBAC'],
};

function CharacterEditor({ onClose, onSave, embedded }) {
  const storeConfig = useCharacterStore(s => s.config);
  const storeGrowth = useCharacterStore(s => s.growth);
  const setConfig = useCharacterStore(s => s.setConfig);
  const storeInitialized = useCharacterStore(s => s.initialized);

  const [draft, setDraft] = useState(() => storeConfig || getDefaultDraft());
  const [activeCategory, setActiveCategory] = useState('face');
  const [activeDimension, setActiveDimension] = useState('faceShape');
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [showGenderConfirm, setShowGenderConfirm] = useState(false);
  const [pendingGender, setPendingGender] = useState(null);

  // Derive current stage info from growth
  const currentStageInfo = useMemo(() => {
    if (!storeGrowth) return { stage: 1, key: 'baby', name: '婴儿(3-5岁)' };
    const stageNum = storeGrowth.currentStage || 1;
    const stageKey = typeof getStageKeyByNumber === 'function'
      ? getStageKeyByNumber(stageNum)
      : (stageNum === 1 ? 'baby' : stageNum === 2 ? 'toddler' : stageNum === 3 ? 'adult' : 'middleage');
    const stageName = storeGrowth.stageName || '婴儿(3-5岁)';
    return { stage: stageNum, key: stageKey, name: stageName };
  }, [storeGrowth]);

  useEffect(() => {
    if (!storeInitialized) {
      if (typeof useCharacterStore !== 'undefined') {
        useCharacterStore.getState().init();
      }
    }
  }, [storeInitialized]);

  useEffect(() => {
    if (storeConfig) {
      setDraft(prev => ({ ...storeConfig, ...prev }));
    }
  }, [storeConfig]);

  function getDefaultDraft() {
    return {
      gender: 'girl',
      faceShape: 'face-oval',
      hairStyle: 'hair-long-straight',
      hairColor: '#2D2D2D',
      eyeShape: 'eye-big',
      eyeColor: '#5D8AA8',
      eyebrow: 'brow-straight',
      skinTone: '#F5D0C5',
      expression: 'expr-smile',
      top: 'top-sailor',
      bottom: 'bottom-pleated-skirt',
      accessory: null,
      background: 'bg-room',
      unlockedItems: [],
    };
  }

  const updateDimension = useCallback((dimension, value) => {
    setDraft(prev => ({ ...prev, [dimension]: value }));
  }, []);

  const handleGenderClick = (gender) => {
    if (draft.gender === gender) return;
    setPendingGender(gender);
    setShowGenderConfirm(true);
  };

  const confirmGenderSwitch = () => {
    if (!pendingGender) return;
    const hairColor = draft.hairColor;
    const eyeColor = draft.eyeColor;
    const skinTone = draft.skinTone;
    const newDraft = {
      ...draft,
      gender: pendingGender,
      faceShape: 'face-oval',
      hairStyle: pendingGender === 'boy' ? 'hair-short' : 'hair-long',
      hairColor,
      eyeShape: 'eye-big',
      eyeColor,
      eyebrow: 'brow-straight',
      skinTone,
      expression: 'expr-smile',
      top: pendingGender === 'boy' ? 'top-tshirt' : 'top-sailor',
      bottom: pendingGender === 'boy' ? 'bottom-shorts' : 'bottom-pleated-skirt',
      accessory: null,
    };
    setDraft(newDraft);
    setShowGenderConfirm(false);
    setPendingGender(null);
  };

  const handleRandomize = useCallback(() => {
    const gender = Math.random() > 0.5 ? 'boy' : 'girl';
    const stageKey = currentStageInfo.key;
    const randomPick = (category) => {
      const options = typeof getDimensionOptions === 'function'
        ? getDimensionOptions(category, gender, stageKey)
        : [];
      if (!options.length) return null;
      const pick = options[Math.floor(Math.random() * options.length)];
      return pick.id.replace(/-(boy|girl|universal)$/, '');
    };

    const newDraft = {
      ...draft,
      gender,
      faceShape: randomPick('faceShape'),
      hairStyle: randomPick('hairStyle'),
      hairColor: RANDOM_COLORS.hairColor[Math.floor(Math.random() * RANDOM_COLORS.hairColor.length)],
      eyeShape: randomPick('eyeShape'),
      eyeColor: RANDOM_COLORS.eyeColor[Math.floor(Math.random() * RANDOM_COLORS.eyeColor.length)],
      eyebrow: randomPick('eyebrow'),
      skinTone: RANDOM_COLORS.skinTone[Math.floor(Math.random() * RANDOM_COLORS.skinTone.length)],
      expression: randomPick('expression') || 'expr-smile',
      top: randomPick('top'),
      bottom: randomPick('bottom'),
      accessory: Math.random() > 0.5 ? randomPick('accessory') : null,
      background: randomPick('background') || 'bg-room',
    };
    setDraft(newDraft);
  }, [draft, currentStageInfo.key]);

  const handleSave = useCallback(() => {
    setConfig(draft);
    if (onSave) onSave(draft);
    if (onClose) onClose();
  }, [draft, setConfig, onSave, onClose]);

  const handleCancel = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  const lockedIds = useMemo(() => {
    if (!draft.unlockedItems) return [];
    return CHARACTER_ITEMS
      .filter(item => {
        if (!item.unlockCondition) return false;
        return !draft.unlockedItems.includes(item.id);
      })
      .map(item => item.id);
  }, [draft.unlockedItems]);

  // Stage-unavailable items (for grayed-out UI — forward-compatible with OptionGrid)
  const unavailableIds = useMemo(() => {
    if (!currentStageInfo.key || typeof getDimensionUnavailableOptions !== 'function') return [];
    const gender = draft.gender || 'girl';
    const allUnavailable = [];
    const dims = ['faceShape', 'hairStyle', 'eyeShape', 'eyebrow', 'expression', 'top', 'bottom', 'accessory', 'background'];
    for (const dim of dims) {
      const items = getDimensionUnavailableOptions(dim, gender, currentStageInfo.key);
      items.forEach(item => allUnavailable.push(item.id));
    }
    return allUnavailable;
  }, [draft.gender, currentStageInfo.key]);

  // Get options for active dimension, filtered by stage
  const dimensionOptions = useMemo(() => {
    const gender = draft.gender || 'girl';
    const stageKey = currentStageInfo.key;
    if (activeDimension === 'hairStyle') {
      const all = typeof getDimensionOptions === 'function'
        ? getDimensionOptions('hairStyle', gender, stageKey)
        : [];
      const seen = new Set();
      return all.filter(item => {
        const base = item.id.replace(/-(boy|girl)(-back|-front)?$/, '');
        if (seen.has(base)) return false;
        seen.add(base);
        return true;
      });
    }
    if (activeDimension === 'skinTone') {
      return [];
    }
    return typeof getDimensionOptions === 'function'
      ? getDimensionOptions(activeDimension, gender, stageKey)
      : [];
  }, [activeDimension, draft.gender, currentStageInfo.key]);

  const currentValue = draft[activeDimension];
  const colorMeta = COLORABLE_DIMENSIONS[activeDimension];

  const previewConfig = useMemo(() => ({
    ...draft,
    mode: 'child',
  }), [draft]);

  return (
    <div className={`${embedded ? 'relative w-full h-full' : 'fixed inset-0 z-50'} bg-slate-50 flex flex-col`}>
      {/* Header */}
      <div className="shrink-0 px-4 pt-4 pb-2 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="flex items-center gap-2">
          <button
            onClick={handleCancel}
            className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <span className="text-lg">←</span>
          </button>
          <h1 className="text-lg font-bold text-slate-800">角色捏脸</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">{currentStageInfo.name}预览</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
        {/* Preview panel */}
        <div className="shrink-0 lg:w-2/5 lg:max-w-sm bg-gradient-to-b from-indigo-50/40 to-pink-50/40 flex flex-col items-center justify-center p-4 relative">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 flex bg-white/80 backdrop-blur rounded-full p-0.5 shadow-sm border border-slate-100">
            <button
              onClick={() => handleGenderClick('boy')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                draft.gender === 'boy'
                  ? 'bg-sky-400 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              男孩
            </button>
            <button
              onClick={() => handleGenderClick('girl')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                draft.gender === 'girl'
                  ? 'bg-pink-400 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              女孩
            </button>
          </div>

          <div className="relative w-48 h-72 lg:w-56 lg:h-80">
            {typeof CharacterRenderer !== 'undefined' ? (
              <CharacterRenderer
                config={previewConfig}
                width="100%"
                height="100%"
                transitionDuration={300}
                onLoad={() => setPreviewLoaded(true)}
                stageKey={currentStageInfo.key}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-300 text-sm">
                预览加载中...
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 mt-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleRandomize}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
            >
              <span>🎲</span>
              随机
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleSave}
              className="flex items-center gap-1.5 px-6 py-2 rounded-full bg-gradient-to-r from-brand-500 to-purple-500 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 transition-shadow"
            >
              <span>✨</span>
              保存形象
            </motion.button>
          </div>
        </div>

        {/* Editor panel */}
        <div className="flex-1 flex flex-col min-h-0 bg-white">
          <div className="shrink-0 px-4 pt-3 pb-2 border-b border-slate-50">
            <DimensionTabs
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              activeDimension={activeDimension}
              onDimensionChange={setActiveDimension}
            />
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDimension}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
              >
                {colorMeta && (
                  <div className="mb-4">
                    <ColorPicker
                      value={draft[colorMeta.colorKey]}
                      onChange={(color) => updateDimension(colorMeta.colorKey, color)}
                      label={colorMeta.label}
                    />
                  </div>
                )}

                {activeDimension === 'skinTone' && (
                  <div className="mb-4">
                    <ColorPicker
                      value={draft.skinTone}
                      onChange={(color) => updateDimension('skinTone', color)}
                      label="肤色"
                    />
                  </div>
                )}

                {activeDimension !== 'skinTone' && (
                  <OptionGrid
                    items={dimensionOptions}
                    selectedId={currentValue}
                    onSelect={(id) => updateDimension(activeDimension, id)}
                    lockedIds={lockedIds}
                    unavailableIds={unavailableIds}
                    showLock={true}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showGenderConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/30 flex items-center justify-center p-4"
            onClick={() => setShowGenderConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-5 max-w-xs w-full shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">🔄</div>
                <h3 className="text-base font-bold text-slate-800 mb-1">切换性别</h3>
                <p className="text-sm text-slate-500 mb-4">
                  切换后当前造型将重置为{pendingGender === 'boy' ? '男孩' : '女孩'}默认样式，是否继续？
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowGenderConfirm(false)}
                    className="flex-1 py-2 rounded-xl bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors"
                  >
                    取消
                  </button>
                  <button
                    onClick={confirmGenderSwitch}
                    className="flex-1 py-2 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
                  >
                    确认切换
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

Object.assign(window, { CharacterEditor });
