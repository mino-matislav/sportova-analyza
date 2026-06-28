const CACHE_NAME = 'sportova-analyza-v2';
const urlsToCache = ['/','/index.html','https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });