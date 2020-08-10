import React from 'react'
import { NavLink } from 'react-router-dom'
import BlindFrame from '../Blind/BlindFrame'
import Arrow from '../../assets/arrow.svg'

/**
 * Call-To-Action
 * @prop {Object} blind Props for blind
 * @prop {children} children Children
 * @prop {string} className Class name HTML attribute that is appended after default class name
 * @prop {string} to Location for call-to-action to navigate to
 * @prop {('lg'|'sm')} type Determines whether call-to-action is large or small
 */
const CTA = ({ blind, children, className, to, type }) => {
  let cn

  if (type === 'lg') {
    cn = 'cta-lg'
  } else if (type === 'sm') {
    cn = 'cta-sm'
  } else {
    // eslint-disable-next-line no-console
    console.warn('CTA component type was not set')
  }

  if (className) cn += ` ${className}`

  const arrow = <Arrow className="cta-arrow" />

  let content
  if (blind && (blind.delay || blind.duration || blind.threshold)) {
    content = (
      <BlindFrame {...blind}>
        {children} {arrow}
      </BlindFrame>
    )
  } else {
    content = (
      <>
        {children} {arrow}
      </>
    )
  }

  return (
    <NavLink to={to} className={cn}>
      {content}
    </NavLink>
  )
}

export default CTA
