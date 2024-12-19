/* eslint-disable react/prop-types */

import { useState } from "react";

const continents = [
  { value: "", label: "Filter By Region" },
  { value: "Africa", label: "Africa" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "North America", label: "North America" },
  { value: "Oceania", label: "Oceania" },
  { value: "South America", label: "South America" },
];

const SelectCountry = ({ handleFilterByRegion }) => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const handleSelectChange = (region) => {
    setSelectedRegion(region);
    handleFilterByRegion(region);
  };
  return (
    <div className="w-full flex justify-end">
      <select
        className="max-w-md h-16 text-lg py-2 pl-3 pr-10 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        defaultValue=""
        value={selectedRegion}
        onChange={(e) => handleSelectChange(e.target.value)}
      >
        {continents.map((continent) => (
          <option
            key={continent.value}
            value={continent.value}
            disabled={continent.disabled}
          >
            {continent.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCountry;
