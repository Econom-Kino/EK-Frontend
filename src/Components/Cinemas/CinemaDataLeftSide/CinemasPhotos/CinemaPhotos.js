import React from 'react';
import './CinemaPhotos.css';




class CinemaPhotos extends React.Component {


    render() {
        return (
            <div className="cinema__photos">
                <div className="cinema__photo">
                    <img alt='cinema' src={require("../../cinemaslogo/viktoria.jpg")}></img>
                </div>
                <div className="cinema__photo">
                    <img alt='cinema' src={require("../../cinemaslogo/viktoria.jpg")}></img>
                </div>
                <div className="cinema__photo">
                    <img alt='cinema' src={require("../../cinemaslogo/viktoria.jpg")}></img>
                </div>
                <div className="cinema__photo">
                    <img alt='cinema' src={require("../../cinemaslogo/viktoria.jpg")}></img>
                </div>
                <div className="cinema__photo">
                    <img alt='cinema' src={require("../../cinemaslogo/viktoria.jpg")}></img>
                </div>
                <div className="cinema__photo">
                    <img alt='cinema' src={require("../../cinemaslogo/viktoria.jpg")}></img>
                </div>
            </div>
        )
    }
}

export default CinemaPhotos;