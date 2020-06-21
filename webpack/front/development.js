const merge = require('webpack-merge')
const { cleanBuild, genSourceMaps, setupDevServer } = require('../parts')

// eslint-disable-next-line no-console
console.log('🤖📦 INITIATING WEBPACK DEVELOPMENT BUILD 📦🤖')

module.exports = merge([
  {
    mode: 'development',
  },

  cleanBuild(),

  setupDevServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),

  genSourceMaps('cheap-module-eval-source-map'),
])
