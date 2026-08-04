const CACHE_NAME = 'penny-workspace-v28';
const CACHE_FILES = [
  './',
  './app.html',
  './excel_data.js',
  './industry_pool.js',
  './vocab_pool.js',
  './manifest.json',
  './icons/icon-192-v2.png',
  './icons/icon-512-v2.png',
  './icons/apple-touch-icon-v2.png',
  './icons/favicon-32-v2.png',
  './icons/maskable-192-v2.png',
  './icons/maskable-512-v2.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_FILES).catch(err => {
        console.log('Cache addAll error:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => {
          console.log('Deleting old cache:', name);
          return caches.delete(name);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // 对 app.html 和 index.html 永远走网络
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('app.html') || url.pathname.endsWith('index.html') || url.pathname === '/' || url.pathname.endsWith('/')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-cache' }).catch(() => {
        return caches.match(event.request).then(r => r || caches.match('./app.html'));
      })
    );
    return;
  }
  event.respondWith(
    fetch(event.request, { cache: 'no-cache' }).then((fetchResponse) => {
      return caches.open(CACHE_NAME).then((cache) => {
        if (fetchResponse.ok) {
          cache.put(event.request, fetchResponse.clone());
        }
        return fetchResponse;
      });
    }).catch(() => {
      return caches.match(event.request).then((response) => {
        return response || caches.match('./app.html');
      });
    })
  );
});
