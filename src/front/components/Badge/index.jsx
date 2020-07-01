import React from 'react'

/**
 * Badge
 * Small labeling component
 * @prop {children} [children] Children
 * @prop {{'div'|'li'}} [nodeType] Determines if badge is div or li element
 */
const Badge = ({ children, nodeType }) => {
  let Node = 'div'

  if (nodeType === 'li') {
    Node = 'li'
  } else if (nodeType !== 'div') {
    // eslint-disable-next-line no-console
    console.warn(
      'Attempted to set unsupported node type. Setting node type as "div".'
    )
  }

  return <Node className="badge">{children}</Node>
}

export default Badge
