const merge = require('webpack-merge')
const {
  buildStyles,
  compileJS,
  genSourceMaps,
  loadImgs,
  setMode,
} = require('../parts')
const { FRONT, NODE_MODULES } = require('../../PATHS')

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
    include: [FRONT.SRC, `${NODE_MODULES}/eswiss`],
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

  buildStyles({
    cssLoaderOptions: { sourceMap: true },
    postCSSLoaderOptions: { config: { path: 'webpack' }, sourceMap: true },
    sassLoaderOptions: { sourceMap: true },
  }),

  genSourceMaps('source-map'),

  loadImgs(),
])
