const CACHE_NAME = 'marsstein-v3';
const urlsToCache = [
  '/',
  '/dsgvo',
  '/eu-ai-act',
  '/preise',
  '/contact',
  '/academy',
  '/tools',
  '/JLogoMarsstein.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache).catch(err => {
          console.log('SW: Cache addAll failed:', err);
        });
      })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  // Only cache same-origin requests
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request).catch(() => {
            // If fetch fails, try to serve from cache
            return caches.match('/');
          });
        })
    );
  }
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});