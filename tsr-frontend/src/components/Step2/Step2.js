import React, { useState } from 'react';
import axios from 'axios'

import SidebarItem from './Sidebar/Sidebar'
import './Step2.css';

import { DEFAULT_OPTIONS } from '../../utils/augs'

const Step2 = (props) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
    const [displayImage, setDisplayImage] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        const len = e.target.length - 1
        console.log(DEFAULT_OPTIONS[selectedOptionIndex].name)

        let formData = new FormData()
        formData.append('aug_name', DEFAULT_OPTIONS[selectedOptionIndex].name)
        for (let i = 0; i < len; i++) {
            // console.log(e.target[i].id, e.target[i].value)
            formData.append(e.target[i].id, e.target[i].value)
        }

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                // 'CORS_SUPPORTS_CREDENTIALS': 'true',
                'Access-Control-Allow-Credentials': 'true'
            },
            withCredentials: true,
            crossorigin: true
        }

        const url = 'http://22ec4e35fa46.ngrok.io'
        axios.post(`${url}/augment`, formData, config)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))

    }

    return (
        <>
            {/* <div className="response-img">
                <img height="300" src={urlCreator.createObjectURL(displayImage)} alt="" />
            </div> */}
            <div className="container1">
                <div className="sidebar">
                    {DEFAULT_OPTIONS.map((augmentation, index) => {
                        return (
                            <SidebarItem
                                key={index}
                                name={augmentation.name}
                                active={index === selectedOptionIndex}
                                handleClick={() => setSelectedOptionIndex(index)}
                            />
                        )
                    })}
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className="user_inputs">
                    <div className="inputs">
                        {
                            DEFAULT_OPTIONS.map((augmentation, index) => {
                                if (index === selectedOptionIndex) {
                                    return augmentation.parameters.map((parameter) => {
                                        if (parameter.parameter_name === 'prob') {
                                            return (
                                                <div className="ind_input">
                                                    <label htmlFor={parameter.parameter_name}> Enter {parameter.parameter_name} </label>
                                                    <input
                                                        type={parameter.input_type}
                                                        id={parameter.parameter_name}
                                                        name={parameter.parameter_name}
                                                        defaultValue={parameter.default_value}
                                                        min="0"
                                                        max="1"
                                                        step="any"
                                                    />
                                                </div>
                                            )
                                        }
                                        if (augmentation.name === 'add_rain') {
                                            return (
                                                <div className="ind_input">
                                                    <label htmlFor={parameter.parameter_name}> Enter {parameter.parameter_name} (heavy/drizzle) </label>
                                                    <input
                                                        type={parameter.input_type}
                                                        id={parameter.parameter_name}
                                                        name={parameter.parameter_name}
                                                        defaultValue={parameter.default_value}
                                                        step="any"
                                                    />
                                                </div>
                                            )
                                        }
                                        else return (
                                            <div className="ind_input">
                                                <label htmlFor={parameter.parameter_name}> Enter {parameter.parameter_name} </label>
                                                <input
                                                    type={parameter.input_type}
                                                    id={parameter.parameter_name}
                                                    name={parameter.parameter_name}
                                                    defaultValue={parameter.default_value}
                                                    step="any"
                                                />
                                            </div>
                                        )
                                    })
                                }
                                else return <div></div>
                            })
                        }
                    </div>
                    <div className="submit">
                        <button type="submit">Apply</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Step2;
