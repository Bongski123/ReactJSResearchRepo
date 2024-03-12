import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { Body } from '../components/Body/Body';
import "./styles.css";
import { Title } from '../components/Title/Title'
import Navbar from '../components/Navbar/Navbar';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLockOpen } from "react-icons/md";
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const [user_id, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        // Check if fields are empty
        if (!user_id || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oopssyy...',
                text: 'Please enter both username and password!',
            });
            return;
        }

        try {
            const response = await axios.post('https://almariobackendnodejs.onrender.com/api/login', {
                user_id,
                password,
            });

            localStorage.setItem("token", JSON.stringify(response));
            navigate('/dashboard');
        } catch (error) {
            console.error('login failed', error);
            // Display notification for wrong username or password
            Swal.fire({
                icon: 'error',
                title: 'Oopssyy...',
                text: 'Incorrect username or password!',
            });
        }
    };

    return (
        <Body>
            <div className='container-login'>
                <Col md={6} xs={12}>
                    <Title>Sign in</Title>
                    <div className="login-form">
                        <FaRegUser style={{ position: 'absolute', top: '47%', transform: 'translateY(-10%)', left: '632px' ,display: 'flex' }} />
                        <input
                            type="user_id"
                            value={user_id}
                            onChange={(e) => setUserID(e.target.value)}
                            placeholder="User Id"
                            style={{ paddingLeft: '60px' }} // Adjust padding to accommodate the icon
                            required  // Make the field required
                        />
                        <MdOutlineLockOpen style={{ position: 'absolute', top: '56%', transform: 'translateY(-10%)', left: '632px' }} />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            style={{ paddingLeft: '60px' }} // Adjust padding to accommodate the icon
                            required  // Make the field required
                        />
                        <Button variant="primary" className='buttons' onClick={handleLogin}>Login</Button>
                    </div>
                </Col>
            </div>
            <Navbar />
        </Body>
    );
};

export default Login;
