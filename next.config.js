const { readFileSync } = require('fs')

module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.resolve.modules = ['./src', './vendor', ...config.resolve.modules]

    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { ref: true, svgo: true }}],
    })

    return config
  },
  webpack5: true,
}
