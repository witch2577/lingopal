// ========== Oral Training Component ==========
// Structured practice with recording, comparison, and IndexedDB storage

const OralTraining = () => {
  const [language, setLanguage] = useState('en');
  const [difficulty, setDifficulty] = useState('beginner');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [isPlayingStd, setIsPlayingStd] = useState(false);
  const [isPlayingRec, setIsPlayingRec] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [records, setRecords] = useState([]);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const audioRef = useRef(null);

  const data = ORAL_PRACTICE_DATA[language] || ORAL_PRACTICE_DATA['en'];
  const items = data[difficulty] || [];
  const current = items[currentIndex] || null;

  // Load records from DB
  useEffect(() => {
    const load = async () => {
      const userId = useUserStore.getState().userId;
      if (!userId || !window.db) return;
      try {
        const recs = await db.oralRecords
          .where({ userId, type: 'training' })
          .reverse()
          .limit(20)
          .toArray();
        setRecords(recs);
      } catch (e) { console.error('[OralTraining] 加载练习记录失败:', e); }
    };
    load();
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setRecordedBlob(blob);
        stream.getTracks().forEach(t => t.stop());
      };

      recorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      setRecordedBlob(null);

      timerRef.current = setInterval(() => {
        setRecordingTime(t => {
          if (t >= 29) {
            stopRecording();
            return t;
          }
          return t + 1;
        });
      }, 1000);
    } catch (e) {
      console.error('[OralTraining.startRecording] 无法访问麦克风:', e);
      useUIStore.getState().showNotification('无法访问麦克风，请检查权限设置', 'error');
    }
  };

  const stopRecording = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  const playStandard = async () => {
    if (!current || isPlayingStd) return;
    setIsPlayingStd(true);
    try {
      await SpeechService.speak(current.text, language, 0.85);
    } catch (e) {
      console.error('[OralTraining.playStandard] 播放标准发音失败:', e);
    }
    setIsPlayingStd(false);
  };

  const playRecorded = () => {
    if (!recordedBlob || isPlayingRec) return;
    setIsPlayingRec(true);
    const url = URL.createObjectURL(recordedBlob);
    const audio = new Audio(url);
    audioRef.current = audio;
    audio.onended = () => {
      setIsPlayingRec(false);
      URL.revokeObjectURL(url);
    };
    audio.onerror = () => {
      setIsPlayingRec(false);
      URL.revokeObjectURL(url);
    };
    audio.play();
  };

  const saveRecord = async () => {
    const userId = useUserStore.getState().userId;
    if (!userId || !recordedBlob || !window.db) return;
    try {
      await db.oralRecords.add({
        userId,
        type: 'training',
        language,
        difficulty,
        text: current?.text,
        timestamp: Date.now(),
        duration: recordingTime,
        blob: recordedBlob,
      });
      useUIStore.getState().showNotification('练习记录已保存', 'success');
      // Refresh records list
      const recs = await db.oralRecords
        .where({ userId, type: 'training' })
        .reverse()
        .limit(20)
        .toArray();
      setRecords(recs);
      // add XP
      useUserStore.getState().addXP(5);

      // Record activity
      const userId = useUserStore.getState().userId;
      if (userId) {
        recordActivity(userId, 'oral', { minutes: Math.ceil(recordingTime / 60) || 1 });
      }
    } catch (e) {
      console.error('[OralTraining.saveRecord] 保存录音记录失败:', e);
      useUIStore.getState().showNotification('保存失败', 'error');
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setRecordedBlob(null);
      setRecordingTime(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setRecordedBlob(null);
      setRecordingTime(0);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

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
            onClick={() => { setLanguage(lang); setCurrentIndex(0); setRecordedBlob(null); }}
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
            onClick={() => { setDifficulty(diff.key); setCurrentIndex(0); setRecordedBlob(null); }}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              difficulty === diff.key ? diff.color : 'bg-slate-100 text-slate-500'
            }`}
          >
            {diff.label}
          </button>
        ))}
      </div>

      <Card className="flex-1 flex flex-col mb-4 relative">
        <div className="absolute top-3 right-3">
          <Badge variant="default">演示数据</Badge>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-4">
          <div className="text-sm text-slate-400 mb-2">{currentIndex + 1} / {items.length}</div>
          <h2 className="text-xl font-bold text-slate-800 mb-1">{current.text}</h2>
          <p className="text-sm text-brand-600 font-mono mb-1">{current.phonetic}</p>
          <p className="text-sm text-slate-500">{current.meaning}</p>
        </div>

        {/* Recording Controls */}
        <div className="flex flex-col items-center gap-3 pb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={playStandard}
              disabled={isPlayingStd}
              className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl bg-brand-50 text-brand-600 hover:bg-brand-100 transition-colors btn-press disabled:opacity-60"
            >
              <Icon name={isPlayingStd ? 'volume' : 'play'} size={20} />
              <span className="text-xs">标准发音</span>
            </button>

            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg btn-press transition-all ${
                isRecording
                  ? 'bg-red-500 text-white shadow-red-500/30 animate-pulse'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Icon name={isRecording ? 'x' : 'mic'} size={28} />
            </button>

            <button
              onClick={playRecorded}
              disabled={!recordedBlob || isPlayingRec}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors btn-press disabled:opacity-40 ${
                recordedBlob ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' : 'bg-slate-50 text-slate-400'
              }`}
            >
              <Icon name={isPlayingRec ? 'volume' : 'play'} size={20} />
              <span className="text-xs">我的录音</span>
            </button>
          </div>

          {isRecording && (
            <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              录音中 {recordingTime}s / 30s
            </div>
          )}

          {recordedBlob && !isRecording && (
            <div className="flex items-center gap-2">
              <Button size="sm" variant="secondary" onClick={saveRecord} icon="bookmark">
                保存记录
              </Button>
              <span className="text-xs text-slate-400">时长: {recordingTime}s</span>
            </div>
          )}
        </div>

        {/* Navigation */}
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

      {records.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">最近练习记录</h3>
          <div className="space-y-2 max-h-32 overflow-y-auto hide-scrollbar">
            {records.slice(0, 5).map((rec, i) => (
              <div key={i} className="flex items-center justify-between bg-white rounded-xl px-3 py-2 text-xs border border-slate-100">
                <span className="text-slate-600 truncate max-w-[60%]">{rec.text}</span>
                <span className="text-slate-400">{new Date(rec.timestamp).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { OralTraining });
