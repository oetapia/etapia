/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 //import { useStaticQuery, graphql } from "gatsby"
 import {Container, Row, Col} from "react-bootstrap"
 //import { getImage } from "gatsby-plugin-image"

 //import { convertToBgImage } from "gbimage-bridge"
 //import BackgroundImage from 'gatsby-background-image'

 const Intro = ({ children,img,extra,text }) => {
	
	/*
	const { placeholderImage } = useStaticQuery(
		graphql`
		  query {
			placeholderImage: file(relativePath: { eq: "bg.png" }) {
			  childImageSharp {
				gatsbyImageData(
				  width: 1600
				  placeholder: BLURRED
				  formats: [AUTO, WEBP, AVIF]
				)
			  }
			}
		  }
		`
	  )
	  */
	  //const image = getImage(placeholderImage)
	
	  // Use like this:
	  //const bgImage = convertToBgImage(image)

   return (
	 <>

				<Container className="pt-5 intro">
					<Row className={text+" py-5"}>
						<Col>
								{children}
						</Col>
					</Row>
				</Container>

			{/* <BackgroundImage
					Tag="section"
					className={extra +" intro py-5 "}
					// Spread bgImage into BackgroundImage:
					{...bgImage}
					preserveStackingContext
					>
				<Container>
					<Row className={text+" py-5"}>
						<Col>
								{children}
						</Col>
					</Row>
				</Container>
			</BackgroundImage>
			*/
   				}
 	 </>
   )
 }
 
 Intro.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Intro
 