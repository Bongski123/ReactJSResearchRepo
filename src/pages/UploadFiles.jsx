
import { Title } from "../components/Title/Title";
import { Body } from "../components/Body/Body";

import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import "./styles.css";

const UploadFiles = () => {
    const [title, setTitle] = useState("");
    const [authors, setAuthors] = useState("");
    const [abstract, setAbstract] = useState("");
    const [publication_type, setPubType] = useState("");
    const [citation, setCitation] = useState("");
    const [file, setFile] = useState()
    const [id, setID] = useState("");

  const [msg, setMsg] = useState("");
     
  const upload = () => {
      const formData = new FormData()
      formData.append("title", title);
      formData.append("authors", authors);
      formData.append("abstract", abstract);
      formData.append("publication_type", publication_type);
      formData.append("citation", citation);
      formData.append('file', file)
      formData.append("id", id);
      axios.post('http://127.0.0.1:9000/create',formData )
      .then((response) => {
          console.log(response);
          if(response.data.Status === 'Success') {
              setMsg(   
              
              
              <Alert variant="success">
              <Alert.Heading>Upload File Succesfuly</Alert.Heading>
              
              <hr />
            </Alert>);
          }else{
              setMsg("Error");
          }
      })
      .catch(er => console.log(er))
  }
  return (
    <div className="page upload">
   
      <Body>
      <div className="upload-Form" >
     
            <div className="col-19">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" placeholder='Enter Name' autoComplete='off'
                onChange={(e) => setTitle(e.target.value)}/> 
            </div>
            <div className="col-19">
                <label className="form-label">Authors</label>
                <input type="text" className="form-control" placeholder='Enter Name' autoComplete='off'
                onChange={(e) => setAuthors(e.target.value)}/> 
            </div>
           
            <div className="col-19">
                <label className="form-label">Abstract</label>
                <input type="text" className="form-control" placeholder='Enter Name' autoComplete='off'
                onChange={(e) => setAbstract(e.target.value)}/> 
            </div>
           
            <div className="col-19">
                <label className="form-label">Publication_Type</label>
                <input type="text" className="form-control" placeholder='Enter Name' autoComplete='off'
                onChange={(e) => setPubType(e.target.value)}/> 
            </div>
           
            <div className="col-19">
                <label className="form-label">Citation</label>
                <input type="text" className="form-control" placeholder='Enter Name' autoComplete='off'
                onChange={(e) => setCitation(e.target.value)}/> 
            </div>
              

            <div className="col-19">
              <label className="form-label">Upload File</label>
              <input className="form-control form-control-lg" type="file" onChange={(e) => setFile(e.target.files[0])}/>
        
            <div className="col-19">
                <label className="form-label">Uploader</label>
                <input type="text" className="form-control" placeholder='Enter Name' autoComplete='off'
                onChange={(e) => setID(e.target.value)}/> 
            </div>
           
           
                
       

            
          <button  variant="primary" type="button" className="btn btn-primary btn-lg" onClick={upload} style={{marginTop: '30px',width: '40%' ,margin: 'auto'}}>Uploads</button>
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '50px'}}>{msg}</h1>
        </div>
        
      
        </div>

      </Body>
    </div>
  );
};

export default UploadFiles;
