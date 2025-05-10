import { Link } from "react-router-dom";

export default function Cards({ flag, name, population, capital, region }) {
  return (
    <>
      <div className="flex flex-col lg:w-[300px] md:w-[300px] w-full mb-9 md:mb-0 bg-white dark:bg-slate-700 rounded-lg font-[Nunito sans] cursor-pointer hover:shadow-md">
        <Link to={`/details/${name}`}>
          <div className="">
            <div className="w-full h-48">
              <img
                src={flag}
                alt="img"
                className="w-full h-full object-cover rounded-t-lg"
                loading="lazy"
              />
            </div>
            <div className="mx-8 my-7">
              <h1 className="text-black dark:text-white font-bold mb-3">
                {name}
              </h1>
              <p className="text-sm font-semibold text-slate-white mb-1">
                Poupulation:
                <span className="text-slate-700 dark:text-slate-100 text-xs">
                  {" "}
                  {population}
                </span>
              </p>
              <p className="text-sm font-semibold text-slate-white mb-1">
                Capital:{" "}
                <span className="text-slate-700 dark:text-slate-100 text-xs">
                  {capital}
                </span>
              </p>
              <p className="text-sm font-semibold text-slate-white">
                Region:{" "}
                <span className="text-slate-700 dark:text-slate-100 text-xs">
                  {region}
                </span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
