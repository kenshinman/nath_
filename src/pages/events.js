import React from "react"
import Layout from "../components/layout"
import TopTitle from "../components/TopTitle"
import { query, useStaticQuery } from "gatsby"
import BodyClassName from "react-body-classname"
import EventListItem from "../components/EventListItem"

const EventsPage = () => {
  const events = []

  return (
    <BodyClassName className="all-events home-demo-2">
      <Layout title="Events">
        <TopTitle title="Events" />
        <section id="on-tour" className="section_3">
          <div className="section">
            {/* TICKETS */}
            <div
              className="col tickets wow fadeInUpBig"
              style={{ visibility: "visible", animationName: "fadeInUpBig" }}
            >
              {events.map((event, i) => {
                return <EventListItem key={i} event={event} />
              })}
            </div>
          </div>
        </section>
      </Layout>
    </BodyClassName>
  )
}

export default EventsPage
