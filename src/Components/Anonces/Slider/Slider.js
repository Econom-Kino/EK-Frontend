import React, { Component } from "react";
import Poster from '../../Poster/Poster';
import './Slider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderArrow from './SliderArrow/SliderArrow';

export default class MultipleItems extends Component {
    render() {
        const settings = {
            autoplay: false,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: <SliderArrow to="prev" side='left' arr='arrowprev' />,
            nextArrow: <SliderArrow to="next" side='right' stl='rotate(180deg)' arr='arrownext' />,
        };

        let items = Array.from(this.props.announcesFilms);
        let itemsToRender = items.map((el, index) => {
            let age = el.age ? `${el.age}` : '0';
            let genresObj = el.genre_names;
            let genres = []
            genresObj.forEach((element) => {
                genres.push(element.name);
            });
            if (genres.length !== 1) {
                genres = genres.join(',');
            }
            return (
                <div key={index * Math.random()} className='anonces__slider__item'>
                    <div className="anonces__slider__item-content" >
                        <Poster
                            posterLink={el.poster_link}
                            filmName={el.name}
                            age={age}
                            genres={genres}
                            duration={el.duration}
                            language={'Українська мова'}
                            imdb={el.rating}
                            trailerLink={el.trailer_link}
                            premier={''}
                        />
                    </div>
                </div>
            )
        })
        return (
            <div>
                {itemsToRender.length < 6 ? (
                    <div style={{ display: 'flex' }}>
                        {itemsToRender}
                    </div>
                ) :
                    (
                        <Slider {...settings}>
                            {itemsToRender}
                        </Slider>
                    )
                }
            </div>
        );
    }
}