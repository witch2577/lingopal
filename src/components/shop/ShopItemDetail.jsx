// ========== ShopItemDetail ==========
// Full-screen modal showing item details with real-time try-on preview.
// Uses CharacterRenderer with a temporary config that overlays the shop item.
// Preview renders the "youth stage" baseline appearance (user's捏脸 config).

const { useState, useEffect, useMemo } = React;
const { motion } = window.Motion;

function ShopItemDetail({ item, isPurchased, isEquipped, isUnlocked, starCoin, onClose, onPurchase }) {
  const [isTrying, setIsTrying] = useState(false);
  const [purchaseLoading, setPurchaseLoading] = useState(false);
  const [localError, setLocalError] = useState(null);
  const [localSuccess, setLocalSuccess] = useState(null);

  const charStore = useCharacterStore?.getState?.() || {};
  const config = charStore.config;
  const canAfford = starCoin >= item.price;
  const isLocked = !isUnlocked;
  const isConsumable = item.category === 'consumable';

  // Build preview config: user's捏脸 with the shop item overlaid
  const previewConfig = useMemo(() => {
    if (!config || !item.wearSlot) return config;
    const tryConfig = { ...config };
    // Map shop item to CharacterItems part ID
    const partId = resolveShopItemPartId(item, config.gender || 'girl');
    if (partId) {
      // For try-on, we temporarily set the corresponding config key
      const catKey = CATEGORY_CONFIG_KEY[item.wearSlot];
      if (catKey && catKey !== 'gender') {
        tryConfig[catKey] = partId;
      }
    }
    return tryConfig;
  }, [config, item]);

  const handlePurchase = async () => {
    setPurchaseLoading(true);
    setLocalError(null);
    const result = onPurchase(item.id);
    setPurchaseLoading(false);
    if (result.success) {
      setLocalSuccess('购买成功！');
      setTimeout(() => setLocalSuccess(null), 2000);
    } else {
      setLocalError(result.error);
    }
  };

  const handleEquip = () => {
    const result = equipShopItem(item.id);
    if (result.success) {
      setLocalSuccess('已穿戴！');
      setTimeout(() => setLocalSuccess(null), 1500);
    } else {
      setLocalError(result.error);
    }
  };

  const handleUnequip = () => {
    const result = unequipShopItem(item.wearSlot);
    if (result.success) {
      setLocalSuccess('已脱下！');
      setTimeout(() => setLocalSuccess(null), 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal content */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="relative w-full max-w-lg bg-white rounded-t-3xl overflow-hidden"
        style={{ maxHeight: '90vh' }}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-slate-200 rounded-full" />
        </div>

        <div className="overflow-y-auto px-5 pb-8" style={{ maxHeight: 'calc(90vh - 40px)' }}>
          {/* Preview area */}
          <div className="flex flex-col items-center pt-2 pb-4">
            <div className="relative w-48 h-64 rounded-2xl bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-100 flex items-center justify-center overflow-hidden">
              {previewConfig && !isConsumable ? (
                <CharacterRenderer
                  config={isTrying ? previewConfig : config}
                  width={180}
                  height={240}
                  transitionDuration={300}
                />
              ) : (
                <div className="text-6xl">{item.icon}</div>
              )}
            </div>

            {/* Try-on toggle (only for wearables) */}
            {!isConsumable && !isLocked && (
              <button
                onClick={() => setIsTrying(v => !v)}
                className={`mt-3 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isTrying
                    ? 'bg-indigo-500 text-white'
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                }`}
              >
                {isTrying ? '👁️ 预览中' : '👁️ 试穿'}
              </button>
            )}
          </div>

          {/* Item info */}
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-slate-800">{item.name}</h2>
            <p className="text-sm text-slate-500">{item.description}</p>
            <div className="flex items-center justify-center gap-2">
              <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
                {SHOP_CATEGORY_LABELS[item.category]}
              </span>
              {item.gender !== 'universal' && (
                <span className="inline-block px-2 py-0.5 bg-pink-100 text-pink-600 text-xs rounded-full">
                  {item.gender === 'girl' ? '女' : '男'}专属
                </span>
              )}
            </div>
          </div>

          {/* Status messages */}
          {(localError || localSuccess) && (
            <div className={`mt-3 px-4 py-2 rounded-xl text-sm text-center ${
              localError ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'
            }`}>
              {localError || localSuccess}
            </div>
          )}

          {/* Price / Lock / Owned */}
          <div className="mt-4 flex items-center justify-center gap-3">
            {isLocked ? (
              <div className="flex items-center gap-2 text-slate-400 bg-slate-100 px-4 py-2 rounded-xl">
                <span className="text-lg">🔒</span>
                <span className="text-sm">{getUnlockDescription(item)}</span>
              </div>
            ) : isPurchased && !isConsumable ? (
              <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl">
                <span className="text-lg">✅</span>
                <span className="text-sm font-medium">已拥有</span>
              </div>
            ) : (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                canAfford ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-500'
              }`}>
                <span className="text-lg">⭐</span>
                <span className="text-lg font-bold">{item.price}</span>
                <span className="text-xs">SC</span>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="mt-5 space-y-2">
            {isLocked ? (
              <button
                disabled
                className="w-full py-3 rounded-xl bg-slate-200 text-slate-400 font-semibold text-sm cursor-not-allowed"
              >
                🔒 未解锁
              </button>
            ) : isPurchased && !isConsumable ? (
              isEquipped ? (
                <button
                  onClick={handleUnequip}
                  className="w-full py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
                >
                  脱下
                </button>
              ) : (
                <button
                  onClick={handleEquip}
                  className="w-full py-3 rounded-xl bg-indigo-500 text-white font-semibold text-sm hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-200"
                >
                  穿上
                </button>
              )
            ) : (
              <button
                onClick={handlePurchase}
                disabled={!canAfford || purchaseLoading}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  canAfford && !purchaseLoading
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-200 active:scale-[0.98]'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {purchaseLoading ? '购买中...' : canAfford ? `⭐ ${item.price} 购买` : '余额不足'}
              </button>
            )}
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

Object.assign(window, { ShopItemDetail });
