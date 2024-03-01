import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import Content from '../components/Content';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router , Routes ,Route ,Link } from 'react-router-dom';
import {Navbar}  from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import Nav from 'react-bootstrap/Nav'
import {Button} from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import { Body } from '../components/Body/Body';
import "./styles.css";
import { Icon } from 'semantic-ui-react';


const Dashboard = () => {

    const navigate  =  useNavigate();

    const [user, setUser] = useState(null);


    useEffect(()=> {
        const fetchUser = async () => {
            try{

                const response = JSON.parse(localStorage.getItem('token'))
                setUser(response.data);

                const decoded_token =  jwtDecode(response.data.token);
                setUser(decoded_token);

            } catch (error){
                navigate('/login');
            }
        };
        fetchUser();
    }, []);

    

    const handleLogout = async (e) => {

        try{
            localStorage.removeItem('token');
            navigate('/login');

        } catch (error) {
            console.error('Logout failed', error);

          

        }
    };


   




  return (
    <>
     
     <div className="dashboard">
       
   <Body>
     

   <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? '#f5d9ff' : '#d359ff',
                backgroundColor: active ? '#eecef9' : undefined,
              };
          },
        }}
      >
        <SubMenu defaultOpen label="Charts" icon={<Icon name="bar-chart" />}>
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <MenuItem active icon={<Icon name="calendar" />}>
          Calendar (active)
        </MenuItem>
  
        <MenuItem icon={<Icon name="service" />}> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>
            <Content />
    
                Welcome User: {user? user.user_id: 'id'} {user? user.name: 'name'}
                <Button variant ="danger" onClick={handleLogout}>Logout</Button>
     
      
                </Body>
   
    </div>

      

      
    
    
    
    
    </>



  
  );
}

export default Dashboard;
