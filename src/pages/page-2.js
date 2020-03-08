import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import AudioPlayer from "../components/audio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Img fluid={data.primaryImage.childImageSharp.fluid} 
         alt="Beluga whale swimming upside down"/>
    <AudioPlayer src={ data.primaryAudio.publicURL } >
      <p>Beluga whale echolocation sounds</p>
    </AudioPlayer>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const pageQuery = graphql`
  query {
    primaryImage: file(relativePath: { eq: "beluga1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    primaryAudio: file(relativePath: { eq: "beluga.ogg" }) {
      publicURL
    }
  }`

export default SecondPage
