import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {Container, Nav, Navbar,NavDropdown, } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header className="sticky-top">
    <Container>
      <Navbar className="bg-1" expand="lg">
        <Link
            to="/"
          >
          <img
              className="me-lg-5"
              src="../images/elogo.svg"
              height={40}
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
                to="/experience/"
                activeClassName="active"
                className="dropdown-item"
              >
                Experience
              </Link>
              <Link
                to="/projects/"
                activeClassName="active"
                className="dropdown-item"
              >
                Projects
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
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
