import React from 'react';
import './Anonces.css';
import Spinner from 'react-spinkit';

import Slider from './Slider/Slider';

class Anonces extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            announcesFilms: [],
            loading: true,
        }

        this.url = 'https://ekinoback.herokuapp.com/movies/announces';
    }

    componentDidMount() {
        this.setState({ loading: false });
        fetch(this.url)
            .then((data) => data.json())
            .then((data) => {
                this.setState({ announcesFilms: data, loading: true });
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="anonces" id="anonces">
                <div className="container">
                    <div className="anonces__inner">
                        <div className="anonces__titel">
                            Анонси
                        </div>
                        <div className='anonces__slider'>
                            {this.state.loading ? (
                                <Slider
                                    state={this.props.state}
                                    store={this.props.store}
                                    announcesFilms={this.state.announcesFilms} />
                            ) : (
                                    <div className='spinner'>
                                        <Spinner name='line-scale-pulse-out-rapid' color='#F2994A' className="my-class" />
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Anonces;