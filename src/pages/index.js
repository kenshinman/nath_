import React from "react"
import BodyClassName from "react-body-classname"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AlbumSection from "../components/home/ALbumSection"
import EventsSection from "../components/home/EventsSection"

const IndexPage = ({ data }) => {
  console.log({ data })
  return (
    <Layout title="Home" type="home">
      <BodyClassName className="home home-demo-2 demo-2-bg">
        <>
          <AlbumSection album={data.allDataJson.edges[0].node.albums[0]} />
          <EventsSection />
        </>
      </BodyClassName>
    </Layout>
  )
}

export const query = graphql`
  {
    allDataJson {
      edges {
        node {
          albums {
            id
            title
            tracks {
              title
              uri
            }
          }
        }
      }
    }
  }
`

export default IndexPage
