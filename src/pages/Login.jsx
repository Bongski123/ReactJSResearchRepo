import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import jwtDecode from 'jwt-decode'; 
import { Body } from '../components/Body/Body';
import "./styles.css";
import {Title} from '../components/Title/Title'
import Navbar from '../components/Navbar/Navbar';
import { FaRegUser } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";



const Login = () => {
    const navigate = useNavigate();
    const [user_id, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        try {
            const response = await axios.post('https://almariobackendnodejs.onrender.com/api/login', {
                user_id,
                password,
            });

            localStorage.setItem("token", JSON.stringify(response));
            navigate('/dashboard');
        } catch (error) {
            console.error('login failed', error);
        }
    };

    return (
       
        <Body>
            <div className='container-login'>
            
        <Col md={6} xs={12}>
            <Title>Log In</Title>
            <div className="login-form">
                <FaRegUser style={{ position: 'absolute', top: '43%', transform: 'translateY(-10%)', left: '632px' }} />
                <input 
                    type="user_id" 
                    value={user_id} 
                    onChange={(e) => setUserID(e.target.value)}   
                    placeholder="User Id" 
                    style={{ paddingLeft: '60px' }} // Adjust padding to accommodate the icon
                />
               <FaUnlockKeyhole style={{ position: 'absolute', top: '52%', transform: 'translateY(-10%)', left: '632px' }}  />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    style={{ paddingLeft: '60px' }} // Adjust padding to accommodate the icon
                />
                
                <Button variant="danger" className='buttons' onClick={handleLogin}>Login</Button>
            </div>
        </Col>
        
        </div>
        <Navbar/>
        </Body>
        
    );
};

export default Login;
