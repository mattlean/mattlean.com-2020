const merge = require('webpack-merge')
const {
  compileJS,
  genSourceMaps,
  setMode,
  setupDevServer,
} = require('../parts')
const { FRONT } = require('../PATHS')

// eslint-disable-next-line no-console
console.log('🤖🤡📦 STARTING FRONTEND DEVELOPMENT BUILD PROCESS 📦🤡🤖')

module.exports = merge([
  setMode('development'),

  compileJS({
    include: FRONT.SRC,
    options: {
      presets: [['@babel/preset-react', { development: true }]],
    },
  }),

  setupDevServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),

  genSourceMaps('cheap-module-eval-source-map'),
])
