import React, { useState } from 'react';
import './Navbar.css'; // Import CSS file for styling
import { Nav } from 'react-bootstrap';
import{BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';




export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav  className="navbar" >
      
      <div className="navbar-container " >
      
       
        
        <div   className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <div  className="navbar-brand text-decoration-none text-white">My Profile</div>
         <Nav.Link as = {Link} to = {"/home"} className="text-decoration-none text-white">Home</Nav.Link>
           <Nav.Link as = {Link} to = {"/education"} className="text-decoration-none text-white">Education</Nav.Link> 
           <Nav.Link as = {Link} to = {"/contact"} className="text-decoration-none text-white">Contact</Nav.Link> 
           <Nav.Link as = {Link} to = {"/api"} className="text-decoration-none text-white">UserList</Nav.Link> 
           <Nav.Link as = {Link} to = {"/uploadfiles"} className="text-decoration-none text-white">Upload </Nav.Link>
           <Nav.Link as = {Link} to = {"/about"} className="text-decoration-none text-white">About </Nav.Link>

           
           <NavDropdown
              id="nav-dropdown-dark-example"
              title="About"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/about">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="userdashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
