const merge = require('webpack-merge')
const { BACK } = require('../../PATHS')
const {
  cleanBuild,
  ignoreNodeModules,
  loadHTMLAsString,
  loadMedia,
  loadSVGs,
  setFreeVariable,
} = require('../parts')

module.exports = merge([
  {
    entry: `${BACK.SRC}/index.js`,

    output: {
      filename: 'server.js',
      publicPath: '/',
    },

    node: {
      __dirname: true,
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    target: 'node',
  },

  cleanBuild(),

  ignoreNodeModules({ allowlist: [/^eswiss/] }),

  loadHTMLAsString({ attributes: false }),

  loadMedia(undefined, undefined, {
    name: '[name].[ext]',
    outputPath: 'media',
  }),

  loadSVGs(),

  setFreeVariable('__IS_SERVER__', true),
])
