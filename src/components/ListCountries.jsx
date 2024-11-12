const ListCountries = () => {
  return (
    <section className="bg-red-500">
      <div>
        <h1 className="text-homepage-items">Countries</h1>
        <p className="text-detail-page">Detail Page Text</p>
      </div>
    </section>
  );
};

export default ListCountries;

//  {data.map((country) => (
//         <div key={country.name.common}>{country.name.common}</div>
//       ))}
