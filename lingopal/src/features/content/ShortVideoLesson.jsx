// ========== Short Video Scenario Lessons ==========
const { useState, useEffect, useRef } = React;
const { motion, AnimatePresence } = window.Motion;

const ShortVideoLesson = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPractice, setShowPractice] = useState(false);
  const [practiceStep, setPracticeStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState({});
  const userId = useUserStore(s => s.userId);

  useEffect(() => {
    loadVideos();
  }, [userId]);

  const loadVideos = async () => {
    if (!userId) return;
    setLoading(true);
    const data = await getVideoLessons();
    const progress = await getLessonProgress(userId);
    setVideos(data);
    setCompleted(progress);
    setLoading(false);
  };

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowPractice(false);
      setPracticeStep(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowPractice(false);
      setPracticeStep(0);
    }
  };

  const startPractice = () => {
    setShowPractice(true);
    setPracticeStep(0);
  };

  const handlePracticeNext = async () => {
    const video = videos[currentIndex];
    if (practiceStep < video.dialogue.length - 1) {
      setPracticeStep(practiceStep + 1);
    } else {
      // Complete
      await recordLessonProgress(userId, video.id, 'video');
      await recordActivity(userId, 'video', { minutes: Math.ceil(video.duration / 60) });
      useUserStore.getState().addXP(video.xpReward, 'video_lesson');
      useUserStore.getState().unlockAchievement('video-star', '短视频达人', '完成 5 个情景短视频', '🎬');
      useUIStore.getState().showNotification(`完成！+${video.xpReward} XP`, 'success');
      setCompleted({ ...completed, [`video_${video.id}`]: true });
      setShowPractice(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner size={32} className="text-brand-500" />
      </div>
    );
  }

  const video = videos[currentIndex];
  if (!video) return null;

  const isCompleted = completed[`video_${video.id}`];

  return (
    <div className="space-y-4">
      {/* Video card */}
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden aspect-[9/16] max-h-[420px]">
        {!showPractice ? (
          <div className="h-full flex flex-col">
            {/* Thumbnail area */}
            <div className="flex-1 flex items-center justify-center bg-slate-800">
              <div className="text-center">
                <div className="text-6xl mb-3">{video.thumbnail}</div>
                <h3 className="text-white text-lg font-bold">{video.title}</h3>
                {video.weekIndex >= 0 && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-brand-500/30 text-brand-300 text-[10px] font-medium mt-1">
                    每周轮换
                  </span>
                )}
                <p className="text-slate-400 text-sm mt-1">{video.description}</p>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <Badge variant="primary" className="bg-brand-500/20 text-brand-300">{LANGUAGE_MAP[video.language]?.name}</Badge>
                  <span className="text-xs text-slate-400">{video.duration}秒</span>
                  {isCompleted && <span className="text-emerald-400 text-xs">✅ 已完成</span>}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="p-4 bg-slate-900">
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="p-2 rounded-full bg-slate-700 text-white disabled:opacity-30"
                >
                  <Icon name="chevron-left" size={20} />
                </button>
                <div className="flex gap-1">
                  {videos.map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${i === currentIndex ? 'bg-brand-400' : 'bg-slate-600'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === videos.length - 1}
                  className="p-2 rounded-full bg-slate-700 text-white disabled:opacity-30"
                >
                  <Icon name="chevron" size={20} />
                </button>
              </div>
              <Button onClick={startPractice} variant="primary" fullWidth icon="play">
                {isCompleted ? '重新练习' : '开始跟读'}
              </Button>
            </div>
          </div>
        ) : (
          <PracticeMode
            video={video}
            step={practiceStep}
            onNext={handlePracticeNext}
            onSkip={() => setShowPractice(false)}
          />
        )}
      </div>

      {/* Video list */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-slate-700">更多情景</h3>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          {videos.map((v, i) => (
            <button
              key={v.id}
              onClick={() => { setCurrentIndex(i); setShowPractice(false); setPracticeStep(0); }}
              className={`flex-shrink-0 w-24 p-2 rounded-xl text-left transition-all ${
                i === currentIndex ? 'bg-brand-100 border-2 border-brand-400' : 'bg-white border border-slate-100'
              }`}
            >
              <div className="text-2xl mb-1">{v.thumbnail}</div>
              <p className="text-xs font-medium truncate">{v.title}</p>
              {v.weekIndex >= 0 && (
                <span className="inline-flex items-center px-1 py-0.5 rounded bg-brand-100 text-brand-700 text-[8px] font-medium">
                  每周
                </span>
              )}
              <p className="text-[10px] text-slate-400">{v.duration}秒</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const PracticeMode = ({ video, step, onNext, onSkip }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const dialogue = video.dialogue[step];
  const isUserLine = dialogue.speaker === 'user';

  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-slate-400">跟读练习 {step + 1}/{video.dialogue.length}</span>
        <button onClick={onSkip} className="text-xs text-slate-400">跳过</button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-xs">
          {video.dialogue.map((line, i) => {
            if (i > step) return null;
            const isCurrent = i === step;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-3 ${line.speaker === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div className={`inline-block max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                  line.speaker === 'user'
                    ? 'bg-brand-500 text-white rounded-br-md'
                    : 'bg-slate-700 text-slate-200 rounded-bl-md'
                }`}>
                  {line.text}
                </div>
              </motion.div>
            );
          })}

          {isUserLine && !showAnswer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4"
            >
              <p className="text-slate-400 text-sm mb-3">请跟读上方句子</p>
              <Button onClick={() => setShowAnswer(true)} variant="primary" icon="mic">
                开始跟读
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      <Button onClick={onNext} variant="primary" fullWidth>
        {step < video.dialogue.length - 1 ? '下一句' : '完成'}
      </Button>
    </div>
  );
};

Object.assign(window, { ShortVideoLesson });
