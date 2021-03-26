import React, { useState } from 'react'
import axios from 'axios'

import './Segregation.css'

function Segregation(props) {

    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target[0].value, e.target[1].value)

        const data = {}
        const formData = new FormData()
        data['test_size'] = parseFloat(e.target[0].value)
        formData.append('test_size', parseFloat(e.target[0].value))
        data['segregation_type'] = e.target[1].value
        formData.append('segregation_type', e.target[1].value)

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
        }

        const url = props.url
        setLoading(true)
        axios.post(`${url}/retrain_segregate`, formData, config)
            .then(res => {
                console.log(res)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="segregation">
            <header>
                <h2><b>Segregation</b></h2>
            </header>
            <div className="response-img" style={{ padding: "2rem" }}>
            <form onSubmit={(e) => handleSubmit(e)} className="segregation_inputs">
                <div className="segregation_input">
                    <label htmlFor="test_size">Enter Test Size</label>
                    <input type="number" min="0" max="1" step="any" name="test_size" id="test_size" />
                </div>
                <div className="segregation_input">
                    <label htmlFor="segregation_type">Select Type of Segregation</label>
                    <select name="select-segregation-type" id="select-segregation-type">
                        <option value="Normal"> Normal </option>
                        <option value="Stratified"> Stratified </option>
                        <option value="Difficult_samples"> Difficult_Samples </option>
                        <option value="kennard_stone"> kennard_stone </option>
                    </select>
                </div>
                <div className="submit" style={{width: "100%"}}>
                    <button style={{width: "100%"}} type="submit">Submit</button>
                    {loading && <img src="/assets/loader.gif" alt="" />}
                </div>
            </form>
            </div>
        </div>
    )
}

export default Segregation
