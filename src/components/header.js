import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `)

  return (
    <header
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        zIndex: 1
      }}
      className="scheme1"
    >
      <Link to="/" className="scheme1" style={{ textDecoration: "none" }}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 1rem`,
          }}
        >
          <h1 style={{ margin: 0 }} className="color-dark">
              {data.site.siteMetadata.title}
          </h1>
          <span className="color-dark">
            { data.site.siteMetadata.description }
          </span>
        </div>
      </Link>
    </header>
  )
}

export default Header
