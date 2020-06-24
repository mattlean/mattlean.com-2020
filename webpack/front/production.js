const merge = require('webpack-merge')
const { buildStyles, compileJS, genSourceMaps, setMode } = require('../parts')
const { FRONT } = require('../../PATHS')

// eslint-disable-next-line no-console
console.log('🤡🎁 STARTING FRONTEND PRODUCTION BUILD PROCESS 🎁🤡')

module.exports = merge([
  {
    output: {
      path: FRONT.BUILD_PROD,
    },
  },

  setMode('production'),

  compileJS({
    include: FRONT.SRC,
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
        '@babel/preset-react',
      ],
    },
  }),

  buildStyles(),

  genSourceMaps('source-map'),
])
