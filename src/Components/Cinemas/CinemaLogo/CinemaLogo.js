import React from 'react';
import './CinemaLogo.css';


class CinemaLogo extends React.Component {

    state = {
        showBgText: 'block',
        focusBg: '',
    }


    render() {
        let src = this.props.cinemaLogoSrc;
        return (
            <div className="cinema__logo__inner"
                onFocus={() => {
                    this.setState({
                        focusBg: '_hover',
                        showBgText: 'none',
                    });
                }}
                onBlur={() => {
                    this.setState({
                        focusBg: '',
                        showBgText: 'block',
                    })
                }}
            >
                {true &&
                    <button className="cinema__logo" style={{
                        backgroundImage: `url(${require(`../cinemaslogo/${src}${this.state.focusBg}.jpg`)})`
                    }}>
                        <div className="cinema__logo__text"
                            style={{
                                display: this.state.showBgText,
                            }}
                        >
                            {this.props.bgText}
                        </div>
                    </button>
                }
            </div >
        )
    }
}

export default CinemaLogo;