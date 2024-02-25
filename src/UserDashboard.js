// Sidebar.js
import React, { useState } from 'react';
import './sidebar.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
const UserDashboard = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
     <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h3>Dashboard</h3>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
      <ul className="sidebar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default UserDashboard;
