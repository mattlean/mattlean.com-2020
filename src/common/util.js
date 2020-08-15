import { getRouteData, TITLE_SUFFIX } from './data/route'

/**
 * Generate path array
 * @param {string} pathname URL from Express req object or pathname from React Router location object
 * @return {Array} Path array
 */
export const genPathArr = (pathname) => {
  if (pathname === '/') return ['ROOT']

  const pathArr = pathname.split('/')
  return pathArr.filter((location) => location)
}

/**
 * Generate formatted path from pathname
 * @param {string} pathname URL from Express req object or pathname from React Router location object
 * @return {string} Formatted path
 */
export const genFormattedPath = (pathname) => {
  const pathArr = genPathArr(pathname)

  let path = '/'
  if (pathArr.length > 0 && pathArr[0] !== 'ROOT') {
    path += pathArr.join('/')
  }

  return path
}

/**
 * Attempt to retrieve data used in head element
 * @param {string} pathname URL from Express req object or pathname from React Router location object
 * @return {Object} Object with head data
 */
export const genHeadData = (pathname) => {
  const path = genFormattedPath(pathname)
  let desc, keywords, title
  const routeData = getRouteData(path)

  if (routeData) {
    // Route exists in routeData
    ;({ desc, keywords, title } = routeData)

    if (path !== '/') {
      title = `${title}${TITLE_SUFFIX}`
    }
  } else {
    // Route not found in routeData, use default values
    title = 'MattLean.com'
    ;({ desc, keywords } = getRouteData('/'))
  }

  return { desc, keywords, title }
}
