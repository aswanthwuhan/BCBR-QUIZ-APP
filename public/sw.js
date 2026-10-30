// Offline support: after the first visit the whole app (questions, flashcards,
// quiz) works without internet. AI explanations and /api calls still need a network.
const CACHE_NAME = 'bcbr-qbank-v6';
// Module scripts are requested with an Origin header; ignore Vary so precached copies still match
const MATCH_OPTS = { ignoreVary: true };
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
  '/apple-touch-icon.png',
  '/icon-192.png',
  '/icon-512.png'
];

// Cache the shell plus the hashed JS/CSS bundles referenced by index.html,
// so the app opens offline even if the first visit ended before they were reused.
async function precache() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(CORE_ASSETS);
  try {
    const html = await (await fetch('/index.html', { cache: 'no-store' })).text();
    const bundles = [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map((m) => m[1]);
    await cache.addAll([...new Set(bundles)]);
  } catch (err) {
    console.warn('[SW] Could not precache bundles:', err);
  }
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(precache());
});

// Clear old caches on activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;

  // Pages: network first (to pick up new versions), fall back to the cached app shell
  if (request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put('/index.html', copy));
          }
          return response;
        })
        .catch(() => caches.match('/index.html', MATCH_OPTS).then((cached) => cached || caches.match('/', MATCH_OPTS)))
    );
    return;
  }

  // Everything else (hashed bundles, icons, fonts): cache first, then store what we fetch
  event.respondWith(
    caches.match(request, MATCH_OPTS).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
