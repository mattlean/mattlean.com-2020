import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
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

  return (
    <footer ref={intersectionRef} className="main-footer grid txt-grey-b">
      <motion.ul
        animate={animate}
        initial="initial"
        variants={variants}
        className="personal-title"
      >
        <li>
          <strong>Matt Lean</strong>
        </li>
        <li>Full-Stack Web Developer</li>
        <li>UI/UX Designer</li>
      </motion.ul>
      <nav className="internal-nav">
        <motion.ul animate={animate} initial="initial" variants={variants}>
          <li>
            <Link to="/about" className="link-grey-b">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="link-grey-b">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog" className="link-grey-b">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link-grey-b">
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
              className="link-grey-b"
            >
              Behance
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mattlean"
              rel="noreferrer"
              target="_blank"
              className="link-grey-b"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mattlean"
              rel="noreferrer"
              target="_blank"
              className="link-grey-b"
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
        className="txt-xs txt-grey-c"
      >
        Made with too much boba in the San Francisco Bay Area.
      </motion.p>
    </footer>
  )
}

export default MainFooter
