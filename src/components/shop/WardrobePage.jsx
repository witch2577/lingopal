// ========== WardrobePage ==========
// 衣柜：管理已购穿戴类商品（穿上/脱下/切换）。
// 与 CharacterConfig 部件维度打通，穿戴状态持久化。

const { useState, useEffect, useMemo } = React;
const { motion, AnimatePresence } = window.Motion;

function WardrobePage({ onClose }) {
  const [activeSlot, setActiveSlot] = useState('top');
  const [message, setMessage] = useState(null);

  const charStore = useCharacterStore?.getState?.() || {};
  const config = charStore.config || {};
  const purchasedItems = config.purchasedItems || [];
  const equippedItems = config.equippedShopItems || { top: null, bottom: null, accessory: null, background: null };

  // Force re-render on store changes
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    const unsub = useCharacterStore?.subscribe?.(() => forceUpdate(v => v + 1));
    return () => unsub?.();
  }, []);

  const WARDROBE_SLOTS = [
    { key: 'top', label: '上装', icon: '👕' },
    { key: 'bottom', label: '下装', icon: '👖' },
    { key: 'accessory', label: '配饰', icon: '👓' },
    { key: 'background', label: '背景', icon: '🏠' },
  ];

  // Items purchased for the active slot
  const slotItems = useMemo(() => {
    return purchasedItems
      .map(id => SHOP_ITEMS_BY_ID[id])
      .filter(item => item && item.wearSlot === activeSlot);
  }, [purchasedItems, activeSlot]);

  const handleEquip = (itemId) => {
    const result = equipShopItem(itemId);
    if (result.success) {
      setMessage({ type: 'success', text: '已穿戴！' });
      setTimeout(() => setMessage(null), 1500);
    } else {
      setMessage({ type: 'error', text: result.error });
      setTimeout(() => setMessage(null), 2000);
    }
  };

  const handleUnequip = () => {
    const result = unequipShopItem(activeSlot);
    if (result.success) {
      setMessage({ type: 'success', text: '已脱下！' });
      setTimeout(() => setMessage(null), 1500);
    }
  };

  // Build preview config with all equipped items applied
  const previewConfig = useMemo(() => {
    if (!config) return null;
    const preview = { ...config };
    // Apply each equipped shop item to its config key
    for (const slot of WARDROBE_SLOTS) {
      const equippedId = equippedItems[slot.key];
      if (equippedId) {
        const shopItem = SHOP_ITEMS_BY_ID[equippedId];
        if (shopItem && shopItem.itemId) {
          const partId = resolveShopItemPartId(shopItem, config.gender || 'girl');
          const catKey = CATEGORY_CONFIG_KEY[slot.key];
          if (catKey && catKey !== 'gender') {
            preview[catKey] = partId || shopItem.itemId;
          }
        }
      } else {
        // Use default for unequipped slot
        const defaults = getDefaultCharacterConfig();
        const catKey = CATEGORY_CONFIG_KEY[slot.key];
        if (catKey && catKey !== 'gender') {
          preview[catKey] = config[catKey] || defaults[catKey];
        }
      }
    }
    return preview;
  }, [config, equippedItems]);

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
        style={{ maxHeight: '92vh' }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-slate-200 rounded-full" />
        </div>

        <div className="overflow-y-auto px-5 pb-8" style={{ maxHeight: 'calc(92vh - 40px)' }}>
          {/* Title */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800">我的衣柜</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl">✕</button>
          </div>

          {/* Character preview */}
          <div className="flex justify-center mb-4">
            <div className="w-40 h-52 rounded-2xl bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-100 flex items-center justify-center overflow-hidden">
              {previewConfig ? (
                <CharacterRenderer
                  config={previewConfig}
                  width={150}
                  height={200}
                  transitionDuration={300}
                />
              ) : (
                <div className="text-4xl">👤</div>
              )}
            </div>
          </div>

          {/* Slot tabs */}
          <div className="flex gap-2 mb-4">
            {WARDROBE_SLOTS.map(slot => (
              <button
                key={slot.key}
                onClick={() => setActiveSlot(slot.key)}
                className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeSlot === slot.key
                    ? 'bg-indigo-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="text-lg">{slot.icon}</span>
                <span className="text-xs">{slot.label}</span>
              </button>
            ))}
          </div>

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

          {/* Currently equipped */}
          {equippedItems[activeSlot] && (
            <div className="mb-3 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">
                    {SHOP_ITEMS_BY_ID[equippedItems[activeSlot]]?.icon || '👕'}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-indigo-800">
                      {SHOP_ITEMS_BY_ID[equippedItems[activeSlot]]?.name || '未知'}
                    </p>
                    <p className="text-xs text-indigo-500">当前穿戴中</p>
                  </div>
                </div>
                <button
                  onClick={handleUnequip}
                  className="px-3 py-1.5 bg-white text-indigo-600 text-xs font-medium rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors"
                >
                  脱下
                </button>
              </div>
            </div>
          )}

          {/* Item list */}
          <div className="space-y-2">
            {slotItems.length === 0 ? (
              <div className="text-center py-8 text-slate-400">
                <div className="text-3xl mb-2">🛍️</div>
                <p className="text-sm">该分类暂无已购商品</p>
                <p className="text-xs mt-1">去商城看看吧～</p>
              </div>
            ) : (
              slotItems.map(item => {
                const isEquipped = equippedItems[activeSlot] === item.id;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                      isEquipped
                        ? 'bg-indigo-50 border-indigo-300'
                        : 'bg-white border-slate-100 hover:border-indigo-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                        <p className="text-xs text-slate-400">{item.description}</p>
                      </div>
                    </div>
                    {isEquipped ? (
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                        穿戴中
                      </span>
                    ) : (
                      <button
                        onClick={() => handleEquip(item.id)}
                        className="px-3 py-1.5 bg-indigo-500 text-white text-xs font-medium rounded-lg hover:bg-indigo-600 transition-colors"
                      >
                        穿上
                      </button>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

Object.assign(window, { WardrobePage });
