// ========== DailyCheckInCeremony ==========
// Full-screen celebration when all daily learning goals are complete.
// 3 auto-advancing phases: intro → gesture → card.
// Stage-aware gestures. Skip-able. Share button.

const { useState, useEffect, useCallback } = React;

const DailyCheckInCeremony = ({ visible, onComplete, onSkip, stage, characterName, userNickname, studyData }) => {
  const [phase, setPhase] = useState(0); // 0=intro, 1=gesture, 2=card
  const [skipped, setSkipped] = useState(false);

  // Auto-advance phases
  useEffect(() => {
    if (!visible || skipped) return;
    if (phase === 0) {
      const t = setTimeout(() => setPhase(1), 1500);
      return () => clearTimeout(t);
    }
    if (phase === 1) {
      const t = setTimeout(() => setPhase(2), 2000);
      return () => clearTimeout(t);
    }
  }, [visible, phase, skipped]);

  const handleSkip = useCallback(() => {
    setSkipped(true);
    setPhase(2);
    if (onSkip) onSkip();
  }, [onSkip]);

  const handleClose = useCallback(() => {
    if (onComplete) onComplete();
  }, [onComplete]);

  const handleShare = useCallback(async () => {
    const text = `今日打卡成功！在 LingoPal 学习了 ${studyData?.minutes || 0} 分钟，完成了 ${studyData?.questions || 0} 题~`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'LingoPal 每日打卡', text });
      } catch (e) {}
    } else {
      try {
        await navigator.clipboard.writeText(text);
        if (window.useUIStore) {
          useUIStore.getState().showNotification('已复制到剪贴板', 'success');
        }
      } catch (e) {}
    }
    Analytics.track('checkin_share_click');
  }, [studyData]);

  if (!visible) return null;

  // Stage-aware gesture text
  const stageGesture = [
    { action: '击掌', emoji: '🙌', text: 'high five' },
    { action: '比心', emoji: '❤️', text: 'heart' },
    { action: '竖大拇指', emoji: '👍', text: 'thumbs up' },
    { action: '微笑点头', emoji: '😊', text: 'smile' },
  ][Math.max(0, Math.min(3, (stage || 1) - 1))];

  const name = characterName || '小语伴';
  const nickname = userNickname || '你';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={phase < 2 ? handleSkip : undefined}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 max-w-sm w-full">
        {/* Phase 0: Intro */}
        {phase === 0 && (
          <div className="text-center animate-slide-up">
            <div className="text-6xl mb-4 animate-bounce-soft">{stageGesture.emoji}</div>
            <p className="text-white text-lg font-bold">
              {name}，今天的目标都完成啦！
            </p>
          </div>
        )}

        {/* Phase 1: Gesture */}
        {phase === 1 && (
          <div className="text-center animate-pop">
            <div className="text-7xl mb-4">{stageGesture.emoji}</div>
            <p className="text-white text-xl font-black">
              {name} 和 {nickname} {stageGesture.action}！
            </p>
            <p className="text-white/70 text-sm mt-2">打卡成功</p>
          </div>
        )}

        {/* Phase 2: Card */}
        {phase === 2 && (
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full animate-slide-up">
            {/* Header */}
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="text-lg font-bold text-slate-800">今日学习卡片</h3>
              <p className="text-xs text-slate-400">{new Date().toLocaleDateString('zh-CN')}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center p-3 bg-brand-50 rounded-xl">
                <div className="text-xl font-black text-brand-600">{studyData?.minutes || 0}</div>
                <div className="text-[10px] text-slate-500">分钟</div>
              </div>
              <div className="text-center p-3 bg-emerald-50 rounded-xl">
                <div className="text-xl font-black text-emerald-600">{studyData?.questions || 0}</div>
                <div className="text-[10px] text-slate-500">题目</div>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <div className="text-xl font-black text-amber-600">{studyData?.words || 0}</div>
                <div className="text-[10px] text-slate-500">词汇</div>
              </div>
            </div>

            {/* Character snapshot line */}
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-lg">
                {stageGesture.emoji}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">{name}</p>
                <p className="text-xs text-slate-400">今天也辛苦了~</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleShare}
                className="flex-1 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition-colors"
              >
                分享
              </button>
              <button
                onClick={handleClose}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-600 text-sm font-semibold hover:bg-slate-200 transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        )}

        {/* Skip hint */}
        {phase < 2 && (
          <p className="text-white/50 text-xs">点击任意处跳过</p>
        )}
      </div>
    </div>
  );
};

// DailyStudyCard - standalone card for revisit entry
const DailyStudyCard = ({ studyData, characterName, stage }) => {
  const emojis = ['🙌', '❤️', '👍', '😊'];
  const emoji = emojis[Math.max(0, Math.min(3, (stage || 1) - 1))];
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-bold text-slate-700">今日学习卡片</span>
        <span className="text-xs text-slate-400">{new Date().toLocaleDateString('zh-CN')}</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="text-center p-2 bg-brand-50 rounded-lg">
          <div className="text-lg font-bold text-brand-600">{studyData?.minutes || 0}</div>
          <div className="text-[10px] text-slate-500">分钟</div>
        </div>
        <div className="text-center p-2 bg-emerald-50 rounded-lg">
          <div className="text-lg font-bold text-emerald-600">{studyData?.questions || 0}</div>
          <div className="text-[10px] text-slate-500">题目</div>
        </div>
        <div className="text-center p-2 bg-amber-50 rounded-lg">
          <div className="text-lg font-bold text-amber-600">{studyData?.words || 0}</div>
          <div className="text-[10px] text-slate-500">词汇</div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <span>{emoji}</span>
        <span>{characterName || '小语伴'} 今天也陪你学习了~</span>
      </div>
    </div>
  );
};
