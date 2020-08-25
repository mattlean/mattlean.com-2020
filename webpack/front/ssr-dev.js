const merge = require('webpack-merge')
const { buildStyles, loadMedia } = require('../parts')

module.exports = merge([
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

  loadMedia(),
])
