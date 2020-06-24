import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNav = () => (
  <header className="main-header">
    <nav className="container main-nav">
      <NavLink to="/" activeClassName="main-nav-link-active">
        home
      </NavLink>
      <span>
        <NavLink to="/about" activeClassName="main-nav-link-active">
          about
        </NavLink>
        <a href="#">projects</a>
        <a href="#">blog</a>
        <a href="#">contact</a>
      </span>
    </nav>
  </header>
)

export default MainNav
