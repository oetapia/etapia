/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useEffect } from "react"
import PropTypes from "prop-types"
import {Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import Intro from "./intro"
//import "./layout.css"
import "./dist/css/bootstrap.min.css"
import "./etapia.css"
//import "./etapia.css.map"
import { StaticImage } from "gatsby-plugin-image"

import { Container, Row, Col } from "react-bootstrap"


const Layout = ({ children, type }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  /*

  useEffect(() => {
    if (!type) {
      function checkScroll()  {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("scroll").classList.add("bg-dark");
          console.log('<50');
          } else {
             document.getElementById("scroll").classList.remove("bg-dark");
          }
        }

        document.addEventListener('scroll', _ => 
        checkScroll()
        );    
      }
  },[])

  */
  

  
  return (
    <>
    
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} type="dark" />
        
        <main>{children}</main>
        <footer 
        className="border-top py-3"
        >
        <Container>  
        <Row>
          <Col>
            <p className="small text-muted">
              {data.site.siteMetadata?.title}  © {new Date().getFullYear()}
            </p>  
          </Col>
          <Col className="text-end small">
            <a
              to="https://www.linkedin.com/in/estebantapia"
              activeClassName="active"
              className="nav-link p-0"
            >
              Let's connect  <StaticImage 
          src="../images/linkedin.png" 
          alt="Linkedin Logo" 
          quality="100" 
          height="16"
          />
            </a>
          </Col>
        </Row>        
      </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
