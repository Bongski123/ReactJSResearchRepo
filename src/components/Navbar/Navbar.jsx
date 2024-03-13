import React from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import "./Navbar.css";

export const Navbar = () => {
  return (
    
    <nav className="navbar">
   <img src="images/ncf-logo.png" alt="Image description" className="nav-image" style={{ width: '450px', height: 'auto' }} />
     
   
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        {/* <li>
          <Link to="/education">Education</Link>
        </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/api">API</Link>
        </li>

        <li>  
           <Link to="/Login">Sign in</Link>
        </li>
   


     
  
        
      </ul>
      

    </nav>
  );
};

export default Navbar;
