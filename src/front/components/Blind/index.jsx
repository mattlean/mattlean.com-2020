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
const Blind = ({ delay, duration, threshold }) => {
  if (!delay) delay = 0
  if (!duration) duration = 0.5
  if (!threshold) threshold = 1

  const variants = {
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

  const isHidden =
    __isServer__ ||
    (intersection && intersection.intersectionRatio < threshold) ||
    !intersection
      ? true
      : false

  let animate
  if ((!isDone && !isHidden) || isDone) {
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
      variants={variants}
      onAnimationComplete={() => setIsDone(true)}
      className="blind"
    />
  )
}

export default Blind
