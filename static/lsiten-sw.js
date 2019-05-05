// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.getRegistrations().then((registrations) => {
//     for (const worker of registrations) {
//       console.log('Service worker:', worker)
//     }
//   });
//   self.addEventListener('fetch', event => {
//         const req = event.request;
//         const url = new URL(req.url);
        
//         // 当本地开发时候可以这么配置
//         if (url.origin === location.origin) {
//             event.respondWith(cacheFirst(req));
//         } else if ((req.url.indexOf('http') !== -1)) {
//             // chrome的https协议限制，接口必须满足https
//             event.respondWith(networkFirst(req));
//         }
//     });

//     // 缓存优先
//     async function cacheFirst(req) {
//         const cachedResponse = await caches.match(req);
//         return cachedResponse || fetch(req);
//     }

//     // 网络优先
//     async function networkFirst(req) {
//         // 将请求到的数据缓存在id为news-dynamic中
//         const cache = await caches.open('news-dynamic');

//         try {
//             const res = await fetch(req); // 获取数据
//             cache.put(req, res.clone()); // 更新缓存
//             return res;
//         } catch (error) {
//             return await cache.match(req); // 报错则使用缓存
//         }
//     }
// }

self.addEventListener('error', function(e) {
    self.clients.matchAll()
      .then(function (clients) {
        if (clients && clients.length) {
          clients[0].postMessage({ 
            type: 'ERROR',
            msg: e.message || null,
            stack: e.error ? e.error.stack : null
          });
        }
      });
  });
  
  self.addEventListener('unhandledrejection', function(e) {
    self.clients.matchAll()
      .then(function (clients) {
        if (clients && clients.length) {
          clients[0].postMessage({
            type: 'REJECTION',
            msg: e.reason ? e.reason.message : null,
            stack: e.reason ? e.reason.stack : null
          });
        }
      });
  })

  console.log(self)
  self.addEventListener('activate', function(e) {
    self.clients.matchAll()
      .then(function (clients) {
        if (clients && clients.length) {
          clients[0].postMessage({
            type: 'CHANGEACTIVE'
          })
        }
      })
  })

  // self.addEventListener('activate', (event) => {
  //   // 如果另一个版本的 serviceWorker，`event.isUpdate`将为true
  //   // 当这个版本注册时，worker 正在控制页面。
  //   console.log(event)
  //   if (!event.isUpdate) {
  //     console.log('Service worker 第一次激活！');
  //   }
  // });
  

  self.addEventListener('message', function(e) {
    console.log(e)
    // if (e.data && e.data.type === 'CHANGEACTIVE') {
    //   self.clients.matchAll()
    //     .then(function (clients) {
    //       clients.claim();
    //     })
    // }
  })