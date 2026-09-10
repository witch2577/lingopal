/**
 * LingoPal Service Worker
 * 实现多策略缓存：
 * - 静态资源（CDN 库、字体）：Cache First + 后台更新
 * - 应用核心文件（HTML/JSX/JSON）：Network First，失败回退缓存
 * - 翻译 API：不缓存（动态请求）
 * - 图片资源：Cache First
 */

const CACHE_VERSION = 'lingopal-v1.0.0';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const CDN_CACHE = `${CACHE_VERSION}-cdn`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const FONT_CACHE = `${CACHE_VERSION}-fonts`;

// 应用核心资源（Network First 策略）
const APP_CORE_URLS = [
  './',
  './index.html',
  './manifest.json',
];

// CDN 白名单域名（Cache First 策略）
const CDN_DOMAINS = [
  'sf3-scmcdn-cn.feishucdn.com',
  'cdn.tailwindcss.com',
  'unpkg.com',
];

// 字体域名（Cache First 策略）
const FONT_DOMAINS = [
  'miaoda.feishu.cn',
];

// 图片域名（Cache First 策略）
const IMAGE_DOMAINS = [
  'api.dicebear.com',
  'spark', // 包含本应用静态资源域名
];

// 安装阶段 - 预缓存核心资源
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(APP_CORE_URLS).catch((err) => {
        console.warn('[SW] 预缓存部分资源失败:', err);
      });
    })
  );
});

// 激活阶段 - 清理旧版本缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      const deletePromises = cacheNames
        .filter((name) => {
          return name.startsWith('lingopal-') && !name.startsWith(CACHE_VERSION);
        })
        .map((name) => {
          console.log('[SW] 清理旧缓存:', name);
          return caches.delete(name);
        });
      return Promise.all(deletePromises);
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// 判断 URL 所属类别
function getCacheType(url) {
  const hostname = url.hostname;

  // 字体请求
  if (FONT_DOMAINS.some((d) => hostname.includes(d)) ||
      url.pathname.match(/\.(woff2?|ttf|otf|eot)$/i)) {
    return 'font';
  }

  // CDN 资源（JS/CSS 库）
  if (CDN_DOMAINS.some((d) => hostname.includes(d))) {
    return 'cdn';
  }

  // 图片资源
  if (IMAGE_DOMAINS.some((d) => hostname.includes(d)) ||
      url.pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)$/i)) {
    return 'image';
  }

  // 应用同源核心文件
  if (url.origin === self.location.origin) {
    // 应用代码文件（JSX/JS/CSS）
    if (url.pathname.match(/\.(jsx?|css)$/i)) {
      return 'app-script';
    }
    // HTML/JSON 等
    if (url.pathname === '/' ||
        url.pathname.endsWith('.html') ||
        url.pathname.endsWith('.json')) {
      return 'app-core';
    }
  }

  return 'other';
}

// Cache First 策略
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    // 后台更新（Stale-While-Revalidate 变体）
    fetch(request).then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200) {
        cache.put(request, networkResponse.clone());
      }
    }).catch(() => {});
    return cachedResponse;
  }
  // 缓存未命中，走网络
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (e) {
    return new Response('[SW] 资源不可用', { status: 503 });
  }
}

// Network First 策略
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (e) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // 对 HTML 请求，返回离线页面（index.html 的缓存作为 fallback）
    if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
      const offlineResponse = await cache.match('./index.html');
      if (offlineResponse) return offlineResponse;
    }
    return new Response('[SW] 离线且无缓存', { status: 503 });
  }
}

// 请求拦截
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // 只拦截 GET 请求
  if (request.method !== 'GET') {
    return;
  }

  // 跳过非 http/https 请求（如 chrome-extension://）
  if (!url.protocol.startsWith('http')) {
    return;
  }

  const cacheType = getCacheType(url);

  let responsePromise;
  switch (cacheType) {
    case 'font':
      responsePromise = cacheFirst(request, FONT_CACHE);
      break;
    case 'cdn':
      responsePromise = cacheFirst(request, CDN_CACHE);
      break;
    case 'image':
      responsePromise = cacheFirst(request, IMAGE_CACHE);
      break;
    case 'app-script':
      responsePromise = networkFirst(request, STATIC_CACHE);
      break;
    case 'app-core':
      responsePromise = networkFirst(request, STATIC_CACHE);
      break;
    default:
      // 其他请求直接走网络，不缓存
      return;
  }

  event.respondWith(responsePromise);
});

// 消息处理
self.addEventListener('message', (event) => {
  const { type } = event.data || {};

  if (type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (type === 'GET_VERSION') {
    event.source.postMessage({
      type: 'VERSION',
      version: CACHE_VERSION,
    });
  }

  if (type === 'CLEAR_CACHE') {
    caches.keys().then((names) => {
      names.forEach((name) => {
        if (name.startsWith('lingopal-')) {
          caches.delete(name);
        }
      });
    });
  }
});

// 后台同步（学习数据）
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-learning-data') {
    event.waitUntil(syncLearningData());
  }
});

async function syncLearningData() {
  // 获取所有客户端
  const clients = await self.clients.matchAll();
  // 通知客户端进行数据同步
  clients.forEach((client) => {
    client.postMessage({ type: 'SYNC_LEARNING_DATA' });
  });
  return Promise.resolve();
}

// 离线检测时推送通知（可选）
self.addEventListener('push', (event) => {
  // 预留推送通知接口
  const data = event.data?.json() || {};
  if (data.title) {
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body || '',
        icon: '/spark/app/app_17d09ak2r4b/runtime/api/v1/storage/object/bucket_aadksff6rraig_static/static%2Faadksfemp2qxg_ve_miaoda',
        badge: '/spark/app/app_17d09ak2r4b/runtime/api/v1/storage/object/bucket_aadksff6rraig_static/static%2Faadksfemp2qxg_ve_miaoda',
      })
    );
  }
});
