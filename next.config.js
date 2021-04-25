const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')
// const webpackDevConfig = require('./webpack.config.dev');
// const webpackMerge = require('webpack-merge');

module.exports = {
    compress: false,
    generateInDevMode: true,
    future: {
        webpack5: true,
    }
    // transformManifest: manifest => ['/'].concat(manifest),
    // workboxOpts: {
    //     swDest: 'static/service-worker.js',
    //     runtimeCaching: [
    //         {
    //             urlPattern: /^https?.*/,
    //             handler: 'NetworkFirst',
    //             options: {
    //                 cacheName: 'https-calls',
    //                 networkTimeoutSeconds: 15,
    //                 expiration: {
    //                     maxEntries: 150,
    //                     maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
    //                 },
    //                 cacheableResponse: {
    //                     statuses: [0, 200],
    //                 },
    //             },
    //         },
    //     ],
    // }
}

