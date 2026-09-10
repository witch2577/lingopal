// ========== Admin Dashboard ==========
// Admin-only: invitation codes, user list, tier management.
// Only accessible when isAdmin === true.

const AdminPage = ({ onClose }) => {
  const [activeTab, setActiveTab] = React.useState('codes'); // codes | users
  const [codes, setCodes] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [notification, setNotification] = React.useState(null);

  // Generate code form
  const [newTier, setNewTier] = React.useState('free');
  const [newMaxUses, setNewMaxUses] = React.useState(1);
  const [newExpiresDays, setNewExpiresDays] = React.useState(7);
  const [generating, setGenerating] = React.useState(false);

  const authStore = useAuthStore.getState();
  const { isAdmin } = useAuthStore();

  const showNotif = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Load data
  const loadCodes = async () => {
    setLoading(true);
    try {
      const data = await authStore.listInvitationCodes();
      setCodes(data || []);
    } catch (e) {
      showNotif(e.message || '加载邀请码失败', 'error');
    } finally {
      setLoading(false);
    }
  };

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await authStore.listUsers();
      setUsers(data || []);
    } catch (e) {
      showNotif(e.message || '加载用户列表失败', 'error');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (activeTab === 'codes') loadCodes();
    else loadUsers();
  }, [activeTab]);

  // Generate invitation code
  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const expiresAt = newExpiresDays > 0
        ? new Date(Date.now() + newExpiresDays * 86400000).toISOString()
        : null;

      const code = await authStore.generateInvitationCode(
        newTier,
        parseInt(newMaxUses) || 1,
        expiresAt
      );
      showNotif(`邀请码已生成：${code.code}`);
      await loadCodes();
    } catch (e) {
      showNotif(e.message || '生成失败', 'error');
    } finally {
      setGenerating(false);
    }
  };

  // Set user tier
  const handleSetTier = async (userId, tier) => {
    try {
      await authStore.setUserTier(userId, tier);
      showNotif('用户等级已更新');
      await loadUsers();
    } catch (e) {
      showNotif(e.message || '更新失败', 'error');
    }
  };

  // Reset user quota
  const handleResetQuota = async (userId) => {
    try {
      await authStore.resetUserQuota(userId);
      showNotif('当日配额已重置');
      await loadUsers();
    } catch (e) {
      showNotif(e.message || '重置失败', 'error');
    }
  };

  if (!isAdmin) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="text-center">
          <Icon name="lock" size={48} className="text-slate-300 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-slate-700">权限不足</h2>
          <p className="text-sm text-slate-400 mt-1">只有管理员可以访问此页面</p>
          {onClose && (
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-brand-500 text-white rounded-xl text-sm font-medium"
            >
              返回
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Icon name="shield" size={20} className="text-brand-500" />
          <h1 className="font-bold text-slate-800">管理后台</h1>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100">
            <Icon name="x" size={20} className="text-slate-400" />
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex bg-white px-4 border-b border-slate-100">
        {[
          { key: 'codes', label: '邀请码', icon: 'key' },
          { key: 'users', label: '用户管理', icon: 'users' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 transition-all ${
              activeTab === tab.key
                ? 'border-brand-500 text-brand-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Notification */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mx-4 mt-3 px-3 py-2 rounded-xl text-sm flex items-center gap-2 ${
            notification.type === 'error'
              ? 'bg-red-50 text-red-600 border border-red-100'
              : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
          }`}
        >
          <Icon name={notification.type === 'error' ? 'alert-circle' : 'check-circle'} size={16} />
          {notification.msg}
        </motion.div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-4">
        {activeTab === 'codes' && (
          <div className="space-y-4">
            {/* Generate form */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">生成邀请码</h3>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">绑定等级</label>
                  <select
                    value={newTier}
                    onChange={(e) => setNewTier(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 text-sm bg-white"
                  >
                    <option value="free">Free</option>
                    <option value="pro">Pro</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">可用次数</label>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={newMaxUses}
                    onChange={(e) => setNewMaxUses(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">有效期（天）</label>
                  <input
                    type="number"
                    min={0}
                    value={newExpiresDays}
                    onChange={(e) => setNewExpiresDays(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 text-sm"
                  />
                </div>
              </div>
              <button
                onClick={handleGenerate}
                disabled={generating}
                className={`w-full py-2.5 rounded-xl font-medium text-sm text-white transition-all ${
                  generating
                    ? 'bg-slate-300 cursor-not-allowed'
                    : 'bg-brand-gradient hover:shadow-md active:scale-[0.98]'
                }`}
              >
                {generating ? '生成中...' : '生成邀请码'}
              </button>
            </div>

            {/* Codes list */}
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-50 flex items-center justify-between">
                <h3 className="font-bold text-slate-800 text-sm">邀请码列表</h3>
                <span className="text-xs text-slate-400">{codes.length} 条</span>
              </div>
              {loading ? (
                <div className="p-8 text-center text-sm text-slate-400">加载中...</div>
              ) : codes.length === 0 ? (
                <div className="p-8 text-center text-sm text-slate-400">暂无邀请码</div>
              ) : (
                <div className="divide-y divide-slate-50">
                  {codes.map(code => (
                    <div key={code.id} className="px-4 py-3">
                      <div className="flex items-center justify-between mb-1">
                        <code className="text-sm font-mono font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-lg">
                          {code.code}
                        </code>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          code.used_count >= code.max_uses
                            ? 'bg-slate-100 text-slate-400'
                            : code.expires_at && new Date(code.expires_at) < new Date()
                              ? 'bg-red-50 text-red-500'
                              : 'bg-emerald-50 text-emerald-600'
                        }`}>
                          {code.used_count >= code.max_uses
                            ? '已用完'
                            : code.expires_at && new Date(code.expires_at) < new Date()
                              ? '已过期'
                              : '有效'
                          }
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span>等级: <span className="text-slate-600 font-medium">{code.tier_assigned}</span></span>
                        <span>已用: <span className="text-slate-600 font-medium">{code.used_count}/{code.max_uses}</span></span>
                        {code.expires_at && (
                          <span>过期: {new Date(code.expires_at).toLocaleDateString('zh-CN')}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-50 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-sm">用户列表</h3>
              <span className="text-xs text-slate-400">{users.length} 人</span>
            </div>
            {loading ? (
              <div className="p-8 text-center text-sm text-slate-400">加载中...</div>
            ) : users.length === 0 ? (
              <div className="p-8 text-center text-sm text-slate-400">暂无用户</div>
            ) : (
              <div className="divide-y divide-slate-50">
                {users.map(u => (
                  <div key={u.id} className="px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-700">
                          {u.nickname || '未命名'}
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          u.role === 'admin'
                            ? 'bg-brand-100 text-brand-600'
                            : 'bg-slate-100 text-slate-500'
                        }`}>
                          {u.role === 'admin' ? '管理员' : '用户'}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600">
                          {u.tier}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <select
                        value={u.tier}
                        onChange={(e) => handleSetTier(u.id, e.target.value)}
                        className="text-xs px-2 py-1 rounded-lg border border-slate-200 bg-white"
                      >
                        <option value="free">free</option>
                        <option value="pro">pro</option>
                        <option value="enterprise">enterprise</option>
                      </select>
                      <button
                        onClick={() => handleResetQuota(u.id)}
                        className="text-xs px-2 py-1 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
                      >
                        重置配额
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Object.assign(window, { AdminPage });
