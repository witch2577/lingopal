-- ============================================
-- LingoPal Supabase 数据库初始化脚本
-- 在 Supabase Dashboard → SQL Editor 中按顺序执行
-- ============================================

-- 1. 启用 UUID 扩展
-- ============================================
create extension if not exists "uuid-ossp";

-- 2. 等级配置表（管理员维护）
-- ============================================
create table tier_configs (
  tier text primary key check (tier in ('free', 'pro', 'enterprise')),
  daily_translation_limit int not null default 50,
  daily_ai_dialogue_limit int not null default 20,
  daily_ai_tts_limit int not null default 50,
  daily_ocr_limit int not null default 20,
  daily_link_parser_limit int not null default 5,
  description text,
  created_at timestamptz default now()
);

-- 初始化默认等级配置
insert into tier_configs (tier, daily_translation_limit, daily_ai_dialogue_limit, daily_ai_tts_limit, daily_ocr_limit, daily_link_parser_limit, description)
values
  ('free', 50, 20, 50, 20, 5, '免费用户，基础配额'),
  ('pro', 500, 200, 200, 100, 30, '专业用户，更高配额'),
  ('enterprise', 999999, 999999, 999999, 999999, 999999, '企业/内部用户，无限配额（占位）');

-- 3. 用户资料扩展表（关联 auth.users）
-- ============================================
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nickname text,
  avatar_url text,
  role text not null default 'user' check (role in ('admin', 'user')),
  tier text not null default 'free' references tier_configs(tier),
  tier_expires_at timestamptz,
  target_languages text[] default '{}',
  language_level text default 'beginner',
  learning_goal text default 'hobby',
  daily_minutes text default '15min',
  learning_style text default 'mixed',
  known_languages text[] default '{"zh-CN"}',
  weak_areas text[] default '{"vocabulary"}',
  study_time_preference text default 'evening',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 4. 邀请码表
-- ============================================
create table invitation_codes (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  created_by uuid not null references auth.users(id) on delete cascade,
  tier_assigned text not null default 'free' references tier_configs(tier),
  max_uses int not null default 1 check (max_uses > 0),
  used_count int not null default 0 check (used_count <= max_uses),
  expires_at timestamptz,
  created_at timestamptz default now()
);

-- 5. 邀请码使用记录
-- ============================================
create table invitation_usage (
  id uuid primary key default gen_random_uuid(),
  code_id uuid not null references invitation_codes(id) on delete cascade,
  used_by uuid not null unique references auth.users(id) on delete cascade,
  used_at timestamptz default now()
);

-- 6. 每日 AI 使用配额追踪
-- ============================================
create table daily_usage (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  usage_date date not null default current_date,
  translation_count int not null default 0 check (translation_count >= 0),
  ai_dialogue_count int not null default 0 check (ai_dialogue_count >= 0),
  ai_tts_count int not null default 0 check (ai_tts_count >= 0),
  ocr_count int not null default 0 check (ocr_count >= 0),
  link_parser_count int not null default 0 check (link_parser_count >= 0),
  unique(user_id, usage_date)
);

-- 7. 索引优化
-- ============================================
create index idx_invitation_codes_code on invitation_codes(code);
create index idx_invitation_codes_created_by on invitation_codes(created_by);
create index idx_daily_usage_user_date on daily_usage(user_id, usage_date);
create index idx_profiles_role on profiles(role);
create index idx_profiles_tier on profiles(tier);

-- 8. 自动创建 Profile 的触发器
-- ============================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, nickname)
  values (new.id, coalesce(new.raw_user_meta_data->>'nickname', '语言学习者'));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 9. 启用 RLS
-- ============================================
alter table profiles enable row level security;
alter table invitation_codes enable row level security;
alter table invitation_usage enable row level security;
alter table daily_usage enable row level security;
alter table tier_configs enable row level security;

-- 10. 辅助函数：判断当前用户是否为管理员
-- ============================================
create or replace function public.is_admin()
returns boolean as $$
begin
  return exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
end;
$$ language plpgsql security definer;

-- 11. profiles 表 RLS
-- ============================================
create policy "profiles_select"
  on profiles for select
  using (id = auth.uid() or public.is_admin());

create policy "profiles_update_self"
  on profiles for update
  using (id = auth.uid())
  with check (id = auth.uid());

create policy "profiles_update_admin"
  on profiles for update
  using (public.is_admin());

create policy "profiles_insert_trigger"
  on profiles for insert
  with check (id = auth.uid() or public.is_admin());

-- 11b. 防止用户自升 tier / 自改 role 的 trigger
-- ============================================
create or replace function public.prevent_self_escalation()
returns trigger as $$
begin
  -- 管理员允许修改 role/tier（匹配 profiles_update_admin 策略）
  if exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  ) then
    return new;
  end if;

  -- 非管理员禁止修改 role 和 tier
  if new.role <> old.role or new.tier <> old.tier then
    raise exception '用户无权修改 role 或 tier';
  end if;

  return new;
