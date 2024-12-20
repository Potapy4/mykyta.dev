module.exports = {
  globDirectory: "./",
  globPatterns: [
    "**/*.{png,svg,ico,jpg,mp3,css,html,js}",
    "manifest.json"
  ],
  swDest: "sw.js",
  runtimeCaching: [{
    urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'images',
      expiration: {
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      },
    },
  }, {
    urlPattern: /\.(?:css|js)$/,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'static-resources',
      expiration: {
        maxEntries: 30,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      },
    },
  }],
  skipWaiting: true,
  clientsClaim: true
};