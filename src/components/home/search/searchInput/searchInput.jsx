import './searchInput.css';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';


const SearchInput = ({ value, onChangeText, currentLocation }) => {
  useEffect(() => {
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
        placeholder={currentLocation.LocalizedName}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      currentLocation: state.weather.currentLocation,
  };
};

export default connect(mapStateToProps)(SearchInput);
