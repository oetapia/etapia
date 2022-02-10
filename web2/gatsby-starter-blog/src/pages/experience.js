import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Card,Col,Row} from "react-bootstrap"

export default function Experience({ data }) {
  return (
  <>
  <Layout>

    <Seo title="Work Experience" />
    <h1>Experience</h1>
    <h2>
      Full time jobs
    </h2>
    <p>These were fun.</p>

    <h2>
      Other projects
    </h2>

    <Row>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
         <Col>
         <Card>
              <Card.Header>

                <Card.Title>
                  {frontmatter.title}
                </Card.Title>

              </Card.Header>
              <Card.Body>
                <p className="small text-muted">
                  {frontmatter.date}
                </p>
                <p>
                  {excerpt}
                </p>
              </Card.Body>
              <Card.Footer>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        slug
      }
    }
  }
`;
