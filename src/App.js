import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokeList from "./Components/PokeList/PokeList";
import PokeInfo from "./Components/PokeInfo/PokeInfo";
import PokeSearch from "./Components/PokeSearch";
import axios from "axios";
import "./App.css";

const App = () => {

  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0`
      );
      const allPokemon = response.data.results;

      // Filter the Pokemon based on the search query
      const filteredPokemon = allPokemon.filter((pokemon) =>
        pokemon.name.includes(query.toLowerCase())
      );

      setSearchResults(filteredPokemon);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
    // You'll need to make a new API request here to fetch the search results
    // and update the state accordingly.
  };

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
            <PokeSearch onSearch={handleSearch} />
            {/* Render the search results here */}
            {searchResults ? (
              <PokeList PokeList={searchResults} />
            ) : (
              <p>No results found.</p>
            )}
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
