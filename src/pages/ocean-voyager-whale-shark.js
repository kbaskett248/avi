import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import AudioPlayer from "../components/audio"
import Content from "../components/content"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const OceanVoyagerWhaleShark = ({ data }) => (
  <Layout>
    <SEO title="The Ocean Voyager Exhibit and Whale Sharks" />
    <Content style={{ marginBottom: "5ex", marginTop: "17ex" }} >
      <div className="content">
        <h1>The Ocean Voyager Exhibit</h1>
        <div style={{ marginBottom: "1.45rem" }}>
          <Img fluid={data.primaryImage.childImageSharp.fluid}
            alt="The Ocean Voyager Exhibit" />
        </div>
        <p>
          The Ocean Voyager gallery, built by The Home Depot, is home to four whale sharks, four manta rays, and thousands of other fascinating fish. 
          As one of the largest single aquatic exhibits in the world, Ocean Voyager features an acrylic tunnel for guests to view thousands of marine creatures on all sides, 
          as well as a giant acrylic viewing window to explore our oceans like never before.
        </p>
        <p>
          This exhibit was specially designed to house whale sharks, the largest fish species in the world. 
          Schools of predatory trevally jacks, squadrons of small and large stingrays, enormous goliath grouper, and several sharks all ply the waters of this ocean habitat.
        </p>
        <h1>Whale Sharks</h1>
        <div style={{ marginBottom: "1.45rem" }}>
          <Img fluid={data.secondaryImage.childImageSharp.fluid}
            alt="Beluga whale swimming upside down" />
        </div>
        <p>
          Despite the resemblance in its name, the whale shark isn’t a whale. 
          The whale shark is actually the world’s largest fish.  
          The name whale shark comes from the fact that this species of shark can grow to be as large as some whale species. 
          When fully grown the whale shark can grow to lengths of 40 feet. 
        </p>
        <p>
          These sharks have very wide mouths which can reach nearly 5 ft. wide and can contain up to 350 rows of teeth. 
          The head is flat and the eyes are located near the front of its head. 
          The whale shark breathes through gills which allow it to extract oxygen from the water.
        </p>
        <p>
          Their skin is mostly a grayish color with a white under-body/belly. 
          The skin is also covered in pale yellow or white spots which are unique among each whale shark, just like fingerprints are unique to each human. 
          They have a pair of dorsal fins and pectoral fins which help them maintain stability in the water and provides better control when swimming.
        </p>
        <p>
          Whale sharks aren’t active hunters like other species of shark which are known to chase, attack and tear their prey apart with their teeth. 
          Whale sharks are filter feeders meaning they consume food by swimming towards it with their mouth open, engulfing the prey that enters their mouth. 
          The whale shark diet consists mainly of plankton, krill, shrimp, larvae, and algae.
        </p>
        <p>
          While sharks do not use sound for communication, they are able to detect the vibrations made by sound which can help them locate prey or nearby marine life. 
          The creation and distribution of loud artificial noises may interfere with the whale sharks ability to properly detect vibration signals. 
          This may lead to issues related to locating prey and migrating from one area to the next.
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
    primaryImage: file(relativePath: { eq: "aquarium.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    secondaryImage: file(relativePath: { eq: "whale-shark1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    primaryAudio: file(relativePath: { eq: "ocean-voyager-exhibit.ogg" }) {
      publicURL
    }
  }`

export default OceanVoyagerWhaleShark
