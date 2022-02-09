import * as React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {Row,Col} from "react-bootstrap"

const About = () => (
  <>
  <Layout>
    <Seo title="About" />
    <Row>
    <Col className="mb-5">
      <h1>About Me</h1>
      <p className="lead">
        Curiosity driven. Objective focused. Wide expertise. 
      </p>  
    </Col>
    
    </Row>
     <Row>
     <Col md={{span:5,offset:1}}>
      <h3>
        Marketing
      </h3>
      <p className="lead">
        Managed marketing teams.
      </p>
      <p className="small">
        Research, Planning, Strategy, Demand generation, Branding, Positioning, Events, Promotion, MS Office, Google Drive, Database mining, Tableau, ATL and BTL.
      </p>
      <p>
        Digital Marketing: CMS (Django, Odoo, Wordpress), SEO, SEM, SMM, Google Analytics, Mailings, Landing pages, Copywriting and Content Creation
    </p>
     </Col>
     <Col md={{span:5,offset:1}} className="my-5">
     <h3>Product</h3>
     <p className="lead">
     Designed and launched in various countries.
     </p>
     <p>
       In Food: Product design, packaging, legislation requirements, nutritional tables, in store material, promotional material. 
     </p>
     <p>
        In IT: Product concept, prototypes, use cases, personas, roadmap elaboration, project management, product management. 
     </p>

     </Col>
   </Row>

   <Row>
     <Col md={{span:5,offset:1}} >
     <h3>
        Tech
    </h3>
    <p className="lead">
      Web development, UI/UX. 
    </p>
    <p>
     Development: CSS, HTML, JS, React, Gatsby PHP, Python, Django, Bootstrap, JAM Stack and LAMP Stack. Data Analytics, Heat Maps, A/B testing
    </p>
    
    
     </Col>
     <Col md={{span:5,offset:1}} className="my-5">
     <h3>
     Design
     </h3>
    <p className="lead">
      Educated in Art Direction.
    </p>    
    <p className="small">
      Photography: Digital Photography, Lightning techniques, Adobe Photoshop, Adobe Lightroom, Affinity Photo. 
    </p>
    <p>
      Print: Adobe InDesign, Affinity Publisher, Leaflets, Catalogues, Adobe Illustrator, Logo Design
    </p>
    <p>
      Media: Video capture, Adobe Premiere, Video Edition
    </p>
    
</Col>
   </Row>

   
  </Layout>
  </>
)

export default About