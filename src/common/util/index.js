import { getRouteData } from '../data/route'
import { TITLE_SUFFIX } from '../data/route/const'

/**
 * Generate path array
 * @param {string} pathname Path from Express req object or pathname from React Router location object
 * @return {Array} Path array
 */
export const genPathArr = (pathname) => {
  if (pathname === '/') return ['ROOT']

  const pathArr = pathname.split('/')
  return pathArr.filter((location) => location)
}

/**
 * Generate formatted path from pathname
 * @param {string} pathname Path from Express req object or pathname from React Router location object
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
 * @param {string} pathname Path from Express req object or pathname from React Router location object
 * @return {Object} Object with head data
 */
export const genHeadData = (pathname) => {
  const path = genFormattedPath(pathname)
  let canon,
    desc,
    keywords,
    og_img,
    og_img_secure,
    og_img_alt,
    og_img_height,
    og_img_width,
    og_type,
    title,
    twitter_card,
    twitter_img,
    twitter_img_alt
  const routeData = getRouteData(path)

  if (routeData) {
    // Route exists in routeData
    ;({
      canon,
      desc,
      keywords,
      og_img,
      og_img_secure,
      og_img_alt,
      og_img_height,
      og_img_width,
      og_type,
      title,
      twitter_card,
      twitter_img,
      twitter_img_alt,
    } = routeData)

    if (path !== '/') {
      title += TITLE_SUFFIX
    }
  } else {
    // Route not found in routeData, use default values
    title = 'MattLean.com'
    ;({ desc, keywords } = getRouteData('/'))
  }

  return {
    canon,
    desc,
    keywords,
    og_img,
    og_img_secure,
    og_img_alt,
    og_img_height,
    og_img_width,
    og_type,
    title,
    twitter_card,
    twitter_img,
    twitter_img_alt,
  }
}
