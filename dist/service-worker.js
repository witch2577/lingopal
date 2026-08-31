/**
 * LingoPal Service Worker — Static Build
 * Simple cache-first for static assets, network-first for APIs.
 */

const CACHE_VERSION = 'lingopal-static-v1.0.0';
const STATIC_CACHE = `${CACHE_VERSION}-static`;

// Core app shell files (will be discovered at runtime from precache)
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.warn('[SW] Precache partial failure:', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('lingopal-') && !name.startsWith(CACHE_VERSION))
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

function isStaticAsset(url) {
  return url.pathname.match(/\.(js|css|json|html|png|jpg|jpeg|gif|svg|webp|ico|woff2?|ttf|otf)$/i);
}

function isApiRequest(url) {
  return url.pathname.includes('/api/') ||
         url.hostname.includes('api.') ||
         url.hostname.includes('translation') ||
         url.hostname.includes('speech');
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin API requests (let browser handle them)
  if (isApiRequest(url)) {
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
    return;
  }

  // Static assets: Cache First
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          // Refresh cache in background
          fetch(request).then((response) => {
            if (response && response.ok) {
              caches.open(STATIC_CACHE).then((cache) => cache.put(request, response));
            }
          }).catch(() => {});
          return cached;
        }
        return fetch(request).then((response) => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Navigation / HTML pages: Network First with cache fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then((response) => {
        if (response && response.ok) {
          const clone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
        }
        return response;
      }).catch(() => {
        return caches.match(request).then((cached) => {
          if (cached) return cached;
          return caches.match('./index.html');
        });
      })
    );
    return;
  }

  // Default: try network, fallback to cache
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

// Background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-learning-data') {
    event.waitUntil(
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => client.postMessage({ type: 'SYNC_LEARNING_DATA' }));
      })
    );
  }
});

// Message handling from app
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
