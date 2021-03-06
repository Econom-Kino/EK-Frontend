import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


import './Map.css';


class MapWrapper extends React.Component {

    render() {
        const style = {
            width: 'inherit',
            height: 'inherit',
            borderRadius: '35px',
            boxShadow: '19px 19px 38px rgba(201, 201, 201, 0.7), -19px -19px 38px #FFFFFF'
        }

        let lng = this.props.mapLongitude;
        let lat = this.props.mapLatitude;

        return (

            <div className='cinema__map'>
                <Map google={this.props.google} zoom={15} style={style}
                    initialCenter={{
                        lat: lat,
                        lng: lng
                    }}
                    center={{
                        lat: lat,
                        lng: lng
                    }}
                >
                    <Marker
                        position={{ lat: lat, lng: lng }} />

                </Map>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_API_KEY),
    language: 'uk'
})(MapWrapper)