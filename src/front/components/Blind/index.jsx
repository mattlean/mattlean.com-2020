import React from 'react'
import { motion } from 'framer-motion'

/**
 * Blind Animation
 * Must be used within a BlindFrame component
 * @prop {number} [delay] Delay in seconds
 * @prop {number} [duration=0.4] Duration in seconds
 * @prop {Object} [observer] Used to disconnect observer after animation is complete
 * @prop {boolean} [play] Flag that controls if animation is played
 * @prop {number} [startHeight] Starting height value
 */
const Blind = ({ delay, duration, observer, play, startHeight }) => {
  if (!duration && duration !== 0) duration = 0.4

  const height = startHeight || '100%'

  const VARIANTS = {
    animate: (custom) => ({
      height: '0%',
      transition: {
        delay: custom,
        duration,
        ease: 'easeOut',
      },
    }),
    initial: { height },
  }

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
      }}
      className="blind"
    />
  )
}

export default Blind
