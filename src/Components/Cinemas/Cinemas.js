import React from 'react';
import './Cinemas.css';

import CinemaLogo from './CinemaLogo/CinemaLogo';
import CinemaDataLeftSide from './CinemaDataLeftSide/CinemaDataLeftSide';
import CinemaDataRightSide from './CinemaDataRightSide/CinemaDataRightSide';

class Cinemas extends React.Component {


    render() {
        return (
            <div className="cinemas" id="cinemas">
                <div className="container">
                    <div className="cinemas__inner">
                        <div className="cinemas__tittel">
                            Кінотеатри
                        </div>
                        <div className="cinemas__logo__list">
                            <CinemaLogo cinemaLogoSrc={"viktoria"} bgText={'Multiplex: Viktoria Gargens'} />
                            <CinemaLogo cinemaLogoSrc={"spartak"} bgText={'Multiplex: Spartak'} />

                            <CinemaLogo cinemaLogoSrc={"king_cross"} bgText={'Планета Кіно: King Cross'} />
                            <CinemaLogo cinemaLogoSrc={"forum"} bgText={'Планета Кіно: Forum Lviv'} />

                            <CinemaLogo cinemaLogoSrc={"kinopalce"} bgText={'Кінопалац'} />
                            <CinemaLogo cinemaLogoSrc={"dovjenka"} bgText={'Кінопалац ім. Довженка'} />
                        </div>
                        <div className="cinemas__data">
                            <CinemaDataLeftSide />
                            <CinemaDataRightSide />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Cinemas;