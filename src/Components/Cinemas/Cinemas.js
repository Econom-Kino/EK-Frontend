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
            cinemasData: '',
            cinemaPhotos: '',

        }

    }

    getReviews = (place) => {
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

    getCinemasData = (placeId) => {
        fetch(`http://ekinoback.herokuapp.com/cinemas/place_id/${placeId}/`)
            .then(data => data.json())
            .then(data => {
                this.setState({ cinemasData: data });
            })
            .catch(() => console.log("Can’t access"));
    }

    getPhotos = (placeId) => {
        fetch(`http://ekinoback.herokuapp.com/cinema-images/cinema/${placeId}/`)
            .then(data => data.json())
            .then(data => {
                this.setState({ cinemaPhotos: data });
            })
            .catch(() => console.log("Can’t access"));
    }

    cinemas = [
        { placeId: 'ChIJl3xz8QnnOkcReSOln9d6RqY', cinemaLogoSrc: 'viktoria', bgText: 'Multiplex: Viktoria Gargens' },
        { placeId: 'ChIJ4dGDScndOkcRK6iYsuY5rCk', cinemaLogoSrc: 'spartak', bgText: 'Multiplex: Spartak' },
        { placeId: 'ChIJG3CADybmOkcRkBn2_jOgbyA', cinemaLogoSrc: 'king_cross', bgText: 'Планета Кіно: King Cross' },
        { placeId: 'ChIJif8CqgvdOkcRxDok8ta8w7Y', cinemaLogoSrc: 'forum', bgText: 'Планета Кіно: Forum Lviv' },
        { placeId: 'ChIJjW4PlXLdOkcRH4w0juRF9Ww', cinemaLogoSrc: 'kinopalce', bgText: 'Кінопалац' },
        { placeId: 'ChIJ3X6gOm3oOkcRirf_eSmxXSI', cinemaLogoSrc: 'dovjenka', bgText: 'Кінопалац ім. Довженка' },
    ];

    cinemasElems = this.cinemas.map((elem, id) => {
        return (
            <div key={id * Math.random()} onClick={() => {
                this.getReviews(elem.placeId);
                this.getCinemasData(elem.placeId);
                this.getPhotos(elem.placeId);
            }}>
                <CinemaLogo cinemaLogoSrc={elem.cinemaLogoSrc} bgText={elem.bgText} />
            </div>
        )
    })

    render() {
        return (
            <div className="cinemas" id="cinemas">
                <div className="container">
                    <div className="cinemas__inner">
                        <div className="cinemas__tittel">
                            Кінотеатри
                        </div>
                        <div className="cinemas__logo__list">
                            {this.cinemasElems}
                        </div>
                        {this.state.showdata &&
                            <div className="cinemas__data">

                                <CinemaDataLeftSide
                                    mapLongitude={this.state.cinemasData.longitude}
                                    mapLatitude={this.state.cinemasData.latitude}
                                    photos={this.state.cinemaPhotos}
                                />
                                <CinemaDataRightSide
                                    cinemaData={this.state.cinemasData}
                                />
                            </div>}
                        {this.state.showdata &&
                            <div className="cinemas__reviews">
                                <Reviews
                                    reviewsData={this.state.reviewsData}
                                />
                            </div>
                        }


                    </div>
                </div>
            </div >
        )
    }
}

export default Cinemas;