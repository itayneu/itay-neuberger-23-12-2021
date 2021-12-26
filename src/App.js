import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Favorites from "./components/favorites";
import NavBar from "./components/navBar";

function App() {
  return (
    <Router>
      <div className="content">
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/home/:key" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
