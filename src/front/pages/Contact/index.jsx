import React from 'react'
import { MailIcon } from '@primer/octicons-react'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import MainFooter from '../../components/MainFooter'
import variants from '../variants'
import LinkedInLogo from '../../assets/linkedin.png'

/**
 * Contact Page
 */
const Contact = () => (
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
        <BlindFrame>
          <h1 className="header-lg">Let&apos;s get in&nbsp;touch.</h1>
        </BlindFrame>
        <BlindFrame delay={0.5}>
          <p className="txt-lg c-grey-1">
            Have any questions? Got a project in mind for&nbsp;me?
            <br />
            Let’s connect and start&nbsp;talking.
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
    </main>
    <MainFooter />
  </motion.div>
)

export default Contact
