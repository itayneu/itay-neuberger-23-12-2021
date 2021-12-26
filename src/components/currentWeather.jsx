import React from "react";
import './currentWeather.css';

const CurrentWeather = ({ currentWeather }) => {
  const weekdaysList = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let date, day, weatherText, weatherIcon, weatherIconLink, temperature;

  if (currentWeather) {
    date = new Date(currentWeather[0].LocalObservationDateTime);//.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
    // date = date.toString();
    // alert(date);
    // alert(currentWeather[0].LocalObservationDateTime);
    day = weekdaysList[date.getDay()];
    date = date.toString().substring(0,21);
    weatherText = currentWeather[0].WeatherText;
    weatherIcon = currentWeather[0].WeatherIcon;
    temperature = currentWeather[0].Temperature.Metric.Value;

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
          <h1>{Math.round(temperature)}&deg;</h1>
          <h3>{weatherText}</h3>
        </div>
      {/* </div> */}
      
    </div>
  )
}

export default CurrentWeather;