const path = require('path')

const PATHS = {
  COMMON: path.join(__dirname, 'src/common'),
  BACK: {
    BUILD_DEV: path.join(__dirname, 'build/back/development'),
    BUILD_PROD: path.join(__dirname, 'build/back/production'),
    SRC: path.join(__dirname, 'src/back'),
  },
  FRONT: {
    BUILD_DEV: path.join(__dirname, 'build/front/development'),
    BUILD_FRONT_DEV: path.join(__dirname, 'build/front/front-dev'),
    BUILD_PROD: path.join(__dirname, 'build/front/production'),
    SRC: path.join(__dirname, 'src/front'),
  },
  SRC: path.join(__dirname, 'src'),
  NODE_MODULES: path.join(__dirname, 'node_modules'),
}

module.exports = PATHS
