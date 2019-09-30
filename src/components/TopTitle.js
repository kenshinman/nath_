import React from "react"

const TopTitle = ({ title }) => {
  return (
    <section id="page-title">
      <div className="title-image">
        {/* <!--<h1>beatswave</h1>--> */}
        <img src="/resources/images/nath_transparent.png" alt="Logo 1" />
      </div>
      <div className="global-title wow zoomIn">
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default TopTitle
