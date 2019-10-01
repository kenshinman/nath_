import React, { useEffect, useState } from "react"
import Amplitude from "amplitudejs"

/**
{
    name: "Risin' High (feat Raashan Ahmad)",
    artist: "Ancient Astronauts",
    album: "We Are to Answer",
    url:
      "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
    cover_art_url:
      "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
  }, 

 */
const AudioPlayer = ({ album }) => {
  //states
  const songs = album.tracks.map(song => {
    return {
      name: song.title,
      artist: album.artist,
      album: album.title,
      url: song.uri,
      cover_art_url: album.cover,
    }
  })

  useEffect(() => {
    Amplitude.init({
      songs,
      autoplay: true,
      callbacks: {
        play: function() {
          document.getElementById("album-art").style.visibility = "hidden"
          document.getElementById("large-visualization").style.visibility =
            "visible"
        },

        pause: function() {
          document.getElementById("album-art").style.visibility = "visible"
          document.getElementById("large-visualization").style.visibility =
            "hidden"
        },
      },
      waveforms: {
        sample_rate: 50,
      },
    })
  }, [])
  return (
    <div id="blue-playlist-container" style={{ width: "100%" }}>
      {/* Amplitude Player */}
      <div id="amplitude-player">
        {/* Left Side Player */}
        <div id="amplitude-left">
          <img data-amplitude-song-info="cover_art_url" className="album-art" />
          <div
            className="amplitude-visualization"
            id="large-visualization"
          ></div>
          <div id="player-left-bottom">
            <div id="time-container">
              <span className="current-time">
                <span className="amplitude-current-minutes" />:
                <span className="amplitude-current-seconds" />
              </span>
              <div id="progress-container">
                <div className="amplitude-wave-form"></div>
                <input type="range" className="amplitude-song-slider" />
                <progress
                  id="song-played-progress"
                  className="amplitude-song-played-progress"
                />
                <progress
                  id="song-buffered-progress"
                  className="amplitude-buffered-progress"
                  value={0}
                />
              </div>
              <span className="duration">
                <span className="amplitude-duration-minutes" />:
                <span className="amplitude-duration-seconds" />
              </span>
            </div>
            <div id="control-container">
              <div id="repeat-container">
                <div className="amplitude-repeat" id="repeat" />
                <div
                  className="amplitude-shuffle amplitude-shuffle-off"
                  id="shuffle"
                />
              </div>
              <div id="central-control-container">
                <div id="central-controls">
                  <div className="amplitude-prev" id="previous" />
                  <div className="amplitude-play-pause" id="play-pause" />
                  <div className="amplitude-next" id="next" />
                </div>
              </div>
              <div id="volume-container">
                <div className="volume-controls">
                  <div className="amplitude-mute amplitude-not-muted" />
                  <input type="range" className="amplitude-volume-slider" />
                  <div className="ms-range-fix" />
                </div>
                <div
                  className="amplitude-shuffle amplitude-shuffle-off"
                  id="shuffle-right"
                />
              </div>
            </div>
            <div id="meta-container">
              <span data-amplitude-song-info="name" className="song-name" />
              <div className="song-artist-album">
                <span data-amplitude-song-info="artist" />
                <span data-amplitude-song-info="album" />
              </div>
            </div>
          </div>
        </div>
        {/* End Left Side Player */}
        {/* Right Side Player */}
        <div id="amplitude-right">
          {/* songs item */}
          {songs.map((song, i) => {
            console.log(song)
            return (
              <div
                className="song amplitude-song-container amplitude-play-pause"
                data-amplitude-song-index={i}
                key={i}
              >
                <div className="song-now-playing-icon-container">
                  <div className="play-button-container"></div>
                  <img
                    className="now-playing"
                    src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"
                  />
                </div>
                <div className="song-meta-data">
                  <span className="song-title">{song.name}</span>
                  <span className="song-artist">{song.artist}</span>
                </div>

                <span className="song-duration">3:30</span>
              </div>
            )
          })}
        </div>
        {/* End Right Side Player */}
      </div>
      {/* End Amplitdue Player */}
      {/* <a
        style={{
          background: "#00a0ff",
          WebkitBoxShadow: "0 1px 0 0 #003da5",
          boxShadow: "0 1px 0 0 #003da5",
          borderRadius: "4px",
          display: "block",
          width: "300px",
          textAlign: "center",
          height: "60px",
          lineHeight: "60px",
          color: "#fff",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: 700,
          margin: "auto",
          marginBottom: "20px",
          textDecoration: "none",
        }}
        href="https://serversideup.net/courses/amplitudejs-from-the-ground-up/"
        target="_blank"
      >
        Learn More on Server Side Up
      </a> */}
      <div
        class="cta mx-auto container justify-content-center align-items-center"
        style={{ display: "flex" }}
      >
        {Object.keys(album.buy).map(store => {
          return (
            <a
              key={store}
              target="_blank"
              className="ml-2"
              href={album.buy[store]}
            >
              buy on {store}
              <i class="fa fa-apple" aria-hidden="true"></i>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default AudioPlayer
