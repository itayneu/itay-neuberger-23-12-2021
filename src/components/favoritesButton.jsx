import React from "react";
import { connect } from "react-redux"
import { addToFavorites, removeFromFavorites } from "../redux/Favorites/favorites-actions"


const FavoritesButton = ({ locationData, inFavorites, addToFavorites, removeFromFavorites }) => {

    const onClick = inFavorites 
    ? () => removeFromFavorites(locationData.Key)
    : () => addToFavorites(locationData.Key);

    const buttonName = (inFavorites) ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>

    return (
        <div>
            <button
                id={locationData.Key}
                className="btn btn-sm"
                style={{ display:"inline-block" }}
                onClick={onClick}
            >
                {buttonName}
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToFavorites: (locationKey) => dispatch(addToFavorites(locationKey)),
        removeFromFavorites: (locationKey) => dispatch(removeFromFavorites(locationKey)),
    };
};

export default connect(null, mapDispatchToProps)(FavoritesButton);
