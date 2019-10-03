import React from "react"
import BodyClassName from "react-body-classname"
import Layout from "../components/layout"
import TopTitle from "../components/TopTitle"
import BookingForm from "../components/BookingForm"

const contact = () => {
  return (
    <BodyClassName className="contact-us-page home-demo-2">
      <Layout title="Booking">
        <TopTitle title="Booking" />
        <section
          id="contact-us"
          className="section_8"
          style={{
            backgroundImage: "url(resources/images/nathaniel-bassey-photo.jpg)",
          }}
        >
          <div className="overly" />
          <div className="section">
            <div className="contact-info">
              <h2>Contact information</h2>
              {/* <p>In case you some aquestions popped in your’s mind, </p>
              <p>
                FeIn case you some aquestions popped in your’el email or even
                visit us.
              </p>
              <div className="contact-adress">
                <p>
                  <i className="fa fa-home" aria-hidden="true" />
                  <span>Address: 123 Street Name, City Name, United </span>
                </p>
                <a href="mailto:info@beatswave.com">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                  <span>Email: info@beatswave.com</span>
                </a>
                <a href="01-Home.html">
                  <i className="fa fa-globe" aria-hidden="true" />
                  <span>www.beatswave.com</span>
                </a>
              </div> */}
            </div>
            <div className="form">
              <BookingForm />
            </div>
          </div>
        </section>
      </Layout>
    </BodyClassName>
  )
}

export default contact
