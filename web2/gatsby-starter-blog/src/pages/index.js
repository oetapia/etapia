import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Intro from "../components/intro-animation"
//import Light from "../components/light"
import Seo from "../components/seo"

import { Container, Row, Col,Card } from "react-bootstrap"



const IndexPage = () => (

  
  <>
  
  <Layout >
      <Seo title="International Marketing" />
      <Intro  text="text-light">
            <Col lg={{span:10,offset:1}} className="text-center">
            <h1 className="display-3"><span className="text-secondary">Product </span> Management</h1>
            <p className="lead mb-1">  
              Making products and brands transcend frontiers. 
            </p>           
            <p>
              Berlin | Madrid | Quito | Seoul 
            </p>

        
            <Link
              to="/experience/"
              className="btn btn-outline-light"
            >
            Products
            </Link>


            <Link
                to="/projects/"
                className="btn btn-link ms-2"
              >
              Brands
              </Link>
            </Col>
      </Intro> 
    
        
    <section className="py-5 bg-1  text-light">
      <Container>
        <Row>
          <Col className="py-5" lg="4" md="6">
          <h2>
            From <span className="text-secondary">concept</span> to <span className="text-tertiary">launch</span>
          </h2>
            <p className="lead">
              Management of physical and digital products
            </p>

            <Link
              to="/experience/"
              className="btn btn-outline-light"
            >
            Products
            </Link>

          </Col>


          <Col lg={{span:5,offset:2}}>
            <ol>
            <li className="mb-3">
              <strong>Market research: </strong>
                  Reports seeking a clear understanding of the user, target market and moment of use to create products that are easily adopted.
              </li>
              <li className="mb-3">
                <strong>Product Design: </strong> An interative process seeking for product market fit by running tests and gauging audience reaction. 

              </li>
              <li className="mb-3">
                <strong>Promotion: </strong>
                Getting the product to the right placement through business development, exports and promotion in international events. 
              </li>
            </ol>
          <StaticImage 
            src="../images/steps.png" 
            alt="Promotion" 
            className="mt-3"
            />
                      
          </Col>

        </Row>
      </Container>
    </section>
    <section className="bg-2 py-5"  >
    <Container>
    <Row className="py-lg-5">
      <Col className="py-5" lg="4" md="6">
      <h2 >
         <span className="text-mid">Brands</span> that <span className="text-mid">resonate</span>
      </h2>
        <p className="lead">
          Redesigning brands to simplify and localize 
        </p>
        
        <Link
          to="/projects/"
          className="btn btn-outline-dark"
        >
        Branding
        </Link>

      </Col>
      
      <Col lg={{span:4,offset:2}} className="py-3">
        <ul>
            <li className="mb-3">
              <strong>Brand design: </strong>
                Core elements to define a brand, including logo, isotype, typography, etc.          
            </li>
            <li className="mb-3">
              <strong>Corporate style: </strong>
              Defining communication in text, visual &#123;photography, illustration, graphic design&#125; video and audio. 
            </li>
            <li className="mb-3">
              <strong>Applications: </strong>
              Merchandise and promotional material, menus, packaging and decoration.
            </li>

        </ul>

        <Card className="shadow">
          <Card.Body>
          <StaticImage 
        src="../images/latamcham/latamcham_9.png" 
        alt="Branding Project" 
        quality="100"
        />

          </Card.Body>
        </Card>
        
      </Col>
      
    </Row>
    </Container>
    </section>
    <section className="text-light">
    
      <Container>
      <Row className="py-5">
          <Col className="py-5" lg="4" md="6">
          <h2><span className="text-tertiary">International</span> Background</h2>
          <p className="lead">
            +15 years of experience over <span className="text-secondary">4 different countries </span> working in B2B and B2C in tech and the food industry.
          </p>
         

          <Link
            to="/contact/"
            className="btn btn-outline-light ms-3"
          >
          Contact me
          </Link>
          
        </Col>

        <Col lg={{span:5,offset:2}}>
          <p>
             Educated in the UK, Spain and with work experience in Europe, LATAM and Asia. 
            </p>  
            <p>
             Horizontal skills focused on product verticals: research,  marketing, graphic design, and web development.  
          </p>
      

        <StaticImage 
          src="../images/map.png" 
          alt="Map" 
          className="mt-3"
          />
                    
        </Col>
      </Row>

      </Container> 
    

   </section>
   
  </Layout>
  </>
)

export default IndexPage
