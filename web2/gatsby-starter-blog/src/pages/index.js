import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Intro from "../components/intro"
//import Light from "../components/light"
import Seo from "../components/seo"

import { Container, Row, Col,Card } from "react-bootstrap"



const IndexPage = () => (

  
  <>
  
  <Layout type="1">
      <Seo title="International Marketing" />
      <Intro bg="bg-1" text="text-light">
            <Col lg="6">
            <h1 className="display-3"><span className="highlight">Product</span> &amp; <span className="highlight">Brand</span> Management</h1>
            <p className="lead">  
            I help companies to  develop and market products for international audiences.
            </p>           
            </Col>
      </Intro> 
    
        
    <section className="py-5 text-light">
      <Container>
        <Row>
          <Col className="py-5" lg="4" md="6">
          <h2>
            From <span className="highlight">concept</span> to launch
          </h2>
            <p className="lead">
              Management of physical and digital products
            </p>
            <p>
              Market research as foundation for product design. Iterative product design in tech and food. THen launches through business development, exports and promotion in international events. 
            </p>
            

            <Link
              to="/experience/"
              className="btn btn-outline-light"
            >
            Experience
            </Link>

          </Col>


          <Col lg={{span:5,offset:2}}>

          <StaticImage 
            src="../images/steps.png" 
            alt="Promotion" 
            className="mt-5"
            />
                      
          </Col>

        </Row>
      </Container>
    </section>
    <section className="py-5 bg-1 text-light"  >
    <Container>
    <Row className="py-lg-5">
      <Col className="py-5" lg="4" md="6">
      <h2>
        Branding projects
      </h2>
        <p className="lead">
          Designs that resonates with their audience.
        </p>
        <p>
         By working on core values to ease communication and audience growth.
        </p>

        <Link
          to="/projects/"
          className="btn btn-outline-light"
        >
        Branding
        </Link>

      </Col>
      
      <Col lg={{span:4,offset:2}} className="py-3">
        <Card>
          <Card.Body>
          <StaticImage 
        src="../images/latamcham/latamcham-construction.png" 
        alt="Branding Project" 
        className="mt-5"
        quality="100"
        />

          </Card.Body>
        </Card>
        
      </Col>
      
    </Row>
    </Container>
    </section>
    <section className="bg-2">
    
      <Container>
      <Row className="py-5">
          <Col className="py-5" lg="4" md="6">
          <h2>International Background</h2>
          <p className="lead">
            +15 years of experience over 5 different countries working in B2B and B2C in tech and the food industry.
          </p>
          <p>
             Educated in the UK, Spain and work experience in Europe, LATAM and Asia. 
            </p>  
            <p>
             Horizontal skills focused on product design: business, graphic design, marketing and management.  
          </p>
          <Link
            to="/about/"
            className="btn btn-link"
          >
          About me
          </Link>

          <Link
            to="/contact/"
            className="btn btn-outline-dark ms-3"
          >
          Contact me
          </Link>
          
        </Col>


      </Row>

      </Container> 
    

   </section>
   
  </Layout>
  </>
)

export default IndexPage
