
import { Title } from "./Title/Title";
import { Body } from "./Body/Body";

import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import  Table  from 'react-bootstrap/Table';





const Attachments = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetchPosts()    
    },[])

    const fetchPosts = async () => {
        await axios.get('http://127.0.0.1:9000/api/attachments').then(({data})=>{
            setPosts(data)

        })
            
        
    }



  return (
    <div className="publication page">
      <Title>Files</Title>
      <Body>
      <div className="publicaion-form" >
     
      <Table Table striped bordered hover size="md">
      <thead>
        <tr>
        
          <th>File Name</th>
          <th>FILE</th>
         
       
          
        
          
        </tr>
      </thead>
      <tbody>

       {posts.length > 0 &&
    posts.map((row, key) => (
      <tr key={key}>
        <td>{row.file_name}</td>
        <td>{row.docs}</td>
        
     
      
      </tr>
    ))}
      </tbody>
      </Table>
        </div>

      </Body>
    </div>
  );
};

export default Attachments;
