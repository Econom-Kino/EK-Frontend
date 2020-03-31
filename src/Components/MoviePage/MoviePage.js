import React from 'react';
import Session from '../Session/Session';


class MoviePage extends React.Component {


    render() {
        return (
            <div>

                <Session alldata={true} />
                <Session />
                <Session />
                <Session />
                <Session />
                <Session />

            </div>
        )
    }
}

export default MoviePage;