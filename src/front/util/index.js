import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { genHeadData } from '../../common/util'

/**
 * Update meta element by updating its content attribute and add or remove element when necessary
 * @param {string} name Meta name attribute value
 * @param {string} value Meta content attribute value
 * @return {Object|null} Modified existing or newly added meta element, or null if the element was removed
 */
export const updateMeta = (name, value) => {
  let ele = document.querySelector(`meta[name="${name}"]`)

  if (!ele && !value) {
    return null
  }

  // Meta element exists but value doesn't
  if (ele && !value) {
    // Remove existing meta element
    ele.remove()
    return null
  }

  // Meta element doesn't exist but value does
  if (!ele && value) {
    // Create new meta element and append it to head element
    ele = document.createElement('meta')
    ele.setAttribute('name', name)
    document.head.appendChild(ele)
  }

  // If value is array, convert to string where each item is separated by a comma
  if (Array.isArray(value)) value = value.toString()

  // Set meta element content to new value
  ele.setAttribute('content', value)
}

/**
 * Custom hook that determines the values for title and meta elements in head element
 * @param {Object} [Object={}] Head data used to override default head data
 */
export const useHeadDataEffect = ({ desc, keywords, title } = {}) => {
  const { pathname } = useLocation()
  useEffect(() => {
    const headData = genHeadData(pathname)

    /* eslint-disable react-hooks/exhaustive-deps */
    if (!desc && desc !== null) desc = headData.desc
    if (!keywords && keywords !== null) keywords = headData.keywords
    if (!title && title !== null) title = headData.title
    /* eslint-enable react-hooks/exhaustive-deps */

    document.title = title
    updateMeta('description', desc)
    updateMeta('keywords', keywords)
  }, [pathname])
}
