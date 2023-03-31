/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useEffect } from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import Intro from "./intro"
//import "./layout.css"
import "./dist/css/bootstrap.min.css"
import "./etapia.css"
//import "./etapia.css.map"
import { StaticImage } from "gatsby-plugin-image"

import { Container, Row, Col } from "react-bootstrap"


const Layout = ({ children, bg, variant }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  

  useEffect(() => {
    
      function checkScroll()  {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("scroll").classList.add("shadow");
          document.getElementById("scroll").classList.add("bg-3");
          //console.log('<50');
          } else {
             document.getElementById("scroll").classList.remove("shadow");
             document.getElementById("scroll").classList.remove("bg-3");
          }
        }

        document.addEventListener('scroll', _ => 
        checkScroll()
        );    

  },[])

  
  

  
  return (
    <>
    
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} bg={bg} variant={variant} />
        
        <main>{children}</main>
        <footer 
        className="border-top py-5"
        >
        <Container>  
        <Row>
          <Col>
            <p className="small">
              {data.site.siteMetadata?.title}  © {new Date().getFullYear()}
            </p>  
          </Col>
          <Col className="text-end small">
            <a
              href="https://www.linkedin.com/in/estebantapia"
              activeClassName="active"
              className="btn-outline-secondary btn"
              target="_blank"
              rel="noreferrer"
            >
              Let's connect  <StaticImage 
          src="../images/linkedin.png" 
          alt="Linkedin Logo" 
          quality="100" 
          height="24"
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
