import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {Container, Nav, Navbar,NavDropdown, } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className="sticky-top">
    
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link
            to="/"
          >
          <StaticImage
              className="me-lg-5"
              src="../images/elogo-w.svg"
              height={40}
              formats={["auto", "webp", "avif", "svg"]}
              alt="E Logo"
            />
          </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          
          <Link
            to="/"
            activeClassName="active"
            className="nav-link mx-3"
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
                to="/projects/"
                activeClassName="active"
                className="dropdown-item"
              >
                Branding
              </Link>
              <Link
                to="/experience/"
                activeClassName="active"
                className="dropdown-item"
              >
                Product &amp; MK
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
