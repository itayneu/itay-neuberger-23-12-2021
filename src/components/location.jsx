import React from "react";
import { connect } from "react-redux"
import { addToFavorites, removeFromFavorites } from "../redux/Favorites/favorites-actions"
import './location.css';

const Location = ({ locationData, addToFavorites, removeFromFavorites }) => {
    return (
        <div class="location-container">
            <div className="center">
                <h4>{locationData.LocalizedName}</h4>
                <p>{locationData.AdministrativeArea.LocalizedName}, {locationData.Country.LocalizedName}</p>
            </div>
            <div className="right">
                <button
                    id={locationData.Key}
                    className="btn btn-sm"
                    style={{ display:"inline-block" }}
                    onClick={() => addToFavorites(locationData.Key)}
                >
                    Add Fav
                </button>
                <button
                    id={locationData.Key}
                    className="btn btn-sm"
                    style={{ display:"inline-block" }}
                    onClick={() => removeFromFavorites(locationData.Key)}
                >
                    Remove Fav
                </button>
            </div>
        </div>  
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToFavorites: (locationKey) => dispatch(addToFavorites(locationKey)),
        removeFromFavorites: (locationKey) => dispatch(removeFromFavorites(locationKey)),
    };
};

export default connect(null, mapDispatchToProps)(Location);