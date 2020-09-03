import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AboutThisSite from './AboutThisSite'
import { createObserver } from '../../util'
import { ROUTE_PREFIX as BLOG_PREFIX } from '../../../common/data/route/blog'
import { ROUTE_PREFIX as PROJECT_PREFIX } from '../../../common/data/route/project'

const THRESHOLD = 0.2
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
    y: '20%',
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
  const [isVisible, setIsVisible] = useState(false)
  const mainFooterRef = useRef(null)

  useEffect(() => {
    let observer
    if (mainFooterRef.current) {
      observer = createObserver(
        mainFooterRef,
        { threshold: THRESHOLD },
        (entries) => {
          if (entries[0].intersectionRatio >= THRESHOLD) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        }
      )
    }

    return () => {
      if (observer) observer.disconnect()
    }
  }, [])

  const animateFooterVal = isVisible ? 'animate' : 'initial'

  // Modal
  const [isOpen, setIsOpen] = useState(false)
  const [focusEleOnClose, setFocusEleOnClose] = useState()

  return (
    <>
      <footer ref={mainFooterRef} className="main-footer grid c-grey-2">
        <motion.dl
          animate={animateFooterVal}
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
            animate={animateFooterVal}
            aria-hidden="true"
            initial="initial"
            variants={VARIANTS}
          >
            <li>
              <Link to="/about" className="a-grey-2">
                About
              </Link>
            </li>
            <li>
              <Link to={PROJECT_PREFIX} className="a-grey-2">
                Projects
              </Link>
            </li>
            <li>
              <Link to={BLOG_PREFIX} className="a-grey-2">
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
        <nav aria-labelledby="external-nav-title" className="external-nav">
          <h4 id="external-nav-title">External Profile Link</h4>
          <motion.ul
            animate={animateFooterVal}
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
          animate={animateFooterVal}
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
