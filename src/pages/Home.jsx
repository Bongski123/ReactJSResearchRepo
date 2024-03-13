import "./styles.css";
import { Title } from "../components/Title/Title";
import { Body } from "../components/Body/Body";
import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { SearchResultList } from "../components/SearchResultList";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet";

import { Text, Img, Heading, Input, Button } from "../../src/components";
const SearchHome = () => {
    const [results, setResults] = useState([]);

    return (
        <div className="page home">
            <Title>
            <Img src={'images/header1.png'} alt="Naga College Foundation Inc." className="white-title-image" style={{ width: '500px', height: 'auto' }} />
            </Title>
            <Body>
                <div className="Home">
                    <div className="searchbar-container">
                        <SearchBar setResults={setResults} />
                        <SearchResultList results={results} />
                    </div>
                </div>
            </Body>
            <Navbar />
        </div>
    );
};

export default SearchHome;
