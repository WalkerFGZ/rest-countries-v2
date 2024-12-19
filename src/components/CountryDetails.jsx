import { useNavigate, useParams } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import { useGetCountriesQuery } from "../services/countries";

const CountryDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data } = useGetCountriesQuery();
  const country = data.find(
    (country) => country.cca3.toLowerCase() === name.toLowerCase()
  );

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="flex flex-col">
      <button
        onClick={handleBack}
        className="flex items-center gap-2 px-8 py-2 dark:bg-dark-blue-elements dark:text-white bg-white shadow-md rounded-lg w-fit hover:bg-gray-50 transition-colors my-16"
      >
        <FiArrowLeft size={20} />
        <span>Back</span>
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2 mt-10 dark:text-white">
        <div className="">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full h-full object-cover max-w-xl max-h-[450px]"
          />
        </div>
        <div className="">
          <h2 className="text-3xl font-bold mb-10 mt-12">
            {country.name.common}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-20">
            <div className="flex flex-col gap-2">
              <p className="country-detail">
                Native Name:
                <span>{country.name.official}</span>
              </p>
              <p className="country-detail">
                Population:
                <span>{country.population.toLocaleString()}</span>
              </p>
              <p className="country-detail">
                Region:
                <span>{country.region}</span>
              </p>
              <p className="country-detail">
                Sub Region:
                <span>{country.subregion}</span>
              </p>
              <p className="country-detail">
                Capital:
                <span>{country.capital[0]}</span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="country-detail">
                Top Level Domain:
                <span>{country.tld}</span>
              </p>
              <p className="country-detail">
                Currencies:
                <span>
                  {Object.values(country.currencies)
                    ?.map((currency) => `${currency.name}`)
                    ?.join(", ") || ""}
                </span>
              </p>
              <p className="country-detail">
                Languages:
                <span>
                  {Object?.values(country.languages)?.join(", ") || ""}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="country-detail">
              border countries: {country?.borders?.join(", ") || "none"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
