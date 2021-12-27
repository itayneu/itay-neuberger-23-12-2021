import React from "react";
import Favorite from "./favorite";
import CurrentWeather from "../currentWeather/currentWeather";
import './favorites.css';

import { connect } from 'react-redux'


const Favorites = ({ favorites }) => {
    if (favorites.length > 0) {
        return (
            <div className="container">
                <div style={{marginLeft: "1.3%", marginTop: "10%"}}>
                    {favorites.map((favorite) => (
                        // alert(favorite.LocalizedName),
                        <div key={favorite.Key}>
                            <Favorite locationData={favorite} />,
                            {/* {(favorite.Key === "623") ? null : <CurrentWeather locationKey={favorite.Key} />} */}
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {//alert("cool");//return (<div className="container"><h1>Favorites list is empty. Please add locations from home page.</h1></div>);
        return (
            <div className="container">
                <div style={{marginLeft: "1.3%", marginTop: "10%", textAlign:"center"}}>
                    <h4>Favorites list is empty</h4>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        favorites: state.favorite.favorites,
    };
};

export default connect(mapStateToProps)(Favorites);
