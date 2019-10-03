import React from "react"
import Layout from "../components/layout"
import TopTitle from "../components/TopTitle"
import AudioPlayer from "../components/AudioPlayer"

const AlbumPage = ({ pageContext }) => {
  return (
    <Layout title={`${pageContext.title}`}>
      <TopTitle title={pageContext.title} />
      <div className="container">
        <div className="row">
          <div className="col">
            <AudioPlayer album={pageContext} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AlbumPage
