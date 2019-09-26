import React from "react"
import BodyClassName from "react-body-classname"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AlbumSection from "../components/home/ALbumSection"
import EventsSection from "../components/home/EventsSection"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout title="Home" type="home">
      <BodyClassName className="home home-demo-2 demo-2-bg">
        <>
          <AlbumSection />
          <EventsSection />
        </>
      </BodyClassName>
    </Layout>
  )
}

export const query = graphql`
  {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                base64
                width
                height
                src
                srcSet
              }
            }
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`

export default IndexPage
