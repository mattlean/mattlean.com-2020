import Blind from '.'
import React from 'react'

/**
 * Frame used for positioning blind animation
 * @prop {number} delay Delay in seconds
 * @prop {string} className Class attribute to append to default value
 * @prop {string} [nodeType=span] Type of node frame should be
 */
const BlindFrame = ({ className, children, delay, nodeType }) => {
  let cn = 'blind-frame'
  if (className) cn += ` ${className}`

  const Node = nodeType || 'span'

  return (
    <Node className={cn}>
      <Blind delay={delay} />
      {children}
    </Node>
  )
}

export default BlindFrame
