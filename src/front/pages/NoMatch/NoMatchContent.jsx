import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import BlindFrame from '../../components/Blind/BlindFrame'
import { NO_MATCH_TITLE } from '../../../common/routeData'
import { useHeadDataEffect } from '../../util'

/**
 * Content for no match page
 * @param {prop} pathname Pathname from React Router location object
 */
const NoMatchContent = () => {
  const { pathname } = useLocation()
  useHeadDataEffect({ desc: null, keywords: null, title: NO_MATCH_TITLE })

  return (
    <section className="cover">
      <BlindFrame nodeType="h1" className="h-2 sm:h-3 lh-1">
        404: Page Not&nbsp;Found
      </BlindFrame>
      <BlindFrame nodeType="p" delay={0.5} className="txt-8 sm:txt-6 c-grey-1">
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
