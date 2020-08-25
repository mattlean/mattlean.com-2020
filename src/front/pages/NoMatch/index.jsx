import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import MainFooter from '../../components/MainFooter'
import NoMatchContent from './NoMatchContent'
import VARIANTS from '../page_variants'

/**
 * No Match Page
 */
const NoMatch = () => {
  // Focus starting element on page load
  const srStart = useRef(null)
  useEffect(() => {
    if (srStart.current) srStart.current.focus()
  }, [])

  return (
    <motion.div
      animate="initial"
      exit="out"
      initial="initial"
      variants={VARIANTS}
      onAnimationComplete={() => window.scroll(0, 0)}
      className="container"
    >
      <main aria-label="Content" className="grid-no-match grid">
        <NoMatchContent />
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default NoMatch
