import React from "react";

function Search({ searchTerm, onSetSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // 1. Set the value to the state from the parent
        value={searchTerm}
        // 2. Call the setter function whenever the user types
        onChange={(e) => onSetSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;