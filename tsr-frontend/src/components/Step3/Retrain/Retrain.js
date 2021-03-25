import React from 'react'

import Balancing from './Balancing/Balancing'
import Preprocessing from './Preprocessing/Preprocessing'
import Segregation from './Segregation/Segregation'
import DesignOrUsePretrained from './DesignOrUsePretrained/DesignOrUsePretrained'
import Train from './Train/Train'
import './Retrain.css'

function Retrain(props) {
    return (
        <div className="retrain">
            <Balancing url={props.url} />
            <Preprocessing url={props.url} />
            <Segregation url={props.url} />
            <DesignOrUsePretrained url={props.url} />
            <Train url={props.url} />
        </div>
    )
}

export default Retrain
