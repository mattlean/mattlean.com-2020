const merge = require('webpack-merge')
const path = require('path')
const { cleanBuild, injectStyles, setupHTML } = require('../parts')
const { FRONT } = require('../PATHS')

module.exports = merge([
  {
    entry: `${FRONT.SRC}/index.jsx`,

    output: {
      filename: 'main.js',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },

  cleanBuild(),

  injectStyles({
    cssLoaderOptions: { sourceMap: true },
    sassLoaderOptions: { sourceMap: true },
  }),
])
