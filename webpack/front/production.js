const merge = require('webpack-merge')
const {
  buildStyles,
  compileJS,
  genAssetList,
  genSourceMaps,
  loadMedia,
  minifyJS,
  purgeCSS,
  setFreeVariable,
  setMode,
} = require('../parts')
const { COMMON, FRONT, NODE_MODULES } = require('../../PATHS')

// eslint-disable-next-line no-console
console.log('🤡🎁 STARTING FRONTEND PRODUCTION BUILD PROCESS 🎁🤡')

let productionConfig = merge([
  {
    entry: `${FRONT.SRC}/index.jsx`,

    output: {
      chunkFilename: '[name].[chunkhash:4].js',
      filename: '[name].[chunkhash:4].js',
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
    miniCssExtractPluginOptions: { filename: 'style.[contenthash:4].css' },
    postCSSLoaderOptions: {
      config: { path: 'webpack/front/prod' },
      sourceMap: true,
    },
    sassLoaderOptions: {
      sassOptions: {
        includePaths: ['node_modules/eswiss/dist'],
      },
      sourceMap: true,
    },
  }),

  genAssetList({ format: 'object', key: 'name' }),

  genSourceMaps('source-map'),

  loadMedia(undefined, undefined, {
    name: '[name].[ext]',
    outputPath: 'media',
  }),

  minifyJS(),

  purgeCSS(`${FRONT.BUILD_PROD}/**/*`),

  setFreeVariable('__IS_DEVELOPMENT__', false),
])

if (process.env.GA) {
  productionConfig = merge(
    productionConfig,
    setFreeVariable('__GA__', process.env.GA)
  )
} else {
  throw new Error(
    'Google Analytics tracking ID must be explicitly defined when building for production environment'
  )
}

module.exports = productionConfig
