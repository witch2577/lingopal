// ========== Imported Material Viewer ==========
// Learning loop for parsed video/music materials
// Video: 看→听→跟读→测验  |  Music: 听→跟读→填词→连读

const ImportedMaterialViewer = ({ material, onBack }) => {
  const [mode, setMode] = useState('watch'); // watch | listen | repeat | quiz | fill | liaison
  const [currentSegment, setCurrentSegment] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranslation, setShowTranslation] = useState(true);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizCorrect, setQuizCorrect] = useState(0);
  const [fillAnswers, setFillAnswers] = useState({});
  const [fillCorrect, setFillCorrect] = useState(0);
  const { isMobile } = useMobileDetect();

  const isVideo = material.source_type === 'video' || material.metadata?.source_type === 'video';
  const isMusic = material.source_type === 'music' || material.metadata?.source_type === 'music' || !isVideo;
  const segments = material.segments || [];
  const quiz = material.quiz || [];
  const fillBlanks = material.fillBlanks || [];
  const title = material.metadata?.title || '未命名';

  // Auto-generate fill blanks if none exist for music
  const effectiveFillBlanks = fillBlanks.length > 0 ? fillBlanks : (() => {
    if (!isMusic) return [];
    const allTexts = segments.map(s => s.original_text).join(' ');
    const allWords = allTexts.toLowerCase().match(/[a-z]+/g) || [];
    const uniqueWords = [...new Set(allWords)].filter(w => w.length >= 4);
    return uniqueWords.slice(0, Math.min(5, segments.length)).map((word, i) => {
      const lineIndex = Math.min(i, segments.length - 1);
      const lineText = segments[lineIndex]?.original_text || '';
      const lineWords = lineText.split(' ');
      const blankIndex = lineWords.findIndex(w => w.toLowerCase().replace(/[^a-z]/g, '') === word);
      return {
        lineIndex,
        blankIndex: blankIndex >= 0 ? blankIndex : Math.min(i, lineWords.length - 1),
        answer: word,
        hint: word.replace(/[aeiou]/g, '_'),
      };
    }).filter(f => f.answer && segments[f.lineIndex]);
  })();

  // Auto-generate liaisons for music (simple pattern: word ending in consonant + word starting with vowel)
  const liaisons = (() => {
    if (!isMusic) return [];
    const result = [];
    segments.forEach((seg, li) => {
      const text = seg.original_text;
      const words = text.split(' ');
      const patterns = [];
      for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i].toLowerCase().replace(/[^a-z]/g, '');
        const w2 = words[i + 1].toLowerCase().replace(/[^a-z]/g, '');
        if (w1 && w2) {
          const lastChar = w1[w1.length - 1];
          const firstChar = w2[0];
          if ('aeiou'.includes(firstChar) && !'aeiou'.includes(lastChar)) {
            patterns.push(`${words[i]} + ${words[i + 1]} → 「${words[i]} ${words[i + 1]}」连读`);
          }
        }
      }
      if (patterns.length > 0) {
        result.push({ lineIndex: li, note: patterns.join('；') });
      }
    });
    return result;
  })();

  const speakText = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.85;
    u.onend = () => setIsPlaying(false);
    setIsPlaying(true);
    window.speechSynthesis.speak(u);
  };

  const stopSpeaking = () => {
    window.speechSynthesis?.cancel();
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  // XP handling
  const awardXP = (sourceType) => {
    const userState = useUserStore.getState();
    let xpAmount = 0;
    let activityType = '';

    if (sourceType === 'watch') {
      xpAmount = XP_SOURCES.IMPORT_WATCH?.base || XP_SOURCES.DRAMA_READ.base;
      activityType = 'import_watch';
    } else if (sourceType === 'listen') {
      xpAmount = XP_SOURCES.IMPORT_LISTEN?.base || XP_SOURCES.SONG_LEARN.base;
      activityType = 'import_listen';
    } else if (sourceType === 'repeat') {
      xpAmount = XP_SOURCES.IMPORT_REPEAT?.base || XP_SOURCES.ORAL_PRACTICE.base;
      activityType = 'import_repeat';
    } else if (sourceType === 'quiz') {
      xpAmount = XP_SOURCES.IMPORT_QUIZ?.base || XP_SOURCES.DRAMA_QUIZ.base;
      activityType = 'import_quiz';
    } else if (sourceType === 'fill') {
      xpAmount = XP_SOURCES.IMPORT_FILL?.base || XP_SOURCES.LYRICS_FILL.base;
      activityType = 'import_fill';
    } else if (sourceType === 'liaison') {
      xpAmount = XP_SOURCES.IMPORT_LIAISON?.base || XP_SOURCES.LYRICS_LIAISON.base;
      activityType = 'import_liaison';
    }

    if (xpAmount > 0) {
      userState.addXP(xpAmount, activityType);
      useUIStore.getState().showNotification(`+${xpAmount} XP 完成学习`, 'success');
      recordActivity(userState.userId, activityType, { materialId: material.material_id }).catch(() => {});
    }
  };

  const handleFinishMode = () => {
    awardXP(mode);
    // Advance to next mode
    const videoModes = ['watch', 'listen', 'repeat', 'quiz'];
    const musicModes = ['listen', 'repeat', 'fill', 'liaison'];
    const modes = isVideo ? videoModes : musicModes;
    const idx = modes.indexOf(mode);
    if (idx < modes.length - 1) {
      setMode(modes[idx + 1]);
      setCurrentSegment(0);
    } else {
      // All done
      useUIStore.getState().showNotification('学习完成！', 'success');
      onBack();
    }
  };

  // Quiz handling
  const handleQuizAnswer = (qIdx, selectedIdx) => {
    if (quizAnswers[qIdx] !== undefined) return;
    const q = quiz[qIdx];
    const correctIdx = q.options?.findIndex(opt => opt === q.answer);
    const isCorrect = selectedIdx === correctIdx;
    setQuizAnswers(prev => ({ ...prev, [qIdx]: { selected: selectedIdx, isCorrect } }));
    if (isCorrect) setQuizCorrect(c => c + 1);
  };

  const handleQuizFinish = () => {
    setQuizFinished(true);
  };

  // Fill blank handling
  const handleFillAnswer = (blank, value) => {
    const key = `${blank.lineIndex}-${blank.blankIndex}`;
    if (fillAnswers[key] !== undefined) return;
    const isCorrect = value.toLowerCase().trim() === blank.answer.toLowerCase();
    setFillAnswers(prev => ({ ...prev, [key]: { value, isCorrect } }));
    if (isCorrect) setFillCorrect(c => c + 1);
  };

  // Mode labels
  const videoModeLabels = {
    watch: { label: '看', icon: 'eye', color: 'bg-brand-100 text-brand-700' },
    listen: { label: '听', icon: 'headphones', color: 'bg-cyan-100 text-cyan-700' },
    repeat: { label: '跟读', icon: 'mic', color: 'bg-emerald-100 text-emerald-700' },
    quiz: { label: '测验', icon: 'help-circle', color: 'bg-amber-100 text-amber-700' },
  };

  const musicModeLabels = {
    listen: { label: '听', icon: 'headphones', color: 'bg-cyan-100 text-cyan-700' },
    repeat: { label: '跟读', icon: 'mic', color: 'bg-emerald-100 text-emerald-700' },
    fill: { label: '填词', icon: 'edit', color: 'bg-amber-100 text-amber-700' },
    liaison: { label: '连读', icon: 'zap', color: 'bg-violet-100 text-violet-700' },
  };

  const modeLabels = isVideo ? videoModeLabels : musicModeLabels;
  const modes = isVideo ? ['watch', 'listen', 'repeat', 'quiz'] : ['listen', 'repeat', 'fill', 'liaison'];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <button onClick={onBack} className="p-2 rounded-xl hover:bg-slate-100 transition-colors">
          <Icon name="arrow-left" size={18} className="text-slate-500" />
        </button>
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-bold text-slate-800 truncate">{title}</h2>
          <p className="text-[10px] text-slate-400">{isVideo ? '视频字幕学习' : '歌词学习'} · {segments.length} 句</p>
        </div>
      </div>

      {/* Mode selector */}
      <div className="flex gap-1.5 mb-3 overflow-x-auto hide-scrollbar">
        {modes.map(key => {
          const info = modeLabels[key];
          const isActive = mode === key;
          const isDone = modes.indexOf(key) < modes.indexOf(mode);
          return (
            <button
              key={key}
              onClick={() => { setMode(key); setCurrentSegment(0); }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                isActive ? info.color + ' shadow-sm' :
                isDone ? 'bg-slate-100 text-slate-400 line-through' :
                'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              <Icon name={info.icon} size={12} />
              {info.label}
              {isDone && <Icon name="check" size={10} />}
            </button>
          );
        })}
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-4">
        {mode === 'watch' && (
          <WatchMode
            segments={segments}
            currentSegment={currentSegment}
            setCurrentSegment={setCurrentSegment}
            showTranslation={showTranslation}
            setShowTranslation={setShowTranslation}
            speakText={speakText}
            isPlaying={isPlaying}
            stopSpeaking={stopSpeaking}
          />
        )}

        {mode === 'listen' && (
          <ListenMode
            segments={segments}
            currentSegment={currentSegment}
            setCurrentSegment={setCurrentSegment}
            speakText={speakText}
            isPlaying={isPlaying}
            stopSpeaking={stopSpeaking}
          />
        )}

        {mode === 'repeat' && (
          <RepeatMode
            segments={segments}
            currentSegment={currentSegment}
            setCurrentSegment={setCurrentSegment}
            speakText={speakText}
            isPlaying={isPlaying}
          />
        )}

        {mode === 'quiz' && (
          <QuizMode
            quiz={quiz}
            answers={quizAnswers}
            onAnswer={handleQuizAnswer}
            finished={quizFinished}
            correctCount={quizCorrect}
            onFinish={handleQuizFinish}
          />
        )}

        {mode === 'fill' && (
          <FillMode
            segments={segments}
            fillBlanks={effectiveFillBlanks}
            answers={fillAnswers}
            onAnswer={handleFillAnswer}
          />
        )}

        {mode === 'liaison' && (
          <LiaisonMode
            segments={segments}
            liaisons={liaisons}
            speakText={speakText}
            isPlaying={isPlaying}
          />
        )}
      </div>

      {/* Bottom action */}
      <div className="pt-3 border-t border-slate-100">
        {mode === 'quiz' && !quizFinished && Object.keys(quizAnswers).length === quiz.length && quiz.length > 0 && (
          <button
            onClick={handleQuizFinish}
            className="w-full py-3 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
          >
            查看结果
          </button>
        )}
        {(mode !== 'quiz' || quizFinished) && (
          <button
            onClick={handleFinishMode}
            className="w-full py-3 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
          >
            {modes.indexOf(mode) < modes.length - 1 ? '完成并进入下一步' : '完成学习'}
          </button>
        )}
      </div>
    </div>
  );
};

