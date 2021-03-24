import React from 'react'

import { STEP3_PREDICT } from '../../../../utils/step3'
import './Preprocessing.css'

function Preprocessing() {

    function handleSubmit(e) {
        e.preventDefault()
        // props.setDisplayImage('/assets/loader.gif')
        const len = 2
        // console.log(DEFAULT_OPTIONS[selectedOptionIndex].name)

        const data = {}
        // data['name'] = DEFAULT_OPTIONS[selectedOptionIndex].name

        // let formData = new FormData()
        // formData.append('aug_name', DEFAULT_OPTIONS[selectedOptionIndex].name)
        // formData.append('aug_mode', 'run')
        for (let i = 0; i < len; i++) {
            data[e.target[i].id] = e.target[i].value
            // formData.append(e.target[i].id, e.target[i].value)
        }

        console.log(data)

        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data',
        //         'Access-Control-Allow-Origin': '*',
        //         // 'CORS_SUPPORTS_CREDENTIALS': 'true',
        //         'Access-Control-Allow-Credentials': 'true'
        //     },
        //     withCredentials: true,
        //     crossorigin: true,
        //     responseType: 'blob'
        // }

        // const url = props.url
        // axios.post(`${url}/augment`, formData, config)
        //     .then(res => {
        //         console.log(res.data)
        //         // var arr = new Uint8Array(res.data)
        //         // var raw = String.fromCharCode.apply(null, arr)
        //         // var b64 = btoa(unescape(encodeURIComponent(res.data)))
        //         props.setDisplayImage(URL.createObjectURL(res.data))
        //         // console.log(b64)
        //     })
        //     .catch(err => console.log(err))
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
                    {/* <span> ({STEP3_PREDICT[0].description})</span> */}
                </div>
                <div className="submit">
                    <button type="submit">Apply</button>
                </div>
            </form>

        </div>
    )
}

export default Preprocessing
