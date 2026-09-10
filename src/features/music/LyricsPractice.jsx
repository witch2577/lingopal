// ========== Lyrics Practice ==========
// Three modes: Fill-blank / Repeat / Liaison

const LyricsPractice = ({ song, onBack }) => {
  const [mode, setMode] = useState('fill'); // fill | repeat | liaison
  const [currentLine, setCurrentLine] = useState(0);
  const [fillAnswers, setFillAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { isMobile } = useMobileDetect();

  const lyrics = song.lyrics || [];
  const fillBlanks = song.fillBlanks || [];
  const liaisons = song.liaisons || [];

  const speakLine = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.8;
    u.onend = () => setIsPlaying(false);
    setIsPlaying(true);
    window.speechSynthesis.speak(u);
  };

  useEffect(() => { return () => window.speechSynthesis?.cancel(); }, []);

  const handleFillSubmit = (blank, value) => {
    const key = `${blank.lineIndex}-${blank.blankIndex}`;
    const isCorrect = value.toLowerCase().trim() === blank.answer.toLowerCase();
    setFillAnswers(prev => ({ ...prev, [key]: { value, isCorrect } }));
    if (isCorrect) setCorrectCount(c => c + 1);
  };

  const handleFinish = () => {
    const userState = useUserStore.getState();
    if (mode === 'fill') {
      userState.addXP(XP_SOURCES.LYRICS_FILL.base, 'lyrics_fill');
      const fillCount = (userState.profile?.lyricsFillCount || 0) + 1;
      userState.updateProfile({ lyricsFillCount: fillCount });
      if (fillCount >= 3) {
        userState.unlockAchievement('music-lyricist', '填词高手', '完成 3 次填词挑战', '🎤');
      }
      useUIStore.getState().showNotification(`+${XP_SOURCES.LYRICS_FILL.base} XP 填词完成`, 'success');
    } else if (mode === 'liaison') {
      userState.addXP(XP_SOURCES.LYRICS_LIAISON.base, 'lyrics_liaison');
      const liaisonCount = (userState.profile?.lyricsLiaisonCount || 0) + 1;
      userState.updateProfile({ lyricsLiaisonCount: liaisonCount });
      if (liaisonCount >= 3) {
        userState.unlockAchievement('music-liaison', '连读大师', '完成 3 次连读训练', '🎧');
      }
      useUIStore.getState().showNotification(`+${XP_SOURCES.LYRICS_LIAISON.base} XP 连读训练完成`, 'success');
    } else {
      userState.addXP(XP_SOURCES.SONG_LEARN.base, 'song_learn');
      useUIStore.getState().showNotification(`+${XP_SOURCES.SONG_LEARN.base} XP 歌曲学习完成`, 'success');
    }
    userState.unlockAchievement('music-beginner', '初级歌迷', '完成首次歌曲学习', '🎵');
    recordActivity(userState.userId, 'song_practice', { songId: song.id, mode }).catch(() => {});
    onBack();
  };

  const modeLabels = {
    fill: { label: '填词挑战', color: 'bg-amber-100 text-amber-700', icon: 'edit' },
    repeat: { label: '跟读练习', color: 'bg-brand-100 text-brand-700', icon: 'mic' },
    liaison: { label: '连读训练', color: 'bg-emerald-100 text-emerald-700', icon: 'zap' },
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <button onClick={onBack} className="p-2 rounded-xl hover:bg-slate-100">
          <Icon name="arrow-left" size={18} className="text-slate-500" />
        </button>
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-bold text-slate-800 truncate">{song.title}</h2>
        </div>
      </div>

      {/* Mode selector */}
      <div className="flex gap-2 mb-3">
        {Object.entries(modeLabels).map(([key, info]) => (
          <button
            key={key}
            onClick={() => { setMode(key); setCurrentLine(0); setShowResult(false); }}
            className={`flex-1 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1 transition-all ${
              mode === key ? info.color + ' shadow-sm' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
            }`}
          >
            <Icon name={info.icon} size={12} />
            {info.label}
          </button>
        ))}
      </div>

      {/* Lyrics display */}
      <div className="flex-1 overflow-y-auto hide-scrollbar space-y-3 pb-4">
        {mode === 'fill' && (
          <FillBlankMode lyrics={lyrics} fillBlanks={fillBlanks} answers={fillAnswers} onAnswer={handleFillSubmit} />
        )}
        {mode === 'repeat' && (
          <RepeatMode lyrics={lyrics} currentLine={currentLine} onNext={() => setCurrentLine(i => Math.min(i + 1, lyrics.length - 1))} onSpeak={speakLine} isPlaying={isPlaying} />
        )}
        {mode === 'liaison' && (
          <LiaisonMode lyrics={lyrics} liaisons={liaisons} onSpeak={speakLine} isPlaying={isPlaying} />
        )}
      </div>

      {/* Bottom action */}
      <div className="pt-3 border-t border-slate-100">
        <button
          onClick={handleFinish}
          className="w-full py-3 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
        >
          完成学习
        </button>
      </div>
    </div>
  );
};

