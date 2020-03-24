import React from 'react';
import './Session.css';




class Session extends React.Component {
    state = {
        alldata: true,
    }

    render() {
        return (
            <div className="session">
                <div className="container">
                    <div className="session__inner">
                        <div className="session__inner__time">
                            16:00 {this.props.alldata && <span>- 23.03.2020</span>}
                        </div>
                        <div className="session__inner__price">
                            60 грн
                        </div>
                        <div className="session__inner__cinemaname">
                            Multiplex: Victoria Gardens
                        </div>
                        <div className="session__inner__buyticket">
                            <a href="https://www.google.com/search?q=%D0%BA%D1%83%D0%BF%D0%B8%D0%B8%D1%82+%D0%BA%D0%B2%D0%B8%D1%82%D0%BE%D0%BA&oq=%D0%BA%D1%83%D0%BF%D0%B8%D0%B8%D1%82+%D0%BA%D0%B2%D0%B8%D1%82%D0%BE%D0%BA&aqs=chrome..69i57j0l7.1885j0j7&sourceid=chrome&ie=UTF-8">Купити квиток</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Session;