// ========== OptionGrid ==========
// 展示某个维度下的可选部件网格
// Props: items, selectedId, onSelect(id), lockedIds, showLock

const { motion } = window.Motion;

function OptionGrid({ items, selectedId, onSelect, lockedIds = [], showLock = true }) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-6 text-slate-400 text-sm">
        暂无可用选项
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
      {items.map((item) => {
        const isLocked = showLock && lockedIds.includes(item.id);
        const isSelected = selectedId === item.id;

        return (
          <motion.button
            key={item.id}
            whileTap={isLocked ? {} : { scale: 0.92 }}
            onClick={() => {
              if (!isLocked) onSelect(item.id);
            }}
            className={`relative flex flex-col items-center gap-1.5 p-2 rounded-xl border-2 transition-all ${
              isSelected
                ? 'border-brand-400 bg-brand-50/80 shadow-sm'
                : isLocked
                  ? 'border-slate-100 bg-slate-50/60 opacity-60 cursor-not-allowed'
                  : 'border-slate-100 bg-white hover:border-brand-200 hover:shadow-sm cursor-pointer'
            }`}
            disabled={isLocked}
            aria-label={item.name}
            title={isLocked ? `${item.name}（未解锁）` : item.name}
          >
            {/* 占位缩略图 */}
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg ${
                isSelected
                  ? 'bg-brand-100 text-brand-600'
                  : isLocked
                    ? 'bg-slate-100 text-slate-300'
                    : 'bg-slate-50 text-slate-400'
              }`}
            >
              {isLocked ? (
                <span className="text-base">🔒</span>
              ) : (
                <span className="text-base">
                  {item.layer === 'hairBack' || item.layer === 'hairFront' ? '💇'
                    : item.layer === 'eyes' ? '👁️'
                    : item.layer === 'eyebrows' ? '✨'
                    : item.layer === 'mouth' ? '👄'
                    : item.layer === 'face' ? '😊'
                    : item.layer === 'top' ? '👕'
                    : item.layer === 'bottom' ? '👖'
                    : item.layer === 'accessory' ? '🎀'
                    : item.layer === 'background' ? '🖼️'
                    : '✨'}
                </span>
              )}
            </div>
            <span className={`text-[10px] font-medium truncate w-full text-center ${
              isSelected ? 'text-brand-600' : isLocked ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {item.name}
            </span>
            {isLocked && item.unlockCondition && (
              <span className="absolute top-1 right-1">
                <span className="inline-flex items-center px-1 py-0.5 rounded text-[9px] font-semibold bg-slate-200 text-slate-500">
                  {item.unlockCondition.type === 'gp' ? `GP ${item.unlockCondition.minGP}`
                    : item.unlockCondition.type === 'streak' ? `连胜 ${item.unlockCondition.minStreak} 天`
                    : item.unlockCondition.type === 'achievement' ? '成就'
                    : '锁定'}
                </span>
              </span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

Object.assign(window, { OptionGrid });
