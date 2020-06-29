import Blind from '.'
import React from 'react'

/**
 * Frame used for positioning blind animation
 * @prop {string} [className] Class attribute to append to default value
 * @prop {number} [delay] Delay in seconds
 * @prop {number} [threshold] Threshold value between 0 & 1 used by Intersection Observer
 * @prop {string} [nodeType=span] Type of node frame should be
 */
const BlindFrame = ({ className, children, delay, nodeType, threshold }) => {
  let cn = 'blind-frame'
  if (className) cn += ` ${className}`

  const Node = nodeType || 'span'

  return (
    <Node className={cn}>
      <Blind delay={delay} threshold={threshold} />
      {children}
    </Node>
  )
}

export default BlindFrame
