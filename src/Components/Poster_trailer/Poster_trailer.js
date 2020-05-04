import React from 'react';
import './Poster_trailer.css';
import './css/font-awesome.min.css';

class Poster_trailer extends React.Component {

    render() {
        return (
            <div>
                <div className="poster-trailer1">
                    <div><img src={this.props.poster_link} className="poster1" alt={'Here poster'} /></div>
                    <div className="trailer-box1"><i className="fa fa-play-circle fa-lg" aria-hidden="true">
                    </i>
                        <a
                            style={{
                                textDecoration: "none",
                                color: "#5F5F5F",
                            }}
                            href={`${this.props.trailer_link}`
                            } rel="noopener noreferrer" target="_blank"
                        >Трейлер</a></div>
                </div>
            </div>
        )
    }
}

export default Poster_trailer;