import * as React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import {Container,Row,Col} from "react-bootstrap"

const About = () => (
  <>
  <Layout bg="0">
    
    <Seo title="About" />

    <Intro extra="bg-0"  text="text-light">
      <Row>
        <Col lg="8">
            <h1>About <span className="text-secondary">Esteban</span></h1>
            <p className="lead">
              Product driven by design.

            </p>  
            <p>
              As a product manager I've designed and executed physical and software products in B2B and B2C. 
            </p>
            <p>
              With a deep understanding of customer's needs and market trends, I have set product strategy, and worked collaboratively with business and engineering teams to ensure the successful delivery of the product. 
            </p>

            <p>
              I have accumulated +15 years of experience in different roles in the marketing vertical and worked in over 4 different countries, in B2B and B2C for different industries.
            </p>
            
        </Col>

      </Row>
     
    </Intro>  
    <Container className="text-light">
   

   <Row className="py-lg-5 border-bottom">
    <Col className="py-5 text-end" lg="4" md="6">
        <h2>
              <span className="text-secondary">Marketing</span> Management
          </h2>
        <p className="lead">
          Set up and managed marketing teams.
        </p>
      </Col>
      <Col lg={{span:5,offset:1}} className="text-secondary">
        <p>
            Research, Planning, Strategy, Demand generation, Branding, Positioning, Events, Promotion, MS Office, Google Drive, Database mining, Tableau, ATL and BTL.
          </p>
          <p>
            Digital Marketing: CMS (Django, Odoo, Wordpress), SEO, SEM, SMM, Google Analytics, Mailings, Landing pages, Copywriting and Content Creation.
        </p>

      </Col>
    </Row>

    <Row className="py-lg-5 border-bottom">
    <Col className="py-5 text-end" lg="4" md="6">
      
        <h2>
              <span className="text-tertiary">Product</span> Management
          </h2>
          <p className="lead">
          Designed and launched in various countries.
          </p>
        
      </Col>
      <Col lg={{span:5,offset:1}} className="text-tertiary">
         <p>
            In the food industry: Product design, packaging, legislation requirements, nutritional tables, in store material, promotional material. 
          </p>
          <p>
              In the tech industry: Product concept, prototypes, use cases, personas, roadmap elaboration, project management, product management. 
          </p>

      </Col>
    </Row>


    <Row className="py-lg-5 border-bottom">
    <Col className="py-5 text-end" lg="4" md="6">
      
           <h2>
            Front-end <span className="text-secondary"> Development</span> 
          </h2>
          <p className="lead">
            Web development, UI/UX. 
          </p>
        
      </Col>
      <Col lg={{span:5,offset:1}} className="text-secondary">
     
          <p>
            Development: CSS, HTML, JavaScript, React, Gatsby, PHP, Python, Django, Bootstrap, JAM Stack and LAMP Stack. Data Analytics, Heat Maps, A/B testing.
          </p>

      </Col>
    </Row>

    <Row className="py-lg-5 ">
    <Col className="py-5 text-end" lg="4" md="6">
      
        <h2>
              <span className="text-tertiary">Design</span> and Art Direction
          </h2>
          <p className="lead">
              Educated in Art Direction.
          </p>  
        
      </Col>
      <Col lg={{span:5,offset:1}} className="text-tertiary">
            <p>
              Photography: Digital Photography, Lightning techniques, Adobe Photoshop, Adobe Lightroom, Affinity Photo. 
            </p>
            <p>
              Print: Adobe InDesign, Affinity Publisher, Leaflets, Catalogues, Adobe Illustrator, Logo Design.
            </p>
            <p>
              Media: Video capture, Adobe Premiere, Video Edition.
            </p>

      </Col>
    </Row>

  
   
   </Container>
  </Layout>
  </>
)

export default About
