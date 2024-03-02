import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import { Body } from '../components/Body/Body';
import { Icon } from 'semantic-ui-react';
import Content from '../components/Content';
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import User from './User';
import { Title } from '../components/Title/Title';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = JSON.parse(localStorage.getItem('token'))
                setUser(response.data);

                const decoded_token = jwtDecode(response.data.token);
                setUser(decoded_token);

            } catch (error) {
                navigate('/login');
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async (e) => {
        try {
            localStorage.removeItem('token');
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <>
            <div className="dashboard">
          

                <Body >
             
                    <div className='DASHBOARD' style={{ display: 'flex', height: '20%' }}>
                        <Navbar.Brand className='brand'>MY DASHBOARD</Navbar.Brand>
                
               
                                <Menu>
                                    <MenuItem> Welcome : {user ? user.user_id : 'id'} {user ? user.name : 'name'} </MenuItem>
                                    <SubMenu defaultOpen label="Welcome!" icon={<Icon name="bar-chart" />}>
                                        <MenuItem> <Button className='button-logout' variant="danger" onClick={handleLogout}>Logout</Button> </MenuItem>
                                    </SubMenu>
                                </Menu>
                      
                          
                    </div>
                 
                {<User/>}
            
                   
                </Body>
           
            </div>
            <div>
                
            </div>
        </>
    );
}

export default Dashboard;
