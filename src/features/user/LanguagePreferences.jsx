// ========== Language Preferences Settings ==========
// Target languages (max 5), per-language difficulty, learning goal, default language

const LanguagePreferences = ({ onBack }) => {
  const { profile, userId, updateProfile } = useUserStore();
  const [form, setForm] = useState({
    targetLanguages: profile?.targetLanguages || ['en'],
    currentLevel: profile?.currentLevel || { en: 'beginner' },
    learningGoal: profile?.learningGoal || 'hobby',
    defaultLanguage: profile?.defaultLanguage || 'en',
  });
  const [isSaving, setIsSaving] = useState(false);

  const learnableLanguages = useMemo(() =>
    LANGUAGES.filter(l => l.type !== 'system'),
  []);

  const handleToggleLanguage = (code) => {
    setForm(prev => {
      const has = prev.targetLanguages.includes(code);
      let nextTargets;
      if (has) {
        nextTargets = prev.targetLanguages.filter(c => c !== code);
      } else {
        if (prev.targetLanguages.length >= 5) {
          useUIStore.getState().showNotification('最多选择 5 个目标语言', 'warning');
          return prev;
        }
        nextTargets = [...prev.targetLanguages, code];
      }
      // Ensure currentLevel has entry for each target
      const nextLevels = { ...prev.currentLevel };
      if (!has && !nextLevels[code]) {
        nextLevels[code] = 'beginner';
      }
      return { ...prev, targetLanguages: nextTargets, currentLevel: nextLevels };
    });
  };

  const handleSetLevel = (code, level) => {
    setForm(prev => ({
      ...prev,
      currentLevel: { ...prev.currentLevel, [code]: level },
    }));
  };

  const handleSave = async () => {
    if (!userId) {
      useUIStore.getState().showNotification('请先登录', 'warning');
      return;
    }
    setIsSaving(true);
    const updates = {
      targetLanguages: form.targetLanguages,
      currentLevel: form.currentLevel,
      learningGoal: form.learningGoal,
      defaultLanguage: form.defaultLanguage,
    };
    try {
      if (window.db) {
        await db.userProfiles.update(userId, updates);
      }
      updateProfile(updates);
      useUIStore.getState().showNotification('语言偏好已保存', 'success');
      onBack?.();
    } catch (e) {
      console.error('[LanguagePreferences] 保存失败:', e);
      useUIStore.getState().showNotification('保存失败', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors touch-target"
        >
          <Icon name="chevron-left" size={20} />
        </button>
        <h2 className="text-lg font-bold text-slate-800">语言偏好设置</h2>
      </div>

      {/* Target Languages */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3 flex items-center gap-2">
          <Icon name="globe" size={16} className="text-brand-500" />
          目标语言
          <span className="text-xs text-slate-400 font-normal">({form.targetLanguages.length}/5)</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {learnableLanguages.map(lang => {
            const selected = form.targetLanguages.includes(lang.code);
            return (
              <button
                key={lang.code}
                onClick={() => handleToggleLanguage(lang.code)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs border-2 transition-all ${
                  selected
                    ? 'border-brand-500 bg-brand-50 text-brand-700'
                    : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                }`}
              >
                {lang.flag} {lang.name}
                {selected && <Icon name="check" size={12} className="text-brand-500" />}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Per-language Difficulty */}
      {form.targetLanguages.length > 0 && (
        <Card padding="p-4">
          <h3 className="font-semibold text-slate-800 text-sm mb-3 flex items-center gap-2">
            <Icon name="chart" size={16} className="text-brand-500" />
            各语言难度
          </h3>
          <div className="flex flex-col gap-3">
            {form.targetLanguages.map(code => {
              const lang = LANGUAGE_MAP[code];
              const level = form.currentLevel[code] || 'beginner';
              return (
                <div key={code} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>{lang?.flag}</span>
                    <span className="text-sm text-slate-700">{lang?.name}</span>
                  </div>
                  <div className="flex gap-1">
                    {PROFILE_DIMENSIONS.languageLevel.options.map(opt => (
                      <button
                        key={opt.key}
                        onClick={() => handleSetLevel(code, opt.key)}
                        className={`px-2 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                          level === opt.key
                            ? 'bg-brand-500 text-white'
                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* Learning Goal */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3 flex items-center gap-2">
          <Icon name="target" size={16} className="text-brand-500" />
          学习方向
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {PROFILE_DIMENSIONS.learningGoal.options.map(opt => (
            <button
              key={opt.key}
              onClick={() => setForm(prev => ({ ...prev, learningGoal: opt.key }))}
              className={`py-2 rounded-xl text-sm font-medium transition-colors ${
                form.learningGoal === opt.key
                  ? 'bg-brand-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {opt.emoji} {opt.label}
            </button>
          ))}
        </div>
      </Card>

      {/* Default Language */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3 flex items-center gap-2">
          <Icon name="home" size={16} className="text-brand-500" />
          默认首页语言
        </h3>
        <div className="flex flex-wrap gap-2">
          {form.targetLanguages.map(code => {
            const lang = LANGUAGE_MAP[code];
            return (
              <button
                key={code}
                onClick={() => setForm(prev => ({ ...prev, defaultLanguage: code }))}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border-2 transition-all ${
                  form.defaultLanguage === code
                    ? 'border-brand-500 bg-brand-50 text-brand-700'
                    : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                }`}
              >
                {lang?.flag} {lang?.name}
              </button>
            );
          })}
          {form.targetLanguages.length === 0 && (
            <span className="text-xs text-slate-400">请先选择目标语言</span>
          )}
        </div>
      </Card>

      {/* Save */}
      <Button
        fullWidth
        loading={isSaving}
        onClick={handleSave}
        icon="check"
      >
        保存设置
      </Button>
    </div>
  );
};

Object.assign(window, { LanguagePreferences });
