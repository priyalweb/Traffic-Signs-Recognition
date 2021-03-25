import React from 'react'

import Predict from './Predict/Predict'
import Retrain from './Retrain/Retrain'
import './Step3.css'

function Step3(props) {
    return (
        <div className="container3">
            { props.count === 'Predict' && <Predict url={props.url} />}
            { props.count === 'Retrain' && <Retrain url={props.url} />}
        </div>
    )
}

export default Step3
