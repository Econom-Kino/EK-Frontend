import React from 'react';
import './Poster.css';
import FilmAbout from './FilmAbout/FilmAbout';
import { NavLink } from 'react-router-dom';


class Poster extends React.Component {

    state = {
        mouseEnter: false,
        isBlur: 'none',
        bgColor: 'none',
    }

    render() {
        return (
            <div className="poster">
                <div className="poster__inner"
                    onMouseEnter={() => this.setState({ mouseEnter: true, isBlur: 'blur(35px)', bgColor: '#212121' })}
                    onMouseLeave={() => this.setState({ mouseEnter: false, isBlur: 'none', bgColor: 'none' })}
                >

                    {this.state.mouseEnter &&
                        <FilmAbout
                            age={this.props.age}
                            genres={this.props.genres}
                            duration={this.props.duration}
                            language={this.props.language}
                            imdb={this.props.imdb}
                            trailerLink={this.props.trailerLink}

                        />
                    }
                    <NavLink to={`/movie/${this.props.id}`}>
                        <div className="poster__img"
                            style={{
                                backgroundColor: `${this.state.bgColor}`,
                            }}
                        >
                            <img src={this.props.posterLink} alt={this.props.filmName}
                                style={{
                                    filter: `${this.state.isBlur}`,
                                    width: '100%'
                                }} />
                        </div>

                        <div className="poster__titel">
                            {this.props.filmName}
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Poster;