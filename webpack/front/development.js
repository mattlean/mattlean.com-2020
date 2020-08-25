const merge = require('webpack-merge')
const {
  compileJS,
  copyFiles,
  genSourceMaps,
  loadDevMedia,
  setMode,
} = require('../parts')
const { COMMON, FRONT, NODE_MODULES } = require('../../PATHS')

// eslint-disable-next-line no-console
console.log('🤡📦 STARTING FRONTEND DEVELOPMENT BUILD PROCESS 📦🤡')

module.exports = merge([
  {
    entry: `${FRONT.SRC}/index.jsx`,

    output: {
      path: FRONT.BUILD_DEV,
    },
  },

  setMode('development'),

  compileJS({
    include: [FRONT.SRC, COMMON, `${NODE_MODULES}/eswiss`],
    options: {
      presets: [['@babel/preset-react', { development: true }]],
    },
  }),

  copyFiles([{ from: 'src/front/util/dev.js' }]),

  genSourceMaps('cheap-module-eval-source-map'),

  loadDevMedia(),
])
