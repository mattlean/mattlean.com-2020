import React, { useContext, useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { LG_PHONE } from '../../visuals/responsive'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ThemeCtx } from '../../visuals/theme'
import { useViewportWidth, setBodyScroll } from 'eswiss/dist/util'
import { createObserver } from '../../util'
import Logo from '../../assets/logo/logo.svg'
import Menu from '../../assets/icons/menu.svg'
import MODAL_VARIANTS from '../modal_variants'
import SunMoon from '../../assets/icons/sun-moon.svg'
import X from '../../assets/icons/x.svg'

const HEADER_THRESHOLD = 0.4
let isInitRender = true

const HEADER_VARIANTS = {
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
    y: '-10%',
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
  slow: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

/**
 * Main Navigation
 */
const MainNav = () => {
  // const viewportWidth = useViewportWidth(__IS_SERVER__)
  // const { pathname } = useLocation()
  // const [isOpen, setIsOpen] = useState(false)
  // const { isDark, manualToggle } = useContext(ThemeCtx)

  // const intersectionRef = useRef(null)
  // const intersection = useIntersection(intersectionRef, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: THRESHOLD,
  // })

  // // Flag to check if window is within phone screen sizes
  // const isPhone = !__IS_SERVER__ && viewportWidth <= LG_PHONE

  // // Flag to check if MainNav is hidden for regular screen sizes
  // const isHidden =
  //   __IS_SERVER__ ||
  //   (intersection && intersection.intersectionRatio < THRESHOLD) ||
  //   !intersection
  //     ? true
  //     : false

  // const regularVariants = {
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: 'easeOut',
  //     },
  //   },
  //   initial: {
  //     opacity: 0,
  //     y: '-10%',
  //     transition: {
  //       duration: 0.5,
  //       ease: 'easeIn',
  //     },
  //   },
  // }
  // // Set longer delay for initial animation for Landing page
  // if (initRender && pathname === '/') {
  //   regularVariants.animate.transition.delay = 0.8
  //   initRender = false
  // }

  // // Control regular animation
  // let regularAnimate
  // if (isHidden) {
  //   regularAnimate = 'initial'
  // } else {
  //   regularAnimate = 'animate'
  // }

  // if (!isPhone && isOpen) {
  //   // Close mobile MainNav if window is resized too large and mobile MainNav is open
  //   setIsOpen(false)
  // }

  // // Control phone animation
  // let phoneAnimate
  // if (isOpen) {
  //   phoneAnimate = 'animate'
  // } else {
  //   phoneAnimate = 'initial'
  // }

  // // Set class names
  // let logoClassName = 'logo'
  // if (isOpen) logoClassName += ' open'

  // let mainNavCloseClassName = 'btn-nav'
  // if (isOpen) mainNavCloseClassName += ' open'

  // const openClassName = isOpen ? 'open' : undefined

  // // Set menu icon depending on whether phone MainNav is open or not
  // const menuIcon = isOpen ? (
  //   <X className="svg-primary" />
  // ) : (
  //   <Menu className="svg-primary" />
  // )

  // // Set phone MainNav theme setting btn txt
  // const lightnessTxt = isDark ? 'light mode' : 'dark mode'

  // const homeRef = useRef(null)
  // const menuRef = useRef(null)

  // const LinkListContent = (
  //   <>
  //     <li className="phone-home">
  //       <NavLink
  //         ref={homeRef}
  //         exact={true}
  //         to="/"
  //         onClick={() => setIsOpen(false)}
  //       >
  //         home
  //       </NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/about" onClick={() => setIsOpen(false)}>
  //         about
  //       </NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/projects" onClick={() => setIsOpen(false)}>
  //         projects
  //       </NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/blog" onClick={() => setIsOpen(false)}>
  //         blog
  //       </NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/contact" onClick={() => setIsOpen(false)}>
  //         contact
  //       </NavLink>
  //     </li>
  //     <li>
  //       <button
  //         aria-label={`Switch lightness theme`}
  //         className="btn-nav c-primary"
  //         onClick={() => {
  //           manualToggle()
  //         }}
  //       >
  //         <SunMoon className="sun-moon_svg" />
  //         {isPhone ? lightnessTxt : undefined}
  //       </button>
  //     </li>
  //   </>
  // )

  // let LinkList
  // if (isPhone) {
  //   // Use motion component if phone MainNav
  //   const ariaHiddenVal = !isOpen ? true : undefined
  //   const ariaModalVal = isOpen ? true : undefined
  //   LinkList = (
  //     <motion.ul
  //       animate={phoneAnimate}
  //       aria-hidden={ariaHiddenVal}
  //       aria-modal={ariaModalVal}
  //       role="dialog"
  //       variants={PHONE_VARIANTS}
  //       className={openClassName}
  //     >
  //       {LinkListContent}
  //     </motion.ul>
  //   )
  // } else {
  //   // Use regular ul ele if regular MainNav
  //   LinkList = <ul className={openClassName}>{LinkListContent}</ul>
  // }

  // // Disable body scrolling when phone MainNav is open
  // if (!__IS_SERVER__) setBodyScroll(!isOpen)

  // // Setup keyboard tab trap
  // useEffect(() => {
  //   /**
  //    * Setup keyboard tab trap
  //    * @param {KeyboardEvent} e Keyboard event object
  //    */
  //   const trapTab = (e) => {
  //     if (e.keyCode === 27) {
  //       setIsOpen(false)
  //     } else if (
  //       e.keyCode === 9 &&
  //       homeRef &&
  //       homeRef.current &&
  //       menuRef &&
  //       menuRef.current
  //     ) {
  //       // Shift + Tab
  //       if (e.shiftKey) {
  //         if (document.activeElement === homeRef.current) {
  //           // Move activeElement to end of MainNav
  //           e.preventDefault()
  //           menuRef.current.focus()
  //         }
  //       } else {
  //         // Tab only
  //         if (document.activeElement === menuRef.current) {
  //           // Move activeElement to start of MainNav
  //           e.preventDefault()
  //           homeRef.current.focus()
  //         }
  //       }
  //     }
  //   }

  //   // Apply keyboard tab trap
  //   if (isOpen && isPhone) {
  //     document.addEventListener('keydown', trapTab)
  //   } else {
  //     document.removeEventListener('keydown', trapTab)
  //   }

  //   // Remove keyboard trap on unmount
  //   return () => document.removeEventListener('keydown', trapTab)
  // }, [isOpen, isPhone])

  const [headerAnimateVal, setHeaderAnimateVal] = useState('initial')
  const logoRef = useRef(null)
  const mainHeaderRef = useRef(null)
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
          to="/projects"
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
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
          if (phoneHomeRef.current) phoneHomeRef.current.focus()
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
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
      <nav className="main-nav">
        <h2 className="main-nav-title">Main Navigation</h2>
        {navList}
      </nav>
      {menuBtn}
    </>
  )

  let mainHeader
  if (isPhone) {
    // Put everything together in phone layout header
    mainHeader = (
      <header className="main-header container">{mainHeaderContent}</header>
    )
  } else {
    // Put everything together in non-phone layout header
    mainHeader = (
      <motion.header
        ref={mainHeaderRef}
        initial="initial"
        animate={headerAnimateVal}
        variants={HEADER_VARIANTS}
        className="main-header container"
      >
        {mainHeaderContent}
      </motion.header>
    )
  }

  // Setup observers
  useEffect(() => {
    let observer

    if (mainHeaderRef.current) {
      observer = createObserver(
        mainHeaderRef,
        { threshold: HEADER_THRESHOLD },
        (entries) => {
          if (entries[0].intersectionRatio >= HEADER_THRESHOLD) {
            if (isInitRender) {
              isInitRender = false

              if (pathname === '/') setHeaderAnimateVal('slow')
              else setHeaderAnimateVal('fast')
            } else {
              setHeaderAnimateVal('fast')
            }
          } else {
            setHeaderAnimateVal('initial')
          }
        }
      )
    }

    return () => {
      if (observer) observer.disconnect()
    }
  }, [isPhone, mainHeaderRef])

  // Setup phone menu modal
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
          if (document.activeElement === phoneHomeRef.current) {
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
