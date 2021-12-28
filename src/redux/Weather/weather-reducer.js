import * as actionTypes from "./weather-types"
import defaultLocationJSON from "../json/defaultLocation.json"


const INITIAL_STATE = {
    favorites: [], 
    currentLocation: defaultLocationJSON,
    currentWeather: [],
    currentForecast: [],
    showWeather: true
}

const weatherReducer = (state = INITIAL_STATE, action)  => {
    switch(action.type) {
        case actionTypes.ADD_TO_FAVORITES:
            const currentLocation = state.currentLocation;
            const inFavorites = state.favorites.find(location => 
                location.Key === action.payload.locationKey ? true : false
            );
            return {
                ...state,
                favorites: inFavorites ? currentLocation : [...state.favorites, { ...currentLocation, Weather: action.payload.weather }],
            };
        case actionTypes.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(location => location.Key !== action.payload.locationKey),
            };
        case actionTypes.LOAD_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.payload,
            };
        case actionTypes.LOAD_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.payload,
            };
        case actionTypes.LOAD_CURRENT_FORECAST:
            return {
                ...state,
                currentForecast: action.payload,
            };
    case actionTypes.SHOW_WEATHER:
            return {
                ...state,
                showWeather: action.payload,
            }
        default:
            return state;
    }
};

export default weatherReducer;
