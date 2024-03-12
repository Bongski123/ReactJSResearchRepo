import React from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import "./Navbar.css";

export const Navbar = () => {
  return (
    
    <nav className="navbar">
     <h2>NCF Research Nexus</h2>
   
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

        <Dropdown className="dropdwon">
      <Dropdown.Toggle  className="dropdown-nav">
      <Link to="/Login">Sign in</Link>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/register">Sign Up</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown>
     
  
        
      </ul>
      

    </nav>
  );
};

export default Navbar;
