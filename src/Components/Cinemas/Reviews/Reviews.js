import React from 'react';
import './Reviews.css';

import Review from './Review/Review';
import ReviewsButton from './ReviewsButton/ReviewsButton';


class Reviews extends React.Component {

    state = {
        showMore: false,
        toShow: 2,
    }

    showMoreComments = () => {
        this.state.toShow === 2 ? (
            this.setState({ toShow: 6, showMore: true })
        ) : (
                this.setState({ toShow: 2, showMore: false })
            )
    }

    render() {
        let reviews = Array.from(this.props.reviewsData);
        let reviewsItems = reviews.slice(0, this.state.toShow).map((r, index) => {
            return (
                <Review
                    authorName={r.author_name}
                    profilePhotoUrl={r.profile_photo_url}
                    rating={r.rating}
                    text={r.text}
                    key={index}
                />
            )
        });

        return (
            <div className="reviews">
                <div className="container">
                    <div className="reviews__inner">
                        <div className="reviews__titel">
                            Відгуки:
                        </div>
                        <div className="reviews__review__list">
                            {reviewsItems}
                        </div>
                        <div onClick={this.showMoreComments}>
                            <ReviewsButton show={this.state.showMore} />
                        </div>
                    </div>
                </div>

            </div>
        )


    }
}

export default Reviews;