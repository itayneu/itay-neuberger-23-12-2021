import React from 'react';
import { Link } from "react-router-dom";
// import './style.css';
import { getLocationAutocomplete, getCurrentWeather, getFiveDayDailyForecast } from "../services/apiConfiguration";
import Location from './location'
import SearchInput from './debounce/searchInput';
import debounce from 'lodash.debounce';
import locationAutocompleteJSON from "../json/locationAutocomplete.json"

const fetchData = async (query, cb) => {
    console.warn('fetching ' + query);
    const res = await getLocationAutocomplete(query, process.env.REACT_APP_API_KEY);
    // const res = locationAutocompleteJSON;
    cb(res);
    // cb([]);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 500);

function Search() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    debouncedFetchData(query, res => {
      setResults(res);
    });
  }, [query]);

  

  return (
    <div>
      <SearchInput
        value={query}
        onChangeText={e => {
          setQuery(e.target.value);
        }}
      />
      {results.map((result, index) => (
        <div key={index}>
          <Location
            city={result.LocalizedName}
            area={result.AdministrativeArea.LocalizedName}
            country={result.Country.LocalizedName}
          />
        </div>
      ))}
    </div>
  );
}

export default Search;