import React, { useState } from 'react'
import axios from 'axios'

import './Pretrained.css';
import { PRETRAINED_DATA } from '../../../../../utils/pretrainedData';

function Pretrained(props) {

    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)

        const data = {}
        data['pretrained_model'] = e.target[0].value
        data['model_name'] = props.model_name
        data['image_size'] = props.image_size
        data['channels'] = props.channels
        data['retrain_type'] = props.retrain_type
        const formData = new FormData()

        console.log(data)
        formData.append('pretrained_model', e.target[0].value)
        formData.append('model_name', props.model_name)
        formData.append('image_size', props.image_size)
        formData.append('channels', props.channels)
        formData.append('retrain_type', props.retrain_type)

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
        axios.post(`${url}/model_settings`, formData, config)
            .then(res => {
                alert('Successful.')
                console.log(res)
                setLoading(false)
            })
            .catch(err => {
                alert('Failed.')
                setLoading(false)
                console.log(err)
            })
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="pretrained">
            <label htmlFor="choose-pretrained-model">Choose Model</label>
            <select name="choose-pretrained-model" id="choose-pretrained-model">
                {PRETRAINED_DATA.map((data, index) => {
                    return <option value={data.name}>{data.name}</option>;
                })}
            </select>
            <div className="submit">
                <button style={{ width: "100%" }} type="submit">Submit</button>
                {loading && <img src="/assets/loader.gif" alt="" />}
            </div>
        </form>
    );
}

export default Pretrained
