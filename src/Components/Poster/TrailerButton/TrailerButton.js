import React from 'react';
import './TrailerButton.css';

class TrailerButton extends React.Component {


    render() {
        return (
            <div className="button__wrapper">
                <div className="button__container">
                    <a className="button" href={`${this.props.trailerLink}`} rel="noopener noreferrer" target="_blank"><p className="trailer__word">Трейлер</p></a>
                </div>
            </div>
        )
    }
}

export default TrailerButton;