import React from 'react';
import './CinemaDataLeftSide.css';

import Map from './Map/Map'
import CinemasPhotos from './CinemasPhotos/CinemaPhotos';


class CinemaDataLeftSide extends React.Component {


    render() {
        return (
            <div className="cinema__leftside">
                <Map />
                <CinemasPhotos />
            </div>
        )
    }
}

export default CinemaDataLeftSide;