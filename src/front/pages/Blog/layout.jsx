/**
 * Checks if blog post uses general layout
 * @param {string} id Blog post ID
 * @return {boolean} True if blog post uses general layout, false otherwise
 */
export const isGeneral = (id) => {
  const ids = new Set(['hello-world'])
  return ids.has(id)
}
