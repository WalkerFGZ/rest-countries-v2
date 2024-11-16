import CountryCard from "./CountryCard";
import PropTypes from "prop-types";

const ListCountries = ({ countries }) => {
  return (
    <div className=" w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 justify-items-stretch">
        {countries.map((country) => (
          <CountryCard
            key={country.name.common}
            flag={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            slug={country.cca3}
          />
        ))}
      </div>
    </div>
  );
};

ListCountries.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default ListCountries;
