import React from "react"
import Layout from "../components/layout"
import TopTitle from "../components/TopTitle"
import { graphql, useStaticQuery } from "gatsby"
import data from "../data/data.json"

const albums = props => {
  const { albums } = data
  return (
    <Layout title="Albums">
      <TopTitle title="Albums" />
      <section id="discography">
        <div className="row">
          {albums.map((album, i) => {
            return (
              <div key={i} className="w-100 col-md-4 wow fadeInUp">
                <div className="w-100 discography_banner">
                  <div className="music-banner-image">
                    <img src={album.cover} alt="album art" />
                  </div>
                  <div className="music-banner-text">
                    <h2>{album.releaseDate.split("/")[2]}</h2>
                    <p>Christian &amp; Gospel</p>
                  </div>
                  <a
                    href={`/album/${album.slug}`}
                    className="music-banner-link"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default albums
