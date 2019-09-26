import React from "react"

const TopTitle = ({ title }) => {
  return (
    <section id="page-title">
      <div class="title-image">
        {/* <!--<h1>beatswave</h1>--> */}
        <img src="resources/images/nath_transparent.png" alt="Logo 1" />
      </div>
      <div class="global-title wow zoomIn">
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default TopTitle
