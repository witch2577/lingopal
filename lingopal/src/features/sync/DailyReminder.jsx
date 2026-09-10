// ========== Daily Push Reminder ==========
const { useState, useEffect } = React;

const DailyReminder = () => {
  const [enabled, setEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState('20:00');
  const [permission, setPermission] = useState('default');
  const [nextReminder, setNextReminder] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('lingopal_reminder');
    if (saved) {
      const config = JSON.parse(saved);
      setEnabled(config.enabled);
      setReminderTime(config.time || '20:00');
    }
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
    calculateNextReminder(reminderTime);
  }, []);

  useEffect(() => {
    if (enabled && permission === 'granted') {
      scheduleReminder();
    }
  }, [enabled, reminderTime, permission]);

  const calculateNextReminder = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const now = new Date();
    const next = new Date();
    next.setHours(hours, minutes, 0, 0);
    if (next <= now) {
      next.setDate(next.getDate() + 1);
    }
    setNextReminder(next);
  };

  const scheduleReminder = () => {
    if (!enabled || !('Notification' in window)) return;
    // Clear any existing interval
    if (window._lingopalReminderInterval) {
      clearInterval(window._lingopalReminderInterval);
    }
    window._lingopalReminderInterval = setInterval(() => {
      const now = new Date();
      const [hours, minutes] = reminderTime.split(':').map(Number);
      if (now.getHours() === hours && now.getMinutes() === minutes) {
        showReminderNotification();
      }
    }, 60000); // Check every minute
  };

  const showReminderNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('语伴 LingoPal', {
        body: '该学习啦！今天的语言目标还没完成哦~',
        icon: 'https://miaoda.feishu.cn/aily/api/v1/files/static/5fdddd51dc6aa5f7b57202d7edb983bf91e7da8de2ed545caf6974419a394d9b_ve_miaoda?x-tos-process=image%2Fresize%2Cw_120%2Ch_120%2Cm_fixed%7Crounded-corners%2Cr_14%2Fformat%2Cpng',
        badge: 'https://miaoda.feishu.cn/aily/api/v1/files/static/5fdddd51dc6aa5f7b57202d7edb983bf91e7da8de2ed545caf6974419a394d9b_ve_miaoda?x-tos-process=image%2Fresize%2Cw_120%2Ch_120%2Cm_fixed%7Crounded-corners%2Cr_14%2Fformat%2Cpng',
        tag: 'lingopal-daily-reminder',
        requireInteraction: false,
      });
    }
  };

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      useUIStore.getState().showNotification('您的浏览器不支持通知功能', 'error');
      return false;
    }
    const result = await Notification.requestPermission();
    setPermission(result);
    return result === 'granted';
  };

  const handleToggle = async () => {
    const newEnabled = !enabled;
    if (newEnabled) {
      const granted = await requestPermission();
      if (!granted) {
        useUIStore.getState().showNotification('需要通知权限才能开启提醒', 'warning');
        return;
      }
    }
    setEnabled(newEnabled);
    localStorage.setItem('lingopal_reminder', JSON.stringify({ enabled: newEnabled, time: reminderTime }));
    calculateNextReminder(reminderTime);
    useUIStore.getState().showNotification(newEnabled ? '每日提醒已开启' : '每日提醒已关闭', 'success');
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setReminderTime(newTime);
    localStorage.setItem('lingopal_reminder', JSON.stringify({ enabled, time: newTime }));
    calculateNextReminder(newTime);
  };

  const sendTestNotification = () => {
    if (permission === 'granted') {
      new Notification('语伴 LingoPal', {
        body: '测试通知！你的学习提醒功能正常~',
        icon: 'https://miaoda.feishu.cn/aily/api/v1/files/static/5fdddd51dc6aa5f7b57202d7edb983bf91e7da8de2ed545caf6974419a394d9b_ve_miaoda?x-tos-process=image%2Fresize%2Cw_120%2Ch_120%2Cm_fixed%7Crounded-corners%2Cr_14%2Fformat%2Cpng',
      });
    } else {
      useUIStore.getState().showNotification('请先开启通知权限', 'warning');
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-brand-50 rounded-xl p-4 text-center">
        <div className="text-3xl mb-2">🔔</div>
        <h3 className="text-sm font-semibold text-brand-700">每日推送提醒</h3>
        <p className="text-xs text-brand-500 mt-1">基于你的学习时段偏好，智能推送学习提醒</p>
      </div>

      {/* Toggle */}
      <div className="bg-white rounded-xl p-4 border border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-lg">⏰</div>
          <div>
            <h4 className="text-sm font-semibold">每日提醒</h4>
            <p className="text-xs text-slate-500">
              {enabled ? `下次提醒：${nextReminder?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : '已关闭'}
            </p>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className={`w-12 h-7 rounded-full transition-all relative ${enabled ? 'bg-brand-500' : 'bg-slate-300'}`}
        >
          <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${enabled ? 'translate-x-5' : 'translate-x-0.5'}`} />
        </button>
      </div>

      {/* Time selector */}
      {enabled && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="bg-white rounded-xl p-4 border border-slate-100 space-y-3"
        >
          <div>
            <label className="text-sm font-medium text-slate-700">提醒时间</label>
            <input
              type="time"
              value={reminderTime}
              onChange={handleTimeChange}
              className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400"
            />
          </div>
          <Button onClick={sendTestNotification} variant="secondary" fullWidth size="sm">
            发送测试通知
          </Button>
        </motion.div>
      )}

      {/* Smart suggestions based on study preference */}
      <div className="bg-white rounded-xl p-4 border border-slate-100">
        <h4 className="text-sm font-semibold text-slate-700 mb-3">推荐提醒时段</h4>
        <div className="space-y-2">
          {[
            { time: '08:00', label: '早晨', desc: '适合记忆单词和语法', emoji: '🌅' },
            { time: '12:30', label: '午休', desc: '碎片时间，快速复习', emoji: '☀️' },
            { time: '20:00', label: '晚间', desc: '深度学习，口语练习', emoji: '🌙' },
            { time: '07:30', label: '通勤', desc: '听力和跟读练习', emoji: '🚇' },
          ].map(s => (
            <button
              key={s.time}
              onClick={() => {
                setReminderTime(s.time);
                localStorage.setItem('lingopal_reminder', JSON.stringify({ enabled, time: s.time }));
                calculateNextReminder(s.time);
              }}
              className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                reminderTime === s.time ? 'bg-brand-50 border border-brand-200' : 'bg-slate-50 hover:bg-slate-100'
              }`}
            >
              <span className="text-xl">{s.emoji}</span>
              <div className="flex-1">
                <p className="text-sm font-medium">{s.label} <span className="text-slate-400">{s.time}</span></p>
                <p className="text-xs text-slate-500">{s.desc}</p>
              </div>
              {reminderTime === s.time && <span className="text-brand-500 text-sm">✓</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { DailyReminder });
