import React from "react"
import { Link } from "gatsby"
import BodyClassName from "react-body-classname"

import Layout from "../components/HomeLayout"
import Image from "../components/image"
import SEO from "../components/seo"
import AlbumSection from "../components/home/ALbumSection"
import EventsSection from "../components/home/EventsSection"

const IndexPage = () => (
  <Layout>
    <BodyClassName className="home home-demo-2 demo-2-bg">
      <>
        <AlbumSection />
        <EventsSection />
      </>
    </BodyClassName>
  </Layout>
)

export default IndexPage
