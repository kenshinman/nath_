import React from "react"

const EventListItem = ({
  event: {
    date,
    title,
    location: { state, country },
  },
}) => {
  const [day, month, year] = date.split(" ")
  return (
    <div className="row ticket">
      <div className="col">
        <div className="row">
          <a className="col-10 ticket-link" href="05-Events-Single-Events.html">
            <div className="day">
              <div className="day_num">
                <span>{day}</span>
                <div>
                  <p>{month}</p>
                  <p>{year}</p>
                </div>
              </div>
            </div>
            <div className="name">
              <p>
                <span>{title}</span> //{" "}
                <span>
                  {state}, {country}
                </span>
              </p>
            </div>
          </a>
          <div className="col-2 buy">
            <a href="#">Details </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventListItem
