/* eslint-disable */
const withOffline = require('next-offline')
require('dotenv').config()

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), 
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  // env: {
  //   NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  //   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  //   NEXT_PUBLIC_FIREBASE_DATABASE_URL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  //   NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  //   FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  //   FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY
  // }
};

module.exports = withOffline(nextConfig)
