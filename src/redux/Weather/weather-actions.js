import { toast } from "react-toastify";
import * as actionTypes from "./weather-types";


export const addToFavorites = (locationKey, locationData, weather) => {
    toast(`${locationData.LocalizedName} added to favorites`);
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        payload: {
           locationKey: locationKey,
           weather, 
        }
    };
};

export const removeFromFavorites = (locationKey, locationData) => {
    toast(`${locationData.LocalizedName} removed from favorites`);
    return {
        type: actionTypes.REMOVE_FROM_FAVORITES,
        payload: {
           locationKey: locationKey 
        }
    };
};

export const loadCurrentLocation = (location) => {
    return {
        type: actionTypes.LOAD_CURRENT_LOCATION,
        payload: location,
    };
};

export const loadCurrentWeather = (weather) => {
    return {
        type: actionTypes.LOAD_CURRENT_WEATHER,
        payload: weather,
    };
};

export const loadCurrentForecast = (forecast) => {
    return {
        type: actionTypes.LOAD_CURRENT_FORECAST,
        payload: forecast,
    };
};

export const showWeather = (value) => {
    return {
        type: actionTypes.SHOW_WEATHER,
        payload: value,
    };
};
