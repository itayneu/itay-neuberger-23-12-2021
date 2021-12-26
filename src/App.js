import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Favorites from "./components/favorites";

function App() {
  return (
    <div className="content">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
