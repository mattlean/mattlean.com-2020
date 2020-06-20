const merge = require('webpack-merge')
const path = require('path')
const { compileJS, injectStyles, setupHTML } = require('./parts')

const PATHS = {
  src: path.join(__dirname, '../src'),
}

module.exports = merge([
  {
    entry: './src/index.jsx',

    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '../build'),
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },

  compileJS({
    include: PATHS.src,
  }),

  injectStyles({
    cssLoaderOptions: { sourceMap: true },
    sassLoaderOptions: { sourceMap: true },
  }),

  setupHTML({ title: 'Webpack demo' }),
])
