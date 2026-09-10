// ========== Login / Onboarding Page ==========
// 7-step onboarding: nickname -> languages -> profile dimensions (7-dim) -> goals

const LoginPage = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState('');
  const [selectedLangs, setSelectedLangs] = useState(['en']);
  const [goal, setGoal] = useState('daily');

  const { isMobile } = useMobileDetect();
  const { isOpen: keyboardOpen } = useKeyboard();
  const reducedMotion = useReducedMotion();

  const animDuration = reducedMotion ? 0 : isMobile ? 0.12 : 0.2;
  const cardPadding = isMobile ? 'p-4' : 'p-6';
  const listMaxH = isMobile ? 'max-h-48' : 'max-h-56';
  const gridCols = isMobile ? 'grid-cols-1' : 'grid-cols-2';

  // 7-dimension profile state
  const [profileDims, setProfileDims] = useState({
    languageLevel: 'beginner',
    learningGoal: 'hobby',
    dailyMinutes: '15min',
    learningStyle: 'mixed',
    knownLanguages: ['zh-CN'],
    weakAreas: ['vocabulary'],
    studyTimePreference: 'evening',
  });

  const nicknameRef = React.useRef(null);

  React.useEffect(() => {
    if (step === 1 && nicknameRef.current && keyboardOpen) {
      setTimeout(() => scrollToElement(nicknameRef.current), 100);
    }
  }, [step, keyboardOpen]);

  // BUGFIX: quizData.jsx is in the learning lazy group; login may load before it.
  // Guard with typeof to avoid ReferenceError if QUIZ_DATA is not yet defined.
  const quizDataReady = typeof QUIZ_DATA !== 'undefined';
  const learningLangs = LANGUAGES.filter(l => l.type !== 'system' && (!quizDataReady || QUIZ_DATA[l.code]));

  const toggleLang = (code) => {
    setSelectedLangs(prev =>
      prev.includes(code)
        ? prev.filter(c => c !== code)
        : [...prev, code]
    );
  };

  const toggleKnownLang = (code) => {
    setProfileDims(prev => {
      const next = prev.knownLanguages.includes(code)
        ? prev.knownLanguages.filter(c => c !== code)
        : [...prev.knownLanguages, code];
      return { ...prev, knownLanguages: next };
    });
  };

  const toggleWeakArea = (key) => {
    setProfileDims(prev => {
      const next = prev.weakAreas.includes(key)
        ? prev.weakAreas.filter(k => k !== key)
        : [...prev.weakAreas, key];
      return { ...prev, weakAreas: next };
    });
  };

  const setDim = (key, value) => {
    setProfileDims(prev => ({ ...prev, [key]: value }));
  };

  const handleFinish = () => {
    const userStore = useUserStore.getState();
    userStore.login(nickname || '语言学习者');

    // Update profile with selected languages + 7-dimension profile
    if (userStore.userId && window.db) {
      db.userProfiles.update(userStore.userId, {
        nickname: nickname || '语言学习者',
        targetLanguages: selectedLangs,
        ...profileDims,
      });
    }

    // Set learning language to first selected
    if (selectedLangs.length > 0) {
      useLearningStore.getState().setLanguage(selectedLangs[0]);
    }

    onComplete?.();
  };

  const totalSteps = 7;

  const renderStepIndicator = () => (
    <div className="flex justify-center gap-2 mb-4 sm:mb-6">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map(s => (
        <div
          key={s}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            s <= step ? 'w-6 bg-brand-500' : 'w-3 bg-slate-200'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-full flex flex-col items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animDuration }}
        className="w-full max-w-sm"
      >
        {/* Logo */}
        <div className="text-center mb-4 sm:mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: isMobile ? 500 : 200 }}
            className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-brand-gradient flex items-center justify-center text-2xl sm:text-3xl mb-3 shadow-lg shadow-brand-500/30"
          >
            🌍
          </motion.div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-800 font-display">语伴 LingoPal</h1>
          <p className="text-xs text-slate-400 mt-0.5">多语言翻译 · 趣味方言学习</p>
        </div>

        {renderStepIndicator()}

        <AnimatePresence mode="wait">
          {/* Step 1: Nickname */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: animDuration }}
              className={`bg-white rounded-2xl ${cardPadding} shadow-sm border border-slate-100`}
            >
              <h2 className="text-lg font-bold text-slate-800 mb-1">你好！👋</h2>
              <p className="text-sm text-slate-500 mb-4">给自己起个昵称吧</p>
              <input
                ref={nicknameRef}
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="输入你的昵称"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-base mb-4"
                maxLength={20}
                autoFocus
              />
              <Button fullWidth size="lg" iconRight="arrow-right" onClick={() => setStep(2)}>
                下一步
              </Button>
            </motion.div>
          )}

          {/* Step 2: Languages */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: animDuration }}
              className={`bg-white rounded-2xl ${cardPadding} shadow-sm border border-slate-100`}
            >
              <h2 className="text-lg font-bold text-slate-800 mb-1">想学习什么语言？📚</h2>
              <p className="text-sm text-slate-500 mb-4">可以多选，后续也可以随时切换</p>
              <div className={`space-y-2 mb-4 sm:mb-5 ${listMaxH} overflow-y-auto hide-scrollbar`}>
                {learningLangs.map(lang => {
                  const selected = selectedLangs.includes(lang.code);
                  return (
                    <button
                      key={lang.code}
                      onClick={() => toggleLang(lang.code)}
                      className={`touch-target w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left border-2 ${
                        selected
                          ? 'border-brand-500 bg-brand-50'
                          : 'border-slate-100 hover:border-slate-200 bg-white'
                      }`}
                    >
                      <span className="text-xl sm:text-2xl">{lang.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-slate-700 text-sm sm:text-base truncate">{lang.name}</div>
                        <div className="text-xs text-slate-400 truncate">
                          {lang.type === 'dialect' ? '方言' : lang.nameEn}
                          {quizDataReady && QUIZ_DATA[lang.code] ? ` · ${getAllLevels(lang.code).length} 关` : ''}
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                        selected ? 'bg-brand-500 border-brand-500 text-white' : 'border-slate-200'
                      }`}>
                        {selected && <Icon name="check" size={14} />}
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" fullWidth onClick={() => setStep(1)}>上一步</Button>
                <Button fullWidth iconRight="arrow-right" onClick={() => setStep(3)} disabled={selectedLangs.length === 0}>
                  下一步
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Language Level */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: animDuration }}
              className={`bg-white rounded-2xl ${cardPadding} shadow-sm border border-slate-100`}
            >
              <h2 className="text-lg font-bold text-slate-800 mb-1">你的语言水平？📊</h2>
              <p className="text-sm text-slate-500 mb-4">这将决定内容起点和难度曲线</p>
              <div className="space-y-2 mb-4 sm:mb-5">
                {PROFILE_DIMENSIONS.languageLevel.options.map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => setDim('languageLevel', opt.key)}
                    className={`touch-target w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left border-2 ${
                      profileDims.languageLevel === opt.key
                        ? 'border-brand-500 bg-brand-50'
                        : 'border-slate-100 hover:border-slate-200 bg-white'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl">{opt.emoji}</span>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 text-sm sm:text-base">{opt.label}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                      profileDims.languageLevel === opt.key ? 'bg-brand-500 border-brand-500 text-white' : 'border-slate-200'
                    }`}>
                      {profileDims.languageLevel === opt.key && <Icon name="check" size={14} />}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" fullWidth onClick={() => setStep(2)}>上一步</Button>
                <Button fullWidth iconRight="arrow-right" onClick={() => setStep(4)}>下一步</Button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Learning Goal */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: animDuration }}
              className={`bg-white rounded-2xl ${cardPadding} shadow-sm border border-slate-100`}
            >
              <h2 className="text-lg font-bold text-slate-800 mb-1">学习目标是什么？🎯</h2>
              <p className="text-sm text-slate-500 mb-4">决定词汇侧重和训练模式</p>
              <div className="space-y-2 mb-4 sm:mb-5">
                {PROFILE_DIMENSIONS.learningGoal.options.map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => setDim('learningGoal', opt.key)}
                    className={`touch-target w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left border-2 ${
                      profileDims.learningGoal === opt.key
                        ? 'border-brand-500 bg-brand-50'
                        : 'border-slate-100 hover:border-slate-200 bg-white'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl">{opt.emoji}</span>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 text-sm sm:text-base">{opt.label}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                      profileDims.learningGoal === opt.key ? 'bg-brand-500 border-brand-500 text-white' : 'border-slate-200'
                    }`}>
                      {profileDims.learningGoal === opt.key && <Icon name="check" size={14} />}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" fullWidth onClick={() => setStep(3)}>上一步</Button>
                <Button fullWidth iconRight="arrow-right" onClick={() => setStep(5)}>下一步</Button>
              </div>
            </motion.div>
          )}

          {/* Step 5: Daily Minutes + Learning Style */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: animDuration }}
              className={`bg-white rounded-2xl ${cardPadding} shadow-sm border border-slate-100`}
            >
              <h2 className="text-lg font-bold text-slate-800 mb-1">学习习惯 ⏱️</h2>
              <p className="text-sm text-slate-500 mb-4">帮你制定合适的每日任务量</p>

              <div className="mb-4 sm:mb-5">
                <label className="text-sm font-medium text-slate-700 mb-2 block">每日可用时长</label>
                <div className={`grid ${gridCols} gap-2`}>
                  {PROFILE_DIMENSIONS.dailyMinutes.options.map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setDim('dailyMinutes', opt.key)}
                      className={`touch-target flex items-center gap-2 p-3 rounded-xl transition-all text-left border-2 ${
                        profileDims.dailyMinutes === opt.key
                          ? 'border-brand-500 bg-brand-50'
                          : 'border-slate-100 hover:border-slate-200 bg-white'
                      }`}
                    >
                      <span className="text-lg">{opt.emoji}</span>
                      <span className="text-sm font-medium text-slate-700">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4 sm:mb-5">
                <label className="text-sm font-medium text-slate-700 mb-2 block">学习偏好</label>
                <div className={`grid ${gridCols} gap-2`}>
                  {PROFILE_DIMENSIONS.learningStyle.options.map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setDim('learningStyle', opt.key)}
                      className={`touch-target flex items-center gap-2 p-3 rounded-xl transition-all text-left border-2 ${
                        profileDims.learningStyle === opt.key
                          ? 'border-brand-500 bg-brand-50'
                          : 'border-slate-100 hover:border-slate-200 bg-white'
                      }`}
                    >
                      <span className="text-lg">{opt.emoji}</span>
                      <span className="text-sm font-medium text-slate-700">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" fullWidth onClick={() => setStep(4)}>上一步</Button>
                <Button fullWidth iconRight="arrow-right" onClick={() => setStep(6)}>下一步</Button>
              </div>
            </motion.div>
          )}

          {/* Step 6: Known Languages + Weak Areas */}
          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: animDuration }}
              className={`bg-white rounded-2xl ${cardPadding} shadow-sm border border-slate-100`}
            >
              <h2 className="text-lg font-bold text-slate-800 mb-1">个性化诊断 🔍</h2>
              <p className="text-sm text-slate-500 mb-4">针对性降低学习门槛</p>

              <div className="mb-4">
                <label className="text-sm font-medium text-slate-700 mb-2 block">已掌握语言（多选）</label>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.filter(l => l.type !== 'system').map(lang => {
                    const selected = profileDims.knownLanguages.includes(lang.code);
                    return (
                      <button
                        key={lang.code}
                        onClick={() => toggleKnownLang(lang.code)}
                        className={`touch-target-sm flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm border-2 transition-all ${
                          selected
                            ? 'border-brand-500 bg-brand-50 text-brand-700'
                            : 'border-slate-100 bg-white text-slate-600 hover:border-slate-200'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-4 sm:mb-5">
                <label className="text-sm font-medium text-slate-700 mb-2 block">薄弱环节（多选）</label>
                <div className="flex flex-wrap gap-2">
                  {PROFILE_DIMENSIONS.weakAreas.options.map(opt => {
                    const selected = profileDims.weakAreas.includes(opt.key);
                    return (
                      <button
                        key={opt.key}
                        onClick={() => toggleWeakArea(opt.key)}
                        className={`touch-target-sm flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm border-2 transition-all ${
                          selected
                            ? 'border-brand-500 bg-brand-50 text-brand-700'
                            : 'border-slate-100 bg-white text-slate-600 hover:border-slate-200'
                        }`}
                      >
                        <span>{opt.emoji}</span>
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" fullWidth onClick={() => setStep(5)}>上一步</Button>
                <Button fullWidth iconRight="arrow-right" onClick={() => setStep(7)}>下一步</Button>
              </div>
            </motion.div>
          )}

          {/* Step 7: Study Time Preference + Pace */}
          {step === 7 && (
            <motion.div
              key="step7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: animDuration }}
              className={`bg-white rounded-2xl ${cardPadding} shadow-sm border border-slate-100`}
            >
              <h2 className="text-lg font-bold text-slate-800 mb-1">学习节奏 🕐</h2>
              <p className="text-sm text-slate-500 mb-4">决定推送提醒时段</p>

              <div className="mb-4">
                <label className="text-sm font-medium text-slate-700 mb-2 block">学习时段偏好</label>
                <div className={`grid ${gridCols} gap-2`}>
                  {PROFILE_DIMENSIONS.studyTimePreference.options.map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setDim('studyTimePreference', opt.key)}
                      className={`touch-target flex items-center gap-2 p-3 rounded-xl transition-all text-left border-2 ${
                        profileDims.studyTimePreference === opt.key
                          ? 'border-brand-500 bg-brand-50'
                          : 'border-slate-100 hover:border-slate-200 bg-white'
                      }`}
                    >
                      <span className="text-lg">{opt.emoji}</span>
                      <span className="text-sm font-medium text-slate-700">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4 sm:mb-5">
                <label className="text-sm font-medium text-slate-700 mb-2 block">整体学习节奏</label>
                <div className="space-y-2">
                  {[
                    { key: 'light',  title: '轻松入门', desc: '每天 10 分钟，培养兴趣', emoji: '🌱' },
                    { key: 'daily',  title: '日常学习', desc: '每天 20 分钟，稳步提升', emoji: '📖' },
                    { key: 'intense', title: '冲刺模式', desc: '每天 45 分钟，快速突破', emoji: '🚀' },
                  ].map(g => (
                    <button
                      key={g.key}
                      onClick={() => setGoal(g.key)}
                      className={`touch-target w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left border-2 ${
                        goal === g.key
                          ? 'border-brand-500 bg-brand-50'
                          : 'border-slate-100 hover:border-slate-200 bg-white'
                      }`}
                    >
                      <span className="text-xl">{g.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-slate-700 text-sm sm:text-base">{g.title}</div>
                        <div className="text-xs text-slate-400 truncate">{g.desc}</div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                        goal === g.key ? 'bg-brand-500 border-brand-500 text-white' : 'border-slate-200'
                      }`}>
                        {goal === g.key && <Icon name="check" size={14} />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" fullWidth onClick={() => setStep(6)}>上一步</Button>
                <Button fullWidth variant="mint" onClick={handleFinish}>
                  开始学习
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip link */}
        <div className="text-center mt-4">
          <button
            onClick={handleFinish}
            className="touch-target-sm text-xs text-slate-400 hover:text-slate-600 transition-colors px-2 py-1"
          >
            先跳过，直接使用
          </button>
        </div>
      </motion.div>
    </div>
  );
};

Object.assign(window, { LoginPage });
