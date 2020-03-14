import React from 'react';

import Poster from '../Poster/Poster';
import TrailerButton from '../Poster/TrailerButton/TrailerButton'


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
        return (
            <div>
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
                <TrailerButton />
            </div>
        )
    }
}

export default Posters;