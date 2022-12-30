/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import {Container, Row, Col} from "react-bootstrap"
 import Sun from "../images/assets/sun.svg"
 import Cloud1 from "../images/assets/cloud-1.svg"
 import Cloud2 from "../images/assets/cloud-2.svg"
 
 const Intro = ({ children,img,extra,text }) => {
	

	  function updateScrollPosition() {

		console.log('scrollY',window.scrollY);
	
		var windowHeight = window.innerHeight;
		console.log('windowHeight',windowHeight);
		const scrollPos = (window.scrollY/windowHeight)*100;
		console.log('scrollPos',scrollPos);
		const scrollTop = window.scrollY;
		console.log('scrollTop',scrollTop);
	
	
		/*
	
		if (scrollPos < 2) {
			scrollImage.style.right = (-10 + '%');
		}
	
		if (scrollPos < 100 && scrollPos > 2) {
			scrollImage.style.right = (scrollPos + '%');
						
		}
	
		else {
	
			scrollImage.style.right = 100 + '%';
					
			}			
		
		
		*/
	
	
		var elementVisible = 2;
		
		const scrollCloud = document.querySelectorAll('.cloud');
		for (var i = 0; i < scrollCloud.length; i++) {
	
		  if (scrollPos > elementVisible) {
			scrollCloud[i].classList.add("active");
		  } else {
			scrollCloud[i].classList.remove("active");
		  }
		}
	
	
	  }
	
	  window.addEventListener('scroll', updateScrollPosition);
	  
	  

   return (
	 <>

				<Container className=" intro">
					<Row className={text+" "}>

						<Col className="animation-header">
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
 