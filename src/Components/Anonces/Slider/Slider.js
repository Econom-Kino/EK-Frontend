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
            genresObj.forEach((element, index, arr) => {
                if (index + 1 < arr.length) {
                    element.name = element.name + ',';
                }
                genres.push(element.name);
            });
            return (
                <div key={index * Math.random()} className='anonces__slider__item'>
                    <div className="anonces__slider__item-content" >
                        <Poster  //at the momemt static data
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

                {/* <Slider {...settings}>
                    {itemsToRender}
                    <div className='anonces__slider__item'>
                        <div className="anonces__slider__item-content" >
                            <Poster  //at the momemt static data
                                posterLink={'http://image.tmdb.org/t/p/w600_and_h900_bestv2/sMJ30Hfi8oszMFvGfBQq5ayaXXw.jpg'}
                                filmName={'1917'}
                                age={16}
                                genres={'Екшен'}
                                duration={'1:49'}
                                language={'Українська мова'}
                                imdb={5.4}
                                trailerLink={'https://www.youtube.com/watch?v=OXuyIM-opQU'}
                                premier={''}
                            />
                        </div>
                    </div>
                    <div className='anonces__slider__item'>
                        <div className="anonces__slider__item-content" >
                            <Poster  //at the momemt static data
                                posterLink={'http://image.tmdb.org/t/p/w600_and_h900_bestv2/sMJ30Hfi8oszMFvGfBQq5ayaXXw.jpg'}
                                filmName={'1917'}
                                age={16}
                                genres={'Екшен'}
                                duration={'1:49'}
                                language={'Українська мова'}
                                imdb={5.4}
                                trailerLink={'https://www.youtube.com/watch?v=OXuyIM-opQU'}
                                premier={''}
                            />
                        </div>
                    </div>
                    <div className='anonces__slider__item'>
                        <div className="anonces__slider__item-content" >
                            <Poster  //at the momemt static data
                                posterLink={'http://image.tmdb.org/t/p/w600_and_h900_bestv2/sMJ30Hfi8oszMFvGfBQq5ayaXXw.jpg'}
                                filmName={'1917'}
                                age={16}
                                genres={'Екшен'}
                                duration={'1:49'}
                                language={'Українська мова'}
                                imdb={5.4}
                                trailerLink={'https://www.youtube.com/watch?v=OXuyIM-opQU'}
                                premier={''}
                            />
                        </div>
                    </div>
                    <div className='anonces__slider__item'>
                        <div className="anonces__slider__item-content" >
                            <Poster  //at the momemt static data
                                posterLink={'http://image.tmdb.org/t/p/w600_and_h900_bestv2/sMJ30Hfi8oszMFvGfBQq5ayaXXw.jpg'}
                                filmName={'1917'}
                                age={16}
                                genres={'Екшен'}
                                duration={'1:49'}
                                language={'Українська мова'}
                                imdb={5.4}
                                trailerLink={'https://www.youtube.com/watch?v=OXuyIM-opQU'}
                                premier={''}
                            />
                        </div>
                    </div>
                    <div className='anonces__slider__item'>
                        <div className="anonces__slider__item-content" >
                            <Poster  //at the momemt static data
                                posterLink={'http://image.tmdb.org/t/p/w600_and_h900_bestv2/sMJ30Hfi8oszMFvGfBQq5ayaXXw.jpg'}
                                filmName={'1917'}
                                age={16}
                                genres={'Екшен'}
                                duration={'1:49'}
                                language={'Українська мова'}
                                imdb={5.4}
                                trailerLink={'https://www.youtube.com/watch?v=OXuyIM-opQU'}
                                premier={''}
                            />
                        </div>
                    </div>
                    <div className='anonces__slider__item'>
                        <div className="anonces__slider__item-content" >
                            <Poster  //at the momemt static data
                                posterLink={'http://image.tmdb.org/t/p/w600_and_h900_bestv2/sMJ30Hfi8oszMFvGfBQq5ayaXXw.jpg'}
                                filmName={'1917'}
                                age={16}
                                genres={'Екшен'}
                                duration={'1:49'}
                                language={'Українська мова'}
                                imdb={5.4}
                                trailerLink={'https://www.youtube.com/watch?v=OXuyIM-opQU'}
                                premier={''}
                            />
                        </div>
                    </div>
                </Slider> */}
            </div>
        );
    }
}