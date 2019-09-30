import React, { useState } from "react"

const BookingForm = () => {
  return (
    <div>
      <form method="post" action="https://formspree.io/archkenny@yahoo.com">
        <div className="row fild_1">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="name"
              required
            />
          </div>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <hr />
        <div className="row fild_1">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Website"
              name="website"
            />
          </div>
          <div className="col-sm-6">
            <input
              type="phone"
              className="form-control"
              id="phone"
              placeholder="phone"
              name="phone"
            />
          </div>
        </div>
        <hr />
        <div className="row fild_1">
          <div className="col-sm-6">
            <select
              type="text"
              className="form-control"
              name="Type of Oeganization"
              style={{ height: 55, color: "#fff" }}
              required
            >
              <option value="">Type of Organization</option>
              {"Church/Ministry/Fellowship/Organization"
                .split("/")
                .map(option => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  )
                })}
            </select>
          </div>
          <div className="col-sm-6">
            <input
              type="address"
              className="form-control"
              id="address"
              placeholder="address"
              name="address"
            />
          </div>
        </div>
        <hr />
        <div className="row fild_1">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="State"
              name=" state"
            />
          </div>
          <div className="col-sm-6">
            <input
              type="country"
              className="form-control"
              id="country"
              placeholder="country"
              name="country"
            />
          </div>
        </div>
        <hr />
        <div className="row fild_1">
          <div className="col-sm-6">
            <select
              type="text"
              className="form-control"
              name="Type of Event"
              style={{ height: 55, color: "#fff" }}
              required
            >
              <option value="">Type of Event</option>
              {"Concert/Conference/Seminar/Workshop/Other"
                .split("/")
                .map(option => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  )
                })}
            </select>
          </div>
          <div className="col-sm-6">
            <input
              type="address"
              className="form-control"
              id="address"
              placeholder="address"
              name="address"
            />
          </div>
        </div>
        <hr />

        <button type="submit" className="btn btn-primary">
          SEND MESSAGE
        </button>
      </form>
    </div>
  )
}

export default BookingForm
