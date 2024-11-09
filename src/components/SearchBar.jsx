import React from 'react';

function SearchBar({ onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search employees..."
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;
