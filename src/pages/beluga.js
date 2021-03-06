import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import AudioPlayer from "../components/audio"
import Content from "../components/content"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Beluga = ({ data }) => (
  <Layout>
    <SEO title="Beluga Whales" />
    <Content style={{ marginBottom: "5ex", marginTop: "17ex" }} >
      <div className="content">
        <h1>Beluga Whales</h1>
        <div style={{ marginBottom: "1.45rem" }}>
          <Img fluid={data.primaryImage.childImageSharp.fluid}
            alt="Beluga whale head coming out of the water with mouth open" />
        </div>
        <p>
          Beluga whales are adapted to life in the Arctic, so they have physical characteristics that separate them from other ocean creatures. 
          These include its all-white colour and the absence of a <a href="https://en.wikipedia.org/wiki/Dorsal_fin" >dorsal fin</a>. 
          Not having a dorsal fin allows them to swim under ice with ease.
        </p>
        <p>
          Belugas have a distinctive protuberance at the front of their head which houses an <a href="https://en.wikipedia.org/wiki/Animal_echolocation" >echolocation organ</a> called 
          the <a href="https://en.wikipedia.org/wiki/Melon_(whale)">melon</a>. 
          The beluga's body size is between that of a dolphin and a true whale, with males growing up to 18 feet long and weighing up to 3,530 pounds. 
          The beluga whale has a stocky body. A large percentage of its weight is <a href="https://en.wikipedia.org/wiki/Blubber">blubber</a>, a special type of fat. 
          Its sense of hearing is highly developed and its echolocation allows it to move about and find breathing holes under sheet ice. 
        </p>
        <p>
          This is what a beluga sounds like. 
          Narwhals are related to beluga whales which are also known as the white whale. 
          Their conservation status is least concerned. 
          They form in groups of 10. 
          People in Russia and North America have hunted them for centuries.
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
    primaryImage: file(relativePath: { eq: "beluga1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    primaryAudio: file(relativePath: { eq: "beluga.mp3" }) {
      publicURL
    }
  }`

export default Beluga
