import React from 'react';
import './CinemaPhotos.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


class CinemaPhotos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };

    }

    render() {
        const { photoIndex, isOpen } = this.state;
        let images = Array.from(this.props.photos).map((el) => {
            return el.image_link;
        })
        return (
            <div className="cinema__photos">
                {images.map((elem, id) => {
                    return (
                        <div key={id * Math.random()} className="cinema__photo" >
                            <img
                                onClick={() => this.setState({
                                    isOpen: true,
                                    photoIndex: id,
                                })}
                                className='cinema__img scale' alt='cinema' src={elem}></img>
                        </div>
                    )
                })}

                {isOpen && (
                    <Lightbox
                        enableZoom={false}
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        )
    }
}

export default CinemaPhotos;