const merge = require('webpack-merge')
const { buildStyles } = require('./parts')

console.log('🎁 INITIATING WEBPACK PRODUCTION BUILD 🎁')

module.exports = merge([
  {
    mode: 'production'
  },

  buildStyles()
])
