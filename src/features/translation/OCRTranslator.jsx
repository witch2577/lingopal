// ========== OCR / Camera Translator Component ==========

const OCRTranslator = () => {
  const { targetLang, setTargetLang, addHistory } = useTranslationStore();
  const [image, setImage] = useState(null); // { src, file }
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressStatus, setProgressStatus] = useState('');
  const [ocrResult, setOcrResult] = useState(null); // { text, words }
  const [translatedText, setTranslatedText] = useState('');
  const [selectedWord, setSelectedWord] = useState(null);
  const [mode, setMode] = useState('full'); // full | select
  const [sourceLang, setSourceLang] = useState('en'); // OCR source language
  const [error, setError] = useState(null);

  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const { isMobile } = useMobileDetect();

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setError('图片大小不能超过 10MB');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setImage({ src: ev.target.result, file });
      setOcrResult(null);
      setTranslatedText('');
      setSelectedWord(null);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImage({ src: ev.target.result, file });
        setOcrResult(null);
        setTranslatedText('');
        setSelectedWord(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const isSourceDialect = DIALECT_CODES.includes(sourceLang);
  const isTargetDialect = DIALECT_CODES.includes(targetLang);
  const isSourceBeta = LANGUAGE_MAP[sourceLang]?.type === 'beta';
  const isTargetBeta = LANGUAGE_MAP[targetLang]?.type === 'beta';
  const showBetaBadge = isSourceDialect || isTargetDialect || isSourceBeta || isTargetBeta;

  const handleOCR = async () => {
    if (!image) return;
    setIsProcessing(true);
    setError(null);
    setProgress(0);
    setProgressStatus('加载识别引擎...');

    try {
      // Use Tesseract.js (may fail if network blocked, fallback to mock)
      OCRService.setProgressCallback((m) => {
        if (m.status) {
          setProgressStatus(m.status);
          if (m.progress !== undefined) {
            setProgress(Math.round(m.progress * 100));
          }
        }
      });

      const result = await OCRService.recognize(image.file, sourceLang);
      setOcrResult(result);

      if (result.text && result.text.trim()) {
        // Translate full text
        setProgressStatus('翻译中...');
        const translation = await TranslationService.translate(result.text.trim(), sourceLang, targetLang);
        setTranslatedText(translation.translatedText);

        addHistory({
          sourceText: result.text.trim(),
          translatedText: translation.translatedText,
          sourceLang,
          targetLang,
          mode: 'ocr',
        });

        // Record translation activity
        const userId = useUserStore.getState().userId;
        if (userId) recordActivity(userId, 'translation');
      } else {
        setError('未识别到文字，请尝试更清晰的图片');
      }
    } catch (e) {
      console.warn('OCR failed, using mock data:', e);
      // Fallback: mock data for demo
      await new Promise(r => setTimeout(r, 1500));
      const mock = OCRService.mockRecognize();
      setOcrResult(mock);
      const translation = await TranslationService.translate(mock.text, sourceLang, targetLang);
      setTranslatedText(translation.translatedText);

      // Record translation activity
      const userId = useUserStore.getState().userId;
      if (userId) recordActivity(userId, 'translation');
    } finally {
      setIsProcessing(false);
      setProgressStatus('');
      setProgress(0);
    }
  };

  const handleWordClick = async (word) => {
    if (mode !== 'select') return;
    setSelectedWord(word);
    // quick translate single word
    try {
      const result = await TranslationService.translate(word.text, sourceLang, targetLang);
      setSelectedWord({ ...word, translation: result.translatedText });
    } catch (e) {}
  };

  const handleReset = () => {
    setImage(null);
    setOcrResult(null);
    setTranslatedText('');
    setSelectedWord(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Upload screen
  if (!image) {
    return (
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Language selector */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-xs text-slate-400 mb-1 block">图片语言</label>
            <LanguageSelector
              value={sourceLang}
              onChange={setSourceLang}
              showAuto={false}
              showDialects={true}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-slate-400 mb-1 block">翻译为 {showBetaBadge && <span className="text-[10px] px-1 py-0.5 rounded bg-amber-100 text-amber-700 font-medium ml-1">Beta</span>}</label>
            <LanguageSelector
              value={targetLang}
              onChange={setTargetLang}
              showAuto={false}
              className="w-full"
            />
          </div>
        </div>

        <div
          className="border-2 border-dashed border-slate-200 rounded-2xl p-8 sm:p-12 flex flex-col items-center justify-center text-center hover:border-brand-300 hover:bg-brand-50/30 transition-all cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-100 flex items-center justify-center mb-3 sm:mb-4">
            <Icon name="camera" size={isMobile ? 24 : 28} className="text-brand-600" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-700 mb-1">拍照或上传图片</h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4 max-w-xs">
            支持 JPG、PNG、WebP 格式，单张不超过 10MB
          </p>
          <Button icon="upload" size={isMobile ? 'md' : 'md'}>
            选择图片
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileSelect}
          />
        </div>

        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-lg sm:text-xl">💡</span>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 text-sm">使用技巧</h4>
              <ul className="text-xs text-slate-500 mt-1 space-y-0.5">
                <li>• 确保图片光线充足、文字清晰</li>
                <li>• 印刷体识别准确率最高</li>
                <li>• 支持涂抹选词翻译单字/短句</li>
                {isSourceDialect && (
                  <li>• 方言 OCR 使用中文引擎识别，翻译结果含演示数据标注</li>
                )}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Result screen
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {/* Mode toggle */}
      <div className="flex items-center justify-between">
        <div className="flex bg-slate-100 rounded-xl p-1">
          {[
            { key: 'full', label: '全图翻译' },
            { key: 'select', label: '涂抹选词' },
          ].map(m => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-sm font-medium transition-all touch-target ${
                mode === m.key
                  ? 'bg-white text-brand-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <button
          onClick={handleReset}
          className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1 touch-target"
        >
          <Icon name="refresh" size={16} />
          重新选择
        </button>
      </div>

      {/* Image Preview */}
      <div className="relative rounded-2xl overflow-hidden bg-slate-900">
        <img
          src={image.src}
          alt="OCR source"
          className="w-full max-h-48 sm:max-h-64 object-contain"
          loading="lazy"
        />

        {/* OCR word boxes overlay in select mode */}
        {mode === 'select' && ocrResult && ocrResult.words && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ position: 'relative', width: '100%', height: '100%' }}
          >
            {/* Word boxes would be positioned here with canvas scaling */}
          </div>
        )}

        {/* Processing overlay */}
        {isProcessing && (
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
            <Spinner size={40} className="text-white mb-3" />
            <p className="text-sm font-medium mb-2">{progressStatus || '识别中...'}</p>
            <div className="w-48 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress || 30}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}
      </div>

      {/* OCR + Translation Result */}
      {ocrResult && !isProcessing && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-3"
        >
          {/* Original text */}
          <Card padding="p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2 flex-wrap gap-1">
              <span className="text-xs text-slate-400">
                识别文字 · {LANGUAGE_MAP[sourceLang]?.name}
                <span className="ml-2 text-emerald-500">置信度 {Math.round(ocrResult.confidence)}%</span>
                {isSourceDialect && (
                  <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">演示数据</span>
                )}
              </span>
              <AudioPlayer text={ocrResult.text} lang={sourceLang} size="sm" />
            </div>
            <p
              className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed"
              style={OCRService._rtlLangs.includes(sourceLang) ? { direction: 'rtl', textAlign: 'right' } : {}}
            >
              {ocrResult.text}
            </p>
          </Card>

          {/* Translation */}
          {translatedText && (
            <Card padding="p-3 sm:p-4" className="bg-gradient-to-br from-brand-50 to-violet-50 border-brand-100">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-1">
                <span className="text-xs text-brand-600 font-medium">
                  翻译结果 · {LANGUAGE_MAP[targetLang]?.name}
                  {showBetaBadge && (
                    <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">Beta · 演示数据</span>
                  )}
                </span>
                <div className="flex items-center gap-1">
                  <AudioPlayer text={translatedText} lang={targetLang} size="sm" />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(translatedText);
                      useUIStore.getState().showNotification('已复制', 'success');
                    }}
                    className="p-2 rounded-lg text-brand-500 hover:bg-brand-100 transition-colors touch-target-sm"
                  >
                    <Icon name="copy" size={16} />
                  </button>
                </div>
              </div>
              <p
                className="text-base font-medium text-slate-800 leading-relaxed"
                style={OCRService._rtlLangs.includes(targetLang) ? { direction: 'rtl', textAlign: 'right' } : {}}
              >
                {translatedText}
              </p>
            </Card>
          )}

          {/* Words list (for select mode) */}
          {mode === 'select' && ocrResult.words && (
            <Card padding="p-3 sm:p-4">
              <div className="text-xs text-slate-400 mb-2">点击单词快速翻译</div>
              <div className="flex flex-wrap gap-2">
                {ocrResult.words.slice(0, 30).map((w, i) => (
                  <button
                    key={i}
                    onClick={() => handleWordClick(w)}
                    className={`px-2 py-1 text-xs rounded-lg transition-colors touch-target-sm ${
                      selectedWord?.text === w.text
                        ? 'bg-brand-500 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {w.text}
                  </button>
                ))}
              </div>
              {selectedWord && selectedWord.translation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 pt-3 border-t border-slate-100"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-brand-600">{selectedWord.translation}</span>
                    <AudioPlayer text={selectedWord.text} lang={sourceLang} size="sm" />
                  </div>
                </motion.div>
              )}
            </Card>
          )}
        </motion.div>
      )}

      {/* Process button (before OCR) */}
      {image && !ocrResult && !isProcessing && (
        <Button
          icon="zap"
          size="lg"
          fullWidth
          onClick={handleOCR}
        >
          开始识别翻译
        </Button>
      )}

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <OCRError
              error={error}
              onRetry={() => {
                setError(null);
                if (image) handleOCR();
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Object.assign(window, { OCRTranslator });
