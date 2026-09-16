// ========== ConsumablesPanel ==========
// 消耗品库存面板：展示已购零食/食物的库存数量，
// 提供喂食交互（调用 MoodEngine 或直连 growth 更新）。
// MVP 婴儿期喂食对象=婴儿形象；有每日上限、不抵消沉睡状态。

const { useState, useEffect, useMemo } = React;
const { motion, AnimatePresence } = window.Motion;

function ConsumablesPanel({ onClose }) {
  const [message, setMessage] = useState(null);
  const [feedingId, setFeedingId] = useState(null);

  // Force re-render on store changes
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    const unsub = useCharacterStore?.subscribe?.(() => forceUpdate(v => v + 1));
    return () => unsub?.();
  }, []);

  const inventory = useMemo(() => getConsumableInventory(), []);
  const dailyFeed = useMemo(() => getDailyFeedCounts(), []);

  const consumableItems = useMemo(() => {
    return SHOP_ITEMS.filter(item => item.category === 'consumable');
  }, []);

  const charStore = useCharacterStore?.getState?.() || {};
  const growth = charStore.growth || {};
  const isSick = growth.currentMood === 'sick';

  const handleFeed = (itemId) => {
    setFeedingId(itemId);
    setMessage(null);

    const result = feedConsumable(itemId);
    setFeedingId(null);

    if (result.success) {
      setMessage({
        type: 'success',
        text: `喂食成功！心情 +${result.moodBoost} 😊（剩余 ${result.remaining} 个）`,
      });
      // Refresh inventory display
      forceUpdate(v => v + 1);
      setTimeout(() => setMessage(null), 2500);
    } else {
      setMessage({ type: 'error', text: result.error });
      setTimeout(() => setMessage(null), 2500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="relative w-full max-w-lg bg-white rounded-t-3xl overflow-hidden"
        style={{ maxHeight: '90vh' }}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-slate-200 rounded-full" />
        </div>

        <div className="overflow-y-auto px-5 pb-8" style={{ maxHeight: 'calc(90vh - 40px)' }}>
          {/* Title */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-800">我的零食</h2>
              <p className="text-xs text-slate-400 mt-0.5">喂食可以提升角色心情</p>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl">✕</button>
          </div>

          {/* Sick warning */}
          {isSick && (
            <div className="mb-3 p-3 bg-slate-100 rounded-xl border border-slate-200 flex items-center gap-2">
              <span className="text-lg">😴</span>
              <span className="text-sm text-slate-500">角色正在沉睡，暂时无法喂食</span>
            </div>
          )}

          {/* Message */}
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className={`mb-3 px-4 py-2 rounded-xl text-sm text-center ${
                  message.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'
                }`}
              >
                {message.text}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Consumables list */}
          <div className="space-y-3">
            {consumableItems.map(item => {
              const count = inventory[item.id] || 0;
              const dailyCount = dailyFeed.counts[item.id] || 0;
              const dailyLimit = item.dailyLimit || 0;
              const remainingDaily = Math.max(0, dailyLimit - dailyCount);
              const canFeed = count > 0 && remainingDaily > 0 && !isSick;

              return (
                <div
                  key={item.id}
                  className="p-3 bg-white rounded-2xl border border-slate-100"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-orange-50 flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-slate-800">{item.name}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          count > 0 ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-400'
                        }`}>
                          库存 {count}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-xs text-pink-500">
                          心情 +{item.effect?.moodBoost || 0}
                        </span>
                        <span className="text-xs text-slate-400">
                          今日 {dailyCount}/{dailyLimit}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feed button */}
                  <div className="mt-2.5 flex justify-end">
                    <button
                      onClick={() => handleFeed(item.id)}
                      disabled={!canFeed || feedingId === item.id}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                        canFeed
                          ? 'bg-gradient-to-r from-pink-400 to-orange-400 text-white hover:shadow-md active:scale-[0.98]'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {feedingId === item.id
                        ? '喂食中...'
                        : count <= 0
                        ? '库存不足'
                        : remainingDaily <= 0
                        ? '今日已达上限'
                        : isSick
                        ? '角色沉睡中'
                        : '🍽️ 喂食'}
                    </button>
                  </div>
                </div>
              );
            })}

            {consumableItems.length === 0 && (
              <div className="text-center py-8 text-slate-400">
                <div className="text-3xl mb-2">🍪</div>
                <p className="text-sm">暂无消耗品</p>
                <p className="text-xs mt-1">去商城购买零食吧～</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

Object.assign(window, { ConsumablesPanel });
