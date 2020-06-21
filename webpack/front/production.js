const merge = require('webpack-merge')
const { buildStyles, cleanBuild, genSourceMaps } = require('../parts')

// eslint-disable-next-line no-console
console.log('🚚🎁 INITIATING WEBPACK PRODUCTION BUILD 🎁🚚')

module.exports = merge([
  {
    mode: 'production',
  },

  cleanBuild(),

  buildStyles(),

  genSourceMaps('source-map'),
])
