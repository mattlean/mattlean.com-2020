/**
 * Checks if blog post uses case study layout
 * @param {string} id Blog post ID
 * @return {boolean} True if blog post uses case study layout, false otherwise
 */
export const isCaseStudy = (id) => {
  const ids = new Set(['cs-lean-space'])
  return ids.has(id)
}

/**
 * Checks if blog post uses general layout
 * @param {string} id Blog post ID
 * @return {boolean} True if blog post uses general layout, false otherwise
 */
export const isGeneral = (id) => {
  const ids = new Set(['hello-world'])
  return ids.has(id)
}
