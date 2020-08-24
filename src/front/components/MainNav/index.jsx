import React, { useContext, useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from 'react-use'
import { LG_PHONE } from '../../visuals/responsive'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ThemeCtx } from '../../visuals/theme'
import { useViewportWidth, setBodyScroll } from 'eswiss/dist/util'
import Logo from '../../assets/logo/logo.svg'
import Menu from '../../assets/icons/menu.svg'
import PHONE_VARIANTS from '../modal_variants'
import SunMoon from '../../assets/icons/sun-moon.svg'
import X from '../../assets/icons/x.svg'

const THRESHOLD = 0.5

/**
 * Main Navigation
 */
const MainNav = () => {
  const viewportWidth = useViewportWidth(__IS_SERVER__)
  const { pathname } = useLocation()
  const [initRender, setInitRender] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, manualToggle } = useContext(ThemeCtx)

  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: THRESHOLD,
  })

  // Flag to check if window is within phone screen sizes
  const isPhone = !__IS_SERVER__ && viewportWidth <= LG_PHONE

  // Flag to check if MainNav is hidden for regular screen sizes
  const isHidden =
    __IS_SERVER__ ||
    (!isPhone &&
      ((intersection && intersection.intersectionRatio < THRESHOLD) ||
        !intersection))
      ? true
      : false

  const regularVariants = {
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
  // Set longer delay for initial animation for Landing page
  if (initRender && pathname === '/') {
    regularVariants.animate.transition.delay = 0.8
  }

  // Control regular animation
  let regularAnimate
  if (isHidden) {
    regularAnimate = 'initial'
  } else {
    regularAnimate = 'animate'
  }

  if (!isPhone && isOpen) {
    // Close mobile MainNav if window is resized too large and mobile MainNav is open
    setIsOpen(false)
  }

  // Control phone animation
  let phoneAnimate
  if (isOpen) {
    phoneAnimate = 'animate'
  } else {
    phoneAnimate = 'initial'
  }

  // Set class names
  let logoClassName = 'logo'
  if (isOpen) logoClassName += ' open'

  let mainNavCloseClassName = 'btn-nav'
  if (isOpen) mainNavCloseClassName += ' open'

  const openClassName = isOpen ? 'open' : ''

  // Set menu icon depending on whether phone MainNav is open or not
  const menuIcon = isOpen ? (
    <X className="svg-primary" />
  ) : (
    <Menu className="svg-primary" />
  )

  // Set phone MainNav theme setting btn txt
  let btnLightTxt
  if (isPhone) {
    btnLightTxt = isDark ? 'light mode' : 'dark mode'
  } else {
    btnLightTxt = ''
  }

  const homeRef = useRef(null)
  const menuRef = useRef(null)

  const LinkListContent = (
    <>
      <li className="phone-home">
        <NavLink
          ref={homeRef}
          exact={true}
          to="/"
          onClick={() => setIsOpen(false)}
        >
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
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          contact
        </NavLink>
      </li>
      <li>
        <button
          className="btn-nav c-primary"
          onClick={() => {
            manualToggle()
          }}
        >
          <SunMoon className="sun-moon_svg" />
          {btnLightTxt}
        </button>
      </li>
    </>
  )

  let LinkList
  if (isPhone) {
    // Use motion component if phone MainNav
    LinkList = (
      <motion.ul
        animate={phoneAnimate}
        variants={PHONE_VARIANTS}
        className={openClassName}
      >
        {LinkListContent}
      </motion.ul>
    )
  } else {
    // Use regular ul ele if regular MainNav
    LinkList = <ul className={openClassName}>{LinkListContent}</ul>
  }

  // Disable body scrolling when phone MainNav is open
  if (!__IS_SERVER__) setBodyScroll(!isOpen)

  // Setup keyboard tab trap
  useEffect(() => {
    /**
     * Setup keyboard tab trap
     * @param {KeyboardEvent} e Keyboard event object
     */
    const trapTab = (e) => {
      if (e.keyCode === 27) {
        setIsOpen(false)
      } else if (
        e.keyCode === 9 &&
        homeRef &&
        homeRef.current &&
        menuRef &&
        menuRef.current
      ) {
        // Shift + Tab
        if (e.shiftKey) {
          if (document.activeElement === homeRef.current) {
            // Move activeElement to end of MainNav
            e.preventDefault()
            menuRef.current.focus()
          }
        } else {
          // Tab only
          if (document.activeElement === menuRef.current) {
            // Move activeElement to start of MainNav
            e.preventDefault()
            homeRef.current.focus()
          }
        }
      }
    }

    // Apply keyboard tab trap
    if (isOpen && isPhone) {
      document.addEventListener('keydown', trapTab)
    } else {
      document.removeEventListener('keydown', trapTab)
    }

    // Remove keyboard trap on unmount
    return () => document.removeEventListener('keydown', trapTab)
  }, [isOpen, isPhone])

  return (
    <header ref={intersectionRef} className="main-header">
      <motion.nav
        animate={regularAnimate}
        initial="initial"
        variants={regularVariants}
        onAnimationComplete={() => setInitRender(false)}
        className="container main-nav"
      >
        <Link to="/" className={logoClassName} onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>
        {LinkList}
        <button
          ref={menuRef}
          className={mainNavCloseClassName}
          onClick={() => setIsOpen(!isOpen)}
        >
          {menuIcon}
        </button>
      </motion.nav>
    </header>
  )
}

export default MainNav
