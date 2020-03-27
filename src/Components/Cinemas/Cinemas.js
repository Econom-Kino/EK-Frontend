import React from 'react';
import './Cinemas.css';

import CinemaLogo from './CinemaLogo/CinemaLogo';
import CinemaDataLeftSide from './CinemaDataLeftSide/CinemaDataLeftSide';
import CinemaDataRightSide from './CinemaDataRightSide/CinemaDataRightSide';
import Reviews from './Reviews/Reviews';

class Cinemas extends React.Component {

    constructor(props) {
        super(props);

        this.key = 'AIzaSyCb5wq8hg5maYc3FcIsJHFNwMa9S29D0dE';
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";

        this.state = {
            showdata: false,
            reviewsData: '',

        }

    }

    places = {
        vg: 'ChIJl3xz8QnnOkcReSOln9d6RqY',
        spartak: 'ChIJ4dGDScndOkcRK6iYsuY5rCk',
        forum: 'ChIJif8CqgvdOkcRxDok8ta8w7Y',
        kk: 'ChIJG3CADybmOkcRkBn2_jOgbyA',
        palace: 'ChIJjW4PlXLdOkcRH4w0juRF9Ww',
        dovjenka: 'ChIJ3X6gOm3oOkcRirf_eSmxXSI',
    };

    testFunk = (place) => {
        this.setState({ showdata: true });
        this.url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place}&key=${this.key}&fields=review&language=uk`;
        fetch(this.proxyurl + this.url, { mode: 'cors' })
            .then(data => data.json())
            .then(data => {
                let resp = data.result.reviews;
                this.setState({ reviewsData: resp })
            })
            .catch(() => console.log("Can’t access " + this.url + " response. Blocked by browser?"))

    }


    render() {
        return (
            <div className="cinemas" id="cinemas">
                <div className="container">
                    <div className="cinemas__inner">
                        <div className="cinemas__tittel">
                            Кінотеатри
                        </div>
                        <div className="cinemas__logo__list">

                            <div onClick={() => this.testFunk(this.places.vg)} >
                                <CinemaLogo cinemaLogoSrc={"viktoria"} bgText={'Multiplex: Viktoria Gargens'} />
                            </div>
                            <div onClick={() => this.testFunk(this.places.spartak)}>
                                <CinemaLogo cinemaLogoSrc={"spartak"} bgText={'Multiplex: Spartak'} />
                            </div>
                            <div onClick={() => this.testFunk(this.places.kk)}>
                                <CinemaLogo cinemaLogoSrc={"king_cross"} bgText={'Планета Кіно: King Cross'} />
                            </div>
                            <div onClick={() => this.testFunk(this.places.forum)}>
                                <CinemaLogo cinemaLogoSrc={"forum"} bgText={'Планета Кіно: Forum Lviv'} />
                            </div>
                            <div onClick={() => this.testFunk(this.places.palace)}>
                                <CinemaLogo cinemaLogoSrc={"kinopalce"} bgText={'Кінопалац'} />
                            </div>
                            <div onClick={() => this.testFunk(this.places.dovjenka)}>
                                <CinemaLogo cinemaLogoSrc={"dovjenka"} bgText={'Кінопалац ім. Довженка'} />
                            </div>
                        </div>
                        {this.state.showdata &&
                            <div className="cinemas__data">
                                <CinemaDataLeftSide />
                                <CinemaDataRightSide />
                            </div>}
                        {this.state.showdata &&
                            <div className="cinemas__reviews">
                                {this.state.showdata && <Reviews
                                    reviewsData={this.state.reviewsData}
                                />}
                            </div>
                        }


                    </div>
                </div>
            </div >
        )
    }
}

export default Cinemas;