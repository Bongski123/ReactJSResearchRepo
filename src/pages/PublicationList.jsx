import "./styles.css";
import { Title } from "../components/Title/Title";
import { Body } from "../components/Body/Body";

import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import  Table  from 'react-bootstrap/Table';





const PublicationList = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetchPosts()    
    },[])

    const fetchPosts = async () => {
        await axios.get('http://127.0.0.1:9000/api/publications').then(({data})=>{
            setPosts(data)

        })
            
        
    }



  return (
    <div className="publication page">
      <Title>Publication</Title>
      <Body>
      <div className="publication-form" >
     
      <Table Table striped bordered hover size="md">
      <thead>
        <tr>
        
        
          <th>TITLE</th>
          <th>AUTHORS</th>
          <th>ABSTRACT</th>
          <th>WORKTYPE </th>
          <th>CITATION </th>
          <th>FILES </th>
          <th>PUBLISHER</th>
         
        
          
        </tr>
      </thead>
      <tbody>

       {posts.length > 0 &&
    posts.map((row, key) => (
      <tr key={key}>
      
        <td>{row.title}</td>
        <td>{row.authors}</td>
        <td>{row.abstract}</td>
        <td>{row.publication_type}</td>
        <td>{row.citation}</td>
        <td>{row.docs}</td>
        <td>{row.name}</td>
      
     
      
      </tr>
    ))}
      </tbody>
      </Table>
        </div>

      </Body>
    </div>
  );
};

export default PublicationList;
