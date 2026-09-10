// ========== Quiz Engine Component ==========
// Handles 6 question types: match, listen-pic, fill-blank, repeat, translate, dictation

const QuizEngine = ({ level, onFinish }) => {
  const {
    currentQuestion, currentQuestionIndex, totalQuestions,
    progress, score, combo, maxCombo,
    startLevel, submitAnswer, nextQuestion, finishLevel,
    setTimeRemaining, timeRemaining,
  } = useLearning();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answerResult, setAnswerResult] = useState(null);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [matchState, setMatchState] = useState({ selectedLeft: null, pairs: [], matched: [] });
  const [repeatScore, setRepeatScore] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [isRepeatDemo, setIsRepeatDemo] = useState(false);
  const recognitionRef = useRef(null);
  const inputRef = useRef(null);

  const { isMobile } = useMobileDetect();
  const { isOpen: keyboardOpen } = useKeyboard();

  // Timer
  useEffect(() => {
    startLevel(level);
  }, [level]);

  useEffect(() => {
    if (!timeRemaining || timeRemaining <= 0) return;
    const timer = setInterval(() => {
      // BUGFIX: use functional update to avoid stale closure over timeRemaining
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining, setTimeRemaining]);

  // Reset state on new question
  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
    setShowFeedback(false);
    setAnswerResult(null);
    setTypedAnswer('');
    setRepeatScore(null);
    setRecognizedText('');
    setIsRepeatDemo(false);
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (e) {}
      recognitionRef.current = null;
    }
    if (currentQuestion?.type === 'match') {
      const pairs = currentQuestion.pairs || [];
      const shuffledRight = [...pairs].sort(() => Math.random() - 0.5);
      setMatchState({
        selectedLeft: null,
        pairs: [],
        matched: [],
        leftItems: pairs.map((p, i) => ({ id: `l-${i}`, text: p[0], rightId: `r-${i}` })),
        rightItems: shuffledRight.map((p, i) => {
          const origIdx = pairs.findIndex(pp => pp[1] === p[1]);
          return { id: `r-${origIdx}`, text: p[1] };
        }),
      });
    }
  }, [currentQuestion?.id]);

  // Scroll input into view when keyboard opens
  useEffect(() => {
    if (keyboardOpen && inputRef.current && isMobile) {
      setTimeout(() => scrollToElement(inputRef.current), 300);
    }
  }, [keyboardOpen, isMobile, currentQuestion?.id]);

  const currentLang = useLearningStore(s => s.currentLanguage);

  // Levenshtein distance for text similarity
  const levenshtein = (a, b) => {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        matrix[i][j] = b.charAt(i - 1) === a.charAt(j - 1)
          ? matrix[i - 1][j - 1]
          : Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
    return matrix[b.length][a.length];
  };

  // Calculate repeat score: text similarity 60% + char accuracy 20% + word accuracy 20%
  const calculateRepeatScore = (target, recognized) => {
    if (!recognized || !target) return { total: 0, details: {} };

    const t = target.toLowerCase().trim();
    const r = recognized.toLowerCase().trim();

    // Metric 1: Levenshtein similarity (0-100)
    const dist = levenshtein(t, r);
    const maxLen = Math.max(t.length, r.length);
    const levenshteinScore = maxLen === 0 ? 100 : Math.round(((maxLen - dist) / maxLen) * 100);

    // Metric 2: Character-level accuracy
    const targetChars = t.replace(/\s/g, '').split('');
    const recogChars = r.replace(/\s/g, '').split('');
    let charMatches = 0;
    const minCharLen = Math.min(targetChars.length, recogChars.length);
    for (let i = 0; i < minCharLen; i++) {
      if (targetChars[i] === recogChars[i]) charMatches++;
    }
    const charAccuracy = targetChars.length === 0 ? 0 : Math.round((charMatches / targetChars.length) * 100);

    // Metric 3: Word-level accuracy
    const targetWords = t.split(/\s+/).filter(w => w);
    const recogWords = r.split(/\s+/).filter(w => w);
    let wordMatches = 0;
    const checked = new Set();
    for (const tw of targetWords) {
      for (let i = 0; i < recogWords.length; i++) {
        if (!checked.has(i) && (recogWords[i] === tw || levenshtein(recogWords[i], tw) <= 1)) {
          wordMatches++;
          checked.add(i);
          break;
        }
      }
    }
    const wordAccuracy = targetWords.length === 0 ? 0 : Math.round((wordMatches / targetWords.length) * 100);

    // Combined score (weighted): 60% + 20% + 20%
    const total = Math.round(levenshteinScore * 0.6 + charAccuracy * 0.2 + wordAccuracy * 0.2);

    return {
      total: Math.min(100, Math.max(0, total)),
      details: {
        levenshtein: levenshteinScore,
        charAccuracy,
        wordAccuracy,
        recognizedText: r,
        targetText: t,
      },
    };
  };

  const handleSelectOption = (option) => {
    if (showResult) return;
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    let userAnswer = selectedAnswer;
    let correctAnswer = currentQuestion.correctAnswer;

    if (currentQuestion.type === 'dictation' || currentQuestion.type === 'fill-blank') {
      if (!typedAnswer.trim()) return;
      userAnswer = typedAnswer;
    }

    if (currentQuestion.type === 'repeat') {
      // Repeat scoring is handled by speech recognition in handleRepeatListen
      return;
    }

    if (currentQuestion.type === 'match') {
      // All pairs matched? Check
      const allMatched = matchState.matched.length === (currentQuestion.pairs?.length || 0);
      if (!allMatched) return;
      // For match: all correct = full point
      const result = submitAnswer(currentQuestion.id, 'match', true);
      setAnswerResult(result);
      setShowResult(true);
      setShowFeedback(true);
      return;
    }

    if (!userAnswer) return;

    const result = submitAnswer(currentQuestion.id, userAnswer, correctAnswer);
    setAnswerResult(result);
    setShowResult(true);
    setShowFeedback(true);
  };

  const handleRepeatListen = () => {
    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    if (showResult) return;

    // Check browser support
    if (!SpeechService.isRecognitionSupported()) {
      useUIStore.getState().showNotification('语音识别不可用，本次练习不计分', 'warning');
      setIsRepeatDemo(true);
      const demoScore = 0;
      setRepeatScore(demoScore);
      const result = submitAnswer(currentQuestion.id, 'repeat', 'wrong');
      setAnswerResult({ ...result, repeatScore: demoScore, isDemo: true });
      setShowResult(true);
      setShowFeedback(true);
      return;
    }

    const recognition = SpeechService.createRecognition(currentLang);
    if (!recognition) {
      useUIStore.getState().showNotification('语音识别不可用，本次练习不计分', 'warning');
      setIsRepeatDemo(true);
      const demoScore = 0;
      setRepeatScore(demoScore);
      const result = submitAnswer(currentQuestion.id, 'repeat', 'wrong');
      setAnswerResult({ ...result, repeatScore: demoScore, isDemo: true });
      setShowResult(true);
      setShowFeedback(true);
      return;
    }

    recognitionRef.current = recognition;
    let finalTranscript = '';

    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        }
      }
    };

    recognition.onerror = (e) => {
      setIsListening(false);
      console.error('[QuizEngine] Speech recognition error:', e.error);
      if (e.error === 'no-speech') {
        useUIStore.getState().showNotification('未检测到语音，请重试', 'warning');
      } else if (e.error === 'audio-capture') {
        useUIStore.getState().showNotification('无法访问麦克风，语音识别不可用，本次练习不计分', 'warning');
        setIsRepeatDemo(true);
        const demoScore = 0;
        setRepeatScore(demoScore);
        const result = submitAnswer(currentQuestion.id, 'repeat', 'wrong');
        setAnswerResult({ ...result, repeatScore: demoScore, isDemo: true });
        setShowResult(true);
      } else {
        useUIStore.getState().showNotification('语音识别出错，本次练习不计分', 'warning');
        setIsRepeatDemo(true);
        const demoScore = 0;
        setRepeatScore(demoScore);
        const result = submitAnswer(currentQuestion.id, 'repeat', 'wrong');
        setAnswerResult({ ...result, repeatScore: demoScore, isDemo: true });
        setShowResult(true);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      if (finalTranscript && currentQuestion) {
        const targetText = currentQuestion.sentence || currentQuestion.correctAnswer || '';
        const scoreResult = calculateRepeatScore(targetText, finalTranscript);
        setRepeatScore(scoreResult.total);
        setRecognizedText(finalTranscript);
        const isCorrect = scoreResult.total >= 60;
        const result = submitAnswer(currentQuestion.id, 'repeat', isCorrect ? currentQuestion.correctAnswer : 'wrong');
        setAnswerResult({ ...result, repeatScore: scoreResult.total, details: scoreResult.details, recognizedText: finalTranscript });
        setShowResult(true);

        // Achievement check for perfect pronunciation
        if (scoreResult.total >= 90) {
          const ach = ACHIEVEMENTS.find(a => a.id === 'first-perfect');
          if (ach) useUserStore.getState().unlockAchievement(ach.id, ach.title, ach.desc, ach.icon);
        }
      } else if (!showResult) {
        useUIStore.getState().showNotification('未检测到语音，请重试', 'warning');
      }
    };

    setRecognizedText('');
    setIsRepeatDemo(false);
    recognition.start();
    setIsListening(true);
  };

  const handleNext = async () => {
    setShowFeedback(false);
    const hasNext = nextQuestion();
    if (!hasNext) {
      // End of level
      const result = await finishLevel();
      onFinish?.(result);
    }
  };

  // Match pair handling
  const handleMatchClick = (side, itemId) => {
    if (showResult) return;
    if (matchState.matched.some(m => m.includes(itemId))) return;

    if (side === 'left') {
      setMatchState(prev => ({ ...prev, selectedLeft: itemId }));
    } else if (side === 'right') {
      if (!matchState.selectedLeft) return;
      // Check if match is correct
      const leftItem = matchState.leftItems.find(i => i.id === matchState.selectedLeft);
      const rightItem = matchState.rightItems.find(i => i.id === itemId);
      const isMatch = leftItem?.rightId === itemId;

      if (isMatch) {
        setMatchState(prev => ({
          ...prev,
          selectedLeft: null,
          matched: [...prev.matched, [prev.selectedLeft, itemId]],
        }));
        // Check if all matched
        const totalPairs = currentQuestion.pairs?.length || 0;
        if (matchState.matched.length + 1 >= totalPairs) {
          // Auto-submit after short delay
          setTimeout(() => handleSubmit(), 400);
        }
      } else {
        // wrong match - briefly indicate and deselect
        setMatchState(prev => ({ ...prev, selectedLeft: null }));
      }
    }
  };

  // Play audio for listen-pic and dictation
  const playWordAudio = () => {
    const word = currentQuestion?.audioWord || currentQuestion?.correctAnswer;
    if (word && SpeechService.supportsSpeech(currentLang)) {
      SpeechService.speak(word, currentLang, 0.8).catch((e) => { console.error('[QuizEngine.playWordAudio] 播放发音失败:', e); });
    }
  };

  if (!currentQuestion) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size={32} className="text-brand-500" />
      </div>
    );
  }

  const questionTypeLabels = {
    'match': '单词连连看',
    'listen-pic': '听力选图',
    'fill-blank': '句子填空',
    'repeat': '跟读打分',
    'translate': '翻译挑战',
    'dictation': '听写拼写',
  };

  const isMCQ = ['translate', 'fill-blank-mcq', 'listen-pic'].includes(currentQuestion.type) ||
    (currentQuestion.type === 'fill-blank' && currentQuestion.options);

  return (
    <div className="flex flex-col h-full">
      {/* Top bar: progress + score + timer */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-slate-400 font-medium">
              {currentQuestionIndex + 1} / {totalQuestions}
            </span>
            <span className="text-xs text-slate-400">
              {questionTypeLabels[currentQuestion.type]}
            </span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-gradient rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
          timeRemaining <= 10 ? 'bg-red-100 text-red-600' : 'bg-amber-50 text-amber-600'
        }`}>
          <Icon name="clock" size={14} />
          {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold flex-shrink-0">
          <Icon name="zap" size={14} />
          {score}
        </div>
      </div>

      {/* Combo indicator */}
      {combo >= 2 && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-3 flex items-center justify-center gap-1.5"
        >
          <div className="bg-warm-gradient text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
            <Icon name="flame" size={14} />
            {combo} 连击！
          </div>
        </motion.div>
      )}

      {/* Question area */}
      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: isMobile ? 0.18 : 0.25 }}
        className="flex-1 flex flex-col"
      >
        <Card className="flex-1 mb-3 sm:mb-4" padding={isMobile ? 'p-4' : 'p-6'}>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 text-center mb-4 sm:mb-6">
            {currentQuestion.question}
          </h2>

          {/* Question content varies by type */}
          {currentQuestion.type === 'listen-pic' && (
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <button
                onClick={playWordAudio}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-gradient flex items-center justify-center text-white shadow-lg shadow-brand-500/30 btn-press mb-2 touch-target"
              >
                <Icon name="volume" size={isMobile ? 24 : 28} />
              </button>
              <p className="text-xs text-slate-400">点击播放发音</p>
            </div>
          )}

          {currentQuestion.type === 'repeat' && (
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <AudioPlayer text={currentQuestion.sentence} lang={currentLang} showSpeed />
              <p className="text-xs text-slate-400 mt-2">
                {isListening ? '正在聆听，请朗读...' : '先听示范，再跟读打分'}
              </p>
              {!showResult && (
                <button
                  onClick={handleRepeatListen}
                  className={`mt-4 w-14 h-14 rounded-full flex items-center justify-center transition-all btn-press touch-target ${
                    isListening
                      ? 'bg-red-500 shadow-lg shadow-red-500/30 animate-pulse'
                      : 'bg-brand-gradient shadow-lg shadow-brand-500/30'
                  } text-white`}
                >
                  <Icon name={isListening ? 'x' : 'mic'} size={24} />
                </button>
              )}
              {isListening && (
                <p className="text-xs text-red-500 mt-2 animate-pulse font-medium">正在聆听，请朗读...</p>
              )}
              {repeatScore !== null && showResult && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-4 text-center"
                >
                  {isRepeatDemo && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-medium mb-2">
                      <Icon name="alert-circle" size={10} />
                      演示数据
                    </div>
                  )}
                  <div className={`text-3xl sm:text-4xl font-bold ${
                    repeatScore >= 90 ? 'text-emerald-500' : repeatScore >= 70 ? 'text-amber-500' : 'text-red-500'
                  }`}>
                    {repeatScore}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    跟读评分（基于语音识别文本对比估算）
                  </div>
                  {answerResult?.recognizedText && (
                    <div className="mt-2 text-xs text-slate-400">
                      识别结果: <span className="text-slate-600 font-medium">{answerResult.recognizedText}</span>
                    </div>
                  )}
                  <div className="text-sm text-slate-500 mt-1">
                    {repeatScore >= 90 ? '完美发音！' : repeatScore >= 70 ? '不错哦！' : '继续加油'}
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Match pairs */}
          {currentQuestion.type === 'match' && (
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="flex flex-col gap-2">
                {matchState.leftItems?.map(item => {
                  const isMatched = matchState.matched.some(m => m[0] === item.id);
                  const isSelected = matchState.selectedLeft === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleMatchClick('left', item.id)}
                      disabled={isMatched}
                      className={`p-3 sm:p-4 rounded-xl text-sm font-medium text-left transition-all btn-press touch-target ${
                        isMatched
                          ? 'bg-emerald-100 text-emerald-700 opacity-60'
                          : isSelected
                            ? 'bg-brand-500 text-white shadow-md'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.text}
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2">
                {matchState.rightItems?.map(item => {
                  const isMatched = matchState.matched.some(m => m[1] === item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleMatchClick('right', item.id)}
                      disabled={isMatched || !matchState.selectedLeft}
                      className={`p-3 sm:p-4 rounded-xl text-sm font-medium text-right transition-all btn-press touch-target ${
                        isMatched
                          ? 'bg-emerald-100 text-emerald-700 opacity-60'
                          : matchState.selectedLeft
                            ? 'bg-slate-50 text-slate-700 hover:bg-brand-50 hover:text-brand-600'
                            : 'bg-slate-50 text-slate-300 cursor-not-allowed'
                      }`}
                    >
                      {item.text}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Multiple choice options */}
          {isMCQ && currentQuestion.options && (
            <div className="flex flex-col gap-2 sm:gap-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQuestion.correctAnswer;
                const showCorrectWrong = showResult;

                let optClass = 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-transparent';
                if (isSelected && !showCorrectWrong) {
                  optClass = 'bg-brand-50 text-brand-700 border-2 border-brand-400';
                }
                if (showCorrectWrong && isCorrect) {
                  optClass = 'bg-emerald-50 text-emerald-700 border-2 border-emerald-400';
                }
                if (showCorrectWrong && isSelected && !isCorrect) {
                  optClass = 'bg-red-50 text-red-700 border-2 border-red-400';
                }

                return (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: showResult ? 1 : 1.01 }}
                    whileTap={{ scale: showResult ? 1 : 0.99 }}
                    onClick={() => handleSelectOption(option)}
                    disabled={showResult}
                    className={`w-full p-3 sm:p-4 rounded-xl text-left font-medium transition-all border-2 ${optClass} touch-target`}
                    animate={showResult && isSelected && !isCorrect ? { x: [0, -6, 6, -4, 4, 0] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        showCorrectWrong && isCorrect
                          ? 'bg-emerald-500 text-white'
                          : showCorrectWrong && isSelected && !isCorrect
                            ? 'bg-red-500 text-white'
                            : isSelected
                              ? 'bg-brand-500 text-white'
                              : 'bg-slate-200 text-slate-500'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {showCorrectWrong && isCorrect && (
                        <Icon name="check" size={18} className="text-emerald-500" />
                      )}
                      {showCorrectWrong && isSelected && !isCorrect && (
                        <Icon name="x" size={18} className="text-red-500" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* Typed input (dictation or fill-blank without options) */}
          {(currentQuestion.type === 'dictation' ||
            (currentQuestion.type === 'fill-blank' && !currentQuestion.options)) && (
            <div className="mb-3 sm:mb-4">
              {currentQuestion.type === 'dictation' && (
                <div className="flex justify-center mb-3 sm:mb-4">
                  <button
                    onClick={playWordAudio}
                    className="w-14 h-14 rounded-full bg-brand-gradient flex items-center justify-center text-white shadow-lg btn-press touch-target"
                  >
                    <Icon name="volume" size={22} />
                  </button>
                </div>
              )}
              <input
                ref={inputRef}
                type="text"
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder={currentQuestion.type === 'dictation' ? '输入你听到的内容...' : '输入答案...'}
                className={`w-full px-4 py-3 rounded-xl border-2 text-base focus:outline-none transition-colors touch-target ${
                  showResult
                    ? answerResult?.isCorrect
                      ? 'border-emerald-400 bg-emerald-50'
                      : 'border-red-400 bg-red-50'
                    : 'border-slate-200 focus:border-brand-400'
                }`}
                disabled={showResult}
              />
            </div>
          )}

          {/* Result feedback */}
          {showResult && answerResult && currentQuestion.type !== 'repeat' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-3 sm:mt-4 p-3 rounded-xl ${
                answerResult.isCorrect
                  ? 'bg-emerald-50 border border-emerald-100'
                  : 'bg-red-50 border border-red-100'
              }`}
            >
              <div className="flex items-center gap-2">
                {answerResult.isCorrect ? (
                  <>
                    <span className="text-emerald-500"><Icon name="check" size={20} /></span>
                    <span className="font-semibold text-emerald-700">回答正确！</span>
                    <span className="ml-auto text-emerald-600 text-sm font-semibold">
                      +{answerResult.questionScore} 分
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-red-500"><Icon name="x" size={20} /></span>
                    <span className="font-semibold text-red-700">回答错误</span>
                    <span className="ml-auto text-red-600 text-sm">
                      正确答案：{currentQuestion.correctAnswer}
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </Card>

        {/* Submit / Next button */}
        <div className="flex gap-3">
          {!showResult ? (
            <Button
              fullWidth
              size="lg"
              onClick={handleSubmit}
              disabled={
                (currentQuestion.type !== 'match' && isMCQ && !selectedAnswer) ||
                (currentQuestion.type === 'dictation' && !typedAnswer.trim()) ||
                (currentQuestion.type === 'fill-blank' && !currentQuestion.options && !typedAnswer.trim()) ||
                (currentQuestion.type === 'repeat')
              }
              iconRight="arrow-right"
            >
              {currentQuestion.type === 'match' ? '提交答案' : '确认'}
            </Button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full"
            >
              <Button
                fullWidth
                size="lg"
                variant={answerResult?.isCorrect ? 'mint' : 'primary'}
                onClick={handleNext}
                iconRight="arrow-right"
              >
                {currentQuestionIndex + 1 >= totalQuestions ? '查看结果' : '下一题'}
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Full-screen answer feedback overlay */}
      {showFeedback && (
        <AnswerFeedback
          isCorrect={answerResult?.isCorrect}
          combo={combo}
          onComplete={() => setShowFeedback(false)}
        />
      )}
    </div>
  );
};

Object.assign(window, { QuizEngine });
