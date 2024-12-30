import React, { useState } from "react";

const SearchCatalog = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("tier"); // Add state for dropdown value

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // Update category based on dropdown selection
  };

  const handleSearch = () => {
    console.log("Search query: ", query.trim(), "Category: ", category);
  };

  return (
    <div className="flex items-center w-2/3">
      <select
        value={category}
        onChange={handleCategoryChange}
        className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="tier">Tier</option>
        <option value="parts">Parts</option>
      </select>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={"Search..."}
        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchCatalog;
