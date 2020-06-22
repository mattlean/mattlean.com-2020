const merge = require('webpack-merge')
const { BACK } = require('../paths')
const { compileJS, genSourceMaps, setMode } = require('../parts')

module.exports = merge([
  setMode('development'),

  compileJS({
    include: BACK.SRC,
    options: {
      presets: [['@babel/preset-react', { development: true }]],
    },
  }),

  genSourceMaps('cheap-module-eval-source-map'),
])
