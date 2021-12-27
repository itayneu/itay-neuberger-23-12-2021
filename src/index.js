import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import throttle from 'lodash/throttle';
import rootReducer from './redux/rootReducer';
import * as serviceWorker from "./serviceWorker";
import { loadState, saveState } from "./localStorage"
import "bootstrap/dist/css/bootstrap.css";
import "mdbreact/dist/css/mdb.css";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { composeWithDevTools } from 'redux-devtools-extension';


const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
