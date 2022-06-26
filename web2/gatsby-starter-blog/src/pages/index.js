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
  
  <Layout >
      <Seo title="International Marketing" />
      <Intro  text="text-light">
            <Col lg="6" className="my-5 py-5">
            <h1 className="display-3"><span className="text-secondary">Product &amp; </span> <span className="text-tertiary">Brand</span> Management</h1>
            <p className="lead">  
              Helping you to create and market products for international audiences.
            </p>           
            </Col>
      </Intro> 
    
        
    <section className="py-5 bg-1  text-light">
      <Container>
        <Row>
          <Col className="py-5" lg="4" md="6">
          <h2>
            Product managed from <span className="text-secondary">concept</span> to <span className="text-tertiary">launch</span>
          </h2>
            <p className="lead">
              Management of physical and digital products
            </p>
            <p>
             <strong>Market research: </strong>
                Reports seeking a clear understanding of the user, target market and moment of use to create products that are easily adopted.
            </p>
            <p>
              <strong>Product Design: </strong> An interative process seeking for product market fit by running on tests and gauging audience reaction. 

            </p>
            <p>
              <strong>Promotion: </strong>
              Getting the product to the right placement through business development, exports and promotion in international events. 
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
    <section className="bg-2 py-5"  >
    <Container>
    <Row className="py-lg-5">
      <Col className="py-5" lg="4" md="6">
      <h2 >
         <span className="text-mid">Brand</span> design that <span className="text-mid">resonates</span>
      </h2>
        <p className="lead">
          Make you brand stand out by emphasising your differenciation. 
        </p>
        <p>
         <strong>Brand design: </strong>
          Core elements to define a brand, including logo, isotype, typography, etc.          
        </p>
        <p>
          <strong>Corporate style: </strong>
          Defining communication in text, visual &#123;photography, illustration, graphic design&#125; video and audio. 
        </p>
        <p>
          <strong>Applications: </strong>
          From merchandise, to menus, packaging and decoration.
        </p>

        <Link
          to="/projects/"
          className="btn btn-outline-dark"
        >
        Branding
        </Link>

      </Col>
      
      <Col lg={{span:4,offset:2}} className="py-3">
        <Card>
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
            +15 years of experience over <span className="text-secondary">5 different countries </span> working in B2B and B2C in tech and the food industry.
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
            className="btn btn-outline-light ms-3"
          >
          Contact me
          </Link>
          
        </Col>

        <Col lg={{span:5,offset:2}}>

        <StaticImage 
          src="../images/map.png" 
          alt="Map" 
          className="mt-5"
          />
                    
        </Col>
      </Row>

      </Container> 
    

   </section>
   
  </Layout>
  </>
)

export default IndexPage
