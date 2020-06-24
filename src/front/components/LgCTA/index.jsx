import React from 'react'
import { NavLink } from 'react-router-dom'

const LgCTA = ({ to, txt }) => (
  <NavLink to={to} className="lg-cta">
    {txt}
  </NavLink>
)

export default LgCTA
