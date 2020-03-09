import React from "react"

const fmtMSS = (s) => {
    s = Math.round(s)
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
}

class AudioPlayer extends React.Component {
    state = {
        play: false,
        currentTime: 0,
        duration: 0
    }

    componentDidMount() {
        this.audio = new Audio(this.props.src);
        this.audio.addEventListener('canplaythrough', this.updateDuration)
        this.audio.addEventListener('ended', () => this.setState({ play: false }));
        this.audio.addEventListener('timeupdate', this.updateTime);
    }

    componentWillUnmount() {
        if (this.state.play) {
            this.audio.pause()
            this.audio.src = ""
        }
        this.audio.removeEventListener('canplaythrough', this.updateDuration)
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));
        this.audio.removeEventListener('timeupdate', this.updateTime);
    }

    updateTime = () => {
        this.setState({ currentTime: this.audio.currentTime });
    }

    updateDuration = () => {
        this.setState({ duration: this.audio.duration });
    }

    togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.audio.pause();
        });
    }

    render() {
        return (
            <button className="scheme1" 
                    style={{
                        display: "block", 
                        width: "100%", 
                        minWidth: "16rem", 
                        minHeight: "3.5rem",
                        borderWidth: "0",
                        padding: "0rem 1rem"
                    }} 
                    onClick={this.togglePlay}
             >
                <div style={{float: "left"}}>{this.state.play ? 'Pause' : 'Play'}</div>
                <div style={{float: "right"}}>{fmtMSS(this.state.currentTime)} / {fmtMSS(this.state.duration)}</div>
            </button>
        );
    }
}

export default AudioPlayer
