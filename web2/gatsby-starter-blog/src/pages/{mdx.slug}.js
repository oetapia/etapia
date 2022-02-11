import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/layout";
import {Row, Col, Image} from 'react-bootstrap'

export default function PostPage({ data }) {
  
  const {
    body,
    frontmatter: { title,location,image,images, date },
  } = data.mdx;
  
  return (
    <>
    <Layout>

      
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
        <h1>{title}</h1>
        <p className="text-muted small">
        {location} | {date}
      </p>
        </Col>
      </Row>
      
      <div class="p-5 bg-white shadow" >
      <MDXRenderer>{body}</MDXRenderer>
      </div>         
    </Layout>
      
    </>
  );
}

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      frontmatter {
        date(formatString: "YYYY MMMM")
        title
        location
        tags
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