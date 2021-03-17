import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
  function showMenu() {
    for (let element of document.getElementsByClassName("nav-toggle")) {
      element.classList.toggle("nav-hide")
    }
  }
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
        <div className="menu-toggle" onClick={showMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  )
}
