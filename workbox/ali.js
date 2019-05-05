
  workbox.routing.registerRoute(
    new RegExp('https://g\.alicdn\.com/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'tbh:static',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
          maxEntries: 20
        })
      ]
    })
  );
  
  workbox.routing.registerRoute(
    new RegExp('https://img\.alicdn\.com/'),
    new workbox.strategies.CacheFirst({
      cacheName: 'tbh:img',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
          maxEntries: 20,
          maxAgeSeconds: 12 * 60 * 60
        })
      ]
    })
  );
  
  workbox.routing.registerRoute(
    new RegExp('https://gtms01\.alicdn\.com/'),
    new workbox.strategies.CacheFirst({
      cacheName: 'tbh:img',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
          maxEntries: 30,
          maxAgeSeconds: 12 * 60 * 60
        })
      ]
    })
  );