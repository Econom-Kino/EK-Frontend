import React from 'react';
import './Reviews.css';

import Review from './Review/Review';
import ReviewsButton from './ReviewsButton/ReviewsButton';


class Reviews extends React.Component {

    state = {
        showMoreComments: false,
        toShowOnStart: 2,
    }

    render() {
        let reviews = Array.from(this.props.reviewsData);

        return (
            <div className="reviews">
                <div className="container">
                    <div className="reviews__inner">
                        <div className="reviews__titel">
                            Відгуки:
                        </div>
                        <div className="reviews__review__list">

                            {reviews.map((r, index) => {
                                if (this.state.showMoreComments) {
                                    return (
                                        <Review
                                            authorName={r.author_name}
                                            profilePhotoUrl={r.profile_photo_url}
                                            rating={r.rating}
                                            text={r.text}
                                            key={index}
                                        />
                                    )
                                }
                                else {
                                    if (index < this.state.toShowOnStart)
                                        return (
                                            <Review
                                                authorName={r.author_name}
                                                profilePhotoUrl={r.profile_photo_url}
                                                rating={r.rating}
                                                text={r.text}
                                                key={index}
                                            />
                                        )
                                    else return <div key={index}></div>
                                }
                            })}

                        </div>
                        <div onClick={() => {
                            this.setState({
                                showMoreComments: !this.state.showMoreComments,
                            })
                        }}>
                            <ReviewsButton show={this.state.showMoreComments} />
                        </div>
                    </div>
                </div>

            </div>
        )


    }
}

export default Reviews;