import React from 'react';
import './Main.css';

import Posters from '../Posters/Posters';

import Footer from '../Footer/Footer';

class Main extends React.Component {


    render() {
        return (
            <div>
                <Posters />

                <Footer />
            </div>
        )
    }
}

export default Main;