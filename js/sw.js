var CACHE_NAME = 'restaurant-review';
var urlsToCache = [
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/css/responsive.css',
    '/js/dbhelper.js',
    '/js/registersw.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            return cache.addAll(urlsToCache);   
        })
    );
});

self.addEventListener('activate', function(event){

});

self.addEventListener('fetch', function() {
    event.respondWith(
        catches.match(event.request).then(function(response){
            if (response) return response;
            return fetch(event.request);
        })
    );
});