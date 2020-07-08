import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';
import MoviePage from './Components/MoviePage/MoviePage';
import { Route } from 'react-router-dom';


class App extends React.Component {


    render() {
        return (
            <div>
                <Header />
                <Route exact path='/' component={MainPage} />

                <Route path='/movie' component={MoviePage} />
                <Footer />
            </div>
        )
    }
}

export default (App);
