import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import FavoritesButton from "./favoritesButton";
import './location.css';

const Location = ({ locationData, favorites, currentPage, onClick, to }) => {
    const inFavorites = favorites.find(location => 
        location.Key === locationData.Key ? true : false
    );

    return (
        <div class="location-container">
            <div className="center">
                <Link
                    // className="btn btn-dark btn-sm"                      
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
        favorites: state.favorite.favorites,
    };
};

export default connect(mapStateToProps)(Location);
