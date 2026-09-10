// ========== Auth Page ==========
// Login / Register with mandatory invitation code.
// Unauthenticated users see ONLY this page.

const AuthPage = () => {
  const [mode, setMode] = React.useState('login'); // 'login' | 'register'
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [invitationCode, setInvitationCode] = React.useState('');
  const [error, setError] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const { isLoading, authError } = useAuthStore();
  const authStore = useAuthStore.getState();

  const { isMobile } = useMobileDetect();
  const reducedMotion = useReducedMotion();
  const animDuration = reducedMotion ? 0 : isMobile ? 0.12 : 0.2;

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('请填写邮箱和密码');
      return;
    }

    setIsSubmitting(true);
    try {
      await authStore.signIn(email.trim(), password);
      // Success: App will re-render and show main content
    } catch (e) {
      setError(e.message || '登录失败，请检查邮箱和密码');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim() || !invitationCode.trim()) {
      setError('请填写邮箱、密码和邀请码');
      return;
    }
    if (!validateEmail(email.trim())) {
      setError('请输入有效的邮箱地址');
      return;
    }
    if (password.length < 6) {
      setError('密码至少需要 6 位');
      return;
    }

    setIsSubmitting(true);
    try {
      await authStore.signUp(
        email.trim(),
        password,
        nickname.trim() || '语言学习者',
        invitationCode.trim()
      );
      // Success: App will re-render
    } catch (e) {
      setError(e.message || '注册失败');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMode = () => {
    setMode(prev => prev === 'login' ? 'register' : 'login');
    setError('');
  };

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center text-white text-2xl shadow-lg">
            🌍
          </div>
          <p className="text-sm text-slate-400">正在连接...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col items-center justify-center bg-slate-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animDuration }}
        className="w-full max-w-sm"
      >
        {/* Logo */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
            className="w-16 h-16 mx-auto rounded-2xl bg-brand-gradient flex items-center justify-center text-3xl mb-3 shadow-lg shadow-brand-500/30"
          >
            🌍
          </motion.div>
          <h1 className="text-xl font-bold text-slate-800 font-display">语伴 LingoPal</h1>
          <p className="text-xs text-slate-400 mt-0.5">多语言翻译 · 趣味方言学习</p>
        </div>

        {/* Mode tabs */}
        <div className="flex bg-slate-100 rounded-xl p-1 mb-5">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              mode === 'login'
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            登录
          </button>
          <button
            onClick={() => setMode('register')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              mode === 'register'
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            注册
          </button>
        </div>

        {/* Form */}
        <form onSubmit={mode === 'login' ? handleLogin : handleRegister} className="space-y-4">
          <div>
            <label className="text-sm text-slate-600 mb-1.5 block font-medium">邮箱</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-base bg-white"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600 mb-1.5 block font-medium">密码</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === 'register' ? '至少 6 位密码' : '输入密码'}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-base bg-white"
              autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
            />
          </div>

          {mode === 'register' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4"
            >
              <div>
                <label className="text-sm text-slate-600 mb-1.5 block font-medium">昵称</label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="给自己起个昵称"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-base bg-white"
                  maxLength={20}
                />
              </div>

              <div>
                <label className="text-sm text-slate-600 mb-1.5 block font-medium">
                  邀请码 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={invitationCode}
                  onChange={(e) => setInvitationCode(e.target.value)}
                  placeholder="输入邀请码（必填）"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-400 focus:outline-none text-base bg-white uppercase"
                  maxLength={32}
                />
                <p className="text-xs text-slate-400 mt-1.5">
                  需要有效邀请码才能注册，请联系管理员获取
                </p>
              </div>
            </motion.div>
          )}

          {/* Error message */}
          {(error || authError) && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-3 py-2.5 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600"
            >
              <Icon name="alert-circle" size={16} />
              <span>{error || authError}</span>
            </motion.div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3.5 rounded-xl font-semibold text-white text-base transition-all ${
              isSubmitting
                ? 'bg-slate-300 cursor-not-allowed'
                : 'bg-brand-gradient hover:shadow-lg hover:shadow-brand-500/25 active:scale-[0.98]'
            }`}
          >
            {isSubmitting
              ? (mode === 'login' ? '登录中...' : '注册中...')
              : (mode === 'login' ? '登录' : '注册')
            }
          </button>
        </form>

        {/* Supabase not configured warning */}
        {!IS_SUPABASE_CONFIGURED && (
          <div className="mt-4 px-3 py-2.5 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-700">
            <div className="flex items-center gap-1.5 mb-1">
              <Icon name="alert-triangle" size={14} />
              <span className="font-medium">Supabase 未配置</span>
            </div>
            <p className="text-amber-600">
              当前为本地演示模式。请在 <code className="bg-amber-100 px-1 rounded">src/core/supabaseConfig.jsx</code> 中填入你的 Supabase URL 和 Anon Key 后重新部署。
            </p>
          </div>
        )}

        {/* Footer hint */}
        <p className="text-center text-xs text-slate-400 mt-5">
          {mode === 'login'
            ? '还没有账号？注册需要邀请码'
            : '已有账号？直接登录'
          }
        </p>
      </motion.div>
    </div>
  );
};

Object.assign(window, { AuthPage });
