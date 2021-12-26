import React from "react";
import CurrentWeather from "./currentWeather";
import Forecast from "./forecast";
import Location from "./location";
import './home.css';

import { connect } from 'react-redux'

const Weather = ({ locationKey, locationData, dailyForecasts }) => {
    return (
        <div>
            <Location 
                locationKey={locationKey} 
                locationData={locationData}
                currentPage="weather"
            />
            <CurrentWeather locationKey = {locationKey} />
            <Forecast dailyForecasts={dailyForecasts} />
        </div> 
    );
};

const mapStateToProps = (state) => {
    return {
        currentLocation: state.favorite.currentLocation,
        currentWeather: state.favorite.currentWeather,
        currentForecast: state.favorite.currentForecast,
    };
};

export default connect(mapStateToProps)(Weather);
