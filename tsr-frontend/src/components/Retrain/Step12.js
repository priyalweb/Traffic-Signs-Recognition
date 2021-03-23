import * as React from "react";
import axios from "axios";
import {Component } from 'react';
import './Step12.css';


export default class Step12 extends Component {
  
  state = {
    file: null
  }

  handleFile(e){

    console.log(e.target.files, "$$$$");
    console.log(e.target.files[0], "$$$$")

    let file = e.target.files

    
    //for multiple files add all
    //handle them at the backend

    this.setState({file: file})
  }

  handleUpload(e) {
    e.preventDefault();
    console.log(this.state , "THE STATE ----------")

    let file = this.state.file
    let formdata = new FormData()
    console.log(file);
    
    // formdata.append('name' , 'image-data');
    formdata.append('file',file);
    // data.append('file', file);
    formdata.append('filename', this.fileName.value);

    for(var key in file){
      formdata.append(key , file[key].name);
      
    }
    for(let key of formdata.keys()){
      console.log(key, formdata.get(key));
    }
    console.log(file);
    console.log(formdata);

    fetch('http://localhost:5000/uploadimages', {
          method: 'POST',
          body: formdata,
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

    // axios({
    //   url: 'http://localhost:5000/uploadimages',
    //   method: 'POST',
    //   headers: {
    //     // contentType: 'application/json',
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   // dataType : 'json',
    //   mode: 'no-cors',
    //   data: formdata //pass here..
    // }).then((res) =>{
    //   console.log(res);
    // },(err) => {
    //   console.log(err);
    // })

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
    return (
    <div className="uploadfiles">
      <h1>The form</h1>

      <form>
        <div className= "">
          <label>select File</label>
          <input type='file' multiple  name= "file" onChange={(e) => this.handleFile(e)} />

        </div>
        <div style={{display: "none"}}>
                            {/* <div> */}
                            {/* <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" /> */}
                    <input ref={(ref) => { this.fileName = "imgg" }} type="text" placeholder="Enter the desired name of file" />
        </div>

        <button type="button" onClick={(e) => this.handleUpload(e)}>Upload</button>
      </form>
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