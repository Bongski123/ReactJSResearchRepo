import "./styles.css";
import { Title } from "../components/Title/Title";
import { Body } from "../components/Body/Body";

import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import  Table  from 'react-bootstrap/Table';





const API = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetchPosts()    
    },[])

    const fetchPosts = async () => {
        await axios.get('http://127.0.0.1:9000/api/users').then(({data})=>{
            setPosts(data)

        })
            
        
    }



  return (
    <div className="page upload">
     <h1>User List</h1>
      <Body>
      <div className="userlist-table"  >
     
      <Table Table striped bordered hover size="md">
      <thead>
        <tr>
        
          <th>id</th>
          <th>name</th>
          <th>user_id</th>
          <th>email</th>
          <th>Role</th>
          <th>Action </th>
          
        </tr>
      </thead>
      <tbody>

       {posts.length > 0 &&
    posts.map((row, key) => (
      <tr key={key}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.user_id}</td>
        <td>{row.email}</td>
        <td>{row.role_name}</td>
        <td>
        <Button variant="primary">Edit</Button>{' '} 
        <Button variant="outline-danger">Delete</Button>{''}

        </td>
      
      </tr>
    ))}
      </tbody>
      </Table>
        </div>

      </Body>
    </div>
  );
};

export default API;
