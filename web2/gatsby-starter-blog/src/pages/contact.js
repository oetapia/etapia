import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import {Container,Card,Row,Col} from "react-bootstrap"


const Contact = ({ data }) => {
  const imageData = data.placeholderImage.childImageSharp.gatsbyImageData

  return (
  <Layout >
    <Seo title="Contact me" />
    <Intro img={imageData} >
    <Row>
      <Col lg={{span:6}} className="mt-5 p-5" >
        <h1>Contact me</h1>
        <p className="lead">Connect with me to discuss how to <em>grow together</em>.</p>
        <p>I'm currently based in Berlin, Germany.</p>
      </Col>
    </Row>
    </Intro>
    <Container className="py-5 animate">
    <Row >
      <Col md="4">
          <Card className="mb-5">
          <Card.Header>
            <Card.Title>

            <div className="number  bg-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>

           </div> 
              <h3>Email</h3>
            </Card.Title>
          </Card.Header>
          
          <Card.Body>
          
           <a className="stretched-link" href="mailto:e@estebantapia.com?subject=Web%20Contact">e@estebantapia.com</a>
          </Card.Body>
        </Card>
      </Col>
      <Col md="4">
          <Card className="mb-5">
          <Card.Header>
            <Card.Title>

              <div className="number bg-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
  <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
              </div>

              <h3>Calendly</h3>
            </Card.Title>
          </Card.Header>
          
          <Card.Body>
        
                <Link className="stretched-link"  target="_blank" to="https://calendly.com/oetapia">Book a meeting</Link>
              
          </Card.Body>
        </Card>
      </Col>
      <Col md="4">
          <Card className="mb-5">
          <Card.Header>
            <Card.Title>
            <div className="number  bg-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
            </div>
              <h3>Twitter</h3>
            </Card.Title>
          </Card.Header>
          
          <Card.Body>
        
              <Link className="stretched-link"  target="_blank" to="https://twitter.com/oetapia">@oetapia</Link>
          </Card.Body>
        </Card>
      </Col>

    </Row>
    
    </Container>
  </Layout>
)
}

export default Contact

// Set image for header background 

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "93077.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`