// Fill-in-the-blank mode
const FillBlankMode = ({ lyrics, fillBlanks, answers, onAnswer }) => {
  const blankMap = {};
  fillBlanks.forEach(b => {
    const key = `${b.lineIndex}-${b.blankIndex}`;
    blankMap[key] = b;
  });

  return (
    <div className="space-y-3">
      {lyrics.map((line, li) => {
        const words = line.text.split(' ');
        const blanksInLine = fillBlanks.filter(b => b.lineIndex === li);
        if (blanksInLine.length === 0) {
          return (
            <div key={li} className="p-3 rounded-xl bg-slate-50">
              <p className="text-sm text-slate-600">{line.text}</p>
            </div>
          );
        }
        return (
          <div key={li} className="p-3 rounded-xl bg-white border border-slate-100">
            <div className="flex flex-wrap gap-1 items-center">
              {words.map((word, wi) => {
                const blank = blanksInLine.find(b => line.text.split(' ').slice(0, b.blankIndex + 1).join(' ').includes(word) && line.text.split(' ')[b.blankIndex] === word);
                const key = `${li}-${wi}`;
                const ans = answers[key];
                if (blank && line.text.split(' ')[blank.blankIndex] === word) {
                  return (
                    <span key={wi} className="inline-flex items-center">
                      {ans ? (
                        <span className={`px-2 py-0.5 rounded-lg text-sm font-medium ${ans.isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                          {ans.value}
                        </span>
                      ) : (
                        <input
                          type="text"
                          placeholder={blank.hint}
                          onBlur={(e) => onAnswer(blank, e.target.value)}
                          className="w-20 px-2 py-0.5 rounded-lg border border-slate-200 text-sm text-center focus:border-brand-400 focus:outline-none"
                        />
                      )}
                    </span>
                  );
                }
                return <span key={wi} className="text-sm text-slate-700">{word}</span>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Repeat mode
const RepeatMode = ({ lyrics, currentLine, onNext, onSpeak, isPlaying }) => {
  const line = lyrics[currentLine];
  if (!line) return null;

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-full bg-brand-50 rounded-2xl p-6 mb-6 text-center">
        <p className="text-lg font-medium text-slate-800 mb-4">{line.text}</p>
        <button
          onClick={() => onSpeak(line.text)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${isPlaying ? 'bg-brand-400' : 'bg-brand-500 hover:bg-brand-600'}`}
        >
          <Icon name={isPlaying ? 'volume' : 'play'} size={24} className="text-white" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-slate-400">{currentLine + 1} / {lyrics.length}</span>
        <button
          onClick={onNext}
          disabled={currentLine >= lyrics.length - 1}
          className="px-5 py-2 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors disabled:opacity-40"
        >
          下一句
        </button>
      </div>
    </div>
  );
};

// Liaison mode
const LiaisonMode = ({ lyrics, liaisons, onSpeak, isPlaying }) => {
  const liaisonMap = {};
  liaisons.forEach(l => { liaisonMap[l.lineIndex] = l; });

  return (
    <div className="space-y-3">
      {lyrics.map((line, li) => {
        const liaison = liaisonMap[li];
        return (
          <div key={li} className="p-3 rounded-xl bg-white border border-slate-100">
            <div className="flex items-center justify-between mb-1">
              <button onClick={() => onSpeak(line.text)} className="p-1 rounded hover:bg-slate-100">
                <Icon name="volume" size={14} className="text-slate-400" />
              </button>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed">
              {line.text}
            </p>
            {liaison && (
              <div className="mt-2 p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                <p className="text-xs text-emerald-700 font-medium">💡 连读提示</p>
                <p className="text-xs text-emerald-600 mt-0.5">{liaison.note}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

Object.assign(window, { LyricsPractice });
