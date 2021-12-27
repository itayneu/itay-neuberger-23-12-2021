import './location.css';
import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FavoritesButton from "./favoritesButton/favoritesButton";


const Location = ({ favorites, currentWeather, locationData, currentPage, to, onClick }) => {
    const inFavorites = favorites.find(location => 
        location.Key === locationData.Key ? true : false
    );

    return (
        <div class="location-container">
            <div className="center">
                <Link                    
                    to={to}
                    role="button"
                    onClick={onClick}
                >
                    <h4>{locationData.LocalizedName}</h4>
                    <p>{locationData.AdministrativeArea.LocalizedName}, {locationData.Country.LocalizedName}</p>
                </Link>
            </div>
            <div className="right">
                { currentPage !== "search" 
                    ? <FavoritesButton 
                        locationData={locationData} 
                        currentWeather={currentWeather}
                        inFavorites={inFavorites}
                    /> 
                    : <i class="fas fa-angle-right"></i>
                }   
            </div>
        </div>  
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: state.weather.favorites,
        currentWeather: state.weather.currentWeather,
    };
};

export default connect(mapStateToProps)(Location);
