import React from "react";
import CurrentWeatherJSON from "../redux/json/currentWeather.json";
import Favorite from "./favorite";
import CurrentWeather from "./currentWeather";
import "./favorites.css"

import { connect } from 'react-redux'

// const favorites = locationAutocompleteJSON;
const currentWeather = CurrentWeatherJSON

const Favorites = ({ favorites }) => {
    if (favorites) {
        return (
            <div className="container">
                <div style={{marginLeft: "1.3%", marginTop: "10%"}}>
                    {favorites.map((favorite) => (
                        <div locationKey={favorite.Key}>
                            <Favorite 
                                locationKey={favorite.Key} 
                                locationData={favorite}
                            />
                            <CurrentWeather currentWeather = {currentWeather} />
                        </div>
                    ))}
                </div>
            </div>
        );
    } else return <h1>Favorites list is empty. Please add locations from home page.</h1>
};

const mapStateToProps = (state) => {
    return {
        favorites: state.favorite.favorites,
    };
};

export default connect(mapStateToProps)(Favorites);
