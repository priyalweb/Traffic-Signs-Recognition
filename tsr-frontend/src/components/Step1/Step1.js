import React, { Component } from 'react';

import { BiImageAdd } from "react-icons/bi";
import Step2 from '../Step2/Step2';
import "../Tab/Tab.css";
import "./Step1.css";


export default class Step1 extends Component {

    render() {
        return (
            <div id="stp1">
                <div className="page">
                    <div className="container">
                        <h1 className="heading">Add your Sign</h1>
                        {this.props.base64 !== null && <span style={{ color: 'green' }}>Image Uploaded. Click on Step 2 to continue.</span>}
                        <div className="img-holder">
                            <img src={this.props.profileImg} alt="" id="img" className="img" />
                        </div>
                        <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.props.update} />
                        {/* onChange={this.sendData} */}
                        <div className="label">
                            <label className="image-upload" htmlFor="input">
                                <i className="material-icons"> {<BiImageAdd />}</i>
                                Choose your Photo
                            </label>
                        </div>
                    </div>
                </div>
                {/* <Step2 picc={base64}/>               */}
            </div>
        )
    }
}