import React, { useState } from 'react'
import axios from 'axios'

import { STEP3_PREDICT } from '../../../../utils/step3'
import './SelectModel.css'

function SelectModel(props) {

    const [id, setId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loading1, setLoading1] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target[0].value)

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                // 'CORS_SUPPORTS_CREDENTIALS': 'true',
                'Access-Control-Allow-Credentials': 'true'
            },
            withCredentials: true,
            crossorigin: true,
            // responseType: 'blob'
        }

        const formData = new FormData()
        formData.append('path_model', e.target[0].value)

        const url = props.url
        setLoading(true)
        axios.post(`${url}/predict`, formData, config)
            .then(res => {
                console.log(res.data)
                setId(res.data.class_id)
                setLoading(false)
                setLoading1(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="select-model">
            <header>
                <h2><b>Select pre-trained model for prediction</b></h2>
            </header>
            <div className="response-img" style={{ padding: "2rem" }}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="model_name">
                        <label htmlFor="select-model">Choose a Model</label>
                        <select name="select-model" id="select-model">
                            {
                                STEP3_PREDICT[1].parameters[0].models.map((model) => {
                                    //model ke names: Model1: Improved_Model and Model2: Baseline_Model
                                    return (
                                        <option value={model}> {model} </option>
                                    )
                                })
                            }
                        </select>
                        {/* <p>{STEP3_PREDICT[1].description}</p> */}
                    </div>
                    <div className="submit">
                        <button type="submit">Predict</button>
                    </div>

                    {loading && <img src="/assets/loader.gif" alt="" />}
                    {loading === false && loading1 === true && <div className="outputs">
                        <p>The predicted class id of the image is <strong className="class_id">{id}</strong> </p>
                        <img src="/assets/plot_of_classes.png" height="400" alt="" />
                    </div>}

                    {/* Class Detected: class_id */}


                </form>
            </div>
        </div>
    )
}

export default SelectModel
