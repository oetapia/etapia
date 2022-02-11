import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Card,Col,Row,Badge} from "react-bootstrap"
//import { StaticImage } from "gatsby-plugin-image"

export default function Experience({ data }) {
  return (
  <>
  <Layout>

    <Seo title="Work Experience" />
    <h1>Experience</h1>
    <p>Full time jobs, describing objectives</p>
    <Row>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
         <Col className="py-3" md="4">
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
  query SITE_INDEX_QUERY {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {eq: "full time"}}}
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
