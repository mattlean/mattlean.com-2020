const merge = require('webpack-merge')
const { buildStyles } = require('ljas-webpack/style')
const { emitMedia } = require('ljas-webpack/media')

module.exports = merge([
  buildStyles({
    cssLoaderOptions: { sourceMap: true },
    miniCssExtractPluginOptions: { filename: 'style.css' },
    postCSSLoaderOptions: {
      postcssOptions: {
        plugins: [require('autoprefixer')],
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

  emitMedia({
    options: {
      name: '[name].[ext]',
      outputPath: 'media',
    },
  }),
])
