import { Link } from "react-router-dom";
import React, { Component } from "react";


class NavBar extends Component { 
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link
          className="navbar-brand"
          to="/home"
          style={{
            color: "white",
            marginLeft: "2%",
            marginRight: "2%",
            paddingTop: "0.1%",
            fontSize: "26px",
            fontWeight: "bold",
            textAnchor: "middle",
            userSelect: "none",
          }}
        >
          Herolo Weather Task
        </Link>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li style={{ marginRight: "15px" }} 
                className="nav-item active">
              <Link className="nav-link" to="/home">
                {" "}
                <b> Home </b> <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li style={{ marginRight: "15px" }} 
                className="nav-item active">
              <Link className="nav-link" to="/favorites">
                {" "}
                <b> Favorites </b> <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
