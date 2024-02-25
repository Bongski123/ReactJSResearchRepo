
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';

function Uploadfiles(){

 const [file_name, setFile_name] = useState("");
 const [publication_id, setFilePubId] = useState("");
  const [file, setFile] = useState()
  const [msg, setMsg] = useState("");
     
  const upload = () => {
      const formData = new FormData()
      formData.append("file_name", file_name);
      formData.append("publication_id", publication_id);
      formData.append('file', file)
      
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
 



        <div className="uploadForm"  style={{paddingTop: 60}}>
        <div className="uploadTitle"><h1>Upload your Research Paper</h1>
            <div className="col-12">
                <label className="form-label">File_name</label>
                <input type="text" className="form-control" placeholder='Enter Name' autoComplete='off'
                onChange={(e) => setFile_name(e.target.value)}/> 
            </div>
            <div className="col-12">
                <label className="form-label">Publication_id</label>
                <input type="text" className="form-control" placeholder='Enter Publication' autoComplete='off'
                onChange={(e) => setFilePubId(e.target.value)}/> 
            </div>
                
            <div className="col-12">
              <label className="form-label">Upload File</label>
              <input className="form-control form-control-lg" type="file" onChange={(e) => setFile(e.target.files[0])}/>
            </div>

            
          <button  variant="primary" type="button" className="btn btn-primary btn-lg" onClick={upload} style={{marginTop: '30px',width: '40%' ,margin: 'auto'}}>Uploads</button>
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{msg}</h1>
        </div>
        
      
        </div>


        



    
    
        
    );
    
    
    
    }
    
    export default Uploadfiles;