import React from 'react';
import './Data.css';

import Posters from '../Posters/Posters';
import Spinner from 'react-spinkit';

class Data extends React.Component {

    state = {
        datas: Array(7).fill(null),
        filmsData: [],
        get: false,
        loading: true,
        active: '',
        activeClassOnToday: 'active__btn',
    }

    getWeekDay(date) {
        let days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        let day = days[date.getDay()];
        let weekday = day === 'нд' || day === 'сб' ? 'weekenddata' : 'notweekenddata';
        let obj = {
            day: day,
            weekday: weekday,
        };
        return obj;
    }

    getFilms(year, day, month) {
        this.setState({ loading: false, activeClass: '' });
        const url = `https://ekinoback.herokuapp.com/movies/date/${year}/${day}/${month}`;
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

            return (
                <div
                    key={Math.random() * index}
                    className='databutton'
                    onClick={() => this.getFilms(date.getFullYear(), date.getDate(), temp)}
                >
                    <button
                        onClick={() => this.setState({ active: index, activeClassOnToday: '' })}
                        className={`databutton__btn ${dateObj.weekday} ${activeClass} ${index === 0 ? this.state.activeClassOnToday : ''} singldate`}>
                        {dateStr}
                    </button>
                </div >
            )
        })

        let serachBtn = {
            color: '#5F5F5F',
            marginRight: '15px',
            padding: '10px',
            width: 'auto'
        };
        return (
            <div className="data" id="data" >
                <div className="container">
                    <div className="data__inner">
                        <div className="data__list">
                            {dataToRender}
                            <div className="all__data">
                                <button
                                    onClick={() => this.setState({ activeClassOnToday: -1, active: -1 })}
                                    className={`alldata notweekenddata databutton__btn`}>Всі дати</button>
                            </div>
                        </div>
                        <div className="data__search">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                let inputedText = e.target.lastChild.value;
                                this.getFilmsBySearch(inputedText);
                                e.target.lastChild.value = '';
                            }}>
                                <input
                                    style={serachBtn}
                                    type="submit"
                                    value="Шукати"
                                    className={`databutton__btn`}
                                    onClick={() => this.setState({ activeClassOnToday: -1, active: -1 })}
                                />
                                <input placeholder="Пошук" className="data__search__input" type="text" required />
                            </form>
                        </div>
                    </div>
                    {this.state.loading ? (
                        <Posters
                            state={this.props.state}
                            films={this.state.filmsData}
                            get={this.state.get}
                            store={this.props.store}
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