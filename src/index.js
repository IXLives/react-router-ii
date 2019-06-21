import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Trinkets from "./components/Trinkets";
import Trinket from "./components/Trinket";
import "./styles.css";
import data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Jason's Trinkets</h1>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/trinkets">Trinkets</NavLink>
          </div>
        </nav>

        <Route exact path="/" 
          render={props => <Home {...props} data = {data}/>} />
        <Route exact path="/trinkets" 
          render = {props => <Trinkets {...props} data = {data}/>} />
        <Route path="/trinket/:id" 
          render = {props => <Trinket {...props} data = {data}/>} />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
