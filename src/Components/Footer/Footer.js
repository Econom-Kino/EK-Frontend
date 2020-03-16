import React from 'react';

import './Footer.css';


class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__text">
                            made with love by
                            <span className="footer__text_span"> Econom Kino</span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;