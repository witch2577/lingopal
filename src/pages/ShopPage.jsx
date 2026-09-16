// ========== ShopPage ==========
// Main shop page with category tabs, item grid, SC balance display,
// and item detail modal with real-time try-on preview.
// Anime-style UI with soft pastels and rounded cards.

const { useState, useEffect, useMemo, useCallback } = React;
const { motion, AnimatePresence } = window.Motion;

function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('top');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showWardrobe, setShowWardrobe] = useState(false);
  const [showConsumables, setShowConsumables] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  const [purchaseError, setPurchaseError] = useState(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState(null);
  const [balanceAnim, setBalanceAnim] = useState(false);

  const charStore = useCharacterStore?.getState?.() || {};
  const config = charStore.config || {};
  const starCoin = config.starCoin || 0;
  const purchasedItems = config.purchasedItems || [];
  const equippedItems = config.equippedShopItems || { top: null, bottom: null, accessory: null, background: null };

  // Force re-render on store changes
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    const unsub = useCharacterStore?.subscribe?.(() => forceUpdate(v => v + 1));
    return () => unsub?.();
  }, []);

  const itemsInCategory = useMemo(() => {
    return SHOP_ITEMS_BY_CATEGORY[activeCategory] || [];
  }, [activeCategory]);

  const handlePurchase = useCallback((itemId) => {
    setPurchaseError(null);
    setPurchaseSuccess(null);
    const result = purchaseShopItem(itemId);
    if (result.success) {
      setPurchaseSuccess(`购买成功！余额: ${result.newBalance} SC`);
      setBalanceAnim(true);
      setTimeout(() => setBalanceAnim(false), 600);
      setTimeout(() => setPurchaseSuccess(null), 2500);
    } else {
      setPurchaseError(result.error);
      setTimeout(() => setPurchaseError(null), 3000);
    }
    return result;
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedItem(null);
    setPurchaseError(null);
    setPurchaseSuccess(null);
  }, []);

  return (
    <div className="min-h-full bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-indigo-100">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-indigo-700 tracking-tight" style={{ fontFamily: 'Poppins, Noto Sans SC, sans-serif' }}>
            星币商城
          </h1>
          <div className="flex items-center gap-2">
            <motion.div
              animate={balanceAnim ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-100 to-yellow-100 px-3 py-1.5 rounded-full border border-amber-200"
            >
              <span className="text-lg">⭐</span>
              <span className="text-sm font-bold text-amber-700">{starCoin}</span>
              <span className="text-xs text-amber-600">SC</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="max-w-lg mx-auto px-4 pt-3 flex gap-2 overflow-x-auto">
        <button
          onClick={() => setShowWardrobe(true)}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium hover:bg-indigo-200 transition-colors"
        >
          <span>👗</span> 我的衣柜
        </button>
        <button
          onClick={() => setShowConsumables(true)}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-pink-100 text-pink-700 rounded-full text-xs font-medium hover:bg-pink-200 transition-colors"
        >
          <span>🍪</span> 消耗品
        </button>
        <button
          onClick={() => setShowTransactions(true)}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium hover:bg-emerald-200 transition-colors"
        >
          <span>📜</span> 流水
        </button>
      </div>

      {/* Category tabs */}
      <div className="max-w-lg mx-auto px-4 pt-3">
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide">
          {SHOP_CATEGORY_ORDER.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-200'
                  : 'bg-white text-slate-600 hover:bg-indigo-50 border border-slate-100'
              }`}
            >
              {SHOP_CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Notification bar */}
      <AnimatePresence>
        {purchaseError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-lg mx-auto px-4 pt-2"
          >
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-xl text-sm flex items-center gap-2">
              <span>⚠️</span> {purchaseError}
            </div>
          </motion.div>
        )}
        {purchaseSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-lg mx-auto px-4 pt-2"
          >
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-xl text-sm flex items-center gap-2">
              <span>✅</span> {purchaseSuccess}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Item grid */}
      <div className="max-w-lg mx-auto px-4 pt-4">
        <div className="grid grid-cols-2 gap-3">
          <AnimatePresence mode="popLayout">
            {itemsInCategory.map((item, index) => (
              <ShopItemCard
                key={item.id}
                item={item}
                index={index}
                isPurchased={purchasedItems.includes(item.id)}
                isEquipped={equippedItems[item.wearSlot] === item.id}
                isUnlocked={isShopItemUnlocked(item)}
                starCoin={starCoin}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Item detail modal */}
      <AnimatePresence>
        {selectedItem && (
          <ShopItemDetail
            item={selectedItem}
            isPurchased={purchasedItems.includes(selectedItem.id)}
            isEquipped={equippedItems[selectedItem.wearSlot] === selectedItem.id}
            isUnlocked={isShopItemUnlocked(selectedItem)}
            starCoin={starCoin}
            onClose={handleCloseDetail}
            onPurchase={handlePurchase}
          />
        )}
      </AnimatePresence>

      {/* Wardrobe modal */}
      <AnimatePresence>
        {showWardrobe && (
          <WardrobePage onClose={() => setShowWardrobe(false)} />
        )}
      </AnimatePresence>

      {/* Consumables modal */}
      <AnimatePresence>
        {showConsumables && (
          <ConsumablesPanel onClose={() => setShowConsumables(false)} />
        )}
      </AnimatePresence>

      {/* Transactions modal */}
      <AnimatePresence>
        {showTransactions && (
          <TransactionHistoryPanel onClose={() => setShowTransactions(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

Object.assign(window, { ShopPage });
