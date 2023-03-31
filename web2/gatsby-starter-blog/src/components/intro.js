import * as React from "react"
import PropTypes from "prop-types"
import {Container, Row, Col} from "react-bootstrap"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const Intro = ({ children, img, extra, text }) => {

	if (img) {

		const bgImage = convertToBgImage(img)
	  
		return (
		  <BackgroundImage
			Tag="section"
			className={extra +" intro py-5 "}
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
		)
	}

	return	(
			<Container className="mt-5">
			  <Row className={text+" py-5"}>
				<Col>
				  {children}
				</Col>
			  </Row>
			</Container>
	)
}



Intro.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.object.isRequired,
  extra: PropTypes.string,
  text: PropTypes.string,
}

export default Intro
