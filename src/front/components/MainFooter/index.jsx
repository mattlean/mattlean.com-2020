import React from 'react'
import { Link } from 'react-router-dom'

const MainFooter = () => {
  return (
    <footer className="main-footer link-grey-b txt-grey-b">
      <ul className="personal-title">
        <li>
          <strong>Matt Lean</strong>
        </li>
        <li>Full-Stack Web Developer</li>
        <li>UI/UX Designer</li>
      </ul>
      <nav className="internal-nav">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="external-nav">
        <ul>
          <li>
            <a href="#">Behance</a>
          </li>
          <li>
            <a
              href="https://github.com/mattlean"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mattlean"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
      <p className="txt-xs txt-grey-c">
        Made with too much boba in the San Francisco Bay Area.
      </p>
    </footer>
  )
}

export default MainFooter
