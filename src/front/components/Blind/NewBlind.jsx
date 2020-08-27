import React from 'react'
import { motion } from 'framer-motion'

/**
 * Blind Animation
 * Must be used within a BlindFrame component
 * @prop {number} [delay=0] Delay in seconds
 * @prop {number} [duration=0.5] Duration in seconds
 * @prop {number} [threshold=1] Threshold value between 0 & 1 used by Intersection Observer
 */
const Blind = ({ delay, duration, observer, play }) => {
  if (!delay && delay !== 0) delay = 1
  if (!duration && duration !== 0) duration = 0.4

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

  console.log('NewBlind rendered', delay, play)
  const animate = play ? 'animate' : 'initial'

  return (
    <motion.span
      animate={animate}
      aria-hidden={true}
      custom={delay}
      initial="initial"
      variants={VARIANTS}
      onAnimationComplete={() => {
        if (observer) observer.disconnect()
        console.log(3, 'Animation completed', observer)
      }}
      className="blind"
    />
  )
}

export default Blind
