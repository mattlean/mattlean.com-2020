const merge = require('webpack-merge')
const {
  cleanOutput,
  ignoreNodeModules,
  setFreeVariable,
} = require('ljas-webpack')
const { emitMedia } = require('ljas-webpack/media')
const { inlineReactSVGs } = require('ljas-webpack/react')
const { loadHTMLAsString } = require('ljas-webpack/html')
const { BACK } = require('../../PATHS')

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
