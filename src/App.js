import React from "react";
import Home from "./components/home/home";
import NavBar from "./components/navBar/navBar";
import Favorites from "./components/favorites/favorites";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="content">
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
