// sw.js - Enhanced Service Worker
const CACHE_NAME = 'musiv-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/js/songs.js',
  '/Assets/Images/Musiv.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  // Skip YouTube API and other external resources
  try {
    const reqUrl = new URL(event.request.url);
    const hostname = reqUrl.hostname;
    // Only skip if the request's host is exactly or ends with ".youtube.com" or ".googleapis.com"
    if (
      hostname === 'youtube.com' || hostname.endsWith('.youtube.com') ||
      hostname === 'googleapis.com' || hostname.endsWith('.googleapis.com')
    ) {
      return fetch(event.request);
    }
  } catch (e) {
    // In case of invalid URL, just proceed to cache logic
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request).then(function(response) {
          // Check if we received a valid response
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          var responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
  );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});