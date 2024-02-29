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
        await axios.get('https://jsonplaceholder.typicode.com/posts').then(({data})=>{
            setPosts(data)

        })
            
        
    }



  return (
    <div className="page API">
     <Title>User List</Title>
      <Body>
      <div className="userlist-table"  >
     
      <Table Table striped bordered hover size="md">
      <thead>
        <tr>
        
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
       
          
        </tr>
      </thead>
      <tbody>

       {posts.length > 0 &&
    posts.map((row, key) => (
      <tr key={key}>
        <td>{row.userId}</td>
        <td>{row.id}</td>
        <td>{row.title}</td>
        <td>{row.body}</td>
        
    
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
