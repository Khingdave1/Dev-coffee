const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/work.css",
  "/js/script.js",
  "/img/coffee1.jpg",
  "/img/coffee2.jpg",
  "/img/coffee3.jpg",
  "/img/coffee4.jpg",
  "/img/coffee5.jpg",
  "/img/coffee6.jpg"
];

// Cache the assets
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
});
// Fetch the assets
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(result => {
      return result || fetch(fetchEvent.request)
    })
  )
});