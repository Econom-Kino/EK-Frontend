import React from 'react'
import './SliderArrow.css';



export default ({ to, onClick, side, stl, arr }) => (
    <div className="button__wrapper__arrow">
        <div className={`button__container__arrow ${side}`}>
            <img onClick={onClick} aria-label={to}
                style={{
                    transform: stl,
                }}
                src={require("./Polygon 3.png")} alt='arrow' className={arr}
            ></img>
        </div>
    </div>
)