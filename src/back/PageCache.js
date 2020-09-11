/**
 * An in-memory cache that maintains page strings for server-side rendering
 */
class PageCache {
  constructor() {
    this.cache = new Map()
  }

  /**
   * Delete path from cache
   * @param {string} path Path from Express req object
   */
  delete(path) {
    this.cache.delete(path)
  }

  /**
   * Delete all paths in cache
   * @param {string} path Path from Express req object
   */
  flush() {
    this.cache.clear()
  }

  /**
   * Get page string associated with path in cache
   * @param {string} path Path from Express req object
   * @returns {string} Page string
   */
  get(path) {
    return this.cache.get(path)
  }

  /**
   * Set page & page string as key value pair in cache
   * @param {string} path Path from Express req object
   * @param {string} val Page string associated with path
   */
  set(path, val) {
    this.cache.set(path, val)
  }
}

export default PageCache
