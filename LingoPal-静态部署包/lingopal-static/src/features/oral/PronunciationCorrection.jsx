// ========== Enhanced Pronunciation Correction Component ==========
// Text-based pronunciation analysis with word-level comparison
// and detailed phonetic feedback. Labels itself as "estimated analysis"

const PronunciationCorrection = () => {
  const [language, setLanguage] = useState('en');
  const [difficulty, setDifficulty] = useState('beginner');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const recognitionRef = useRef(null);

  const data = ORAL_PRACTICE_DATA[language] || ORAL_PRACTICE_DATA['en'];
  const items = data[difficulty] || [];
  const current = items[currentIndex] || null;

  const startListening = () => {
    if (!SpeechService.isRecognitionSupported()) {
      useUIStore.getState().showNotification('您的浏览器不支持语音识别', 'warning');
      return;
    }
    const recognition = SpeechService.createRecognition(language);
    if (!recognition) return;

    recognitionRef.current = recognition;
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    let finalTranscript = '';

    recognition.onresult = (event) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interim += transcript;
        }
      }
    };

    recognition.onerror = (e) => {
      setIsListening(false);
      if (e.error === 'no-speech') {
        useUIStore.getState().showNotification('未检测到语音，请重试', 'warning');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      if (finalTranscript && current) {
        const scoreResult = PronunciationService.calculateScore(current.text, finalTranscript, language);
        setResult(scoreResult);
        setShowDetails(true);

        // Save to DB
        const userId = useUserStore.getState().userId;
        if (userId && window.db) {
          db.pronunciationScores.add({
            userId,
            language,
            targetText: current.text,
            recognizedText: finalTranscript,
            score: scoreResult.total,
            timestamp: Date.now(),
          }).catch(() => {});
        }

        // Award XP based on score
        const xp = scoreResult.total >= 90 ? 15 : scoreResult.total >= 70 ? 10 : 5;
        useUserStore.getState().addXP(xp);

        // Record activity
        if (userId) recordActivity(userId, 'oral', { minutes: 1 });

        // Achievement check
        if (scoreResult.total >= 90) {
          const ach = ACHIEVEMENTS.find(a => a.id === 'first-perfect');
          if (ach) useUserStore.getState().unlockAchievement(ach.id, ach.title, ach.desc, ach.icon);
        }
      }
    };

    setResult(null);
    setShowDetails(false);
    recognition.start();
    setIsListening(true);
  };

  const stopListening = () => {
    if (recognitionRef.current) recognitionRef.current.stop();
    setIsListening(false);
  };

  const handlePlayTarget = async () => {
    if (!current) return;
    try {
      await SpeechService.speak(current.text, language, 0.8);
    } catch (e) {}
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setResult(null);
      setShowDetails(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setResult(null);
      setShowDetails(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      const userId = useUserStore.getState().userId;
      if (!userId || !window.db) return;
      try {
        const recs = await db.pronunciationScores
          .where({ userId, language })
          .reverse()
          .limit(10)
          .toArray();
        setHistory(recs);
      } catch (e) {}
    };
    load();
  }, [language]);

  if (!current) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-400">
        <Icon name="info" size={32} className="mb-2" />
        <p className="text-sm">该语言暂无练习内容</p>
        <Badge variant="default" className="mt-2">演示数据</Badge>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3 overflow-x-auto hide-scrollbar">
        {['en', 'ja', 'zh-CN'].map(lang => (
          <button
            key={lang}
            onClick={() => { setLanguage(lang); setCurrentIndex(0); setResult(null); setShowDetails(false); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              language === lang ? 'bg-brand-gradient text-white shadow-md' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {LANGUAGE_MAP[lang]?.name || lang}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-3">
        {DIFFICULTY_LEVELS.map(diff => (
          <button
            key={diff.key}
            onClick={() => { setDifficulty(diff.key); setCurrentIndex(0); setResult(null); setShowDetails(false); }}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              difficulty === diff.key ? diff.color : 'bg-slate-100 text-slate-500'
            }`}
          >
            {diff.label}
          </button>
        ))}
      </div>

      <Card className="flex-1 flex flex-col mb-4 relative">
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <Badge variant="default">演示数据</Badge>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-4">
          <div className="text-sm text-slate-400 mb-2">{currentIndex + 1} / {items.length}</div>

          <motion.div
            key={current.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-2">{current.text}</h2>
            <p className="text-sm text-brand-600 font-mono mb-1">{current.phonetic}</p>
            <p className="text-sm text-slate-500">{current.meaning}</p>
          </motion.div>

          <button
            onClick={handlePlayTarget}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-50 text-brand-600 hover:bg-brand-100 transition-colors btn-press mb-4"
          >
            <Icon name="volume" size={18} />
            <span className="text-sm">播放标准发音</span>
          </button>

          {/* Recording Button */}
          <button
            onClick={isListening ? stopListening : startListening}
            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg btn-press transition-all mb-3 ${
              isListening
                ? 'bg-red-500 text-white shadow-red-500/30 animate-pulse'
                : 'bg-brand-gradient text-white shadow-brand-500/30'
            }`}
          >
            <Icon name={isListening ? 'x' : 'mic'} size={32} />
          </button>

          {isListening && (
            <p className="text-sm text-red-500 font-medium animate-pulse">正在聆听，请朗读...</p>
          )}

          {/* Result */}
          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`w-full max-w-sm rounded-xl border p-4 mt-2 ${PronunciationService.getScoreBg(result.total)}`}
            >
              {/* Score Header */}
              <div className="text-center mb-3">
                <div className={`text-4xl font-bold ${PronunciationService.getScoreColor(result.total)}`}>{result.total}</div>
                <div className="text-xs text-slate-500 mt-1">纠音评分（基于语音识别文本估算）</div>
              </div>

              {/* Score Details */}
              <div className="space-y-2 text-xs mb-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">文本相似度</span>
                  <span className="font-medium">{result.details.levenshtein}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">字符准确度</span>
                  <span className="font-medium">{result.details.charAccuracy}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">单词准确度</span>
                  <span className="font-medium">{result.details.wordAccuracy}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">流畅度</span>
                  <span className="font-medium">{result.details.continuityScore}%</span>
                </div>
              </div>

              {/* Recognized Text */}
              <div className="bg-white/60 rounded-lg p-2 mb-3">
                <p className="text-xs text-slate-500">识别结果:</p>
                <p className="text-sm font-medium text-slate-700">{result.details.recognizedText || '（未识别到内容）'}</p>
              </div>

              {/* Word-level Analysis */}
              {result.wordAnalysis && result.wordAnalysis.length > 0 && (
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs text-slate-500">逐词分析</p>
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="text-xs text-brand-600 hover:text-brand-700"
                    >
                      {showDetails ? '收起' : '展开'}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {result.wordAnalysis.map((word, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${
                          word.status === 'correct' ? 'bg-emerald-100 text-emerald-700' :
                          word.status === 'close' ? 'bg-amber-100 text-amber-700' :
                          word.status === 'partial' ? 'bg-orange-100 text-orange-700' :
                          word.status === 'missing' ? 'bg-slate-100 text-slate-400 line-through' :
                          word.status === 'extra' ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-700'
                        }`}
                        title={PronunciationService.getWordStatusLabel(word.status)}
                      >
                        {word.targetWord || word.recognizedWord}
                        {word.status !== 'correct' && word.status !== 'missing' && word.status !== 'extra' && (
                          <span className="text-[10px] opacity-70">→{word.recognizedWord}</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Tips */}
              {result.tips && result.tips.length > 0 && (
                <div className="space-y-1.5">
                  {result.tips.map((tip, i) => (
                    <div
                      key={i}
                      className={`rounded-lg p-2 text-xs ${
                        tip.type === 'success' ? 'bg-emerald-100 text-emerald-700' :
                        tip.type === 'info' ? 'bg-blue-100 text-blue-700' :
                        tip.type === 'warning' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}
                    >
                      {tip.text}
                    </div>
                  ))}
                </div>
              )}

              {/* Boundary Note */}
              <div className="mt-3 pt-2 border-t border-slate-200/50">
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  本评分基于语音识别后的文本相似度进行估算，非专业声学分析。
                  如需更精准的发音评估，建议咨询专业语言教师。
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex items-center justify-between px-4 pb-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 transition-colors btn-press"
          >
            <Icon name="chevron-left" size={18} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= items.length - 1}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 transition-colors btn-press"
          >
            <Icon name="chevron" size={18} />
          </button>
        </div>
      </Card>

      {history.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">最近纠音记录</h3>
          <div className="space-y-2 max-h-32 overflow-y-auto hide-scrollbar">
            {history.slice(0, 5).map((rec, i) => (
              <div key={i} className="flex items-center justify-between bg-white rounded-xl px-3 py-2 text-xs border border-slate-100">
                <span className="text-slate-600 truncate max-w-[50%]">{rec.targetText}</span>
                <span className={`font-bold ${PronunciationService.getScoreColor(rec.score)}`}>{rec.score}分</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { PronunciationCorrection });
