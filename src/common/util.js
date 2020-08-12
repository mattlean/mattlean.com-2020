/**
 * Generate path array
 * @param {string} pathname Pathname from Express req object for React Router location object
 * @return {Array} Path array
 */
export const genPathArr = (pathname) => {
  if (pathname === '/') return ['ROOT']

  const pathArr = pathname.split('/')
  return pathArr.filter((location) => location)
}

/**
 * Generate formatted path from pathname
 * @param {string} pathname Pathname from Express req object for React Router location object
 * @return {string} Formatted path
 */
export const genFormattedPath = (pathname) => {
  const pathArr = genPathArr(pathname)

  if (pathArr.length === 1 && pathArr[0] === 'ROOT') {
    return '/'
  }

  return `/${pathArr.join('/')}`
}
