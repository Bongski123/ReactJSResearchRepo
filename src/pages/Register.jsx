import React, { useState } from 'react';
import axios from 'axios';
import { Title } from "../components/Title/Title";
import { Body } from "../components/Body/Body";
import { Alert } from 'react-bootstrap';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    user_id: '',
    email: '',
    password: '',
    role_id: ''
  });

  const [msg, setMsg] = useState("");

  const { name, user_id, email, password, role_id } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('https://almariobackendnodejs.onrender.com/api/register', {
        name,
        user_id,
        email,
        password,
        role_id 
      });

      setMsg(   
        <Alert variant="success">
          <Alert.Heading>Successfully Registered</Alert.Heading>
          <hr />
        </Alert>
      );
    } catch (err) {
      console.error(err.response.data.error);
    }
  };

  return (
    <div className='register page'>
      <Title>Registration</Title>
      <Body>
        {msg}
        <form className='regform' onSubmit={handleSubmit}>
          <label className="form-label">Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        <label className="form-label">User_id</label>
        <input
          type="user_id"
          placeholder="User ID"
          name="user_id"
          value={user_id}
          onChange={handleChange}
          required
        />
         <label className="form-label">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
         <label className="form-label">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          minLength="6"
          required
        />
         <label className="form-label">Role</label>
        <input
          type="text"
          placeholder="Role ID"
          name="role_id"
          value={role_id}
          onChange={handleChange}
          required
        />
          <button variant="primary" type="button" className="btn btn-primary btn-lg" onClick={handleSubmit} style={{marginTop: '20px', width: '40%', margin: 'auto'}}>Submit</button>
        </form>
      </Body>
    </div>
  );
}

export default Register;
