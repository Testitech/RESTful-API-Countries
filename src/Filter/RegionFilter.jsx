import { useState } from "react";
import CountriesData from "../db/data.json";

export default function RegionFilter({ onFilter }) {
  const [selectedRegion, setSelectedRegion] = useState("");

  const regions = [
    "All",
    "Asia",
    "Africa",
    "Americas",
    "Oceania",
    "Polar",
    "Europe",
  ];

  const filteredRegion = (region) => {
    setSelectedRegion(region);
    if (region === "All") {
      onFilter(CountriesData); // Pass data back to parent
    } else {
      const updatedRegion = CountriesData.filter((r) => r.region === region);
      onFilter(updatedRegion); // Pass filtered data back to parent
    }
  };

  return (
    <div className="relative mb-24 font-bold font-[Nunito sans]">
      <select
        value={selectedRegion}
        onChange={(e) => filteredRegion(e.target.value)}
        className="absolute hover:bg-gray-100 dark:hover:bg-slate-500 lg:left-[1100px] md:left-22 left-6 lg:top-5 top-16 p-2 rounded dark:text-white text-black bg-white dark:bg-slate-700 cursor-pointer outline-0 focus-within:outline-0"
      >
        <option
          className="text-black dark:text-white font-[Nunito sans] font-bold"
          value=""
          disabled
          hidden
        >
          Filter by Region
        </option>
        {regions.map((region) => (
          <option
            key={region}
            value={region}
            className="cursor-pointer border-none font-semibold font-[Nunito sans] rounded-b-md"
          >
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}
