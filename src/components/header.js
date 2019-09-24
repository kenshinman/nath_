import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <section id="header">
    {/* START MENU SECTION */}
    <div className="nav-menu nav-demo-1">
      {/* NAV BAR BACKGROUND IMAGE*/}
      <div
        className="section_bg_image"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1568685002001-1017b6b99e44?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1280&ixlib=rb-1.2.1&q=80&w=1920)",
        }}
      ></div>
      {/* START NAV BAR*/}
      <ul className="nav flex-column section">
        <li className="nav-item">
          <a className="nav-link active" href="01-Home.html">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">
            Music
          </a>
          <ul className="child-item">
            <li className="dropdown-child-item">
              <a className="nav-link" href="02-Music-Discography.html">
                Discography
              </a>
            </li>
            <li className="dropdown-child-item">
              <a className="nav-link" href="03-Music-Single-Album.html">
                Single Album
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">
            Events
          </a>
          <ul className="child-item">
            <li className="dropdown-child-item">
              <a className="nav-link" href="04-Events-All-Events.html">
                Upcoming Events
              </a>
            </li>
            <li className="dropdown-child-item">
              <a className="nav-link" href="04-Events-All-Events.html">
                Past Events
              </a>
            </li>
            <li className="dropdown-child-item">
              <a className="nav-link" href="04-Events-All-Events.html">
                All Events
              </a>
            </li>
            <li className="dropdown-child-item">
              <a className="nav-link" href="05-Events-Single-Events.html">
                Single Event
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
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
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">
            Gallery
          </a>
          <ul className="child-item">
            <li className="dropdown-child-item">
              <a className="nav-link" href="08-Gallery-Photogallery.html">
                Gallery List
              </a>
            </li>
            <li className="dropdown-child-item">
              <a className="nav-link" href="09-Gallery-Single-Gallery.html">
                Single Gallery
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">
            Blog
          </a>
          <ul className="child-item">
            <li className="dropdown-child-item">
              <a className="nav-link" href="13-Blog-Mansory.html">
                Blog Masonry
              </a>
            </li>
            <li className="dropdown-child-item">
              <a className="nav-link" href="10-Blog-Grid.html">
                Blog Grid
              </a>
            </li>
            <li className="dropdown-child-item">
              <a className="nav-link" href="12-Blog-Standard.html">
                Blog Standard
              </a>
            </li>
            <li className="dropdown-child-item">
              <a className="nav-link" href="11-Blog-Single-Post.html">
                Single Post
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">
            Shop
          </a>
          <ul className="child-item">
            <li className="dropdown-child-item">
              <a className="nav-link" href="19-Shop.html">
                Product List
              </a>
            </li>
            <li className="dropdown-child-item">
              <a className="nav-link" href="20-Single-Product.html">
                Single Product
              </a>
            </li>
            <li className="dropdown-child-item">
              <a className="nav-link" href="14-Cart.html">
                Cart
              </a>
            </li>
            <li className="dropdown-child-item">
              <a className="nav-link" href="15-Checkout-Page.html">
                Checkout
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="16-Contact-Us.html">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="17-404.html">
            404
          </a>
        </li>
      </ul>
      {/* END NAV BAR*/}
      <div className="overly" />
    </div>
    {/* END MENU SECTION */}

    {/* START SEARCH BAR SECTION */}
    <div className="search-bar">
      {/* SEARCH BAR BACKGROUND IMAGE*/}
      <div
        className="section_bg_image"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1568684333891-6d0e470ac0c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1280&ixlib=rb-1.2.1&q=80&w=1920)",
        }}
      ></div>
      <form
        className="form-inline my-2 my-lg-0 search_form"
        action="18-Search-Result-Page.html"
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
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
        </button>
      </form>
      <div className="overly" />
    </div>
    {/* END SEARCH BAR SECTION  */}
    {/* HEADER BACKGROUND IMAGE  */}
    <div
      className="bg_image"
      style={{
        backgroundImage: "url(https://source.unsplash.com/random/1920x1280)",
      }}
    />
    <div className="header-continer">
      <div className="section">
        {/* LOGO */}
        <div className="logo">
          <a href="01-Home.html">
            <img
              className="white-logo"
              src="resources/images/logo.png"
              alt="Logo"
            />
            <img
              className="phink-logo"
              src="resources/images/logo-black.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="nav-menu nav-demo-2">
          {/* START NAV BAR*/}
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="01-Home.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0);">
                Music
              </a>
              <ul className="child-item">
                <li className="dropdown-child-item">
                  <a className="nav-link" href="02-Music-Discography.html">
                    Discography
                  </a>
                </li>
                <li className="dropdown-child-item">
                  <a className="nav-link" href="03-Music-Single-Album.html">
                    Single Album
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0);">
                Events
              </a>
              <ul className="child-item">
                <li className="dropdown-child-item">
                  <a className="nav-link" href="04-Events-All-Events.html">
                    Upcoming Events
                  </a>
                </li>
                <li className="dropdown-child-item">
                  <a className="nav-link" href="04-Events-All-Events.html">
                    Past Events
                  </a>
                </li>
                <li className="dropdown-child-item">
                  <a className="nav-link" href="04-Events-All-Events.html">
                    All Events
                  </a>
                </li>
                <li className="dropdown-child-item">
                  <a className="nav-link" href="05-Events-Single-Events.html">
                    Single Event
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
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
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0);">
                Gallery
              </a>
              <ul className="child-item">
                <li className="dropdown-child-item">
                  <a className="nav-link" href="08-Gallery-Photogallery.html">
                    Gallery List
                  </a>
                </li>
                <li className="dropdown-child-item">
                  <a className="nav-link" href="09-Gallery-Single-Gallery.html">
                    Single Gallery
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0);">
                Blog
              </a>
              <ul className="child-item">
                <li className="dropdown-child-item">
                  <a className="nav-link" href="13-Blog-Mansory.html">
                    Blog Masonry
                  </a>
                </li>
                <li className="dropdown-child-item">
                  <a className="nav-link" href="10-Blog-Grid.html">
                    Blog Grid
                  </a>
                </li>
                <li className="dropdown-child-item">
                  <a className="nav-link" href="12-Blog-Standard.html">
                    Blog Standard
                  </a>
                </li>
                <li className="dropdown-child-item">
                  <a className="nav-link" href="11-Blog-Single-Post.html">
                    Single Post
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0);">
                Shop
              </a>
              <ul className="child-item">
                <li className="dropdown-child-item">
                  <a className="nav-link" href="19-Shop.html">
                    Product List
                  </a>
                </li>
                <li className="dropdown-child-item">
                  <a className="nav-link" href="20-Single-Product.html">
                    Single Product
                  </a>
                </li>
                <li className="dropdown-child-item">
                  <a className="nav-link" href="14-Cart.html">
                    Cart
                  </a>
                </li>
                <li className="dropdown-child-item">
                  <a className="nav-link" href="15-Checkout-Page.html">
                    Checkout
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="16-Contact-Us.html">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="17-404.html">
                404
              </a>
            </li>
          </ul>
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
    {/* HEADER TITLE  */}
    <div className="section_1_title">
      <div className="big-title">
        <div className="header-title section wow zoomIn">
          <h1>a music theme for you</h1>
          <a href="#">Get it now</a>
        </div>
        {/* <h1>beatswave</h1> */}
        <img src="resources/images/logo-big-white.png" alt="Logo 1" />
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
