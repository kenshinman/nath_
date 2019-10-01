import React from "react"
import { useStaticQuery, query } from "gatsby"
import EventListItem from "../EventListItem"

const EventsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        nodes {
          id
          events {
            title
            date
            location {
              address
              city
              state
              country
            }
          }
        }
      }
    }
  `)

  const events = data.allDataJson.nodes[0].events

  return (
    <section id="on-tour" className="section_3">
      {/* START TOUR SECTION */}
      <div
        className="section_bg_image"
        style={{
          backgroundImage: "url(resources/images/worship_bg_3.jpg)",
          backgroundSize: "cover",
        }}
      />
      <div className="section">
        {/* TOUR TITLE */}
        <div className="title">
          <div className>
            <h1>Events</h1>
            <p>Concerts, Tours, etc.</p>
          </div>
        </div>
        {/* TICKETS */}
        <div className="col tickets wow fadeInUpBig">
          {events.map((event, i) => {
            return <EventListItem key={i} event={event} />
          })}
        </div>
      </div>
      {/* END TOUR SECTION */}
    </section>
  )
}

export default EventsSection
