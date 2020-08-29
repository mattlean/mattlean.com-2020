import { createObserver } from '../../util'
import { useEffect, useRef, useState } from 'react'

/**
 *
 * @param {number} index Index for blind in corresponding array data
 * @param {number|Array} threshold A single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for observed target
 * @param {Object} observerData Array of observer data that is used to access ref & setObserver
 * @param {Array} blindVisibleStates Array of blind visible states
 * @return {Observer} New observer
 */
export const setupBlindObserver = (
  index,
  threshold,
  observerData,
  blindVisibleStates
) => {
  const { ref, setObserver } = observerData[index]

  const observer = createObserver(ref, { threshold }, (entries) => {
    if (entries[0].intersectionRatio >= threshold) {
      blindVisibleStates[index].setIsVisible(true)
    }
  })

  setObserver(observer)

  return observer
}

/**
 *
 * @param {Array} thresholds Array of single numbers or arrays of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for observed targets
 * @param {Object} observerData Array of observer data that is used to access ref & setObserver
 * @param {Array} blindVisibleStates Array of blind visible states
 * @return {Array} Array of new observers
 */
export const setupBlindObservers = (
  thresholds,
  observerData,
  blindVisibleStates
) => {
  const observers = []
  for (let i = 0; i < thresholds.length; i += 1) {
    observers.push(
      setupBlindObserver(i, thresholds[i], observerData, blindVisibleStates)
    )
  }
  return observers
}

/**
 *
 * @param {number} numBlinds Number of blinds
 * @return {Object} Data and functions necessary for initial animation
 */
export const useInitAnim = (numBlinds) => {
  // Determines if blind is visible within viewport
  const blindVisibleStates = []
  for (let i = 0; i < numBlinds; i += 1) {
    const [isVisible, setIsVisible] = useState(false)
    blindVisibleStates.push({ isVisible, setIsVisible })
  }

  // Set blindVisibleStates ref
  const blindVisibleStatesRef = useRef(blindVisibleStates)
  useEffect(() => {
    blindVisibleStatesRef.current = blindVisibleStates
  })

  // Create refs
  const refs = []
  for (let i = 0; i < numBlinds; i += 1) {
    refs.push(useRef(null))
  }

  // Controls animation parameters for blinds
  const blindStates = []
  for (let i = 0; i < numBlinds; i += 1) {
    const [play, setPlay] = useState(false)
    const [delay, setDelay] = useState(undefined)
    blindStates.push({ delay, play, setDelay, setPlay })
  }

  // Keeps track of observers
  const observerData = []
  for (let i = 0; i < numBlinds; i += 1) {
    const [observer, setObserver] = useState(undefined)
    observerData.push({ observer, ref: refs[i], setObserver })
  }

  // Determines when initial animation is complete
  const [initAnimComplete, setInitAnimComplete] = useState(false)

  // Handler that play initial animations
  const runInitAnim = () => {
    if (blindVisibleStatesRef.current) {
      let startViewport = false
      let delay = 0

      for (let i = 0; i < blindVisibleStatesRef.current.length; i += 1) {
        const visibleState = blindVisibleStatesRef.current[i]
        if (visibleState.isVisible) {
          if (!startViewport) {
            startViewport = true // First item in viewport was found
          }

          const blindState = blindStates[i]
          blindState.setDelay(delay)
          blindState.setPlay(true)
          delay += 0.5 // Grow delay to stagger blind animations in initial animation
        } else if (startViewport) {
          // End of viewport has been reached, complete initial animation
          break
        }
      }

      window.setTimeout(() => setInitAnimComplete(true), delay * 1000)
    }
  }

  return {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  }
}
