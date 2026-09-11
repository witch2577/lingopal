// ========== Auth Store ==========
// Manages Supabase auth state, profiles, quotas, and admin features.
// Falls back to local-only mode when Supabase is not configured.

const { create } = zustand;

const useAuthStore = create((set, get) => ({
  // Auth state
  supabaseUser: null,
  supabaseProfile: null,
  isLoggedIn: false,
  isAdmin: false,
  isLoading: true,
  authError: null,

  // Quota state
  tierConfig: null,
  dailyUsage: null,
  quotaError: null,

  // Init: check existing session
  init: async () => {
    const sb = getSupabaseClient();
    if (!sb) {
      set({ isLoading: false });
      return null;
    }

    try {
      const { data: { session }, error } = await sb.auth.getSession();
      if (error) throw error;

      if (session?.user) {
        await get()._loadUserData(session.user);
      } else {
        set({ isLoading: false });
      }
    } catch (e) {
      console.error('[AuthStore] init error:', e);
      set({ isLoading: false, authError: e.message });
    }
  },

  // Internal: load profile, tier, quota after auth
  _loadUserData: async (user) => {
    const sb = getSupabaseClient();
    if (!sb || !user) return;

    try {
      // Load profile
      const { data: profile, error: pErr } = await sb
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (pErr) {
        // Profile may not exist yet (rare race condition)
        console.warn('[AuthStore] profile load error:', pErr.message);
      }

      const isAdmin = profile?.role === 'admin';

      // Load tier config
      let tierConfig = null;
      if (profile?.tier) {
        const { data: tc } = await sb
          .from('tier_configs')
          .select('*')
          .eq('tier', profile.tier)
          .single();
        tierConfig = tc;
      }

      // Load today's usage
      let dailyUsage = null;
      const today = new Date().toISOString().split('T')[0];
      const { data: du } = await sb
        .from('daily_usage')
        .select('*')
        .eq('user_id', user.id)
        .eq('usage_date', today)
        .single();
      dailyUsage = du;

      set({
        supabaseUser: user,
        supabaseProfile: profile,
        isLoggedIn: true,
        isAdmin,
        isLoading: false,
        tierConfig,
        dailyUsage,
        authError: null,
      });

      // Sync local Dexie profile for offline compatibility
      if (profile && window.db) {
        await db.userProfiles.update(get()._localUserId(), {
          nickname: profile.nickname || '语言学习者',
          targetLanguages: profile.target_languages || ['en'],
          languageLevel: profile.language_level || 'beginner',
          learningGoal: profile.learning_goal || 'hobby',
          dailyMinutes: profile.daily_minutes || '15min',
          learningStyle: profile.learning_style || 'mixed',
          knownLanguages: profile.known_languages || ['zh-CN'],
          weakAreas: profile.weak_areas || ['vocabulary'],
          studyTimePreference: profile.study_time_preference || 'evening',
        }).catch(() => {});
      }

      return profile;
    } catch (e) {
      console.error('[AuthStore] _loadUserData error:', e);
      set({ isLoading: false });
      return null;
    }
  },

  // Get or create a stable local userId for Dexie compatibility
  _localUserId: () => {
    const state = get();
    if (state.supabaseUser?.id) {
      // Cache local id mapping
      try {
        localStorage.setItem('lingopal_local_user_id', state.supabaseUser.id);
      } catch (e) {}
      return state.supabaseUser.id;
    }
    const cached = localStorage.getItem('lingopal_local_user_id');
    if (cached) return cached;
    return 'local_' + Date.now();
  },

  // Sign up with invitation code
  signUp: async (email, password, nickname, invitationCode) => {
    const sb = getSupabaseClient();
    if (!sb) {
      throw new Error('Supabase 未配置，无法注册');
    }

    set({ isLoading: true, authError: null });

    try {
      // Step 1: Supabase Auth sign up
      const { data: authData, error: authError } = await sb.auth.signUp({
        email,
        password,
        options: {
          data: { nickname: nickname || '语言学习者' },
        },
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error('注册失败，未返回用户信息');

      // Step 2: Wait a moment for trigger to create profile
      await new Promise(r => setTimeout(r, 500));

      // Step 3: Verify and consume invitation code
      const { data: inviteResult, error: inviteError } = await sb
        .rpc('verify_and_consume_invitation_code', {
          p_code: invitationCode.trim().toUpperCase(),
        });

      if (inviteError) {
        console.error('[AuthStore] invite RPC error:', inviteError);
        throw new Error('邀请码验证失败：' + inviteError.message);
      }

      if (!inviteResult?.success) {
        throw new Error(inviteResult?.error || '邀请码无效');
      }

      // Step 4: Refresh session and load user data
      const { data: { session } } = await sb.auth.getSession();
      if (session?.user) {
        await get()._loadUserData(session.user);
      }

      set({ isLoading: false });
      return { user: authData.user, tier: inviteResult.tier };
    } catch (e) {
      set({ isLoading: false, authError: e.message });
      throw e;
    }
  },

  // Sign in
  signIn: async (email, password) => {
    const sb = getSupabaseClient();
    if (!sb) {
      throw new Error('Supabase 未配置，无法登录');
    }

    set({ isLoading: true, authError: null });

    try {
      const { data, error } = await sb.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      if (!data.user) throw new Error('登录失败');

      await get()._loadUserData(data.user);
      set({ isLoading: false });
      return data.user;
    } catch (e) {
      set({ isLoading: false, authError: e.message });
      throw e;
    }
  },

  // Sign out
  signOut: async () => {
    const sb = getSupabaseClient();
    if (sb) {
      await sb.auth.signOut().catch(() => {});
    }
    set({
      supabaseUser: null,
      supabaseProfile: null,
      isLoggedIn: false,
      isAdmin: false,
      tierConfig: null,
      dailyUsage: null,
      authError: null,
    });
  },

  // Refresh user data (after admin changes, etc.)
  refreshProfile: async () => {
    const sb = getSupabaseClient();
    const user = get().supabaseUser;
    if (!sb || !user) return;
    await get()._loadUserData(user);
  },

  // === Quota Management ===

  // Consume AI quota before making an API call
  consumeQuota: async (usageType) => {
    const sb = getSupabaseClient();
    if (!sb || !get().isLoggedIn) {
      // Local mode: no quota enforcement
      return { allowed: true, localMode: true };
    }

    try {
      const { data, error } = await sb
        .rpc('consume_ai_quota', { p_usage_type: usageType });

      if (error) {
        console.warn('[AuthStore] quota RPC error:', error);
        // Fail closed: RPC errors should block usage
        return { allowed: false, error: 'quota_check_failed' };
      }

      // Refresh daily usage in state
      if (data?.allowed) {
        set(state => ({
          dailyUsage: {
            ...(state.dailyUsage || {}),
            [`${usageType}_count`]: data.used,
          },
          quotaError: null,
        }));
      }

      return data || { allowed: false, error: '未知错误' };
    } catch (e) {
      console.warn('[AuthStore] consumeQuota error:', e);
      // Fail closed: network/unexpected errors should block usage
      return { allowed: false, error: 'quota_check_failed' };
    }
  },

  // Get current quota status (for UI display)
  getQuotaStatus: () => {
    const state = get();
    if (!state.tierConfig) return null;

    const usage = state.dailyUsage || {};
    return {
      tier: state.supabaseProfile?.tier || 'free',
      translation: {
        used: usage.translation_count || 0,
        limit: state.tierConfig.daily_translation_limit || 50,
      },
      aiDialogue: {
        used: usage.ai_dialogue_count || 0,
        limit: state.tierConfig.daily_ai_dialogue_limit || 20,
      },
      aiTTS: {
        used: usage.ai_tts_count || 0,
        limit: state.tierConfig.daily_ai_tts_limit || 50,
      },
      ocr: {
        used: usage.ocr_count || 0,
        limit: state.tierConfig.daily_ocr_limit || 20,
      },
      linkParser: {
        used: usage.link_parser_count || 0,
        limit: state.tierConfig.daily_link_parser_limit || 5,
      },
    };
  },

  // === Admin Functions ===

  // Generate invitation code
  generateInvitationCode: async (tier, maxUses, expiresAt) => {
    const sb = getSupabaseClient();
    if (!sb || !get().isAdmin) {
      throw new Error('权限不足');
    }

    const code = 'LP-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    const { data, error } = await sb
      .from('invitation_codes')
      .insert({
        code,
        created_by: get().supabaseUser.id,
        tier_assigned: tier || 'free',
        max_uses: maxUses || 1,
        expires_at: expiresAt || null,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // List invitation codes
  listInvitationCodes: async () => {
    const sb = getSupabaseClient();
    if (!sb || !get().isAdmin) {
      throw new Error('权限不足');
    }

    const { data, error } = await sb
      .from('invitation_codes')
      .select('*, invitation_usage(count)')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // List users (admin only)
  listUsers: async () => {
    const sb = getSupabaseClient();
    if (!sb || !get().isAdmin) {
      throw new Error('权限不足');
    }

    // Fix: profiles 与 daily_usage 无外键，PostgREST 嵌套查询会报
    // "Could not find a relationship ... in the schema cache"。
    // 改为两次独立查询后内存合并，数据形状与原嵌套查询保持兼容（数组）。
    const { data: profiles, error: pError } = await sb
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);

    if (pError) throw pError;
    if (!profiles || profiles.length === 0) return [];

    const userIds = profiles.map((p) => p.id);
    const { data: usages, error: uError } = await sb
      .from('daily_usage')
      .select('*')
      .in('user_id', userIds);

    if (uError) throw uError;

    const usageMap = new Map();
    (usages || []).forEach((u) => usageMap.set(u.user_id, u));
    const merged = profiles.map((p) => ({
      ...p,
      daily_usage: usageMap.has(p.id) ? [usageMap.get(p.id)] : [],
    }));
    return merged;
  },

  // Set user tier (admin only)
  setUserTier: async (targetUserId, newTier, expiresAt) => {
    const sb = getSupabaseClient();
    if (!sb || !get().isAdmin) {
      throw new Error('权限不足');
    }

    const { data, error } = await sb
      .rpc('admin_set_user_tier', {
        p_target_user_id: targetUserId,
        p_new_tier: newTier,
        p_expires_at: expiresAt || null,
      });

    if (error) throw error;
    return data;
  },

  // Reset user daily quota (admin only)
  resetUserQuota: async (targetUserId) => {
    const sb = getSupabaseClient();
    if (!sb || !get().isAdmin) {
      throw new Error('权限不足');
    }

    const today = new Date().toISOString().split('T')[0];
    const { data, error } = await sb
      .from('daily_usage')
      .delete()
      .eq('user_id', targetUserId)
      .eq('usage_date', today);

    if (error) throw error;
    return data;
  },
}));

Object.assign(window, { useAuthStore });
