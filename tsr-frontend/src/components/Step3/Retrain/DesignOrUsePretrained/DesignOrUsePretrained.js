import React, { useState } from 'react'

import Design from './Design/Design'
import Pretrained from './Pretrained/Pretrained'
import './DesignOrUsePretrained.css'

function DesignOrUsePretrained(props) {

    const [count, setCount] = useState(0)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <header>
                <h4> Model </h4>
            </header>
            <div className="common-inputs">
                <div className="common-input">
                    <label htmlFor="model_name">Model Name</label>
                    <input type="text" name="model_name" id="model_name" />
                </div>
                <div className="common-input">
                    <label htmlFor="image_size">Image Size</label>
                    <input type="number" name="image_size" id="image_size" />
                </div>
                <div className="common-input">
                    <label htmlFor="channels">No. of Channels</label>
                    <input type="number" name="channels" id="channels" />
                </div>
                <div className="common-input">
                    <label htmlFor="classes">No. of Classes</label>
                    <input type="number" name="classes" id="classes" />
                </div>
                <div className="design_or_pretrained_buttons">
                    <button onClick={() => setCount(1)} >Design Model</button>
                    <button onClick={() => setCount(2)} >Use Pretrained Model</button>
                </div>

            </div>
            <div className="design_or_pretrained">
                {count === 1 && <Design url={props.url} />}
                {count === 2 && <Pretrained url={props.url} />}
            </div>
        </div>
    )
}

export default DesignOrUsePretrained
