import React, { useContext, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from 'react-use'
import { LG_PHONE } from '../../visuals/responsive'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ThemeCtx } from '../../visuals/theme'
import { useViewportWidth } from '../../util'
import Logo from '../../assets/logo/logo.svg'
import Menu from '../../assets/icons/menu.svg'
import SunMoon from '../../assets/icons/sun-moon.svg'
import X from '../../assets/icons/x.svg'

const THRESHOLD = 0.5

/**
 * Main Navigation
 */
const MainNav = () => {
  const viewportWidth = useViewportWidth()
  const { pathname } = useLocation()
  const [initRender, setInitRender] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggle } = useContext(ThemeCtx)

  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: THRESHOLD,
  })

  const isPhone = !__isServer__ && viewportWidth <= LG_PHONE

  const isHidden =
    __isServer__ ||
    (!isPhone &&
      ((intersection && intersection.intersectionRatio < THRESHOLD) ||
        !intersection))
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

  if (initRender && pathname === '/') {
    variants.animate.transition.delay = 0.8
  }

  let logoClassName = 'logo'
  if (isOpen) logoClassName += ' open'

  const home = isPhone ? (
    <li>
      <NavLink exact={true} to="/" onClick={() => setIsOpen(false)}>
        home
      </NavLink>
    </li>
  ) : undefined

  const menuIcon = isOpen ? (
    <X className="svg-primary" />
  ) : (
    <Menu className="svg-primary" />
  )

  let btnLightTxt
  if (isPhone) {
    btnLightTxt = isDark ? 'light mode' : 'dark mode'
  } else {
    btnLightTxt = ''
  }

  const openClassName = isOpen ? 'open' : ''

  return (
    <header ref={intersectionRef} className="main-header">
      <motion.nav
        animate={animate}
        initial="initial"
        variants={variants}
        onAnimationComplete={() => setInitRender(false)}
        className="container main-nav"
      >
        <Link to="/" className={logoClassName} onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>
        <button className="btn-nav" onClick={() => setIsOpen(!isOpen)}>
          {menuIcon}
        </button>
        <ul className={openClassName}>
          {home}
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
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              contact
            </NavLink>
          </li>
          <li>
            <button className="btn-nav c-primary" onClick={() => toggle()}>
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
