import React from 'react';
import './DataButton.css';

class DataButton extends React.Component {


    render() {
        return (
            <div className="databutton"
                onClick={() => console.log("do smth")}
            >
                <button className={`databutton__btn ${this.props.day} ${this.props.type}`}>{this.props.data}</button>
            </div>
        )
    }
}

export default DataButton;