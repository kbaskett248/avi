import React from "react"
import { Link } from "gatsby"

import Content from "../components/content"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content style={{ marginBottom: "5ex", marginTop: "17ex" }} >
      <div className="content">
        <h1>Home</h1>
        <p>
          Welcome to the Georgia Aquarium!
        </p>
        <p><Link to="/beluga/">Beluga Whales</Link></p>
      </div>
    </Content>
  </Layout>
)

export default IndexPage
