import React, { useState } from 'react';
import axios from 'axios'

import SidebarItem from './Sidebar/Sidebar'
import './Step2.css';

import { DEFAULT_OPTIONS } from '../../utils/augs'

<<<<<<< HEAD
const augs_list = []
=======
var namee;
>>>>>>> cb758fcb2292326d1d486c3970221ffb6b77137b

const Step2 = (props) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
    // const [displayImage, setDisplayImage] = useState('assets/default-img.jpg')

console.log(props.count , "alnkfa");
    function handleSubmit(e) {
        e.preventDefault()
        props.setDisplayImage('/assets/loader.gif')
        const len = e.target.length - 1
        console.log(DEFAULT_OPTIONS[selectedOptionIndex].name)

        
        if(props.count == 'Predict'){
            namee = 'predict'
        }else{
            namee = 'retrain'
        }
        const data = {}
        data['name'] = DEFAULT_OPTIONS[selectedOptionIndex].name

        let formData = new FormData()
        formData.append('aug_name', DEFAULT_OPTIONS[selectedOptionIndex].name)
        formData.append('aug_mode', 'run')
        formData.append('input_type',  namee)
        for (let i = 0; i < len; i++) {
            data[e.target[i].id] = e.target[i].value
            formData.append(e.target[i].id, e.target[i].value)
        }

        formData.append('input_type', 'predict')
        console.log(data)

        console.log(augs_list)

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                // 'CORS_SUPPORTS_CREDENTIALS': 'true',
                'Access-Control-Allow-Credentials': 'true'
            },
            withCredentials: true,
            crossorigin: true,
            responseType: 'blob'
        }

        const url = props.url
        axios.post(`${url}/augment`, formData, config)
            .then(res => {
                augs_list.push(data)
                console.log(res.data)
                // var arr = new Uint8Array(res.data)
                // var raw = String.fromCharCode.apply(null, arr)
                // var b64 = btoa(unescape(encodeURIComponent(res.data)))
                props.setDisplayImage(URL.createObjectURL(res.data))
                // console.log(b64)
            })
            .catch(err => console.log(err))

    }

    function handleResetOrUndo(e) {
        e.preventDefault()
        console.log(e.target.value)
        props.setDisplayImage('/assets/loader.gif')
        let formData = new FormData()
        formData.append('input_type',  namee)
        formData.append('aug_mode', e.target.value)
        formData.append('input_type', 'predict')

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                // 'CORS_SUPPORTS_CREDENTIALS': 'true',
                'Access-Control-Allow-Credentials': 'true'
            },
            withCredentials: true,
            crossorigin: true,
            responseType: 'blob'
        }

        const url = props.url
        axios.post(`${url}/augment`, formData, config)
            .then(res => {
                if (e.target.value === 'undo')
                    augs_list.pop()
                else if (e.target.value === 'reset')
                    augs_list.length = 0
                console.log(res.data)
                // var arr = new Uint8Array(res.data)
                // var raw = String.fromCharCode.apply(null, arr)
                // var b64 = btoa(unescape(encodeURIComponent(res.data)))
                props.setDisplayImage(URL.createObjectURL(res.data))
                // console.log(b64)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="container2">
                <h2>{props.count}</h2>
                <div className="response-img">
                    <img height="300" src={props.displayImage} alt="" />
                </div>
            </div>
            <div>
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
                    <div className="edit-options">
                        <button value="undo" onClick={(e) => handleResetOrUndo(e)}>Undo</button>
                        <button value="reset" onClick={(e) => handleResetOrUndo(e)}>Reset</button>
                    </div>

                </div>
                <div className="container1">
                    <div className="show_augs">
                        {augs_list.map((aug) => {
                            return (
                                <div> {JSON.stringify(aug).substring(8, JSON.stringify(aug).length - 2)} </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step2;


// http://da6e01721c28.ngrok.io/predict