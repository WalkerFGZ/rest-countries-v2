import CountryCard from "./CountryCard";

const ListCountries = () => {
  return (
    <div className=" w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 justify-items-stretch">
        <CountryCard
          flag={"https://flagcdn.com/de.svg"}
          name="Germany"
          population={81770900}
          region="Europe"
          capital="Berlin"
        />
        <CountryCard
          flag={"https://flagcdn.com/de.svg"}
          name="Germany"
          population={81770900}
          region="Europe"
          capital="Berlin"
        />
        <CountryCard
          flag={"https://flagcdn.com/de.svg"}
          name="Germany"
          population={81770900}
          region="Europe"
          capital="Berlin"
        />
        <CountryCard
          flag={"https://flagcdn.com/de.svg"}
          name="Germany"
          population={81770900}
          region="Europe"
          capital="Berlin"
        />
        <CountryCard
          flag={"https://flagcdn.com/de.svg"}
          name="Germany"
          population={81770900}
          region="Europe"
          capital="Berlin"
        />
      </div>
    </div>
  );
};

export default ListCountries;

//  {data.map((country) => (
//         <div key={country.name.common}>{country.name.common}</div>
//       ))}
