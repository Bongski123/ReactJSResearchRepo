import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here, e.g., making an API request to the back-end

        // After successful login, redirect to the dashboard
        history.push('/dashboard');
    };

    return (
        <main className="login">
            <h1 className="loginTitle">Log into your account</h1>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="loginBtn">SIGN IN</button>
                <p>
                    Don't have an account? <Link to="/register">Create one</Link>
                </p>
            </form>
        </main>
    );
};

export default Login;