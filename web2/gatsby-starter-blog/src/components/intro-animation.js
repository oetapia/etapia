/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useEffect } from "react"
 import PropTypes from "prop-types"
 import {Container, Row, Col} from "react-bootstrap"
 import Sun from "../images/assets/sun.svg"
 import Cloud1 from "../images/assets/cloud-1.svg"
 import Cloud2 from "../images/assets/cloud-2.svg"
 
 const Intro = ({ children,text }) => {
	


  useEffect(() => {
    
	function checkScroll()  {
	  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
			document.getElementById("animation-header").classList.add("active");

		} else {
		   document.getElementById("animation-header").classList.remove("active");
		}
	  }

	  document.addEventListener('scroll', _ => 
	  checkScroll()
	  );    

},[])


	  

   return (
	 <>

				<Container className=" intro">
					<Row className={text+" "}>

						<Col className="animation-header" id="animation-header">
								<Sun className="sun"></Sun>	
								<Cloud1 className="cloud cloud-1"></Cloud1>	
								<Cloud2 className="cloud cloud-2"></Cloud2>
								<div className="main-content mt-5">
									{children}
								</div>
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
 