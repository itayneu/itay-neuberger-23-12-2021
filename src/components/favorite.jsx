import React from 'react';
import { Link } from "react-router-dom";
import Location from "./location";

import { connect } from 'react-redux';
import { loadCurrentLocation } from '../redux/Favorites/favorites-actions';

const Favorite = ({ loadCurrentLocation, locationKey, locationData }) => {
    return (
        <div>
            {/* <Link                    
                to={{ pathname: "/home" }}
                role="button"
                onClick={() => loadCurrentLocation(locationData)}
            > */}
                <Location 
                    locationKey={locationKey} 
                    locationData={locationData}
                    currentPage="favorite"
                    to={{ pathname: "/home" }}
                    onClick={() => loadCurrentLocation(locationData)}
                />
            {/* </Link> */}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadCurrentLocation: (location) => dispatch(loadCurrentLocation(location)),
    };
};
  
export default connect(null, mapDispatchToProps)(Favorite);