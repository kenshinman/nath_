import React, { useState } from "react"
import AudioPlayerItem from "../audio/AudioPlayerItem"

const AlbumSection = ({ album }) => {
  const tracks = [
    {
      title: "God is Good",
      uri: "/resources/sounds/Bruno_Mars-That_s_What_I_Like.mp3",
    },
    {
      title: "This God is too Good",
      uri: "/resources/sounds/Bruno_Mars-That_s_What_I_Like.mp3",
    },
    {
      title: "My God is always Good",
      uri: "/resources/sounds/Bruno_Mars-That_s_What_I_Like.mp3",
    },
  ]

  return (
    <section id="album-release" className="section_2">
      {/* START ALBUM RELEASE SECTION */}
      <div className="section">
        {/* ALBUM RELEASE TITLE */}
        <div className="title">
          <div className="">
            <h1>New Albume Release</h1>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
        {/* ALBUM RELEASE MUSIC */}
        <div class="row j_c">
          <div class="col cd_block wow fadeInLeftBig">
            <div class="disc_cover">
              <img
                class="disc"
                src="/resources/images/jesus-resurrection-and-life.jpg"
              />
              <img
                class="cd"
                src="/resources/images/jesus-resurrection-and-life-round.png"
              />
            </div>
          </div>
          <div class="col music wow fadeInRightBig">
            {album.tracks.splice(0, 3).map((track, i) => {
              return (
                <div key={i} class={`mp3 mp3_${i + 1}`}>
                  <span>
                    {i + 1}. {track.title}
                  </span>
                  <audio controls class="audio1">
                    <source src={track.uri} type="audio/mpeg" />
                  </audio>
                </div>
              )
            })}

            <div class="cta">
              <a
                target="_blank"
                href="https://music.apple.com/us/album/jesus-the-resurrection-the-life/1445489440"
              >
                buy album<i class="fa fa-apple" aria-hidden="true"></i>
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
