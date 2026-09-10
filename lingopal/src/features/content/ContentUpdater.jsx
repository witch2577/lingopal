// ========== Content Update Notification & Manual Refresh ==========
// Shows "New content available" badge and manual refresh button

const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

const ContentUpdater = () => {
  const [showNotice, setShowNotice] = useState(false);
  const [rotationInfo, setRotationInfo] = useState(null);
  const [showWeekSelector, setShowWeekSelector] = useState(false);

  useEffect(() => {
    const info = getRotationInfo();
    setRotationInfo(info);
    const shouldShow = shouldShowUpdateNotice();
    setShowNotice(shouldShow);
  }, []);

  const handleDismiss = () => {
    dismissUpdateNotice();
    setShowNotice(false);
  };

  const handleRefresh = () => {
    const week = forceContentRefresh();
    setRotationInfo(getRotationInfo());
    setShowNotice(false);
    useUIStore.getState().showNotification(`已刷新为${getWeekLabel(week)}内容`, 'success');
    // Reload page to pick up new content
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  const handleSelectWeek = (weekIndex) => {
    setUserSelectedWeek(weekIndex);
    setRotationInfo(getRotationInfo());
    setShowWeekSelector(false);
    useUIStore.getState().showNotification(`已切换到${getWeekLabel(weekIndex)}`, 'success');
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  const handleResetAuto = () => {
    setUserSelectedWeek(null);
    setRotationInfo(getRotationInfo());
    setShowWeekSelector(false);
    useUIStore.getState().showNotification('已恢复自动轮换', 'success');
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  if (!rotationInfo) return null;

  return (
    <>
      {/* Update notice banner */}
      <AnimatePresence>
        {showNotice && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-3"
          >
            <div className="bg-brand-500 text-white rounded-xl p-3 shadow-lg shadow-brand-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🎉</span>
                <span className="font-semibold text-sm">本周新内容已上线</span>
                <button
                  onClick={handleDismiss}
                  className="ml-auto p-1 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Icon name="x" size={14} />
                </button>
              </div>
              <p className="text-xs text-white/80 mb-2">
                第 {rotationInfo.weekNumber} 周 · {getWeekThemeName(rotationInfo.currentWeekIndex)}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleRefresh}
                  className="flex-1 bg-white text-brand-600 text-xs font-semibold py-2 rounded-lg hover:bg-white/90 transition-colors"
                >
                  刷新本周内容
                </button>
                <button
                  onClick={handleDismiss}
                  className="px-3 py-2 bg-white/20 text-white text-xs rounded-lg hover:bg-white/30 transition-colors"
                >
                  稍后
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Week selector toggle (always visible) */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() => setShowWeekSelector(!showWeekSelector)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 hover:border-brand-300 transition-colors"
        >
          <Icon name="calendar" size={14} className="text-brand-500" />
          <span>{getWeekLabel(rotationInfo.activeWeekIndex)}</span>
          {rotationInfo.isManualOverride && (
            <span className="text-[10px] text-amber-600 bg-amber-50 px-1 rounded">手动</span>
          )}
          <Icon name={showWeekSelector ? 'chevron-down' : 'chevron'} size={12} className="text-slate-400" />
        </button>
        {!showNotice && (
          <button
            onClick={handleRefresh}
            className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 hover:border-brand-300 transition-colors"
          >
            <Icon name="refresh-cw" size={12} className="text-brand-500" />
            <span>刷新</span>
          </button>
        )}
      </div>

      {/* Week selector dropdown */}
      <AnimatePresence>
        {showWeekSelector && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-3"
          >
            <div className="bg-white rounded-xl border border-slate-200 p-3 space-y-2">
              <p className="text-xs text-slate-500 font-medium">选择周次内容</p>
              <div className="grid grid-cols-2 gap-2">
                {Array.from({ length: CONTENT_WEEKS }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectWeek(i)}
                    className={`p-2 rounded-lg text-xs text-left transition-all ${
                      rotationInfo.activeWeekIndex === i && !rotationInfo.isManualOverride
                        ? 'bg-brand-50 border border-brand-300 text-brand-700'
                        : rotationInfo.activeWeekIndex === i
                          ? 'bg-amber-50 border border-amber-300 text-amber-700'
                          : 'bg-slate-50 border border-slate-100 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-semibold">{getWeekLabel(i)}</div>
                    <div className="text-[10px] opacity-70">{getWeekThemeName(i)}</div>
                  </button>
                ))}
              </div>
              {rotationInfo.isManualOverride && (
                <button
                  onClick={handleResetAuto}
                  className="w-full py-1.5 text-xs text-brand-600 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors"
                >
                  恢复自动轮换
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Small badge for use in other pages
const WeeklyContentBadge = ({ className = '' }) => {
  const info = getRotationInfo();
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 text-[10px] font-medium ${className}`}>
      <Icon name="sparkles" size={10} />
      {getWeekLabel(info.activeWeekIndex)}
    </span>
  );
};

Object.assign(window, { ContentUpdater, WeeklyContentBadge });
