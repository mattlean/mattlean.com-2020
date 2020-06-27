import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeCtx } from '../../visuals/theme'
import Logo from '../../assets/logo.svg'
import SunMoon from '../../assets/sun-moon.svg'

const MainNav = () => {
  const { toggle } = useContext(ThemeCtx)

  return (
    <header className="main-header">
      <nav className="container main-nav">
        <NavLink to="/" activeClassName="main-nav-link-active">
          <Logo className="logo" />
        </NavLink>
        <ul className="link-grey-a">
          <li>
            <NavLink to="/about" activeClassName="main-nav-link-active">
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
            <button className="btn-light">
              <SunMoon
                className="sun-moon_svg svg-grey-a"
                onClick={() => {
                  toggle()
                }}
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav
