import React from 'react';
import './CinemaPhotos.css';




class CinemaPhotos extends React.Component {

    render() {
        let photos = Array.from(this.props.photos);
        return (
            <div className="cinema__photos">
                {photos.map((elem, id) => {
                    return (
                        <div key={id * Math.random()} className="cinema__photo" >
                            <img className='cinema__img' alt='cinema' src={elem.image_link}></img>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CinemaPhotos;