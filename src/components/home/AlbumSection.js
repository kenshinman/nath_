import React, { useState } from "react"
import AudioPlayerItem from "../audio/AudioPlayerItem"

const AlbumSection = () => {
  const tracks = [
    {
      title: "God is Good",
      uri: "resources/sounds/Bruno_Mars-That_s_What_I_Like.mp3",
    },
    {
      title: "This God is too Good",
      uri: "resources/sounds/Bruno_Mars-That_s_What_I_Like.mp3",
    },
    {
      title: "My God is always Good",
      uri: "resources/sounds/Bruno_Mars-That_s_What_I_Like.mp3",
    },
  ]

  return (
    <section id="album-release" className="section_2">
      {/* START ALBUM RELEASE SECTION */}
      <div className="section">
        {/* ALBUM RELEASE TITLE */}
        <div className="title">
          <div className>
            <h1>New Albume Release</h1>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
        {/* ALBUM RELEASE MUSIC */}
        <div className="row j_c">
          <div className="col-md-6 cd_block wow fadeInLeftBig">
            <div className="disc_cover">
              <img
                className="disc shadow"
                src="resources/images/jesus-resurrection-and-life.jpg"
              />
              <img
                className="cd"
                src="resources/images/jesus-resurrection-and-life-round.png"
              />
            </div>
          </div>
          <div className="col-md-6 music wow fadeInRightBig">
            <ul>
              {tracks.map((track, i) => {
                return <AudioPlayerItem track={track} key={i} index={i} />
              })}
            </ul>
            <div className="cta">
              <a href="#">
                buy album
                <i className="fa fa-apple" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="sec_2_content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto .
          </p>
        </div>
      </div>
    </section>
  )
}

export default AlbumSection
