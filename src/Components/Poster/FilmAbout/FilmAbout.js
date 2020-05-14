import React from 'react';
import './FilmAbout.css';
import TrailerButton from '../TrailerButton/TrailerButton'

class FilmAbout extends React.Component {




    render() {
        return (
            <div className="film__about">
                <p className="film_about_p">Вік: {`${this.props.age}+`}</p>
                <p className="film_about_p">Жанри: {this.props.genres}</p>
                <p className="film_about_p">Тривалість: {this.props.duration}</p>
                <p className="film_about_p">Мова: {this.props.language}</p>
                <p className="film_about_p">Imdb: {this.props.imdb}</p>
                <TrailerButton
                    trailerLink={this.props.trailerLink}
                />
            </div>
        )
    }
}

export default FilmAbout;