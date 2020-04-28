import React from 'react';
import './MoviePage.css';
import Poster_trailer from '../Poster_trailer/Poster_trailer';
import Description from '../Description/Description';
import Dropdown from '../Dropdown/Dropdown';
import SessionList from '../SessionList/SessionsList';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let allCinemas = [];
let cinemasRate = {};
let allSessions = [];
var id = 0;

//Записує в allCinemas всі кінотатри
async function getCinemas() {
    let response = await fetch('https://ekinoback.herokuapp.com/cinemas');

    if (response.ok) {
        allCinemas = await response.json();
    }
    else {
        console.log("error response: getCinemas");
    }

    for (var i = 0; i < allCinemas.length; i++) {
        cinemasRate[allCinemas[i].place_id] = allCinemas[i].rating
    }

}

getCinemas();

//Перевіряє чи є у об'єкті elem значення з object2
function someIncludeCinema(elem, object2) {
    var result = false;
    for (var i = object2.length - 1; i >= 0; i--) {
        if (object2[i].value == elem.cinema) {
            result = true;
        }
    }
    return result;
}

function someIncludeTech(elem, object2) {
    var result = false;
    for (var i = object2.length - 1; i >= 0; i--) {
        if (object2[i].value == elem.technology) {
            result = true;
        }
    }
    return result;
}

//Фільтр-функції
function filtrCinemas(cinemas) {
    console.log(cinemas);
    for (var i = allSessions.length - 1; i >= 0; i--) {
        if (!someIncludeCinema(allSessions[i], cinemas)) {
            allSessions.splice(i, 1);
        }
    }
}
function filtrTechnologies(technology) {
    console.log(technology);
    console.log(allSessions);
    for (var i = allSessions.length - 1; i >= 0; i--) {
        if (!someIncludeTech(allSessions[i], technology)) {
            allSessions.splice(i, 1);
        }
    }
    console.log(allSessions);
}
function sortByPrice() {
    allSessions.sort((a, b) => a.price - b.price);
}
function sortByTime() {
    for (var i = allSessions.length - 1; i >= 0; i--) {
        const date = new Date(allSessions[i].start_time);
        allSessions[i].start_time = date;
    }
    allSessions.sort((a, b) => a.start_time.getHours() - b.start_time.getHours());
}
function sortByCinemaRate(cinemas) {
    //Додаю поле rate в сесії, щоб посортувати їх
    for (var i = 0; i < allSessions.length; i++) {
        allSessions[i]['rate'] = cinemasRate[allSessions[i].cinema]
    }

    allSessions.sort((a, b) => b.rate - a.rate);
}
//Кінець фільтр-функцій


class MoviePage extends React.Component {

    state = {
        film: '',
        sort: false,
        cinemaChoosen: [],
        technologyChoosen: [],
        sortByPrice: false,
        sortByTime: false,
        sortByCinemaRate: false,
        sortedByPrice: false,
        sortedByTime: false,
        sortedByCinemaRate: false,
        allCinemas: [],
        sessionTodayFilm: [],
        sessionsClicked: false,
        countDate: 0,
        copyAllSessions: true,
        isClickedToClear: false
    }

    static getDerivedStateFromProps(props) {
        return {
            film: props.state.moviePage.films,
        };
    }

    //Колбек функція для Dropdown.js, що повертає об'єкт
    //з обраним фільтром
    updateData = (id, value) => {
        if (id == 2) {
            this.setState({ cinemaChoosen: value });
            this.setState({ copyAllSessions: true });
        }
        else if (id == 1) {
            if (value != null) {
                this.setState({ technologyChoosen: value });
                if (this.state.sortByPrice == false && this.state.sortByTime == false && this.state.sortByCinemaRate == false)
                    if (this.state.cinemaChoosen.length == 0 || value.length > 1) {
                        this.setState({ copyAllSessions: true })
                    }
            }
            else {
                this.setState({ technologyChoosen: [], copyAllSessions: true });
            }

        }
        else if (value.value == 'Date') {
            this.setState({
                sortByTime: true,
                sortByPrice: false,
                sortByCinemaRate: false,
                sortedByPrice: false,
                sortedByCinemaRate: false
            });
        }
        else if (value.value == 'Price') {
            this.setState({
                sortByPrice: true,
                sortByTime: false,
                sortByCinemaRate: false,
                sortedByTime: false,
                sortedByCinemaRate: false
            });
        }
        else if (value.value == 'CinemaRate') {
            this.setState({
                sortByCinemaRate: true,
                sortByTime: false,
                sortByPrice: false,
                sortedByTime: false,
                sortedByPrice: false
            });
        }
        else if (value.id == 'finish') {
            this.setState({
                isClickedToClear: false,
                sessionsClicked: false
            });
        }
    }


