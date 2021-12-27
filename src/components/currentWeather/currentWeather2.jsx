import React from "react";
import './currentWeather.css';
import debounce from 'lodash.debounce';
import currentWeatherJSON from "../../redux/json/currentWeather.json"
import { getCurrentWeather, getFiveDayDailyForecast } from "../../services/apiConfiguration"

// const fetchWeather = async (location, cb) => {
//   console.warn('fetching weather at ' + location);
//   const res = await getCurrentWeather(location, process.env.REACT_APP_API_KEY);
//   // alert(location)
//   // const res = currentWeatherJSON;
//   // const res = [];
//   cb(res);
// };

// const debouncedFetchWeather = debounce((location, cb) => {
//   fetchWeather(location, cb);
// }, 5000);

const CurrentWeather2 = ({ weather }) => {
  // alert(locationKey)
  // const [weather, setWeather] = React.useState();
  // alert(weather)

  // React.useEffect(() => {
  //   debouncedFetchWeather(locationKey, res => {
  //     setWeather(res);
  //   })
  // }, [locationKey]);

  const weekdaysList = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let date, day, weatherText, weatherIcon, weatherIconLink, temperature;

  if (weather) {
    date = new Date(weather[0].LocalObservationDateTime);//.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
    // date = date.toString();
    // alert(date);
    // alert(weather[0].LocalObservationDateTime);
    day = weekdaysList[date.getDay()];
    date = date.toString().substring(0,21);
    weatherText = weather[0].WeatherText;
    weatherIcon = weather[0].WeatherIcon;
    temperature = `${Math.round(weather[0].Temperature.Metric.Value)}°`;

    weatherIcon = (weatherIcon < 10) ? `0${weatherIcon}` : weatherIcon // weather icons are 2-digits, e.g., 1 -> 01
    weatherIconLink = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${weatherIcon}-s.png`;
  }

  return (
    <div class="current-weather-container" style={{ marginTop: "2%" }}>
      {/* <div class="current-weather-inner-container"> */}
        <div class="left">
          <img src={weatherIconLink}/>
        </div>
        <div class="center">
          <h1>{temperature}</h1>
          <h3>{weatherText}</h3>
        </div>
      {/* </div> */}
      
    </div>
  )
}

export default CurrentWeather2;