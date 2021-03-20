import React, { Component } from 'react';

import { BiImageAdd } from "react-icons/bi";
import Step2 from '../Step2/Step2';
import "../Tab/Tab.css";
import "./Step1.css";


export default class Step1 extends Component {
   

     state={ 
                    profileImg:'/assets/default-img.jpg',
                    base64:''
                }
                imageHandler = (e) => {
                    const reader = new FileReader();
                    reader.onload = () =>{
                    if(reader.readyState === 2){
                        this.setState({profileImg: reader.result})
                        this.setState({base64: reader.result})

                        // console.log({base64});  
                        this.props.function2("yo"); 
                    }
                    }
                    reader.readAsDataURL(e.target.files[0])
                };
                
                // sendData = () => {
                //     this.props.function2("yo");
                // }
                
    render() {
        const { profileImg} = this.state;
        const { base64} = this.state;
        console.log({base64});
       
        return (
            <div id="stp1">
                 <div className="page">
                 <div className="container">
                    <h1 className="heading">Add your Sign</h1>
                        <div className="img-holder">
                            <img src={profileImg} alt="" id="img" className="img" />
                        </div>
                        <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler}  />
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