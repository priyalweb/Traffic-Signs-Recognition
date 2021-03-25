import React from 'react'

import Balancing from './Balancing/Balancing'
import Preprocessing from './Preprocessing/Preprocessing'
import DesignOrUsePretrained from './DesignOrUsePretrained/DesignOrUsePretrained'
import './Retrain.css'

function Retrain(props) {
    return (
        <div className="retrain">
            <Balancing url={props.url} />
            <Preprocessing url={props.url} />
            <DesignOrUsePretrained url={props.url} />
        </div>
    )
}

export default Retrain
