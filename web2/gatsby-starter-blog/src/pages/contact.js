import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <Seo title="Contact me" />
    <h1>Contact me</h1>
    <p>I'm always happy to help and connect with others.</p>
    <ul>
      <li>Linkedin: <Link to="http://www.linkedin.com">estebantapia</Link></li>
      <li>Twitter: @oetapia</li> 
      <li>email: e@estebantapia.com</li>
    </ul>
  </Layout>
)

export default Contact
