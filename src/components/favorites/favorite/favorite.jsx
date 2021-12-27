import './favorite.css';
import React from 'react';
import { connect } from 'react-redux';
import Location from "../../location/location";
import CurrentWeather from '../../currentWeather/currentWeather';
import { loadCurrentLocation } from '../../../redux/Weather/weather-actions';


const Favorite = ({ locationData, loadCurrentLocation }) => {
    return (
        <div className="favorite-container">
            <Location 
                locationData={locationData}
                currentPage="favorite"
                to={{ pathname: "/home" }}
                onClick={() => loadCurrentLocation(locationData)}
            />
            <CurrentWeather weather={locationData.Weather} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadCurrentLocation: (location) => dispatch(loadCurrentLocation(location)),
    };
};
  
export default connect(null, mapDispatchToProps)(Favorite);
