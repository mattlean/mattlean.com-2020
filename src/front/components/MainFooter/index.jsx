import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'eswiss'
import { motion } from 'framer-motion'
import { useIntersection } from 'react-use'

const THRESHOLD = 0.25
const variants = {
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
    __isServer__ ||
    (intersection && intersection.intersectionRatio < THRESHOLD) ||
    !intersection
      ? true
      : false

  let animate
  if (isHidden) {
    animate = 'initial'
  } else {
    animate = 'animate'
  }

  // Modal
  const [isOpen, setIsOpen] = useState(false)
  const [focusEleOnClose, setFocusEleOnClose] = useState()
  const modal = isOpen ? (
    <Modal
      autoCenterH={true}
      autoCenterV={true}
      closeOnOverlayClick={true}
      focusEleOnClose={focusEleOnClose}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <h1 className="modal-heading header-md">About MattLean.com</h1>
      <p>
        MattLean.com is designed to be responsive, meaning it works on all
        screen sizes, from large desktops to small mobile devices.
      </p>
      <p>
        This site is also built with accessibility in mind, so it supports
        keyboard and screen reader interactions.
      </p>
      <p>
        Light and dark modes are supported to accomodate different viewing
        scenarios and preferences. Light mode will automatically activate at
        6:00 AM and dark mode will automatically activate at 6:00 PM in the
        visitor’s time zone. Mode switching can also be controlled manually by
        selecting the mode switch icon at the end of the main navigation.
      </p>
      <p>
        The codebase was programmed with{' '}
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          React
        </a>
        ,{' '}
        <a href="https://expressjs.com" rel="noreferrer" target="_blank">
          Express
        </a>
        , and{' '}
        <a
          href="https://github.com/mattlean/eswiss"
          rel="noreferrer"
          target="_blank"
        >
          eswiss
        </a>
        . You can find the source code online on{' '}
        <a
          href="https://github.com/mattlean/mattlean.com-2020"
          rel="noreferrer"
          target="_blank"
        >
          the project’s GitHub repository
        </a>
        .
      </p>
      <p>
        If would like to learn more about the design and development process
        that went into building this website, you can read the case study.
      </p>
    </Modal>
  ) : undefined

  return (
    <>
      <footer ref={intersectionRef} className="main-footer grid txt-grey-2">
        <motion.dl
          animate={animate}
          initial="initial"
          variants={variants}
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
          <motion.ul animate={animate} initial="initial" variants={variants}>
            <li>
              <Link to="/about" className="link-grey-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="link-grey-2">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link-grey-2">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-grey-2">
                Contact
              </Link>
            </li>
          </motion.ul>
        </nav>
        <nav className="external-nav">
          <motion.ul animate={animate} initial="initial" variants={variants}>
            <li>
              <a
                href="http://be.net/mattlean"
                rel="noreferrer"
                target="_blank"
                className="link-grey-2"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mattlean"
                rel="noreferrer"
                target="_blank"
                className="link-grey-2"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/mattlean"
                rel="noreferrer"
                target="_blank"
                className="link-grey-2"
              >
                LinkedIn
              </a>
            </li>
          </motion.ul>
        </nav>
        <motion.p
          animate={animate}
          initial="initial"
          variants={variants}
          className="txt-xs txt-grey-3"
        >
          Made with too much boba tea in SF Bay Area. <br className="d-sm" />
          <button
            onClick={() => {
              setFocusEleOnClose(document.activeElement)
              setIsOpen(true)
            }}
            className="txt-xs txt-grey-3"
          >
            Learn more about this site.
          </button>
        </motion.p>
      </footer>
      {modal}
    </>
  )
}

export default MainFooter
