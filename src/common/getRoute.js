const SUFFIX = ' | Matt Lean'

const ROUTES = {
  '/': {
    title: 'Matt Lean — Full-Stack Web Developer & UI/UX Designer',
  },
  '/about': {
    title: 'About ' + SUFFIX,
  },
  '/contact': {
    title: 'Contact ' + SUFFIX,
  },
}

/**
 * Get route title if it exists.
 * @param {string} pathname Current URL from Express req object or pathname from React Router location object
 * @return {string|'MattLean.com'} Returns route title or "MattLean.com" if route was not found
 */
const getRoute = (pathname) => {
  if (ROUTES[pathname]) {
    return ROUTES[pathname].title
  }

  // eslint-disable-next-line no-console
  console.warn('Route not found. Setting generic title.')
  return 'MattLean.com'
}

export default getRoute
