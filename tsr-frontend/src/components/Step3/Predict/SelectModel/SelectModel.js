import React from 'react'
import axios from 'axios'

import { STEP3_PREDICT } from '../../../../utils/step3'
import './SelectModel.css'

function SelectModel(props) {

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
        axios.post(`${url}/predict`, formData, config)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="select-model">
            <header>
                <h4>Select Model</h4>
            </header>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="model_name">
                    <label htmlFor="select-model">Choose a Model</label>
                    <select name="select-model" id="select-model">
                        {
                            STEP3_PREDICT[1].parameters[0].models.map((model) => {
                                return (
                                    <option value={model}> {model} </option>
                                )
                            })
                        }
                    </select>
                    {/* <p>{STEP3_PREDICT[1].description}</p> */}
                </div>
                <div className="submit">
                    <button type="submit">Select</button>
                </div>



            </form>
        </div>
    )
}

export default SelectModel
