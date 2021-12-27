import React from "react";
import Favorite from "./favorite/favorite";
import { connect } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Favorites = ({ favorites }) => {
    if (favorites.length > 0) {
        return (
            <div className="container">
                <div style={{marginLeft: "1.3%", marginTop: "10%"}}>
                    <ToastContainer />
                    {favorites.map((favorite) => (
                        <div key={favorite.Key}>
                            <Favorite locationData={favorite} />,
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div style={{marginLeft: "1.3%", marginTop: "10%", textAlign:"center"}}>
                    <ToastContainer />
                    <h4>Favorites list is empty</h4>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        favorites: state.weather.favorites,
    };
};

export default connect(mapStateToProps)(Favorites);
