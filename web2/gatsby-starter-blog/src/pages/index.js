import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Intro from "../components/intro"
//import Light from "../components/light"
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
     <Container>

     <Row className="my-5">
        <Col className="py-5" lg="4" md="6">
        <h2>About Esteban</h2>
        <p className="lead">
          International background
        </p>
        <p>
          Educated in the UK and Spain and now based in Asia. 
          I have focused on learning wide and varied skills from graphic design, marketing and product management.  
        </p>
        <Link
          to="/about/"
          className="btn btn-primary"
        >
        About E
        </Link>
        
      </Col>


    </Row>
    <Row>
      <Col className="py-5" lg="4" md="6">
      <h2>
        Projects
      </h2>
        <p className="lead">
          Brand design and strategy
        </p>
        <p>
          I have redesigned and created various brands. By working on their core values we put them in a path that allows them and their audience to grow. 
        </p>

        <Link
          to="/projects/"
          className="btn btn-primary"
        >
        Branding
        </Link>

      </Col>
    </Row>
       
    <Row>
      <Col className="py-5" lg="4" md="6">
      <h2>
        Work trajectory
      </h2>
        <p className="lead">
          From concept to launch
        </p>
        <p>
          I've market researched, designed and launched products in the IT and Food industries. I've also exported, promoted in international events and designed brands.
        </p>

        <Link
          to="/projects/"
          className="btn btn-primary"
        >
        Experience
        </Link>

      </Col>
    </Row>

    </Container> 
    

   
   
  </Layout>
  </>
)

export default IndexPage
