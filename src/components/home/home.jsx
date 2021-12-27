import React from "react";
import Search from "./search/search";
import Weather from "./weather/weather";
import './home.css';

import { connect } from 'react-redux'

const Home = ({ currentLocation, showWeather }) => {
    return (
        <div class="container">
            <div style={{marginLeft: "1.3%", marginTop: "10%"}}>
                <Search />
                { showWeather 
                    ? <Weather locationData={currentLocation} /> 
                    : null 
                }
            </div>
        </div> 
    );
};

const mapStateToProps = (state) => {
    return {
        currentLocation: state.favorite.currentLocation,
        showWeather: state.favorite.showWeather,
    };
};

export default connect(mapStateToProps)(Home);
