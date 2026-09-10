// ========== Drama Reader ==========
// Bilingual script reading with role-based coloring

const DramaReader = ({ script, scene, onBack }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranslation, setShowTranslation] = useState(true);
  const { isMobile } = useMobileDetect();

  const lines = scene.lines || [];

  const speakLine = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.onend = () => setIsPlaying(false);
    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis?.cancel();
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  const handleComplete = () => {
    const userState = useUserStore.getState();
    userState.addXP(XP_SOURCES.DRAMA_READ.base, 'drama_read');
    userState.unlockAchievement('drama-beginner', '初阶影迷', '完成首次剧本阅读', '🎭');
    useUIStore.getState().showNotification(`+${XP_SOURCES.DRAMA_READ.base} XP 剧本阅读完成`, 'success');
    recordActivity(userState.userId, 'drama_read', { scriptId: script.id, sceneId: scene.id }).catch(() => {});
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <button onClick={onBack} className="p-2 rounded-xl hover:bg-slate-100 transition-colors">
          <Icon name="arrow-left" size={18} className="text-slate-500" />
        </button>
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-bold text-slate-800 truncate">{script.title}</h2>
          <p className="text-[10px] text-slate-400">{scene.title}</p>
        </div>
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className={`px-2 py-1 rounded-lg text-[10px] font-medium ${showTranslation ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-500'}`}
        >
          双语
        </button>
      </div>

      {/* Script content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar space-y-3 pb-4">
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`flex gap-3 ${idx === currentLine ? 'bg-brand-50/50 -mx-2 px-2 py-1 rounded-xl' : ''}`}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ backgroundColor: line.color || '#6366F1' }}>
              {line.role[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-semibold" style={{ color: line.color || '#6366F1' }}>{line.role}</span>
                <button
                  onClick={() => speakLine(line.text)}
                  className="p-1 rounded hover:bg-slate-100 transition-colors"
                >
                  <Icon name="volume" size={12} className="text-slate-400" />
                </button>
              </div>
              <p className="text-sm text-slate-800 leading-relaxed">{line.text}</p>
              {showTranslation && line.textCn && (
                <p className="text-xs text-slate-400 mt-0.5">{line.textCn}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom controls */}
      <div className="pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => {
              if (isPlaying) { stopSpeaking(); }
              else if (currentLine < lines.length) { speakLine(lines[currentLine].text); setCurrentLine(currentLine + 1); }
              else { setCurrentLine(0); speakLine(lines[0].text); setCurrentLine(1); }
            }}
            className="flex-1 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors flex items-center justify-center gap-2"
          >
            <Icon name={isPlaying ? 'pause' : 'play'} size={16} />
            {isPlaying ? '暂停朗读' : currentLine >= lines.length ? '重新朗读' : '朗读'}
          </button>
          <button
            onClick={handleComplete}
            className="px-4 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { DramaReader });
