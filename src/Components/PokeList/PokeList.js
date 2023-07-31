import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokeList.css";

const PokeList = ({ pokeList }) => {
  // State to store the list of Pokemon and the current page number
  const [pokeList, setPokeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Function to fetch Pokemon data from the API
  const fetchPokeData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * 20}&limit=20`
      );
      setPokeList(response.data.results);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    fetchPokeData();
  }, [currentPage]);

  // Function to handle pagination
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="pokemon-list">
      {/* Display the list of Pokemon */}
      <ul>
        {pokeList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      {/* Pagination buttons */}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default PokeList;