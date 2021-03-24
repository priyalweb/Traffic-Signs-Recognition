import React, { useState } from 'react'
import axios from 'axios'

import { STEP3_PREDICT } from '../../../../utils/step3'
import './Preprocessing.css'

function Preprocessing(props) {

    const [displayImage, setDisplayImage] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)

        const check = []

        for (let i = 0; i < e.target.length - 1; i++) {
            if (e.target[i].type === 'checkbox' && e.target[i].checked === true)
                check.push(i)
        }

        const data = {}
        const formData = new FormData()
        for (let i = 0; i < check.length; i++) {
            if (check[i] === 11 || check[i] === 4) {
                continue;
            }
            let j = check[i];
            if (j > 8) {
                data[e.target[j].id] = {}
                formData.append(e.target[j].id, {})
            }

            else {
                let k = j++;
                // data[e.target[k].id] = []
                while (e.target[j].type !== 'checkbox' && j < e.target.length - 1) {
                    const obj = {}
                    obj[e.target[j].id] = e.target[j].value
                    data[e.target[k].id] = obj
                    formData.append(e.target[k].id, obj)
                    j++;
                }
            }

        }

        if (e.target[11].checked === true) {
            data[e.target[12].value] = {}
            formData.append(e.target[12].value, {})
        }

        if (e.target[4].checked === true) {
            const obj = {}
            obj[e.target[5].id] = e.target[5].value
            obj[e.target[6].id] = e.target[6].value
            obj[e.target[7].id] = e.target[7].value
            obj[e.target[8].id] = e.target[8].value
            data[e.target[4].id] = obj
            formData.append(e.target[4].id, obj)
        }

        formData.append('input_type', 'predict')

        console.log(data)

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
        axios.post(`${url}/predict_preprocess`, formData, config)
            .then(res => {
                console.log(res.data)
                setDisplayImage(URL.createObjectURL(res.data))
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="pre-processing">
            <header>
                <h4>Pre-Processing</h4>
            </header>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="pre-processing-inputs">
                    {
                        STEP3_PREDICT[0].parameters.map((parameter, index) => {
                            return (
                                <>
                                    <div className="parameter_check">
                                        <input type="checkbox" name={parameter.parameter_name} id={parameter.parameter_name} />
                                        <span> <strong> {parameter.parameter_name} </strong></span>
                                    </div>

                                    {
                                        parameter.sub_parameters.map((sub_parameter) => {
                                            return (
                                                <div className="ind_input">
                                                    <label htmlFor={sub_parameter.sub_parameter_name}> Enter {sub_parameter.sub_parameter_name} </label>
                                                    <input
                                                        type={sub_parameter.input_type}
                                                        id={sub_parameter.sub_parameter_name}
                                                        name={sub_parameter.sub_parameter_name}
                                                        // defaultValue={parameter.default_value}
                                                        step="any"
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </>

                            )
                        })
                    }
                    <div className="parameter_check">
                        <input type="checkbox" name="normalize/standardize" id="normalize/standardize" />
                        <select name="select-state" id="select-state">
                            <option value="normalize"> Normalize </option>
                            <option value="standardize"> Standardize </option>
                        </select>
                    </div>
                    {/* <span> ({STEP3_PREDICT[0].description})</span> */}
                </div>
                <div className="submit">
                    <button type="submit">Apply</button>
                </div>
            </form>

            <div className="response-img">
                <img height="300" src={displayImage} alt="" />
            </div>

        </div>
    )
}

export default Preprocessing
