import React from "react";
import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";
export const SearchResultList = ({ results }) => {
    // Check if results is undefined or null before using map
    if (!results) {
        return null; // or return some default message or component
    }

    return (
        <div className="results-list">
            {results.map((results, id) => {
                return <SearchResult results = {results}  key ={id} />;
            })}
        </div>
    );
};