/**
 * Get root path from pathname
 * @param {string} pathname Pathname from Express req object for React Router location object
 */
export const getRootPath = (pathname) => `/${pathname.split('/')[1]}`
