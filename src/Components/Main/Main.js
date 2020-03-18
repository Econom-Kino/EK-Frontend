import React from 'react';
import './Main.css';

import Header from '../Header/Header';
import Posters from '../Posters/Posters';
import Footer from '../Footer/Footer';
import Anonces from '../Anonces/Anonces';

class Main extends React.Component {


    render() {
        return (
            <div>
                <Header />

                <Posters />

                <Anonces />

                <Footer />
            </div>
        )
    }
}

export default Main;