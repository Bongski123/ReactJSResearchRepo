
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
import Login from './Login';
import { Carousel } from './Carousel';
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from './components/Navbar/Navbar';
import React, { useState } from "react"
import UserDashboard from "./UserDashboard";
import UploadFiles from "./pages/UploadFiles";
import { AnimatePresence } from "framer-motion";
import PublicationList from './pages/PublicationList';
import Attachments from './pages/Attachments'

function App() {
  return (

    
    <Router>
      
      <div className="App">
        
        <Navbar variant="dark" />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/api" element={<API />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/uploadfiles" element={<UploadFiles />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/publicationlist" element={<PublicationList />} />
            <Route path="/attachments" element={<Attachments />} />
          </Routes>
        </AnimatePresence>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
