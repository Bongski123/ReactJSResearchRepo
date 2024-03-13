import React from "react";
import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ results }) => {
    // Check if results is undefined or null before using map
    if (results && results.length > 0) {
        return (
            <div className="results-list">
                {results.map((result, id) => {
                    return <SearchResult result={result} key={id} />;
                })}
            </div>
        );
    }

    // Return null if no results yet
    return null;
};
