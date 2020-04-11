import React from 'react';

export default class ReviewsButton extends React.Component {


    render() {
        return (
            <div className="reviews__btn__inner">
                {this.props.show ? (
                    <div className="reviews__btn" >Показати менше</div>
                ) : (
                        <div className="reviews__btn" >Показати ще</div>
                    )}
            </div>
        )
    }
}