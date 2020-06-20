const merge = require('webpack-merge')
const path = require('path')
const { injectStyles, setupHTML } = require('./parts')

const PATHS = {
  src: path.join(__dirname, '../src')
}

module.exports = merge([
  {
    entry: './src/index.js',

    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '../build')
    }
  },

  compileJS({
    include: PATHS.src,
    options: {
      presets: ['@babel/preset-env']
    }
  }),

  injectStyles({
    cssLoaderOptions: { sourceMap: true },
    sassLoaderOptions: { sourceMap: true }
  }),
  
  setupHTML({title: 'Webpack demo'})
])
