import { combineReducers } from "redux";
import weatherReducer from "./Weather/weather-reducer"


const rootReducer = combineReducers({
    weather: weatherReducer,
});

export default rootReducer;