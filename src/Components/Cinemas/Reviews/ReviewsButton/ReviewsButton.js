import React from 'react';

export default class ReviewsButton extends React.Component {


    render() {
        if (!this.props.show) {
            return (
                <div className="reviews__btn__inner">
                    <div className="reviews__btn" >Показати ще</div>
                </div>
            )
        }
        else {
            return (
                <div className="reviews__btn__inner">
                    <div className="reviews__btn" >Показати менше</div>
                </div>
            )
        }
    }
}