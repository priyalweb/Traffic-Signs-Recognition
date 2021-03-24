import * as React from "react";
import axios from "axios";
import { Component } from 'react';
import { BiImageAdd, BiReset, BiPointer } from "react-icons/bi";
import { BsCloudUpload } from "react-icons/bs";
import $ from 'jquery';
import './Step12.css';


export default class Step12 extends Component {

  constructor(props) {
    super(props)

    this.state = {value: 1};

    this.handleChange = this.handleChange.bind(this);
  
  }

  state = {
    file: null
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleFile(e) {

    console.log(e.target.files, "$$$$");
    console.log(e.target.files[0], "$$$$")

    let file = e.target.files


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
    formdata.append('input_type',"retrain");
    formdata.append('class_name',this.state.value)
    formdata.append('file', file);
    // data.append('file', file);
    formdata.append('filename', this.fileName.value);
    formdata.forEach((value,key) => {
      console.log(key+value)
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
    }, (err) => {
      console.log(err);
    })

    // fetch('http://localhost:5000/uploadimages', {
    //       method: 'POST',
    //       body: JSON.stringify(formdata),
    //       mode: 'no-cors',
    //       dataType : 'json',
    //       headers: {
    //         'Content-Type': 'multipart/form-data; ',
    //       },
    //     })
    //     .then((response) => {
    //     //   response.json().then((body) => {
    //     //     this.setState({ imageURL: `http://localhost:5000/${body.file}` });
    //     //          this.setState({order: '2'});
    //     //   });

    //       console.log(response);
    //     },(err) => {
    //       console.log("error");
    //     });

  }

  render() {
    $(function(){
      var $select = $(".1-50");
      for (var i=1;i<=50;i++){
          $select.append($('<option></option>').val(i).html(i))
      }
  });

    return (
      <div className="uploadfiles">
        <h1>Upload Photo Batch with Class Id</h1>

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

          <button type="button" id='upld' style={{display: "none"}} onClick={(e) => this.handleUpload(e)}>Upload</button>
        </form>

        <div className="label">
          <button className="image-upload">
              <i className="material-icons"> {<BiReset />}</i>
            Reset Choices
          </button>
          <label id="dropdown" className="image-upload">
           <i className="material-icons"> {<BiPointer />}</i>
          Choose Class ID:
          <select className="1-50" value={this.state.value} onChange={this.handleChange} style={{margin:"2px", padding:"4px"}}>
            {/* <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option> */}
          </select>
        </label>
          <label className="image-upload" htmlFor="input">
          <i className="material-icons"> {<BiImageAdd />}</i>
            Choose Photo Batch
          </label>
          <label className="image-upload" htmlFor="upld" >
            <i className="material-icons"> {<BsCloudUpload />}</i>
            Upload Photo Batch
          </label>
        </div>
      </div>
      
    );
  }
}


// const { useState, useRef } = React;

// export default function Uploader() {
//    const file = useRef({});

//    function readContent(file) {
//       return new Promise((accept, reject) => {
//          const reader = new FileReader();
//          reader.readAsDataURL(file);
//          reader.onload = () => accept({
//             name: file.name,
//             type: file.type,
//             content: reader.result
//          });
//          reader.onerror = () => reject();
//       });
//    }

//    function upload(file) { //  upload

//       console.log(file)

//       return new Promise(accept => {
//          setTimeout(() => accept(file), 1000);
//       });
//    }

//    function onSubmit(event) {
//       event.preventDefault();

//       const dataa = '';
//       const filesAsArray = [...file.current.files];
//       console.log([...file.current.files])
//       const fileInfo = Promise.all(filesAsArray.map(readContent))
//           .then(files => Promise.all(files.map(upload)))
//           .then(console.log);


//       // console.log(filesAsArray);
//       // console.log(JSON.stringify(filesAsArray));

//       fetch('http://localhost:5000/uploadimages', {
//           method: 'POST',
//           body: {
//           "image" : fileInfo
//           },
//           mode: 'no-cors',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           enctype: "multipart/form-data",
//         })
//         .then((response) => {
//           // response.json().then((body) => {
//           // console.log(body);
//           // });
//           console.log(response);
//         });


//       return true;
//    }

//    return (
//      <div className="uploadfiles">
//        <form onSubmit={onSubmit}>
//          <input ref={file} type="file" multiple={true} />
//          <input type="submit" value="Upload" />
//        </form>
//      </div>
//    );
// }


// // class ImageUpload extends React.Component {
// //   state = {
// //    files: []
// //   }

// //   fileSelectedHandler = (file: any) => {
// //     let addedFiles = this.state.files.concat(file)
// //     this.setState({ files: addedFiles })
// //     console.log("upload file " + file.name)
// //   }

// //   render() {
// //     return (
// //       <div className="uploadfiles">
// //       < form >
// //         <div>
// //           <h2>Upload images</h2>
// //         </div>
// //         <h3>Images</h3>
// //         <input type="file" multiple onChange={this.fileSelectedHandler} />
// //       </form>
// //       </div>
// //     )
// //   }
// // }

// // export default ImageUpload