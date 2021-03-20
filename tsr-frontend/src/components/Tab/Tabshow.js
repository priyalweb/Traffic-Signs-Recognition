import React, { Component } from 'react';
import Tabs from "./Tabs"; 
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";

import "./Tab.css";

export default class Tabshow extends Component {
    state = { message: "Hi" }
        function1 = (data1) => {
            this.setState({message: data1})
        }

    render() {
        return (
            <div style={{marginLeft: "0px"}}>
            <Tabs> 
                <div className="step1 col-12 " label="Step 1"> 
                    <Step1 function2 = {this.function1}/>
                    <p style={{marginLeft: "230px"}}> {this.state.message} </p>
                </div> 
                <div className="step2 col-12" label="Step 2"> 
                    <Step2 />
                </div> 
                     <div className="step3 col-12" label="Step 3"> 
                {/* <Step3 /> */}
                    <p style={{textAlign: "center"}}>...</p>
                </div> 
            </Tabs> 
            </div>
        )
    }
}
