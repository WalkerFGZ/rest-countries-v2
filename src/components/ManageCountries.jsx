/* eslint-disable react/prop-types */

import SearchBar from "./SearchBar";
import SelectCountry from "./SelectCounty";

const ManageCountries = ({ handleSearch, handleFilterByRegion }) => {
  return (
    <div className="flex justify-between items-center w-full mt-12 mb-16">
      <SearchBar handleSearch={handleSearch} />
      <SelectCountry handleFilterByRegion={handleFilterByRegion} />
    </div>
  );
};

export default ManageCountries;
