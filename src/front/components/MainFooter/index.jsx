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
      closeOnOverlayClick={true}
      focusEleOnClose={focusEleOnClose}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <h1 className="modal-heading heading4">Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue enim
        ac nibh dictum, eu hendrerit enim malesuada. Vivamus et magna dignissim
        ipsum viverra pretium quis interdum dui. Proin eget rhoncus arcu, ut
        feugiat est. Integer eget nulla sed orci gravida aliquet. Sed a luctus
        metus, ac porta ligula. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque non vestibulum quam. Vivamus porta
        vulputate ultrices. Ut et congue purus. Sed id tortor et sem cursus
        aliquet sed eget nibh. Sed scelerisque quam eleifend dolor pellentesque,
        eget ultricies justo aliquam. Praesent eu tortor sed diam dignissim
        accumsan. Cras sit amet ex mi.
      </p>
    </Modal>
  ) : undefined

  return (
    <>
      <footer ref={intersectionRef} className="main-footer grid txt-grey-b">
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
          Made with too much boba tea in SF Bay Area. <br className="d-sm" />
          <button
            onClick={() => {
              setFocusEleOnClose(document.activeElement)
              setIsOpen(true)
            }}
            className="txt-xs txt-grey-c"
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
