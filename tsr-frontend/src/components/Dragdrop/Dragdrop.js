import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

class Basic extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({files})
    };
    this.state = {
      files: []
    };
  }

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default Basic;

// import React, {useMemo} from 'react';
// import {useDropzone} from 'react-dropzone';

// const baseStyle =  {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//     borderWidth: 2,
//     borderRadius: 2,
//     borderColor: '#eeeeee',
//     borderStyle: 'dashed',
//     backgroundColor: '#fafafa',
//     color: '#bdbdbd',
//     outline: 'none',
//     transition: 'border .24s ease-in-out'
//   };
  
//   const activeStyle = {
//     borderColor: '#2196f3'
//   };
  
//   const acceptStyle = {
//     borderColor: '#00e676'
//   };
  
//   const rejectStyle = {
//     borderColor: '#ff1744'
//   };
  
//   function StyledDropzone(props) {
//     const {
//       getRootProps,
//       getInputProps,
//       isDragActive,
//       isDragAccept,
//       isDragReject
//     } = useDropzone({accept: 'image/*'});
  
//     const style = useMemo(() => ({
//       ...baseStyle,
//       ...(isDragActive ? activeStyle : {}),
//       ...(isDragAccept ? acceptStyle : {}),
//       ...(isDragReject ? rejectStyle : {})
//     }), [
//       isDragActive,
//       isDragReject,
//       isDragAccept
//     ]);
  
//     return (
//       <div className="container">
//         <div {...getRootProps({style})}>
//           <input {...getInputProps()} />
//           <p>Drag 'n' drop some files here, or click to select files</p>
//         </div>
//       </div>
//     );
//   }
  
//   <StyledDropzone />
  
// function Accept(props) {
//   const {
//     acceptedFiles,
//     fileRejections,
//     getRootProps,
//     getInputProps
//   } = useDropzone({
//     accept: 'image/jpeg, image/png'
//   });

//   const acceptedFileItems = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   const fileRejectionItems = fileRejections.map(({ file, errors }) => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//       <ul>
//         {errors.map(e => (
//           <li key={e.code}>{e.message}</li>
//         ))}
//       </ul>
//     </li>
//   ));

//   return (
//     <section className="container">
//       <div {...getRootProps({ className: 'dropzone' })}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//         <em>(Only *.jpeg and *.png images will be accepted)</em>
//       </div>
//       <aside>
//         <h4>Accepted files</h4>
//         <ul>{acceptedFileItems}</ul>
//         <h4>Rejected files</h4>
//         <ul>{fileRejectionItems}</ul>
//       </aside>
//     </section>
//   );
// }

// // export default Accept;
// export default StyledDropzone;
// {/* <Accept /> */}