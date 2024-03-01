import "./styles.css";
import { Title } from "../components/Title/Title";
import { Body } from "../components/Body/Body";
import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { SearchResultList } from '../components/SearchResultList';

const Home = () => {
    const [results,setResults] = useState([]);
  return (
    
    <div className="page home"  >
      <Title>Hello I'm Nhel</Title>
      <div className="Home">
  
  </div>

    </div>
  );
};

export default Home;
