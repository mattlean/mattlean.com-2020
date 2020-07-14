import React, { useContext, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from 'react-use'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ThemeCtx } from '../../visuals/theme'
import Logo from '../../assets/logo.svg'
import Menu from '../../assets/menu.svg'
import SunMoon from '../../assets/sun-moon.svg'
import X from '../../assets/x.svg'

const THRESHOLD = 0.5

/**
 * Main Navigation
 */
const MainNav = () => {
  const location = useLocation()
  const [isFirst, setIsFirst] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggle } = useContext(ThemeCtx)
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

  const openClassName = isOpen ? 'open' : ''
  const menuIcon = isOpen ? (
    <X className="svg-primary" />
  ) : (
    <Menu className="svg-primary" />
  )

  let btnLightTxt
  if (isOpen && !isDark) btnLightTxt = 'light mode'
  if (isOpen && isDark) btnLightTxt = 'dark mode'

  return (
    <header ref={intersectionRef} className="main-header">
      <motion.nav
        animate={animate}
        initial="initial"
        variants={variants}
        onAnimationComplete={() => setIsFirst(false)}
        className="container main-nav"
      >
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <button className={openClassName} onClick={() => setIsOpen(!isOpen)}>
          {menuIcon}
        </button>
        <ul className={openClassName}>
          <li>
            <NavLink exact={true} to="/" onClick={() => setIsOpen(false)}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>
              projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={() => setIsOpen(false)}>
              blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="link-grey-a"
              onClick={() => setIsOpen(false)}
            >
              contact
            </NavLink>
          </li>
          <li>
            <button className="txt-primary" onClick={() => toggle()}>
              <SunMoon className="sun-moon_svg" />
              {btnLightTxt}
            </button>
          </li>
        </ul>
      </motion.nav>
    </header>
  )
}

export default MainNav
