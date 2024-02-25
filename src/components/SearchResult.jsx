import React from "react";

import "./SearchResult.css";

export const SearchResult = ({results}) => {
   
        return <div className="search-result" onClick={(e)=>alert(`You Clicked On ${results.name}`)}>{results.name}</div>
};