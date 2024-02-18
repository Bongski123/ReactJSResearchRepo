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
import Alert from 'react-bootstrap/Alert';

import { ReactDOM } from 'react';



function DeleteUser(){

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetchPosts()    
    },[])

    const fetchPosts = async () => {
        await axios.get('https://nodejs-mysql-api-almario-ylza.onrender.com/api/user/id').then(({data})=>{
            setPosts(data)

        })
            
        
    }


    const [show, setShow] = useState(true);

  return (
    <>
    <Alert show={show} variant="success">
      <Alert.Heading>My Alert</Alert.Heading>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-success">
          Close me
        </Button>
      </div>
    </Alert>

    {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
  </>
);
}
  



export default DeleteUser;