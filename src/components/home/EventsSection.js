import React from "react"

const EventsSection = () => {
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
          <div className="row ticket">
            <div className="col">
              <div className="row">
                <a
                  className="col-10 ticket-link"
                  href="05-Events-Single-Events.html"
                >
                  <div className="day">
                    <div className="day_num">
                      <span>19</span>
                      <div>
                        <p>Dec</p>
                        <p>2019</p>
                      </div>
                    </div>
                  </div>
                  <div className="name">
                    <p>
                      <span>Coachella Music Festival</span> //{" "}
                      <span>Warsaw, Poland</span>
                    </p>
                  </div>
                </a>
                <div className="col-2 buy">
                  <a href="#">Buy Ticket</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row ticket">
            <div className="col">
              <div className="row">
                <a
                  className="col-10 ticket-link"
                  href="05-Events-Single-Events.html"
                >
                  <div className="day">
                    <div className="day_num">
                      <span>12</span>
                      <div>
                        <p>Dec</p>
                        <p>2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="name">
                    <p>
                      <span>Wakestock Festival</span> //{" "}
                      <span>Warsaw, Poland</span>
                    </p>
                  </div>
                </a>
                <div className="col-2 buy">
                  <a href="#">Buy Ticket</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row ticket">
            <div className="col">
              <div className="row">
                <a
                  className="col-10 ticket-link"
                  href="05-Events-Single-Events.html"
                >
                  <div className="day">
                    <div className="day_num">
                      <span>12</span>
                      <div>
                        <p>Dec</p>
                        <p>2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="name">
                    <p>
                      <span>Lollapalooza Festival</span> //{" "}
                      <span>Berlin, Germany</span>
                    </p>
                  </div>
                </a>
                <div className="col-2 buy">
                  <a href="#">Buy Ticket</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row ticket">
            <div className="col">
              <div className="row">
                <a
                  className="col-10 ticket-link"
                  href="05-Events-Single-Events.html"
                >
                  <div className="day">
                    <div className="day_num">
                      <span>12</span>
                      <div>
                        <p>Dec</p>
                        <p>2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="name">
                    <p>
                      <span>Wakestock Festival</span> //{" "}
                      <span>Copenhagen, Denmark</span>
                    </p>
                  </div>
                </a>
                <div className="col-2 buy">
                  <a href="#">Buy Ticket</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row ticket">
            <div className="col">
              <div className="row">
                <a
                  className="col-10 ticket-link"
                  href="05-Events-Single-Events.html"
                >
                  <div className="day">
                    <div className="day_num">
                      <span>16</span>
                      <div>
                        <p>Dec</p>
                        <p>2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="name">
                    <p>
                      <span>Crew Stadium</span> // <span>Berlin, Germany</span>
                    </p>
                  </div>
                </a>
                <div className="col-2 buy">
                  <a href="#">Buy Ticket</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row ticket">
            <div className="col">
              <div className="row">
                <a
                  className="col-10 ticket-link"
                  href="05-Events-Single-Events.html"
                >
                  <div className="day">
                    <div className="day_num">
                      <span>16</span>
                      <div>
                        <p>Dec</p>
                        <p>2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="name">
                    <p>
                      <span>Columbianhalle</span> //{" "}
                      <span>Berlin, Germany</span>
                    </p>
                  </div>
                </a>
                <div className="col-2 buy">
                  <p>Sold Out!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ticket">
            <div className="col">
              <div className="row">
                <a
                  className="col-10 ticket-link"
                  href="05-Events-Single-Events.html"
                >
                  <div className="day">
                    <div className="day_num">
                      <span>19</span>
                      <div>
                        <p>Dec</p>
                        <p>2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="name">
                    <p>
                      <span>Torwar</span> // <span>Warsaw, Poland</span>
                    </p>
                  </div>
                </a>
                <div className="col-2 buy">
                  <p>Cancelled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END TOUR SECTION */}
    </section>
  )
}

export default EventsSection
