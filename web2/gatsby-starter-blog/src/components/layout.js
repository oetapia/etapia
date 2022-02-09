/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import Intro from "./intro"
//import "./layout.css"
import "./dist/css/bootstrap.min.css"
import "./etapia.css"

import { Container } from "react-bootstrap"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
 
      
      <Container className="mt-5">
        <main>{children}</main>
        <footer 
        className="border-top py-3"
        >
        <p className="small text-muted">
          {data.site.siteMetadata?.title}  © {new Date().getFullYear()}
        </p>  
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
