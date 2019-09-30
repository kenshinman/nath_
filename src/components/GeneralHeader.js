import React from "react"
import NavBar from "./NavBar"
import { Link } from "gatsby"

const GeneralHeader = () => {
  return (
    <section id="header">
      {/* START MENU SECTION */}
      <div className="nav-menu nav-demo-1">
        {/* NAV BAR BACKGROUND IMAGE*/}
        <div
          className="section_bg_image"
          style={{
            backgroundImage:
              "url(resources/images/biel-morro-128512-unsplash.png)",
          }}
        />
        {/* START NAV BAR*/}
        <NavBar />
        {/* END NAV BAR*/}
        <div className="overly" />
      </div>
      {/* END MENU SECTION */}

      {/* END SEARCH BAR SECTION  */}
      <div className="header-continer">
        <div className="section">
          {/* LOGO */}
          <div className="logo">
            <Link to="/">
              <img
                className="white-logo"
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
    </section>
  )
}

export default GeneralHeader
