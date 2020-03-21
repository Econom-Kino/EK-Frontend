import React from 'react';
import './CinemaDescription.css';
import StarRatings from 'react-star-ratings';

class CinemaDescription extends React.Component {


    render() {
        return (
            <div className="cinema__description">
                <div className="cinema__description__name">
                    Multiplex: Viktoria Gardens
                </div>
                <div className="cinema__description__rate">
                    <div className='rate__number'>4,0</div>
                    <div className='rate__stars'><StarRatings
                        rating={4.0}
                        starDimension="22.35px"
                        starSpacing="6.76px"
                        starRatedColor="#ECD824"
                        starEmptyColor="#C4C4C4"
                        name="cinema_rate"
                    />
                    </div>
                    <div className="rate__people">(9020)</div>
                </div>
                <div className="cinema__description__location">
                    <img className="cinema_descrip_img" alt='location' src={require('./location_icon.png')} /> <div>Victoria Gardens, вул. Кульпарківська, 226А, Львів, Львівська область, 79000</div>
                </div>
                <div className="cinema__description__site">
                    <img className="cinema_descrip_img" alt='website' src={require('./website_icon.png')} /> multiplex.ua
                </div>
                <div className="cinema__description__tel">
                    <img className="cinema_descrip_img" alt='phone' src={require('./phone_icon.png')} /> 0800 505 333
                </div>

            </ div>
        )
    }
}

export default CinemaDescription;