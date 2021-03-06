import * as React from "react";
import axios from "axios";
import { Component } from 'react';
import { BiImageAdd, BiReset, BiPointer } from "react-icons/bi";
import { BsCloudUpload } from "react-icons/bs";
import Images from "../Images";
import $ from 'jquery';
import './Step12.css';


export default class Step12 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 'add_new',
      order: '0',
    };

    this.handleChange = this.handleChange.bind(this);

  }

  state = {
    file: null
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  handleFile(e) {

    console.log(e.target.files, "$$$$");
    console.log(e.target.files[0], "$$$$")

    let file = e.target.files
    console.log(file);
    if (this.state.file !== null) {
      this.setState({ order: '1' });
    }


    //for multiple files add all
    //handle them at the backend

    this.setState({ file: file })
  }

  handleUpload(e) {
    e.preventDefault();
    console.log(this.state, "THE STATE ----------")

    let file = this.state.file
    let formdata = new FormData()
    console.log(file);


    // formdata.append('name' , 'image-data');
    formdata.append('input_type', "retrain");
    formdata.append('class_name', this.state.value)
    formdata.append('file', file);
    // data.append('file', file);
    formdata.append('filename', this.fileName.value);
    formdata.forEach((value, key) => {
      console.log(key + value)
    });
    for (var key in file) {
      formdata.append(key, file[key]);
    }
    for (let key of formdata.keys()) {
      console.log(key, formdata.get(key));
    }
    console.log(file);
    console.log(formdata);

    // fetch('http://localhost:5000/uploadimages', {
    //       method: 'POST',
    //       body: formdata,
    //       mode: 'no-cors',
    //       headers: {
    //         'Content-Type': 'multipart/form-data; ',
    //       },
    //       enctype: "multipart/form-data",
    //     })
    //     .then((response) => {
    //     //   response.json().then((body) => {
    //     //     this.setState({ imageURL: `http://localhost:5000/${body.file}` });
    //     //          this.setState({order: '2'});
    //     //   });

    //       console.log(response);
    //     });

    axios({
      url: `${this.props.url}/uploadimages`,
      method: 'POST',
      headers: {
        // contentType: 'application/json',
        "Access-Control-Allow-Origin": "*",
      },
      // dataType : 'json',
      mode: 'no-cors',
      data: formdata //pass here..
    }).then((res) => {
      console.log(res);
      if (res.data !== null) {
        this.setState({ order: '2' });
      }
    }, (err) => {
      console.log(err);
    })


  }

  render() {
    $(function () {
      var $select = $(".1-50");
      $select.append($('<option></option>').val('add_new').html('ADD NEW'))
      for (var i = 0; i <= 42; i++) {
        $select.append($('<option></option>').val(i).html(i))
      }
    });

    return (
      <div className="uploadfiles" style={{ margin: "0% 4% 4% 6%", }}>
        <h1>Upload Photo Batch With Class Id</h1>


        {/* {this.state.order === '1' && <span style={{ color: 'green', fontWeight: "bold" }}>Images Chosen. Click on Upload Photo Batch to continue.</span>}
        <br></br> */}
        {this.state.order === '1' && <span style={{ color: 'green', fontWeight: "bold" }}>Images Batch uploaded. Please proceed to step 2.</span>}

        {/* <div style={{padding: "5%"}}> */}
        <div className="response-img" style={{ display: 'flex', justifyContent: 'center' }}>
          {/* <img src="/assets/classes-of-German-Traffic-Sign.png" height="280px" style={{width: '100%'}} alt="" /> */}
          <img src='/assets/plot_of_classes.png' height="450px" />
        </div>
        <form>
          <div className="">
            <label></label>
            <input type='file' id="input" multiple name="file" onChange={(e) => this.handleFile(e)} />

          </div>
          <div style={{ display: "none" }}>
            {/* <div> */}
            {/* <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" /> */}
            <input ref={(ref) => { this.fileName = "imgg" }} type="text" placeholder="Enter the desired name of file" />
          </div>

          <button type="button" id='upld' style={{ display: "none" }} onClick={(e) => this.handleUpload(e)}>Upload</button>
        </form>

        <div className="label">
          <button className="image-upload" onClick={event => window.location.href = '/input'}>
            <i className="material-icons"> {<BiReset />}</i>
            Reset Choices
          </button>
          <label id="dropdown" className="image-upload">
            <i className="material-icons"> {<BiPointer />}</i>
          Choose Class ID:
          <select className="1-50" value={this.state.value} onChange={this.handleChange} style={{ margin: "2px", padding: "4px" }}>
            </select>
          </label>
          <label className="image-upload" htmlFor="input">
            <i className="material-icons"> {<BiImageAdd />}</i>
            Upload Photo Batch
          </label>
          {/* <label className="image-upload" htmlFor="upld" >
            <i className="material-icons"> {<BsCloudUpload />}</i>
            Upload Photo Batch
          </label> */}
        </div>
      </div>

    );
  }
}


