import React, { useContext, useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { LG_PHONE } from '../../visuals/responsive'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { createObserver } from '../../util'
import { ROUTE_PREFIX } from '../../../common/data/route/project'
import { ThemeCtx } from '../../visuals/theme'
import { useViewportWidth, setBodyScroll } from 'eswiss/dist/util'
import Logo from '../../assets/logo/logo.svg'
import Menu from '../../assets/icons/menu.svg'
import MODAL_VARIANTS from '../modal_variants'
import SunMoon from '../../assets/icons/sun-moon.svg'
import X from '../../assets/icons/x.svg'

const THRESHOLD = 0.4
let isInitRender = true
let isInitRenderPhone = [true, true]

const VARIANTS = {
  fast: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  initial: {
    opacity: 0,
    y: '-20%',
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
  slow: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

/**
 * Main Navigation
 */
const MainNav = () => {
  const [headerAnimateVal, setHeaderAnimateVal] = useState('initial')
  const mainHeaderRef = useRef(null)
  const logoRef = useRef(null)
  const mainNavTitleRef = useRef(null)
  const menuOpenRef = useRef(null)
  const menuCloseRef = useRef(null)
  const phoneHomeRef = useRef(null)
  const { isDark, manualToggle } = useContext(ThemeCtx)
  const [isOpen, setIsOpen] = useState(false)
  const viewportWidth = useViewportWidth(__IS_SERVER__)
  const isPhone = !__IS_SERVER__ && viewportWidth <= LG_PHONE
  const { pathname } = useLocation()

  if (!isPhone && isOpen) {
    // Close phone menu when window is resized to non-phone screen sizes
    setIsOpen(false)
    setBodyScroll(true)
  }

  // General logo content
  const logoContent = (
    <Link to="/" className="logo">
      <Logo role="img" />
    </Link>
  )

  // General nav list content
  const navListContent = (
    <>
      <li className="phone-home">
        <NavLink
          ref={phoneHomeRef}
          to="/"
          exact={true}
          onClick={() => {
            if (isOpen) setIsOpen(false)
          }}
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={() => {
            if (isOpen) setIsOpen(false)
          }}
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          to={ROUTE_PREFIX}
          onClick={() => {
            if (isOpen) setIsOpen(false)
          }}
        >
          projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          onClick={() => {
            if (isOpen) setIsOpen(false)
          }}
        >
          blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          onClick={() => {
            if (isOpen) setIsOpen(false)
          }}
        >
          contact
        </NavLink>
      </li>
      <li className="btn-lightness">
        <button
          aria-label="Switch lightness theme"
          className="btn-nav c-primary"
          onClick={() => manualToggle()}
        >
          <SunMoon className="sun-moon_svg" aria-hidden="true" />
          <span>switch to {isDark ? 'light mode' : 'dark mode'}</span>
        </button>
      </li>
      <li className="phone-menu-close">
        <button
          ref={menuCloseRef}
          aria-label="Close main navigation"
          className="btn-nav"
          onClick={() => {
            setIsOpen(false)
            setBodyScroll(true)
          }}
        >
          <X className="svg-primary menu-icon" />
        </button>
      </li>
    </>
  )
  const phoneMenuClass = isOpen ? 'open' : undefined

  // General menu button content
  const menuBtnContent = <Menu className="svg-primary menu-icon" />

  let logo
  let navList
  let menuBtn

  if (isPhone) {
    // Create logo for phone layout
    logo = (
      <motion.h2
        ref={logoRef}
        initial="initial"
        animate={headerAnimateVal}
        variants={VARIANTS}
      >
        {logoContent}
      </motion.h2>
    )

    // Create nav list for phone layout
    navList = (
      <motion.ul
        aria-modal={isOpen ? true : undefined}
        role="dialog"
        initial="initial"
        animate={isOpen ? 'animate' : 'initial'}
        variants={MODAL_VARIANTS}
        className={phoneMenuClass}
        onAnimationComplete={() => {
          if (mainNavTitleRef.current) mainNavTitleRef.current.focus()
          else if (phoneHomeRef.current) phoneHomeRef.current.focus()
        }}
      >
        {navListContent}
      </motion.ul>
    )

    // Create menu button for phone layout
    menuBtn = (
      <motion.button
        ref={menuOpenRef}
        aria-label="Open main navigation"
        initial="initial"
        animate={headerAnimateVal}
        variants={VARIANTS}
        className="btn-nav"
        onClick={() => {
          setIsOpen(true)
          setBodyScroll(false)
        }}
      >
        {menuBtnContent}
      </motion.button>
    )
  } else {
    // Create logo for non-phone layout
    logo = <h2>{logoContent}</h2>

    // Create nav list for non-phone layout
    navList = <ul className={phoneMenuClass}>{navListContent}</ul>

    // Create menu button for non-phone layout
    menuBtn = (
      <button aria-label="Open main navigation" className="btn-nav">
        {menuBtnContent}
      </button>
    )
  }

  // Finally create main header
  const mainHeaderContent = (
    <>
      {logo}
      <nav aria-labelledby="main-nav-title" className="main-nav">
        <h2
          id="main-nav-title"
          ref={mainNavTitleRef}
          aria-hidden={isPhone ? true : undefined}
          tabIndex="-1"
        >
          Main Navigation
        </h2>
        {navList}
      </nav>
      {menuBtn}
    </>
  )

  let mainHeader
  if (isPhone) {
    // Put everything together in phone layout header
    mainHeader = (
      <header ref={mainHeaderRef} className="main-header container">
        {mainHeaderContent}
      </header>
    )
  } else {
    // Put everything together in non-phone layout header
    mainHeader = (
      <motion.header
        ref={mainHeaderRef}
        initial="initial"
        animate={headerAnimateVal}
        variants={VARIANTS}
        className="main-header container"
      >
        {mainHeaderContent}
      </motion.header>
    )
  }

  // Fix for phone layout where leftover styles are remain on header from SSR
  useEffect(() => {
    if (mainHeaderRef.current && isPhone) {
      mainHeaderRef.current.removeAttribute('style')
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Handle observers
  useEffect(() => {
    const observers = []

    if (isPhone) {
      if (logoRef.current) {
        observers.push(
          createObserver(logoRef, { threshold: THRESHOLD }, (entries) => {
            if (entries[0].intersectionRatio >= THRESHOLD) {
              if (isInitRenderPhone[0]) {
                if (
                  pathname === '/' &&
                  (isInitRenderPhone[0] || isInitRenderPhone[1])
                ) {
                  setHeaderAnimateVal('slow')
                } else {
                  setHeaderAnimateVal('fast')
                }

                isInitRenderPhone[0] = false

                if (
                  !isInitRenderPhone[0] &&
                  !isInitRenderPhone[1] &&
                  isInitRender
                )
                  isInitRender = false
              } else {
                setHeaderAnimateVal('fast')
              }
            } else {
              setHeaderAnimateVal('initial')
            }
          })
        )
      }

      if (menuOpenRef.current) {
        observers.push(
          createObserver(menuOpenRef, { threshold: THRESHOLD }, (entries) => {
            if (entries[0].intersectionRatio >= THRESHOLD) {
              if (isInitRenderPhone[1]) {
                if (
                  pathname === '/' &&
                  (isInitRenderPhone[0] || isInitRenderPhone[1])
                ) {
                  setHeaderAnimateVal('slow')
                } else {
                  setHeaderAnimateVal('fast')
                }

                isInitRenderPhone[1] = false

                if (
                  !isInitRenderPhone[0] &&
                  !isInitRenderPhone[1] &&
                  isInitRender
                )
                  isInitRender = false
              } else {
                setHeaderAnimateVal('fast')
              }
            } else {
              setHeaderAnimateVal('initial')
            }
          })
        )
      }
    } else {
      if (mainHeaderRef.current) {
        observers.push(
          createObserver(mainHeaderRef, { threshold: THRESHOLD }, (entries) => {
            if (entries[0].intersectionRatio >= THRESHOLD) {
              if (isInitRender) {
                if (pathname === '/') {
                  setHeaderAnimateVal('slow')
                } else {
                  setHeaderAnimateVal('fast')
                }

                isInitRender = isInitRenderPhone[0] = isInitRenderPhone[1] = false
              } else {
                setHeaderAnimateVal('fast')
              }
            } else {
              setHeaderAnimateVal('initial')
            }
          })
        )
      }
    }

    // Disconnect all observers on unmount
    return () => {
      if (observers.length > 0)
        observers.forEach((observer) => observer.disconnect())
    }
  }, [isPhone, mainHeaderRef]) // eslint-disable-line react-hooks/exhaustive-deps

  // Handle phone menu modal
  useEffect(() => {
    /**
     * Setup keyboard tab trap
     * @param {KeyboardEvent} e Keyboard event object
     */
    const trapTab = (e) => {
      if (e.keyCode === 27) {
        setIsOpen(false)
        setBodyScroll(true)
      } else if (
        e.keyCode === 9 &&
        phoneHomeRef &&
        phoneHomeRef.current &&
        menuCloseRef &&
        menuCloseRef.current
      ) {
        // Shift + Tab
        if (e.shiftKey) {
          if (
            document.activeElement === phoneHomeRef.current ||
            (mainNavTitleRef &&
              mainNavTitleRef.current &&
              document.activeElement === mainNavTitleRef.current)
          ) {
            // Move active element to end of phone menu
            e.preventDefault()
            menuCloseRef.current.focus()
          }
        } else {
          // Tab only
          if (document.activeElement === menuCloseRef.current) {
            // Move active element to start of phone menu
            e.preventDefault()
            phoneHomeRef.current.focus()
          }
        }
      }
    }

    // Apply keyboard tab trap
    if (isOpen && isPhone) {
      document.addEventListener('keydown', trapTab)

      if (phoneHomeRef.current) phoneHomeRef.current.focus() // Start focus on first element
    } else {
      document.removeEventListener('keydown', trapTab)
      if (menuOpenRef.current) menuOpenRef.current.focus() // Return focus on menu open button
    }

    // Remove keyboard trap on unmount
    return () => document.removeEventListener('keydown', trapTab)
  }, [isOpen, isPhone])

  return mainHeader
}

export default MainNav
