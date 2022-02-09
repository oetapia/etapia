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
 
 
 const Intro = ({ children }) => {
   
 
   return (
	 <>
		<section className="intro bg-black">
			<Container>
			<Row className="py-5 text-light">
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
 