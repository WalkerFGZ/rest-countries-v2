/* eslint-disable react/prop-types */

import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleTextChange = (text) => {
    setSearchText(text);
    handleSearch(text);
  };
  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <input
          value={searchText}
          type="text"
          className="w-full h-16 text-lg py-2 pl-10 pr-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search for a country..."
          onChange={(e) => handleTextChange(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FiSearch className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
