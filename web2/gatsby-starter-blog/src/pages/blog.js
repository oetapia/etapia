import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import {Container,Card,Col,Row,Badge} from "react-bootstrap"
import { GatsbyImage,getImage } from "gatsby-plugin-image"

export default function Experience({ data }) {
  
  
  
  return (
  <>
  <Layout>
    
    <Seo title="Blog" />
    <Intro  >
      <h1>Blog</h1>
      <p>Lessons in product</p>
    </Intro>
    <Container>
    <Row>
         
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
        
         <Col className="py-3 animate" md="6"  lg="4" key={id}>
           
         <Card >
         
              
              <GatsbyImage image={getImage(frontmatter.image)}    
              className="card-image" 
              alt={frontmatter.title}
              />
             
              <Card.Body>
                <Card.Title>
                    {frontmatter.title}
                </Card.Title>
                <p className="small text-muted m-0">
                  {frontmatter.date} @ {frontmatter.location} | {frontmatter.industry}
                </p>
                <p className="small mt-0">
                {frontmatter.tags.map((tag, i) => [
                  <Badge key={i} bg="secondary"  className="me-1">
                    {tag}
                  </Badge>
                ])}
                </p>
                <p>
                
                  {excerpt}
                </p>
              </Card.Body>
              <Card.Footer className="text-center">
                <Link  
                  to={`/${frontmatter.path}`}
                  className="btn btn-primary stretched-link"
                  >
                  See more
                </Link>
              </Card.Footer>

         </Card> 
         </Col>
        ))}
    </Row>
    </Container>
  </Layout>
  
  </>
  
  );
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {eq: "blog"}}}
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM")
          path
          tags
          location
          industry
          image{
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
        slug
      }
    }
  }
`;
