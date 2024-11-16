import { useGetCountriesQuery } from "../services/countries";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { name } = useParams();
  const { data } = useGetCountriesQuery();
  const country = data.find(
    (country) => country.cca3.toLowerCase() === name.toLowerCase()
  );
  console.log(country);
  return <>country detail {name}</>;
};

export default CountryDetails;
