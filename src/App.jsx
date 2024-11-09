import "./App.css";

import { useGetCountriesQuery } from "./services/countries";

function App() {
  const { data, error, isLoading } = useGetCountriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((country) => (
        <div key={country.name.common}>{country.name.common}</div>
      ))}
    </div>
  );
}

export default App;
