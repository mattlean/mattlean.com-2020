const merge = require('webpack-merge')
const { BACK, NODE_MODULES, SRC } = require('../../PATHS')
const {
  compileJS,
  genSourceMaps,
  setFreeVariable,
  setMode,
} = require('../parts')

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
    include: [SRC, `${NODE_MODULES}/eswiss`],
    options: {
      presets: [['@babel/preset-react', { development: true }]],
    },
  }),

  setFreeVariable('__IS_DEVELOPMENT__', true),

  genSourceMaps('cheap-module-eval-source-map'),
])
