import BLOG_ROUTES from './blog'
import PROJECT_ROUTES from './project'
import ROOT_ROUTES from './ROOT_ROUTES.json'

const ROUTES = {
  ...ROOT_ROUTES,
  ...PROJECT_ROUTES,
  ...BLOG_ROUTES,
}

/**
 * Get all route data
 * @return {Object} Array route data
 */
export const getAllRouteData = () => ROUTES

/**
 * Get route data associated with given ID
 * @param {string} id Route ID
 * @return {Object} Route data
 */
export const getRouteData = (id) => {
  return ROUTES[id]
}

/**
 * Get property value in project data associated with given ID
 * @param {string} id Route ID
 * @param {string} prop Route data property name
 * @return {Array|string} Value stored at route data property
 */
export const getRouteProp = (id, prop) => {
  if (ROUTES[id]) {
    if (!ROUTES[id][prop] && prop === 'title') {
      // eslint-disable-next-line no-console
      console.warn('Route not found. Setting generic title.')
      return 'MattLean.com'
    }
    return ROUTES[id][prop]
  }
}
