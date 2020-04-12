import React from 'react';
import './CinemaDescription.css';
import StarRatings from 'react-star-ratings';

class CinemaDescription extends React.Component {


    render() {
        let name = this.props.cinemaData.name;
        let address = this.props.cinemaData.address;
        let rating = this.props.cinemaData.rating;
        let websiteLink = this.props.cinemaData.website_link;
        let phone = this.props.cinemaData.phone;

        return (
            <div className="cinema__description">
                <div className="cinema__description__name">
                    {name}
                </div>
                <div className="cinema__description__rate">
                    <div className='rate__number'>{rating}</div>
                    <div className='rate__stars'><StarRatings
                        rating={rating}
                        starDimension="22.35px"
                        starSpacing="6.76px"
                        starRatedColor="#ECD824"
                        starEmptyColor="#C4C4C4"
                        name="cinema_rate"
                    />
                    </div>
                </div>
                <div className="cinema__description__location">
                    <img className="cinema_descrip_img" alt='location' src={require('./location_icon.png')} /> <div>{address}</div>
                </div>
                <div className="cinema__description__site">
                    <img className="cinema_descrip_img" alt='website' src={require('./website_icon.png')} />
                    <a className="websitelink" rel="noopener noreferrer" href={websiteLink} target="_blank">{websiteLink}</a>
                </div>
                <div className="cinema__description__tel">
                    <img className="cinema_descrip_img" alt='phone' src={require('./phone_icon.png')} /> {phone}
                </div>

            </ div>
        )
    }
}

export default CinemaDescription;