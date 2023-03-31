import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import {Container,Row,Col} from "react-bootstrap"

const About = ({ data }) => {

  const imageData = data.placeholderImage.childImageSharp.gatsbyImageData

  return(
  <>
  <Layout>
    
    <Seo title="About" />

    <Intro >
       <Row>
            <Col lg={{span:6}} className="mt-5 p-5" >
            <h1>About Esteban</h1>
            <p className="lead">
              Product driven by design.

            </p>  
            <p>
              Esteban has researched, designed, and launched physical and software products in B2B and B2C. 
            </p>

            
        </Col>

        <Col lg={{offset:1,span:5}} className="px-3">
            <StaticImage 
              src="../images/shush/pitch.png"
              className="img-fluid border-3 shadow" 
              alt="K-Startup Grand Challenge" 
              quality="100"
              />
            
        </Col>

      </Row>
     
    </Intro>  
    <Container >
   
   <Row  className="py-5">

      <Col lg="6 ">

           <p>
              Applying skills from market research and experience overseas to gain a deep understanding of customer's needs and market trends in each industry worked.
            </p>

      
      </Col>
      
    </Row>

    <Row className="py-5">
        <Col lg="6">

            <p>
              Esteban has set strategy, and worked collaboratively with business and engineering teams to ensure the successful delivery of products in Spain, Ecuador, South Korea and Germany. 
            </p>

            
        
        </Col>
    </Row>

    <Row className="py-5">

      <Col lg="6">
        <p>
              Esteban applies hands-on knowledge accumulated over +15 years of experience in different roles in the marketing vertical. Including corporate and startup experience. 
            </p>
      </Col>

    </Row>


    <Row className="py-lg-5 border-top">
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
            In the <em>food industry</em>: Product family design, packaging design, packaging legislation compliance (FDA, locally), nutritional tables, in store material, promotional material. Trade fairs, exports. See <Link to="/experience/cereales">Celifood</Link>
          </p>
          <p>
              In the <em>tech industry</em>: Product concept, prototypes, use cases, personas, roadmap elaboration, project management, product management. 
              See <Link to="/experience/shush">Shush</Link>
          </p>

      </Col>
    </Row>


   <Row className="py-lg-5 border-top">
    <Col className="py-5 text-end" lg="4" md="6">
        <h2>
              <span >Marketing</span> Management
          </h2>
        <p className="lead">
            Educated in Business.
        </p>
      </Col>
      <Col lg={{span:5,offset:1}} >

        <p className="font-italic">
        Graduate Degree in Business Administration
        Madrid, Spain [Universidad Rey Juan Carlos]
        </p>

        <p>
            Demand generation: User interviews, market research, planning, strategy, positioning, branding. Marketing management.
        </p>

        <p>
            Digital Marketing: CMS, SEO, SEM, SMM, Analytics, Mailings, Landing pages, Copywriting and Content Creation. || Django, Odoo, Wordpress, Google Analytics
        </p>

        <p>
            Promotion strategy: sponsorship, exhibitions, trade fairs, advertising, ATL and BTL  || HubspotCRM, MS Office, Google Drive, Database mining, Tableau. 
          </p>
          

      </Col>
    </Row>


    <Row className="py-lg-5 border-top ">
    <Col className="py-5 text-end" lg="4" md="6">
      
        <h2>
              <span >Design</span> and Art Direction
          </h2>
          <p className="lead">
              Educated in Art Direction.
          </p>  
        
      </Col>
      <Col lg={{span:5,offset:1}} >

            <p className="font-italic">
                Art Direction and Graphics Design
                Madrid, Spain, [CICE]
            </p>
        
            <p>
              Photography: Digital Photography, Lightning Techniques || Adobe Photoshop, Adobe Lightroom, Affinity Photo. 
            </p>
            <p>
              Print: Logo Design, Banners, Leaflets, Catalogues || Adobe InDesign, Affinity Publisher, Adobe Illustrator, Affinity Designer.
            </p>
            <p>
              Media: Video Capture, Video Edition || Adobe Premiere, iMovie
            </p>

      </Col>
    </Row>

  


    <Row className="py-lg-5 border-top">
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
            Development: CSS, HTML, JavaScript, React, Gatsby, PHP, Python, Django, Bootstrap, JAM Stack and LAMP Stack. Data Analytics, Heat Maps, A/B testing. || Hotjar, Pendo, Google Analytics, Visual Studio Code, Jira.
          </p>

      </Col>
    </Row>
   
   </Container>
  </Layout>
  </>
)
  }

export default About

// Set image for header background 

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "cherrytree.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

