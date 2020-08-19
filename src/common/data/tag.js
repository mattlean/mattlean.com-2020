const TAGS = {
  aws: 'AWS',
  backend: 'Backend',
  cs: 'Case Study',
  design: 'Design',
  'design-system': 'Design System',
  'desktop-app': 'Desktop App',
  'express-middleware': 'Express Middleware',
  frontend: 'Frontend',
  game: 'Game',
  'game-engine': 'Game Engine',
  lib: 'Library',
  misc: 'Miscellaneous',
  template: 'Website Template',
  tooling: 'Tooling',
  vis: 'Data Visualization',
  'web-app': 'Web App',
  'webpack-plugin': 'webpack Plugin',
  website: 'Website',
  'wp-theme': 'WordPress Theme',
  'xd-plugin': 'Adobe XD Plugin',
}

/**
 * Take array of tag IDs, return new array of tag data
 * @return {Array} Array of tag data
 */
export const genTagIDNameArray = (ids) => {
  const tagIDNameArray = []
  for (const id of ids) {
    tagIDNameArray.push({ id, name: TAGS[id] })
  }
  return tagIDNameArray
}

/**
 * Get all tag data
 * @return {Object} All tag data
 */
export const getAllTagData = () => TAGS

/**
 * Get tag name associated with given ID
 * @param {string} id Project ID
 * @return {Object} Tag name
 */
export const getTagName = (id) => {
  return TAGS[id]
}
