import React from 'react';

import Poster from '../Poster/Poster';

import './Posters.css';


class Posters extends React.Component {
    //for fututre dynamic data
    state = {
        posterUrls: [],
        filmNames: [],
        ages: [],
        genres: [],
        durations: [],
        languages: [],
        imdbs: [],
        trailerLinks: [],
        premiers: [],
    }

    render() {
        return ( // at the momment return only one poster for cheking view
            <div id="posters">
                <div className="container">
                    <div className="posters__list">
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
                    <div className="posters__btn__inner">
                        <div className="posters__btn">Всі фільми</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posters;