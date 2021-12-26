import React, { Component } from "react";
import NavBar from "./navBar";
import { toast } from "react-toastify";
import { getLocationAutocomplete, getCurrentWeather, getFiveDayDailyForecast } from "../services/apiConfiguration";
import locationAutocompleteJSON from "../json/locationAutocomplete.json"
import CurrentWeatherJSON from "../json/currentWeather.json";
import Location from "./location";
import CurrentWeather from "./currentWeather";

const favorites = locationAutocompleteJSON;
const currentWeather = CurrentWeatherJSON

class Favorites extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">
                    <div style={{marginLeft: "1.3%", marginTop: "10%"}}>
                        {favorites.map((result, index) => (
                            <div key={index}>
                            <Location
                                city={result.LocalizedName}
                                area={result.AdministrativeArea.LocalizedName}
                                country={result.Country.LocalizedName}
                            />
                            <CurrentWeather currentWeather = {currentWeather} />
                            </div>
                        ))}
                        {/* <Forecast dailyForecasts={this.state.dailyForecasts} /> */}
                    </div>
                </div> 
            </React.Fragment>
        );
      }
    }

export default Favorites;
