// sw.js — Musiv Service Worker

const CACHE = 'musiv-v3';
const STATIC = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/js/songs.js',
  '/manifest.json',
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC).catch(() => {}))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Never cache YouTube/Google API calls
  if (url.hostname.includes('youtube') || url.hostname.includes('googleapis')) {
    return;
  }

  // Network-first for audio files so they always stream fresh
  if (url.pathname.startsWith('/Songs/') || url.pathname.match(/\.(mp3|m4a|ogg|flac|wav)$/i)) {
    return;
  }

  // Cache-first for everything else
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
