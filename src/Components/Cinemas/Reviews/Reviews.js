import React from 'react';
import './Reviews.css';

import Review from './Review/Review';

class Reviews extends React.Component {


    render() {
        return (
            <div className="reviews">
                <div className="container">
                    <div className="reviews__inner">
                        <div className="reviews__titel">
                            Відгуки:
                        </div>
                        <div className="reviews__review__list">
                            <Review />
                            <Review />
                        </div>
                        <div className="reviews__btn__inner">
                            <div className="reviews__btn">Всі відгуки</div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Reviews;