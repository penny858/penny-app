const CACHE_NAME = 'penny-workspace-v22';
const CACHE_FILES = [
  './',
  './index.html',
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
        return response || caches.match('./index.html');
      });
    })
  );
});
