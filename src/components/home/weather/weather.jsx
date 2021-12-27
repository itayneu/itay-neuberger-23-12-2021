import React from "react";
import CurrentWeather from "../../currentWeather/currentWeather";
import Forecast from "../../forecast/forecast";
import Location from "../../location/location";


const Weather = ({ locationKey, locationData }) => { 
    return (
        <div>
            <Location 
                locationKey={locationKey} 
                locationData={locationData}
                currentPage="weather"
            />
            <CurrentWeather locationKey={locationKey} />
            <Forecast locationKey={locationKey} />
        </div> 
    );
};

export default Weather;
