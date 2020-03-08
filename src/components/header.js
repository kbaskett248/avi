import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
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
      id="header"
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 1rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            
              {data.site.siteMetadata.title}
            
          </h1>
          { data.site.siteMetadata.description }
        </div>
      </Link>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
