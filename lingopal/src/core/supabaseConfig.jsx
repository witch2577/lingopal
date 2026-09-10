// ========== Supabase Configuration & Client ==========
// Placeholders — user fills in after creating Supabase project

const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';

const IS_SUPABASE_CONFIGURED =
  SUPABASE_URL &&
  SUPABASE_ANON_KEY &&
  !SUPABASE_URL.includes('your-project') &&
  !SUPABASE_ANON_KEY.includes('your-anon-key');

let _supabaseClient = null;

function getSupabaseClient() {
  if (!IS_SUPABASE_CONFIGURED) return null;
  if (_supabaseClient) return _supabaseClient;

  if (typeof supabase === 'undefined' || !supabase.createClient) {
    console.warn('[Supabase] SDK not loaded');
    return null;
  }

  _supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  });

  return _supabaseClient;
}

Object.assign(window, {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  IS_SUPABASE_CONFIGURED,
  getSupabaseClient,
});
