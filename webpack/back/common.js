const merge = require('webpack-merge')
const { BACK } = require('../../PATHS')
const { cleanOutput, ignoreNodeModules, setFreeVariable } = require('../parts')
const { emitMedia } = require('../parts/media')
const { inlineReactSVGs } = require('../parts/react')
const { loadHTMLAsString } = require('../parts/html')

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

  cleanOutput(),

  emitMedia({
    options: {
      name: '[name].[ext]',
      outputPath: 'media',
    },
  }),

  ignoreNodeModules({ allowlist: [/^eswiss/] }),

  inlineReactSVGs(),

  loadHTMLAsString({ options: { attributes: false } }),

  setFreeVariable('__IS_SERVER__', true),
])
