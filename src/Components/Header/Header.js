import React from 'react';
import './Header.css';

import Navbar from './Navbar/Navbar';
import { NavLink, Route } from 'react-router-dom';

class Header extends React.Component {


    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">
                            <NavLink to='/'>
                                <img src={require("./imgs/Asset 13.svg")}
                                    style={{ height: "33px" }} alt="logo">
                                </img>
                            </NavLink>
                        </div>
                        <div className="header__navbar">
                            <Route exact path='/'>
                                <Navbar />
                            </Route>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;