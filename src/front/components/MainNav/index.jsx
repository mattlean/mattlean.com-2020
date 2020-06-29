import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'
import { ThemeCtx } from '../../visuals/theme'
import Logo from '../../assets/logo.svg'
import SunMoon from '../../assets/sun-moon.svg'

const MainNav = () => {
  const location = useLocation()
  const { toggle } = useContext(ThemeCtx)

  const variants = {
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    initial: {
      opacity: 0,
      y: '-100px',
    },
  }

  if (location.pathname === '/') {
    variants.in.transition.delay = 0.5
  }

  return (
    <header className="main-header">
      <motion.nav
        initial="initial"
        animate="in"
        variants={variants}
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
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">contact</a>
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
