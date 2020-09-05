const merge = require('webpack-merge')
const { BACK, NODE_MODULES, SRC } = require('../../PATHS')
const { compileJS, genSourceMaps, minifyJS, setMode } = require('../parts')

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
    include: [SRC, `${NODE_MODULES}/eswiss`],
    options: {
      presets: ['@babel/preset-react'],
    },
  }),

  genSourceMaps('source-map'),

  minifyJS(),
])
