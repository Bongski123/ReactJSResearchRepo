import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';

import "./Navbar.css";

export const Navbar = () => {
  return (
    
    <nav className="navbar">
   
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/api">API</Link>
        </li>
     
  
        
      </ul>
      

    </nav>
  );
};

export default Navbar;
