import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokeInfo.css";

const PokemonDetail = ({ selectedPokemon }) => {
  // State to store the Pokemon's details
  const [pokemonData, setPokemonData] = useState(null);

  // Function to fetch the selected Pokemon's data from the API
  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(selectedPokemon.url);
      setPokemonData(response.data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    if (selectedPokemon) {
      fetchPokemonData();
    }
  }, [selectedPokemon]);

  // Render the Pokemon details
  return (
    <div className="pokemon-detail">
      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          {/* Display other details of the Pokemon */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetail;
