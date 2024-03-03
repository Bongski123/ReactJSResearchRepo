import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiRead } from "react-icons/ci";
import "./User.css"
const User = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [showReadModal, setShowReadModal] = useState(false); // New state for the read-only modal
   
    const [selectedUser, setSelectedUser] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        user_id: '',
        email: '',
        password: '',
        role_id: '',
    });

    const user = JSON.parse(localStorage.getItem('token'));
    const token = user.data.token;
    const headers = {
        accept: 'application/json',
        Authorization: token,
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://almariobackendnodejs.onrender.com/api/users', { headers });
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]); // Include fetchUsers in the dependency array

    const handleClose = () => setShow(false);

    const handleShow = (user) => {
        setSelectedUser(user);
        if (user) {
            setFormData({
                name: user.name,
                user_id: user.user_id,
                email: user.email,
                password: user.password,
                role_id: user.role_id,
            });
        } else {
            setFormData({
                name: '',
                user_id: '',
                email: '',
                password: '',
                role_id: '',
            });
        }
        setShow(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreateSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('https://nodejs-mysql-api-almario-ylza.onrender.com/api/register', formData, { headers });
            Swal.fire({
                icon: 'success',
                text: 'User created successfully!',
            }).then(() => {
                fetchUsers();
               
            });
        } catch (error) {
            console.error('Error creating user:', error);
            Swal.fire({
                icon: 'error',
                text: 'An error occurred while creating user.',
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`https://nodejs-mysql-api-almario-ylza.onrender.com/api/user/${selectedUser.id}`, formData, { headers });
            Swal.fire({
                icon: 'success',
                text: 'User updated successfully!',
            });
           
         
        } catch (error) {
            console.error('Error updating user:', error);
            Swal.fire({
                icon: 'error',
                text: 'An error occurred while updating user.',
            });
        }
    };

    const deleteProduct = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            return result.isConfirmed;
        });
        if (!isConfirm) {
            return;
        }

        await axios.delete(`https://nodejs-mysql-api-almario-ylza.onrender.com/api/user/${id}`, { headers: headers }).then(({ data }) => {
            Swal.fire({
                icon: 'success',
                text: "Successfully Deleted"
            });
            fetchUsers();
        }).catch(({ response: { data } }) => {
            Swal.fire({
                text: data.message,
                icon: "error"
            });
        });
    };
    const handleReadModalShow = (user) => {
        setSelectedUser(user);
        setShowReadModal(true);
    };

    const handleReadModalClose = () => {
        setShowReadModal(false);
    };

    return (
        <>
    <div className='container'>
        <br />
        <div className='col-12'>
            <Button variant='btn btn-success mb-2 float-end btn-sm me-2' onClick={() => handleShow(null)}>
                Create User
            </Button>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User ID</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 &&
                    users.slice(0, 10).map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.user_id}</td>
                            <td>{user.email}</td>
                            <td>{user.role_name}</td>
                            <td>
                                <Button className='btn btn-danger btn-md' onClick={() => deleteProduct(user.id)}>
                                    <MdDelete />
                                </Button>
                                <Button className='btn btn-primary btn-md ms-2' onClick={() => handleShow(user)}>
                                    <FaEdit />
                                </Button>
                                <Button className='btn btn-primary btn-md ms-2' onClick={() => handleReadModalShow(user)}>
                                    <CiRead />
                                </Button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{selectedUser ? 'Update User' : 'Create User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={selectedUser ? handleSubmit : handleCreateSubmit}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' name='name' value={formData.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId='user_id'>
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type='text' name='user_id' value={formData.user_id} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' name='email' value={formData.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId='role_id'>
                    <Form.Label>Role ID</Form.Label>
                    <Form.Select name='role_id' value={formData.role_name} onChange={handleChange}>
                        <option value=''>Select Role</option>
                        {users.map((role) => (
                            <option key={role.role_name} value={role.role_name}>
                                {role.role_name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button variant='success' type='submit'>
                    {selectedUser ? 'Update User' : 'Create User'}
                </Button>
            </Form>
        </Modal.Body>
    </Modal>

    {/* Read-only modal */}
    <Modal show={showReadModal} onHide={handleReadModalClose}>
        <Modal.Header closeButton>
            <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {selectedUser && (
                <div>
                    <p><strong>Name:</strong> {selectedUser.name}</p>
                    <p><strong>User ID:</strong> {selectedUser.user_id}</p>
                    <p><strong>Email:</strong> {selectedUser.email}</p>
                    <p><strong>Password:</strong> {selectedUser.password}</p>
                    <p><strong>Role:</strong> {selectedUser.role_name}</p>
                </div>
            )}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleReadModalClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
</>

    );
};



export default User;