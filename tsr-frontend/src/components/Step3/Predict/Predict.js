import React from 'react'

import Preprocessing from './Preprocessing/Preprocessing'
import SelectModel from './SelectModel/SelectModel'
import './Predict.css'

function Predict() {
    return (
        <div className="predict">
            <Preprocessing />
            <SelectModel />
        </div>
    )
}

export default Predict
