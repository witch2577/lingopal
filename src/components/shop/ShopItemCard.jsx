// ========== ShopItemCard ==========
// Compact card for shop grid. Shows placeholder icon, name, price,
// purchase/owned/equipped/locked states.

const { motion } = window.Motion;

function ShopItemCard({ item, index, isPurchased, isEquipped, isUnlocked, starCoin, onClick }) {
  const canAfford = starCoin >= item.price;
  const isLocked = !isUnlocked;
  const isConsumable = item.category === 'consumable';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      onClick={onClick}
      className={`relative bg-white rounded-2xl p-3 border-2 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 ${
        isEquipped
          ? 'border-indigo-400 shadow-indigo-100'
          : isPurchased && !isConsumable
          ? 'border-emerald-200'
          : isLocked
          ? 'border-slate-200 opacity-70'
          : canAfford
          ? 'border-white hover:border-indigo-200'
          : 'border-white hover:border-red-200'
      }`}
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
    >
      {/* Image or icon placeholder */}
      <div className="aspect-square rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-4xl mb-2 relative overflow-hidden">
        {item.image ? (
          <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-contain p-2" />
        ) : (
          <span className="relative z-10">{item.icon}</span>
        )}
        {isLocked && (
          <div className="absolute inset-0 bg-slate-100/80 flex items-center justify-center z-20">
            <span className="text-2xl">🔒</span>
          </div>
        )}
        {isEquipped && (
          <div className="absolute top-1 right-1 z-20 bg-indigo-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
            穿戴中
          </div>
        )}
        {isPurchased && !isConsumable && !isEquipped && (
          <div className="absolute top-1 right-1 z-20 bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
            已拥有
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-slate-800 truncate">{item.name}</h3>
        <div className="flex items-center justify-between">
          {isLocked ? (
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <span>🔒</span> {getUnlockDescription(item)}
            </span>
          ) : (
            <div className={`flex items-center gap-1 text-sm font-bold ${canAfford ? 'text-amber-600' : 'text-red-400'}`}>
              <span>⭐</span>
              <span>{item.price}</span>
            </div>
          )}
          {isConsumable && !isLocked && (
            <span className="text-[10px] bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded-full">
              消耗品
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

Object.assign(window, { ShopItemCard });
