import React from 'react'
import { NavLink } from 'react-router-dom'
import Arrow from '../../assets/arrow.svg'

/**
 * Call-To-Action
 * @prop {children} children Children
 * @prop {string} className Class name HTML attribute that is appended after default class name
 * @prop {string} to Location for call-to-action to navigate to
 * @prop {('lg'|'sm')} type Determines whether call-to-action is large or small
 */
const CTA = ({ children, className, to, type }) => {
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

  return (
    <NavLink to={to} className={cn}>
      {children} <Arrow />
    </NavLink>
  )
}

export default CTA
