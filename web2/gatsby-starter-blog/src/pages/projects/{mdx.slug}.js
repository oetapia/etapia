import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../../components/layout";
import {Row, Col, Image, Badge, Container} from 'react-bootstrap'

export default function PostPage({ data }) {
  
  const {
    body,
    frontmatter: { title,location,image, date, tags, industry,excerpt },
  } = data.mdx;
  
  return (
    <>
    <Layout type="dark">

      <Container className="mt-5 pt-5">
      <Row className="mb-5">
        <Col xs="4" sm="3" lg="3" xl="2">
        {image ? (
          <Image 
          src={image.childImageSharp.original.src} 
          fluid 
          className="img-thumbnail shadow" 
          />
        ): ''}

        </Col>
        <Col>
        <p className="small">
          <Link to="/projects">/projects</Link>
        </p>
        <h1>{title}</h1>
        <p className="text-muted small">
        {location} | {date} | {industry}
        </p>
        <p>
          {tags.map((tag, i) => [
                  <Badge key={i} bg="secondary"  className="me-1">
                    {tag}
                  </Badge>
             ])}
        </p>
        <p>
            {excerpt}
        </p>
        </Col>
      </Row>
      
      
      <div class="p-5 bg-white shadow" >
      <MDXRenderer>{body}</MDXRenderer>
      </div>         
      </Container>
    </Layout>
      
    </>
  );
}

export const query = graphql`
  query EXP_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      frontmatter {
        date(formatString: "YYYY MMMM")
        title
        location
        tags
        excerpt
        industry
        images
        image {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`;