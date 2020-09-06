import { genTagIDNameArray } from './tag'
import FeaturedEswiss from '../../front/assets/featured/eswiss-featured.jpg'
import FeaturedGridnik from '../../front/assets/featured/gridnik-featured.jpg'

export const ORDER = [
  'sot',
  'ml2020',
  'gridnik',
  'eswiss',
  'ljas',
  'recha',
  'ffuh',
  'checkpoint',
  'crush',
  'adam',
  'alwp',
  'lean-space',
  'lantern',
  'themeboot',
  'owl',
]

const PROJECTS = {
  adam: {
    id: 'adam',
    name: 'Adam Engine',
    short: 'Browser-based 2D game engine',
    long: 'A browser-based 2D game engine.',
    tags: ['game-engine', 'frontend'],
  },
  alwp: {
    id: 'alwp',
    name: 'Asset List Webpack Plugin',
    short:
      'webpack plugin that outputs a list of generated assets from the bundle',
    long:
      'A webpack plugin that outputs a list of generated assets from the bundle.',
    tags: ['webpack-plugin', 'tooling'],
  },
  checkpoint: {
    id: 'checkpoint',
    name: 'Checkpoint.js',
    short: 'Data validation & transformation library',
    long: 'A data validation and transformation library.',
    tags: ['lib', 'frontend', 'backend'],
  },
  crush: {
    id: 'crush',
    name: 'qPCR Crush',
    company: 'LGC Biosearch Technologies',
    short: 'Branded tile-matching game',
    long: 'An LGC Biosearch Technologies-branded tile-matching game.',
    tags: ['game', 'backend', 'design', 'frontend'],
  },
  eswiss: {
    id: 'eswiss',
    name: 'eswiss',
    short: 'Design system built on Swiss & International Style principles',
    long:
      'A design system built on principles from the Swiss & International Typographic Styles.',
    live: 'http://mattlean.github.io/eswiss',
    featured: {
      img: FeaturedEswiss,
      alt: 'Featured image for eswiss project: the eswiss logo',
    },
    tags: ['design-system', 'design', 'frontend'],
  },
  ffuh: {
    id: 'ffuh',
    name: 'express-ffuh',
    short: 'Express middleware that handles AWS S3 & local file system uploads',
    long:
      'An Express middleware that handles Amazon S3 and local file system uploads.',
    tags: ['express-middleware', 'aws', 'backend'],
  },
  gridnik: {
    id: 'gridnik',
    name: 'Gridnik',
    short: 'Adobe XD plugin that extends its grid generation capabilities',
    long: 'An Adobe XD plugin that extends its grid generation capabilities.',
    featured: {
      img: FeaturedGridnik,
      alt: 'Featured image for Gridnik: the Gridnik logo',
    },
    tags: ['xd-plugin', 'design', 'frontend'],
  },
  lantern: {
    id: 'lantern',
    name: 'Lantern.js',
    short: 'Lightweight image lightbox library',
    long:
      'A simple-to-use, lightweight library for creating customizable image lightboxes.',
    tags: ['lib', 'frontend'],
  },
  'lean-space': {
    id: 'lean-space',
    name: 'Lean Space',
    short: 'Personal website built in 2015',
    long: 'The previous iteration of my personal website built in 2015.',
    live: 'http://leanspace.mattlean.com',
    tags: ['website', 'design', 'frontend'],
  },
  ljas: {
    id: 'ljas',
    name: 'Lean JavaScript Application Starter',
    short:
      'Starter JavaScript project to kickoff development for your next web, Node.js, or native desktop app',
    long:
      'A starter project to kickoff development for your next web, Node.js, or native desktop application.',
    tags: ['tooling', 'backend', 'desktop-app', 'frontend', 'web-app'],
  },
  ml2020: {
    id: 'ml2020',
    name: 'MattLean.com',
    short: 'Current personal website built in 2020',
    long: 'The latest iteration of my personal website.',
    tags: ['website', 'backend', 'design', 'design-system', 'frontend'],
  },
  owl: {
    id: 'owl',
    name: 'Project Owl',
    short: 'Personal scheduling & finance management app',
    long: 'A personal scheduling and finance management application.',
    tags: ['mobile-app', 'web-app', 'backend', 'frontend'],
  },
  sot: {
    id: 'sot',
    name: 'Spectral Overlay Tool',
    company: 'LGC Biosearch Technologies',
    short:
      'Tool for visualizing absorption and emission spectra for fluorescent dyes and quenchers',
    long:
      'A tool for visualizing absorption and emission spectra for fluorescent dyes and quenchers.',
    live: 'https://biosearchtech.com/qpcr-multiplex-spectral-overlay-tool',
    tags: ['web-app', 'vis', 'design', 'frontend', 'tooling'],
  },
  recha: {
    id: 'recha',
    name: 'Recha',
    short: 'Task & schedule management app that helps you achieve your goals',
    long:
      'A personal task and schedule management application that helps you achieve your goals.',
    tags: ['desktop-app', 'backend', 'frontend'],
  },
  themeboot: {
    id: 'themeboot',
    name: 'ThemeBoot',
    short: 'Bootstrap-powered website layout',
    long:
      'A Bootstrap-powered website layout available as a WordPress theme or static template.',
    tags: ['wp-theme', 'template', 'backend', 'frontend'],
  },
}

// Format tag data
for (const key in PROJECTS) {
  PROJECTS[key].tags = genTagIDNameArray(PROJECTS[key].tags)
}

/**
 * Get all project data
 * @return {Array} Array of all project data in order
 */
export const getAllProjectData = () => {
  const data = []
  for (const id of ORDER) {
    data.push(getProjectData(id))
  }
  return data
}

/**
 * Get project data associated with given ID
 * @param {string} id Project ID
 * @return {Object} Project data
 */
export const getProjectData = (id) => {
  return PROJECTS[id]
}
/**
 * Get property value in project data associated with given ID
 * @param {string} id Project ID
 * @param {string} prop Project data property name
 * @return {Array|string} Value stored at project data property
 */
export const getProjectProp = (id, prop) => {
  if (PROJECTS[id]) {
    return PROJECTS[id][prop]
  }
}
