import React from 'react';
import { Link } from "react-router-dom";
import { getLocationAutocomplete, getCurrentWeather, getFiveDayDailyForecast } from "../../../services/apiConfiguration";
import Location from '../../location/location'
import SearchInput from './searchInput';
import debounce from 'lodash.debounce';
import locationAutocompleteJSON from "../../../redux/json/locationAutocomplete.json"

import { connect } from "react-redux";
import { loadCurrentLocation, showWeather } from '../../../redux/Favorites/favorites-actions';

const fetchData = async (query, cb) => {
    console.warn('fetching ' + query);
    // const res = await getLocationAutocomplete(query, process.env.REACT_APP_API_KEY);
    // const res = locationAutocompleteJSON;
    const res = [];
    cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 500);

const Search = ({ loadCurrentLocation, showWeather }) => {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    debouncedFetchData(query, res => {
      setResults(res);
    });
  }, [query]);

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
    let length = (e.target.value.length === 0) ? true : false;
    showWeather(length);
  };

  return (
    <div>
      <SearchInput
        value={query}
        onChangeText={onChangeHandler}
      />
      {results.map((result) => (
        <div locationKey={result.Key}>
          <Location 
            locationKey={result.Key} 
            locationData={result}
            currentPage="search"
            to={{ pathname: `/weather/${result.Key}` }}
            onClick={() => {loadCurrentLocation(result); showWeather(true)}}
          />
        </div>
      ))}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentLocation: (location) => dispatch(loadCurrentLocation(location)),
    showWeather: (value) => dispatch(showWeather(value)),
  };
};

export default connect(null, mapDispatchToProps)(Search);