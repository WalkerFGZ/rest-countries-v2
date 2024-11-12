import "./App.css";

import Header from "./components/Header";
import ListCountries from "./components/ListCountries";
import { useGetCountriesQuery } from "./services/countries";

function App() {
  // const { data, error, isLoading } = useGetCountriesQuery();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="min-h-100vh w-full flex flex-col justify-start items-center font-nunito-sans">
      <Header />
      <section className="">
        <ListCountries countries={[]} />
      </section>
    </main>
  );
}

export default App;
