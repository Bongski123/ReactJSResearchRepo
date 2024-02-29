import "./styles.css";
import { Title } from "../components/Title/Title";
import { Body } from "../components/Body/Body";
import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { SearchResultList } from '../components/SearchResultList';

const SearchHome = () => {
    const [results,setResults] = useState([]);
  return (
    
    <div className="page home"  >
      <Title>NCF Research Nexus</Title>
     
      <div className="Home">
    <div className="searchbar-container">
    <SearchBar setResults ={setResults}/>
    <SearchResultList results ={results}/>
  </div>
  </div>

    </div>
  );
};

export default SearchHome;
