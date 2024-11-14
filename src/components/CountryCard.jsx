import PropTypes from "prop-types";

const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <article className="bg-white h-335px w-full max-w-300px rounded-lg">
      <div className="h-158px">
        <img
          src={flag}
          alt={name}
          className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </article>
  );
};
CountryCard.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default CountryCard;
