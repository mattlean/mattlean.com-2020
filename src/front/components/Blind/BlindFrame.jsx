import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import Blind from '.'

/**
 * Blind Frame
 * Frame used for positioning blind animation
 * @prop {string} [aria-label] aria-label attribute value
 * @prop {children} [children] Children
 * @prop {string} [className] Class attribute to append to default value
 * @prop {number} [delay] Delay in seconds
 * @prop {number} [duration] Duration in seconds
 * @prop {string} [href] href attribute value used if nodeType is "a"
 * @prop {string} [nodeType='span'] Determine's blind frame's element. Defaults to span element.
 * @prop {Object} [observer] Used to disconnect observer after animation is complete
 * @prop {boolean} [play] Flag that controls if animation is played
 * @prop {string} [rel] rel attribute value used if nodeType is "a"
 * @prop {tabIndex} [tabIndex] tabindex attribute value
 * @prop {string} [target] target attribute value used if nodeType is "a"
 * @prop {string} [to] to prop value used if nodeType is "Link"
 */
const BlindFrame = (
  {
    'aria-label': ariaLabel,
    children,
    className,
    delay,
    duration,
    href,
    nodeType,
    observer,
    play,
    rel,
    tabIndex,
    target,
    to,
  },
  ref
) => {
  let cn = 'blind-frame'
  if (className) cn += ` ${className}`

  const content = (
    <>
      <Blind
        delay={delay}
        duration={duration}
        observer={observer}
        play={play}
      />
      {children}
    </>
  )

  if (nodeType === 'a') {
    return (
      <a
        ref={ref}
        href={href}
        aria-label={ariaLabel}
        rel={rel}
        tabIndex={tabIndex}
        target={target}
        className={cn}
      >
        {content}
      </a>
    )
  } else if (nodeType === 'Link') {
    return (
      <Link
        ref={ref}
        to={to}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
        className={cn}
      >
        {content}
      </Link>
    )
  }

  const Node = nodeType || 'span'

  return (
    <Node ref={ref} aria-label={ariaLabel} tabIndex={tabIndex} className={cn}>
      {content}
    </Node>
  )
}

export default forwardRef(BlindFrame)
