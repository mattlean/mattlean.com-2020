import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import MainFooter from '../../components/MainFooter'
import VARIANTS from '../page_variants'
import { useHeadDataEffect } from '../../util'
import { MailIcon } from '@primer/octicons-react'
import LogoLinkedIn from '../../assets/icons/linkedin.png'

/**
 * Contact Page
 */
const Contact = () => {
  useHeadDataEffect()

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
      <main aria-label="Content" className="grid-contact grid">
        <section className="cover">
          <BlindFrame
            ref={srStart}
            nodeType="h1"
            tabIndex="-1"
            className="h-2 sm:h-3 lh-1"
          >
            Let’s get in&nbsp;touch.
          </BlindFrame>
          <BlindFrame
            nodeType="p"
            delay={0.5}
            className="txt-8 sm:txt-6 c-grey-1"
          >
            Have any questions? Got a project in mind for&nbsp;me?
            <br />
            Let’s connect and start&nbsp;talking.
          </BlindFrame>
        </section>
        <ul>
          <BlindFrame nodeType="li" delay={0.5}>
            <a href="mailto:matt@mattlean.com" className="a-primary">
              <MailIcon size={24} />
              matt@mattlean.com
            </a>
          </BlindFrame>
          <BlindFrame nodeType="li" delay={0.5}>
            <a
              href="https://linkedin.com/in/mattlean"
              rel="noreferrer"
              target="_blank"
              className="a-primary"
            >
              <img src={LogoLinkedIn} alt="LinkedIn Icon" />
              linkedin.com/in/mattlean
            </a>
          </BlindFrame>
        </ul>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default Contact
