import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from "./NavBar"

const Header = ({ siteTitle }) => (
  <section id="header">
    {/* START MENU SECTION */}
    <div className="nav-menu nav-demo-1">
      {/* NAV BAR BACKGROUND IMAGE*/}

      {/* START NAV BAR*/}
      <NavBar />
      {/* END NAV BAR*/}
      <div className="overly" />
    </div>

    <div
      className="bg_image"
      style={{
        backgroundImage: "url(resources/images/nathaniel-bassey-photo.jpg)",
        height: "100vh",
      }}
    />
    <div className="header-continer">
      <div className="section">
        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img
              className="white-logo"
              src="/resources/images/nath_logo_light.png"
              alt="Logo"
            />
            <img
              className="phink-logo"
              src="/resources/images/nath_logo_dark.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="nav-menu nav-demo-2">
          {/* START NAV BAR*/}
          <NavBar />
          {/* END NAV BAR*/}
        </div>
      </div>
    </div>
    {/* HEADER TITLE  */}
    <div className="section_1_title">
      <div className="big-title">
        <div className="header-title section wow zoomIn">
          <h1>welcome to nathanielbassey.net</h1>
          <a href="#">Get it now</a>
        </div>
        {/* <h1>beatswave</h1> */}
        {/* <img src="/resources/images/logo-big-white.png" alt="Logo 1" /> */}
      </div>
    </div>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
