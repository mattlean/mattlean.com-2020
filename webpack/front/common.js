const merge = require('webpack-merge')
const { cleanBuild, injectStyles, setFreeVariable } = require('../parts')
const { FRONT } = require('../../PATHS')

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

  setFreeVariable('__isServer__', false),
])
