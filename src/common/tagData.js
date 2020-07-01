const TAGS = {
  backend: 'Backend',
  cs: 'Case Study',
  design: 'Design',
  'design-system': 'Design System',
  'express-middleware': 'Express Middleware',
  frontend: 'Frontend',
  game: 'Game',
  'game-engine': 'Game Engine',
  lib: 'Library',
  misc: 'Miscellaneous',
  template: 'Website Template',
  tooling: 'Tooling',
  'web-app': 'Web App',
  website: 'Website',
  'wp-theme': 'WordPress Theme',
  'xd-plugin': 'Adobe XD Plugin',
}

/**
 * Get all tag data
 * @return {Object} All tag data
 */
export const getAllTagData = () => TAGS

/**
 * Get tag data associated with given ID
 * @param {string} id Project ID
 * @return {Object} Tag data
 */
export const getTagData = (id) => {
  return TAGS[id]
}
