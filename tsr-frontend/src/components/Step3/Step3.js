import React from 'react'

import Predict from './Predict/Predict'
import Retrain from './Retrain/Retrain'
import './Step3.css'

function Step3(props) {
    return (
        <div className="container3">
            { props.count === 'predict' && <Predict url={props.url} />}
            { props.count === 'retrain' && <Retrain url={props.url} />}
        </div>
    )
}

export default Step3
