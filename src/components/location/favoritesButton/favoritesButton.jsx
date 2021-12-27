import React from "react";
import "./favoritesButton.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../../../redux/Weather/weather-actions"


const FavoritesButton = ({ locationData, currentWeather, inFavorites, addToFavorites, removeFromFavorites }) => {
    return (
        <div className="button-container">
            <Link
                id={locationData.Key}
                style={{ display:"inline-block" }}
                to={"#"}
                onClick={inFavorites 
                    ? () => removeFromFavorites(locationData.Key, locationData)
                    : () => addToFavorites(locationData.Key, locationData, currentWeather)}
            >
                {(inFavorites) ? <i class="fas fa-heart fa-lg icon-color"></i> : <i class="far fa-heart fa-lg icon-color"></i>}
            </Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToFavorites: (locationKey, locationData, weather) => dispatch(addToFavorites(locationKey, locationData, weather)),
        removeFromFavorites: (locationKey, locationData) => dispatch(removeFromFavorites(locationKey, locationData)),
    };
};

export default connect(null, mapDispatchToProps)(FavoritesButton);
