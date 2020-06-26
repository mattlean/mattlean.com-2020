const merge = require('webpack-merge')
const { BACK, SRC } = require('../../PATHS')
const { compileJS, genSourceMaps, loadImgs, setMode } = require('../parts')

// eslint-disable-next-line no-console
console.log('🤖🎁 STARTING BACKEND PRODUCTION BUILD PROCESS 🎁🤖')

module.exports = merge([
  {
    output: {
      path: BACK.BUILD_PROD,
    },
  },

  setMode('production'),

  compileJS({
    include: SRC,
    options: {
      presets: ['@babel/preset-react'],
    },
  }),

  genSourceMaps('source-map'),

  loadImgs(),
])
