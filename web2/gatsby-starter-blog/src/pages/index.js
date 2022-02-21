import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Intro from "../components/intro"
//import Light from "../components/light"
import Seo from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"

const IndexPage = () => (

  
  <>
  
  <Layout>
      <Seo title="International Marketing" />
      <Intro bg="bg-dark" text="text-light">
            <h1 className="display-1">Product and Brand</h1>
            <p className="lead">
              I help products to <span className="bright">shine brighter</span>. 
            </p>
            <p>
              Mixing product management, strategic marketing and tech to create cohesive brands.  
            </p>
      </Intro> 
    
    <Container>
    <Row className="py-lg-5">
      <Col className="py-5" lg="4" md="6">
      <h2 className="display-4">
        Projects
      </h2>
        <p className="lead">
          Brand design and strategy
        </p>
        <p>
          I have redesigned and created various brands. By working on their core values we've put them in a path that allows them, and their audience to grow. 
        </p>

        <Link
          to="/projects/"
          className="btn btn-primary"
        >
        Branding
        </Link>

      </Col>
      
      <Col lg={{span:4,offset:1}} className="py-3">
        <StaticImage 
        src="../images/latamcham/latamcham-construction.png" 
        alt="Branding Project" 
        className="mt-5"
        quality="100"
        />

      </Col>
      
    </Row>
    </Container>

    
    <section className="bg-dark text-light">
      <Container>
        <Row>
          <Col className="py-5" lg="4" md="6">
          <h2>
            Career
          </h2>
            <p className="lead">
              From concept to launch
            </p>
            <p>
              I've market researched, designed and launched products in the tech and Food industries. I've also exported and promoted them in international events. 
            </p>
            

            <Link
              to="/experience/"
              className="btn btn-secondary"
            >
            Experience
            </Link>

          </Col>


          <Col lg={{span:5,offset:1}}>

          <StaticImage 
            src="../images/steps.png" 
            alt="Promotion" 
            className="mt-5"
            />
                      
          </Col>

        </Row>
      </Container>
    </section>

    
    
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
          className="btn btn-link"
        >
        About me
        </Link>

        <Link
          to="/contact/"
          className="btn btn-primary ms-3"
        >
        Contact me
        </Link>
        
      </Col>


    </Row>

    </Container> 
    

   
   
  </Layout>
  </>
)

export default IndexPage
