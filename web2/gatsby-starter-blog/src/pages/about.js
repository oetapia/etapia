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

    <Intro text="text-light" img={imageData}>
       <Row>
            <Col lg={{span:6}} className="mt-5 p-5" >
            <h1>About Esteban</h1>
            <p className="lead text-muted">
              Product driven by marketing and design.

            </p>  
            <p>
              Esteban has researched, designed, and launched physical and software products in B2B and B2C. 
            </p>

            
            <p>
              By applying skills from market research and experience in multiple markets to gain a deep understanding of customer's needs and market trends in each industry worked.
            </p>

        </Col>

        <Col lg={{offset:1,span:5}} className="px-3">
            <StaticImage 
              src="../images/shush/pitch.png"
              className="img-fluid img-thumbnail border-3 shadow" 
              alt="K-Startup Grand Challenge" 
              quality="90"
              />
            
        </Col>

      </Row>
     
    </Intro>  
    <Container >
   


    <Row >

        <Col className="p-5" lg={{span:4}}>
          <StaticImage 
                src="../images/circles.svg"
                className="img-fluid" 
                alt="Marketing, design and tech" 
                quality="100"
                />
          </Col>
        <Col lg={{offset:1, span:6}} className="py-5">

            <p>
              Esteban has set strategy, and worked collaboratively with business and engineering teams to ensure the successful delivery of products in Spain, Ecuador, South Korea and Germany. 
            </p>

            <p>
              Esteban applies hands-on knowledge accumulated over +15 years of experience in different roles in the marketing vertical. Including corporate and startup experience. 
            </p>
        
        </Col>
    </Row>

  


    <Row className="py-lg-5 border-top">
    <Col className="py-5 text-end" lg="4" md="6">
      
        <h2>
              <span>Product</span> Management
          </h2>
          <p className="lead text-muted">
          Designed and launched in various countries.
          </p>
        
      </Col>
      <Col lg={{span:5,offset:1}} >
    
          <p>
              In the <em>tech industry</em> : 
          </p>    
          <ul>
            <li className="mb-3"><span className="badge bg-2">B2B</span>  Agile development: <br /> <small>User interviews, eliciting requirements, personas, use cases, roadmap elaboration, product concept, prototypes, backlog management, kanban and scrum. | Trello, Confluence, Jira.
              See <Link to="/experience/shush">Shush</Link> and <Link to="/experience/pendulum">pendulum.health</Link>
              </small>
            </li>
            <li>
                Front-end development: <br />
                <small>
                 CSS, HTML, JavaScript. Gatsby, ReactJS (ES6 JS), Wordpress (PHP), Python (Django, Wagtail), Bootstrap. | Visual Studio, Git, Hotjar, Pendo, Google Analytics.
                 See <Link to="/projects/werkit">Werkit</Link>
                </small> 
            </li>
          </ul>
          
          <p>
            In the <em>exports industry</em> 
          </p>
          <ul>
            <li><span className="badge bg-2">B2C</span> Product design and launch: 
              <br />
              <small>
              Research, strategy, packaging, legislation compliance (local and FDA), demand generation, promotional material, events, trade fairs, exports. <br />See <Link to="/experience/cereales">Celifood</Link>
              </small> 
            </li>
          </ul>

      </Col>
    </Row>


   <Row className="py-lg-5 border-top">
    <Col className="py-5 text-end" lg="4" md="6">
        <h2>
              <span >Marketing</span> Management
          </h2>
        <p className="lead text-muted">
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
            Traditional marketing: promotion strategy, sponsorship, exhibitions, trade fairs, advertising, ATL and BTL  || HubspotCRM, MS Office, Google Drive, Database mining, Tableau. 
          </p>
          

      </Col>
    </Row>


    <Row className="py-lg-5 border-top ">
    <Col className="py-5 text-end" lg="4" md="6">
      
        <h2>
              <span >Design</span> and Art Direction
          </h2>
          <p className="lead text-muted">
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


   
   </Container>
  </Layout>
  </>
)
  }

export default About

// Set image for header background 

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "93079.png" }) {
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

