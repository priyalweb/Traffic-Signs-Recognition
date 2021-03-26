import React, { useState } from 'react';
import axios from 'axios'

import SidebarItem from './Sidebar/Sidebar'
import './Step2.css';

import { DEFAULT_OPTIONS } from '../../utils/augs'

const augs_list = []
var namee, name2;

const Step2 = (props) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
    // const [augs_list, setAugsList] = useState([])

    console.log(props.count);
    function handleSubmit(e) {
        e.preventDefault()
        props.setDisplayImage('/assets/loader.gif')
        const len = e.target.length - 1
        console.log(DEFAULT_OPTIONS[selectedOptionIndex].name)


        if (props.count == 'Predict') {
            namee = 'predict';
            name2 = 'Predict';
        } else {
            namee = 'retrain';
            name2 = 'Retrain';
        }
        const data = {}
        data['name'] = DEFAULT_OPTIONS[selectedOptionIndex].name

        let formData = new FormData()
        formData.append('aug_name', DEFAULT_OPTIONS[selectedOptionIndex].name)
        formData.append('aug_mode', 'run')
        formData.append('input_type', namee)
        data['aug_mode'] = 'run'
        data['input_type'] = namee
        console.log(data)
        for (let i = 0; i < len; i++) {
            data[e.target[i].id] = e.target[i].value
            formData.append(e.target[i].id, e.target[i].value)
        }

        // formData.append('input_type', 'predict')
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
        augs_list.push(data)
        axios.post(`${url}/augment`, formData, config)
            .then(res => {

                console.log(res.data)
                props.setDisplayImage(URL.createObjectURL(res.data))
            })
            .catch(err => console.log(err))

    }

    function handleResetOrUndo(e) {
        e.preventDefault()
        console.log(e.target.value)
        props.setDisplayImage('/assets/loader.gif')
        let formData = new FormData()
        formData.append('input_type', namee)
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

        if (e.target.value === 'undo')
            augs_list.pop()
        else if (e.target.value === 'reset')
            augs_list.length = 0

        const url = props.url
        axios.post(`${url}/augment`, formData, config)
            .then(res => {

                console.log(res.data)
                props.setDisplayImage(URL.createObjectURL(res.data))
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="container2" >
                <div style={{ display: "inline-block" }}>
                    {/* <h4 style={{ marginRight: '180px', display: "inline-block", color: '#8d8d8d'}} > {props.count} </h4> */}
                    {/* <h2 style={{paddingRight: '250px', display: "inline-block"}}><b>Augmented Image</b></h2> */}
                </div>

                <div className="container">
                    <div className="row">
                        {/* <div></div>
                                isko left right swap krde aur heading ko bhi right */}

                        <div className="col-12 col-md-6">
                            {/* <h3 style={{textAlign:"center"}}>Guidelines: </h3> */}
                            <h2 style={{ marginBottom: "20px", textAlign: "center" }}><b>Guidelines:</b></h2>
                            <div className="response-img" style={{ height: "300", width: "300", padding: "2%" }}>

                                <ul>
                                    <li>The panel on the left has the types of augmentations.</li>
                                    <li>You can select none or multiple, as required.</li>
                                    <li>The default parameters are set but can be changed.</li>
                                    <li>All selected augmentations will be implemented one after the other (sequentially) on the display image. </li>
                                    <li>The probability for display has been set as one to ensure visualisation.</li>
                                    <li>However, in the actual implementation, the augmentations will be applied on images based on probability value set by the user.</li>
                                    <li>All the applied augmentations have been listed sequentially at the lower left corner.</li>
                                    <li>Press "Apply" to visualise and add the augmentation to the list.</li>
                                    <li>Press "Undo" to remove the last augmentation.</li>
                                    <li>Press "Reset" to remove all augmentations.</li>
                                </ul>

                            </div>
                        </div>
                        {/* <div className="col-12 col-md-1">
                                </div> */}
                        <div className="col-12 col-md-6" style={{ textAlign: "center", padding: "2% 0" }}>
                            <h2 style={{ marginBottom: "40px", }}><b>Augmented Image:</b></h2>
                            <div className="response-img" style={{ height: "300", width: "300" }} >
                                <img height="300" width="300" src={props.displayImage} alt="" />
                            </div>
                        </div>
                        {/* <div className="col-12 col-md-1">
                                </div> */}
                    </div>

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
                                                        <label htmlFor={parameter.parameter_name}> Enter {parameter.display_name} </label>
                                                        <input
                                                            type={parameter.input_type}
                                                            id={parameter.parameter_name}
                                                            name={parameter.parameter_name}
                                                            defaultValue={parameter.default_value}
                                                            min={parameter.min}
                                                            max={parameter.max}
                                                            step="any"
                                                        />
                                                    </div>
                                                )
                                            }
                                            if (augmentation.name === 'add_rain') {
                                                return (
                                                    <div className="ind_input">
                                                        <label htmlFor={parameter.parameter_name}> Enter {parameter.display_name} (heavy/drizzle) </label>
                                                        <input
                                                            type={parameter.input_type}
                                                            id={parameter.parameter_name}
                                                            name={parameter.parameter_name}
                                                            defaultValue={parameter.default_value}
                                                            min={parameter.min}
                                                            max={parameter.max}
                                                            step="any"
                                                        />
                                                    </div>
                                                )
                                            }
                                            else return (
                                                <div className="ind_input">
                                                    <label htmlFor={parameter.parameter_name}> Enter {parameter.display_name} </label>
                                                    <input
                                                        type={parameter.input_type}
                                                        id={parameter.parameter_name}
                                                        name={parameter.parameter_name}
                                                        defaultValue={parameter.default_value}
                                                        min={parameter.min}
                                                        max={parameter.max}
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
                <div className="container1 augs_list">
                    <h4 style={{ color: '#8d8d8d' }} > {props.count} </h4>
                    <h4>Applied Augmentations: </h4>
                    <div className="show_augs">
                        {augs_list.map((aug) => {
                            // console.log(aug)
                            // console.log(JSON.stringify(aug, undefined, 4))
                            return (
                                <pre>{JSON.stringify(aug, undefined, 4)}</pre>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step2;