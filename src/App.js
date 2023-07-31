import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokeList from "./Components/PokeList/PokeList";
import PokeInfo from "./Components/PokeInfo/PokeInfo";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
        </header>
        <Switch>
          <Route exact path="/">
            <PokeList />
          </Route>
          <Route path="/search">
            {/* Create the search component */}
          </Route>
          <Route path="/pokemon/:name">
            <PokeInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
