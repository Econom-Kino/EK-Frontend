import React from 'react';
import './Session.css';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMoneyBillWaveAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";





class Session extends React.Component {
    state = {
        alldata: true,
    }

    render() {
        let date = new Date(this.props.time);
        let hours = date.getHours();
        var minutes = date.getMinutes();
        var glasses = true;    
        if(this.props.tech == '2D'){
            glasses = false;
        }
        var fourdx = false
        if(this.props.tech == '4DX'){
            fourdx = true;
        }
        if (this.props.isClicked){            
                return (
                    <div className="session">
                        <div className="container">
                            <div className="session__inner">
                                <div className="session__inner__time" style={{alignSelf: 'flex-start'}}>
                                    <FontAwesomeIcon icon={faClock} color={'rgb(0,0,0)'}/>  {'   '}{hours}:{minutes}0  {this.props.alldata && <span>- 23.03.2020</span>}
                                </div>
                                <div className="session__inner__price" >
                                    <FontAwesomeIcon icon={faMoneyBillWaveAlt} color={"#427d2d"}/> {this.props.price} грн.
                                </div>
                                <div className="session__inner__price">
                                    {this.props.tech}{' '}
                                    {glasses && <FontAwesomeIcon icon={faVrCardboard} color={"#4b57c3"}/>}{' '}
                                    {fourdx && <FontAwesomeIcon icon={faTint} color={"#4493cc"}/>}{' '}
                                    {fourdx && <FontAwesomeIcon icon={faWind} color={"#4493cc"}/>}
                                </div>
                                <div className="session__inner__cinemaname">                                    
                                    {<img src={require('./camera1.png')} className="camera"/>}{this.props.cinema}                                  
                                </div>
                                <div className="session__inner__buyticket">
                                     <a href={this.props.buyLink}>Купити квиток</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                )            
        }
        else {
            return(<div></div>)
        }
    }
}

export default Session;