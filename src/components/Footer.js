import React from "react"
import SocialIcons from "./SocialIcons"

const Footer = () => {
  return (
    <footer id="footer">
      <div
        className="bg_image"
        style={{
          backgroundImage: "url(https://source.unsplash.com/random/1920x600)",
        }}
      />
      <div className="footer-overly" />
      <div className="section">
        <div className="row footer">
          <div className="col">
            <h2>ABOUT BEATSWAVE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
          </div>
          <div className="col">
            <div className="f-content">
              <h2>UPCOMING EVENT</h2>
              <div className="day_num">
                <a href="05-Events-Single-Events.html">
                  <span>19</span>
                  <div>
                    <p>Dec</p>
                    <p>2019</p>
                  </div>
                  <p>Torwar Festival</p>
                </a>
              </div>
              <div className="day_num">
                <a href="05-Events-Single-Events.html">
                  <span>12</span>
                  <div>
                    <p>Dec</p>
                    <p>2020</p>
                  </div>
                  <p>Lavaza Festival</p>
                </a>
              </div>
              <div className="day_num">
                <a href="05-Events-Single-Events.html">
                  <span>15</span>
                  <div>
                    <p>Dec</p>
                    <p>2020</p>
                  </div>
                  <p>Ladesno Festival</p>
                </a>
              </div>
              <div className="day_num">
                <a href="05-Events-Single-Events.html">
                  <span>12</span>
                  <div>
                    <p>Dec</p>
                    <p>2020</p>
                  </div>
                  <p>Coachella Festival</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer_logo">
              <img src="resources/images/logo-black.png" alt="Logo" />
            </div>
            <div className="info">
              <p className="main_p">Lagos, Nigeria</p>
              <p>Booking: bookings@nathanielbassey.net</p>
              <p>Email: info@nathanielbassey.net</p>
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className="row f_1">
        <div className="col">
          <div className="copyright">
            <span>
              Copyright &copy; Nathaniel Bassey {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
