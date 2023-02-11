import * as React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import {Container,Row,Col} from "react-bootstrap"

const About = () => (
  <>
  <Layout >
    
    <Seo title="About" />

    <Intro >
      <Row>
        <Col lg="6">
            <h1>About Esteban</h1>
            <p className="lead">
              Product driven by design.

            </p>  
            <p>
              Esteban has researched, designed, and launched physical and software products in B2B and B2C. 
            </p>

            <p>
              Applying skills from market research and experience overseas to gain a deep understanding of customer's needs and market trends in each industry worked.
            </p>

            <p>
              Esteban has set strategy, and worked collaboratively with business and engineering teams to ensure the successful delivery of  products. 
            </p>

            <p>
              Esteban applies hands-on knowledge accumulated over +15 years of experience in different roles in the marketing vertical.
            </p>
            
        </Col>

      </Row>
     
    </Intro>  
    <Container >
   

   <Row className="py-lg-5 border-bottom">
    <Col className="py-5 text-end" lg="4" md="6">
        <h2>
              <span >Marketing</span> Management
          </h2>
        <p className="lead">
          Set up and managed marketing teams.
        </p>
      </Col>
      <Col lg={{span:5,offset:1}} >
        <p>
            User interviews, market research, planning, strategy, demand generation, branding, positioning. | Promotion strategy: sponsorship, exhibitions, trade fairs, advertising, ATL and BTL  | HubspotCRM, InsightlyCRM, SynergyCRM, MS Office, Google Drive, Database mining, Tableau. 
          </p>
          <p>
            Digital Marketing: CMS (Django, Odoo, Wordpress), SEO, SEM, SMM, Google Analytics, Mailings, Landing pages, Copywriting and Content Creation.
        </p>

      </Col>
    </Row>

    <Row className="py-lg-5 border-bottom">
    <Col className="py-5 text-end" lg="4" md="6">
      
        <h2>
              <span >Product</span> Management
          </h2>
          <p className="lead">
          Designed and launched in various countries.
          </p>
        
      </Col>
      <Col lg={{span:5,offset:1}} >
         <p>
            In the food industry: Product family design, packaging design, packaging legislation compliance (FDA, locally), nutritional tables, in store material, promotional material. Trade fairs, exports. 
          </p>
          <p>
              In the tech industry: Product concept, prototypes, use cases, personas, roadmap elaboration, project management, product management. 
          </p>

      </Col>
    </Row>


    <Row className="py-lg-5 border-bottom">
    <Col className="py-5 text-end" lg="4" md="6">
      
           <h2>
            Front-end <span > Development</span> 
          </h2>
          <p className="lead">
            Web development, UI/UX. 
          </p>
        
      </Col>
      <Col lg={{span:5,offset:1}} >
     
          <p>
            Development: CSS, HTML, JavaScript, React, Gatsby, PHP, Python, Django, Bootstrap, JAM Stack and LAMP Stack. Data Analytics, Heat Maps, A/B testing. Hotjar, Pendo, Google Analytics.
          </p>

      </Col>
    </Row>

    <Row className="py-lg-5 ">
    <Col className="py-5 text-end" lg="4" md="6">
      
        <h2>
              <span >Design</span> and Art Direction
          </h2>
          <p className="lead">
              Educated in Art Direction.
          </p>  
        
      </Col>
      <Col lg={{span:5,offset:1}} >
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
