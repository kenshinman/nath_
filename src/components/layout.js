import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import SEO from "./seo"
import GeneralHeader from "./GeneralHeader"
// import "./layout.css"

const Layout = ({ children, title, type }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery1 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title={title} />
      {type === "home" ? (
        <Header siteTitle={data.site.siteMetadata.title} />
      ) : (
        <GeneralHeader siteTitle={data.site.siteMetadata.title} />
      )}
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
