import React from 'react';
import './Review.css';

import StarRatings from 'react-star-ratings';



class Review extends React.Component {


    render() {
        let src = 'ava';
        return (
            <div className="review">
                <div className="review__author__data">
                    <div className="author__avatar" style={{ backgroundImage: `url(${this.props.profilePhotoUrl}` }} >
                    </div>
                    <div className="authorname__and__rate">
                        <div className="authorname">
                            {this.props.authorName}
                        </div>
                        <div className='author__stars'>
                            <StarRatings
                                rating={this.props.rating}
                                starDimension="22.35px"
                                starSpacing="5px"
                                starRatedColor="#ECD824"
                                starEmptyColor="#C4C4C4"
                                name="author_rate"
                            />
                        </div>
                    </div>
                </div>
                <div className="author__comment">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Review;