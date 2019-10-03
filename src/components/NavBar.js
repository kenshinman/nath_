import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <ul className="nav flex-column section">
      <li className="nav-item">
        <Link activeClassName="active" className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link activeClassName="active" className="nav-link" to="/profile">
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link activeClassName="active" className="nav-link" to="/albums">
          Albums
        </Link>
      </li>
      <li className="nav-item">
        <Link activeClassName="active" className="nav-link" to="/events">
          Events
        </Link>
      </li>
      <li className="nav-item">
        <Link activeClassName="active" className="nav-link" to="/booking">
          Booking
        </Link>
      </li>

      {/* <li className="nav-item">
        <a className="nav-link" href="javascript:void(0);">
          Videos
        </a>
        <ul className="child-item">
          <li className="dropdown-child-item">
            <a className="nav-link" href="06-Videos.html">
              Videos List
            </a>
          </li>
          <li className="dropdown-child-item">
            <a className="nav-link" href="07-Single-Video.html">
              Single Video
            </a>
          </li>
        </ul>
      </li> */}
    </ul>
  )
}

export default NavBar
