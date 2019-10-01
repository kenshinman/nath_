import React from "react"
import BodyClassName from "react-body-classname"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AlbumSection from "../components/home/ALbumSection"
import EventsSection from "../components/home/EventsSection"

const IndexPage = ({ data }) => {
  return (
    <Layout title="Home" type="home">
      <BodyClassName className="home home-demo-2 demo-2-bg">
        <>
          <AlbumSection album={data.allDataJson.nodes[0].albums[0]} />
          <EventsSection />
        </>
      </BodyClassName>
    </Layout>
  )
}

export const query = graphql`
  {
    allDataJson {
      nodes {
        id

        albums {
          id
          cover
          artist
          buy {
            itunes
            amazon
          }
          tracks {
            title
            uri
          }
        }
      }
    }
  }
`

export default IndexPage
