import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { genHeadData } from '../../common/util'

/**
 * Create intersection observer
 * @param {Object} ref React ref
 * @param {Object} options Intersection observer options
 * @param {function} cb Callback function run by intersection observer
 */
export const createObserver = (ref, options, cb) => {
  const observer = new IntersectionObserver(cb, options)
  if (ref.current) {
    observer.observe(ref.current)
  } else {
    // eslint-disable-next-line no-console
    console.warn('Reference to blind not found. Observer was not set.')
  }

  return observer
}

/**
 * Update meta element by updating its content attribute and add or remove element when necessary
 * @param {string} attribute Meta attribute
 * @param {string} attributeVal Meta attribute value
 * @param {string} contentVal Meta content attribute value
 * @return {Object|null} Modified existing or newly added meta element, or null if the element was removed
 */
export const updateMeta = (attribute, attributeVal, contentVal) => {
  let ele = document.querySelector(`meta[${attribute}="${attributeVal}"]`)

  if (!ele && !contentVal) {
    return null
  }

  // Meta element exists but contentVal doesn't
  if (ele && !contentVal) {
    // Remove existing meta element
    ele.remove()
    return null
  }

  // Meta element doesn't exist but contentVal does
  if (!ele && contentVal) {
    // Create new meta element and append it to head element
    ele = document.createElement('meta')
    ele.setAttribute(attribute, attributeVal)
    document.head.appendChild(ele)
  }

  // If contentVal is array, convert to string where each item is separated by a comma
  if (Array.isArray(contentVal)) contentVal = contentVal.toString()

  // Set meta element content to new contentVal
  ele.setAttribute('content', contentVal)
}

/**
 * Custom hook that determines the values for title and meta elements in head element
 * @param {Object} [Object={}] Head data used to override default head data
 */
export const useHeadDataEffect = (override = {}) => {
  const { pathname } = useLocation()
  useEffect(() => {
    const headData = genHeadData(pathname)

    let {
      canon,
      desc,
      keywords,
      og_img,
      og_img_alt,
      title,
      twitter_card,
      twitter_img,
      twitter_img_alt,
    } = headData

    if (!canon && canon !== null) canon = override.canon
    if (!desc && desc !== null) desc = override.desc
    if (!keywords && keywords !== null) keywords = override.keywords
    if (!og_img && og_img !== null) og_img = override.og_img
    if (!title && title !== null) title = override.title
    if (!twitter_card && twitter_card !== null)
      twitter_card = override.twitter_card
    if (!twitter_img && twitter_img !== null) twitter_img = override.twitter_img

    document.title = title

    updateMeta('property', 'og:title', title)
    updateMeta('name', 'twitter:title', title)
    updateMeta('property', 'og:description', desc)
    updateMeta('name', 'twitter:description', desc)
    updateMeta('name', 'description', desc)
    updateMeta('property', 'og:image', og_img)
    updateMeta('property', 'og:image:alt', og_img_alt)
    updateMeta('name', 'twitter:image', twitter_img)
    updateMeta('name', 'twitter:image:alt', twitter_img_alt)
    updateMeta('property', 'og:url', canon)
    updateMeta('name', 'twitter:card', twitter_card)
    updateMeta('name', 'keywords', keywords)
  }, [override, pathname])
}
