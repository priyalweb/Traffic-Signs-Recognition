import React, { Component } from 'react';
import axios from 'axios'

import { BiImageAdd, BiReset } from "react-icons/bi";
import { BsCloudUpload } from "react-icons/bs";
import Step2 from '../Step2/Step2';
import "../Tab/Tab.css";
import "./Step1.css";


export default class Step1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileImg: '/assets/default-img.jpg',
            base64: null,
            imageURL: '',
            order: '1',

        }
        this.imageHandler = this.imageHandler.bind(this)
        this.handleUploadImage = this.handleUploadImage.bind(this);
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


    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('input_type', "predict");
        // data.append('filename', this.fileName.value);

        console.log(this.uploadInput.files[0]);
        console.log(data);
        // console.log(this.uploadInput.files[0].name)
        // console.log(this.fileName.value);
        console.log(this.uploadInput.files[0]);
        console.log(data);
        data.forEach((value, key) => {
            console.log(key + value)
        });
        console.log(this.props.url);

        axios({
            url: `${this.props.url}/uploadimages`,
            // url: 'http://localhost:5000/uploadimages',
            method: 'POST',
            headers: {
                // contentType: 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            // dataType : 'json',
            mode: 'no-cors',
            data: data //pass here..
        }).then((res) => {
            console.log(res);
            console.log(res.data);
            if (res.data !== null) {
                this.setState({ order: '2' });
            }
        }, (err) => {
            console.log(err);
        })

        // fetch('http://localhost:5000/upload', {
        //   method: 'POST',
        //   body: data,
        //   mode: 'no-cors',
        //   headers: {
        //     'Content-Type': 'multipart/form-data; ',
        //   },
        //   enctype: "multipart/form-data",
        // })
        // .then((response) => {
        // //   response.json().then((body) => {
        // //     this.setState({ imageURL: `http://localhost:5000/${body.file}` });
        // //          this.setState({order: '2'});
        // //   });     
        //   console.log(response);
        // });
    }


    render() {

        const profileImg = this.state.profileImg;
        const base64 = this.state.base64;
        console.log(profileImg, base64, "here")

        return (
            <div id="stp1" style={{margin: "0% 4% 4% 6%",}}>
                <div className="page">
                    <div className="container">
                        <h1 className="heading">Upload Image For Prediction</h1>
                    
                        {base64 !== null && this.state.order === '1' && <span style={{ color: 'green', fontWeight: "bold" }}>Image Chosen. Click on Upload Your Image to continue.</span>}
                        <br></br>
                        {this.state.order !== '1' && this.props.base64 !== null && <span style={{ color: 'green', fontWeight: "bold" }}>Image uploaded. Please proceed to step 2.</span>}
                        <h6 style={{color: "#8d8d8d"}}>Image Preview</h6>
                        {/* //bottom space hatado!! */}
                        <div className="img-holder" style={{marginTop: "0"}}>
                            <img src={profileImg} alt="" id="img" className="img" />
                        </div>

                        <form onSubmit={this.handleUploadImage}>
                            <div>
                                <input type="file" name='file' accept="image/*" id="input" ref={(ref) => { this.uploadInput = ref; }} onChange={this.imageHandler} />
                            </div>
                            <div style={{ display: "none" }}>
                                {/* <div> */}
                                {/* <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" /> */}
                                <input ref={(ref) => { this.fileName = "imgg" }} type="text" placeholder="Enter the desired name of file" />
                            </div>
                            <br />
                            <div>
                                <button style={{ display: "none" }} id="upld"  >Upload</button>
                            </div>
                            {/* <img src={this.state.imageURL} alt="img" /> */}
                        </form>

                        <div className="label">
                            {/* <button className="image-upload" onClick={this.props.changestate('0')}> */}
                            <button className="image-upload" onClick={event =>  window.location.href='/input'} >
                                <i className="material-icons"> {<BiReset />}</i>
                                Reset Choices
                                </button>
                            <label className="image-upload" htmlFor="input">
                                <i className="material-icons"> {<BiImageAdd />}</i>
                                Choose Your Image
                            </label>
                            <label className="image-upload" htmlFor="upld" >
                                {/* onClick={this.getComponent.bind(this)} */}
                                <i className="material-icons"> {<BsCloudUpload />}</i>
                                Upload Your Image
                            </label>
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}