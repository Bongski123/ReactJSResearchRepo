import React from 'react';
import{BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import  Navbar from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";
import API from "./API";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Register from './Register';







// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state ={apiResponse: ""};
//   }

//   callAPI(){
//     fetch("https://jsonplaceholder.typicode.com/posts ")
//     .then(res => res.text())
//     .then(res => this.setState({apiResponse: res}));

//   }

//   componentWillMount()
//   {
//     this.callAPI();
//   }


// render(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <p> {this.state.apiResponse}</p>
    
//       </header>
//       <p> {this.state.apiResponse}</p>
//     </div>
//   );
// }
// }

function App() {

  return (


    
    <div className="background-container">
       

      <Router>

     
   
      <Navbar  expand="lg" bg="primary" data-bs-theme="dark" >
        <Container>
          
          <Navbar.Brand href="/home">NCF Research NEXUS</Navbar.Brand>
          <Nav className="me-auto " >
            <Nav.Link as = {Link} to = {"/home"} className="text-decoration-none text-black">Home</Nav.Link>
            <Nav.Link as = {Link} to = {"/education"} className="text-decoration-none text-black">Education</Nav.Link>
            <Nav.Link as = {Link} to = {"/contact"} className="text-decoration-none text-black">Contact</Nav.Link>
            <Nav.Link as = {Link} to = {"/api"} className="text-decoration-none text-black">UserList</Nav.Link>
            
            
            
            <Dropdown>
      <Dropdown.Toggle  className="text-decoration-none text-black" id="dropdown-basic">
       About Us
      </Dropdown.Toggle>
      
      <Dropdown.Menu>
        <Dropdown.Item href="/About">History</Dropdown.Item>
        
     
      </Dropdown.Menu>
      </Dropdown> 
  


          
          </Nav>
        </Container>
      </Navbar>


        <Container className='mt-5'>

          <Row>

            <Col md ={15}>
              <Routes>

              <Route path="/home" element ={<Home/>} />
              <Route path="/about" element ={<About/>} />
              <Route path="/education" element ={<Education/>} />
              <Route path="/contact" element ={<Contact/>} />
              <Route path="/api" element ={<API/>} />
              <Route path="/register" element ={<Register/>} />

              </Routes>

            </Col>

          </Row>

        </Container>


      </Router>



    </div>






  )




}


  






export default App;
