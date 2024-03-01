import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import jwtDecode from 'jwt-decode'; 
import { Body } from '../components/Body/Body';
import "./styles.css";
import { Title } from '../components/Title/Title';
import Navbar from '../components/Navbar/Navbar';
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
                
                <Row className="justify-content-center align-items-center h-100">
                    
                    <Col md={6} xs={12}>
                    <Title>Log In</Title>
                        <div className="login-form">
                         
                            <input type="user_id" value={user_id} onChange={(e) => setUserID(e.target.value)} placeholder="User Id" />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            <Button variant="primary" className='buttons' onClick={handleLogin}>Login</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Navbar />
        </Body>
        
    );
}

export default Login;
