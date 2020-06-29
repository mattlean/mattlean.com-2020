import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from 'react-use'

const variants = {
  animate: (delay) => ({
    height: '0%',
    transition: {
      delay,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
  initial: { height: '100%' },
}

/**
 * Blind animation
 * Must be used within a BlindFrame component
 * @prop {number} [delay=0] Delay in seconds
 * @prop {number} [threshold=1] Threshold value between 0 & 1 used by Intersection Observer
 */
const Blind = ({ delay, threshold }) => {
  if (!delay) delay = 0
  if (!threshold) threshold = 1

  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold,
  })
  const [isDone, setIsDone] = useState(false)

  const isHidden =
    __isServer__ ||
    (intersection && intersection.intersectionRatio < threshold) ||
    !intersection
      ? true
      : false

  let animateVal
  if ((!isDone && !isHidden) || isDone) {
    animateVal = 'animate'
  } else {
    animateVal = 'initial'
  }

  return (
    <motion.span
      ref={intersectionRef}
      animate={animateVal}
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
