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
 * @prop {number} delay Delay in seconds
 */
const Blind = ({ delay }) => {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })
  const [isDone, setIsDone] = useState(false)

  const isHidden =
    __isServer__ ||
    (intersection && intersection.intersectionRatio < 1) ||
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
    />
  )
}

export default Blind
