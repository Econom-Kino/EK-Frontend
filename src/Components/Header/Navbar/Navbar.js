import React from 'react';
import { Link } from "react-scroll";

import './Navbar.css';


class Navbar extends React.Component {


    render() {
        return (
            <nav className="navbar__nav">
                <ul className="navbar__ul">
                    <li className="navbar__li"><Link
                        // activeClass="active" додає клас 
                        to="posters" //до id
                        // spy={true} робить вибраною
                        offset={40} //додаткові пікселі прокрутки
                        smooth={true} //анімація
                        duration={1500} //час
                    >Афіша</Link>
                    </li>
                    <li className="navbar__li"><Link
                        // activeClass="active" додає клас 
                        to=""
                        // spy={true} робить вибраною
                        //offset={70} додаткові пікселі прокрутки
                        smooth={true} //анімація
                        duration={1500} //час
                    >Анонси</Link>
                    </li>
                    <li className="navbar__li"><Link
                        // activeClass="active" додає клас 
                        to=""
                        // spy={true} робить вибраною
                        //offset={70} додаткові пікселі прокрутки
                        smooth={true} //анімація
                        duration={1500} //час
                    >Кінотеатри</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;


