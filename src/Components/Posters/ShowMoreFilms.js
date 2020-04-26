import React from 'react';

export default class ShowMoreFilms extends React.Component {


    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                {this.props.show ? (
                    <div className="reviews__btn" >Показати менше</div>
                ) : (
                        <div className="reviews__btn" >Всі фільми</div>
                    )}
            </div>
        )
    }
}