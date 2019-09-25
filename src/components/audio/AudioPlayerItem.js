import React from "react"

const AudioPlayerItem = ({ track, index }) => {
  return (
    <li className="shadow py-2 px-4 rounded-right rounded-left mb-3">
      <span className="ml-3">
        <strong>Track # {index + 1}</strong> -{track.title}
      </span>
      <audio style={{ width: "95%" }} controls className="audio1">
        <source src={track.uri} type="audio/mpeg" />
      </audio>
    </li>
  )
}

export default AudioPlayerItem
