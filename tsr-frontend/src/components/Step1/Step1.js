import * as React from "react";
import './Step1.css';

const { useState, useRef } = React;

export default function Uploader() {
   const file = useRef({});
   
   function readContent(file) {
      return new Promise((accept, reject) => {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => accept({
            name: file.name,
            type: file.type,
            content: reader.result
         });
         reader.onerror = () => reject();
      });
   }
  
   function upload(file) { //  upload

      console.log(file)

      return new Promise(accept => {
         setTimeout(() => accept(file), 1000);
      });
   }
   
   function onSubmit(event) {
      event.preventDefault();
      
      const dataa = '';
      const filesAsArray = [...file.current.files];
      console.log([...file.current.files])
      const fileInfo = Promise.all(filesAsArray.map(readContent))
          .then(files => Promise.all(files.map(upload)))
          .then(console.log);


      // console.log(filesAsArray);
      // console.log(JSON.stringify(filesAsArray));
      
      fetch('http://localhost:5000/uploadimages', {
          method: 'POST',
          body: {
          "image" : fileInfo
          },
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          enctype: "multipart/form-data",
        })
        .then((response) => {
          // response.json().then((body) => {
          // console.log(body);
          // });
          console.log(response);
        });
        

      return true;
   }
   
   return (
     <div className="uploadfiles">
       <form onSubmit={onSubmit}>
         <input ref={file} type="file" multiple={true} />
         <input type="submit" value="Upload" />
       </form>
     </div>
   );
}


// class ImageUpload extends React.Component {
//   state = {
//    files: []
//   }

//   fileSelectedHandler = (file: any) => {
//     let addedFiles = this.state.files.concat(file)
//     this.setState({ files: addedFiles })
//     console.log("upload file " + file.name)
//   }

//   render() {
//     return (
//       <div className="uploadfiles">
//       < form >
//         <div>
//           <h2>Upload images</h2>
//         </div>
//         <h3>Images</h3>
//         <input type="file" multiple onChange={this.fileSelectedHandler} />
//       </form>
//       </div>
//     )
//   }
// }

// export default ImageUpload