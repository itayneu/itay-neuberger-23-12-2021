import React from "react";
import './currentWeather.css';


const CurrentWeather = ({ weather }) => {
  let weatherText, weatherIcon, weatherIconLink, temperature;

  if (weather) {
    weatherText = weather[0].WeatherText;
    weatherIcon = weather[0].WeatherIcon;
    weatherIcon = (weatherIcon < 10) ? `0${weatherIcon}` : weatherIcon // weather icons are 2-digits, e.g., 1 -> 01
    weatherIconLink = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${weatherIcon}-s.png`;
    temperature = `${Math.round(weather[0].Temperature.Metric.Value)}°`;
  }

  return (
    <div class="current-weather-container" style={{ marginTop: "2%" }}>
      <div class="left">
        <img src={weatherIconLink}/>
      </div>
      <div class="center">
        <h1>{temperature}</h1>
        <h3>{weatherText}</h3>
      </div>
    </div>
  )
}

export default CurrentWeather;
