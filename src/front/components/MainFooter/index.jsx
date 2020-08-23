import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useIntersection } from 'react-use'
import AboutThisSite from './AboutThisSite'

const THRESHOLD = 0.25
const VARIANTS = {
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  initial: {
    opacity: 0,
    y: '10%',
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
}

/**
 * Main Footer
 */
const MainFooter = () => {
  // Animations
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: THRESHOLD,
  })

  const isHidden =
    __IS_SERVER__ ||
    (intersection && intersection.intersectionRatio < THRESHOLD) ||
    !intersection
      ? true
      : false

  const animateFooter = isHidden ? 'initial' : 'animate'

  // Modal
  const [isOpen, setIsOpen] = useState(false)
  const [focusEleOnClose, setFocusEleOnClose] = useState()

  return (
    <>
      <footer ref={intersectionRef} className="main-footer grid c-grey-2">
        <motion.dl
          animate={animateFooter}
          initial="initial"
          variants={VARIANTS}
          className="personal-title"
        >
          <dt>Matt Lean</dt>
          <dd>
            Full-Stack Web Developer
            <br />
            UI/UX Designer
          </dd>
        </motion.dl>
        <nav className="internal-nav">
          <motion.ul
            animate={animateFooter}
            initial="initial"
            variants={VARIANTS}
          >
            <li>
              <Link to="/about" className="a-grey-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="a-grey-2">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className="a-grey-2">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="a-grey-2">
                Contact
              </Link>
            </li>
          </motion.ul>
        </nav>
        <nav className="external-nav">
          <motion.ul
            animate={animateFooter}
            initial="initial"
            variants={VARIANTS}
          >
            <li>
              <a
                href="http://be.net/mattlean"
                rel="noreferrer"
                target="_blank"
                className="a-grey-2"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mattlean"
                rel="noreferrer"
                target="_blank"
                className="a-grey-2"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/mattlean"
                rel="noreferrer"
                target="_blank"
                className="a-grey-2"
              >
                LinkedIn
              </a>
            </li>
          </motion.ul>
        </nav>
        <motion.p
          animate={animateFooter}
          initial="initial"
          variants={VARIANTS}
          className="txt-2 c-grey-3"
        >
          Made with too much boba tea in SF Bay Area.{' '}
          <br className="d-none sm:d-inline" />
          <button
            onClick={() => {
              setFocusEleOnClose(document.activeElement)
              setIsOpen(true)
            }}
            className="txt-2 c-grey-3"
          >
            Learn more about this site.
          </button>
        </motion.p>
      </footer>
      <AboutThisSite
        focusEleOnClose={focusEleOnClose}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  )
}

export default MainFooter
