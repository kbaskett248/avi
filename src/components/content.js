import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Content = ({ style, children }) => {
    return (
        <div style={style} >
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </div>
    )
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Content
