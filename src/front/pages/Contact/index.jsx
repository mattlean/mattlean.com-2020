import BlindFrame from '../../components/Blind/BlindFrame'
import React from 'react'
import { MailIcon } from '@primer/octicons-react'
import { motion } from 'framer-motion'
import MainFooter from '../../components/MainFooter'
import variants from '../variants'
import LinkedInLogo from '../../assets/linkedin.png'

/**
 * Contact Page
 */
const Contact = () => (
  <motion.main
    animate="initial"
    exit="out"
    initial="initial"
    variants={variants}
    onAnimationComplete={() => window.scroll(0, 0)}
    className="container grid-contact grid"
  >
    <section className="cover">
      <BlindFrame>
        <h1 className="header-lg">Let&apos;s get in touch.</h1>
      </BlindFrame>
      <BlindFrame delay={0.5}>
        <p className="txt-lg txt-grey-a">
          Have any questions? Got a project in mind for me?
          <br />
          Let’s connect and start talking.
        </p>
      </BlindFrame>
    </section>
    <ul>
      <li>
        <BlindFrame delay={0.5}>
          <a href="mailto:matt@mattlean.com" className="link-primary">
            <MailIcon size={24} />
            matt@mattlean.com
          </a>
        </BlindFrame>
      </li>
      <li>
        <BlindFrame delay={0.5}>
          <a
            href="https://linkedin.com/in/mattlean"
            rel="noreferrer"
            target="_blank"
            className="link-primary"
          >
            <img src={LinkedInLogo} alt="LinkedIn Icon" />
            linkedin.com/in/mattlean
          </a>
        </BlindFrame>
      </li>
    </ul>
    <MainFooter />
  </motion.main>
)

export default Contact
