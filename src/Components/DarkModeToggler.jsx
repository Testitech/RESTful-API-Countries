import { useDarkMode } from "../context/ThemeContext";
import { CiBrightnessUp } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="dark:bg-slate-900 dark:text-white flex items-center justify-center p-2 cursor-pointer rounded-lg md:mr-16 mr-5 font-bold transition-all duration-500 hover:bg-gray-400 hover:text-gray-100"
      >
        <span className="text-lg mr-2">
          {darkMode ? <CiBrightnessUp /> : <FaMoon />}
        </span>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggler;
