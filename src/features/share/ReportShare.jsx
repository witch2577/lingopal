// ========== Learning Report Share Card ==========
const { useState, useEffect, useRef } = React;
const { motion } = window.Motion;

const ReportShare = () => {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef(null);
  const userId = useUserStore(s => s.userId);
  const profile = useUserStore(s => s.profile);
  const totalXP = useUserStore(s => s.totalXP);
  const streakDays = useUserStore(s => s.streakDays);

  useEffect(() => {
    loadReportData();
  }, [userId]);

  const loadReportData = async () => {
    if (!userId) return;
    setLoading(true);
    const reports = await getDailyReports(userId, 7);
    const totalMinutes = reports.reduce((sum, r) => sum + (r.studyMinutes || 0), 0);
    const totalWords = reports.reduce((sum, r) => sum + (r.newWords || 0), 0);
    const wordCount = await db.wordBooks.where('userId').equals(userId).count();
    const level = getLevelByXP(totalXP);

    setReportData({
      studyDays: reports.filter(r => r.studyMinutes > 0).length,
      totalMinutes,
      totalWords: wordCount,
      streakDays,
      totalXP,
      level: level.level,
      levelTitle: level.title,
      accuracy: reports.length > 0 ? Math.round(reports.reduce((s, r) => s + (r.accuracy || 0), 0) / reports.length) : 0,
    });
    setLoading(false);
  };

  const generatePoster = () => {
    const canvas = canvasRef.current;
    if (!canvas || !reportData) return;
    const ctx = canvas.getContext('2d');
    const w = 360;
    const h = 640;
    canvas.width = w * 2;
    canvas.height = h * 2;
    ctx.scale(2, 2);

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#6366F1');
    grad.addColorStop(0.5, '#8B5CF6');
    grad.addColorStop(1, '#A78BFA');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Decorative circles
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath(); ctx.arc(300, 80, 120, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(60, 500, 80, 0, Math.PI * 2); ctx.fill();

    // Header
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('语伴 LingoPal', w / 2, 60);
    ctx.font = '14px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText('学习周报', w / 2, 85);

    // Avatar area
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.beginPath(); ctx.arc(w / 2, 140, 40, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(profile?.nickname?.[0] || '我', w / 2, 148);
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(profile?.nickname || '语言学习者', w / 2, 205);
    ctx.font = '12px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText(`Lv.${reportData.level} ${reportData.levelTitle}`, w / 2, 225);

    // Stats grid
    const stats = [
      { label: '学习天数', value: reportData.studyDays + '天', emoji: '📅' },
      { label: '学习时长', value: reportData.totalMinutes + '分', emoji: '⏱️' },
      { label: '词汇量', value: reportData.totalWords + '词', emoji: '📚' },
      { label: '连胜', value: reportData.streakDays + '天', emoji: '🔥' },
    ];

    stats.forEach((stat, i) => {
      const x = (i % 2) * 170 + 10;
      const y = Math.floor(i / 2) * 90 + 260;
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.beginPath(); ctx.roundRect(x, y, 160, 80, 12); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = '24px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(stat.emoji, x + 80, y + 30);
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText(stat.value, x + 80, y + 55);
      ctx.font = '11px sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fillText(stat.label, x + 80, y + 72);
    });

    // XP & Accuracy
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.beginPath(); ctx.roundRect(10, 450, 340, 70, 12); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${reportData.totalXP} XP`, w / 2, 490);
    ctx.font = '12px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText(`正确率 ${reportData.accuracy}%`, w / 2, 510);

    // Footer
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect(40, 555, 280, 1);
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = '11px sans-serif';
    ctx.fillText('语伴 LingoPal — 多语言翻译与方言学习', w / 2, 580);
    ctx.fillText(new Date().toLocaleDateString(), w / 2, 600);

    return canvas.toDataURL('image/png');
  };

  const handleDownload = () => {
    const dataUrl = generatePoster();
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `lingopal-report-${todayStr()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    useUserStore.getState().unlockAchievement('report-sharer', '分享达人', '分享学习报告', '📤');
    useUIStore.getState().showNotification('海报已下载！', 'success');
  };

  const handleShare = async () => {
    const dataUrl = generatePoster();
    if (!dataUrl) return;
    try {
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], 'lingopal-report.png', { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: '我的 LingoPal 学习报告',
          text: `我在 LingoPal 已连续学习 ${reportData?.streakDays} 天，累计 ${reportData?.totalXP} XP！`,
          files: [file],
        });
      } else {
        handleDownload();
      }
    } catch (e) {
      handleDownload();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner size={32} className="text-brand-500" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-brand-50 rounded-xl p-4 text-center">
        <div className="text-3xl mb-2">📊</div>
        <h3 className="text-sm font-semibold text-brand-700">学习报告</h3>
        <p className="text-xs text-brand-500 mt-1">生成你的专属学习成果海报</p>
      </div>

      {/* Stats summary */}
      {reportData && (
        <div className="bg-white rounded-xl p-4 border border-slate-100">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-brand-600">{reportData.studyDays}</p>
              <p className="text-xs text-slate-500">学习天数</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-brand-600">{reportData.totalMinutes}</p>
              <p className="text-xs text-slate-500">学习分钟</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-brand-600">{reportData.totalWords}</p>
              <p className="text-xs text-slate-500">收藏词汇</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-brand-600">{reportData.streakDays}</p>
              <p className="text-xs text-slate-500">连胜天数</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-100 text-center">
            <p className="text-2xl font-bold text-brand-600">{reportData.totalXP} <span className="text-sm text-slate-500">XP</span></p>
            <p className="text-xs text-slate-500">Lv.{reportData.level} {reportData.levelTitle}</p>
          </div>
        </div>
      )}

      {/* Hidden canvas for poster generation */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Actions */}
      <div className="flex gap-2">
        <Button onClick={handleDownload} variant="primary" className="flex-1" icon="upload">
          下载海报
        </Button>
        <Button onClick={handleShare} variant="secondary" className="flex-1" icon="share">
          分享
        </Button>
      </div>
    </div>
  );
};

Object.assign(window, { ReportShare });
