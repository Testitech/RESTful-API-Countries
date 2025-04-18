import { Link, useParams } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../Header/Header";
import CountriesData from "../db/data.json";

export default function Details() {
  const { name } = useParams();

  const countryData = CountriesData.find(
    (country) =>
      country.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );

  return (
    <ThemeProvider>
      <div className="dark:bg-slate-700 md:h-screen min-h-[800px] font-[Nunito sans] overflow-hidden">
        <Header />

        <div className="md:place-content-center">
          <Link to="/">
            <div className="bg-white dark:bg-slate-700 flex justify-center items-center dark:border-3 border-2 dark:border-slate-800 border-gray-200 shadow-md gap-x-2 lg:mx-24 md:mx-24 mx-6 rounded-md w-28 p-1 mt-[60px]">
              <span className="text-lg text-gray-800 dark:text-slate-100">
                <FaArrowLeft />
              </span>
              <div className="text-gray-800 dark:text-slate-100 font-medium">
                Back
              </div>
            </div>
          </Link>

          {!countryData ? (
            <div className="text-center mt-20 text-gray-600 dark:text-slate-100">
              Country not found. Try going back.
            </div>
          ) : (
            <div className="md:flex md:items-center lg:mx-24 md:mx-24 mx-6 lg:mt-16 md:mt-0 sm:mt-10 mt-10 gap-x-28">
              {/* Flag Section */}
              <div className="w-[450px] h-[300px] bg-white dark:bg-slate-700 shadow-md">
                <div className="flex justify-center w-[450px]">
                  <img
                    src={countryData.flags?.svg}
                    className="object-cover w-full h-[300px]"
                    alt={`Flag of ${countryData.name}`}
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="flex flex-col md:relative top-[150px] lg:relative lg:top-0">
                <div className="lg:flex gap-x-28">
                  <div className="space-y-3">
                    <h1 className="font-bold text-xl mb-10">
                      {countryData.name}
                    </h1>

                    <p className="font-bold text-gray-700 dark:text-white">
                      Native Name:{" "}
                      <span className="text-gray-500 dark:text-slate-100 font-medium">
                        {countryData.nativeName || "N/A"}
                      </span>
                    </p>

                    <p className="font-bold text-gray-700 dark:text-white">
                      Population:{" "}
                      <span className="text-gray-500 dark:text-slate-100 font-medium">
                        {countryData.population?.toLocaleString() || "N/A"}
                      </span>
                    </p>

                    <p className="font-bold text-gray-700 dark:text-white">
                      Region:{" "}
                      <span className="text-gray-500 dark:text-slate-100 font-medium">
                        {countryData.region || "N/A"}
                      </span>
                    </p>

                    <p className="font-bold text-gray-700 dark:text-white">
                      Sub Region:{" "}
                      <span className="text-gray-500 dark:text-slate-100 font-medium">
                        {countryData.subregion || "N/A"}
                      </span>
                    </p>

                    <p className="font-bold text-gray-700 dark:text-white">
                      Capital:{" "}
                      <span className="text-gray-500 dark:text-slate-100 font-medium">
                        {countryData.capital || "N/A"}
                      </span>
                    </p>
                  </div>

                  <div className="space-y-3 mt-16">
                    <p className="font-bold text-gray-700 dark:text-white">
                      Top Level Domain:{" "}
                      <span className="text-gray-500 dark:text-slate-100 font-medium">
                        {countryData.topLevelDomain?.join(", ") || "N/A"}
                      </span>
                    </p>

                    <p className="font-bold text-gray-700 dark:text-white">
                      Currencies:{" "}
                      <span className="text-gray-500 dark:text-slate-100 font-medium">
                        {countryData.currencies?.[0]?.name || "N/A"}
                      </span>
                    </p>

                    <p className="font-bold text-gray-700 dark:text-white">
                      Languages:{" "}
                      <span className="text-gray-500 dark:text-slate-100 font-medium">
                        {countryData.languages
                          ?.map((lang) => lang.name)
                          .join(", ") || "N/A"}
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-gray-700 dark:text-white mt-16">
                    Border Countries:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {countryData.borders?.length ? (
                      countryData.borders.map((border, index) => (
                        <span
                          key={index}
                          className="rounded-md text-gray-500 dark:text-slate-100 font-medium p-2 dark:border-0 border-2 dark:border-slate-800 border-gray-200 shadow-md"
                        >
                          {border}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 dark:text-slate-100 font-medium">
                        None
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
