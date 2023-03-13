import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Intro from "../components/intro-animation"
//import Light from "../components/light"
import CherryTree from "../images/assets/cherry-tree-2.svg"
import Petal from "../images/assets/petal-1.svg"
import Mountain1 from "../images/assets/mount-pattern-1.svg"
import Mountain2 from "../images/assets/mount-pattern-2.svg"


import Seo from "../components/seo"

import { Container, Row, Col,Card, Badge } from "react-bootstrap"
import { useEffect } from "react"



const IndexPage = () => {

  


  useEffect(() => {
    function checkScroll() {
      const animationHeader = document.getElementById("quote")
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        animationHeader.classList.add("active")
      } else {
        animationHeader.classList.remove("active")
      }
    }
    document.addEventListener("scroll", checkScroll)
    return () => {
      document.removeEventListener("scroll", checkScroll)
    }
  }, [])
  
  return (
    <>
  
    <Layout >
        <Seo title="International Product and Marketing" />
        <Intro  text="bg-4">
              <Col lg={{span:10,offset:1}} >
              <h1 >Product Management</h1>
              <p className="lead">
                  End-to-end design and launch of products internationally
              </p>      
              <p className="small font-italic">
                Now in Berlin 
              </p>
  
          
              <Link
                to="/about/"
                className="btn btn-secondary"
              >
              About me
              </Link>
  
  
              
              </Col>
        </Intro> 
  
  
       <section className="py-5 position-relative" id="quote"  >
        <div className="animation">
          <CherryTree className="cherry-tree"></CherryTree>
          <Petal className="petal-1 petal"></Petal>
          <Petal className="petal-2 petal"></Petal>
          <Petal className="petal-3 petal"></Petal>
        </div>
      <Container>
        <Row className="py-5">
          <Col className="py-5">
          
            <blockquote className="display-3 font-italic mb-1">      
                  simplicity is achieved through iterations and a clear understanding of the medium and audience 
              </blockquote>     
          </Col>
          <Col lg={{span:4,offset:1}} className="pt-5">
            <p className="border-start p-5 mt-5">
              Esteban is a product manager with a background in business, design and  experience in corporate and startups
            </p>
          </Col>
        </Row>
      <hr />
      <Row className="py-lg-5 animate " >
        <Col className="py-5" lg="4" md="6">
        <h2>
           Featured projects
        </h2>
          <p className="lead">
            A career that includes branding, product and marketing in B2B and B2C in Asia, South America and Europe
          </p>
          
         
  
        </Col>
        <Col lg={{span:4}}>
            <Card className="styled-card text-light mb-3 ">
              <StaticImage 
                src="../images/celifood/celifood_5.jpg"
                className="card-image shadow" 
                alt="Branding Project" 
                quality="100"
                />
              
              <Card.Body>
                <Card.Title>
                  <div className="small">PRODUCT</div>
                <h4 className="display-4">
                  Celifood
                </h4>            
                </Card.Title>
                  <Card.Text>
                    <p>
                    Design, launch and promotion of a healthy cereal line locally and for exports. 
                    </p>
                    <Badge  bg="1"  className="me-1">
                      #b2c
                    </Badge>
                    <Badge  bg="1"  className="me-1">
                      #food-industry
                    </Badge>
                    <Badge  bg="1"  className="me-1">
                      #product-development
                    </Badge>
                    <Badge  bg="1"  className="me-1">
                      #latam
                    </Badge>
                  </Card.Text>
              </Card.Body>
              <Card.Footer>
                  <Link
                    to="/experience/cereales"
                    className="btn btn-secondary stretched-link"
                  >
                  See More
                  </Link>
                  
              </Card.Footer>
            </Card>
            
  
        
        </Col>
  
        <Col lg={{span:4}}>
            <Card className="styled-card text-light mb-3  ">
              <StaticImage 
                src="../images/shush/shush_23.png"
                className="card-image shadow" 
                alt="Branding Project" 
                quality="100"
                />
              
              <Card.Body>
                <Card.Title>
                  <div className="small">PRODUCT</div>
                <h4 className="display-4">
                  Shush
                </h4>            
                </Card.Title>
                  <Card.Text>
                    <p>
                    Product concept, startup set-up and product launch of an AI-powered community moderator. 
                    </p>
                    <Badge  bg="1"  className="me-1">
                      #b2b
                    </Badge>
                    <Badge  bg="1"  className="me-1">
                      #tech-industry
                    </Badge>
                    <Badge  bg="1"  className="me-1">
                      #product-development
                    </Badge>
                    <Badge  bg="1"  className="me-1">
                      asia
                    </Badge>
                  </Card.Text>
              </Card.Body>
              <Card.Footer>
                  <Link
                    to="/experience/shush"
                    className="btn btn-secondary stretched-link"
                  >
                  See More
                  </Link>
                  
              </Card.Footer>
            </Card>
          </Col>
        
        {/*
        <Col lg={{span:4,offset:2}} className="py-3">
          <h2>
            Brand design:
          </h2>
               Core elements to define a brand, including logo, isotype, typography, etc.      
          <ul>
    
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
      */}
  
      </Row>
      </Container>
      </section>
          
      <section className="py-5  ">
        <Container>
          <Row>
          <Col className="py-5 " lg="4" md="6">
            <h2>
              From concept to launch
            </h2>
              <p className="lead">
                With hands-on experience in the whole product development and management  of physical and digital products
              </p>
  
             
            
            </Col>
          </Row>
  
          <Row>
           
  
  
            <Col lg={{span:3,offset:3}} className="p-4">
                <h3>
                  1. Ideation
                </h3>
                <p>
                  Reports seeking a clear understanding of the user, target market and moment of use to create products that are easily adopted.
                </p>    
   
           
                        
            </Col>
            <Col lg="3" className="p-4">
                  <h3>
                    2. Product development
                  </h3>
                  <p>
                    An interative process seeking for product market fit by running tests and gauging audience reaction. 
                  </p>
  
                
            </Col>
  
            <Col lg="3" className="p-4">
                <h3>
                  3. Promotion
                </h3>
                <p>
                  Getting the product to the right placement through business development, exports and promotion in international events. 
  
                </p>
                
            </Col>
  
          </Row>
        </Container>
      </section>
     
      <section className="mt-5 pt-5">
      
        <Container fluid>
        <Row >
          <Col lg="3" xs="2" className="d-none d-lg-block ps-0 position-relative overflow-hidden">
                <Mountain1 className="img-fluid position-absolute bottom-0" ></Mountain1>                      
          </Col>
            <Col className="py-5 text-center"  md="6">
            <h2>International Experience</h2>
            <p className="lead">
              +15 years of work experience spanning 4 different countries in tech and the food industry.
            </p>
            <p>
               Educated in the UK, Spain and with work experience in Europe, LATAM and Asia. 
            </p>  
            <p>
              Product management, marketing, business development and brand design. 
            </p>
  
            <Link
              to="/contact/"
              className="btn btn-secondary ms-3"
            >
            Contact me
            </Link>
            
          </Col>
  
          <Col lg="3" xs="2"  className="d-none d-lg-block position-relative overflow-hidden">
                <Mountain2 className="img-fluid position-absolute bottom-0" ></Mountain2>                      
          </Col>
        </Row>
  
        </Container> 
      
      
     </section>
     
    </Layout>
    </>
  )


}


export default IndexPage
