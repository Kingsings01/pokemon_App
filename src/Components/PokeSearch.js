import React, { useState } from "react";

const PokeSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search Pokemon..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default PokeSearch;
