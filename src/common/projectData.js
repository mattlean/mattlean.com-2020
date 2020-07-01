const ORDER = [
  'gridnik',
  'ml2020',
  'eswiss',
  'sot',
  'ffuh',
  'checkpoint',
  'ljsas',
  'crush',
  'adam',
  'lean-space',
  'lantern',
  'themeboot',
]
const PROJECTS = {
  adam: {
    name: 'Adam Engine',
    long: 'A 2D game engine built with HTML5 Canvas.',
    tags: ['game-engine', 'frontend'],
  },
  checkpoint: {
    name: 'Checkpoint.js',
    long: 'A data validation and transformation library.',
    tags: ['library', 'frontend', 'backend'],
  },
  crush: {
    name: 'qPCR Crush',
    long: 'An LGC Biosearch Technologies branded tile-matching game.',
    tags: ['game', 'backend', 'design', 'frontend'],
  },
  eswiss: {
    name: 'eswiss',
    short:
      'A design system built on Swiss/International style design principles.',
    long:
      'A design system built on Swiss & International style design principles.',
    tags: ['design-system', 'design', 'frontend'],
  },
  ffuh: {
    name: 'express-ffuh',
    long:
      'An Express middleware that handles Amazon S3 and local file system uploads.',
    tags: ['express-middleware', 'backend'],
  },
  gridnik: {
    name: 'Gridnik',
    short: "Extend Adobe XD's grid generation capabilities.",
    long: 'An Adobe XD plugin that extends its grid generation capabilities.',
    tags: ['xd-plugin', 'design', 'frontend'],
  },
  lantern: {
    name: 'Lantern.js',
    long: 'A simple-to-use, lightweight, and customizable image lightbox.',
    tags: ['library', 'frontend'],
  },
  'lean-space': {
    name: 'Lean Space',
    long: 'The previous iteration of my personal website built in 2015.',
    tags: ['website', 'design', 'frontend'],
  },
  ljsas: {
    name: 'Lean JavaScript Application Starter',
    long:
      'A starter project to kickoff development for your next web, Node.js, or desktop application.',
    tags: ['tooling'],
  },
  ml2020: {
    name: 'MattLean.com',
    long:
      'The latest iteration of my personal website utilizing my personal identity.',
    tags: ['website', 'backend', 'design', 'design-system', 'frontend'],
  },
  sot: {
    name: 'Spectral Overlay Tool',
    long:
      'A tool for visualizing absorption and emission spectra for fluorescent dyes and quenchers.',
    tags: ['web-app', 'design', 'frontend', 'tooling'],
  },
  themeboot: {
    name: 'ThemeBoot',
    long:
      'A Bootstrap powered website layout built for use as a WordPress theme or a static HTML & CSS template.',
    tags: ['wordpress-theme', 'website-template', 'backend', 'frontend'],
  },
}

/**
 * Get all project data
 * @return {Array} Array of all project data in order
 */
export const getAllProjectData = () => {
  const data = []
  for (const id in ORDER) {
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
 * Get project data associated with
 * @param {string} id Propject ID
 * @param {string} prop Project data property name
 * @return {Array|string} Value stored at project data property
 */
export const getProjectProp = (id, prop) => {
  if (PROJECTS[id]) {
    return PROJECTS[id][prop]
  }
}
