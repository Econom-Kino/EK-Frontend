import React from 'react';
import './Main.css';

import Header from '../Header/Header';
import Posters from '../Posters/Posters';
import Footer from '../Footer/Footer';
import Anonces from '../Anonces/Anonces';
import Data from '../Data/Data';
import Cinemas from '../Cinemas/Cinemas';

import Session from '../Session/Session';

class Main extends React.Component {


    render() {
        return (
            <div>
                <Header />

                <Data />

                <Posters />

                <Anonces />

                <Cinemas />

                <Footer />

                {/* <Session alldata={true} />
                <Session />
                <Session />
                <Session />
                <Session />
                <Session /> */}

            </div>
        )
    }
}

export default Main;