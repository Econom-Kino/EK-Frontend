import React from 'react';
import './Data.css';
import Posters from '../Posters/Posters';
import Spinner from 'react-spinkit';

class Data extends React.Component {

    constructor(props) {
        super(props);
        this.now = new Date();
        this.date = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
        this.state = {
            datas: Array(7).fill(null),
            filmsData: [],
            get: false,
            loading: true,
            active: '',
            activeClassOnToday: 'active__btn',
            date: {
                year: this.date.getFullYear(),
                day: this.date.getDate(),
                month: this.date.getMonth() + 1 < 10 ? `0${this.date.getMonth() + 1}` : `${this.date.getMonth()}`,
            },
        }
    }



    getWeekDay(date) {
        let days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        let day = days[date.getDay()];
        let weekday = day === 'Нд' || day === 'Сб' ? 'weekenddata' : 'notweekenddata';
        let obj = {
            day: day,
            weekday: weekday,
        };
        return obj;
    }

    getFilms(date) {
        this.setState({ loading: false, activeClass: '' });
        const url = `https://ekinoback.herokuapp.com/movies/date/${date.year}/${date.day}/${date.month}`;
        fetch(url)
            .then((data) => data.json())
            .then((data) => {
                this.setState({ filmsData: data, get: true, loading: true, date: date });
            })
    }

    getAllData() {
        this.setState({ loading: false, activeClass: '' });
        const url = 'https://ekinoback.herokuapp.com/movies/in-rolling';
        fetch(url)
            .then((data) => data.json())
            .then((data) => {
                this.setState({ filmsData: data, get: true, loading: true, });
            })
    }

    getFilmsBySearch(searchText) {
        this.setState({ loading: false });
        const headers = {
            'Content-Type': 'application/json',
        };
        const body = {
            name: searchText,
        };

        fetch('https://ekinoback.herokuapp.com/movies/search', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers,
        })
            .then((data) => data.json())
            .then((data) => {
                if (data.length === 0) {
                    alert(`Пошук по ${searchText} не дав результатів`);
                    this.setState({ loading: true });
                }
                else {
                    this.setState({ filmsData: data, get: true, loading: true });
                }
            })
            .catch((e) => console.log(e));
    }

    render() {
        let dataToRender = this.state.datas.map((el, index) => {
            const now = new Date();
            let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + index);
            let temp = date.getMonth();
            let activeClass = '';
            if (temp + 1 < 10) {
                temp = `0${temp + 1}`;
            }
            let dateObj = this.getWeekDay(date);
            let dateStr = `${dateObj.day} ${date.getDate()}.${temp}`;
            activeClass = this.state.active === index ? 'active__btn' : 'notactive';
            let dateOf = {
                year: date.getFullYear(),
                day: date.getDate(),
                month: temp,
            }
            this.setState()

            return (
                <div
                    key={Math.random() * index}
                    className='databutton'
                    onClick={() => this.getFilms(dateOf)}
                >
                    <button
                        onClick={() => this.setState({ active: index, activeClassOnToday: '' })}
                        className={`databutton__btn ${dateObj.weekday} ${activeClass} ${index === 0 ? this.state.activeClassOnToday : ''} singldate`}>
                        {dateStr}
                    </button>
                </div >
            )
        })


        return (
            <div className="data" id="data" >
                <div className="container">
                    <div className="data__inner">
                        <div className="data__list">
                            {dataToRender}
                            <div className="all__data">
                                <button
                                    onClick={() => {
                                        this.setState({ activeClassOnToday: -1, active: -1 });
                                        this.getAllData();
                                    }}
                                    className={`alldata notweekenddata databutton__btn`}>Всі дати</button>
                            </div>
                        </div>
                        <div className="data__search">
                            <form
                                style={{ display: 'flex' }}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    let inputedText = e.target.firstChild.value;
                                    this.getFilmsBySearch(inputedText);
                                    e.target.lastChild.value = '';
                                }}>
                                <input placeholder="Пошук" className="data__search__input" type="text" required />
                                <button
                                    type="submit"
                                    onClick={() => {
                                        this.setState({ activeClassOnToday: -1, active: -1 });
                                    }}
                                    className="search__btn"
                                >
                                    <img
                                        style={{ width: '40px' }}
                                        src={require('./search.png')} alt='search'></img>
                                </button>
                            </form>
                        </div>
                    </div>
                    {this.state.loading ? (
                        <Posters
                            state={this.props.state}
                            films={this.state.filmsData}
                            get={this.state.get}
                            store={this.props.store}
                            date={this.state.date}
                        />
                    ) : (
                            <div className='spinner'>
                                <Spinner name='line-scale-pulse-out-rapid' color='#F2994A' className="my-class" />
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Data;