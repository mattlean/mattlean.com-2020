const merge = require('webpack-merge')
const {
  compileJS,
  genSourceMaps,
  setMode,
  setupDevServer,
} = require('../parts')
const { FRONT } = require('../../PATHS')

// eslint-disable-next-line no-console
console.log('🤖🤡📦 STARTING FRONTEND DEVELOPMENT BUILD PROCESS 📦🤡🤖')

module.exports = merge([
  {
    output: {
      path: FRONT.BUILD_DEV,
    },
  },

  setMode('development'),

  compileJS({
    include: FRONT.SRC,
    options: {
      presets: [['@babel/preset-react', { development: true }]],
    },
  }),

  genSourceMaps('cheap-module-eval-source-map'),
])
