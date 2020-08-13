import React from 'react'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import LinkedInLogo from '../../assets/linkedin.png'
import MainFooter from '../../components/MainFooter'
import variants from '../variants'
import { useHeadDataEffect } from '../../util'
import { MailIcon } from '@primer/octicons-react'

/**
 * Contact Page
 */
const Contact = () => {
  useHeadDataEffect()

  return (
    <motion.div
      animate="initial"
      exit="out"
      initial="initial"
      variants={variants}
      onAnimationComplete={() => window.scroll(0, 0)}
      className="container"
    >
      <main className="grid-contact grid">
        <section className="cover">
          <BlindFrame nodeType="h1" className="h-2 sm:h-3 lh-1">
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
              <img src={LinkedInLogo} alt="LinkedIn Icon" />
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
