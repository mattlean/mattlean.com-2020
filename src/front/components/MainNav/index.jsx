import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ThemeCtx } from '../../visuals/theme'
import Logo from '../../assets/logo.svg'
import SunMoon from '../../assets/sun-moon.svg'

const variants = {
  in: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  initial: {
    opacity: 0,
  },
}

const MainNav = () => {
  const { toggle } = useContext(ThemeCtx)

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
