import React from 'react'
import { motion } from 'framer-motion'
import { blindVariants } from '../visuals/animation'

/**
 * Blind animation component
 * Used for the blind animation
 * @prop {number} delay Delay in seconds
 */
const Blind = ({ delay }) => (
  <motion.span
    animate="animate"
    custom={delay}
    initial="initial"
    variants={blindVariants}
  />
)

export default Blind
