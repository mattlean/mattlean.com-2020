const merge = require('webpack-merge')
const { buildStyles } = require('ljas-webpack/style')
const {
  compileJS,
  genAssetList,
  genSourceMaps,
  minifyJS,
  // purgeCSS,
  setFreeVariable,
  setMode,
  splitVendor,
} = require('ljas-webpack')
const { emitMedia } = require('ljas-webpack/media')
// const { sync } = require('glob')
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

  buildStyles({
    cssLoaderOptions: { sourceMap: true },
    miniCssExtractPluginOptions: { filename: 'style.[contenthash:4].css' },
    postCSSLoaderOptions: {
      postcssOptions: {
        plugins: [
          require('autoprefixer'),
          require('cssnano')({ preset: 'default' }),
        ],
      },
      sourceMap: true,
    },
    sassLoaderOptions: {
      sassOptions: {
        includePaths: ['node_modules/eswiss/dist'],
      },
      sourceMap: true,
    },
  }),

  compileJS({
    include: [FRONT.SRC, COMMON, `${NODE_MODULES}/eswiss`],
    options: {
      plugins: [
        [
          'prismjs',
          {
            languages: ['ejs', 'jsx', 'scss'],
          },
        ],
      ],
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

  genAssetList({ format: 'object', key: 'name' }),

  genSourceMaps('source-map'),

  emitMedia({
    options: {
      name: '[name].[ext]',
      outputPath: 'media',
    },
  }),

  minifyJS({ sourceMap: true }),

  // purgeCSS({
  //   paths: sync(`${FRONT.SRC}/**/*`, { nodir: true }),
  //   whitelistPatterns: [/badge/, /logo/, /modal/, /sun-moon/],
  // }),

  setFreeVariable('__IS_DEVELOPMENT__', false),

  splitVendor(),
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
