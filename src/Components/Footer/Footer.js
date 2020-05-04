import React from 'react';

import './Footer.css';


class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__text">
                            <span className="footer__text__span">© 2020 </span> Made with 💚 by EK-Team
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;