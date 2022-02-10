import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {Container, Nav, Navbar} from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className="sticky-top">
    <Container>
    <Navbar >

    <Nav>
    <StaticImage
      className="me-5"
      src="../images/elogo2.png"
      width={40}
      formats={["auto", "webp", "avif"]}
      alt="E Logo"
    />
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
          

          <Link
            to="/experience/"
            activeClassName="active"
            className="nav-link mx-3"
          >
            Experience
          </Link>
          
 
        <Link
          to="/contact/"
          activeClassName="active"
          className="nav-link mx-3"
        >
          Contact
        </Link>

    
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
