// ========== Voice Translator Component ==========

const VoiceTranslator = () => {
  const {
    sourceLang, targetLang,
    setSourceLang, setTargetLang,
    swapLanguages, addHistory,
  } = useTranslationStore();

  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [interimText, setInterimText] = useState('');
  const [recordingTime, setRecordingTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [error, setError] = useState(null);

  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const supported = SpeechService.isRecognitionSupported();
  const sourceSupported = SpeechService.supportsSpeech(sourceLang);
  const targetSupported = SpeechService.supportsSpeech(targetLang);

  const isDialectSource = DIALECT_CODES.includes(sourceLang);
  const isDialectTarget = DIALECT_CODES.includes(targetLang);
  const isSourceBeta = LANGUAGE_MAP[sourceLang]?.type === 'beta';
  const isTargetBeta = LANGUAGE_MAP[targetLang]?.type === 'beta';
  const showBetaBadge = isDialectSource || isDialectTarget || isSourceBeta || isTargetBeta;

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (e) {}
      }
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startRecording = () => {
    if (!supported || !sourceSupported || isDialectSource) {
      setError(isDialectSource ? '方言暂不支持语音输入，请使用文字翻译' : '您的浏览器不支持语音识别');
      return;
    }

    const recognition = SpeechService.createRecognition(sourceLang);
    if (!recognition) {
      setError('无法启动语音识别');
      return;
    }

    recognitionRef.current = recognition;
    setSourceText('');
    setTranslatedText('');
    setInterimText('');
    setIsRecording(true);
    setRecordingTime(0);
    setError(null);

    recognition.onresult = (event) => {
      let interim = '';
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += transcript;
        } else {
          interim += transcript;
        }
      }
      if (final) {
        setSourceText(prev => prev + final);
      }
      setInterimText(interim);
    };

    recognition.onerror = (event) => {
      console.warn('Speech recognition error:', event.error);
      if (event.error === 'no-speech') {
        setError('没有检测到语音，请再试一次');
      } else if (event.error === 'not-allowed') {
        setError('请允许麦克风权限');
      } else if (event.error !== 'aborted') {
        setError(`语音识别错误: ${event.error}`);
      }
      setIsRecording(false);
      if (timerRef.current) clearInterval(timerRef.current);
    };

    recognition.onend = () => {
      setIsRecording(false);
      if (timerRef.current) clearInterval(timerRef.current);
      // Auto-translate after recording ends
      const finalText = sourceText || interimText;
      if (finalText && finalText.trim()) {
        doTranslate(finalText.trim());
      }
    };

    try {
      recognition.start();
      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(t => {
          if (t >= 60) {
            // auto-stop at 60s
            stopRecording();
            return 60;
          }
          return t + 1;
        });
      }, 1000);
    } catch (e) {
      setIsRecording(false);
      setError('启动录音失败: ' + e.message);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (e) {}
    }
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRecording(false);
  };

  const handleMicClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const doTranslate = async (text) => {
    if (!text) return;
    setIsProcessing(true);
    try {
      const result = await TranslationService.translate(text, sourceLang, targetLang);
      setTranslatedText(result.translatedText);

      addHistory({
        sourceText: text,
        translatedText: result.translatedText,
        sourceLang,
        targetLang,
        mode: 'voice',
      });

      // Record translation activity
      const userId = useUserStore.getState().userId;
      if (userId) recordActivity(userId, 'translation');

      // Auto-play translation
      if (targetSupported && result.translatedText) {
        setTimeout(() => {
          SpeechService.speak(result.translatedText, targetLang, playbackRate).catch(() => {});
        }, 300);
      }
    } catch (e) {
      setError('翻译失败: ' + e.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Wave bars animation
  const WaveAnimation = () => (
    <div className="flex items-end justify-center h-12 gap-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <span
          key={i}
          className="wave-bar"
          style={{
            animationDelay: `${i * 0.08}s`,
            height: isRecording ? 'unset' : '6px',
            background: isRecording ? '#6366F1' : '#CBD5E1',
          }}
        />
      ))}
    </div>
  );

  if (!supported) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4">
          <Icon name="mic" size={32} className="text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-700 mb-2">浏览器不支持语音识别</h3>
        <p className="text-sm text-slate-500 max-w-xs">
          您的浏览器不支持 Web Speech API，建议使用 Chrome 或 Edge 浏览器体验语音翻译功能。
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Language Selectors */}
      <div className="flex items-center justify-between gap-2">
        <LanguageSelector
          value={sourceLang}
          onChange={setSourceLang}
          label="说话语言"
          showAuto={false}
          className="flex-1"
        />
        <button
          onClick={swapLanguages}
          disabled={sourceLang === 'auto' || isDialectSource || DIALECT_CODES.includes(targetLang)}
          className={`p-2.5 rounded-xl transition-all btn-press ${
            sourceLang === 'auto' || isDialectSource || DIALECT_CODES.includes(targetLang)
              ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
              : 'bg-brand-100 text-brand-600 hover:bg-brand-200'
          }`}
        >
          <Icon name="swap" size={18} />
        </button>
        <LanguageSelector
          value={targetLang}
          onChange={setTargetLang}
          label="翻译语言"
          showAuto={false}
          className="flex-1"
        />
      </div>

      {/* Recording Area */}
      <Card className="flex flex-col items-center justify-center py-8">
        {/* Beta badge */}
        {showBetaBadge && (
          <div className="mb-3">
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">Beta · 演示数据</span>
          </div>
        )}
        {/* Wave visualization */}
        <div className="w-full mb-6">
          <WaveAnimation />
        </div>

        {/* Timer */}
        <div className="text-3xl font-bold text-slate-700 font-mono mb-2">
          {formatTime(recordingTime)}
        </div>
        <div className="text-sm text-slate-400 mb-6">
          {isRecording ? '正在聆听...' : isProcessing ? '翻译中...' : '点击麦克风开始说话'}
        </div>

        {/* Mic Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleMicClick}
          disabled={isProcessing || isDialectSource || !sourceSupported}
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all ${
            isRecording
              ? 'bg-red-500 shadow-lg shadow-red-500/40'
              : isDialectSource || !sourceSupported
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-brand-gradient shadow-lg shadow-brand-500/40 hover:shadow-xl hover:shadow-brand-500/50'
          } text-white`}
        >
          {isRecording && (
            <motion.div
              className="absolute inset-0 rounded-full bg-red-400"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          )}
          <Icon name="mic" size={32} className="relative z-10" />
        </motion.button>

        {isDialectSource && (
          <p className="mt-4 text-xs text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">
            ⚠️ 方言暂不支持语音输入，请使用文字翻译
          </p>
        )}
        {isDialectTarget && !isDialectSource && (
          <p className="mt-2 text-xs text-slate-400">
            语音输出目标为方言时，将使用普通话语音合成（演示数据）
          </p>
        )}
      </Card>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <SpeechError
              error={error}
              onRetry={() => {
                setError(null);
                if (isRecording) stopRecording();
                setTimeout(() => startRecording(), 300);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Source Text (recognized) */}
      {sourceText && (
        <Card padding="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400">识别结果 · {LANGUAGE_MAP[sourceLang]?.name}</span>
            <AudioPlayer text={sourceText} lang={sourceLang} size="sm" />
          </div>
          <p className="text-base text-slate-700">{sourceText || interimText}</p>
        </Card>
      )}

      {/* Translated Result */}
      {translatedText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card padding="p-4" className="bg-gradient-to-br from-brand-50 to-violet-50 border-brand-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-brand-600 font-medium">翻译结果 · {LANGUAGE_MAP[targetLang]?.name}</span>
              <div className="flex items-center gap-1">
                <AudioPlayer text={translatedText} lang={targetLang} showSpeed={true} />
              </div>
            </div>
            <p className="text-lg font-semibold text-slate-800">{translatedText}</p>
            {targetSupported && (
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs text-slate-400">播放速度:</span>
                <div className="flex gap-1">
                  {[0.5, 0.75, 1, 1.25, 1.5].map(speed => (
                    <button
                      key={speed}
                      onClick={() => {
                        setPlaybackRate(speed);
                        SpeechService.speak(translatedText, targetLang, speed).catch(() => {});
                      }}
                      className={`px-2 py-0.5 text-xs rounded-lg transition-colors ${
                        playbackRate === speed
                          ? 'bg-brand-500 text-white'
                          : 'bg-white/60 text-slate-600 hover:bg-white'
                      }`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      )}

      {/* Tips */}
      <div className="text-xs text-slate-400 text-center mt-2">
        <p>💡 提示：请在安静环境下使用，最长录音 60 秒</p>
      </div>
    </div>
  );
};

Object.assign(window, { VoiceTranslator });
