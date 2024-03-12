import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Fuse from "fuse.js"; 
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const [publications, setPublications] = useState([]); 

   
    useState(() => {
        fetch('http://localhost:9000/api/publications') 
            .then((response) => response.json())
            .then((json) => {
                if (Array.isArray(json)) {
                    setPublications(json);
                } else {
                    console.error('JSON data is not an array');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); 

   
    const fuseOptions = {
        keys: ['title', 'author'], // Specify the properties to search within
        includeScore: true, // Include search score for ranking results
        threshold: 0.6, // Set the threshold for fuzzy search 
    };

    // Initialize Fuse.js with publications data and options
    const fuse = new Fuse(publications, fuseOptions);

    // Perform fuzzy search and update results
    const performSearch = (value) => {
        const results = fuse.search(value).map(result => result.item);
        setResults(results);
    };

    // Handle input change
    const handleChange = (value) => {
        setInput(value);
        performSearch(value); // Perform search on input change
    };

    // Handle search button click
    const handleSearch = () => {
        performSearch(input); // Perform search when search button is clicked
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
                className="input"
                placeholder="Type to Search"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};
