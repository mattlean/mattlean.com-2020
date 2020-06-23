const merge = require('webpack-merge')
const path = require('path')
const { BACK } = require('../PATHS')
const { cleanBuild, ignoreNodeModules, loadHTMLAsString } = require('../parts')

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
])
