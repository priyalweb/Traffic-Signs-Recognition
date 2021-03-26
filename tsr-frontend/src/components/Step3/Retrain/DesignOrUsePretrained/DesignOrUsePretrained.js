import React, { useState } from 'react'

import Design from './Design/Design'
import Pretrained from './Pretrained/Pretrained'
import './DesignOrUsePretrained.css'

function DesignOrUsePretrained(props) {

    const [count, setCount] = useState(0)
    const [model_name, setModelName] = useState('')
    const [image_size, setImageSize] = useState(32)
    const [channels, setChannels] = useState(3)
    const [classes, setClasses] = useState(0)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <header>
                <h2><b>Model </b></h2>
            </header>
            <div className="response-img" style={{ padding: "2rem" }}>
                <div className="common-inputs">
                    <div className="common-input">
                        <label htmlFor="model_name">Model Name</label>
                        <input type="text" value={model_name} onChange={(e) => setModelName(e.target.value)} name="model_name" id="model_name" />
                    </div>
                    <div className="common-input">
                        <label htmlFor="image_size">Image Size</label>
                        <input type="number" value={image_size} onChange={(e) => setImageSize(e.target.value)} name="image_size" id="image_size" />
                    </div>
                    <div className="common-input">
                        <label htmlFor="channels">No. of Channels</label>
                        <input type="number" value={channels} onChange={(e) => setChannels(e.target.value)} name="channels" id="channels" />
                    </div>
                    <div className="design_or_pretrained_buttons">
                        <button style={{ width: "30%", marginBottom: "5%" }} onClick={() => setCount(1)} >Design Model</button>
                        <button style={{ width: "40%" }} onClick={() => setCount(2)} >Use Pretrained Model</button>
                    </div>

                </div>
                <div className="design_or_pretrained">
                    {count === 1 && <Design model_name={model_name} retrain_type="Design" image_size={image_size} channels={channels} classes={classes} url={props.url} />}
                    {count === 2 && <Pretrained model_name={model_name} retrain_type="Pretrained" image_size={image_size} channels={channels} classes={classes} url={props.url} />}
                </div>

            </div>
        </div>
    )
}

export default DesignOrUsePretrained
