import React from 'react'

import './Pretrained.css'

function Pretrained() {
    return (
        <div className="pretrained">
            <label htmlFor="choose-pretrained-model">Choose Model</label>
            <select name="choose-pretrained-model" id="choose-pretrained-model">
                <option value="model1"> Model 1 </option>
                <option value="model2"> Model 2 </option>
            </select>
        </div>
    )
}

export default Pretrained
