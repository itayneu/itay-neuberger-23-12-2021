import React from "react";
import Search from "./search/search";
import { connect } from 'react-redux';
import Weather from "./weather/weather";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Home = ({ currentLocation, showWeather }) => {
    return (
        <div class="container">
            <div style={{marginLeft: "1.3%", marginTop: "10%"}}>
            <ToastContainer />
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
        currentLocation: state.weather.currentLocation,
        showWeather: state.weather.showWeather,
    };
};

export default connect(mapStateToProps)(Home);