    //Робить у стейт-масиві sessionTodayFilm
    //зі string => date
    makeDate = (session_list_to_date) => {
        let list = [];
        console.log(session_list_to_date.length);
        for (var i = 0; i < session_list_to_date.length; i++) {
            let temp = session_list_to_date[i]
            const now = new Date();
            let date = new Date(temp.start_time)
            temp.start_time = date;
            list.push(temp)
        }
        this.setState({ sessionTodayFilm: list });
    }

    //Визивається в onClick в кнопці
    //і робить запит на сеанси сьогоднішні на кіно обране на mainpage
    getSessions = (filmChoosen) => {
        const url = 'https://ekinoback.herokuapp.com/movies/' + id + '/date/2020/27/04/sessions';
        fetch(url)
            .then((data) => data.json())
            .then((data) => {
                this.setState({ sessionTodayFilm: data, sessionsClicked: true })
            });


    }

    clearAllButton = () => {
        this.setState({
            cinemaChoosen: [],
            technologyChoosen: [],
            sortByPrice: false,
            sortByTime: false,
            sortByCinemaRate: false,
            isClickedToClear: true,
            sessionsClicked: false,
            copyAllSessions: true
        });

    }

    //Фільтрує allSessions по обраним фільтрам
    filtrSessions(list) {
        //Робить у стейт-масиві sessionTodayFilm
        //зі string => date
        if (this.state.countDate == 0) {
            this.makeDate(this.state.sessionTodayFilm)
            this.setState({ countDate: 1 });
        }
        //Копіюю sessionTodayFilm у allSessions
        if (this.state.copyAllSessions) {
            console.log("CopySessions")
            allSessions = [];
            allSessions = JSON.parse(JSON.stringify(list));
            this.setState({ copyAllSessions: false });
        }

        //Видаляє з allSessions непотрібні кінотеатри
        if (this.state.cinemaChoosen.length != 0) {
            console.log(this.state.cinemaChoosen);
            filtrCinemas(this.state.cinemaChoosen);
            console.log("filtrCinemas");

        }
        //Видаляє з allSessions непотрібні технології
        if (this.state.technologyChoosen.length != 0) {
            filtrTechnologies(this.state.technologyChoosen);
            console.log("filtrTech");
        }
        //Сортування по ціні
        if (this.state.sortByPrice && !this.state.sortedByPrice) {
            sortByPrice();
            this.setState({ copyAllSessions: false });
            this.setState({ sortedByPrice: true });

        }
        //Сортування по часу: найближчі сеанси
        if (this.state.sortByTime && !this.state.sortedByTime) {
            sortByTime();
            this.setState({ copyAllSessions: false });
            this.setState({ sortedByTime: true });
        }
        //Сортування по рейтингу кінотеатрів
        if (this.state.sortByCinemaRate && !this.state.sortedByCinemaRate) {
            sortByCinemaRate(allCinemas);
            this.setState({ copyAllSessions: false });
            this.setState({ sortedByCinemaRate: true });
        }

    }



    render() {
        let elemToRender = this.state.film[0]; //Інфа про фільм обраний на main page
        id = elemToRender.id //Айдішка фільму з main page
        console.log(elemToRender);

        //Якщо натиснуто кнопку 'знайти сеанси' робиться запит у функції getSessions
        //на усі сеанси сьогодні на обраний фільм з попередньої сторінки
        //в цій же функції стейт-змінна sessionsClicked стає true
        //і в цій if внизу запускається функція filtrSessions, що фільтрує allSessions
        //і залишає тіки те, що потрібно залишається
        if (this.state.sessionsClicked) {
            this.filtrSessions(this.state.sessionTodayFilm);
        }

        return (
            <div>
                <div style={{ marginTop: '40px' }}>
                    <div className="poster-trailer-desription-buttons1">
                        <div className="poster-trailer-desription1">
                            <Poster_trailer
                                poster_link={elemToRender.poster_link}
                                trailer_link={elemToRender.trailer_link}
                            />
                            <Description elemToRender={elemToRender} />
                        </div>
                        <div className="Sessions1">Сеанси</div>
                        <div className='dropdown-sortButton'>
                            <Dropdown cinemas={allCinemas} isClicked={this.state.isClickedToClear} updateData={this.updateData} />
                            <button className='delete-button' onClick={this.clearAllButton}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                            <button className='sort-button' onClick={this.getSessions}>
                                Знайти сеанси
                            </button>
                        </div>
                        <div>
                            <SessionList
                                clicked={this.state.sessionsClicked}
                                film={Object.entries(elemToRender)}
                                cinemas={allCinemas}
                                sessions={allSessions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MoviePage;