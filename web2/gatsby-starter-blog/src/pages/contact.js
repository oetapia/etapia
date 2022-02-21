import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import {Container} from "react-bootstrap"

const Contact = () => (
  <Layout>
    <Seo title="Contact me" />
    <Intro bg="bg-dark" text="text-light">
    <h1>Contact me</h1>
    <p>I'm always happy to help and connect with others.</p>
    </Intro>
    <Container>

    
    <ul>
      <li>Linkedin: <Link target="_blank" to="https://www.linkedin.com/in/estebantapia">estebantapia</Link></li>
      <li>Twitter: <Link target="_blank" to="https://twitter.com/oetapia">@oetapia</Link></li> 
      <li>email: <Link target="_blank" to="mailto:e@estebantapia.com">e@estebantapia.com</Link></li>
    </ul>
    </Container>
  </Layout>
)

export default Contact
