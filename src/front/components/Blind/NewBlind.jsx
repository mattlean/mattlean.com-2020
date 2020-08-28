import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

/**
 * Blind Animation
 * Must be used within a BlindFrame component
 * @prop {number} [delay=0.1] Delay in seconds
 * @prop {number} [duration=0.4] Duration in seconds
 * @prop {Object} [observer] Used to disconnect observer after animation is complete
 * @prop {boolean} [play] Flag that controls if animation is played
 */
const Blind = ({ delay, duration, observer, play }, ref) => {
  if (!delay && delay !== 0) delay = 0.1
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

  const animate = play ? 'animate' : 'initial'

  return (
    <motion.span
      ref={ref}
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

export default forwardRef(Blind)
