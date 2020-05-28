import React from 'react';
import './CinemaDataRightSide.css';

import CinemaDescription from './CinemaDescription/CinemaDescription';


class CinemaDataRightSide extends React.Component {
    myRef = React.createRef();

    componentDidMount() {
        let el = this.myRef.current;
        el.scrollIntoView({ behavior: "smooth", });

    }

    render() {
        return (
            <div ref={this.myRef} className="cinema__rightside">
                <CinemaDescription
                    cinemaData={this.props.cinemaData}
                />
            </div>
        )
    }
}

export default CinemaDataRightSide;