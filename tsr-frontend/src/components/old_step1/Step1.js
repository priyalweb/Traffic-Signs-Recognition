import React, { Component } from 'react';

import { BiImageAdd } from "react-icons/bi";
import Step2 from '../Step2/Step2';
import "../Tab/Tab.css";
import "./Step1.css";


export default class Step1 extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          imageURL: '',
          order: '1',
        };
    
        this.handleUploadImage = this.handleUploadImage.bind(this);
      }
    
      handleUploadImage(ev) {
        ev.preventDefault();
        
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        console.log(this.uploadInput.files[0]);
        console.log(data);
        // console.log(this.uploadInput.files[0].name)
        // console.log(this.fileName.value);
        data.append('filename', this.fileName.value);
        

        this.setState({order: '2'});


        fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: data,
          mode: 'no-cors',
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
          enctype: "multipart/form-data",
        })
        .then((response) => {
        //   response.json().then((body) => {
        //     this.setState({ imageURL: `http://localhost:5000/${body.file}` });
        //          this.setState({order: '2'});
        //   });
        
          console.log(response);
        });
      }

    //   getComponent(event) {
    //     console.log('li item clicked!');
    //     event.currentTarget.style.backgroundColor = '#ccc';
    //   }

    render() {
        return (
            <div id="stp1">
                <div className="page">
                    <div className="container">
                        <h1 className="heading">Add your Sign</h1>
                        {this.props.base64 !== null && <span style={{ color: 'green' }}>Image Chosen. Click on Upload your photo to continue.</span>}
                        <br></br>
                        {/* {this.state.order !== '1' && this.props.base64 !== null && <span style={{ color: 'green' }}>Image uploaded.</span>} */}
                        <div className="img-holder">
                            <img src={this.props.profileImg} alt="" id="img" className="img" />
                        </div>
                        
                        {/* <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.props.update} /> */}
                        {/* onChange={this.sendData} */}
                        
                        <form onSubmit={this.handleUploadImage}>
                            <div>
                            <input type="file" name='file' accept="image/*"  id="input" ref={(ref) => { this.uploadInput = ref; }} onChange={this.props.update}/>
                            </div>
                            <div style={{display: "none"}}>
                            {/* <div> */}
                            {/* <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" /> */}
                            <input ref={(ref) => { this.fileName = "imgg" }} type="text" placeholder="Enter the desired name of file" />
                            </div>
                            <br />
                            <div>
                            <button style={{display: "none"}}  id="upld"  >Upload</button>
                            </div>
                            {/* <img src={this.state.imageURL} alt="img" /> */}
                        </form>

                        <div className="label">
                            <label className="image-upload" htmlFor="input">
                                <i className="material-icons"> {<BiImageAdd />}</i>
                                Choose your Photo
                            </label>
                            <label className="image-upload" htmlFor="upld" >
                            {/* onClick={this.getComponent.bind(this)} */}
                                <i className="material-icons"> {<BiImageAdd />}</i>
                                Upload your Photo
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}