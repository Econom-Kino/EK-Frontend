import React from 'react';
import './CinemaDataRightSide.css';

import CinemaDescription from './CinemaDescription/CinemaDescription';


class CinemaDataRightSide extends React.Component {


    render() {
        return (
            <div className="cinema__rightside">
                <CinemaDescription />
            </div>
        )
    }
}

export default CinemaDataRightSide;