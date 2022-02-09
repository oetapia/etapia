import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Intro from "../components/intro"
import Seo from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"

const IndexPage = () => (

  <>
  
     

  

  <Layout>
      <Seo title="International Marketing" />
      <Intro>
            <h1>Product and Brand</h1>
            <p className="lead">
              Helping you to shine brighter.
            </p>
            <p>
              Mixing product management, strategic marketing and tech to create cohesive brands.  
            </p>
      </Intro> 
      
    <Row className="my-5">
      <Col>
        <h2>About Esteban</h2>
        <p className="lead">
          International background
        </p>
        <p>
          Educated in the UK and Spain. I have focused on learning wide and varied skills from graphic design, marketing and product management.  
        </p>
        <Link
          to="/about/"
        >
        </Link>
      </Col>
    </Row>
    <Row>
      <Col>
      <h2>
        Experience
      </h2>
        <p className="lead">
          From concept to launch
        </p>
        <p>
          I've market researched, designed and launched products in the IT and Food industries. I've also exported, promoted in international events and designed brands.
        </p>

      </Col>
    </Row>

   
   
  </Layout>
  </>
)

export default IndexPage
