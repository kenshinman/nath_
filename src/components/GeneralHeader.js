import React from "react"
import NavBar from "./NavBar"

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
            <a href="01-Home.html">
              <img
                className="white-logo"
                src="resources/images/nath_logo_dark.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="nav-menu nav-demo-2">
            {/* START NAV BAR*/}
            <NavBar />
            {/* END NAV BAR*/}
          </div>
          <div className="header_items">
            <div className="search_icon">
              {/*<i class="fa fa-search" aria-hidden="true"></i>*/}
              <svg
                className="open-search"
                viewBox="0 0 56.966 56.966"
                width="30px"
                height="30px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                  fill="#FFFFFF"
                />
              </svg>
              <svg
                className="close-search"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 15.642 15.642"
                enableBackground="new 0 0 15.642 15.642"
                width={21}
                height={21}
              >
                <path
                  fillRule="evenodd"
                  d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
            <div className="shop_icon">
              <a href="14-Cart.html">
                <i className="fa fa-shopping-cart" aria-hidden="true" />
                <span className="card_count">2</span>
              </a>
            </div>
            <div className="menu_icon">
              <i className="fa fa-bars" aria-hidden="true" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 15.642 15.642"
                enableBackground="new 0 0 15.642 15.642"
                width={21}
                height={21}
              >
                <path
                  fillRule="evenodd"
                  d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneralHeader
