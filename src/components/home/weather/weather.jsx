import React from "react";
import CurrentWeather from "../../currentWeather/currentWeather";
import Forecast from "../../forecast/forecast";
import Location from "../../location/location";
import './weather.css';


const Weather = ({ locationData }) => { 
    return (
        <div className="weather-container">
            <Location 
                locationData={locationData}
                currentPage="weather"
            />
            <CurrentWeather locationKey={locationData.Key} />
            <Forecast locationKey={locationData.Key} />
        </div> 
    );
};

export default Weather;
