import { combineReducers } from "redux";

import favoriteReducer from "./Favorites/favorites-reducer"

const rootReducer = combineReducers({
    favorite: favoriteReducer,
});

export default rootReducer;