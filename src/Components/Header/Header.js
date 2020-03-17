import React from 'react';
import './Header.css';

import Navbar from './Navbar/Navbar';

class Header extends React.Component {


    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">
                            Econom Kino
                        </div>
                        <div className="header__navbar">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;