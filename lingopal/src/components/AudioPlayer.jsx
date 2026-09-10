// ========== Audio Player Component ==========
// Text-to-speech playback with speed control

const AudioPlayer = ({
  text,
  lang = 'zh-CN',
  size = 'md', // sm | md
  showSpeed = false,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rate, setRate] = useState(1.0);
  const supported = SpeechService.isSynthesisSupported();
  const speechSupported = SpeechService.supportsSpeech(lang);

  const handlePlay = async () => {
    if (!supported || !speechSupported || !text) return;
    if (isPlaying) {
      SpeechService.stopSpeaking();
      setIsPlaying(false);
      return;
    }
    try {
      setIsPlaying(true);
      await SpeechService.speak(text, lang, rate);
    } catch (e) {
      console.warn('Speech failed:', e);
    } finally {
      setIsPlaying(false);
    }
  };

  const sizes = {
    sm: { btn: 'p-2 touch-target-sm', icon: 16 },
    md: { btn: 'p-2.5 touch-target', icon: 20 },
  };

  if (!supported || !speechSupported) {
    return (
      <button
        className={`text-slate-300 cursor-not-allowed ${sizes[size].btn} rounded-lg ${className}`}
        title="当前语言不支持语音播放"
        disabled
      >
        <Icon name="volume-off" size={sizes[size].icon} />
      </button>
    );
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        onClick={handlePlay}
        className={`${sizes[size].btn} rounded-lg text-brand-600 hover:bg-brand-50 transition-colors btn-press ${isPlaying ? 'bg-brand-100' : ''}`}
        title="播放发音"
      >
        {isPlaying ? (
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>
            <Icon name="volume" size={sizes[size].icon} />
          </motion.div>
        ) : (
          <Icon name="volume" size={sizes[size].icon} />
        )}
      </button>

      {showSpeed && (
        <select
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-1.5 py-1 text-slate-600 focus:outline-none focus:border-brand-400"
        >
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1">1x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
        </select>
      )}
    </div>
  );
};

Object.assign(window, { AudioPlayer });
