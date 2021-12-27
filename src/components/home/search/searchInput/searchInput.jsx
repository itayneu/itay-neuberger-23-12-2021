import React from 'react';
import './searchInput.css';

const SearchInput = ({ value, onChangeText }) => {
  React.useEffect(() => {
    let input = document.querySelector('input');
    input.addEventListener('input', onChangeText);
    return input.removeEventListener('input', onChangeText);
  }, []);

  return (
    <div className="search-container" id="scrollable-dropdown-menu">
      <input
        className="typeahead"
        type="text"
        value={value}
        onChange={onChangeText}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
