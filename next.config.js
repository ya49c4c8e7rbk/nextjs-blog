/* eslint-disable */
const path = require('path')
const withOffline = require('next-offline')

const nextConfig = {
  webpack: (config) => {
    // ルートディレクトリをエイリアスのルートに設定
    config.resolve.alias['@'] = path.resolve(__dirname, './')
    return config
  },
}

module.exports = withOffline(nextConfig)
