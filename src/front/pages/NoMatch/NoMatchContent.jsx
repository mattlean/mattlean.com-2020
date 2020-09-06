import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import BlindFrame from '../../components/Blind/BlindFrame'
import { NO_MATCH_TITLE } from '../../../common/data/route/const'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../components/Blind/initAnimUtil'
import { useHeadDataEffect } from '../../util'

/**
 * Content for no match page
 * @param {prop} pathname Pathname from React Router location object
 */
const NoMatchContent = () => {
  const { pathname } = useLocation()
  useHeadDataEffect({ desc: null, keywords: null, title: NO_MATCH_TITLE })

  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(2)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (observerData[0].ref.current) observerData[0].ref.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1],
      observerData,
      blindVisibleStates
    )

    window.setTimeout(runInitAnim, 100)

    // Disconnect all observers on unmount
    return () => observers.forEach((observer) => observer.disconnect())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="cover">
      <BlindFrame
        ref={observerData[0].ref}
        nodeType="h1"
        delay={blindStates[0].delay}
        observer={observerData[0].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[0].isVisible
            : blindStates[0].play
        }
        tabIndex="-1"
        className="h-2 sm:h-3 lh-1"
      >
        404: Page Not&nbsp;Found
      </BlindFrame>
      <BlindFrame
        ref={observerData[1].ref}
        nodeType="p"
        delay={blindStates[1].delay}
        observer={observerData[1].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[1].isVisible
            : blindStates[1].play
        }
        className="txt-8 sm:txt-6 c-grey-1"
      >
        The page at <b>{pathname}</b> was not&nbsp;found.
        <br />
        If this page should be here,{' '}
        <NavLink to="/contact" className="a-grey-1">
          contact me
        </NavLink>{' '}
        to get&nbsp;it&nbsp;fixed!
      </BlindFrame>
    </section>
  )
}

export default NoMatchContent
