import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styled from 'styled-components';
import './Dropdown.css';

const options0 = [
    { value: 'Smart sort', label: 'Розумне сортування' },
    { value: 'Date', label: 'Дата' },
    { value: 'Price', label: 'Ціна' },
];

const options1 = [
    { value: '2D', label: '2D' },
    { value: '3D', label: '3D' },
    { value: '4Dx', label: '4Dx' },
    { value: 'LUX', label: 'LUX' }
];

const options2 = [
    { value: '1', label: 'Multiplex: Victoria Gardens' },
    { value: '2', label: 'Планета Кіно: Forum Lviv' },
    { value: '3', label: 'Multiplex: Spartak' },
    { value: '4', label: 'Кінопалац' },
    { value: '5', label: 'Планета Кіно: King Cross' },
    { value: '6', label: 'Кінопалац ім. Довженка' }
];

var maxLength0 = options0[0].label.length;
for (let i = 1; i < 0; i++) {
    if (options0[i].label.length > maxLength0) {
        maxLength0 = options0[i].label.length;
    }
}

var maxLength1 = options1[0].label.length;
for (let i = 1; i < 0; i++) {
    if (options1[i].label.length > maxLength1) {
        maxLength1 = options1[i].label.length;
    }
}

var maxLength2 = options2[0].label.length;
for (let i = 1; i < 0; i++) {
    if (options2[i].label.length > maxLength2) {
        maxLength2 = options2[i].label.length;
    }
}

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json()
    })
}

var width0 = 163;
var width1 = 158;
var width2 = 158;
var urlCinemas = 'https://ekinoback.herokuapp.com/cinemas/';
let cinemasArray = [];


function writeData(array) {

    for (var i = 1; i <= array.length; i++) {
        let cinemaNames = { value: '', label: '' };
        cinemaNames.value = array[i].id
        cinemaNames.label = array[i].name
        cinemasArray.push(cinemaNames)
    }

}

function getCinemas() {
    sendRequest('GET', 'https://ekinoback.herokuapp.com/cinemas')
        .then(data => writeData(data))
        .catch(err => console.log(err))
}

getCinemas()

class Dropdown extends React.Component {

    state = {
        selectedOption0: null,
        selectedOption1: null,
        selectedOption2: null,
    };

    handleChange0 = selectedOption => {
        this.setState({ selectedOption0: selectedOption });
        width0 = selectedOption.label.length * 12;
    };

    handleChange1 = selectedOption => {
        this.setState({ selectedOption1: selectedOption });
        width1 = selectedOption.label.length * 12 + 45;
        console.log(width1);
    };

    handleChange2 = selectedOption => {
        this.setState({ selectedOption2: selectedOption });
        width2 = selectedOption.label.length * 12;
    };

    handleClick = () => {
        width0 = maxLength0;
        console.log(maxLength0);
    };

    render() {

        const { selectedOption } = this.state;
        const animatedComponents = makeAnimated();

        return (
            <div className='Dropdown-buttons'>
                <div className='item'>
                    <Select
                        onClick={this.handleClick}
                        placeholder={<div className='text'>Сортувати по даті</div>}
                        components={{ IndicatorSeparator: () => null, makeAnimated }}
                        value={selectedOption}
                        options={options0}
                        onChange={this.handleChange0}
                        styles={{
                            option: (provided, state) => ({
                                ...provided,
                            }),

                            control: (provided, state) => ({
                                ...provided,
                                border: 'none',
                                width: width0 + 'px',
                                height: '50px',
                                background: 'linear-gradient(0deg, #EDEDED, #EDEDED), linear-gradient(354.56deg, #FEFEFE 7.98%, #D5D5D5 92.49%)',
                                boxShadow: '5px 5px 20px rgba(201, 201, 201, 0.5), -5px -5px 15px #FFFFFF',
                                borderRadius: '15px',
                                color: '#5F5F5F',
                                '&:hover': {
                                    color: '#474747',
                                    background: '#d9d9d9',
                                    boxShadow: '5px 5px 20px rgba(130, 130, 130, 0.5), -5px -5px 15px #FFFFFF'
                                }
                            }),

                            singleValue: (provided, state) => ({
                                ...provided,
                            })
                        }}
                    />
                </div>
                <div className='item'>
                    <Select
                        placeholder={<div className='text'>Обрати<br /> формати</div>}
                        components={{ IndicatorSeparator: () => null, makeAnimated }}
                        value={selectedOption}
                        onChange={this.handleChange1}
                        options={options1}
                        styles={{
                            option: (provided, state) => ({
                                ...provided,
                            }),

                            control: (provided, state) => ({
                                ...provided,
                                border: 'none',
                                width: width1 + 'px',
                                height: '50px',
                                background: 'linear-gradient(0deg, #EDEDED, #EDEDED), linear-gradient(354.56deg, #FEFEFE 7.98%, #D5D5D5 92.49%)',
                                boxShadow: '5px 5px 20px rgba(201, 201, 201, 0.5), -5px -5px 15px #FFFFFF',
                                borderRadius: '15px',
                                color: '#5F5F5F',
                                '&:hover': {
                                    color: '#474747',
                                    background: '#d9d9d9',
                                    boxShadow: '5px 5px 20px rgba(130, 130, 130, 0.5), -5px -5px 15px #FFFFFF'
                                }
                            }),

                            singleValue: (provided, state) => ({
                                ...provided,
                                display: 'flex', // To keep icon and label aligned
                                alignItems: 'center'

                            })
                        }}
                    />
                </div>
                <div className='item'>
                    <Select
                        placeholder={<div className='text'>Обрати кінотеатри</div>}
                        components={{ IndicatorSeparator: () => null, makeAnimated }}
                        value={selectedOption}
                        onChange={this.handleChange2}
                        options={cinemasArray}
                        styles={{
                            option: (provided, state) => ({
                                ...provided,
                            }),

                            control: (provided, state) => ({
                                ...provided,
                                border: 'none',
                                width: width2 + 'px',
                                height: '50px',
                                background: 'linear-gradient(0deg, #EDEDED, #EDEDED), linear-gradient(354.56deg, #FEFEFE 7.98%, #D5D5D5 92.49%)',
                                boxShadow: '5px 5px 20px rgba(201, 201, 201, 0.5), -5px -5px 15px #FFFFFF',
                                borderRadius: '15px',
                                color: '#5F5F5F',
                                '&:hover': {
                                    color: '#474747',
                                    background: '#d9d9d9',
                                    boxShadow: '5px 5px 20px rgba(130, 130, 130, 0.5), -5px -5px 15px #FFFFFF'
                                }
                            }),

                            singleValue: (provided, state) => ({
                                ...provided,
                            })
                        }}
                    />
                </div>
                <button className='sort-button'>
                    Знайти сеанси
                </button>
            </div>

        );
    }


}
export default Dropdown;