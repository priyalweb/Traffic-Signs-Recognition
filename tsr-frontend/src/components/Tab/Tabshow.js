import React, { Component } from 'react';
import Tabs from "./Tabs";
import Step12 from "../Retrain/Step12";
import Step2 from "../Step2/Step2";
import Step0 from "../Step0/Step0";
import Step1 from "../Predict/Step1";
import Step3 from "../Step3/Step3"

import "./Tab.css";

export default class Tabshow extends Component {

    constructor() {
        super()
        this.state = {
            displayImage: '/assets/default-img.jpg',
        }
        this.setDisplayImage = this.setDisplayImage.bind(this)
    }

    // imageHandler = (e) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         if (reader.readyState === 2) {
    //             this.setState({ profileImg: reader.result })
    //             this.setState({ base64: reader.result })

    //             console.log(this.state.base64);
    //         }
    //     }
    //     reader.readAsDataURL(e.target.files[0])
    // };

    setDisplayImage = (url) => {
        this.setState({
            displayImage: url
        })
    }

    render() {
        return (
            <div style={{ marginLeft: "0px" }}>
                <Tabs>
                    <div className="step1 col-12 " label="Step 1">
                        <Step0 url={this.props.url} />
                        {/* {<Step1 base64={this.state.base64} profileImg={this.state.profileImg} update={this.imageHandler} />} */}
                    </div>

                    <div className="step2 col-12" label="Step 2">
                        {<Step2 url={this.props.url} displayImage={this.state.displayImage} setDisplayImage={this.setDisplayImage} />}
                    </div>
                    <div className="step3 col-12" label="Step 3">
                        <Step3 />
                        {/* <p style={{ textAlign: "center" }}>...</p> */}
                    </div>
                </Tabs>
            </div>
        )
    }
}
