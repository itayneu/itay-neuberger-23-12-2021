import React from "react";
import { connect } from "react-redux"
import { addToFavorites, removeFromFavorites } from "../../redux/Favorites/favorites-actions"
import weatherJSON from "../../redux/json/currentWeather.json"
import { getCurrentWeather, getFiveDayDailyForecast } from "../../services/apiConfiguration"
import debounce from 'lodash.debounce';

const fetchWeather = async (location, cb) => {
    console.warn('fetching weather at ' + location);
    const res = await getCurrentWeather(location, process.env.REACT_APP_API_KEY);
    // alert(location)
    // const res = currentWeatherJSON;
    // const res = [];
    cb(res);
  };

const debouncedFetchWeather = debounce((location, cb) => {
    fetchWeather(location, cb);
  }, 5000);

const FavoritesButton = ({ locationData, inFavorites, addToFavorites, removeFromFavorites }) => {
    const [weather, setWeather] = React.useState();

    React.useEffect(() => {
        debouncedFetchWeather(locationData.Key, res => {
            setWeather(res);
        })
    }, [locationData.Key]);

    // const onClick = inFavorites 
    // ? () => removeFromFavorites(locationData.Key)
    // : () => addToFavorites(locationData.Key, fetchWeather(locationData.Key));


    const buttonName = (inFavorites) ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>

    return (
        <div>
            <button
                id={locationData.Key}
                className="btn btn-sm"
                style={{ display:"inline-block" }}
                onClick={inFavorites 
                    ? () => removeFromFavorites(locationData.Key)
                    : () => addToFavorites(locationData.Key, weather)}
            >
                {buttonName}
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToFavorites: (locationKey, weather) => dispatch(addToFavorites(locationKey, weather)),
        removeFromFavorites: (locationKey) => dispatch(removeFromFavorites(locationKey)),
    };
};

export default connect(null, mapDispatchToProps)(FavoritesButton);
