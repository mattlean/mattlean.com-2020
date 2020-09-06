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
 * and manages tracking dynamic navigation for Google Analytics
 * @param {Object} [override={}] Head data used to override default head data
 */
export const usePageLoadEffect = (override = {}) => {
  const { pathname } = useLocation()
  useEffect(() => {
    let {
      canon,
      desc,
      keywords,
      og_img,
      og_img_alt,
      og_img_height,
      og_img_width,
      og_type,
      title,
      twitter_card,
      twitter_img,
      twitter_img_alt,
    } = genHeadData(pathname)

    if (!canon && canon !== null && override.canon) canon = override.canon
    if (!desc && desc !== null && override.desc) desc = override.desc
    if (!keywords && keywords !== null && override.keywords)
      keywords = override.keywords
    if (!og_img && og_img !== null && override.og_img) og_img = override.og_img
    if (!og_img && og_img_alt !== null && override.og_img_alt)
      og_img_alt = override.og_img_alt
    if (!og_img && og_img_height !== null && override.og_img_height)
      og_img_height = override.og_img_height
    if (!og_img && og_img_width !== null && override.og_img_width)
      og_img_width = override.og_img_width
    if (!og_type && og_type !== null && override.og_type)
      og_type = override.og_type
    if (!title && title !== null && override.title) title = override.title
    if (!twitter_card && twitter_card !== null && override.twitter_card)
      twitter_card = override.twitter_card
    if (!twitter_img && twitter_img !== null && override.twitter_img)
      twitter_img = override.twitter_img

    document.title = title

    updateMeta('property', 'og:title', title)
    updateMeta('name', 'twitter:title', title)
    updateMeta('property', 'og:description', desc)
    updateMeta('name', 'twitter:description', desc)
    updateMeta('name', 'description', desc)
    updateMeta('property', 'og:image', og_img)
    updateMeta('property', 'og:image:alt', og_img_alt)
    updateMeta('property', 'og:image:height', og_img_height)
    updateMeta('property', 'og:image:width', og_img_width)
    updateMeta('name', 'twitter:image', twitter_img)
    updateMeta('name', 'twitter:image:alt', twitter_img_alt)
    updateMeta('property', 'og:url', canon)
    updateMeta('property', 'og:type', og_type)
    updateMeta('name', 'twitter:card', twitter_card)
    updateMeta('name', 'keywords', keywords)

    if (window.isInit === true) {
      console.log('set isInit to false')
      window.isInit = false
    } else {
      if (!__IS_DEVELOPMENT__) {
        console.log('page view sent', pathname)
        /* eslint-disable no-undef */
        console.log('gtag', gtag)
        gtag('config', 'UA-67002303-1', { page_path: pathname })
        /* eslint-enable no-undef */
      }
    }
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps
}
