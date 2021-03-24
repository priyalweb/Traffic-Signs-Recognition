import React from 'react'

import Predict from './Predict/Predict'
import './Step3.css'

function Step3(props) {
    return (
        <div className="container1">
            <Predict url={props.url} />
        </div>
    )
}

export default Step3
