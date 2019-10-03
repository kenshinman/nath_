import React, { useState } from "react"
import AudioPlayer from "../AudioPlayer"

const AlbumSection = ({ album }) => {
  return (
    <section id="album-release" className="section_2">
      {/* START ALBUM RELEASE SECTION */}
      <div className="section">
        {/* ALBUM RELEASE TITLE */}
        <div className="title">
          <div className="">
            <h1>New Albume Release</h1>
            <p>New Sound</p>
          </div>
        </div>
        {/* ALBUM RELEASE MUSIC */}

        <div className="row j_c">
          <AudioPlayer album={album} />
        </div>
      </div>
    </section>
  )
}

export default AlbumSection
