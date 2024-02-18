import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {map} from 'react';
import{BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import  Navbar from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import logo from './logo.svg';
import './App.css';
import  Table  from 'react-bootstrap/Table';
import App from './App';
import Button from 'react-bootstrap/Button';





function Users(){

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetchPosts()    
    },[])

    const fetchPosts = async () => {
        await axios.get('https://nodejs-mysql-api-almario-ylza.onrender.com/api/users').then(({data})=>{
            setPosts(data)

        })
            
        
    }




  return (
    <div>

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
  );
}



export default Users;