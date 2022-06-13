import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import {Container} from "react-bootstrap"

const Contact = () => (
  <Layout type="0">
    <Seo title="Contact me" />
    <Intro bg="bg-0" text="text-light">
    <h1><span className="text-secondary">Contact</span> me</h1>
    <p>Let's connect and discuss how to grow together.</p>
    </Intro>
    <Container className="text-light py-5">
    
    <ul>
      <li>Linkedin: <Link target="_blank" to="https://www.linkedin.com/in/estebantapia">estebantapia</Link></li>
      <li>Twitter: <Link target="_blank" to="https://twitter.com/oetapia">@oetapia</Link></li> 
      <li>email: <Link target="_blank" to="mailto:e@estebantapia.com">e@estebantapia.com</Link></li>
    </ul>
    </Container>
  </Layout>
)

export default Contact
