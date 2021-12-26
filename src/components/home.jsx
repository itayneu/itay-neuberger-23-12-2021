import React, { Component } from "react";
import NavBar from "./navBar";
import SearchBox from "./searchBox";
import CurrentWeather from "./currentWeather";
import { getLocationAutocomplete, getCurrentWeather, getFiveDayDailyForecast } from "../services/apiConfiguration";
import currentWeatherJSON from "../json/currentWeather.json"
import fiveDaysForecastJSON from "../json/5daysForecast.json"
import locationAutocompleteJSON from "../json/locationAutocomplete.json"
import Forecast from "./forecast";
import Location from "./location";
import Search from "./search";
import './home.css';


class Home extends Component {
    
    state = {
        locationKey: "215854",
        city: "Tel Aviv",
        area: "Tel Aviv",
        country: "Israel",
        currentWeather: "",
        dailyForecasts: []
    };
    
    async componentDidMount() {
        // const currentWeather = await getCurrentWeather(this.state.locationKey, "UvF6RxI37mEfFRKTHdXBcd49yxB0lGUj");
        const currentWeather = currentWeatherJSON;

        // const forecast = await getFiveDayDailyForecast(this.state.locationKey, "UvF6RxI37mEfFRKTHdXBcd49yxB0lGUj");
        const forecast = fiveDaysForecastJSON;
        const dailyForecasts = forecast.DailyForecasts;
        this.setState({ currentWeather, dailyForecasts });
    }
  
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">
                    <div style={{marginLeft: "1.3%", marginTop: "10%"}}>
                        <Search />
                        <Location
                            locationKey = {this.state.locationKey}
                            city = {this.state.city}
                            area = {this.state.area}
                            country = {this.state.country}
                        />
                        <CurrentWeather currentWeather = {this.state.currentWeather} />
                        <Forecast dailyForecasts={this.state.dailyForecasts} />
                    </div>
                </div> 
            </React.Fragment>
        );
      }
    }

export default Home;
