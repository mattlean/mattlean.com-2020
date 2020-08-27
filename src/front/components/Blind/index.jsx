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
const Blind = ({ delay, duration, isFree, play, threshold }) => {
  if (!delay) delay = 0.1
  if (!duration) duration = 0.4
  if (!threshold) threshold = 0.5

  const VARIANTS = {
    animate: (delay) => ({
      height: '0%',
      transition: {
        delay,
        duration,
        ease: 'easeOut',
      },
    }),
    initial: { height: '100%' },
  }

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

  return (
    <motion.span
      ref={intersectionRef}
      animate={animate}
      aria-hidden={true}
      custom={delay}
      initial="initial"
      variants={VARIANTS}
      onAnimationComplete={() => setIsDone(true)}
      className="blind"
    />
  )
}

export default Blind
