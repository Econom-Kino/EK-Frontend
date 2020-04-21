import React from 'react';
import Spinner from 'react-spinkit';
import Poster from '../Poster/Poster';

import './Posters.css';
import ShowMoreFilms from './ShowMoreFilms';


class Posters extends React.Component {
    state = {
        films: [],
        loading: true,
        toShow: 12,
        showMore: false,
    }

    showMoreFilms = () => {
        this.state.toShow === 12 ? (
            this.setState({ toShow: this.state.films.length, showMore: true })
        ) : (
                this.setState({ toShow: 12, showMore: false })
            )
    }

    componentDidMount() {
        this.setState({ loading: false });
        fetch('https://ekinoback.herokuapp.com/movies/getToday/')
            .then((data) => data.json())
            .then((data) => {
                this.setState({ films: data, loading: true })
            })
    }


    static getDerivedStateFromProps(props) {
        if (props.get) {
            return {
                films: props.films,
            };
        }
        else {
            return {};
        }
    }

    render() {
        let items = Array.from(this.state.films);
        let itemsToRender = items.slice(0, this.state.toShow).map((el, index) => {
            let age = el.age ? `${el.age}` : '0';
            let genresObj = el.genre_names;
            let genres = []
            genresObj.forEach((element, index, arr) => {
                if (arr.length === 1 || index === arr.length - 1) {
                    element.name = `${element.name} `;
                }
                else {
                    element.name = element.name + ',';
                }
                genres.push(element.name);
            });
            return (
                <div key={index * Math.random()} className='poster'>
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

            )
        })
        return (
            <div id="posters">
                <div className="container">
                    <div className="posters__list">
                        {this.state.loading ? (
                            itemsToRender
                        ) : (
                                <div style={{ margin: '0 auto' }}>
                                    <Spinner name='line-scale-pulse-out-rapid' color='#F2994A' className="my-class" />
                                </div>
                            )}

                    </div>
                    <div className="posters__btn__inner">
                        {items.length > 12 ? (
                            <div
                                onClick={this.showMoreFilms}
                                className="posters__btn">
                                <ShowMoreFilms show={this.state.showMore} />
                            </div>

                        ) : (
                                <div></div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Posters;