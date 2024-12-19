import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ flag, name, population, region, capital, slug }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/country/${slug}`);
  };
  return (
    <article
      className="bg-white dark:bg-dark-blue-elements dark:text-white h-335px w-full max-w-300px rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
      onClick={handleCardClick}
    >
      <div className="h-158px">
        <img
          src={flag}
          alt={name}
          className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="font-bold">
          Population:{" "}
          <span className="font-normal">{population.toLocaleString()}</span>{" "}
        </p>
        <p className="font-bold">
          Region: <span className="font-normal">{region}</span>
        </p>
        <p className="font-bold">
          Capital: <span className="font-normal">{capital}</span>
        </p>
      </div>
    </article>
  );
};
CountryCard.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.array,
  slug: PropTypes.string.isRequired,
};

export default CountryCard;
