
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import {Container,Row,Col} from "react-bootstrap"


const NotFoundPage = () => (
    <Layout bg="0">
    <Seo title="404: Not found" />
    <Intro extra="bg-0" text="text-light">
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Intro>
    <Container className="py-5">
    <Row>
      <Col md="6">
          Head back home <Link to="/">Home</Link>
      </Col>
    </Row>

    </Container>
    </Layout>
)

export default NotFoundPage
