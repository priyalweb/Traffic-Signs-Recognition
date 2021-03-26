import React from 'react'

import Balancing from './Balancing/Balancing'
import Preprocessing from './Preprocessing/Preprocessing'
import Segregation from './Segregation/Segregation'
import DesignOrUsePretrained from './DesignOrUsePretrained/DesignOrUsePretrained'
import Compile from './Compile/Compile'
import Train from './Train/Train'
import './Retrain.css'

function Retrain(props) {
    return (
        <div className="retrain">
            <div className="container">
                            <div className="row">
                                {/* <div></div>
                                isko left right swap krde aur heading ko bhi right */}
                                <div className="col-12 col-md-3"></div>
                                <div className="col-12 col-md-6">
                                {/* <h3 style={{textAlign:"center"}}>Guidelines: </h3> */}
                                <h1 style={{marginBottom: "20px",textAlign:"center"}}><b>Guidelines for Balancing</b></h1>
                                    <div className="response-img" style={{ height:"300",  width:"300", padding:"2%"}}>
                                        
                                        <ul>
                                            <li>You can balance the dataset using two options:
                                                <ol>
                                                    <li>Uniform Balancing</li>
                                                    <li>Custom Balancing</li>
                                                </ol>
                                            </li>
                                            <li>Uniform Balancing: all the classes with have the same number of images. This will be input in 'Common Value' text box.</li>
                                            <li>Custom Balancing: classes can have different number of images. For custom balancing follow the steps:
                                                <ol>
                                                    <li>Add a 'common value' which will be applies on all classes except the ones you specify.</li>
                                                    <li>Enter the class id and corresponding number of images for each exception class individually and press 'Add'.</li>
                                                </ol>
                                            </li>
                                            <li>Once your balancing settings are final, press 'Balance.'</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                                <div className="col-12 col-md-3" style={{}}></div>
                            </div>
            </div>
            <br></br><br></br>
            <Balancing url={props.url} />
            <br></br><br></br>
            <Preprocessing url={props.url} />
            <br></br><br></br>
            <Segregation url={props.url} />
            <br></br><br></br>
            <DesignOrUsePretrained url={props.url} />
            <br></br><br></br>
            <Compile url={props.url} />
            <br></br><br></br>
            <Train url={props.url} />
            <br></br><br></br>
        </div>
    )
}

export default Retrain
