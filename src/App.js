import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';
import MoviePage from './Components/MoviePage/MoviePage';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route exact path='/' render={() => <MainPage />} />

                <Route path='/movie' render={() => <MoviePage />} />
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;