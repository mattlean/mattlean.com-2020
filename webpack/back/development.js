const merge = require('webpack-merge')
const { BACK, SRC } = require('../../PATHS')
const { compileJS, genSourceMaps, loadDevImgs, setMode } = require('../parts')

// eslint-disable-next-line no-console
console.log('🤖📦 STARTING BACKEND DEVELOPMENT BUILD PROCESS 📦🤖')

module.exports = merge([
  {
    output: {
      path: BACK.BUILD_DEV,
    },
  },

  setMode('development'),

  compileJS({
    include: SRC,
    options: {
      presets: [['@babel/preset-react', { development: true }]],
    },
  }),

  genSourceMaps('cheap-module-eval-source-map'),

  loadDevImgs(),
])
