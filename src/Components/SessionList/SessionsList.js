import React from 'react';
import Session from '../Session/Session';

/*


/*function sendRequest(method, url) {
    return fetch(url).then(response => {
        return response.json()
    })
}

function writeData(array, cinemas) {
    for (var i = 1; i <= array.length; i++) {
        cinemas.push(array[i]);
    }   
}

function getCinemas() {
    sendRequest('GET', 'https://ekinoback.herokuapp.com/cinemas')
        .then(data => writeData(data, cinemasList))
        .catch(err => console.log(err))
}

/*function getSessionByMovieAndDate (film_id) {
    var url = 'https://ekinoback.herokuapp.com/movies/'+film_id+'/date/2020/24/04/sessions'
    sendRequest('GET', url)
    .then(data => writeData(data, sessionList))
    .catch(err => console.log(err)) 
}*/


function getCinemaName(cinemas, id){
    for (var i = cinemas.length-1; i >=0 ; i--) {
        if(cinemas[i].place_id == id)
            return cinemas[i].name;
    }
}
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
       return {sessions: props.sessions, film: props.film, cinemas: props.cinemas}
    }

    render(){
    if (this.props.clicked){
        return(
            
                <div>
                    {this.state.sessions.map((session) => {
                        return (<Session
                        alldata={false}
                        isClicked={true}
                        time={session.start_time}
                        price={session.price}
                        tech={session.technology}
                        cinema={getCinemaName(this.state.cinemas, session.cinema)}
                        buyLink={session.ticket_link}               
                        />
                        )
                    })}
                </div>
            )
    } 
    else {
            return(<div></div>)
        }

    

    }
}

export default SessionsList;