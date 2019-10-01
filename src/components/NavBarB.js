import React from "react"

const NavBarB = () => {
  return (
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
  )
}

export default NavBarB
