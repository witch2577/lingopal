// ========== User Profile Component ==========
// Displays and edits 7-dimension user profile

const UserProfile = () => {
  const { profile, userId, updateProfile } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);

  // Form state includes all 7 dimensions + legacy fields
  const [form, setForm] = useState({
    nickname: profile?.nickname || '',
    gender: profile?.gender || 'other',
    age: profile?.age || 25,
    occupation: profile?.occupation || '',
    freeTime: profile?.freeTime || 'evening',
    // 7-dimension profile
    languageLevel: profile?.languageLevel || 'beginner',
    learningGoal: profile?.learningGoal || 'hobby',
    dailyMinutes: profile?.dailyMinutes || '15min',
    learningStyle: profile?.learningStyle || 'mixed',
    knownLanguages: profile?.knownLanguages || ['zh-CN'],
    weakAreas: profile?.weakAreas || ['vocabulary'],
    studyTimePreference: profile?.studyTimePreference || 'evening',
  });

  useEffect(() => {
    if (profile) {
      setForm({
        nickname: profile.nickname || '',
        gender: profile.gender || 'other',
        age: profile.age || 25,
        occupation: profile.occupation || '',
        freeTime: profile.freeTime || 'evening',
        languageLevel: profile.languageLevel || 'beginner',
        learningGoal: profile.learningGoal || 'hobby',
        dailyMinutes: profile.dailyMinutes || '15min',
        learningStyle: profile.learningStyle || 'mixed',
        knownLanguages: profile.knownLanguages || ['zh-CN'],
        weakAreas: profile.weakAreas || ['vocabulary'],
        studyTimePreference: profile.studyTimePreference || 'evening',
      });
    }
  }, [profile?.nickname]);

  const handleSave = () => {
    updateProfile(form);
    setIsEditing(false);
    useUIStore.getState().showNotification('资料已更新', 'success');
  };

  const handleClearAllData = () => {
    if (!confirm('确定要清除所有数据吗？此操作不可恢复！')) return;
    if (window.db) {
      db.delete().then(() => {
        location.reload();
      });
    }
  };

  const streakDays = useUserStore(s => s.streakDays);
  const totalXP = useUserStore(s => s.totalXP);
  const achievements = useUserStore(s => s.achievements);
  const currentLevel = getLevelByXP(totalXP);
  const xpProgress = getXPProgress(totalXP);
  const [oralRecords, setOralRecords] = useState([]);
  const [playingRecordId, setPlayingRecordId] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      if (!userId || !window.db) return;
      try {
        const recs = await db.oralRecords
          .where({ userId, type: 'training' })
          .reverse()
          .limit(20)
          .toArray();
        setOralRecords(recs);
      } catch (e) { console.error('[UserProfile] 加载录音记录失败:', e); }
    };
    load();
  }, [userId]);

  const playRecord = (record) => {
    if (!record.blob || playingRecordId === record.id) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setPlayingRecordId(null);
      return;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    const url = URL.createObjectURL(record.blob);
    const audio = new Audio(url);
    audioRef.current = audio;
    audio.onended = () => {
      setPlayingRecordId(null);
      URL.revokeObjectURL(url);
    };
    audio.onerror = () => {
      setPlayingRecordId(null);
      URL.revokeObjectURL(url);
    };
    setPlayingRecordId(record.id);
    audio.play();
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Helper: render a dimension as read-only chip
  const DimChip = ({ label, value, options }) => {
    const opt = options?.find(o => o.key === value);
    if (!opt) return null;
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl text-xs">
        <span>{opt.emoji}</span>
        <span className="text-slate-500">{label}:</span>
        <span className="font-medium text-slate-700">{opt.label}</span>
      </div>
    );
  };

  // Helper: render multi-select chips
  const MultiDimChips = ({ label, values, options }) => {
    const selected = options?.filter(o => values?.includes(o.key));
    if (!selected?.length) return null;
    return (
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-slate-500">{label}:</span>
        {selected.map(opt => (
          <span key={opt.key} className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand-50 text-brand-700 rounded-lg text-xs">
            <span>{opt.emoji}</span>
            <span>{opt.label}</span>
          </span>
        ))}
      </div>
    );
  };

  if (isEditing) {
    return (
      <div className="flex flex-col gap-4">
        <Card padding="p-5">
          <h3 className="font-bold text-slate-800 mb-4">编辑个人资料</h3>
          <div className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto hide-scrollbar pr-1">
            {/* Basic info */}
            <div>
              <label className="text-sm text-slate-600 mb-1 block">昵称</label>
              <input
                type="text"
                value={form.nickname}
                onChange={(e) => setForm(f => ({ ...f, nickname: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600 mb-1 block">性别</label>
              <div className="flex gap-2">
                {[
                  { v: 'male', label: '男' },
                  { v: 'female', label: '女' },
                  { v: 'other', label: '保密' },
                ].map(opt => (
                  <button
                    key={opt.v}
                    onClick={() => setForm(f => ({ ...f, gender: opt.v }))}
                    className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
                      form.gender === opt.v ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-600 mb-1 block">年龄</label>
              <input
                type="number"
                value={form.age}
                onChange={(e) => setForm(f => ({ ...f, age: parseInt(e.target.value) || 0 }))}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600 mb-1 block">职业</label>
              <input
                type="text"
                value={form.occupation}
                onChange={(e) => setForm(f => ({ ...f, occupation: e.target.value }))}
                placeholder="如：学生、程序员、老师..."
                className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-sm"
              />
            </div>

            {/* 7-dimension profile */}
            <div className="border-t border-slate-100 pt-4">
              <h4 className="text-sm font-semibold text-slate-700 mb-3">学习画像</h4>

              {/* Language Level */}
              <div className="mb-3">
                <label className="text-sm text-slate-600 mb-1 block">当前语言水平</label>
                <div className="grid grid-cols-2 gap-2">
                  {PROFILE_DIMENSIONS.languageLevel.options.map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setForm(f => ({ ...f, languageLevel: opt.key }))}
                      className={`py-2 rounded-xl text-sm font-medium transition-colors ${
                        form.languageLevel === opt.key
                          ? 'bg-brand-500 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {opt.emoji} {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Learning Goal */}
              <div className="mb-3">
                <label className="text-sm text-slate-600 mb-1 block">学习目标</label>
                <div className="grid grid-cols-2 gap-2">
                  {PROFILE_DIMENSIONS.learningGoal.options.map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setForm(f => ({ ...f, learningGoal: opt.key }))}
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
              </div>

              {/* Daily Minutes */}
              <div className="mb-3">
                <label className="text-sm text-slate-600 mb-1 block">每日可用时长</label>
                <div className="grid grid-cols-2 gap-2">
                  {PROFILE_DIMENSIONS.dailyMinutes.options.map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setForm(f => ({ ...f, dailyMinutes: opt.key }))}
                      className={`py-2 rounded-xl text-sm font-medium transition-colors ${
                        form.dailyMinutes === opt.key
                          ? 'bg-brand-500 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {opt.emoji} {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Learning Style */}
              <div className="mb-3">
                <label className="text-sm text-slate-600 mb-1 block">学习偏好</label>
                <div className="grid grid-cols-2 gap-2">
                  {PROFILE_DIMENSIONS.learningStyle.options.map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setForm(f => ({ ...f, learningStyle: opt.key }))}
                      className={`py-2 rounded-xl text-sm font-medium transition-colors ${
                        form.learningStyle === opt.key
                          ? 'bg-brand-500 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {opt.emoji} {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Known Languages */}
              <div className="mb-3">
                <label className="text-sm text-slate-600 mb-1 block">已掌握语言</label>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.filter(l => l.type !== 'system').map(lang => {
                    const selected = form.knownLanguages.includes(lang.code);
                    return (
                      <button
                        key={lang.code}
                        onClick={() => setForm(f => {
                          const next = selected
                            ? f.knownLanguages.filter(c => c !== lang.code)
                            : [...f.knownLanguages, lang.code];
                          return { ...f, knownLanguages: next };
                        })}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs border-2 transition-all ${
                          selected
                            ? 'border-brand-500 bg-brand-50 text-brand-700'
                            : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                        }`}
                      >
                        {lang.flag} {lang.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Weak Areas */}
              <div className="mb-3">
                <label className="text-sm text-slate-600 mb-1 block">薄弱环节</label>
                <div className="flex flex-wrap gap-2">
                  {PROFILE_DIMENSIONS.weakAreas.options.map(opt => {
                    const selected = form.weakAreas.includes(opt.key);
                    return (
                      <button
                        key={opt.key}
                        onClick={() => setForm(f => {
                          const next = selected
                            ? f.weakAreas.filter(k => k !== opt.key)
                            : [...f.weakAreas, opt.key];
                          return { ...f, weakAreas: next };
                        })}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs border-2 transition-all ${
                          selected
                            ? 'border-brand-500 bg-brand-50 text-brand-700'
                            : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                        }`}
                      >
                        {opt.emoji} {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Study Time Preference */}
              <div className="mb-3">
                <label className="text-sm text-slate-600 mb-1 block">学习时段偏好</label>
                <div className="grid grid-cols-2 gap-2">
                  {PROFILE_DIMENSIONS.studyTimePreference.options.map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setForm(f => ({ ...f, studyTimePreference: opt.key }))}
                      className={`py-2 rounded-xl text-sm font-medium transition-colors ${
                        form.studyTimePreference === opt.key
                          ? 'bg-brand-500 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {opt.emoji} {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <Button variant="outline" fullWidth onClick={() => setIsEditing(false)}>
              取消
            </Button>
            <Button fullWidth onClick={handleSave}>
              保存
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Profile header */}
      <Card className="bg-gradient-to-br from-brand-500 to-violet-600 text-white" padding="p-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl">
            {profile?.nickname?.[0]?.toUpperCase() || '👤'}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold truncate">{profile?.nickname || '学习者'}</h2>
            <p className="text-sm opacity-80">ID: {userId?.slice(0, 12)}</p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-sm transition-colors btn-press"
          >
            <Icon name="settings" size={20} />
          </button>
        </div>

        {/* Level + XP bar */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs opacity-80 mb-1">
            <span>Lv.{currentLevel.level} {currentLevel.title}</span>
            <span>{xpProgress.current}/{xpProgress.needed} XP</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white/80 rounded-full" style={{ width: `${xpProgress.progress * 100}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2.5 text-center">
            <div className="text-xl font-bold">{streakDays || 0}</div>
            <div className="text-[10px] opacity-80">连续天数</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2.5 text-center">
            <div className="text-xl font-bold">{totalXP || 0}</div>
            <div className="text-[10px] opacity-80">总经验</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2.5 text-center">
            <div className="text-xl font-bold">{achievements?.length || 0}</div>
            <div className="text-[10px] opacity-80">成就</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2.5 text-center">
            <div className="text-xl font-bold">Lv.{currentLevel.level}</div>
            <div className="text-[10px] opacity-80">{currentLevel.title}</div>
          </div>
        </div>
      </Card>

      {/* 7-dimension profile summary */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3 flex items-center gap-2">
          <Icon name="target" size={16} className="text-brand-500" />
          学习画像
        </h3>
        <div className="flex flex-wrap gap-2">
          <DimChip label="水平" value={profile?.languageLevel} options={PROFILE_DIMENSIONS.languageLevel.options} />
          <DimChip label="目标" value={profile?.learningGoal} options={PROFILE_DIMENSIONS.learningGoal.options} />
          <DimChip label="时长" value={profile?.dailyMinutes} options={PROFILE_DIMENSIONS.dailyMinutes.options} />
          <DimChip label="偏好" value={profile?.learningStyle} options={PROFILE_DIMENSIONS.learningStyle.options} />
          <DimChip label="时段" value={profile?.studyTimePreference} options={PROFILE_DIMENSIONS.studyTimePreference.options} />
        </div>
        <div className="mt-2">
          <MultiDimChips label="已掌握" values={profile?.knownLanguages} options={LANGUAGES.filter(l => l.type !== 'system').map(l => ({ key: l.code, label: l.name, emoji: l.flag }))} />
        </div>
        <div className="mt-2">
          <MultiDimChips label="薄弱项" values={profile?.weakAreas} options={PROFILE_DIMENSIONS.weakAreas.options} />
        </div>
      </Card>

      {/* Quick stats */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3">学习语言</h3>
        <div className="flex flex-wrap gap-2">
          {profile?.targetLanguages?.map(code => {
            const lang = LANGUAGE_MAP[code];
            return lang ? (
              <Badge key={code} variant="primary" className="text-xs px-3 py-1">
                {lang.flag} {lang.name}
              </Badge>
            ) : null;
          })}
          {(!profile?.targetLanguages || profile.targetLanguages.length === 0) && (
            <span className="text-sm text-slate-400">还未设置目标语言</span>
          )}
        </div>
      </Card>

      {/* Oral training records */}
      {oralRecords.length > 0 && (
        <Card padding="p-4">
          <h3 className="font-semibold text-slate-800 text-sm mb-3 flex items-center gap-2">
            <Icon name="mic" size={16} className="text-rose-500" />
            历史录音
          </h3>
          <div className="space-y-2 max-h-48 overflow-y-auto hide-scrollbar">
            {oralRecords.map((rec) => (
              <div
                key={rec.id}
                className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2 text-xs"
              >
                <div className="flex-1 min-w-0 mr-2">
                  <div className="text-slate-700 font-medium truncate">{rec.text || '未命名录音'}</div>
                  <div className="text-slate-400 mt-0.5">
                    {new Date(rec.timestamp).toLocaleDateString()} · {rec.duration || 0}s
                  </div>
                </div>
                <button
                  onClick={() => playRecord(rec)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    playingRecordId === rec.id
                      ? 'bg-brand-500 text-white'
                      : 'bg-white text-brand-600 hover:bg-brand-50 border border-slate-200'
                  }`}
                >
                  <Icon name={playingRecordId === rec.id ? 'volume' : 'play'} size={12} />
                  {playingRecordId === rec.id ? '播放中' : '播放'}
                </button>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* PWA & Offline */}
      <Card padding="p-0">
        {/* 安装到主屏 */}
        <PWASettingsItem />
        {/* 离线数据管理 */}
        <OfflineStorageInfo />
      </Card>

      {/* Settings list */}
      <Card padding="p-0">
        <button
          onClick={() => useUIStore.getState().showNotification('功能开发中', 'info')}
          className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors text-left border-b border-slate-100"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
            <Icon name="globe" size={18} />
          </div>
          <span className="flex-1 text-sm text-slate-700">语言偏好设置</span>
          <Icon name="chevron" size={16} className="text-slate-300" />
        </button>
        <button
          onClick={() => useUIStore.getState().showNotification('功能开发中', 'info')}
          className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors text-left border-b border-slate-100"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
            <Icon name="target" size={18} />
          </div>
          <span className="flex-1 text-sm text-slate-700">学习计划管理</span>
          <Icon name="chevron" size={16} className="text-slate-300" />
        </button>
        <button
          onClick={() => useUIStore.getState().showNotification('功能开发中', 'info')}
          className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors text-left border-b border-slate-100"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
            <Icon name="bookmark" size={18} />
          </div>
          <span className="flex-1 text-sm text-slate-700">我的收藏</span>
          <Icon name="chevron" size={16} className="text-slate-300" />
        </button>
        <button
          onClick={handleClearAllData}
          className="w-full flex items-center gap-3 p-4 hover:bg-red-50 transition-colors text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
            <Icon name="trash" size={18} />
          </div>
          <span className="flex-1 text-sm text-red-600">清除所有数据</span>
          <Icon name="chevron" size={16} className="text-red-300" />
        </button>
      </Card>

      {/* Version info */}
      <div className="text-center text-xs text-slate-300 pt-4 pb-2">
        LingoPal v1.2.0 · 语伴 · PWA
      </div>
    </div>
  );
};

// ========== PWA 设置项 ==========
const PWASettingsItem = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const checkStatus = () => {
      const installed =
        window.matchMedia('(display-mode: standalone)').matches ||
        window.matchMedia('(display-mode: fullscreen)').matches ||
        (window.navigator.standalone === true);
      setIsInstalled(installed);
    };
    checkStatus();

    const handlePrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handlePrompt);
    window.addEventListener('appinstalled', () => setIsInstalled(true));

    return () => window.removeEventListener('beforeinstallprompt', handlePrompt);
  }, []);

  const handleInstall = async () => {
    if (installPrompt) {
      installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') {
        setInstallPrompt(null);
      }
    } else {
      useUIStore.getState().showNotification(
        '请点击浏览器菜单选择「添加到主屏幕」', 'info', 3000
      );
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'LingoPal 语伴',
        text: '多语言翻译与方言学习应用，支持离线使用',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      useUIStore.getState().showNotification('链接已复制', 'success');
    }
  };

  return (
    <>
      <button
        onClick={handleInstall}
        className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors text-left border-b border-slate-100"
      >
        <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500">
          <Icon name="download" size={18} />
        </div>
        <div className="flex-1">
          <div className="text-sm text-slate-700">
            {isInstalled ? '已安装到主屏' : '安装到主屏'}
          </div>
          <div className="text-xs text-slate-400 mt-0.5">
            {isInstalled ? 'LingoPal 已作为独立应用安装' : '离线可用 · 启动更快 · 无广告'}
          </div>
        </div>
        {isInstalled ? (
          <span className="text-xs text-emerald-500 font-medium">已安装</span>
        ) : (
          <Icon name="chevron" size={16} className="text-slate-300" />
        )}
      </button>
      <button
        onClick={handleShare}
        className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors text-left"
      >
        <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center text-violet-500">
          <Icon name="share" size={18} />
        </div>
        <span className="flex-1 text-sm text-slate-700">分享给好友</span>
        <Icon name="chevron" size={16} className="text-slate-300" />
      </button>
    </>
  );
};

// ========== 离线存储信息 ==========
const OfflineStorageInfo = () => {
  const [storageInfo, setStorageInfo] = useState({ used: 0, total: 0, dbRecords: 0 });

  useEffect(() => {
    const fetchStorage = async () => {
      try {
        if (navigator.storage?.estimate) {
          const estimate = await navigator.storage.estimate();
          setStorageInfo(prev => ({
            ...prev,
            used: estimate.usage || 0,
            total: estimate.quota || 0,
          }));
        }
        if (window.db) {
          const tables = [
            'translationHistory', 'wordBooks', 'learningPlans',
            'dailyLogs', 'achievements', 'oralRecords', 'writtenRecords',
          ];
          let total = 0;
          for (const table of tables) {
            try { total += await db[table]?.count?.() || 0; } catch (e) {}
          }
          setStorageInfo(prev => ({ ...prev, dbRecords: total }));
        }
      } catch (e) {}
    };
    fetchStorage();
  }, []);

  const formatBytes = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const usagePercent = storageInfo.total > 0
    ? (storageInfo.used / storageInfo.total) * 100 : 0;

  return (
    <button
      onClick={() => {
        useUIStore.getState().showNotification(
          `已缓存 ${formatBytes(storageInfo.used)} 数据`, 'info', 2000
        );
      }}
      className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors text-left border-b border-slate-100"
    >
      <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
        <Icon name="database" size={18} />
      </div>
      <div className="flex-1">
        <div className="text-sm text-slate-700">离线数据</div>
        <div className="text-xs text-slate-400 mt-0.5">
          {storageInfo.dbRecords} 条学习记录 · {formatBytes(storageInfo.used)}
        </div>
        {storageInfo.total > 0 && (
          <div className="mt-1.5 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-400 rounded-full transition-all"
              style={{ width: `${Math.min(usagePercent, 100)}%` }}
            ></div>
          </div>
        )}
      </div>
      <Icon name="chevron" size={16} className="text-slate-300" />
    </button>
  );
};

Object.assign(window, { UserProfile, PWASettingsItem, OfflineStorageInfo });
