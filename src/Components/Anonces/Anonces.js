import React from 'react';
import './Anonces.css';

import Slider from './Slider/Slider';

class Anonces extends React.Component {


    render() {
        return (
            <div className="anonces" id="anonces">
                <div className="container">
                    <div className="anonces__inner">
                        <div className="anonces__titel">
                            Анонси
                        </div>
                        <div className='anonces__slider'>
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Anonces;