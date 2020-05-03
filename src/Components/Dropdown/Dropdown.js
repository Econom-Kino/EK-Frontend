import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styled from 'styled-components';
import './Dropdown.css';

const options0 = [
    /*{ value: 'Smart sort', label: 'Розумне сортування' },*/
    { value: 'Date', label: 'Найближчі сеанси' },
    { value: 'Price', label: 'Ціна' },
    { value: 'CinemaRate', label: 'Рейтинг кінотетатра' },
];

const options1 = [
    { value: '2D', label: '2D' },
    { value: '3D', label: '3D' },
    { value: '4DX', label: '4DX' },
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

var width0 = 163;
var width1 = 158;
var width2 = 158;
var height2 = 50;
var priceSort = false;
let cinemasArray = [];

class Dropdown extends React.Component {

    state = {
        selectedOption0: null,
        selectedOption1: [],
        selectedOption2: [],
        writeDataCount: 0,
        clearAll1: false
    };


    handleChange0 = selectedOption => {
        this.setState({ selectedOption0: selectedOption });
        width0 = selectedOption.label.length * 12 + 35;
        this.props.updateData(0, selectedOption);


    };

    handleChange1 = selectedOption => {

        if (selectedOption == null) {
            width1 = 158;
            this.props.updateData(1, null);
            this.setState({ selectedOption1: [], clearAll1: true });
        } else {
            width1 = 158 + selectedOption.length * 47;
            this.props.updateData(1, selectedOption);
            this.setState({ selectedOption1: selectedOption, clearAll1: true });
        }
        console.log('lol1', this.state.selectedOption2);

    };

    handleChange2 = selectedOption => {
        if (selectedOption == null) {
            width2 = 158;
            height2 = 50;
            this.setState({ selectedOption2: [] });
            this.props.updateData(2, []);
        } else {
            width2 = /*selectedOption[selectedOption.length-1].label.length*12+30;*/293
            console.log(width2);
            height2 = 50 + (selectedOption.length - 1) * 25;
            this.setState({ selectedOption2: selectedOption });
            this.props.updateData(2, selectedOption);
        }

    };

    writeData(array) {
        for (var i = 0; i < array.length; i++) {
            let cinemaNames = { value: '', label: '' };
            cinemaNames.value = array[i].place_id
            cinemaNames.label = array[i].name
            cinemasArray.push(cinemaNames)
        }
    }


    handleClick = () => {
        width0 = maxLength0;
        console.log(maxLength0);
    };

    render() {
        if (this.state.writeDataCount == 0) {
            this.writeData(this.props.cinemas);
            // this.setState({writeDataCount: 1})
        }

        const { selectedOption0 } = this.state;
        const { selectedOption1 } = this.state;
        const { selectedOption2 } = this.state;
        const animatedComponents = makeAnimated();

        if (this.props.isClicked == true) {
            // this.setState({
            //     selectedOption0: null,
            //     selectedOption1: [],
            //     selectedOption2: []
            // })
            width0 = 163;
            width1 = 158;
            width2 = 158;
            height2 = 50;
            let toSend = { id: 'finish', value: ' ' };
            this.props.updateData(-1, toSend);
        }

        if (this.state.selectedOption2.length == 0) {
            width2 = 158;
            height2 = 50;
        }
        if (this.state.selectedOption1.length == 0 && this.state.clearAll1 == true) {
            width1 = 158;
            this.props.updateData(1, null);
            // this.setState({ clearAll1: false })
        }

        return (
            <div className='Dropdown-buttons'>
                <div className='item'>
                    <Select
                        onClick={this.handleClick}
                        placeholder={<div className='text'>Сортувати</div>}
                        components={{ IndicatorSeparator: () => null, makeAnimated }}
                        value={selectedOption0}
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
                        isMulti={true}
                        value={selectedOption1}
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
                                alignItems: 'center',
                                background: '#EDEDED'

                            })
                        }}
                    />
                </div>
                <div className='item'>
                    <Select
                        placeholder={<div className='text'>Обрати кінотеатри</div>}
                        components={{ IndicatorSeparator: () => null, makeAnimated }}
                        isMulti={true}
                        value={selectedOption2}
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
                                height: height2 + 'px',
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
            </div>

        );
    }


}
export default Dropdown;