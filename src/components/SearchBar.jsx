import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          className="w-full h-16 text-lg py-2 pl-10 pr-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search for a country..."
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FiSearch className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
