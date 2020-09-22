const merge = require('webpack-merge')
const { buildStyles } = require('../parts/style')
const { emitMedia } = require('../parts/media')

module.exports = merge([
  buildStyles({
    cssLoaderOptions: { sourceMap: true },
    miniCssExtractPluginOptions: { filename: 'style.css' },
    postCSSLoaderOptions: {
      config: { path: 'webpack/front/dev' },
      sourceMap: true,
    },
    sassLoaderOptions: {
      sassOptions: {
        includePaths: ['node_modules/eswiss/dist'],
      },
      sourceMap: true,
    },
  }),

  emitMedia({
    options: {
      name: '[name].[ext]',
      outputPath: 'media',
    },
  }),
])
