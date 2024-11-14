import SearchBar from "./SearchBar";
import SelectCountry from "./SelectCounty";

const ManageCountries = () => {
  return (
    <div className="flex justify-between items-center w-full mt-12 mb-16">
      <SearchBar />
      <SelectCountry />
    </div>
  );
};

export default ManageCountries;
