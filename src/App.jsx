import { ThemeProvider } from "./context/ThemeContext";
import Header from "./Header/Header";
import RegionFilter from "./Filter/RegionFilter";
import Cards from "./Cards/Cards";
import CountriesData from "./db/data.json";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const App = () => {
  const [search, setSearch] = useState("");

  const [filteredCountries, setFilteredCountries] = useState(CountriesData);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    const filteredData = CountriesData.filter((country) => {
      return country.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredCountries(filteredData);
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col overflow-hidden">
        <Header />
        <form
          role="search"
          className="md:mx-16 mx-5 md:ml-23 ml-5 mt-8 font-[Nunito sans] lg:translate-y-14 md:translate-y-0"
        >
          <div className="relative dark:text-white text-gray-500 flex items-center dark:focus-within:text-white focus-within:text-gray-600">
            <CiSearch className="absolute text-xs md:text-lg w-4 h-4 ml-3 pointer-events-none"></CiSearch>

            <input
              className="bg-white dark:bg-slate-500 md:text-sm text-xs p-2 pr-3 pl-10 md:w-[500px] sm:w-[450px] w-full dark:shadow shadow rounded border-none  focus:ring-2 focus:ring-gray-300 focus:outline-none"
              type="search"
              name="search"
              value={search}
              placeholder="Search any country..."
              aria-label="Search any country"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </div>
        </form>

        <RegionFilter onFilter={setFilteredCountries} />

        <div className="2xl:p-20 lg:p-20 md:p-20 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 gap-10 w-full h-full">
          {filteredCountries.slice(0, 100).map((countryData, index) => (
            <Cards
              key={index}
              flag={countryData.flags.svg}
              name={
                countryData?.translations?.eng?.common ||
                countryData?.name ||
                "Unknown Country"
              }
              population={countryData.population?.toLocaleString() || "Unknown"}
              capital={countryData.capital || "N/A"}
              region={countryData.region || "N/A"}
              nativeName={countryData.nativeName || "N/A"}
              subRegion={countryData.subregion || "N/A"}
              topLevelDomain={countryData.topLevelDomain || []}
              currencies={countryData.currencies || {}}
              languages={countryData.languages || {}}
              borders={countryData.borders || []}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
