import * as React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {Row,Col} from "react-bootstrap"

const About = () => (
  <Layout>
    <Seo title="About" />
    <h1>About Me</h1>
    <p className="lead">
      Curiosity driven. I've switched jobs and responsabilities to force constant learning, taking me into wide areas all related to product and marketing. 
    </p>


   <Row>
     <Col>
    <h3>
     Marketing
    </h3>
      <p className="lead">
        Managed marketing teams.
      </p>
      <p className="small">
        Research, Planning, Strategy
Demand generation
Branding, Positioning
Events, Promotion
MS Office, Google Drive
Database mining and analytics
Online Marketing SEO/SEM/SMM
Data Analytics, Heat Maps, A/B testing
ATL and BTL
      </p>
     </Col>
     <Col>
     <h3>Product</h3>
     <p className="lead">
     Designed and launched in various countries
     </p>
     <p>
       In Food: Product design, packaging, legislation requirements, nutritional tables, in store material, promotional material. 
     </p>
     <p>
        In IT: Product concept, prototypes, user profiles, roadmap elaboration, project management, product management. 
     </p>
     </Col>
   </Row>

   <Row>
     <Col>
     <h3>
        Tech
    </h3>
    <p className="lead">
      Front-end development, UI/UX and AI. 
    </p>
    <p className="small">
     CSS, HTML, PHP, Python
    Bootstrap, Pure and other CSS frameworks
    Django, Odoo, Wordpress
    SEO, SEM, SMM, Analytics
    Use cases, wireframing, prototyping
    Mailings, Landing pages
    Copywriting and Content Creation
    </p>
    
     </Col>
     <Col>
     <h3>
     Design
     </h3>
    <p className="lead">
      Educated in Madrid in Art Direction.
    </p>    
    <p className="small">
      Photography: Digital Photography, Lightning techniques, Adobe Photoshop, Adobe Lightroom
  Print: Adobe InDesign, Leaflets, Catalogues, Adobe Illustrator, Logo Design
  Media: Video capture, Adobe Premiere, Video Edition
    </p>
    
</Col>
   </Row>

   
  </Layout>
)

export default About
