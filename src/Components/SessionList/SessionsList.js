import React from 'react';
import Session from '../Session/Session';

function getCinemaName(cinemas, id) {
    for (var i = cinemas.length - 1; i >= 0; i--) {
        if (cinemas[i].place_id === id)
            return cinemas[i].name;
    }
}

let sessionsModified = [];

class SessionsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sessions: this.props.sessions,
            film: this.props.film,
            cinemas: this.props.cinemas
        }
    }

    static getDerivedStateFromProps(props) {
        return { sessions: props.sessions, film: props.film, cinemas: props.cinemas }
    }

    makeObjectFromArray = () => {
        sessionsModified = [];
        for (var i = 0; i < this.state.sessions.length; i++) {
            let temp = { id: i, session: this.state.sessions[i] };
            sessionsModified.push(temp);
        }
    }

    render() {
        this.makeObjectFromArray();
        if (this.props.clicked) {
            return (

                <div>
                    {sessionsModified.map((value, i) => {
                        return (<Session
                            key={Math.random() * i}
                            alldata={false}
                            isClicked={true}
                            time={value.session.start_time}
                            price={value.session.price}
                            tech={value.session.technology}
                            cinema={getCinemaName(this.state.cinemas, value.session.cinema)}
                            buyLink={value.session.ticket_link}
                        />
                        )
                    })}
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}

export default SessionsList;