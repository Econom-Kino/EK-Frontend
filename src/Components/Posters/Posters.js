import React from 'react';

import Poster from '../Poster/Poster';

import './Posters.css';


class Posters extends React.Component {
    //for fututre dynamic data
    state = {
        posterUrls: [],
        filmNames: [],
        ages: [],
        genre: [],
        durations: [],
        languages: [],
        imdbs: [],
        trailerLinks: [],
        premiers: [],
    }

    render() {
        return ( // at the momment return only one poster for cheking view
            <div>
                <div className="container">
                    <div className="posters__list">
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
            </div>
        )
    }
}

export default Posters;