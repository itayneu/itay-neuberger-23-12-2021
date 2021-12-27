import React from 'react';
import { Link } from "react-router-dom";
import Location from "../location/location";
import './favorite.css';

import { connect } from 'react-redux';
import { loadCurrentLocation } from '../../redux/Favorites/favorites-actions';
import CurrentWeather2 from '../currentWeather/currentWeather2';

const Favorite = ({ locationData, loadCurrentLocation }) => {
    return (
        <div className="favorite-container">
            <Location 
                locationData={locationData}
                currentPage="favorite"
                to={{ pathname: "/home" }}
                onClick={() => loadCurrentLocation(locationData)}
            />
            
            <CurrentWeather2 weather={locationData.Weather} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadCurrentLocation: (location) => dispatch(loadCurrentLocation(location)),
    };
};
  
export default connect(null, mapDispatchToProps)(Favorite);