const merge = require('webpack-merge')
const {
  buildStyles,
  compileJS,
  genSourceMaps,
  loadMedia,
  setMode,
} = require('../parts')
const { COMMON, FRONT, NODE_MODULES } = require('../../PATHS')

// eslint-disable-next-line no-console
console.log('🤡🎁 STARTING FRONTEND PRODUCTION BUILD PROCESS 🎁🤡')

module.exports = merge([
  {
    entry: `${FRONT.SRC}/index.jsx`,

    output: {
      path: FRONT.BUILD_PROD,
    },
  },

  setMode('production'),

  compileJS({
    include: [FRONT.SRC, COMMON, `${NODE_MODULES}/eswiss`],
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
    sassLoaderOptions: {
      sassOptions: {
        includePaths: ['node_modules/eswiss/dist'],
      },
      sourceMap: true,
    },
  }),

  genSourceMaps('source-map'),

  loadMedia(undefined, undefined, {
    name: '[name].[ext]',
    outputPath: 'media',
  }),
])
