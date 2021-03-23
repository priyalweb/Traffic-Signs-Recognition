import React, { useState } from 'react';

import Slider from './Slider/Slider'
import SidebarItem from './Sidebar/Sidebar'

import Step1 from '../Retrain/Step12';
import './Step2.css';

const DEFAULT_OPTIONS = [
    {
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Grayscale',
        property: 'grayscale',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Sepia',
        property: 'sepia',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Hue',
        property: 'hue-rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg'
    },
    {
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
            min: 0,
            max: 20
        },
        unit: 'px'
    }
]

const Step2 = (props) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
    const [options, setOptions] = useState(DEFAULT_OPTIONS)
    const selectedOption = options[selectedOptionIndex]

    function handleSliderChange({ target }) {
        setOptions(prevOptions => {
            return prevOptions.map((option, index) => {
                if (index !== selectedOptionIndex) return option
                return { ...option, value: target.value }
            })
        })
    }

    function getImageStyle() {
        const filters = options.map(option => {
            return `${option.property}(${option.value}${option.unit})`
        })

        return { filter: filters.join(' ') }
    }

    return (
        <div className="container2">
            <div className="container1" id="stp2">
                <div className="main-image" style={getImageStyle()}>
                    <img src={props.base64} alt="Image" height="300" width="auto" />
                    {/* <img src={props.picc} alt="Image" height="300" width="auto" /> */}

                </div>
                <div className="sidebar">
                    {options.map((option, index) => {
                        return (
                            <SidebarItem
                                key={index}
                                name={option.name}
                                active={index === selectedOptionIndex}
                                handleClick={() => setSelectedOptionIndex(index)}
                            />
                        )
                    })}
                </div>
            </div>
            <Slider
                min={selectedOption.range.min}
                max={selectedOption.range.max}
                value={selectedOption.value}
                handleChange={handleSliderChange}
            />
        </div>

    )
}

export default Step2;
