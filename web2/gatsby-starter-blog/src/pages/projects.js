import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import {Container,Card,Col,Row,Badge} from "react-bootstrap"
import { GatsbyImage,getImage } from "gatsby-plugin-image"


export default function Projects({ data }) {
  return (
  <>
  <Layout>

    <Seo title="Other Projects" />
    <Intro bg="bg-2"  text="text-light">
      <h1>Branding projects</h1>
      <p>
        I designed different brands and helped with their positioning strategy as a consultant.
      </p>
    </Intro>
    
    <Container>
    <Row>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
         <Col className="py-3" md="3" key={id}>
         <Card >

                 
              <GatsbyImage image={getImage(frontmatter.image)}    
              className="card-image" 
              alt={frontmatter.title}
              />

              <Card.Body>

                <Card.Title>
                  {frontmatter.title}
                </Card.Title>

                <p className="small text-muted px-0">
                  {frontmatter.date} | {frontmatter.location} 
                </p>
                <p>
                {frontmatter.tags.map((tag, i) => [
                  <Badge key={i} bg="secondary"  className="mx-1">
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
  query Freelance {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {eq: "project"}}}
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY")
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
      edges {
        next {
          slug
        }
        previous {
          slug
        }
      }
    }
  }
`;
