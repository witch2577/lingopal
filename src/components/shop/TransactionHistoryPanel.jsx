// ========== TransactionHistoryPanel ==========
// 星币流水记录面板：展示 SC 的获取与消费明细。

const { useState, useEffect, useMemo } = React;
const { motion } = window.Motion;

function TransactionHistoryPanel({ onClose }) {
  const [filter, setFilter] = useState('all');

  const transactions = useMemo(() => getTransactionHistory(100), []);

  const filteredTransactions = useMemo(() => {
    if (filter === 'all') return transactions;
    return transactions.filter(tx => tx.type === filter);
  }, [transactions, filter]);

  const formatDate = (timestamp) => {
    if (!timestamp) return '-';
    const d = new Date(timestamp);
    return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  };

  const typeLabels = {
    purchase: '购买',
    feed: '喂食',
    grant_onboarding: '新手奖励',
    grant_first_goal: '首目标奖励',
    refund: '退款',
  };

  const typeIcons = {
    purchase: '🛒',
    feed: '🍽️',
    grant_onboarding: '🎁',
    grant_first_goal: '🎯',
    refund: '↩️',
  };

  const filterOptions = [
    { key: 'all', label: '全部' },
    { key: 'purchase', label: '购买' },
    { key: 'grant_onboarding', label: '奖励' },
    { key: 'feed', label: '喂食' },
  ];

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
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-bold text-slate-800">星币流水</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                余额: <span className="font-bold text-amber-600">{getStarCoinBalance()}</span> SC
              </p>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl">✕</button>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1.5 mb-4 overflow-x-auto">
            {filterOptions.map(opt => (
              <button
                key={opt.key}
                onClick={() => setFilter(opt.key)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === opt.key
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Transaction list */}
          <div className="space-y-2">
            {filteredTransactions.length === 0 ? (
              <div className="text-center py-8 text-slate-400">
                <div className="text-3xl mb-2">📜</div>
                <p className="text-sm">暂无流水记录</p>
              </div>
            ) : (
              filteredTransactions.map(tx => {
                const isIncome = tx.amount > 0;
                const itemName = tx.itemId ? (SHOP_ITEMS_BY_ID[tx.itemId]?.name || tx.itemId) : '';

                return (
                  <div
                    key={tx.id}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100"
                    style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
                      isIncome ? 'bg-emerald-50' : 'bg-amber-50'
                    }`}>
                      {typeIcons[tx.type] || '💰'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-800">
                          {typeLabels[tx.type] || tx.type}
                          {itemName && <span className="text-slate-400 font-normal"> · {itemName}</span>}
                        </span>
                        <span className={`text-sm font-bold ${isIncome ? 'text-emerald-600' : 'text-amber-600'}`}>
                          {isIncome ? '+' : ''}{tx.amount} SC
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-0.5">
                        <span className="text-xs text-slate-400">{tx.note || ''}</span>
                        <span className="text-xs text-slate-400">{formatDate(tx.timestamp)}</span>
                      </div>
                      {tx.balanceBefore != null && tx.balanceAfter != null && (
                        <div className="text-xs text-slate-300 mt-0.5">
                          余额 {tx.balanceBefore} → {tx.balanceAfter}
                        </div>
                      )}
                    </div>
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

Object.assign(window, { TransactionHistoryPanel });
