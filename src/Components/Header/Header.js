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
                            <img src={require("./imgs/Asset 13.svg")}
                                style={{ height: "33px" }} alt="logo">
                            </img>
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