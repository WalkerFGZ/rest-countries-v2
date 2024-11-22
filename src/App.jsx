import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";

import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import ListCountries from "./components/ListCountries";
import ManageCountries from "./components/ManageCountries";
import { useGetCountriesQuery } from "./services/countries";

function App() {
  const location = useLocation();
  const isCountryDetail = location.pathname.startsWith("/country/");

  const { data, error, isLoading } = useGetCountriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="min-h-100vh w-full flex flex-col justify-start items-center font-nunito-sans">
      <Header />
      <section className="max-w-1440 w-full flex justify-center flex-col pl-11 pr-11 xl:pl-2 xl:pr-2">
        {!isCountryDetail && <ManageCountries />}

        <Routes>
          <Route path="/" element={<ListCountries countries={data} />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
