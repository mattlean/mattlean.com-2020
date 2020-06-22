const path = require('path')

const PATHS = {
  BACK: {
    BUILD: path.join(__dirname, '../build/back'),
    SRC: path.join(__dirname, '../src/back'),
  },
  FRONT: {
    BUILD: path.join(__dirname, '../build/front'),
    SRC: path.join(__dirname, '../src/front'),
  },
}

module.exports = PATHS
