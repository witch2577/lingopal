// ========== CharacterCreationModal ==========
// First-time onboarding for the cultivation character system.
// Step 1: Choose gender (boy/girl) — explicitly unrelated to user profile gender.
// Step 2: Name the character.
// Step 3: Choose how the character addresses the player.
// After completion, sets config.userCreated = true and persists.
const { useState, useCallback } = React;
const { motion, AnimatePresence } = window.Motion;
function CharacterCreationModal({ onComplete, onCancel, isRedo = false }) {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState(null);
  const [characterName, setCharacterName] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [preserveGrowth, setPreserveGrowth] = useState(false);
  const maxSteps = 3;
  const handleGenderSelect = (g) => {
    setGender(g);
    setStep(2);
  };
  const handleNext = () => {
    if (step < maxSteps) setStep(step + 1);
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleComplete = useCallback(() => {
    const store = useCharacterStore.getState();
    const currentConfig = store.config || getDefaultCharacterConfig();
    const currentNaming = store.naming || getDefaultCharacterNaming();
    const newConfig = {
      ...currentConfig,
      gender: gender || 'girl',
      characterName: characterName.trim(),
      customTitle: customTitle.trim(),
      userCreated: true,
    };
    const newNaming = {
      ...currentNaming,
      characterName: characterName.trim(),
      customTitle: customTitle.trim(),
      nameChangedAt: Date.now(),
      nicknameHistory: [
        ...(currentNaming.nicknameHistory || []),
        { characterName: characterName.trim(), customTitle: customTitle.trim(), changedAt: Date.now() },
      ],
    };
    if (isRedo) {
      store.resetCharacter(preserveGrowth);
      // After reset, apply the new values
      const afterReset = useCharacterStore.getState();
      const mergedConfig = { ...afterReset.config, ...newConfig };
      const mergedNaming = { ...afterReset.naming, ...newNaming };
      store.setConfig(mergedConfig);
      store.setNaming(mergedNaming);
    } else {
      store.setConfig(newConfig);
      store.setNaming(newNaming);
    }
    if (onComplete) onComplete();
  }, [gender, characterName, customTitle, isRedo, preserveGrowth, onComplete]);
  const canProceed = () => {
    if (step === 2) return characterName.trim().length > 0;
    if (step === 3) return customTitle.trim().length > 0;
    return true;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-white flex flex-col"
    >
      {/* Header */}
      <div className="shrink-0 px-4 pt-4 pb-2 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="flex items-center gap-2">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <span className="text-lg">←</span>
            </button>
          )}
          <h1 className="text-lg font-bold text-slate-800">
            {isRedo ? '重新创建角色' : '创建你的养成角色'}
          </h1>
        </div>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: maxSteps }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i + 1 === step ? 'bg-brand-500' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {/* Step 1: Gender */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-6 max-w-sm mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl mb-2">🧒</div>
                <h2 className="text-xl font-bold text-slate-800 mb-1">选择角色性别</h2>
                <p className="text-sm text-slate-500">
                  这是你的养成角色，与你本人资料无关，纯由你选择
                </p>
              </div>
              <div className="flex gap-4 w-full">
                <button
                  onClick={() => handleGenderSelect('boy')}
                  className={`flex-1 flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all ${
                    gender === 'boy'
                      ? 'border-sky-400 bg-sky-50'
                      : 'border-slate-100 bg-white hover:border-slate-200'
                  }`}
                >
                  <span className="text-5xl">👦</span>
                  <span className="text-base font-semibold text-slate-700">男孩</span>
                </button>
                <button
                  onClick={() => handleGenderSelect('girl')}
                  className={`flex-1 flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all ${
                    gender === 'girl'
                      ? 'border-pink-400 bg-pink-50'
                      : 'border-slate-100 bg-white hover:border-slate-200'
                  }`}
                >
                  <span className="text-5xl">👧</span>
                  <span className="text-base font-semibold text-slate-700">女孩</span>
                </button>
              </div>
              {isRedo && (
                <div className="w-full flex items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-100">
                  <input
                    id="preserve-growth"
                    type="checkbox"
                    checked={preserveGrowth}
                    onChange={(e) => setPreserveGrowth(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-brand-500 focus:ring-brand-500"
                  />
                  <label htmlFor="preserve-growth" className="text-sm text-amber-800">
                    保留当前成长数据（GP、阶段等）
                  </label>
                </div>
              )}
              <p className="text-xs text-slate-400 text-center">
                选择后仍可随时在角色捏脸中更改
              </p>
            </motion.div>
          )}
          {/* Step 2: Character Name */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-6 max-w-sm mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl mb-2">✏️</div>
                <h2 className="text-xl font-bold text-slate-800 mb-1">给角色起个昵称</h2>
                <p className="text-sm text-slate-500">
                  这个昵称会在对话和互动中使用
                </p>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  placeholder="例如：小语、豆豆、米米..."
                  maxLength={12}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-center text-lg"
                  autoFocus
                />
                <div className="text-right text-xs text-slate-400 mt-1">
                  {characterName.length}/12
                </div>
              </div>
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`w-full py-3 rounded-xl text-base font-semibold transition-all ${
                  canProceed()
                    ? 'bg-gradient-to-r from-brand-500 to-purple-500 text-white shadow-lg shadow-brand-500/25'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                下一步
              </button>
            </motion.div>
          )}
          {/* Step 3: Custom Title */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-6 max-w-sm mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl mb-2">💬</div>
                <h2 className="text-xl font-bold text-slate-800 mb-1">角色怎么称呼你？</h2>
                <p className="text-sm text-slate-500">
                  例如：主人、姐姐、哥哥、名字...
                </p>
              </div>
              <div className="w-full flex flex-wrap gap-2 justify-center">
                {['主人', '姐姐', '哥哥', '小伙伴', '大大'].map((title) => (
                  <button
                    key={title}
                    onClick={() => setCustomTitle(title)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                      customTitle === title
                        ? 'bg-brand-500 text-white border-brand-500'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {title}
                  </button>
                ))}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="自定义称呼..."
                  maxLength={10}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-center text-lg"
                  autoFocus
                />
                <div className="text-right text-xs text-slate-400 mt-1">
                  {customTitle.length}/10
                </div>
              </div>
              <button
                onClick={handleComplete}
                disabled={!canProceed()}
                className={`w-full py-3 rounded-xl text-base font-semibold transition-all ${
                  canProceed()
                    ? 'bg-gradient-to-r from-brand-500 to-purple-500 text-white shadow-lg shadow-brand-500/25'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                {isRedo ? '确认重建' : '完成创建'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Cancel button */}
      {!isRedo && (
        <div className="shrink-0 px-4 pb-6 pt-2">
          <button
            onClick={onCancel}
            className="w-full py-2.5 rounded-xl text-sm font-medium text-slate-500 bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            稍后再说
          </button>
        </div>
      )}
    </motion.div>
  );
}
Object.assign(window, { CharacterCreationModal });
