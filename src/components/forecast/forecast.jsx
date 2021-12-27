import React from "react";
import './forecast.css';
import debounce from 'lodash.debounce';
import fiveDaysJSON from "../../redux/json/5daysForecast.json"
import { getCurrentWeather, getFiveDayDailyForecast } from "../../services/apiConfiguration"

const fetchForecast = async (location, cb) => {
  console.warn('fetching forecast at ' + location);
  const res = await getFiveDayDailyForecast(location, process.env.REACT_APP_API_KEY);
  // const res = fiveDaysJSON;
  // const res = [];
  const dailyForecasts = res.DailyForecasts;
  cb(dailyForecasts);
};

const debouncedFetchForecast = debounce((location, cb) => {
  fetchForecast(location, cb);
}, 500);

const Forecast = ({ locationKey }) => {
  // alert(locationKey)
  const [forecast, setForecast] = React.useState([]);

  React.useEffect(() => {
    debouncedFetchForecast(locationKey, res => {
      setForecast(res);
    })
  }, [locationKey]);

  const weekdaysList = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let weatherIcon, weatherIconLink;
  
  return (
      <div className="forecast-container" style={{ marginTop: "3%" }}>
            {forecast.map((forecast) => (
              weatherIcon = (forecast.Day.Icon < 10) ? `0${forecast.Day.Icon}` : forecast.Day.Icon, // weather icons are 2-digits, e.g., 1 -> 01
              weatherIconLink = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${weatherIcon}-s.png`,
                <div class="col-sm-6 col-md-4" className="forecast-inner-container">
                  <div class="thumbnail">
                    <img src={weatherIconLink}/>
                  </div>
                  <div class="caption">
                    <h4>{weekdaysList[new Date(forecast.Date).getDay()]}</h4>
                    <p><b>{Math.round(forecast.Temperature.Maximum.Value)}&deg;</b> - {Math.round(forecast.Temperature.Minimum.Value)}&deg;</p>
                  </div>
                </div>
            ))}
      </div>
  );
}

export default Forecast;