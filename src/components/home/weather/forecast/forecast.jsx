import './forecast.css';
import React from "react";


const Forecast = ({ forecast }) => {
  const weekdaysList = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let weatherIcon, weatherIconLink;
  
  return (
      <div className="forecast-container" style={{ marginTop: "3%" }}>
        {forecast.map((forecast) => (
          weatherIcon = (forecast.Day.Icon < 10) ? `0${forecast.Day.Icon}` : forecast.Day.Icon, // weather icons are 2-digits, e.g., 1 -> 01
          weatherIconLink = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${weatherIcon}-s.png`,
            <div key={forecast.Link} class="col-sm-6 col-md-4" className="forecast-inner-container">
              <div class="thumbnail">
                <img src={weatherIconLink}/>
              </div>
              <div class="caption">
                <h4>{weekdaysList[new Date(forecast.Date).getDay()]}</h4>
                <p><b>{Math.round(forecast.Temperature.Maximum.Value)}&deg;</b> / {Math.round(forecast.Temperature.Minimum.Value)}&deg;</p>
              </div>
            </div>
        ))}
      </div>
  );
}

export default Forecast;
