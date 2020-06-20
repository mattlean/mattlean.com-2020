const merge = require('webpack-merge')
const { setupDevServer } = require('./parts')

console.log('🤖 INITIATING WEBPACK DEVELOPMENT BUILD 🤖')

module.exports = merge([
  {
    mode: 'development',
  },

  setupDevServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
])
