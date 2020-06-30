import React, { useContext, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from 'react-use'
import { NavLink, useLocation } from 'react-router-dom'
import { ThemeCtx } from '../../visuals/theme'
import Logo from '../../assets/logo.svg'
import SunMoon from '../../assets/sun-moon.svg'

const THRESHOLD = 0.5

const MainNav = () => {
  const location = useLocation()
  const [isFirst, setIsFirst] = useState(true)
  const { toggle } = useContext(ThemeCtx)
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
      y: '-10%',
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  }

  if (isFirst && location.pathname === '/') {
    variants.animate.transition.delay = 0.8
  }

  return (
    <header ref={intersectionRef} className="main-header">
      <motion.nav
        animate={animate}
        initial="initial"
        variants={variants}
        onAnimationComplete={() => setIsFirst(false)}
        className="container main-nav"
      >
        <NavLink to="/" activeClassName="main-nav-link-active">
          <Logo className="logo" />
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/about"
              activeClassName="main-nav-link-active"
              className="link-grey-a"
            >
              about
            </NavLink>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <NavLink
              to="/blog"
              activeClassName="main-nav-link-active"
              className="link-grey-a"
            >
              blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="main-nav-link-active"
              className="link-grey-a"
            >
              contact
            </NavLink>
          </li>
          <li>
            <button className="btn-light" onClick={() => toggle()}>
              <SunMoon className="sun-moon_svg svg-grey-a" />
            </button>
          </li>
        </ul>
      </motion.nav>
    </header>
  )
}

export default MainNav
