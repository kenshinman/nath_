import React, { useState } from "react"
import axios from "axios"

const BookingForm = () => {
  //state
  const [sending, setSending] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    organizationType: "",
    venue: "",
    state: "",
    country: "",
    typeOfEvent: "",
    eventDate: "",
    altDate: "",
    description: "",
  })
  const onChange = e => {
    setPayload({ ...payload, [e.target.name]: e.target.value })
  }

  const sendMail = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/contact", payload)
      const { success } = res.data
      if (success) {
        setSending(false)
        showToast(true)
        setPayload({
          name: "",
          email: "",
          website: "",
          phone: "",
          organizationType: "",
          venue: "",
          state: "",
          country: "",
          typeOfEvent: "",
          eventDate: "",
          altDate: "",
          description: "",
        })
      }
    } catch (error) {
      setSending(false)
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={sendMail}>
        <div className="row fild_1">
          <div className="col-sm-6">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="name"
              value={payload.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={payload.email}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <hr />
        <div className="row fild_1">
          <div className="col-sm-6">
            <label htmlFor="">Website</label>
            <input
              type="text"
              className="form-control"
              placeholder="Website"
              name="website"
              value={payload.website}
              onChange={onChange}
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="">Phone</label>
            <input
              type="phone"
              className="form-control"
              id="phone"
              placeholder="phone"
              name="phone"
              value={payload.phone}
              onChange={onChange}
            />
          </div>
        </div>
        <hr />
        <div className="row fild_1">
          <div className="col-sm-6">
            <label htmlFor="">Type of Organization</label>
            <select
              type="text"
              className="form-control"
              name="organizationType"
              style={{ height: 55, color: "#fff" }}
              value={payload.organizationType}
              onChange={onChange}
              required
            >
              <option value="">Choose</option>
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
            <label htmlFor="">Venue</label>
            <input
              type="text"
              className="form-control"
              id="venue"
              placeholder="venue"
              name="venue"
              value={payload.venue}
              onChange={onChange}
            />
          </div>
        </div>
        <hr />
        <div className="row fild_1">
          <div className="col-sm-6">
            <label htmlFor="">State</label>
            <input
              type="text"
              className="form-control"
              placeholder="State"
              name="state"
              value={payload.state}
              onChange={onChange}
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="">Country</label>
            <input
              type="country"
              className="form-control"
              id="country"
              placeholder="country"
              name="country"
              value={payload.country}
              onChange={onChange}
            />
          </div>
        </div>
        <hr />
        <div className="row fild_1">
          <div className="col-sm-6">
            <label htmlFor="">Type of Event</label>
            <select
              type="text"
              className="form-control"
              name="typeOfEvent"
              style={{ height: 55, color: "#fff" }}
              value={payload.typeOfEvent}
              onChange={onChange}
              required
            >
              <option value="">Choose</option>
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
            <label htmlFor="">Type of Event</label>
            <input
              type="date"
              className="form-control"
              id="eventDate"
              placeholder="eventDate"
              name="eventDate"
              value={payload.eventDate}
              onChange={onChange}
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="">Alternative Date</label>
            <input
              type="date"
              className="form-control"
              id="altDate"
              placeholder="altDate"
              name="altDate"
              value={payload.altDate}
              onChange={onChange}
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="">Brief Description of Event</label>
            <textarea
              className="form-control"
              id="description"
              placeholder="description"
              name="description"
              value={payload.description}
              onChange={onChange}
              style={{ height: 150 }}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          {sending ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </form>
      {showToast && (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>Message Sent</strong>
        </div>
      )}
    </div>
  )
}

export default BookingForm
