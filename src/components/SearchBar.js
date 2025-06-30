import React from 'react';
import './SearchBar.css';

const SearchBar = React.memo(({ searchTerm, onSearch, onClear }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search by name"
      />
      <button onClick={onClear}>Clear</button>
    </div>
  );
});

export default SearchBar;
