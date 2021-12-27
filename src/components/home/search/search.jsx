import './search.css';
import { connect } from "react-redux";
import debounce from 'lodash.debounce';
import React, { useEffect } from 'react';
import Location from '../../location/location'
import SearchInput from './searchInput/searchInput';
import { getLocationAutocomplete } from "../../../services/apiConfiguration";
import { loadCurrentLocation, showWeather } from '../../../redux/Weather/weather-actions';


const fetchLocations = async (query, cb) => {
    const res = await getLocationAutocomplete(query, process.env.REACT_APP_API_KEY);
    cb(res);
};

const debouncedFetchLocations = debounce((query, cb) => {
  fetchLocations(query, cb);
}, 500);

const Search = ({ loadCurrentLocation, showWeather }) => {
  const [query, setQuery] = React.useState('');
  const [locations, setLocations] = React.useState([]);

  useEffect(() => {
    debouncedFetchLocations(query, res => {
      setLocations(res);
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
            {locations.map((location) => (
              <tr key={location.Key}>
                <Location 
                  locationData={location}
                  currentPage="search"
                  to={{ pathname: `/weather/${location.Key}` }}
                  onClick={() => {loadCurrentLocation(location); showWeather(true)}}
                />
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
