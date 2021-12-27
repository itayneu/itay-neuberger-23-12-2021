import './search.css';
import React from 'react';
import { connect } from "react-redux";
import debounce from 'lodash.debounce';
import Location from '../../location/location'
import SearchInput from './searchInput/searchInput';
import { getLocationAutocomplete } from "../../../services/apiConfiguration";
import { loadCurrentLocation, showWeather } from '../../../redux/Weather/weather-actions';


const fetchData = async (query, cb) => {
    const res = await getLocationAutocomplete(query, process.env.REACT_APP_API_KEY);
    cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 500);

const Search = ({ loadCurrentLocation, showWeather }) => {
  const [query, setQuery] = React.useState('');
  const [location, setLocation] = React.useState([]);

  React.useEffect(() => {
    debouncedFetchData(query, res => {
      setLocation(res);
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
            {location.map((result) => (
              <tr key={result.Key}>
                <Location 
                  locationData={result}
                  currentPage="search"
                  to={{ pathname: `/weather/${result.Key}` }}
                  onClick={() => {loadCurrentLocation(result); showWeather(true)}}
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
