import React, { Component } from 'react';
import Tabs from "./Tabs";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";

import "./Tab.css";

export default class Tabshow extends Component {

    constructor() {
        super()
        this.state = {
            profileImg: '/assets/default-img.jpg',
            base64: null
        }
        this.imageHandler = this.imageHandler.bind(this)
    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
                this.setState({ base64: reader.result })

                console.log(this.state.base64);
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    render() {
        return (
            <div style={{ marginLeft: "0px" }}>
                <Tabs>
                    <div className="step1 col-12 " label="Step 1">
                        {<Step1 base64={this.state.base64} profileImg={this.state.profileImg} update={this.imageHandler} />}
                    </div>
                    <div className="step2 col-12" label="Step 2">
                        {<Step2 base64={this.state.base64} />}
                    </div>
                    <div className="step3 col-12" label="Step 3">
                        {/* <Step3 /> */}
                        <p style={{ textAlign: "center" }}>...</p>
                    </div>
                </Tabs>
            </div>
        )
    }
}
