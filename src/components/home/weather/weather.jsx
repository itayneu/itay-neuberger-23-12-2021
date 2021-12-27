import './weather.css';
import { connect } from "react-redux";
import debounce from 'lodash.debounce';
import React, { useEffect } from 'react';
import Location from "../../location/location";
import Forecast from "../weather/forecast/forecast";
import CurrentWeather from "../../currentWeather/currentWeather";
import { getCurrentWeather, getFiveDayDailyForecast } from "../../../services/apiConfiguration";
import { loadCurrentWeather, loadCurrentForecast } from "../../../redux/Weather/weather-actions";


const fetchWeather = async (location, cb) => {
    const res = await getCurrentWeather(location, process.env.REACT_APP_API_KEY);
    cb(res);
};

const debouncedFetchWeather = debounce((location, cb) => {
    fetchWeather(location, cb);
}, 500);

const fetchForecast = async (location, cb) => {
    const res = await getFiveDayDailyForecast(location, process.env.REACT_APP_API_KEY);
    const dailyForecasts = res.DailyForecasts;
    cb(dailyForecasts);
};

const debouncedFetchForecast = debounce((location, cb) => {
    fetchForecast(location, cb);
}, 500);

const Weather = ({ locationData, loadCurrentWeather, loadCurrentForecast }) => { 
    const [weather, setWeather] = React.useState();
    const [forecast, setForecast] = React.useState([]);

    useEffect(() => {
        debouncedFetchWeather(locationData.Key, res => {
            setWeather(res);
        });
        debouncedFetchForecast(locationData.Key, res => {
            setForecast(res);
        });
    }, [locationData.Key]);

    return (
        loadCurrentWeather(weather),
        loadCurrentForecast(forecast),
        <div className="weather-container">
            <Location 
                locationData={locationData}
                currentPage="weather"
                to="#"
            />
            <CurrentWeather weather={weather} />
            <Forecast forecast={forecast} />
        </div> 
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
      loadCurrentWeather: (weather) => dispatch(loadCurrentWeather(weather)),
      loadCurrentForecast: (forecast) => dispatch(loadCurrentForecast(forecast)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(Weather);
