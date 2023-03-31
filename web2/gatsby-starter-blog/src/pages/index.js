import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Intro from "../components/intro"

import Seo from "../components/seo"
import { Container, Row, Col,Card, Badge } from "react-bootstrap"
import { useEffect } from "react"


const IndexPage = ({ data }) => {

  const imageData = data.placeholderImage.childImageSharp.gatsbyImageData



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
  
    <Layout variant="dark">
        <Seo title="International Product and Marketing" />
        <Intro text="text-light" img={imageData}>
          <Row>

              <Col lg={{span:6}} className="mt-5 pt-5" >
              <h1 className="mt-5 mb-1">Customer focused products</h1>
              <p className="lead">
                  End-to-end strategy and design of <em>digital</em> and <em>physical</em> products.
              </p>      
              <p>
                  Managing processes and teams to create and launch products internationally in B2B and B2C.
              </p>
          
              <Link
                to="/about/"
                className="btn btn-secondary"
              >
              About me
              </Link>
              
              </Col>
            
          </Row>
        </Intro> 
  

        <section className="py-5">
            <Container>
              <Row className="py-5">
                
              <Col lg={{span:4}} className="p-5 my-5 border-end">
               <p className="number shadow bg-2">
                1
                </p>
               <h3>
                 Ideation
               </h3>
               <p className="lead">
                customer, competitor, company 
               </p>
               <p>
               Using expertise in market research to prepare detailed reports that <em>deep dive</em> in markets analyzing customers' needs, how well competitors are serving them and where the our company has a value differentiation.
               </p>    
  
          
                       
           </Col>
         
              </Row>
              <Row className="py-5 ">
              <Col lg={{span:4, offset:3}} className="p-5 my-5 border-end">
                <p className="number shadow bg-2">
                2
                </p>
                 <h3>
                   Product development
                 </h3>
                 <p className="lead">
                   wireframes, figma, html/js prototypes
                 </p>
                   
                 <p>
                 An interative process seeking for product market fit by running tests and gauging audience reaction using multiple techniques to build product concepts, from hand drawings, to print, and digital, using methods that help stakeholders understand the scope.
                  
                 </p>
 
               
           </Col>

            </Row>
            <Row className="py-5">
        
           <Col lg={{span:4, offset:6}} className="p-5 my-5 border-end">
              
                <p className="number shadow bg-2">
                3
                </p>
               <h3>
                
                 Promotion
               </h3>
               <p className="lead">
                 documentation, promotion, feedback
               </p>

               <p>
                 Applying experience in business development to get the product to the right placement through channel management, exports and promotion in international events. 

               </p>
               
           </Col>
 
         </Row>
              </Container>
        </section>  
       <section className="py-5 position-relative" id="quote"  >
       <hr />  
      <Container>
      
      
      <Row className="py-lg-5 animate " >
        <Col className="py-5" lg="4" md="6">
        <h2>
           Success stories
        </h2>
          <p className="lead">
              Digital and physical producst in B2B and B2C
          </p>
          <p>
            A career that includes branding, product and marketing in Asia, South America and Europe
          </p>
          
        </Col>
        </Row>
        <Row className="animation">
 
        <Col lg={{span:5, offset: 1}}>
            <Card className="styled-card mb-3 ">
              <StaticImage 
                src="../images/celifood/celifood_5.jpg"
                className="card-image shadow" 
                alt="Branding Project" 
                quality="100"
                />
              
              <Card.Body>
                <Card.Title>
                  <div className="small mb-0">PRODUCT</div>
                <h4 className="display-4 mt-0">
                  Celifood
                </h4>            
                </Card.Title>
                  <Card.Text>
                    <p>
                    Design, launch and promotion of a healthy cereal line locally and for exports. 
                    </p>
                    <Badge  bg="2"  className="me-1">
                      #b2c
                    </Badge>
                    <Badge  bg="2"  className="me-1">
                      #food-industry
                    </Badge>
                    <Badge  bg="2"  className="me-1">
                      #product-development
                    </Badge>
                    <Badge  bg="2"  className="me-1">
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
  
        <Col lg={{span:5, offset: 1}}>
            <Card className="styled-card  mb-3  ">
              <StaticImage 
                src="../images/shush/shush_23.png"
                className="card-image shadow" 
                alt="Branding Project" 
                quality="100"
                />
              
              <Card.Body>
                <Card.Title>
                  <div className="small mb-0">PRODUCT</div>
                  <h4 className="display-4 mt-0">
                  Shush
                </h4>            
                </Card.Title>
                  <Card.Text>
                    <p>
                    Product concept, startup set-up and product launch of an AI-powered community moderator. 
                    </p>
                    <Badge  bg="2"  className="me-1">
                      #b2b
                    </Badge>
                    <Badge  bg="2"  className="me-1">
                      #tech-industry
                    </Badge>
                    <Badge  bg="2"  className="me-1">
                      #product-development
                    </Badge>
                    <Badge  bg="2"  className="me-1">
                      #asia
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
        
     
      </Row>
      </Container>
      </section>
      
     
      <section className="mt-5 pt-5">
      
        <Container>
        <Row >
            <Col className="py-5 "  lg="6">
            <h2>Esteban</h2>
            <p className="lead">
            marketing, design, tech
            </p>
            <p>
            +15 years of work experience spanning 4 different countries in tech and the food industry.
               
            </p>  
            <p>
            Educated in the UK, Spain and with work experience in Europe, LATAM and Asia. 
            </p>
  
            <Link
              to="/contact/"
              className="btn btn-secondary ms-3"
            >
            Contact me
            </Link>
            
          </Col>
          <Col>
             
          </Col>

        </Row>
  
        </Container> 
      
      
     </section>
     
    </Layout>
    </>
  )


}


export default IndexPage


// Set image for header background 

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "river.jpg" }) {
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