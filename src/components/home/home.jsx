import React from "react";
import Search from "./search/search";
import Weather from "./weather/weather";
import './home.css';

import { connect } from 'react-redux'

const Home = ({ currentLocation, currentWeather, currentForecast, showWeather }) => {
    return (
        <div class="container">
            <div style={{marginLeft: "1.3%", marginTop: "10%"}}>
                <Search />
                { showWeather 
                    ? <Weather
                            locationKey={currentLocation.Key} 
                            locationData={currentLocation}
                            dailyForecasts={currentForecast}
                        /> 
                    : null 
                }
            </div>
        </div> 
    );
};

const mapStateToProps = (state) => {
    return {
        currentLocation: state.favorite.currentLocation,
        currentWeather: state.favorite.currentWeather,
        currentForecast: state.favorite.currentForecast,
        showWeather: state.favorite.showWeather,
    };
};

export default connect(mapStateToProps)(Home);
