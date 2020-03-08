import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import AudioPlayer from "../components/audio"
import Content from "../components/content"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FunOceanFacts = ({ data }) => (
  <Layout>
    <SEO title="Fun Facts About the Ocean" />
    <Content style={{ marginBottom: "5ex", marginTop: "17ex" }} >
      <div className="content">
        <h1>Fun Facts About the Ocean</h1>
        <div style={{ marginBottom: "1.45rem" }}>
          <Img fluid={data.primaryImage.childImageSharp.fluid}
            alt="Waves crashing against a beach" />
        </div>
        <p>
          Back in ancient times there was just one ocean. 
          Now there are five oceans and more than ten seas.
        </p>
        <p>
          There are volcanic beaches with volcanoes under it.
        </p>
        <p>
          Water is never still unless it's a glass of water.
        </p>
        <p>
          Some of the cutest animals are in the ocean.
        </p>
      </div>
    </Content> 
    <Footer>
      <AudioPlayer src={data.primaryAudio.publicURL} >
        <p>Beluga whale echolocation sounds</p>
      </AudioPlayer>
    </Footer>
  </Layout>
)

export const pageQuery = graphql`
  query {
    primaryImage: file(relativePath: { eq: "ocean.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    primaryAudio: file(relativePath: { eq: "ocean-facts.ogg" }) {
      publicURL
    }
  }`

export default FunOceanFacts
