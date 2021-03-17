import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Home </Link>
        <div className="nav-hide nav-vl nav-toggle"></div>
        <div className="nav-links">
          <Link to="/resume" className="nav-toggle nav-hide">
            Resume
          </Link>
        </div>
        <div className="nav-hide nav-vl nav-toggle"></div>
        <div className="nav-links">
          <Link to="/projects" className="nav-toggle nav-hide">
            Projects
          </Link>
        </div>
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  )
}
