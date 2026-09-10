# LingoPal 部署与使用指南

## 一、注册 Supabase 账号并创建项目

1. 访问 [supabase.com](https://supabase.com) 注册账号（可用 GitHub 账号直接登录）
2. 点击 **New Project**，填写项目名称（如 `lingopal-prod`），设置数据库密码
3. 选择最近的 Region（如 `Northeast Asia (Tokyo)`），点击 **Create new project**
4. 等待项目初始化完成（约 1-2 分钟）

## 二、获取 Supabase URL 和 Anon Key

1. 进入项目 Dashboard，点击左侧菜单 **Project Settings** → **API**
2. 复制以下两个值：
   - **URL**：`https://xxxxxxxx.supabase.co`
   - **anon public**：`eyJhbGciOiJIUzI1NiIs...`
3. 妥善保存，稍后将填入前端配置

## 三、执行数据库初始化 SQL

1. 在 Dashboard 左侧菜单点击 **SQL Editor**
2. 点击 **New query**，将 `init.sql` 文件的全部内容粘贴进去
3. 点击 **Run** 执行
4. 确认无报错，所有表、函数、RLS 策略已创建

## 四、配置前端 Supabase 连接

1. 打开 `src/core/supabaseConfig.jsx`
2. 替换两个占位符：
   ```javascript
   const SUPABASE_URL = 'https://你的项目.supabase.co';
   const SUPABASE_ANON_KEY = '你的-anon-key';
   ```
3. 保存文件

## 五、部署到 GitHub Pages

1. 将修改后的整个项目推送到 GitHub 仓库
2. 进入仓库 **Settings** → **Pages**
3. Source 选择 **Deploy from a branch**，Branch 选择 `main` / `root`
4. 等待 1-2 分钟后，访问 `https://你的用户名.github.io/仓库名` 即可

## 六、Bootstrap 首个管理员

1. 打开部署好的网站，先以普通用户身份**注册一个账号**（此时需要邀请码，但还没有管理员来生成）
   - **临时方案**：由于尚无邀请码，你可以在 SQL Editor 中先执行：
     ```sql
     -- 插入一个万能邀请码（仅限首次使用）
     insert into invitation_codes (code, created_by, tier_assigned, max_uses, expires_at)
     select 'LINGO-FIRST-2026', id, 'enterprise', 999, null
     from auth.users
     limit 1;
     ```
   - 然后用这个码注册你的第一个账号
2. 注册成功后，回到 Supabase Dashboard → **Table Editor** → **auth.users**
3. 找到你刚注册的邮箱，复制对应的 **UUID**
4. 在 SQL Editor 中执行：
   ```sql
   update profiles set role = 'admin', tier = 'enterprise' where id = '你的UUID';
   ```
5. 刷新网页，进入「我的」页面，此时应能看到「管理后台」入口

## 七、生成邀请码邀请内部人员

1. 以管理员身份登录后，进入「我的 → 管理后台」
2. 点击「生成邀请码」，可选择：
   - **绑定等级**：free / pro / enterprise
   - **可用次数**：1~100
   - **有效期**：0 表示永不过期，其他为天数
3. 将生成的邀请码分发给需要注册的人员
4. 对方在注册页面填写邮箱、密码、昵称和邀请码即可完成注册

## 八、管理用户等级与配额

1. 在管理后台切换到「用户管理」标签
2. 查看所有注册用户列表
3. 对每个用户可以：
   - **调整等级**：下拉选择 free / pro / enterprise
   - **重置配额**：点击「重置配额」清空该用户今日已用额度

## 九、本地测试（无 Supabase 密钥时）

如果暂时没有 Supabase 密钥，应用会以**本地模式**运行：
- 不强制登录，直接进入应用主体
- 所有数据保存在浏览器 IndexedDB 中
- 翻译/学习功能完全可用（使用本地词典和免费 API）
- 配额限制由前端本地计数器控制

**切换到 Supabase 模式**：只要填入有效的 URL 和 Anon Key，重新部署后，未登录用户将只能看到登录页。

## 十、安全清单（已内置）

以下约束全部由数据库层（RLS + 函数）实现，前端无法绕过：

| # | 安全点 | 实现位置 |
|---|--------|---------|
| 1 | 邀请码必须有效才能注册 | `verify_and_consume_invitation_code` + RLS |
| 2 | 用户不能自改 role 为 admin | RLS `with check` |
| 3 | 用户不能读取他人 profile | RLS `using id = auth.uid()` |
| 4 | 用户不能伪造配额扣减 | `daily_usage` RLS 禁止写入 |
| 5 | 用户不能给自己无限加配额 | `tier_configs` / `profiles.tier` 仅 admin 可改 |
| 6 | 用户不能重复使用邀请码 | `invitation_usage.used_by` unique 约束 |
| 7 | 过期邀请码自动失效 | 函数内 `expires_at > now()` 检查 |
| 8 | 配额每日自动重置 | `daily_usage` 按 `usage_date` 分区 |

## 十一、故障排查

| 问题 | 排查步骤 |
|------|---------|
| 注册时提示"邀请码无效" | 检查邀请码是否过期、是否已达使用上限、是否大小写正确 |
| 登录后看不到管理后台 | 确认已在 SQL Editor 中执行 `update profiles set role='admin'` |
| 配额不扣减 | 检查 `daily_usage` 表 RLS 是否正确启用；检查 `consume_ai_quota` 函数是否存在 |
| 前端提示"Supabase 未配置" | 确认 `supabaseConfig.jsx` 中的占位符已被替换，且重新部署 |
| SQL 执行报错 | 确认按顺序执行；如果表已存在，先删除或跳过 `create table` 语句 |

## 十二、未来扩展（预留）

当前已实现等级框架，但未接入真实支付。未来扩展路径：
1. **阶段二**：接入 Stripe / LemonSqueezy，webhook 回调更新订阅状态
2. **阶段三**：按量付费时，扩展 `consume_ai_quota` 先检查 `quota_packs` 再检查每日限制
3. 预留字段：`profiles.tier_expires_at`、`tier_configs` 动态配置、`invitation_codes.tier_assigned` 绑定付费试用
