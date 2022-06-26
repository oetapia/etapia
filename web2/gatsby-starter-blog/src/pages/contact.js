import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import {Container,Card,Row,Col} from "react-bootstrap"

const Contact = () => (
  <Layout bg="0">
    <Seo title="Contact me" />
    <Intro extra="bg-0" text="text-light">
    <h1><span className="text-secondary">Contact</span> me</h1>
    <p className="lead">Let's connect and discuss how to grow together.</p>
    <p>I'm currently based in Berlin, Germany.</p>
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
              <h3>Linkedin</h3>
            </Card.Title>
          </Card.Header>
          
          <Card.Body>

                <Link target="_blank" to="https://www.linkedin.com/in/estebantapia">estebantapia</Link>
              
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

export default Contact