end;
$$ language plpgsql security definer;

create trigger profiles_prevent_self_escalation
  before update on profiles
  for each row execute function public.prevent_self_escalation();

-- 12. invitation_codes 表 RLS（仅管理员可接触）
-- ============================================
create policy "invitation_codes_all_admin"
  on invitation_codes
  for all
  using (public.is_admin());

-- 13. invitation_usage 表 RLS
-- ============================================
create policy "invitation_usage_select_admin"
  on invitation_usage for select
  using (public.is_admin());

create policy "invitation_usage_insert_system"
  on invitation_usage for insert
  with check (false);

-- 14. daily_usage 表 RLS
-- ============================================
create policy "daily_usage_select_self"
  on daily_usage for select
  using (user_id = auth.uid());

create policy "daily_usage_write_system"
  on daily_usage for all
  using (false);

-- 15. tier_configs 表 RLS
-- ============================================
create policy "tier_configs_select_authed"
  on tier_configs for select
  using (auth.role() = 'authenticated');

create policy "tier_configs_write_admin"
  on tier_configs for all
  using (public.is_admin());

-- 16. 邀请码验证与消耗（security definer）
-- ============================================
create or replace function public.verify_and_consume_invitation_code(
  p_code text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code_record record;
  v_user_id uuid := auth.uid();
begin
  if v_user_id is null then
    return jsonb_build_object('success', false, 'error', '未登录');
  end if;

  select * into v_code_record
  from invitation_codes
  where code = p_code
    and used_count < max_uses
    and (expires_at is null or expires_at > now());

  if v_code_record is null then
    return jsonb_build_object('success', false, 'error', '邀请码无效、已过期或已达到使用上限');
  end if;

  if exists (select 1 from invitation_usage where used_by = v_user_id) then
    return jsonb_build_object('success', false, 'error', '每个账号只能使用一次邀请码');
  end if;

  insert into invitation_usage (code_id, used_by)
  values (v_code_record.id, v_user_id);

  update invitation_codes
  set used_count = used_count + 1
  where id = v_code_record.id;

  update profiles
  set tier = v_code_record.tier_assigned,
      updated_at = now()
  where id = v_user_id;

  return jsonb_build_object(
    'success', true,
    'tier', v_code_record.tier_assigned,
    'message', '注册成功'
  );
end;
$$;

revoke all on function public.verify_and_consume_invitation_code(text) from public;
grant execute on function public.verify_and_consume_invitation_code(text) to authenticated;

-- 17. AI 配额原子扣减函数
-- ============================================
create or replace function public.consume_ai_quota(
  p_usage_type text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_tier text;
  v_tier_config record;
  v_usage_record record;
  v_limit int;
  v_column text;
  v_new_count int;
begin
  if v_user_id is null then
    return jsonb_build_object('allowed', false, 'error', '未登录');
  end if;

  if p_usage_type not in ('translation', 'ai_dialogue', 'ai_tts', 'ocr', 'link_parser') then
    return jsonb_build_object('allowed', false, 'error', '未知的配额类型');
  end if;

  select tier into v_tier from profiles where id = v_user_id;
  if v_tier is null then
    return jsonb_build_object('allowed', false, 'error', '用户资料不存在');
  end if;

  select * into v_tier_config from tier_configs where tier = v_tier;

  case p_usage_type
    when 'translation' then
      v_limit := v_tier_config.daily_translation_limit;
      v_column := 'translation_count';
    when 'ai_dialogue' then
      v_limit := v_tier_config.daily_ai_dialogue_limit;
      v_column := 'ai_dialogue_count';
    when 'ai_tts' then
      v_limit := v_tier_config.daily_ai_tts_limit;
      v_column := 'ai_tts_count';
    when 'ocr' then
      v_limit := v_tier_config.daily_ocr_limit;
      v_column := 'ocr_count';
    when 'link_parser' then
      v_limit := v_tier_config.daily_link_parser_limit;
      v_column := 'link_parser_count';
  end case;

  insert into daily_usage (user_id, usage_date)
  values (v_user_id, current_date)
  on conflict (user_id, usage_date) do nothing;

  select * into v_usage_record
  from daily_usage
  where user_id = v_user_id and usage_date = current_date
  for update;

  v_new_count := case v_column
    when 'translation_count' then v_usage_record.translation_count + 1
    when 'ai_dialogue_count' then v_usage_record.ai_dialogue_count + 1
    when 'ai_tts_count' then v_usage_record.ai_tts_count + 1
    when 'ocr_count' then v_usage_record.ocr_count + 1
    when 'link_parser_count' then v_usage_record.link_parser_count + 1
  end;

  if v_new_count > v_limit then
    return jsonb_build_object(
      'allowed', false,
      'error', '今日额度已用完',
      'quota_type', p_usage_type,
      'limit', v_limit,
      'used', v_new_count - 1
    );
  end if;

  execute format(
    'update daily_usage set %I = %I + 1 where id = $1',
    v_column, v_column
  ) using v_usage_record.id;

  return jsonb_build_object(
    'allowed', true,
    'quota_type', p_usage_type,
    'limit', v_limit,
    'used', v_new_count,
    'remaining', v_limit - v_new_count
  );
end;
$$;

revoke all on function public.consume_ai_quota(text) from public;
grant execute on function public.consume_ai_quota(text) to authenticated;

-- 17b. AI 配额回滚函数（用于服务失败后补偿）
-- ============================================
create or replace function public.rollback_ai_quota(
  p_usage_type text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_column text;
  v_usage_record record;
begin
  if v_user_id is null then
    return jsonb_build_object('success', false, 'error', '未登录');
  end if;

  if p_usage_type not in ('translation', 'ai_dialogue', 'ai_tts', 'ocr', 'link_parser') then
    return jsonb_build_object('success', false, 'error', '未知的配额类型');
  end if;

  v_column := case p_usage_type
    when 'translation' then 'translation_count'
    when 'ai_dialogue' then 'ai_dialogue_count'
    when 'ai_tts' then 'ai_tts_count'
    when 'ocr' then 'ocr_count'
    when 'link_parser' then 'link_parser_count'
  end;

  select * into v_usage_record
  from daily_usage
  where user_id = v_user_id and usage_date = current_date
  for update;

  if v_usage_record is null then
    return jsonb_build_object('success', false, 'error', '无今日使用记录');
  end if;

  execute format(
    'update daily_usage set %I = greatest(%I - 1, 0) where id = $1',
    v_column, v_column
  ) using v_usage_record.id;

  return jsonb_build_object('success', true, 'quota_type', p_usage_type);
end;
$$;

revoke all on function public.rollback_ai_quota(text) from public;
grant execute on function public.rollback_ai_quota(text) to authenticated;

-- 18. 管理员调整用户等级（security definer）
-- ============================================
create or replace function public.admin_set_user_tier(
  p_target_user_id uuid,
  p_new_tier text,
  p_expires_at timestamptz default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    return jsonb_build_object('success', false, 'error', '权限不足');
  end if;

  if p_new_tier not in ('free', 'pro', 'enterprise') then
    return jsonb_build_object('success', false, 'error', '无效的等级');
  end if;

  update profiles
  set tier = p_new_tier,
      tier_expires_at = p_expires_at,
      updated_at = now()
  where id = p_target_user_id;

  return jsonb_build_object('success', true, 'tier', p_new_tier);
end;
$$;

revoke all on function public.admin_set_user_tier(uuid, text, timestamptz) from public;
grant execute on function public.admin_set_user_tier(uuid, text, timestamptz) to authenticated;

-- 19. 导入学习材料表（链接解析结果）
-- ============================================
create table imported_materials (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  source_type text not null check (source_type in ('video', 'music')),
  platform text not null,
  original_url text not null,
  metadata jsonb not null default '{}',
  segments jsonb not null default '[]',
  quiz jsonb not null default '[]',
  status text not null default 'parsed' check (status in ('parsed', 'learning', 'completed')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 索引
 create index idx_imported_materials_user_id on imported_materials(user_id);
 create index idx_imported_materials_created_at on imported_materials(created_at);

-- 20. imported_materials 表 RLS
-- ============================================
alter table imported_materials enable row level security;

create policy "imported_materials_select_self"
  on imported_materials for select
  using (user_id = auth.uid());

create policy "imported_materials_insert_self"
  on imported_materials for insert
  with check (user_id = auth.uid());

create policy "imported_materials_update_self"
  on imported_materials for update
  using (user_id = auth.uid());

create policy "imported_materials_delete_self"
  on imported_materials for delete
  using (user_id = auth.uid());

-- ============================================
-- Bootstrap：首个管理员提升说明
-- ============================================
-- 步骤：
-- 1. 先通过前端正常注册一个账号（此时 role='user'）
-- 2. 在 Supabase Dashboard → Table Editor → auth.users 中找到你的邮箱对应的 UUID
-- 3. 在 SQL Editor 中执行以下命令（替换 <USER_UUID> 为实际 UUID）：
--
-- update profiles set role = 'admin', tier = 'enterprise' where id = '<USER_UUID>';
--
-- 4. 刷新应用页面，此时你已成为管理员，可以在「我的 → 管理后台」中生成邀请码
-- ============================================
