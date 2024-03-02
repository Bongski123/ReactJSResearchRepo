import React, { useState } from 'react';
import { Sidebar } from 'react-pro-sidebar';
import './Sidebar.css';

const SidebarExample = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <Sidebar
        sidebar={
          <div className="sidebar-content">
            <ul className="menu">
              <li>Main Menu 1</li>
              <li>Main Menu 2
                <ul className="submenu">
                  <li>Sub Menu 1</li>
                  <li>Sub Menu 2</li>
                </ul>
              </li>
            </ul>
          </div>
        }
        open={sidebarOpen}
        onSetOpen={toggleSidebar}
        styles={{ sidebar: { background: 'white', width: '200px' } }}
      >
        <button onClick={toggleSidebar} className="toggle-sidebar">Toggle Sidebar</button>
        <button onClick={toggleTheme} className="toggle-theme">Toggle Theme</button>
        <div className="main-content">Main Content</div>
      </Sidebar>
    </div>
  );
};

export default SidebarExample;
