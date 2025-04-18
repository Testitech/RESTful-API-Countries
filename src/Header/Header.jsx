import DarkModeToggler from "../Components/DarkModeToggler";

function Header() {
  return (
    <>
      <div className="shadow w-screen p-4 dark:bg-slate-800 bg-white">
        <div className="flex justify-between">
          <h2 className="flex justify-center items-center text-lg font-bold font-[Nunito sans] ml-0 md:ml-20">
            Where in the World?
          </h2>
          <div>
            <DarkModeToggler />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
