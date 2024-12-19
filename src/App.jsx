import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import ListCountries from "./components/ListCountries";
import ManageCountries from "./components/ManageCountries";
import { useGetCountriesQuery } from "./services/countries";

function App() {
  const location = useLocation();
  const isCountryDetail = location.pathname.startsWith("/country/");

  const { data, error, isLoading } = useGetCountriesQuery();
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    const filtered = data.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("filter", filtered);
    setFilteredCountries(filtered);
  };

  const handleFilterByRegion = (region) => {
    const filtered = data.filter((country) =>
      country.continents.some((continent) =>
        continent.toLowerCase().includes(region.toLowerCase())
      )
    );
    setFilteredCountries(filtered);
  };

  useEffect(() => {
    setFilteredCountries(data);
  }, [data]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="min-h-100vh w-full flex flex-col justify-start items-center font-nunito-sans">
      <Header handleSearch={handleSearch} />
      <section className="max-w-1440 w-full flex justify-center flex-col pl-11 pr-11 xl:pl-2 xl:pr-2">
        {!isCountryDetail && (
          <ManageCountries
            handleSearch={handleSearch}
            handleFilterByRegion={handleFilterByRegion}
          />
        )}

        <Routes>
          <Route
            path="/"
            element={<ListCountries countries={filteredCountries} />}
          />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
