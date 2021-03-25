import React from 'react'

import './Pretrained.css';
import { PRETRAINED_DATA } from '../../../../../utils/pretrainedData';

function Pretrained() {
    return (
        <div className="pretrained">
            <label htmlFor="choose-pretrained-model">Choose Model</label>
            <select name="choose-pretrained-model" id="choose-pretrained-model">
                {PRETRAINED_DATA.map((data, index) => {
                    return <option value={data.name}>{data.name}</option>;
                })}
            </select>
        </div>
    );
}

export default Pretrained
