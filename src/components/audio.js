import PropTypes from "prop-types"
import React from "react"


class Audio extends React.Component {
    state = {
        play: false
    }

    render() {
        return (
            <audio controls src={ this.props.src }>
                {this.props.children}
            </audio>
        )
    }
}

export default Audio
