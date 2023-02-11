import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {Container, Nav, Navbar,NavDropdown, } from "react-bootstrap"

const Header = ({ siteTitle, bg }) => (
  <header className="fixed-top" >
    
      <Navbar bg={bg}  id="scroll" expand="lg">
      <Container>
        <Link
            to="/" 
            className="btn"
          >
          Esteban Tapia
          </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          
          <Link
            to="/"
            activeClassName="active"
            className="nav-link mx-3"
            title={siteTitle}
          >
            Home
          </Link>

            <Link
              to="/about/"
              activeClassName="active"
              className="nav-link mx-3"
            >
              About
            </Link>
            <NavDropdown className="mx-3" title="Experience" id="navbarScrollingDropdown">
              <Link
                to="/experience/"
                activeClassName="active"
                className="dropdown-item"
              >
                Product &amp; MK
              </Link>

              <Link
                to="/projects/"
                activeClassName="active"
                className="dropdown-item"
              >
                Branding
              </Link>
           
                                  
            </NavDropdown>

            
            
  
          <Link
            to="/contact/"
            activeClassName="active"
            className="nav-link mx-3"
          >
            Contact
          </Link>

      
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
