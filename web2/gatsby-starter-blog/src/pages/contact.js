import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import {Container,Card,Row,Col} from "react-bootstrap"

const Contact = () => (
  <Layout type="0">
    <Seo title="Contact me" />
    <Intro bg="bg-0" text="text-light">
    <h1><span className="text-secondary">Contact</span> me</h1>
    <p>Let's connect and discuss how to grow together.</p>
    </Intro>
    <Container className="py-5">
    <Row>
      <Col md="6">
          <Card>
          <Card.Header>
            <Card.Title>
              <h3>Find me on</h3>
            </Card.Title>
          </Card.Header>
          
          <Card.Body>
            <ul>
              <li>
                Linkedin: <Link target="_blank" to="https://www.linkedin.com/in/estebantapia">estebantapia</Link>
              </li>
              <li>Twitter: <Link target="_blank" to="https://twitter.com/oetapia">@oetapia</Link></li> 
            <li>email: <a href="mailto:e@estebantapia.com?subject=Web%20Contact">e@estebantapia.com</a></li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    
    </Container>
  </Layout>
)

export default Contact
