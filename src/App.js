
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import API from "./pages/API";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Register from './pages/Register';
import Aboutme from './Aboutme';

import { Carousel } from './Carousel';
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from './components/Navbar/Navbar';
import React, { useState } from "react"

import UploadFiles from "./pages/UploadFiles";
import { AnimatePresence } from "framer-motion";
import PublicationList from './pages/PublicationList';
import Attachments from './pages/Attachments'
import logo from './image/logonav.jpg'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';


function App() {
  return (

    
    <Router>
      
      <div className="App">
      
        
      <div className="bgphoto" style={{ width: '100%', position: 'fixed'}}/>
{/* 

        <Navbar variant="dark" />
        <div className="logo-container">
        <Link to="/home">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
         */}
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/api" element={<API />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/uploadfiles" element={<UploadFiles />} />
        
        
            <Route path="/publicationlist" element={<PublicationList />} />
            <Route path="/attachments" element={<Attachments />} />
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/> 
          </Routes>
        </AnimatePresence>
      
      </div>
    </Router>
  );
}

export default App;
