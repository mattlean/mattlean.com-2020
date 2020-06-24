const merge = require('webpack-merge')
const { BACK } = require('../../PATHS')
const {
  cleanBuild,
  ignoreNodeModules,
  loadHTMLAsString,
  setFreeVariable,
} = require('../parts')

module.exports = merge([
  {
    entry: `${BACK.SRC}/index.js`,

    node: {
      __dirname: true,
    },

    output: {
      filename: 'server.js',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    target: 'node',
  },

  cleanBuild(),

  ignoreNodeModules(),

  loadHTMLAsString({ attributes: false }),

  setFreeVariable('__isServer__', true),
])
