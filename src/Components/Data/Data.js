import React from 'react';
import './Data.css';

import DataButton from './DataButton/DataButton';
class Data extends React.Component {

    state = {
        data: 'Нд 15.03',
    }

    render() {
        return (
            <div className="data" id="data">
                <div className="container">
                    <div className="data__inner">
                        <div className="data__list">
                            {/* обернути в дів і вішати event або в середені кнопки
                            побачу потім як зручніше буде */}
                            <DataButton data={this.state.data} day={'notweekenddata'} />
                            <DataButton data={this.state.data} day={'notweekenddata'} />
                            <DataButton data={this.state.data} day={'notweekenddata'} />
                            <DataButton data={this.state.data} day={'notweekenddata'} />
                            <DataButton data={this.state.data} day={'notweekenddata'} />
                            <DataButton data={this.state.data} day={'weekenddata'} />
                            <DataButton data={this.state.data} day={'weekenddata'} />
                            {/* //withoucycle */}
                            <div className="all__data">
                                <DataButton data={'Всі дати'} day={'notweekenddata'} type={'alldata'} />
                            </div>
                        </div>
                        <div className="data__search">
                            <input placeholder="Пошук" className="data__search__input" type="text" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Data;