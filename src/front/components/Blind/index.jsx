import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from 'react-use'

/**
 * Blind Animation
 * Must be used within a BlindFrame component
 * @prop {number} [delay=0] Delay in seconds
 * @prop {number} [duration=0.5] Duration in seconds
 * @prop {number} [threshold=1] Threshold value between 0 & 1 used by Intersection Observer
 */
const Blind = ({
  delay,
  duration,
  isFree,
  play,
  threshold,
  heightStart,
  scrollHeight,
}) => {
  if (!delay) delay = 0.1
  if (!duration) duration = 0.4
  if (!threshold) threshold = 0.5

  console.log(scrollHeight)

  let height
  if (scrollHeight) {
    height = `${scrollHeight}px`
    console.log('scrollHeight set', height)
  } else {
    height = '100%'
    console.log('height set', height)
  }

  const VARIANTS = {
    animate: () => ({
      height: '0',
      transition: {
        delay,
        duration,
        ease: 'easeOut',
      },
    }),
    initial: (custom) => ({ height: custom }),
  }

  // custom property is set to startHeight on motion component

  console.log(VARIANTS)

  const [isDone, setIsDone] = useState(false)
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold,
  })

  /*
   * Blind is considered hidden if it's:
   * 1. Being rendered on the server
   * 2. Is under control of a conductor that says it's not free
   * 3. Is currently under Intersection Observer threshold
   */
  const isHidden =
    __IS_SERVER__ || !intersection || intersection.intersectionRatio < threshold
      ? true
      : false

  // if (setIsHidden && isFree !== undefined) {
  //   setIsHidden(isHidden) // Let conductor know blind's hidden state
  // }

  let animate
  if (
    play ||
    ((isFree || isFree === undefined) && !isDone && !isHidden) ||
    isDone
  ) {
    animate = 'animate'
  } else {
    animate = 'initial'
  }

  // animate = 'initial'

  return (
    <motion.span
      ref={intersectionRef}
      animate={animate}
      custom={height}
      aria-hidden={true}
      initial="initial"
      variants={VARIANTS}
      onAnimationComplete={() => setIsDone(true)}
      className="blind"
    />
  )
}

export default Blind
