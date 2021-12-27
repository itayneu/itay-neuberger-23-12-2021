import * as actionTypes from "./favorites-types"
import locationAutocompleteJSON from "../json/locationAutocomplete.json"
import locationAutocompleteJSON2 from "../json/locationAutocomplete2.json"
import defaultLocationJSON from "../json/defaultLocation.json"
import currentWeatherJSON from "../json/currentWeather.json"
import fiveDaysForecastJSON from "../json/5daysForecast.json"

const INITIAL_STATE = {
    favorites: [], 
    currentLocation: defaultLocationJSON,
    currentWeather: currentWeatherJSON,
    currentForecast: fiveDaysForecastJSON.DailyForecasts,
    showWeather: true
}

const favoriteReducer = (state = INITIAL_STATE, action)  => {
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

export default favoriteReducer;
