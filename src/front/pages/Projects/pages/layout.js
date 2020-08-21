/**
 * Checks if project page uses text only layout
 * @param {string} id Project ID
 * @return {boolean} True if project page uses text only layout, false otherwise
 */
export const isTxtOnly = (id) => {
  const ids = new Set([
    'alwp',
    'checkpoint',
    'eswiss',
    'ffuh',
    'ml2020',
    'owl',
    'recha',
  ])
  return ids.has(id)
}
