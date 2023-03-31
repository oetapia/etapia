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
    <Intro >
    <Row>
      <Col lg={{span:6}} className="mt-5 p-5" >
        <h1>Contact me</h1>
        <p className="lead">Let's connect and discuss how to grow together.</p>
        <p>I'm currently based in Berlin, Germany.</p>
      </Col>
    </Row>
    </Intro>
    <Container className="py-5">
    <Row>
      <Col md="4">
          <Card className="mb-5">
          <Card.Header>
            <Card.Title>
              <h3>Email</h3>
            </Card.Title>
          </Card.Header>
          
          <Card.Body>
          
           <a href="mailto:e@estebantapia.com?subject=Web%20Contact">e@estebantapia.com</a>
          </Card.Body>
        </Card>
      </Col>
      <Col md="4">
          <Card className="mb-5">
          <Card.Header>
            <Card.Title>
              <h3>Calendly</h3>
            </Card.Title>
          </Card.Header>
          
          <Card.Body>

                <Link target="_blank" to="https://calendly.com/oetapia">Book a meeting</Link>
              
          </Card.Body>
        </Card>
      </Col>
      <Col md="4">
          <Card className="mb-5">
          <Card.Header>
            <Card.Title>
              <h3>Twitter</h3>
            </Card.Title>
          </Card.Header>
          
          <Card.Body>
        
              <Link target="_blank" to="https://twitter.com/oetapia">@oetapia</Link>
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
    placeholderImage: file(relativePath: { eq: "building.jpg" }) {
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