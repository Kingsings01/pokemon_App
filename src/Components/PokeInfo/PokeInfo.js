import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokeInfo.css";

const PokeDetail = ({ selectedPokemon }) => {
  // State to store the Pokemon's details
  const [pokeData, setPokeData] = useState(null);

  // Function to fetch the selected Pokemon's data from the API
  const fetchPokeData = async () => {
    try {
      const response = await axios.get(selectedPokemon.url);
      setPokeData(response.data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    if (selectedPokemon) {
      fetchPokeData();
    }
  }, [selectedPokemon]);

  // Render the Pokemon details
  return (
    <div className="pokemon-detail">
      {pokeData ? (
        <div>
          <h2>{pokeData.name}</h2>
          {/* Display other details of the Pokemon */}
        </div>
      ) : (
        <p>Loading Page...</p>
      )}
    </div>
  );
};

export default PokeDetail;
