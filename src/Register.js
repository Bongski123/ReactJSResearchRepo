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
import Dropdown from 'react-bootstrap/Dropdown';

 const Register =() => {
    
  
    return (
       <div>
       <form >
      <input type="text" placeholder="name" value={''} />
      <input type="email" placeholder="user_id" value={''}  />
      <input type="password" placeholder="email" value={''}  />
      <input type="password" placeholder="password" value={''}  />
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Student</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Faculty</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   
      <button type="submit">Register</button>
    </form>
       </div>
      );
    }
  
  export default Register;