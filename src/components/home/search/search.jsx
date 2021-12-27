import React from 'react';
import { getLocationAutocomplete } from "../../../services/apiConfiguration";
import Location from '../../location/location'
import SearchInput from './searchInput';
import debounce from 'lodash.debounce';
import locationJSON from "../../../redux/json/locationAutocomplete.json"
import './search.css';

import { connect } from "react-redux";
import { loadCurrentLocation, showWeather } from '../../../redux/Favorites/favorites-actions';


const fetchData = async (query, cb) => {
    console.warn('fetching ' + query);
    const res = await getLocationAutocomplete(query, process.env.REACT_APP_API_KEY);
    // const res = locationJSON; 
    // const res = [];
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
    showWeather((e.target.value.length === 0) ? true : false);
  };

  return (
    <div>
      <SearchInput
        value={query}
        onChangeText={onChangeHandler}
      />
      <div className="table-container">
        <table className="table">
          <tbody>
            {results.map((result) => (
              <tr>
                {/* <div className="container" style={{ display: "inline-block" }}> */}
                  <Location 
                    locationData={result}
                    currentPage="search"
                    to={{ pathname: `/weather/${result.Key}` }}
                    onClick={() => {loadCurrentLocation(result); showWeather(true)}}
                  />
                {/* </div> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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