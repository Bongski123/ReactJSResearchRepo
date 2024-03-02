import React, {useEffect , useState} from 'react';
import axios from 'axios';
import  Button  from 'react-bootstrap/Button';

import  Modal  from 'react-bootstrap/Modal';
import { ModalBody } from 'react-bootstrap';
import ModalFooter from 'react-bootstrap';
import { Table } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { Form } from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import './User.css'
import CloseButton from 'react-bootstrap';
import userEvent from '@testing-library/user-event';
import { FaTrashAlt } from "react-icons/fa";
import { Icon } from '@mui/material';
import { FaEdit } from "react-icons/fa";
import { CiRead } from "react-icons/ci";

const User = () =>{

    
    const [users ,setUsers] = useState([]);

    const user = JSON.parse(localStorage.getItem('token'));
    const token = user.data.token;


    const headers = {
        accept: 'application/json',
        Autorization: token
    }



    useEffect(()=>{
        fetchUsers()

    },[])



    const fetchUsers = async () => {
        await axios.get('https://almariobackendnodejs.onrender.com/api/users', { headers: headers}).then(({data})=>{
            setUsers(data)
        })
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[name , setName] = useState("")
    const[user_id , setUserID] = useState("")
    const[email, setUserEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role_id, setRoleId] = useState("")
    const [validationError , setValidationError] = useState({})

    const creatProduct = async (e) => {

        e.preventDefault();

        console.log(name);
        console.log(user_id);
        console.log(email);
        console.log(password);
        console.log(role_id);

        const formData = new FormData()

        formData.append('name',name)
        formData.append('user_id',user_id)
        formData.append('email',email)
        formData.append('password',password)
        formData.append('role_id',role_id)

        await axios.post('https://nodejs-mysql-api-almario-ylza.onrender.com/api/register', {name , user_id,email,password,role_id}, {headers:headers}).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })

            fetchUsers();
        }).catch(({response})=>{
            if(response.status ===422){
                setValidationError(response.data.errors)
            }else{
                Swal.fire({
                    text:response.data.message,
                    icon:"error"
                })
            }
        })


    }


    const deleteProduct = async (id) => {

        const isConfirm= await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon:'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes ,Delete it!'
        }).then((result)=> {
            return result.isConfirmed
        });
        if(!isConfirm){
            return;
        }

        await axios.delete(`https://nodejs-mysql-api-almario-ylza.onrender.com/api/user/${id}`, {headers:headers}).then(({data})=>{
            Swal.fire({
                icon:'success',
                text: "Succesfully Deleted"
            })
            fetchUsers()
        }).catch(({response:{data}})=>{
            Swal.fire({
               text:data.message,
               icon:"error"
            })
        })





    }


    const updateUser = async (e) => {

      

        console.log(name);
        console.log(user_id);
        console.log(email);
        console.log(password);
        

        const formData = new FormData()

        formData.append('name',name)
        formData.append('user_id',user_id)
        formData.append('email',email)
        formData.append('password',password)
  

        await axios.put('https://nodejs-mysql-api-almario-ylza.onrender.com/api/user', {name , user_id,email,password}, {headers:headers}).then(({data})=>{
            Swal.fire({
                icon:"update succesfuly",
                text:data.message
            })

            fetchUsers();
        }).catch(({response})=>{
            if(response.status ===422){
                setValidationError(response.data.errors)
            }else{
                Swal.fire({
                    text:response.data.message,
                    icon:"error"
                })
            }
        })


    }









    return(

        <>
        <div className='container'><br/>
          <div className='col-12'>
            <Button variant='btn btn-success mb-2 float-end btn-sm me-2' onClick={handleShow}>Create User</Button>
            </div>

            <Table className='table-container' striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>user_id</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                 
                    </tr>
                </thead>
                
                <tbody>

                    {
                        users.length > 0 &&(
                            users.slice(0 ,10).map((row, key)=>(
                                <tr key={key}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.user_id}</td>
                                    <td>{row.email}</td>
                                    <td>{row.role_name}</td>
                                    <td>

                                        <Button className='btn btn-danger btn-md' onClick={()=>deleteProduct(row.id)}>
                                        <FaTrashAlt />
                                        </Button>
                                        
                                        <Button className='btn btn-success btn-md'  onClick={()=>updateUser(row.id)}>
                                        <FaEdit />
                                        </Button>

                                        <Button className='btn btn-secondary btn-md'  onClick={()=>creatProduct(row.id)}>
                                        <CiRead />
                                        </Button>
                                    
                                    
                                    </td>
                                  
                                </tr>
                        ))
                        )

                    }
             
                </tbody>
            </Table>

          </div>

          <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>Create User</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form onSubmit={creatProduct}>
                    <Row>
                        <Col>
                        <Form.Group controlId='Name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' value={name} onChange={(event) =>{setName(event.target.value)}}/>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group controlId='user_id'>
                            <Form.Label>User_id</Form.Label>
                            <Form.Control type='text' value={user_id} onChange={(event) =>{setUserID(event.target.value)}}/>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group controlId='Email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' value={email} onChange={(event) =>{setUserEmail(event.target.value)}}/>
                        </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <Form.Group controlId='Password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='text' value={password} onChange={(event) =>{setPassword(event.target.value)}}/>
                        </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <Form.Group controlId='Role'>
                            <Form.Label>Role_id</Form.Label>
                            <Form.Control type='text' value={role_id} onChange={(event) =>{setRoleId(event.target.value)}}/>
                        </Form.Group>
                        </Col>
                    </Row>

                    <Button variant='success' className='mt-2' size='sm' block="block" type='submit'>Submit</Button>

                </Form>
         
            </Modal.Body>


          </Modal>


  






       
        
        
        
        
        
        </>



    );









}


export default User;