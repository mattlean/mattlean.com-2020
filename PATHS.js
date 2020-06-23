const path = require('path')

const PATHS = {
  BACK: {
    BUILD_DEV: path.join(__dirname, 'build/back/development'),
    BUILD_PROD: path.join(__dirname, 'build/back/production'),
    SRC: path.join(__dirname, 'src/back'),
  },
  FRONT: {
    BUILD_DEV: path.join(__dirname, 'build/front/development'),
    BUILD_PROD: path.join(__dirname, 'build/front/production'),
    SRC: path.join(__dirname, 'src/front'),
  },
  SRC: path.join(__dirname, 'src'),
}

module.exports = PATHS
