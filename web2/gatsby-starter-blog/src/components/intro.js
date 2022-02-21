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
 import { StaticImage } from "gatsby-plugin-image" 


 const Intro = ({ children,img,bg,text }) => {

   return (
	 <>
		<section className={bg +" intro py-5 mb-5"}  >
			<Container>
			
			<Row className={text+" py-5"}>
			<Col>
				{children}
			</Col>
			</Row>
			</Container>
      	</section>
	 </>
   )
 }
 
 Intro.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Intro
 