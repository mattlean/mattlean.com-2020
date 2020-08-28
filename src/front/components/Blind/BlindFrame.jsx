import React, { forwardRef, useEffect, useState } from 'react'
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
 * @prop {tabIndex} [tabIndex] tabindex attribute value
 * @prop {string} [target] target attribute value used if nodeType is "a"
 * @prop {number} [threshold] Threshold value between 0 & 1 used by Intersection Observer
 * @prop {string} [to] to prop value used if nodeType is "Link"
 */
const BlindFrame = (
  {
    className,
    children,
    delay,
    duration,
    href,
    isFree,
    nodeType,
    rel,
    setIsHidden,
    tabIndex,
    target,
    threshold,
    to,
    useScrollHeight,
  },
  ref
) => {
  let cn = 'blind-frame'
  if (className) cn += ` ${className}`

  const [scrollHeight, setScrollHeight] = useState()

  console.log('first', ref)

  useEffect(() => {
    if (useScrollHeight && ref && ref.current) {
      console.log(ref.current)
      console.log(ref.current.scrollHeight)
      setScrollHeight(ref.current.scrollHeight)
    }
  }, [ref, useScrollHeight])

  const content = (
    <>
      <Blind
        delay={delay}
        duration={duration}
        isFree={isFree}
        setIsHidden={setIsHidden}
        threshold={threshold}
        className={cn}
        scrollHeight={scrollHeight}
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

  return (
    <Node ref={ref} tabIndex={tabIndex} className={cn}>
      {content}
    </Node>
  )
}

export default forwardRef(BlindFrame)
