// ========== OnboardingFlow ==========
// 首次引导流程：选性别 → 捏脸 → 命名 → 出生仪式 → 进首页
// 日系二次元调性，纯文本输入（无预设选项/默认值）

const { useState, useEffect, useRef } = React;
const { motion, AnimatePresence } = window.Motion;

const OnboardingFlow = ({ onComplete }) => {
  const [step, setStep] = useState('gender'); // gender | face | naming | birth
  const [gender, setGender] = useState(null);
  const [characterName, setCharacterName] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [faceConfig, setFaceConfig] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [editorReady, setEditorReady] = useState(false);

  const nameInputRef = useRef(null);
  const nicknameInputRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const animDuration = reducedMotion ? 0 : 0.25;

  // Load character module when face step is reached
  useEffect(() => {
    if (step === 'face' && !editorReady && window.loadLazyModule) {
      window.loadLazyModule('character').then(() => {
        setEditorReady(true);
        useCharacterStore.getState().init();
      });
    }
  }, [step, editorReady]);

  // Initialize default config when entering face step
  useEffect(() => {
    if (step === 'face' && gender && !faceConfig) {
      const defaultConfig = {
        gender,
        faceShape: 'face-oval',
        hairStyle: gender === 'boy' ? 'hair-short' : 'hair-long',
        hairColor: '#2D2D2D',
        eyeShape: 'eye-big',
        eyeColor: '#5D8AA8',
        eyebrow: 'brow-straight',
        skinTone: '#F5D0C5',
        expression: 'expr-smile',
        top: gender === 'boy' ? 'top-tshirt' : 'top-sailor',
        bottom: gender === 'boy' ? 'bottom-shorts' : 'bottom-pleated-skirt',
        accessory: null,
        background: 'bg-room',
      };
      setFaceConfig(defaultConfig);
      // Pre-set in store so editor can read it
      if (useCharacterStore) {
        useCharacterStore.getState().setConfig(defaultConfig);
      }
    }
  }, [step, gender, faceConfig]);

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setStep('face');
  };

  const handleSkipFace = () => {
    // Use random config
    const randomConfig = {
      gender,
      faceShape: 'face-oval',
      hairStyle: gender === 'boy' ? 'hair-short' : 'hair-long',
      hairColor: '#2D2D2D',
      eyeShape: 'eye-big',
      eyeColor: '#5D8AA8',
      eyebrow: 'brow-straight',
      skinTone: '#F5D0C5',
      expression: 'expr-smile',
      top: gender === 'boy' ? 'top-tshirt' : 'top-sailor',
      bottom: gender === 'boy' ? 'bottom-shorts' : 'bottom-pleated-skirt',
      accessory: null,
      background: 'bg-room',
    };
    setFaceConfig(randomConfig);
    if (useCharacterStore) {
      useCharacterStore.getState().setConfig(randomConfig);
    }
    setStep('naming');
  };

  const handleFaceDone = () => {
    // Save current editor config from store
    const storeConfig = useCharacterStore.getState().config;
    if (storeConfig) {
      setFaceConfig(storeConfig);
    }
    setStep('naming');
  };

  const handleNamingDone = () => {
    setStep('birth');
  };

  const handleBirthDone = () => {
    // Persist everything
    const namingStore = typeof useNamingStore !== 'undefined' ? useNamingStore.getState() : null;
    if (namingStore) {
      namingStore.setCharacterName(characterName);
      namingStore.setUserNickname(userNickname);
    }
    // Save character config
    if (faceConfig && typeof useCharacterStore !== 'undefined') {
      useCharacterStore.getState().setConfig(faceConfig);
    }
    // Mark onboarded
    localStorage.setItem('lingopal_onboarded', 'true');
    if (onComplete) onComplete();
  };

  // NamingManager.render helper
  const renderTemplate = (template) => {
    if (!template) return '';
    return template
      .replace(/\{name\}/g, characterName || '')
      .replace(/\{address\}/g, userNickname || '');
  };

  return (
    <div className="min-h-full flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animDuration }}
        className="w-full max-w-sm"
      >
        {/* Logo */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-brand-gradient flex items-center justify-center text-2xl sm:text-3xl mb-3 shadow-lg shadow-brand-500/30"
          >
            🌍
          </motion.div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-800 font-display">语伴 LingoPal</h1>
          <p className="text-xs text-slate-400 mt-0.5">多语言翻译 · 趣味方言学习</p>
        </div>

        <AnimatePresence mode="wait">
          {/* Step: Gender Selection */}
          {step === 'gender' && (
            <motion.div
              key="gender"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: animDuration }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <h2 className="text-lg font-bold text-slate-800 mb-1 text-center">选择你的伙伴</h2>
              <p className="text-sm text-slate-500 mb-6 text-center">男孩还是女孩？选好后可以捏脸哦</p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleGenderSelect('boy')}
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl border-2 border-slate-100 hover:border-sky-400 hover:bg-sky-50 transition-all active:scale-95"
                >
                  <span className="text-4xl">👦</span>
                  <span className="text-sm font-semibold text-slate-700">男孩</span>
                </button>
                <button
                  onClick={() => handleGenderSelect('girl')}
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl border-2 border-slate-100 hover:border-pink-400 hover:bg-pink-50 transition-all active:scale-95"
                >
                  <span className="text-4xl">👧</span>
                  <span className="text-sm font-semibold text-slate-700">女孩</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Step: Face Customization */}
          {step === 'face' && (
            <motion.div
              key="face"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: animDuration }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-800">捏脸预览</h2>
                <span className="text-xs text-slate-400">少儿期基准模样</span>
              </div>
              <div className="h-80 relative">
                {editorReady && typeof CharacterEditor !== 'undefined' ? (
                  <CharacterEditor
                    embedded={true}
                    onSave={handleFaceDone}
                    onClose={handleFaceDone}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white text-xl animate-pulse">
                        🎨
                      </div>
                      <p className="text-sm text-slate-500">加载捏脸编辑器...</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 border-t border-slate-50 flex gap-3">
                <button
                  onClick={handleSkipFace}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors"
                >
                  随机形象
                </button>
                <button
                  onClick={handleFaceDone}
                  className="flex-1 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
                >
                  下一步
                </button>
              </div>
            </motion.div>
          )}

          {/* Step: Naming */}
          {step === 'naming' && (
            <motion.div
              key="naming"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: animDuration }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <h2 className="text-lg font-bold text-slate-800 mb-1">给伙伴起个名字</h2>
              <p className="text-sm text-slate-500 mb-5">{renderTemplate('{name}将陪伴你学习语言')}</p>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">伙伴名字</label>
                <input
                  ref={nameInputRef}
                  type="text"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  placeholder=""
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-base"
                  maxLength={20}
                  autoFocus
                  data-testid="character-name-input"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  想让{renderTemplate('{name}怎么称呼你？')}
                </label>
                <input
                  ref={nicknameInputRef}
                  type="text"
                  value={userNickname}
                  onChange={(e) => setUserNickname(e.target.value)}
                  placeholder=""
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-base"
                  maxLength={20}
                  data-testid="user-nickname-input"
                />
              </div>

              <button
                onClick={handleNamingDone}
                className="w-full py-3 rounded-xl bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition-colors"
              >
                下一步
              </button>
            </motion.div>
          )}

          {/* Step: Birth Ceremony */}
          {step === 'birth' && (
            <motion.div
              key="birth"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: animDuration }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="text-5xl mb-4"
              >
                🍼
              </motion.div>
              <h2 className="text-lg font-bold text-slate-800 mb-2">
                {renderTemplate('{name}出生了！')}
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                {renderTemplate('{address}，{name}将以婴儿形态陪伴你开启语言学习之旅。')}
              </p>

              {/* Baby preview placeholder */}
              <div className="w-32 h-40 mx-auto mb-6 rounded-2xl bg-gradient-to-b from-indigo-50 to-pink-50 flex items-center justify-center">
                {typeof BabyCharacterRenderer !== 'undefined' && faceConfig ? (
                  <BabyCharacterRenderer config={faceConfig} width="100%" height="100%" />
                ) : (
                  <span className="text-4xl">👶</span>
                )}
              </div>

              <button
                onClick={handleBirthDone}
                className="w-full py-3 rounded-xl bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition-colors"
              >
                进入首页
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

Object.assign(window, { OnboardingFlow });
