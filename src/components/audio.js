import React from "react"


class AudioPlayer extends React.Component {
    state = {
        play: false,
        currentTime: 0,
        duration: 0
    }
    audio = new Audio(this.props.src);

    componentDidMount() {
        this.audio.addEventListener('canplaythrough', this.updateDuration)
        this.audio.addEventListener('ended', () => this.setState({ play: false }));
        this.audio.addEventListener('timeupdate', this.updateTime);
    }

    componentWillUnmount() {
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
            <div>
                <button onClick={this.togglePlay}>
                    {this.state.play ? 'Pause' : 'Play'} {this.state.currentTime} / {this.state.duration}
                </button>
            </div>
        );
    }
}

export default AudioPlayer
