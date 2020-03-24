import React from 'react';
import './Reviews.css';

import Review from './Review/Review';

class Reviews extends React.Component {

    state = {
        showMoreComments: false,
    }


    render() {
        return (
            <div className="reviews">
                <div className="container">
                    <div className="reviews__inner">
                        <div className="reviews__titel">
                            Відгуки:
                        </div>
                        <div className="reviews__review__list">
                            <Review
                                authorName={this.props.names[0]}
                                profilePhotoUrl={this.props.profilePhotoUrls[0]}
                                rating={this.props.ratings[0]}
                                text={this.props.texts[0]}
                            />
                            <Review
                                authorName={this.props.names[1]}
                                profilePhotoUrl={this.props.profilePhotoUrls[1]}
                                rating={this.props.ratings[1]}
                                text={this.props.texts[1]}
                            />
                            {this.state.showMoreComments &&
                                <Review
                                    authorName={this.props.names[2]}
                                    profilePhotoUrl={this.props.profilePhotoUrls[2]}
                                    rating={this.props.ratings[2]}
                                    text={this.props.texts[2]}
                                />}
                            {this.state.showMoreComments &&
                                <Review
                                    authorName={this.props.names[3]}
                                    profilePhotoUrl={this.props.profilePhotoUrls[3]}
                                    rating={this.props.ratings[3]}
                                    text={this.props.texts[3]}
                                />}
                            {this.state.showMoreComments &&
                                <Review
                                    authorName={this.props.names[4]}
                                    profilePhotoUrl={this.props.profilePhotoUrls[4]}
                                    rating={this.props.ratings[4]}
                                    text={this.props.texts[4]}
                                />}


                        </div>
                        <div className="reviews__btn__inner">
                            <div className="reviews__btn" onClick={() => {
                                this.setState({
                                    showMoreComments: !this.state.showMoreComments,
                                })
                            }}>Показати останні 5 коментарів</div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Reviews;