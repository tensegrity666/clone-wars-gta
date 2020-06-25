/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */

const cacheName = 'gta-app';
const filesToCache = [
  './',
  './index.js',
  './index.html',
  './index.css',
  './assets/favicons/android-chrome-192x192.png',
  './assets/favicons/apple-touch-icon.png',
  './assets/fonts/15151.ttf',
  './scenes/index.js',
  './scenes/menu.js',
];

const installHandler = (event) => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(filesToCache))
      .catch((err) => console.log(err)),
  );
};

const fetchHandler = (event) => {
  console.log(event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
      .catch((error) => console.log(error)),
  );
};

self.addEventListener('install', installHandler);
self.addEventListener('fetch', fetchHandler);
