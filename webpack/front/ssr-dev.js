const merge = require('webpack-merge')
const { buildStyles, loadMedia } = require('../parts')

module.exports = merge([
  buildStyles({
    cssLoaderOptions: { sourceMap: true },
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

  loadMedia(undefined, undefined, {
    name: '[name].[ext]',
    outputPath: 'media',
  }),
])
