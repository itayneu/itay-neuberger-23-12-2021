import React from "react";
import './location.css';

const Location = ({ locationKey, city, area, country }) => {

    const handleClick = (e) => {
        alert(e);
    };

    return (
        <div class="location-container">
            <div className="center">
                <h4>{city}</h4>
                <p>{area}, {country}</p>
            </div>
            <div className="right">
                <button
                    id={locationKey}
                    className="btn btn-sm"
                    style={{ display:"inline-block" }}
                    onClick={handleClick}
                >
                    Fav
                </button>
            </div>
        </div>  
    )
}

export default Location;