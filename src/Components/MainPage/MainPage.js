import React from 'react';
import Posters from '../Posters/Posters';
import Anonces from '../Anonces/Anonces';
import Cinemas from '../Cinemas/Cinemas';
import Data from '../Data/Data';


class MainPage extends React.Component {


    render() {
        return (
            <div>

                <Data />

                <Posters />

                <Anonces />

                <Cinemas />

            </div>
        )
    }
}

export default MainPage;