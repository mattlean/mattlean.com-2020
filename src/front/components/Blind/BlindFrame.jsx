import Blind from '.'
import React from 'react'

/**
 * Blind Frame
 * Frame used for positioning blind animation
 * @prop {children} [children] Children
 * @prop {string} [className] Class attribute to append to default value
 * @prop {number} [delay] Delay in seconds
 * @prop {number} [duration] Duration in seconds
 * @prop {number} [threshold] Threshold value between 0 & 1 used by Intersection Observer
 * @prop {string} [nodeType=span] Determine's blind frame's element. Defaults to span element.
 */
const BlindFrame = ({
  className,
  children,
  delay,
  duration,
  nodeType,
  threshold,
}) => {
  let cn = 'blind-frame'
  if (className) cn += ` ${className}`

  const Node = nodeType || 'span'

  return (
    <Node className={cn}>
      <Blind delay={delay} duration={duration} threshold={threshold} />
      {children}
    </Node>
  )
}

export default BlindFrame
