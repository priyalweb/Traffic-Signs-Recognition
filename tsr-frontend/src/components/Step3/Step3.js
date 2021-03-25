import React from 'react'

import Predict from './Predict/Predict'
import Retrain from './Retrain/Retrain'
import './Step3.css'

function Step3(props) {
    return (
        <div className="container3">
            {/* <Predict url={props.url} /> */}
            <Retrain url={props.url} />
        </div>
    )
}

export default Step3
