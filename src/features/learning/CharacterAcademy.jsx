// ========== Character Academy (文字学堂) ==========
// Card-based alphabet/character learning for zero-foundation learners
// Supports: Japanese (Hiragana + Katakana), Korean (Hangul), Russian (Cyrillic), Arabic
// Features: flip cards, TTS, prev/next/random navigation, progress tracking

const { useState, useEffect, useCallback, useRef, useMemo } = React;

const CharacterAcademy = ({ onBack }) => {
  // ---- All Hooks at top, unconditionally ----
  const [selectedLang, setSelectedLang] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState(new Set());
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showLangPicker, setShowLangPicker] = useState(true);
  const [direction, setDirection] = useState(0); // -1 prev, 1 next, for animation
  const cardRef = useRef(null);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lingopal_alphabet_progress');
      if (saved) {
        const data = JSON.parse(saved);
        if (data.mastered && Array.isArray(data.mastered)) {
          setMasteredIds(new Set(data.mastered));
        }
      }
    } catch (e) {
      console.error('[CharacterAcademy] 加载进度失败:', e);
    }
  }, []);

  // Persist progress whenever masteredIds changes
  useEffect(() => {
    try {
      const data = { mastered: Array.from(masteredIds), updatedAt: Date.now() };
      localStorage.setItem('lingopal_alphabet_progress', JSON.stringify(data));
    } catch (e) {
      console.error('[CharacterAcademy] 保存进度失败:', e);
    }
  }, [masteredIds]);

  // Helper: get current language data
  const langData = useMemo(() => {
    if (!selectedLang) return null;
    return getFlattenedChars(selectedLang);
  }, [selectedLang]);

  // Helper: get current character
  const currentChar = useMemo(() => {
    if (!langData || langData.length === 0) return null;
    return langData[Math.max(0, Math.min(currentIndex, langData.length - 1))];
  }, [langData, currentIndex]);

  // Helper: compute total mastered per language
  const getLangProgress = useCallback((langCode) => {
    const chars = getFlattenedChars(langCode);
    const total = chars.length;
    const mastered = chars.filter((c) => masteredIds.has(c.globalIndex + '_' + langCode)).length;
    return { total, mastered, percent: total > 0 ? Math.round((mastered / total) * 100) : 0 };
  }, [masteredIds]);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    if (!langData || langData.length === 0) return;
    setDirection(-1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + langData.length) % langData.length);
  }, [langData]);

  const handleNext = useCallback(() => {
    if (!langData || langData.length === 0) return;
    setDirection(1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % langData.length);
  }, [langData]);

  const handleRandom = useCallback(() => {
    if (!langData || langData.length === 0) return;
    setDirection(0);
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * langData.length));
  }, [langData]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleToggleMastered = useCallback(() => {
    if (!currentChar) return;
    const key = currentChar.globalIndex + '_' + currentChar.langCode;
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
        // Award small XP when mastering a new character (max once per char)
        if (typeof useUserStore !== 'undefined') {
          try {
            useUserStore.getState().addXP(2, 'alphabet_mastered');
          } catch (e) { /* noop */ }
        }
      }
      return next;
    });
  }, [currentChar]);

  // TTS handler
  const handleSpeak = useCallback(async () => {
    if (!currentChar || !window.SpeechService) return;
    const text = currentChar.char.replace(/[АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя]/g, '').trim() || currentChar.char;
    const langCode = currentChar.langCode;
    const speechLang = window.SpeechService.getSpeechLang(langCode);

    setIsSpeaking(true);
    try {
      await window.SpeechService.speak(text, langCode, 0.85);
    } catch (e) {
      console.warn('[CharacterAcademy] TTS failed:', e);
    } finally {
      setIsSpeaking(false);
    }
  }, [currentChar]);

  const handleSelectLanguage = useCallback((langCode) => {
    setSelectedLang(langCode);
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowLangPicker(false);
  }, []);

  const handleBackToPicker = useCallback(() => {
    setShowLangPicker(true);
    setSelectedLang(null);
    setIsFlipped(false);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const onKeyDown = (e) => {
      if (showLangPicker) return;
      if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
      else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [showLangPicker, handlePrev, handleNext, handleFlip]);

  // ---- Render: Language Picker ----
  if (showLangPicker) {
    return (
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors touch-target"
            >
              <Icon name="chevron-left" size={20} />
            </button>
          )}
          <div>
            <h2 className="text-lg font-bold text-slate-800">文字学堂</h2>
            <p className="text-xs text-slate-400">零基础字符入门，先认字再对话</p>
          </div>
        </div>

        {/* Language Cards */}
        <div className="flex-1 overflow-y-auto hide-scrollbar space-y-3">
          {ALPHABET_LANGUAGES.map((langCode) => {
            const info = ALPHABET_DATA[langCode];
            const { total, mastered, percent } = getLangProgress(langCode);
            return (
              <button
                key={langCode}
                onClick={() => handleSelectLanguage(langCode)}
                className="w-full text-left p-4 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-200 transition-all btn-press"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{info.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-800">{info.name}</h3>
                      <span className="text-xs text-slate-400">{info.nameEn}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {info.groups.map((g) => g.name).join(' + ')} · 共 {total} 个字符
                    </p>
                    {/* Progress bar */}
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-500 rounded-full transition-all"
                          style={{ width: percent + '%' }}
                        />
                      </div>
                      <span className="text-xs text-slate-400">{mastered}/{total}</span>
                    </div>
                  </div>
                  <Icon name="chevron" size={18} className="text-slate-300" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ---- Render: Character Learning ----
  if (!currentChar) return null;

  const isMastered = masteredIds.has(currentChar.globalIndex + '_' + currentChar.langCode);
  const progress = getLangProgress(selectedLang);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={handleBackToPicker}
          className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors touch-target"
        >
          <Icon name="chevron-left" size={20} />
        </button>
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-bold text-slate-800 truncate">
            {currentChar.langFlag} {currentChar.langName} · {currentChar.groupName}
          </h2>
          <p className="text-xs text-slate-400">
            {currentIndex + 1} / {langData.length} · 已掌握 {progress.mastered}/{progress.total}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-3 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-500 rounded-full transition-all"
          style={{ width: ((currentIndex + 1) / langData.length * 100) + '%' }}
        />
      </div>

      {/* Flip Card */}
      <div className="flex-1 flex flex-col justify-center items-center min-h-0 py-2">
        <div
          className="relative w-full max-w-sm mx-auto"
          style={{ perspective: '800px' }}
        >
          <div
            onClick={handleFlip}
            className="relative w-full cursor-pointer select-none"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front */}
            <div
              className="w-full rounded-2xl bg-white shadow-lg border border-slate-100 flex flex-col items-center justify-center py-10 px-6"
              style={{
                backfaceVisibility: 'hidden',
                minHeight: '280px',
              }}
            >
              <span className="text-7xl font-bold text-slate-800 mb-2">
                {currentChar.char}
              </span>
              <p className="text-sm text-slate-400 mt-2">点击卡片查看发音</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-500">
                  {currentChar.type}
                </span>
              </div>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 w-full rounded-2xl bg-brand-50 shadow-lg border border-brand-100 flex flex-col items-center justify-center py-10 px-6"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                minHeight: '280px',
              }}
            >
              <span className="text-4xl font-bold text-brand-700 mb-1">
                {currentChar.romanization}
              </span>
              <span className="text-3xl text-slate-700 mb-3">
                {currentChar.char}
              </span>
              <div className="text-center space-y-1">
                <p className="text-sm text-slate-600">
                  <span className="text-xs text-slate-400">类型：</span>
                  {currentChar.type}
                </p>
                <p className="text-sm text-slate-600">
                  <span className="text-xs text-slate-400">示例：</span>
                  {currentChar.example}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-3 pb-2">
        {/* Action buttons row */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleSpeak}
            disabled={isSpeaking}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all btn-press touch-target ${
              isSpeaking
                ? 'bg-brand-100 text-brand-400'
                : 'bg-brand-50 text-brand-600 hover:bg-brand-100'
            }`}
            title="朗读"
          >
            <Icon name={isSpeaking ? 'volume-off' : 'volume'} size={18} />
            {isSpeaking ? '朗读中' : '朗读'}
          </button>

          <button
            onClick={handleToggleMastered}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all btn-press touch-target ${
              isMastered
                ? 'bg-mint-500 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            title={isMastered ? '取消掌握' : '标记已掌握'}
          >
            <Icon name="check" size={18} />
            {isMastered ? '已掌握' : '标记掌握'}
          </button>

          <button
            onClick={handleRandom}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all btn-press touch-target"
            title="随机"
          >
            <Icon name="refresh" size={18} />
            随机
          </button>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all btn-press touch-target"
          >
            <Icon name="chevron-left" size={18} />
            上一张
          </button>
          <button
            onClick={handleNext}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all btn-press touch-target"
          >
            下一张
            <Icon name="chevron" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { CharacterAcademy });
