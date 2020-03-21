import React from 'react';
import './Review.css';

import StarRatings from 'react-star-ratings';



class Review extends React.Component {


    render() {
        let src = 'ava';
        return (
            <div className="review">
                <div className="review__author__data">
                    <div className="author__avatar" style={{ backgroundImage: `url(${require(`./${src}.png`)})` }} >
                    </div>
                    <div className="authorname__and__rate">
                        <div className="authorname">
                            McDonalds Trump
                        </div>
                        <div className='author__stars'>
                            <StarRatings
                                rating={4.0}
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
                    Не ну кинотеатр збс, я б сходил еще раз, все ччетко, поп-корм воздушный и маслица на него не зажали, пивас правда пролили на заднем, но за эт сорян не со зла, пришлю меланию она все почистит. Экран здоровый мне такое нравится, правда охранник как-то косо смотрел пхд с Северной Кореи за это одну звезду не доставил, а так достойно.
                    </div>
            </div>
        )
    }
}

export default Review;