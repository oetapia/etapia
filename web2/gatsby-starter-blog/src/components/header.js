import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {Container, Nav, Navbar} from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
    <Navbar class >

    <Nav>
    <StaticImage
      className="me-5"
      src="../images/elogo2.png"
      width={40}
      formats={["auto", "webp", "avif"]}
      alt="E Logo"
      
    />
      <Nav.Link>
        <Link
          to="/"
          activeClassName="active"
        >
          Home
        </Link>
      </Nav.Link> 
      <Nav.Link>
          <Link
            to="/about/"
            activeClassName="active"
          >
            About
          </Link>
          
        </Nav.Link>
        <Nav.Link>
          <Link
            to="/experience/"
            activeClassName="active"
          >
            Experience
          </Link>
          
        </Nav.Link>
        <Nav.Link>
        <Link
          to="/contact/"
          activeClassName="active"
        >
          Contact
        </Link>
        </Nav.Link>
    
    </Nav>

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
