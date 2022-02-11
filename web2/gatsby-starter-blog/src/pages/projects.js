import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Card,Col,Row,Badge} from "react-bootstrap"
//import { StaticImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  return (
  <>
  <Layout>

    <Seo title="Other Projects" />
    <h1>Projects</h1>
    <p>
      Freelance, volunteer, personal, etc.
    </p>
    <Row>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
         <Col className="py-3" md="3" key={id}>
         <Card >

              {frontmatter.image !==null ? (
              <img 
              className="card-image"
              src={frontmatter.image.childImageSharp.original.src}
              alt={frontmatter.title}
              />             
              ) : ''
              }

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
                  to={`/${slug}`}
                  className="btn btn-primary"
                  >
                  See more
                </Link>
              </Card.Footer>

         </Card> 
         </Col>
        ))}
    </Row>
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
              original {
                src
              }
            }
          }
        }
        slug
      }
    }
  }
`;
