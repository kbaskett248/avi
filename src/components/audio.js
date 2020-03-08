import PropTypes from "prop-types"
import React from "react"


const Audio = ({ src, children }) => {
    return <audio controls src={ src }>
           { children }
           </audio>
}

Audio.propTypes = {
    src: PropTypes.string,
}

Audio.defaultProps = {
    src: ``,
}

export default Audio
