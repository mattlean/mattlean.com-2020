import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNav = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
  </nav>
)

export default MainNav
