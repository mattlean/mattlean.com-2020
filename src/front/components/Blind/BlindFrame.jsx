import React from 'react'
import { Link } from 'react-router-dom'
import Blind from '.'

/**
 * Blind Frame
 * Frame used for positioning blind animation
 * @prop {children} [children] Children
 * @prop {string} [className] Class attribute to append to default value
 * @prop {number} [delay] Delay in seconds
 * @prop {number} [duration] Duration in seconds
 * @prop {string} [href] href attribute value used if nodeType is "a"
 * @prop {string} [nodeType='span'] Determine's blind frame's element. Defaults to span element.
 * @prop {string} [rel] rel attribute value used if nodeType is "a"
 * @prop {string} [target] target attribute value used if nodeType is "a"
 * @prop {number} [threshold] Threshold value between 0 & 1 used by Intersection Observer
 * @prop {string} [to] to prop value used if nodeType is "Link"
 */
const BlindFrame = ({
  className,
  children,
  delay,
  duration,
  href,
  nodeType,
  rel,
  target,
  threshold,
  to,
}) => {
  let cn = 'blind-frame'
  if (className) cn += ` ${className}`

  const content = (
    <>
      <Blind
        delay={delay}
        duration={duration}
        threshold={threshold}
        className={cn}
      />
      {children}
    </>
  )

  if (nodeType === 'a') {
    return (
      <a href={href} rel={rel} target={target} className={cn}>
        {content}
      </a>
    )
  } else if (nodeType === 'Link') {
    return (
      <Link to={to} className={cn}>
        {content}
      </Link>
    )
  }

  const Node = nodeType || 'span'

  return <Node className={cn}>{content}</Node>
}

export default BlindFrame
