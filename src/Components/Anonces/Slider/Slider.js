import React, { Component } from "react";
import Poster from '../../Poster/Poster';
import './Slider.css';
import Slider from "react-slick";
import { AddFilmCreator } from '../../../redux/moviePage-reducer';

import SliderArrow from './SliderArrow/SliderArrow';

export default class MultipleItems extends Component {

    addFilmToStore = (film) => {
        this.props.state.moviePage.newFilm = film;
        let action = AddFilmCreator(film);
        this.props.store.dispatch(action);
    }

    render() {
        const settings = {
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: <SliderArrow to="prev" side='left' arr='arrowprev' />,
            nextArrow: <SliderArrow to="next" side='right' stl='rotate(180deg)' arr='arrownext' />,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 570,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
            ]
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
                <div
                    onClick={() => {
                        this.addFilmToStore(el);
                        localStorage.setItem('film', JSON.stringify(el));
                    }}
                    key={index * Math.random()}
                    className='anonces__slider__item'>
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
                            id={el.id}
                        />
                    </div>
                </div>
            )
        })

        return (
            <div >
                {itemsToRender.length < 6 ? (
                    <div className="without__slider">
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