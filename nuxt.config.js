const pkg = require('./package')


module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '中国(广西)国际贸易单一窗口',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '@/units/common'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/pwa',
      {
        icon: false,
        meta: {},
        workbox: {
          dev: false,
          clientsClaim: true,
          skipWaiting: true,
          // workboxURL: 'https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js',
          config: {
            debug: true,
            // modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
          },
          importScripts: [
            '/lsiten-sw.js'
          ],
          cachingExtensions: [
            '@/workbox/workbox-range-request.js',
            '@/workbox/workbox-life.js'
          ],
          routingExtensions: [
            '@/workbox/ali.js'
          ],
          runtimeCaching: [
            {
              urlPattern: 'https://g.alicdn.com/.*',
              strategyOptions: {
                cacheName: 'lsiten-cdn',
                cacheExpiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 300
                }
              }
            }
          ]
        }
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
