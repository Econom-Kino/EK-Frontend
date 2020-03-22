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
        return (
            <div style={{ display: 'flex' }}>
                <Slider {...settings}>
                    <div className='anonces__slider__item'>
                        <div className="anonces__slider__item-content" >
                            <Poster  //at the momemt static data
                                posterLink={'./imgs/1917.png'}
                                filmName={'1917'}
                                age={16}
                                genre={'Екшен'}
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
                                posterLink={'./imgs/1917.png'}
                                filmName={'1917'}
                                age={16}
                                genre={'Екшен'}
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
                                posterLink={'./imgs/1917.png'}
                                filmName={'1917'}
                                age={16}
                                genre={'Екшен'}
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
                                posterLink={'./imgs/1917.png'}
                                filmName={'1917'}
                                age={16}
                                genre={'Екшен'}
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
                                posterLink={'./imgs/1917.png'}
                                filmName={'1917'}
                                age={16}
                                genre={'Екшен'}
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
                                posterLink={'./imgs/1917.png'}
                                filmName={'1917'}
                                age={16}
                                genre={'Екшен'}
                                duration={'1:49'}
                                language={'Українська мова'}
                                imdb={5.4}
                                trailerLink={'https://www.youtube.com/watch?v=OXuyIM-opQU'}
                                premier={''}
                            />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}