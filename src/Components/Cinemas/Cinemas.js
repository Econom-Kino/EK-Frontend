import React from 'react';
import './Cinemas.css';

import CinemaLogo from './CinemaLogo/CinemaLogo';
import CinemaDataLeftSide from './CinemaDataLeftSide/CinemaDataLeftSide';
import CinemaDataRightSide from './CinemaDataRightSide/CinemaDataRightSide';
import Reviews from './Reviews/Reviews';
import Spinner from 'react-spinkit';

class Cinemas extends React.Component {

    constructor(props) {
        super(props);

        this.key = process.env.REACT_APP_API_KEY;
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";

        this.state = {
            showdata: false,
            reviewsData: '',
            cinemasData: '',
            cinemaPhotos: '',
            loading: true,
        }

    }

    process = (prom) => {
        prom.then(data => {
            if (data.result) {
                let resp = data.result.reviews;
                this.setState({ reviewsData: resp });
            }
            else if (data.name) {
                this.setState({ cinemasData: data });
            }
            else if (data[0].cinema) {
                this.setState({ cinemaPhotos: data });
            }
        })
    }

    fetchData = (placeId) => {
        let reviewsProm = this.getReviews(placeId);
        let cinemasDataProm = this.getCinemasData(placeId);
        let photosProm = this.getPhotos(placeId);
        Promise.all([reviewsProm, cinemasDataProm, photosProm])
            .then((proms) => {
                proms.forEach((prom) => {
                    this.process(prom.json());
                });
            })
            .then(() => {
                this.setState({ showdata: true, loading: true });
            })
            .catch(() => console.log("Can’t access"));
    }

    getReviews = (place) => {
        this.url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place}&key=${this.key}&fields=review&language=uk`;
        return fetch(this.proxyurl + this.url, { mode: 'cors' });
    }

    getCinemasData = (placeId) => {
        return fetch(` https://ekinoback.herokuapp.com/cinemas/${placeId}`);
    }

    getPhotos = (placeId) => {
        return fetch(`https://ekinoback.herokuapp.com/cinemas/${placeId}/cinema-images`);
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
                this.setState({ loading: false })
                this.fetchData(elem.placeId);
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
                        {this.state.loading ? (
                            this.state.showdata && <div>
                                <div className="cinemas__data">
                                    <CinemaDataLeftSide
                                        mapLongitude={this.state.cinemasData.longitude}
                                        mapLatitude={this.state.cinemasData.latitude}
                                        photos={this.state.cinemaPhotos}
                                    />
                                    <CinemaDataRightSide
                                        cinemaData={this.state.cinemasData}
                                    />
                                </div>
                                <div className="cinemas__reviews">
                                    <Reviews
                                        reviewsData={this.state.reviewsData}
                                    />
                                </div>
                            </div>
                        ) : (
                                <div className='spinner'>
                                    <Spinner name='line-scale-pulse-out-rapid' color='#F2994A' className="my-class" />
                                </div>
                            )}
                    </div>
                </div>
            </div >
        )
    }
}

export default Cinemas;