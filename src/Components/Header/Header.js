import React from 'react';
import './Header.css';

import Navbar from './Navbar/Navbar';
import { NavLink, Route } from 'react-router-dom';

class Header extends React.Component {

    state = {
        padleft: false,
    }

    render() {
        let padleft = window.location.pathname === '/' ? '15px' : '0';
        return (
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo"
                            style={{ paddingLeft: padleft }}
                        >
                            <NavLink to='/' onClick={() => {
                                this.setState({ padleft: !this.state.padleft });
                                padleft = '15px';
                            }}>
                                <img src={require("./imgs/Asset 13.svg")}
                                    className='header__logo_ing'
                                    alt="logo">
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