// ===== Watch Mode (bilingual segment viewer) =====
const WatchMode = ({ segments, currentSegment, setCurrentSegment, showTranslation, setShowTranslation, speakText, isPlaying, stopSpeaking }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className={`px-2 py-1 rounded-lg text-[10px] font-medium ${showTranslation ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-500'}`}
        >
          {showTranslation ? '隐藏翻译' : '显示翻译'}
        </button>
        <span className="text-[10px] text-slate-400">{currentSegment + 1} / {segments.length}</span>
      </div>
      {segments.map((seg, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`p-3 rounded-xl transition-colors ${idx === currentSegment ? 'bg-brand-50 border border-brand-200' : 'bg-white border border-slate-100'}`}
          onClick={() => setCurrentSegment(idx)}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] text-slate-400 font-mono">{formatTime(seg.start_time)}</span>
            <button
              onClick={(e) => { e.stopPropagation(); if (isPlaying) stopSpeaking(); else speakText(seg.original_text); }}
              className="p-1 rounded hover:bg-slate-100"
            >
              <Icon name={isPlaying && idx === currentSegment ? 'pause' : 'volume'} size={12} className="text-slate-400" />
            </button>
          </div>
          <p className="text-sm text-slate-800 leading-relaxed">{seg.original_text}</p>
          {showTranslation && seg.translated_text && (
            <p className="text-xs text-slate-500 mt-1">{seg.translated_text}</p>
          )}
          {seg.explanation && (
            <p className="text-[10px] text-brand-600 mt-1">💡 {seg.explanation}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// ===== Listen Mode (sequential TTS playback) =====
const ListenMode = ({ segments, currentSegment, setCurrentSegment, speakText, isPlaying, stopSpeaking }) => {
  const playCurrent = () => {
    if (currentSegment < segments.length) {
      speakText(segments[currentSegment].original_text);
    }
  };

  const playNext = () => {
    if (currentSegment < segments.length - 1) {
      const next = currentSegment + 1;
      setCurrentSegment(next);
      setTimeout(() => speakText(segments[next].original_text), 300);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-full bg-brand-50 rounded-2xl p-6 mb-6 text-center">
        {currentSegment < segments.length ? (
          <>
            <p className="text-lg font-medium text-slate-800 mb-2">{segments[currentSegment].original_text}</p>
            {segments[currentSegment].translated_text && (
              <p className="text-sm text-slate-500 mb-4">{segments[currentSegment].translated_text}</p>
            )}
          </>
        ) : (
          <p className="text-lg font-medium text-slate-800">全部听完</p>
        )}
        <button
          onClick={() => { if (isPlaying) stopSpeaking(); else playCurrent(); }}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all mx-auto ${isPlaying ? 'bg-brand-400' : 'bg-brand-500 hover:bg-brand-600'}`}
        >
          <Icon name={isPlaying ? 'pause' : 'play'} size={28} className="text-white" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-slate-400">{Math.min(currentSegment + 1, segments.length)} / {segments.length}</span>
        <button
          onClick={playNext}
          disabled={currentSegment >= segments.length - 1}
          className="px-5 py-2 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors disabled:opacity-40"
        >
          下一句
        </button>
      </div>
    </div>
  );
};

// ===== Repeat Mode (listen + read aloud) =====
const RepeatMode = ({ segments, currentSegment, setCurrentSegment, speakText, isPlaying }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-full bg-emerald-50 rounded-2xl p-6 mb-6 text-center">
        {currentSegment < segments.length ? (
          <>
            <p className="text-lg font-medium text-slate-800 mb-4">{segments[currentSegment].original_text}</p>
            <button
              onClick={() => speakText(segments[currentSegment].original_text)}
              className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all mx-auto ${isPlaying ? 'bg-emerald-400' : 'bg-emerald-500 hover:bg-emerald-600'}`}
            >
              <Icon name={isPlaying ? 'volume' : 'play'} size={24} className="text-white" />
            </button>
            <p className="text-xs text-emerald-600 mt-3">先听一遍，然后大声跟读</p>
          </>
        ) : (
          <p className="text-lg font-medium text-slate-800">跟读完成</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-slate-400">{Math.min(currentSegment + 1, segments.length)} / {segments.length}</span>
        <button
          onClick={() => setCurrentSegment(i => Math.min(i + 1, segments.length))}
          disabled={currentSegment >= segments.length}
          className="px-5 py-2 rounded-xl bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors disabled:opacity-40"
        >
          下一句
        </button>
      </div>
    </div>
  );
};

// ===== Quiz Mode =====
const QuizMode = ({ quiz, answers, onAnswer, finished, correctCount, onFinish }) => {
  const [currentQ, setCurrentQ] = useState(0);

  if (quiz.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <EmptyState icon="📝" title="暂无测验" description="本次导入未生成测验题目" />
      </div>
    );
  }

  if (finished) {
    const accuracy = quiz.length > 0 ? Math.round((correctCount / quiz.length) * 100) : 0;
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center">
          <div className="text-5xl mb-4">{accuracy >= 80 ? '🏆' : accuracy >= 60 ? '👏' : '💪'}</div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">测验完成</h2>
          <p className="text-sm text-slate-500 mb-1">{correctCount} / {quiz.length} 正确</p>
          <p className="text-lg font-bold text-brand-600 mb-4">{accuracy}% 正确率</p>
        </motion.div>
      </div>
    );
  }

  const q = quiz[currentQ];
  const answered = answers[currentQ] !== undefined;

  return (
    <div className="flex flex-col h-full">
      <div className="h-1 bg-slate-100 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-brand-400 rounded-full" style={{ width: `${((currentQ + 1) / quiz.length) * 100}%` }} />
      </div>
      <p className="text-sm font-medium text-slate-800 mb-4">{q.question}</p>
      <div className="flex flex-col gap-2">
        {q.options?.map((opt, idx) => {
          const ans = answers[currentQ];
          const isCorrect = opt === q.answer;
          const isSelected = ans?.selected === idx;
          const showResult = answered;
          return (
            <button
              key={idx}
              onClick={() => onAnswer(currentQ, idx)}
              disabled={answered}
              className={`p-3.5 rounded-xl text-left text-sm font-medium transition-all border ${
                showResult && isCorrect
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                  : showResult && isSelected && !isCorrect
                  ? 'bg-red-50 border-red-300 text-red-700'
                  : showResult
                  ? 'bg-slate-50 border-slate-100 text-slate-400'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-brand-300 hover:bg-brand-50/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  showResult && isCorrect ? 'bg-emerald-500 text-white' :
                  showResult && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                  'bg-slate-100 text-slate-500'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </div>
            </button>
          );
        })}
      </div>
      {answered && currentQ < quiz.length - 1 && (
        <button
          onClick={() => setCurrentQ(q => q + 1)}
          className="mt-4 w-full py-3 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
        >
          下一题
        </button>
      )}
      {answered && currentQ >= quiz.length - 1 && (
        <button
          onClick={onFinish}
          className="mt-4 w-full py-3 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
        >
          查看结果
        </button>
      )}
    </div>
  );
};

// ===== Fill Mode =====
const FillMode = ({ segments, fillBlanks, answers, onAnswer }) => {
  const blankMap = {};
  fillBlanks.forEach(b => {
    const key = `${b.lineIndex}-${b.blankIndex}`;
    blankMap[key] = b;
  });

  return (
    <div className="space-y-3">
      {segments.map((seg, li) => {
        const words = seg.original_text.split(' ');
        const blanksInLine = fillBlanks.filter(b => b.lineIndex === li);
        if (blanksInLine.length === 0) {
          return (
            <div key={li} className="p-3 rounded-xl bg-slate-50">
              <p className="text-sm text-slate-600">{seg.original_text}</p>
            </div>
          );
        }
        return (
          <div key={li} className="p-3 rounded-xl bg-white border border-slate-100">
            <div className="flex flex-wrap gap-1 items-center">
              {words.map((word, wi) => {
                const blank = blanksInLine.find(b => words[b.blankIndex] === word);
                const key = `${li}-${wi}`;
                const ans = answers[key];
                if (blank) {
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

// ===== Liaison Mode =====
const LiaisonMode = ({ segments, liaisons, speakText, isPlaying }) => {
  const liaisonMap = {};
  liaisons.forEach(l => { liaisonMap[l.lineIndex] = l; });

  return (
    <div className="space-y-3">
      {segments.map((seg, li) => {
        const liaison = liaisonMap[li];
        return (
          <div key={li} className="p-3 rounded-xl bg-white border border-slate-100">
            <div className="flex items-center justify-between mb-1">
              <button onClick={() => speakText(seg.original_text)} className="p-1 rounded hover:bg-slate-100">
                <Icon name="volume" size={14} className="text-slate-400" />
              </button>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed">{seg.original_text}</p>
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

// Helper: format seconds to MM:SS
function formatTime(seconds) {
  if (typeof seconds !== 'number' || isNaN(seconds)) return '00:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

Object.assign(window, { ImportedMaterialViewer });
