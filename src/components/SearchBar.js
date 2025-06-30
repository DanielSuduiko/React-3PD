import React from 'react';
import './SearchBar.css';

const SearchBar = React.memo(({ searchTerm, onSearch, onClear }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Įveskite vardą.."
      />
      <button onClick={onClear}>Valyti</button>
    </div>
  );
});

export default SearchBar;
