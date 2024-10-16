const CACHE_NAME = 'tareas-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/vane.css',
    '/vane.js',
    '/imagenes/icon-192x192.png',
    '/imagenes/icon-512x512.png',
    'https://cdn.jsdelivr.net/bon/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/bon/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );

});
